// Run with: npm test
// Uses node:test and native TypeScript type-stripping — no test framework, no
// new dependencies. Imports relatively because the "@/" alias is a bundler
// convention that plain node does not resolve.
import { test } from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit, clientIp, escapeHtml } from "./rateLimit.ts";

test("allows exactly `limit` hits, then blocks", () => {
  const results = Array.from({ length: 7 }, () => checkRateLimit("t:budget", 5, 60_000).ok);
  assert.deepEqual(results, [true, true, true, true, true, false, false]);
});

test("keys are independent", () => {
  checkRateLimit("t:a", 1, 60_000);
  checkRateLimit("t:a", 1, 60_000); // exhausts "a"
  assert.equal(checkRateLimit("t:b", 1, 60_000).ok, true);
});

test("window expiry resets the budget", async () => {
  assert.equal(checkRateLimit("t:window", 1, 5).ok, true);
  assert.equal(checkRateLimit("t:window", 1, 5).ok, false);
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(checkRateLimit("t:window", 1, 5).ok, true);
});

test("retryAfter is a positive integer only when blocked", () => {
  const allowed = checkRateLimit("t:retry", 1, 60_000);
  assert.equal(allowed.ok, true);
  assert.equal(allowed.retryAfter, 0);

  const blocked = checkRateLimit("t:retry", 1, 60_000);
  assert.equal(blocked.ok, false);
  assert.ok(Number.isInteger(blocked.retryAfter) && blocked.retryAfter > 0);
});

test("escapeHtml neutralises markup", () => {
  assert.equal(
    escapeHtml('<script>alert("x")</script>'),
    "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;"
  );
  // Ampersand must be escaped first or later replacements double-encode.
  assert.equal(escapeHtml("a & <b>"), "a &amp; &lt;b&gt;");
  assert.equal(escapeHtml("it's"), "it&#39;s");
});

test("escapeHtml renders empty values as a dash", () => {
  for (const empty of ["", null, undefined]) {
    assert.equal(escapeHtml(empty), "—");
  }
});

test("clientIp takes the first forwarded hop", () => {
  const proxied = new Request("https://example.com/", {
    headers: { "x-forwarded-for": "1.2.3.4, 5.6.7.8" },
  });
  assert.equal(clientIp(proxied), "1.2.3.4");

  const direct = new Request("https://example.com/", {
    headers: { "x-real-ip": "9.9.9.9" },
  });
  assert.equal(clientIp(direct), "9.9.9.9");

  assert.equal(clientIp(new Request("https://example.com/")), "unknown");
});
