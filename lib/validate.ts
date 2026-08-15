// lib/validate.ts — minimal request-body validation for the two API routes.
//
// Deliberately dependency-free. The routes need type checks, length caps and a
// body-size ceiling, not a schema DSL; adding zod for ~40 lines of rules would
// be the largest dependency in the project for the smallest benefit. If the API
// surface grows beyond these two routes, revisit that trade.

/** Longest value we will accept for any single field. */
export const FIELD_LIMITS = {
  name: 120,
  email: 254, // RFC 5321 maximum
  contact: 40,
  company: 200,
  subject: 200,
  message: 5000,
  comments: 5000,
  otp: 6,
  otpToken: 1024,
  downloadUrl: 300,
} as const;

/** Whole-body ceiling, guarding against a multi-megabyte POST. */
export const MAX_BODY_BYTES = 32 * 1024;

export type FieldName = keyof typeof FIELD_LIMITS;

export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// C0/C1 control characters plus CR. Tab (0x09) and LF (0x0A) are kept because
// message bodies legitimately contain them. CR (0x0D) is stripped on purpose: a
// bare carriage return in a field is what enables SMTP header injection once the
// value reaches an email envelope.
//
// Expressed numerically rather than as a regex character class so the source
// stays pure ASCII and cannot be corrupted by an editor or a copy/paste.
function isControlChar(code: number): boolean {
  if (code === 0x09 || code === 0x0a) return false; // keep tab and newline
  if (code <= 0x1f) return true;                    // C0, including CR
  if (code >= 0x7f && code <= 0x9f) return true;    // DEL and C1
  return false;
}

/** Strip control characters and surrounding whitespace. */
function clean(input: string): string {
  let out = "";
  for (const ch of input) {
    if (!isControlChar(ch.codePointAt(0) ?? 0)) out += ch;
  }
  return out.trim();
}

/**
 * Validate a single string field.
 *
 * Returns the cleaned value. `required` fields reject empty input; optional
 * fields coerce absent/blank to "".
 */
export function field(
  value: unknown,
  name: FieldName,
  opts: { required?: boolean } = {}
): ValidationResult<string> {
  if (value === undefined || value === null || value === "") {
    if (opts.required) return { ok: false, error: `${name} is required` };
    return { ok: true, value: "" };
  }

  if (typeof value !== "string") {
    return { ok: false, error: `${name} must be text` };
  }

  const cleaned = clean(value);

  if (opts.required && cleaned.length === 0) {
    return { ok: false, error: `${name} is required` };
  }

  if (cleaned.length > FIELD_LIMITS[name]) {
    return { ok: false, error: `${name} is too long (max ${FIELD_LIMITS[name]} characters)` };
  }

  return { ok: true, value: cleaned };
}

/** Validate an email address: shape, length, and no embedded control characters. */
export function emailField(
  value: unknown,
  opts: { required?: boolean } = {}
): ValidationResult<string> {
  const base = field(value, "email", opts);
  if (!base.ok) return base;
  if (base.value === "") return base;

  const normalised = base.value.toLowerCase();
  if (!EMAIL_RE.test(normalised)) {
    return { ok: false, error: "Please enter a valid email address" };
  }
  return { ok: true, value: normalised };
}

/**
 * Read and parse a JSON body, rejecting anything over MAX_BODY_BYTES.
 *
 * Checks Content-Length first, then measures the actual text, since the header
 * is client-supplied and may be absent or wrong.
 */
export async function readJsonBody(
  req: Request
): Promise<ValidationResult<Record<string, unknown>>> {
  const declared = Number(req.headers.get("content-length") ?? "0");
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    return { ok: false, error: "Request body too large" };
  }

  let text: string;
  try {
    text = await req.text();
  } catch {
    return { ok: false, error: "Could not read request body" };
  }

  if (Buffer.byteLength(text, "utf8") > MAX_BODY_BYTES) {
    return { ok: false, error: "Request body too large" };
  }

  try {
    const parsed = JSON.parse(text);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { ok: false, error: "Request body must be a JSON object" };
    }
    return { ok: true, value: parsed as Record<string, unknown> };
  } catch {
    return { ok: false, error: "Request body must be valid JSON" };
  }
}
