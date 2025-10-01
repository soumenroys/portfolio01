// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

const SITE_URL = "https://soumenroy.com";

// List the important URLs on your site.
// Add/remove items as you add pages.
const urls = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.9" },
  { path: "/case-studies/tata-steel", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies/openlm", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies/grp", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies/mn-dastur-bim", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
];

export async function GET() {
  const lastmod = new Date().toISOString();

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        ({ path, changefreq, priority }) =>
          `<url>` +
          `<loc>${SITE_URL}${path}</loc>` +
          `<lastmod>${lastmod}</lastmod>` +
          `<changefreq>${changefreq}</changefreq>` +
          `<priority>${priority}</priority>` +
          `</url>`
      )
      .join("") +
    `</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // cache for a day on the edge, allow SWR
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
