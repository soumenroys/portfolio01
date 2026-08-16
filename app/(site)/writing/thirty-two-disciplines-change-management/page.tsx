import type { Metadata } from "next";
import ArticleShell from "@/components/ArticleShell";
import { canonical, site } from "@/lib/seo";
import { getArticle } from "@/lib/writing";

const article = getArticle("thirty-two-disciplines-change-management")!;
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
    images: [{ url: `/og?title=${encodeURIComponent("32 disciplines, one BIM conversion")}&sub=${encodeURIComponent("Writing · Soumen Roy")}`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <ArticleShell
      slug={article.slug}
      closing="If you are converting an engineering practice rather than installing a tool, that distinction is where the whole programme lives."
    >
      <p>
        M. N. Dastur had been doing engineering since the 1950s. When I took on moving it to
        BIM-based virtual engineering, the scope was 32 disciplines — structural, piping,
        electrical, HVAC, and a long tail of specialisms each with its own conventions, its own
        drawing standards, and its own senior people who had been right about things for thirty
        years.
      </p>
      <p>
        The software was the easy half. Here is what the other half actually consisted of.
      </p>

      <h2>Expertise is stored in the medium, not just the head</h2>
      <p>
        A senior engineer reading a 2D drawing is not decoding a picture. Decades of judgement are
        bound up in how that drawing is laid out — what gets shown, what is deliberately omitted,
        which conventions signal what. Ask that person to work in a model instead and you have not
        merely changed a tool. You have invalidated part of the apparatus their expertise runs on.
      </p>
      <p>
        The resistance that follows gets labelled &ldquo;change resistance&rdquo;, which is
        dismissive and wrong. It is a rational response to being made a beginner at something you
        were the best at. Naming it accurately changed how I ran the programme: less training, more
        pairing, and a lot more listening to what the drawing had been carrying that the model was
        not yet.
      </p>

      <h2>Convert by discipline, not by project</h2>
      <p>
        The instinct is to pick a project and do it fully in BIM. It is the wrong unit. A project
        touches many disciplines at once, so a project-first rollout means every discipline is a
        beginner simultaneously, on a live deliverable, with a client deadline.
      </p>
      <p>
        Discipline-first is slower to look impressive and far more likely to finish. One discipline
        converts, builds its own conventions, and produces people who can teach the next. By the
        time you reach the disciplines with the most entrenched practice, the argument is no longer
        theoretical — it is being made by their peers, in their own language.
      </p>

      <h2>The first converts should be respected, not enthusiastic</h2>
      <p>
        There is always someone eager to go first. Frequently they are eager because they are
        junior, curious and have little standing to lose. Their success proves nothing to the people
        you need, and can actively harm you: if BIM becomes what the young engineers do, it acquires
        exactly the wrong association.
      </p>
      <p>
        Spend the effort recruiting a respected sceptic instead. Slower to win, worth several times
        more when won — because the question everyone else is silently asking is not &ldquo;does
        this work&rdquo; but &ldquo;do people like me do this&rdquo;.
      </p>

      <h2>Keep a bilingual period, and mean it</h2>
      <p>
        Every conversion programme is tempted to set a date after which the old way is forbidden.
        It feels decisive. In practice it converts a technical migration into a loyalty test, and
        drives the remaining 2D work underground where you cannot see it.
      </p>
      <p>
        A deliberate bilingual period — where both are legitimate and the model is authoritative
        for defined things — costs more in the middle and finishes sooner. It also surfaces the
        genuine cases where the old way was still better, which exist, and which you want to know
        about rather than have concealed from you.
      </p>

      <h2>What actually convinced people</h2>
      <p>
        Not the demonstrations. What convinced people was clash detection catching a collision
        between two disciplines&rsquo; work before it reached site — the specific class of error
        that, in the 2D world, is found by a fabricator on a phone call, expensively and with
        someone blamed.
      </p>
      <p>
        That was the argument, and it was not an argument about technology. It was: <em>this stops
        the thing that makes your month terrible.</em> Every conversion programme has an equivalent,
        and finding it is more valuable than any amount of training material. Ours took eight months
        to identify and about a week to spread once it had.
      </p>
    </ArticleShell>
  );
}
