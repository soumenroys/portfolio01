// app/sitemap.ts — served at /sitemap.xml via Next's metadata convention.
//
// Routes are discovered by walking the app directory at build time rather than
// being hand-listed, so a new page cannot be silently omitted. This file is
// force-static: the walk happens during `next build`, where the source tree is
// guaranteed present, never in a serverless request.
import type { MetadataRoute } from "next";
import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { site } from "@/lib/seo";

export const dynamic = "force-static";

const APP_DIR = path.join(process.cwd(), "app");

/** Route segments that never belong in a sitemap. */
const EXCLUDED = new Set(["api", "og", "sitemap.xml"]);

/**
 * Priority and change frequency by route. Anything unlisted falls back to a
 * depth-derived default, so forgetting to add an entry degrades gracefully
 * instead of dropping the URL.
 */
const ROUTE_META: Record<string, { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = {
  "/": { changeFrequency: "monthly", priority: 1.0 },
  "/experience": { changeFrequency: "monthly", priority: 0.9 },
  "/expertise": { changeFrequency: "monthly", priority: 0.9 },
  "/case-studies": { changeFrequency: "monthly", priority: 0.9 },
  "/approach": { changeFrequency: "monthly", priority: 0.8 },
  "/publications": { changeFrequency: "monthly", priority: 0.8 },
  "/imotara": { changeFrequency: "monthly", priority: 0.8 },
  "/roi": { changeFrequency: "monthly", priority: 0.7 },
  "/talks": { changeFrequency: "monthly", priority: 0.6 },
  "/transformations": { changeFrequency: "yearly", priority: 0.5 },
  "/teams-led": { changeFrequency: "yearly", priority: 0.5 },
  "/countries": { changeFrequency: "yearly", priority: 0.5 },
  "/platforms-built": { changeFrequency: "yearly", priority: 0.5 },
  "/contact": { changeFrequency: "yearly", priority: 0.5 },
};

function defaultMeta(route: string) {
  // Case-study detail pages are the main unlisted group; keep them above the
  // yearly stat pages without needing an entry each.
  const depth = route.split("/").filter(Boolean).length;
  return { changeFrequency: "monthly" as const, priority: depth >= 2 ? 0.7 : 0.6 };
}

/** Recursively collect route paths from page.tsx files, stripping route groups. */
function collectRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];
  let entries: fs.Dirent[];

  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  if (entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))) {
    routes.push("/" + segments.join("/"));
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    if (EXCLUDED.has(name) || name.startsWith("_") || name.startsWith(".")) continue;

    // (group) segments organise files without affecting the URL.
    const isRouteGroup = name.startsWith("(") && name.endsWith(")");
    // Dynamic segments would need real params to enumerate; none exist today.
    if (name.startsWith("[")) continue;

    routes.push(
      ...collectRoutes(
        path.join(dir, name),
        isRouteGroup ? segments : [...segments, name]
      )
    );
  }

  return routes;
}

/**
 * Last commit date per file, or null when we cannot answer honestly.
 *
 * A shallow clone (common in CI) reports the same commit for every file, which
 * would make every page claim it changed on the last deploy. That is exactly
 * the misinformation the previous `new Date()` implementation produced, so we
 * omit lastmod entirely rather than emit a plausible-looking lie.
 */
function lastModified(filePath: string): Date | null {
  try {
    const shallow = execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (shallow !== "false") return null;

    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", filePath], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    return iso ? new Date(iso) : null;
  } catch {
    return null;
  }
}

/** Resolve a route back to the page file that produces it, for the git lookup. */
function pageFileFor(route: string): string | null {
  const candidates =
    route === "/"
      ? [path.join(APP_DIR, "page.tsx")]
      : [
          path.join(APP_DIR, "(site)", ...route.split("/").filter(Boolean), "page.tsx"),
          path.join(APP_DIR, ...route.split("/").filter(Boolean), "page.tsx"),
        ];

  return candidates.find((candidate) => fs.existsSync(candidate)) ?? null;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set(collectRoutes(APP_DIR))).sort();

  return routes.map((route) => {
    const meta = ROUTE_META[route] ?? defaultMeta(route);
    const pageFile = pageFileFor(route);
    const modified = pageFile ? lastModified(pageFile) : null;

    return {
      url: new URL(route, site.url).toString(),
      ...(modified ? { lastModified: modified } : {}),
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    };
  });
}
