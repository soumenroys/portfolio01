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
  {
    slug: "how-ot-it-convergence-fails",
    title: "How OT/IT convergence actually fails in brownfield plants",
    dek:
      "The pilot works. The rollout does not. After doing this across steel plants in two countries, the failure is almost never the technology.",
    published: "2026-08-14",
    readingMinutes: 7,
    tags: ["Industry 4.0", "OT/IT convergence", "Manufacturing"],
  },
  {
    slug: "thirty-two-disciplines-change-management",
    title: "What 32 engineering disciplines taught me about change management",
    dek:
      "Moving a 50-year-old engineering firm from drawing boards to BIM. The technology was the easy half.",
    published: "2026-08-12",
    readingMinutes: 6,
    tags: ["BIM", "Change management", "Engineering leadership"],
  },
  {
    slug: "smb-to-enterprise-saas",
    title: "Moving a SaaS product from SMB to enterprise: what actually has to change",
    dek:
      "Not the sales deck. The architecture, the pricing model, the support structure and the security posture — usually in that order, and usually underestimated.",
    published: "2026-08-10",
    readingMinutes: 7,
    tags: ["SaaS", "Pricing strategy", "Product strategy"],
  },
  {
    slug: "numbers-that-survive-an-ipo",
    title: "The numbers that survive an IPO, and the ones that don't",
    dek:
      "Sitting inside a steelmaker's transition to a public company changes what you consider a metric. A short account of which numbers held up.",
    published: "2026-08-08",
    readingMinutes: 6,
    tags: ["Data governance", "Executive reporting", "Manufacturing"],
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
