// app/(site)/about/page.tsx
//
// The only long-form biography on the site. Everything else is structured
// (roles, metrics, case studies); this is the page that answers "who is this
// person" in prose, which is what an executive reader and an LLM retriever both
// look for and what the site previously had nowhere.
//
// Drawn from the author's detailed CV. Two translations are deliberate: the CV's
// title language is rendered as scope instead, and its unverifiable superlatives
// ("first time in world history") are stated as the specific, checkable facts
// underneath them.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { canonical, site } from "@/lib/seo";
import { NAME, YEARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About ${NAME}`,
  description:
    "Technology and transformation leader with 28+ years spanning heavy industry and enterprise SaaS — plant engineering and BIM through to microservices platforms, AI analytics and commercial strategy.",
  alternates: { canonical: canonical("/about") },
  openGraph: {
    title: `About ${NAME}`,
    description:
      "A career that runs along a seam most don't cross: heavy industry and enterprise SaaS, from the plant floor to platform strategy.",
    url: canonical("/about"),
    images: [{ url: "/og?title=About+Soumen+Roy&sub=Heavy+industry+and+enterprise+SaaS%2C+in+one+career", width: 1200, height: 630 }],
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": NAME,
    "url": site.url,
    "image": `${site.url}/images/avatar.jpg`,
    "description":
      "Technology and transformation leader with 28+ years spanning heavy industry and enterprise SaaS.",
    "alumniOf": { "@type": "EducationalOrganization", "name": "Master of Computer Applications" },
    "hasCredential": ["PMP", "Six Sigma Green Belt", "PG Diploma in Information Technology"],
  },
};

const chapters = [
  {
    period: "1997 – 2005",
    heading: "Drawing boards, then satellites",
    body:
      "I trained in civil engineering and started on plant layouts and structural drawings — the least glamorous, most unforgiving end of the discipline, where a misaligned foundation is discovered in concrete. That grounding is why I have never treated software as separable from the physical thing it describes. By the early 2000s I was leading a 30-person photogrammetry team at Cadworld, building an early pipeline that combined satellite imagery with aerial photography for 3D modelling — work delivered with OSIG in Canada that fed Google's 3D mapping data pipeline. Nobody had a workflow for combining those two sources; we wrote one, and productivity rose 50%.",
  },
  {
    period: "2005 – 2018",
    heading: "Making 50-year-old engineering firms digital",
    body:
      "At M. N. Dastur I took an organisation with half a century of 2D drafting practice and moved 32 engineering disciplines onto BIM-based virtual engineering. The technology was the easy half. The hard half was persuading engineers with thirty years of judgement in their hands that a model could hold what a drawing held. At Tata Steel I introduced drone survey, LiDAR and digital twins across 800+ acres of live plant — the first such deployment in that setting — which recovered roughly 30% of revenue leakage and cut engineering rework by a fifth.",
  },
  {
    period: "2019 – 2022",
    heading: "A steelmaker going public",
    body:
      "Gunung Raja Paksi is Indonesia's largest private steelmaker, and it was becoming a public company. I owned the digital and data agenda through that transition: ERP across 25+ departments, a consolidated reporting layer that gave the board one set of numbers instead of several, and predictive models for scrap price and FX that turned procurement from a months-long cycle into a days-long one and saved over $1M a year. Working inside an IPO teaches you quickly which numbers survive scrutiny and which merely sound good.",
  },
  {
    period: "2022 – present",
    heading: "Rebuilding a SaaS platform, and the business model under it",
    body:
      "I own product and technology strategy for a global enterprise SaaS platform — the roadmap I report weekly to the CEO and founders, the commercial model beneath it, the organisation that builds it, and the infrastructure it runs on. In practice that has meant a monolith re-architected into container-native microservices, release cadence from twice a year to daily, infrastructure cost down 70%, and an engineering organisation grown from 3 people to 85+ across 4 squads. It has equally meant replacing flat-fee licensing with consumption-based pricing and moving the customer segment from SMB to enterprise, which took average customer renewal from $2–5K to $35K+.",
  },
];

const principles = [
  {
    title: "Technology investment is a business argument",
    body:
      "Every programme I have run had its ROI model agreed with Finance before it started, and reported quarterly after. Not because it is good governance theatre, but because a number nobody agreed to in advance is a number nobody believes afterwards.",
  },
  {
    title: "Execution beats architecture",
    body:
      "I have seen more value destroyed by elegant designs that shipped late than by pragmatic ones that shipped. I bias toward the version that reaches production, then improves.",
  },
  {
    title: "Build the organisation, not just the system",
    body:
      "Platforms outlive the people who build them only if the operating model does too. Hiring, squad structure, on-call, and how decisions get made are architecture by another name.",
  },
  {
    title: "Stay close to the floor",
    body:
      "The reason I can translate between a plant manager and a product team is that I have done work on both sides. I still read the shop-floor problem before I read the dashboard describing it.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <BreadcrumbJsonLd items={[{ name: "About", href: "/about" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      {/* ── Lead ── */}
      <header className="mb-10">
        <div className="flex items-start gap-6">
          <Image
            src="/images/avatar.jpg"
            alt={NAME}
            width={96}
            height={96}
            className="rounded-full border-2 border-accent/40 shadow-lg shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-accent tracking-tight">About</h1>
            <p className="mt-2 text-slate-300 leading-relaxed">
              I own technology and product strategy end to end — and I have spent {YEARS} years
              doing it on both sides of a line most careers stay on one side of.
            </p>
          </div>
        </div>

        <p className="mt-6 text-slate-400 leading-relaxed">
          Most technology leaders come from software or from industry. I came from both. I started
          in civil and plant engineering, spent years turning drawings into models and plants into
          data, and now run product and platform strategy for enterprise SaaS. That is an unusual
          seam to sit on, and it is the reason I am useful: I have stood on the shop floor whose
          problem the software is supposed to solve, and I have owned the P&amp;L consequences of
          solving it badly.
        </p>
      </header>

      {/* ── Career arc ── */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-100 mb-6">The arc</h2>
        <div className="space-y-8">
          {chapters.map((c) => (
            <article key={c.heading} className="relative pl-6 border-l-2 border-white/10">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" aria-hidden />
              <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                {c.period}
              </div>
              <h3 className="mt-1 font-semibold text-slate-100">{c.heading}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── How I work ── */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-100 mb-5">How I work</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/3 p-5">
              <h3 className="font-medium text-slate-200 text-sm">{p.title}</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Outside the day job ── */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">Outside the day job</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          I wrote{" "}
          <Link href="/publications" className="text-accent hover:underline underline-offset-2">
            Mastering 3D Plant Engineering, Digitalisation &amp; Automation
          </Link>{" "}
          because the field guide I wanted did not exist — something that treated photogrammetry,
          BIM, LiDAR and CAD automation as things you actually deploy in a working plant rather than
          as a technology survey.
        </p>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed">
          I also founded{" "}
          <Link href="/imotara" className="text-accent hover:underline underline-offset-2">
            Imotara
          </Link>
          , a privacy-first emotional wellness companion, as a philanthropic initiative. It exists
          because I think we are building a generation of technology that is very good at capturing
          attention and very poor at supporting the people giving it. No ads, no paywall on the core,
          data local by default, and 22 languages including nine Indian regional ones.
        </p>
      </section>

      {/* ── Credentials ── */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-100 mb-4">Education &amp; credentials</h2>
        <ul className="text-slate-400 text-sm space-y-1.5">
          <li>Master&rsquo;s in Computer Applications</li>
          <li>Post Graduate Diploma in Information Technology</li>
          <li>Diplomas in Civil Engineering and Transport Management</li>
          <li>PMP &middot; Six Sigma Green Belt</li>
          <li>Certifications across AI/ML, business intelligence and RPA</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          Based in Kolkata, India. Work has spanned India, Indonesia, Canada, the US, Europe and Japan.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-xl border border-accent/25 bg-accent/5 p-6">
        <h2 className="text-lg font-semibold text-slate-100">Where to go next</h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          The detail sits elsewhere: role-by-role scope on{" "}
          <Link href="/experience" className="text-accent hover:underline underline-offset-2">Experience</Link>,
          eight programme write-ups under{" "}
          <Link href="/case-studies" className="text-accent hover:underline underline-offset-2">Case Studies</Link>, and
          how the $50M+ figure is composed on{" "}
          <Link href="/roi" className="text-accent hover:underline underline-offset-2">ROI</Link>.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition text-sm"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
