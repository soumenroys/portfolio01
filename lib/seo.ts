// lib/seo.ts
const SITE_URL = "https://soumenroy.com";

/** Build an absolute canonical URL from a route path. */
export function canonical(path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return new URL(clean, SITE_URL).toString();
}

/** Reusable site-wide constants for OG/Twitter images, etc. */
export const site = {
  url: SITE_URL,
  ogDefault: "/og/og-default.png", // 1200×630 under /public/og/
};
