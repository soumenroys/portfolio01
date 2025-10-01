// app/robots.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://soumenroy.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ["/admin", "/api/private"], // uncomment if needed
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
