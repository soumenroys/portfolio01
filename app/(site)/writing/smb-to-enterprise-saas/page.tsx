import type { Metadata } from "next";
import ArticleShell from "@/components/ArticleShell";
import { canonical, site } from "@/lib/seo";
import { getArticle } from "@/lib/writing";

const article = getArticle("smb-to-enterprise-saas")!;
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
    images: [{ url: `/og?title=${encodeURIComponent("SMB to enterprise: what has to change")}&sub=${encodeURIComponent("Writing · Soumen Roy")}`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <ArticleShell
      slug={article.slug}
      closing="I have taken a platform through this move — average customer renewal from $2–5K to $35K+, and most of the work was not in the product."
    >
      <p>
        Moving upmarket is usually discussed as a go-to-market decision: hire enterprise sellers,
        rebuild the deck, attend different conferences. That part is real and it is the smallest
        part. The reason companies stall is that four other things have to change first, and each
        takes longer than the sales motion it is meant to support.
      </p>
      <p>
        This is the order I found them in.
      </p>

      <h2>1. The ceiling you did not know was a ceiling</h2>
      <p>
        Ours was a thousand users. Not a stated limit — an emergent one, the point at which the
        architecture stopped behaving. Every enterprise conversation reached it and ended politely.
      </p>
      <p>
        Most SMB-native products have one of these. It is worth finding yours deliberately rather
        than discovering it in a proof of concept with the largest prospect you have ever had. Load
        it past where you think it breaks, then look at what broke: it is rarely the thing the
        engineers predicted, and it usually turns out to be a data model decision made years earlier
        for entirely good reasons.
      </p>

      <h2>2. Pricing has to express the value, not the seat</h2>
      <p>
        Flat-fee licensing is legible to a small buyer and unhelpful to a large one. It also hides
        something from you: with a flat fee you cannot see which customers are profitable, because
        cost to serve varies enormously and revenue does not vary at all.
      </p>
      <p>
        Moving to consumption-based pricing did two things. It let large customers buy in a shape
        that matched how they actually used the product, which unblocked deals. And it gave us
        per-customer profitability for the first time — which changed which deals we pursued, and
        was arguably worth more internally than the revenue it unlocked externally.
      </p>
      <p>
        Expect the pricing change to be the most contested decision in the whole move. It touches
        sales compensation, forecasting and every existing contract, and the people who object are
        not being obstructive; they are the ones who will have to renegotiate.
      </p>

      <h2>3. Procurement is the real evaluator</h2>
      <p>
        An SMB deal is won with the person who uses the product. An enterprise deal is won with that
        person and then survived through security review, legal, procurement and often an
        architecture board. Those are different audiences asking different questions, and none of
        them care about your feature set.
      </p>
      <p>
        Practically: SSO, audit logging, data residency answers, a real DPA, penetration test
        results, uptime history you can evidence, and a support model with named response times.
        Each is unglamorous and each is a hard gate. Nothing in the product roadmap gets you past
        them, and building them reactively during a live deal is how you lose the deal slowly.
      </p>

      <h2>4. Support becomes part of the product</h2>
      <p>
        A small customer with a problem opens a ticket. A large customer with a problem escalates to
        someone whose name they know, and treats the response as evidence about whether the
        relationship is sound. Response structure — who owns the account, what happens at 2am, how
        an incident is communicated — becomes something they evaluate before signing, not after.
      </p>
      <p>
        This is where an engineering-led company most often underinvests, because it does not look
        like product work. It is product work. For an enterprise buyer it is frequently the
        difference between two technically similar options.
      </p>

      <h2>The sequencing that worked</h2>
      <p>
        Architecture first, because it gates everything and takes longest. Pricing next, because it
        is contested and the argument should happen before there are enterprise contracts written
        under the old model. Compliance and support in parallel with the first enterprise pipeline,
        so they are built against real requirements rather than imagined ones.
      </p>
      <p>
        The mistake I would warn against most strongly is hiring the enterprise sales team first. It
        is the most visible step, it makes the intention feel real, and it puts expensive people in
        front of buyers you cannot yet serve. The deals they lose are not lost because of them, and
        the cost is not only the salaries — it is the prospects who now believe they have evaluated
        you.
      </p>
    </ArticleShell>
  );
}
