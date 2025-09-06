// app/(site)/talks/page.tsx
// Server component — no "use client" required
import { NAME } from "@/lib/constants";

export default function TalksPage() {
  const talks = [
    {
      title: "Photogrammetry at Industrial Scale — Lessons & Patterns",
      event: "International Mapping Conference",
      date: "Aug 2022",
      location: "Toronto, Canada",
      // updated real recording
      video: "https://www.youtube.com/watch?v=TcGlAtuyp6U",
      slides: "/slides/photogrammetry_industrial_scale.pdf",
      img: "/images/talks/photogrammetry-thumbnail.png",
      summary:
        "Overview of high-fidelity photogrammetry workflows, QA practices and enterprise handoffs used in large mapping & plant projects.",
    },
    {
      title: "Industry 4.0: OT/IT Convergence for Steel Plants",
      event: "Manufacturing Analytics Summit",
      date: "Mar 2021",
      location: "Jakarta, Indonesia",
      // updated real recording
      video: "https://www.youtube.com/watch?v=ktcRXyE8SaY",
      slides: "/slides/industry4_otit_convergence.pdf",
      img: "/images/talks/industry4-thumbnail.png",
      summary:
        "Case studies from brownfield steel plants — edge adapters, streaming ingestion and KPI-driven operations dashboards.",
    },
    {
      title: "Scaling Data Platforms for Industrial BI",
      event: "Data Platforms Exchange",
      date: "Nov 2020",
      location: "Virtual",
      // updated real recording
      video: "https://www.youtube.com/watch?v=CDWp_xyCdzw",
      slides: "/slides/scaling_data_platforms.pdf",
      img: "/images/talks/data-platforms-thumbnail.png",
      summary:
        "Technical patterns for lakehouse adoption, Iceberg/Parquet best practices and governance for trusted executive dashboards.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <a href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </a>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-accent">Talks & Presentations</h1>
        <p className="mt-3 text-slate-300">
          Talks, conference presentations and workshop sessions delivered by {NAME}. Below are selected recordings,
          slides and short abstracts — for additional references or to invite a talk, please use the contact page.
        </p>
      </header>

      <section className="space-y-8">
        {talks.map((t) => (
          <article key={t.title} className="rounded-2xl border border-white/10 p-6 flex gap-6 items-start">
            <div className="w-40 flex-shrink-0">
              <a href={t.video} target="_blank" rel="noreferrer">
                <img
                  src={t.img}
                  alt={`${t.title} thumbnail`}
                  className="w-full h-24 object-cover rounded-md border border-white/6"
                />
              </a>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-accent">{t.title}</h2>
              <div className="text-sm text-slate-400 mt-1">
                {t.event} • {t.location} • {t.date}
              </div>

              <p className="mt-3 text-slate-300 text-sm">{t.summary}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {t.video && (
                  <a
                    href={t.video}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-black text-sm font-medium hover:opacity-95 transition"
                  >
                    Watch recording
                  </a>
                )}

                {t.slides && (
                  <a
                    href={t.slides}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
                  >
                    Download slides
                  </a>
                )}

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
                >
                  Invite to speak
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
        <h3 className="text-lg font-semibold">Workshops & Custom Training</h3>
        <p className="mt-2 text-slate-300 text-sm">
          Hands-on workshops (half-day to multi-day) on photogrammetry pipelines, BIM integration, CAD automation and
          operational analytics for engineering and digital teams. Sessions include practical labs, sample datasets and
          deployment recommendations.
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
          >
            Request a workshop →
          </a>
        </div>
      </section>
    </div>
  );
}
