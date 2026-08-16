// components/ArticleShell.tsx
// Server component. Wraps every piece in /writing so each article file carries
// only its prose — breadcrumb, Article schema, header and footer live here once.
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { canonical, site } from "@/lib/seo";
import { NAME } from "@/lib/constants";
import { getArticle, formatDate } from "@/lib/writing";

export default function ArticleShell({
  slug,
  children,
  closing,
}: {
  slug: string;
  children: React.ReactNode;
  /** Optional last line above the contact link, specific to the piece. */
  closing?: React.ReactNode;
}) {
  const article = getArticle(slug);
  if (!article) throw new Error(`Unknown article slug: ${slug}`);

  const url = canonical(`/writing/${article.slug}`);

  // The shape LLM retrievers and Google both use to treat a page as a citable
  // piece by a named author rather than as site furniture.
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.published,
    dateModified: article.published,
    author: { "@type": "Person", name: NAME, url: site.url },
    publisher: { "@type": "Person", name: NAME, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: article.tags.join(", "),
    inLanguage: "en",
  };

  return (
    <article className="max-w-2xl mx-auto py-12 px-6">
      <BreadcrumbJsonLd
        items={[
          { name: "Writing", href: "/writing" },
          { name: article.title, href: `/writing/${article.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Link href="/writing" className="text-sm text-slate-400 hover:text-accent underline underline-offset-2">
        &larr; Writing
      </Link>

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <time dateTime={article.published}>{formatDate(article.published)}</time>
          <span aria-hidden>&middot;</span>
          <span>{article.readingMinutes} min read</span>
        </div>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-100 tracking-tight leading-tight">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300 leading-relaxed">{article.dek}</p>
      </header>

      <div className="space-y-5 text-slate-400 leading-relaxed [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-slate-100 [&>h2]:pt-4">
        {children}
      </div>

      <footer className="mt-12 pt-6 border-t border-white/10">
        <p className="text-sm text-slate-400 leading-relaxed">
          {closing}{" "}
          <Link href="/contact" className="text-accent hover:underline underline-offset-2">
            Start a conversation
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
