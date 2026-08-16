// lib/writing.ts — registry for the writing section.
//
// Metadata lives here so the index, the sitemap and each article's own schema
// all read from one source. Article prose stays in its own page.tsx, matching
// how the rest of this site keeps content.

export type Article = {
  slug: string;
  title: string;
  /** One-sentence standfirst shown on the index and used as the meta description. */
  dek: string;
  /** ISO date. Used for datePublished in Article schema and for ordering. */
  published: string;
  readingMinutes: number;
  tags: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "before-approving-a-platform-rewrite",
    title: "What I check before approving a platform rewrite",
    dek:
      "Most rewrite proposals I have seen were arguments about code that were really arguments about something else. Five questions that surface which one you have.",
    published: "2026-08-16",
    readingMinutes: 6,
    tags: ["Platform strategy", "Engineering leadership", "Technical debt"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Newest first. */
export function sortedArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => b.published.localeCompare(a.published));
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
