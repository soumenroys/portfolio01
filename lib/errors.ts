// lib/errors.ts
//
// `catch (err: any)` was used in six places purely to reach `err.message`.
// TypeScript types a caught value as `unknown` for good reason — a thrown value
// can be anything, including a string or null — so this narrows it once here
// instead of asserting it away at each site.

/** Best-effort human-readable message from an unknown thrown value. */
export function errorMessage(err: unknown, fallback: string): string {
  if (err instanceof Error && err.message) return err.message;
  if (typeof err === "string" && err) return err;
  if (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    typeof (err as { message: unknown }).message === "string" &&
    (err as { message: string }).message
  ) {
    return (err as { message: string }).message;
  }
  return fallback;
}

/** Node-style error code (EACCES, EROFS, …) when present. */
export function errorCode(err: unknown): string | undefined {
  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    typeof (err as { code: unknown }).code === "string"
  ) {
    return (err as { code: string }).code;
  }
  return undefined;
}
