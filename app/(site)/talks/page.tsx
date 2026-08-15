// app/(site)/talks/page.tsx
// Server component — this page has no hooks or handlers, so it needs no client bundle.
//
// Recording links were removed deliberately. The YouTube IDs previously linked here
// were third-party videos (one of them a well-known conference talk by another
// speaker) presented under these talk titles, which misrepresented them as
// recordings of these sessions. The talks are real; the recordings were not ours to
// show. Do not re-add a "Watch recording" button without a verified URL of the
// actual session.
import { NAME } from "@/lib/constants";

export default function TalksPage() {
  const talks = [
    {
      title: "Photogrammetry at Industrial Scale — Lessons & Patterns",
      event: "International Mapping Conference",
      date: "Aug 2022",
      location: "Toronto, Canada",
      slides: "/slides/photogrammetry_industrial_scale.pdf",
      summary:
        "Overview of high-fidelity photogrammetry workflows, QA practices and enterprise handoffs used in large mapping & plant projects.",
    },
    {
      title: "Industry 4.0: OT/IT Convergence for Steel Plants",
      event: "Manufacturing Analytics Summit",
      date: "Mar 2021",
      location: "Jakarta, Indonesia",
      slides: "/slides/industry4_otit_convergence.pdf",
      summary:
        "Case studies from brownfield steel plants — edge adapters, streaming ingestion and KPI-driven operations dashboards.",
    },
    {
      title: "Scaling Data Platforms for Industrial BI",
      event: "Data Platforms Exchange",
      date: "Nov 2020",
      location: "Virtual",
      slides: "/slides/scaling_data_platforms.pdf",
      summary:
        "Technical patterns for lakehouse adoption, Iceberg/Parquet best practices and governance for trusted executive dashboards.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-accent">Talks & Presentations</h1>
        <p className="mt-3 text-slate-300">
          Talks, conference presentations and workshop sessions delivered by {NAME}. Below are selected
          sessions with slides and short abstracts — for additional references or to invite a talk,
          please use the contact page.
        </p>
      </header>

      <section className="space-y-8">
        {talks.map((t) => (
          <article key={t.title} className="rounded-xl border border-white/10 p-6">
            <div>
              <h2 className="text-xl font-semibold text-accent">{t.title}</h2>
              <div className="text-sm text-slate-400 mt-1">
                {t.event} • {t.location} • {t.date}
              </div>

              <p className="mt-3 text-slate-300 text-sm">{t.summary}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {t.slides && (
                  <a
                    href={t.slides}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
                  >
                    Download slides
                  </a>
                )}

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
                >
                  Invite to speak
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Speaking Topics */}
      <section className="mt-10 rounded-xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-accent mb-4">Speaking Topics</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              topic: "AI-First SaaS Transformation",
              desc: "From monolith to microservices — how to re-architect a legacy platform for enterprise scale without stopping the business.",
            },
            {
              topic: "Real-Time Analytics in Heavy Industry",
              desc: "Replacing batch reporting with streaming platforms in manufacturing environments — architecture, pitfalls, and measurable ROI.",
            },
            {
              topic: "Engineering Digitalization & Industry 4.0",
              desc: "Drone surveying, LiDAR, BIM, and digital twins in practice — lessons from deploying these at Tata Steel for the first time in the industry.",
            },
            {
              topic: "Photogrammetry at Industrial Scale",
              desc: "High-fidelity 3D mapping workflows, QA practices, and enterprise handoffs — including world-first satellite + aerial integration for global mapping.",
            },
            {
              topic: "Revenue-Aligned Technology Strategy",
              desc: "How technology leaders can directly influence ARR, pricing models, and customer retention — not just cost and delivery.",
            },
            {
              topic: "Global Team Scaling for SaaS",
              desc: "Building engineering teams from 3 to 85+ across geographies — hiring strategy, culture, and operating model for fast-growth SaaS companies.",
            },
          ].map((item) => (
            <div key={item.topic} className="rounded-xl border border-white/10 bg-white/3 p-4">
              <div className="font-medium text-slate-200 text-sm">{item.topic}</div>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
        <h3 className="text-lg font-semibold">Workshops &amp; Custom Training</h3>
        <p className="mt-2 text-slate-300 text-sm">
          Hands-on workshops (half-day to multi-day) on photogrammetry pipelines, BIM integration, CAD automation and
          operational analytics for engineering and digital teams. Sessions include practical labs, sample datasets and
          deployment recommendations.
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition"
          >
            Request a workshop →
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            Invite to speak →
          </a>
        </div>
      </section>
    </div>
  );
}
