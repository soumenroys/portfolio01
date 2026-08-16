import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { canonical, site } from "@/lib/seo";
import { NAME } from "@/lib/constants";
import { getArticle, formatDate } from "@/lib/writing";

const article = getArticle("before-approving-a-platform-rewrite")!;
const url = canonical(`/writing/${article.slug}`);

export const metadata: Metadata = {
  title: article.title,
  description: article.dek,
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.dek,
    url,
    publishedTime: article.published,
    authors: [site.url],
    images: [{ url: `/og?title=${encodeURIComponent(article.title)}&sub=${encodeURIComponent("Writing · Soumen Roy")}`, width: 1200, height: 630 }],
  },
};

// Article schema. This is the shape LLM retrievers and Google both use to treat
// a page as a citable piece by a named author, rather than as site furniture.
const articleSchema = {
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

export default function Page() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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

      <div className="space-y-5 text-slate-400 leading-relaxed">
        <p>
          I have been on both sides of this conversation. I have asked for a rewrite and been told
          no, and I have had one asked of me and said yes — most recently to replace a monolithic
          licensing product with container-native microservices, a programme that took release
          cadence from twice a year to daily and cut infrastructure cost by 70%.
        </p>
        <p>
          That one worked. Plenty do not, and the failures rarely come from the engineering. They
          come from approving a rewrite that was solving a problem nobody had named out loud. These
          are the five questions I ask before I sign, in the order I ask them.
        </p>

        <h2 className="text-xl font-semibold text-slate-100 pt-4">
          1. What breaks in the business if we do nothing for eighteen months?
        </h2>
        <p>
          Not what annoys engineering — what breaks commercially. When we rewrote, the answer was
          concrete and awkward: the product could not go past a thousand users, so every enterprise
          conversation ended the same way. That is not a technical complaint, it is a ceiling on the
          addressable market, and it makes the rewrite a revenue argument rather than a hygiene one.
        </p>
        <p>
          If the honest answer is &ldquo;nothing much, it just stays unpleasant to work in&rdquo;,
          you do not have a rewrite. You have a refactoring budget and a morale problem, and those
          are cheaper to fix separately.
        </p>

        <h2 className="text-xl font-semibold text-slate-100 pt-4">
          2. Can you name the constraint, or only the symptom?
        </h2>
        <p>
          Slow releases, brittle deploys and long onboarding are symptoms. They can be caused by
          architecture, or by a test suite nobody trusts, or by one person being the only reviewer
          for a critical module. Two of those three are not fixed by a rewrite, and a rewrite will
          faithfully reproduce them in the new system.
        </p>
        <p>
          The test I use: describe the constraint without naming a technology. If you cannot, the
          diagnosis is not finished.
        </p>

        <h2 className="text-xl font-semibold text-slate-100 pt-4">
          3. What does the business get before the end?
        </h2>
        <p>
          A rewrite that delivers nothing until it delivers everything is a bet on an unbroken
          eighteen months of organisational patience. I have never seen that patience survive
          contact with a bad quarter.
        </p>
        <p>
          Insist on a sequence where each stage is independently valuable — the streaming data path
          before the full platform, the new pricing model before the last service is migrated. This
          is not just risk management. It changes the conversation when a sponsor asks in month
          seven what they have bought, because you have an answer that is already in production.
        </p>

        <h2 className="text-xl font-semibold text-slate-100 pt-4">
          4. Who owns the old system while the new one is built?
        </h2>
        <p>
          The most predictable failure in a rewrite is not technical, it is staffing. The strong
          engineers move to the new platform, the old one becomes a maintenance posting nobody
          wants, and its reliability quietly degrades over exactly the period you need it to be
          boring. Customers experience the rewrite as a decline in service, which is the opposite of
          the story you are trying to tell.
        </p>
        <p>
          Name the owner of the old system, staff it properly, and make that role visibly a good
          one. If you cannot fill it, you have learned something about how long the migration will
          really take.
        </p>

        <h2 className="text-xl font-semibold text-slate-100 pt-4">
          5. What number did Finance agree to, before we started?
        </h2>
        <p>
          I get the ROI model agreed with Finance and the business unit leads before a programme
          begins, and reported against quarterly afterwards. Not as governance theatre — because a
          number nobody signed up to in advance is a number nobody believes at the end. It also
          forces a useful argument early, while it is still cheap to have: if Finance will not agree
          the baseline, you and they have different beliefs about the problem, and better to find
          that out in week one.
        </p>

        <h2 className="text-xl font-semibold text-slate-100 pt-4">The uncomfortable version</h2>
        <p>
          Most rewrite proposals I have seen were arguments about code that were really arguments
          about something else: an org design that put too much in one team&rsquo;s hands, a
          commercial model the architecture could not express, or an engineering group that had lost
          confidence and wanted a fresh start. All three are real problems. None is best solved by
          rewriting the software, and a rewrite launched to solve them tends to end with the same
          problem in a newer codebase.
        </p>
        <p>
          The five questions are really one question asked five ways: <em>do we know what we are
          actually fixing?</em> When the answer is yes, rewrites work — ours did. When it is no, no
          amount of architecture rescues it.
        </p>
      </div>

      <footer className="mt-12 pt-6 border-t border-white/10">
        <p className="text-sm text-slate-400 leading-relaxed">
          I have run this decision at a SaaS platform, a steelmaker going public, and a 50-year-old
          engineering firm. If you are weighing one now,{" "}
          <Link href="/contact" className="text-accent hover:underline underline-offset-2">
            I am happy to talk it through
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
