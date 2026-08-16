// app/(site)/writing/page.tsx — index of written pieces.
import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { canonical } from "@/lib/seo";
import { NAME } from "@/lib/constants";
import { sortedArticles, formatDate } from "@/lib/writing";

export const metadata: Metadata = {
  title: `Writing | ${NAME}`,
  description:
    "Short pieces on platform strategy, engineering leadership and industrial digital transformation — written from programmes actually delivered, not from theory.",
  alternates: { canonical: canonical("/writing") },
  openGraph: {
    title: `Writing | ${NAME}`,
    description:
      "Short pieces on platform strategy, engineering leadership and industrial digital transformation.",
    url: canonical("/writing"),
    images: [{ url: "/og?title=Writing&sub=Platform+strategy%2C+leadership%2C+industrial+transformation", width: 1200, height: 630 }],
  },
};

export default function WritingIndex() {
  const articles = sortedArticles();

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <BreadcrumbJsonLd items={[{ name: "Writing", href: "/writing" }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-accent tracking-tight">Writing</h1>
      <p className="mt-3 text-slate-300 leading-relaxed">
        Short pieces on platform strategy, engineering leadership and industrial digital
        transformation. Everything here comes out of a programme I actually ran, including the
        parts that did not go to plan.
      </p>

      <div className="mt-10 space-y-8">
        {articles.map((a) => (
          <article key={a.slug} className="group">
            <Link href={`/writing/${a.slug}` as Route} className="block">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <time dateTime={a.published}>{formatDate(a.published)}</time>
                <span aria-hidden>&middot;</span>
                <span>{a.readingMinutes} min read</span>
              </div>
              <h2 className="mt-1.5 text-xl font-semibold text-slate-100 group-hover:text-accent transition-colors">
                {a.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{a.dek}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-12 text-sm text-slate-500">
        More to come. If a topic here is live for you right now,{" "}
        <Link href="/contact" className="text-accent hover:underline underline-offset-2">
          start a conversation
        </Link>
        .
      </p>
    </div>
  );
}
