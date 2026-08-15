// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { signOtpToken, verifyOtpToken } from "./otp.ts";

process.env.OTP_SECRET ??= "test-secret-not-used-in-production";

const EMAIL = "visitor@example.com";
const OTP = "123456";

test("a correctly issued code verifies", () => {
  const token = signOtpToken(EMAIL, OTP);
  assert.deepEqual(verifyOtpToken(token, EMAIL, OTP), { ok: true });
});

test("the token does NOT leak the code — the original bypass", () => {
  const token = signOtpToken(EMAIL, OTP);
  const decoded = Buffer.from(token, "base64url").toString("utf8");

  // This is exactly what defeated the old scheme: read the code straight out
  // of the token that send-otp hands the browser.
  assert.ok(!decoded.includes(OTP), "plaintext OTP must not appear in the token");

  // And the recovered field must not be usable as the code either.
  const recovered = decoded.split("|")[1];
  assert.notEqual(recovered, OTP);
  assert.equal(verifyOtpToken(token, EMAIL, recovered).ok, false);
});

test("a wrong code is rejected", () => {
  const token = signOtpToken(EMAIL, OTP);
  assert.equal(verifyOtpToken(token, EMAIL, "999999").ok, false);
  assert.equal(verifyOtpToken(token, EMAIL, "999999").reason, "incorrect code");
});

test("a token issued for one address can't be replayed against another", () => {
  const token = signOtpToken(EMAIL, OTP);
  const result = verifyOtpToken(token, "attacker@example.com", OTP);
  assert.equal(result.ok, false);
});

test("tampering with any field invalidates the signature", () => {
  const token = signOtpToken(EMAIL, OTP);
  const parts = Buffer.from(token, "base64url").toString("utf8").split("|");

  // Push the expiry far into the future — the classic forge attempt.
  parts[2] = String(Date.now() + 99_999_999);
  const forged = Buffer.from(parts.join("|")).toString("base64url");

  assert.equal(verifyOtpToken(forged, EMAIL, OTP).reason, "invalid signature");
});

test("an expired token is rejected", () => {
  const token = signOtpToken(EMAIL, OTP);
  const parts = Buffer.from(token, "base64url").toString("utf8").split("|");
  parts[2] = "1"; // 1970
  // Re-sign so we're testing expiry, not the signature check.
  const payload = `${parts[0]}|${parts[1]}|${parts[2]}`;
  const sig = crypto
    .createHmac("sha256", process.env.OTP_SECRET!)
    .update(payload)
    .digest("hex");
  const expired = Buffer.from(`${payload}|${sig}`).toString("base64url");

  assert.equal(verifyOtpToken(expired, EMAIL, OTP).reason, "code expired");
});

test("malformed tokens fail closed", () => {
  for (const bad of ["", "not-base64!!", "YWJj", Buffer.from("a|b|c").toString("base64url")]) {
    assert.equal(verifyOtpToken(bad, EMAIL, OTP).ok, false);
  }
});
