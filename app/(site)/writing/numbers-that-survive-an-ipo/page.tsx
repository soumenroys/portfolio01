import type { Metadata } from "next";
import ArticleShell from "@/components/ArticleShell";
import { canonical, site } from "@/lib/seo";
import { getArticle } from "@/lib/writing";

const article = getArticle("numbers-that-survive-an-ipo")!;
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
    images: [{ url: `/og?title=${encodeURIComponent("The numbers that survive an IPO")}&sub=${encodeURIComponent("Writing · Soumen Roy")}`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <ArticleShell
      slug={article.slug}
      closing="I owned the digital and data agenda for a steelmaker through its transition to a public company."
    >
      <p>
        Gunung Raja Paksi is Indonesia&rsquo;s largest private steelmaker, and while I was there it
        was becoming a public company. I owned the digital and data agenda through that transition:
        ERP across 25+ departments, and a consolidated reporting layer that gave the board one set
        of numbers instead of several.
      </p>
      <p>
        That process is the most useful education in metrics I have had, because it applies a test
        most internal reporting never faces: someone outside the company, with no stake in your
        narrative, asks how the number was produced. A surprising proportion of numbers do not
        survive that question. Here is what separated the ones that did.
      </p>

      <h2>A number needs one owner, not one source</h2>
      <p>
        The standard prescription is a single source of truth. Necessary and insufficient. We had
        figures that came from exactly one system and still could not be defended, because nobody
        could say who decided what the number meant — which transactions were in scope, how returns
        were handled, when the period closed.
      </p>
      <p>
        What survived scrutiny was a number with a named human owner who could answer definitional
        questions without consulting anyone. One source stops contradiction. One owner produces
        an answer.
      </p>

      <h2>If the definition changed, the history is fiction</h2>
      <p>
        The most painful discoveries were metrics whose definition had drifted. Someone had improved
        the calculation two years earlier — correctly — and nobody had restated the prior periods.
        The trend line therefore showed a change in the business that was actually a change in the
        arithmetic.
      </p>
      <p>
        This is invisible internally, because everyone remembers the improvement and mentally
        adjusts. It is glaring to an outsider reading the series cold. Now I treat any definition
        change as requiring either a restatement or a visible break in the series. Silent
        improvement of a metric is a form of data loss.
      </p>

      <h2>Operational numbers get promoted, and they are not ready</h2>
      <p>
        A plant runs on figures produced for operational use: yield, downtime, inventory movement.
        They are accurate enough for the decisions they were built for, which often means accurate
        to a shift, reconciled informally, with local conventions about edge cases.
      </p>
      <p>
        In an IPO those same figures get promoted into reporting where the tolerance is entirely
        different. The number does not change; the standard it is held to does. Anticipate which
        operational metrics will be promoted, and harden them before someone external asks — because
        the alternative is doing it under time pressure, which is when you find that two plants
        counted the same thing differently for a decade.
      </p>

      <h2>Timeliness is a control, not a convenience</h2>
      <p>
        Before, a monthly consolidation taking three weeks was an irritation. Under public reporting
        it is a risk: a long close means a long window in which the numbers are unknown, and errors
        found late are found expensively.
      </p>
      <p>
        Shortening the close was not a reporting improvement, it was a control improvement. That
        reframing is what unlocked the investment — as an efficiency argument it had been declined
        for years.
      </p>

      <h2>What I took with me</h2>
      <p>
        Ask of any metric: who owns the definition, has it changed, what standard was it built for,
        and how long after the fact do we know it? Four questions, and they separate numbers that
        inform decisions from numbers that decorate slides.
      </p>
      <p>
        It is also why, on any programme since, I get the ROI model agreed with Finance before the
        work starts rather than after. Not governance theatre — I have simply watched what happens
        to a number that nobody agreed to in advance when someone finally examines it.
      </p>
    </ArticleShell>
  );
}
