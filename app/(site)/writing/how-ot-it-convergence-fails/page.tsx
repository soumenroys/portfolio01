import type { Metadata } from "next";
import ArticleShell from "@/components/ArticleShell";
import { canonical, site } from "@/lib/seo";
import { getArticle } from "@/lib/writing";

const article = getArticle("how-ot-it-convergence-fails")!;
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
    images: [{ url: `/og?title=${encodeURIComponent("OT/IT convergence in brownfield plants")}&sub=${encodeURIComponent("Writing · Soumen Roy")}`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <ArticleShell
      slug={article.slug}
      closing="I have run this in steel plants in India and Indonesia, on live sites rather than greenfield ones."
    >
      <p>
        Every OT/IT programme I have been near started the same way: a pilot on one line, one
        furnace, one area. The pilot works. Data flows, a dashboard appears, someone senior is
        pleased. Then the rollout stalls, and the post-mortem blames integration complexity.
      </p>
      <p>
        Having done this across brownfield steel plants in two countries, I think integration
        complexity is almost never the real cause. It is the thing that becomes visible when the
        actual causes are left unaddressed. There are four, and they are all organisational before
        they are technical.
      </p>

      <h2>1. The pilot was chosen because it was easy</h2>
      <p>
        Pilots get sited where the equipment is newest, the supervisor is enthusiastic and the tags
        are already documented. That is a sensible way to prove a concept and a terrible way to
        estimate a rollout. The second area has a twenty-year-old PLC with undocumented tag names,
        a sample rate that makes your analytics meaningless, and a supervisor who has watched three
        previous digital initiatives arrive and leave.
      </p>
      <p>
        If you want a plan you can trust, pilot somewhere representative and awkward. The number you
        need is not &ldquo;can this work&rdquo; — it is &ldquo;how long does one difficult area
        take&rdquo;, because that is the number the rollout is made of.
      </p>

      <h2>2. Nobody owns the tag dictionary</h2>
      <p>
        This sounds like a detail and it is the single largest hidden cost in brownfield work. A
        plant that has grown over decades has instrument tags named by whoever installed them, in
        conventions that changed three times, with the same physical measurement appearing under
        different names in different systems.
      </p>
      <p>
        Until someone owns the mapping — one named person, with the authority to settle disputes
        about what a signal means — every downstream analysis is a negotiation. I have seen more
        Industry 4.0 schedules slip on this than on any platform decision. Budget for it explicitly,
        as a workstream with a name, not as part of &ldquo;integration&rdquo;.
      </p>

      <h2>3. The safety culture is treated as an obstacle</h2>
      <p>
        In a plant, the reflex against unplanned change is not conservatism, it is the reason people
        go home intact. An IT team that arrives talking about rapid iteration and moving fast is
        speaking a language that, in that context, sounds like recklessness — and will be resisted
        for reasons the resisters may not articulate but are entirely right about.
      </p>
      <p>
        The convergence that works runs in the other direction: adopt the plant&rsquo;s change
        discipline for anything touching operations, and keep the fast-moving practice for the
        analytics layer sitting safely downstream of it. Two different tempos, deliberately
        separated. Trying to impose one tempo on both is how you lose the operations team, and
        without them you have a data project, not a transformation.
      </p>

      <h2>4. The KPI is agreed after the data arrives</h2>
      <p>
        The most common sequence is: build the pipeline, surface everything available, then ask the
        business what it wants to see. This produces dashboards that are impressive and unused,
        because the measure that would change a decision was never something the instrumentation
        captured.
      </p>
      <p>
        Invert it. Start from the decision somebody wants to make differently — when to schedule
        the reline, which scrap mix to buy this week, whether that motor is degrading. Work back to
        the measurement that would change it, then instrument for that. It sounds obvious. It is
        also the step most often skipped, because starting from available data feels like progress
        and starting from decisions feels like meetings.
      </p>

      <h2>What good looks like</h2>
      <p>
        At the plants where this went well, the pattern was consistent: a representative pilot with
        an honest per-area estimate, a named owner for the tag dictionary, an explicit two-tempo
        change process, and a KPI agreed before the pipeline was built. None of that is a technology
        choice. The technology choices — which broker, which historian, which lakehouse — mattered
        far less than any of them, and were also the only part anyone argued about in the steering
        meetings.
      </p>
      <p>
        The uncomfortable summary is that OT/IT convergence is an organisational programme wearing a
        technical costume. Staffed as a technical programme, it produces a very good pilot.
      </p>
    </ArticleShell>
  );
}
