// lib/rateLimit.ts — in-process sliding-window rate limiter.
//
// Scope caveat: state lives in module memory, so on Vercel each serverless
// instance keeps its own counters and a distributed attacker gets roughly
// (limit x instance count). That is a large improvement over no limit at all
// and costs no infrastructure, but it is not a hard guarantee. If abuse
// actually materialises, swap the store for Redis/Upstash — the call sites
// only depend on the checkRateLimit() signature, not on this Map.

type Hit = { count: number; resetAt: number };

const buckets = new Map<string, Hit>();

// Bound memory: drop expired entries whenever the map grows past this.
const SWEEP_THRESHOLD = 5_000;

function sweep(now: number) {
  for (const [key, hit] of buckets) {
    if (hit.resetAt <= now) buckets.delete(key);
  }
}

export type RateLimitResult = {
  ok: boolean;
  /** Seconds until the window resets. Only meaningful when ok is false. */
  retryAfter: number;
};

/**
 * Records a hit against `key` and reports whether it is within budget.
 *
 * @param key    Caller-namespaced identity, e.g. `send-otp:ip:1.2.3.4`.
 * @param limit  Allowed hits per window.
 * @param windowMs Window length in milliseconds.
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();

  if (buckets.size > SWEEP_THRESHOLD) sweep(now);

  const hit = buckets.get(key);

  if (!hit || hit.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  hit.count += 1;

  if (hit.count > limit) {
    return { ok: false, retryAfter: Math.ceil((hit.resetAt - now) / 1000) };
  }

  return { ok: true, retryAfter: 0 };
}

/** Best-effort client IP from proxy headers. Falls back to a shared bucket. */
export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/** Escape untrusted text before interpolating it into an HTML email body. */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined || value === "") return "—";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
