/**
 * Site-wide "last updated" stamp shown in the footer.
 *
 * Captured once, when this module is first evaluated. Every page on this site
 * is statically prerendered, so that happens at build time — which makes this a
 * genuine "site last deployed" date, and makes it identical on every page
 * rather than a per-request clock that would differ page to page.
 *
 * Note this tracks DEPLOYS, not content edits: a redeploy with no content
 * change still moves it. That is the right granularity for a site-wide footer
 * (the site really was rebuilt), but it is why a per-page "last updated" is a
 * different problem — see the git-date approach in `app/sitemap.ts`, which
 * deliberately emits nothing rather than a uniform fake date.
 */
const BUILT_AT = new Date();

/** ISO date (UTC), for the machine-readable `<time dateTime="…">`. */
export const BUILD_DATE_ISO = BUILT_AT.toISOString().slice(0, 10);

/** DD MMM YY, e.g. "17 Aug 26". UTC-pinned so it cannot drift by timezone. */
export const BUILD_DATE_SHORT = BUILT_AT.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "2-digit",
  timeZone: "UTC",
});
