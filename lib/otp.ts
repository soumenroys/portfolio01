// lib/otp.ts — stateless OTP signing/verification (serverless-safe)
import crypto from "crypto";

const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes

let warnedAboutFallback = false;

/**
 * Signing key for OTP tokens.
 *
 * OTP_SECRET is the only correct source. The SMTP_PASS fallback exists so that
 * deployments predating OTP_SECRET keep working, but it couples token validity
 * to a credential rotated for unrelated reasons — rotating SMTP silently
 * invalidates every in-flight code. The previous hardcoded literal fallback is
 * gone: it shipped in a public repo, so anyone could have forged tokens if both
 * env vars were ever absent.
 */
function getSecret(): string {
  const secret = process.env.OTP_SECRET;
  if (secret) return secret;

  const legacy = process.env.SMTP_PASS;
  if (legacy) {
    if (!warnedAboutFallback) {
      warnedAboutFallback = true;
      console.warn(
        "[otp] OTP_SECRET is not set; falling back to SMTP_PASS. Set OTP_SECRET " +
          "to decouple token signing from the mail credential."
      );
    }
    return legacy;
  }

  throw new Error(
    "OTP signing secret is not configured. Set OTP_SECRET in the environment."
  );
}

/**
 * Hash of the code, bound to the address it was issued for.
 *
 * The token travels to the browser, so it must never contain the code itself.
 * An earlier version embedded the plaintext OTP, which meant anyone could call
 * send-otp, base64-decode the response and read the code without ever seeing
 * the email — the gate verified nothing. Salting with the email stops a token
 * issued for one address being replayed against another even before the
 * explicit email check below.
 */
function hashOtp(email: string, otp: string): string {
  return crypto
    .createHash("sha256")
    .update(`${email.toLowerCase()}|${otp}`)
    .digest("hex");
}

/** Constant-time compare of two hex strings of equal expected length. */
function safeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(a, "hex"), Buffer.from(b, "hex"));
  } catch {
    return false;
  }
}

export function signOtpToken(email: string, otp: string): string {
  const exp = Date.now() + OTP_TTL_MS;
  const normalised = email.toLowerCase();
  const payload = `${normalised}|${hashOtp(normalised, otp)}|${exp}`;
  const sig = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
  return Buffer.from(`${payload}|${sig}`).toString("base64url");
}

export function verifyOtpToken(
  token: string,
  email: string,
  otp: string
): { ok: boolean; reason?: string } {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const parts = decoded.split("|");
    if (parts.length !== 4) return { ok: false, reason: "invalid token" };

    const [tEmail, tOtpHash, tExp, tSig] = parts;
    const payload = `${tEmail}|${tOtpHash}|${tExp}`;
    const expectedSig = crypto
      .createHmac("sha256", getSecret())
      .update(payload)
      .digest("hex");

    // Constant-time so the signature can't be recovered byte-by-byte via timing.
    if (!safeEqualHex(tSig, expectedSig)) return { ok: false, reason: "invalid signature" };

    const exp = Number(tExp);
    if (!Number.isFinite(exp)) return { ok: false, reason: "invalid token" };
    if (Date.now() > exp) return { ok: false, reason: "code expired" };
    if (tEmail.toLowerCase() !== email.toLowerCase())
      return { ok: false, reason: "email mismatch" };
    if (!safeEqualHex(tOtpHash, hashOtp(email, otp)))
      return { ok: false, reason: "incorrect code" };

    return { ok: true };
  } catch {
    return { ok: false, reason: "invalid token" };
  }
}
