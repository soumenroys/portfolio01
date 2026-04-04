// lib/otp.ts — stateless OTP signing/verification (serverless-safe)
import crypto from "crypto";

const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes

function getSecret() {
  return process.env.OTP_SECRET || process.env.SMTP_PASS || "portfolio-otp-secret";
}

export function signOtpToken(email: string, otp: string): string {
  const exp = Date.now() + OTP_TTL_MS;
  const payload = `${email}|${otp}|${exp}`;
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

    const [tEmail, tOtp, tExp, tSig] = parts;
    const payload = `${tEmail}|${tOtp}|${tExp}`;
    const expectedSig = crypto
      .createHmac("sha256", getSecret())
      .update(payload)
      .digest("hex");

    if (tSig !== expectedSig) return { ok: false, reason: "invalid signature" };
    if (Date.now() > Number(tExp)) return { ok: false, reason: "code expired" };
    if (tEmail.toLowerCase() !== email.toLowerCase())
      return { ok: false, reason: "email mismatch" };
    if (tOtp !== otp) return { ok: false, reason: "incorrect code" };

    return { ok: true };
  } catch {
    return { ok: false, reason: "invalid token" };
  }
}
