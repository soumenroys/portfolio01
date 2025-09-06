"use client";

// /app/case-studies/grp/page.tsx
import Link from "next/link";
import { useState } from "react";

export default function GRPCaseStudy() {
  // Update these with the actual filenames you save under /public/images/case-studies/grp/
  const images = [
    "/images/case-studies/grp/plant-overview.png",
    "/images/case-studies/grp/process-modernization.png",
    "/images/case-studies/grp/analytics-dashboard.png",
  ];

  const captions = [
    "GRP plant overview — site layout and process flow",
    "Process modernization & automation diagrams",
    "Operations analytics dashboard — real-time KPIs",
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back to home link */}
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-accent">
        GRP (Gunung Raja Paksi) — Manufacturing Modernization & Industry 4.0
      </h1>

      {/* Intro */}
      <p className="text-slate-300 mb-6">
        I led large-scale cross-functional programs at GRP — Indonesia’s largest privately-owned steelmaker — to modernize plant operations,
        introduce Industry 4.0 workflows, and establish enterprise-grade analytics and reporting. The work combined process engineering, OT/IT convergence,
        and data platforms to drive measurable improvements in throughput, yield and operational visibility.
      </p>

      <section className="space-y-8 text-slate-400">
        {/* Key Contributions */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Key Contributions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li>
              <strong>Cross-functional program leadership:</strong> managed engineering, OT, IT and analytics teams to deliver plant modernization roadmaps.
            </li>
            <li>
              <strong>Process digitization & automation:</strong> replaced manual handoffs with automated data capture, sequence control and alarm analytics.
            </li>
            <li>
              <strong>Real-time operations analytics:</strong> designed and rolled out dashboards and alerts for production, quality and maintenance KPIs.
            </li>
            <li>
              <strong>Data platform & integrations:</strong> built ingestion pipelines from PLCs/SCADA to a central lake, enabling near-real-time analytics and reporting.
            </li>
            <li>
              <strong>Change management & capability building:</strong> trained plant teams on new dashboards, SOPs and decision workflows to ensure adoption.
            </li>
          </ul>
        </article>

        {/* Context & Challenges */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Context & Challenges</h2>
          <p className="mt-2 text-sm">
            GRP operated multiple brownfield facilities with heterogeneous control systems and fragmented reporting. Key challenges included:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Legacy SCADA/PLC systems with inconsistent data models across lines.</li>
            <li>Lack of near-real-time visibility into yield losses and scrap drivers.</li>
            <li>Manual quality reconciliation and slow root-cause analysis cycles.</li>
            <li>Pressure to increase throughput while maintaining product quality and safety.</li>
          </ul>
        </article>

        {/* Approach */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Approach</h2>
          <p className="mt-2 text-sm">
            The program used a phased, risk-managed approach:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Phase 1 — Rapid assessment and quick wins (data collection, pilot dashboards).</li>
            <li>Phase 2 — Stabilize OT integrations (protocol adapters, unified tags, edge buffering).</li>
            <li>Phase 3 — Central data platform (ingest, storage, near-real-time transforms) and enterprise reporting.</li>
            <li>Phase 4 — Optimization loops: predictive maintenance, scrap reduction models and operator decision support.</li>
          </ul>
        </article>

        {/* Solution & Tech */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Solution & Technology</h2>
          <p className="mt-2 text-sm">
            Delivered an integrated stack combining OT adapters, streaming ingestion, curated serving layer and BI/visualization:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Edge adapters & buffering (MQTT / Kafka edge bridges) for reliable PLC/SCADA telemetry.</li>
            <li>Streaming and batch pipelines (Kafka + Spark/Flink) to produce operational data streams and aggregates.</li>
            <li>Serving layer (ClickHouse / Postgres) for sub-second KPI queries consumed by dashboards.</li>
            <li>Model operationalization for scrap prediction and yield optimization (Python ML pipelines).</li>
            <li>BI & dashboards (Power BI / QuickSight) with governed semantic models for leadership & operations.</li>
          </ul>
        </article>

        {/* Impact & Outcomes */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Business Impact</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li>Reduced scrap rates by identifying process drivers — measurable material cost savings.</li>
            <li>Improved first-time yield and throughput through focused operator interventions and predictive alerts.</li>
            <li>Shortened incident resolution and RCA cycles via consolidated telemetry and historical analysis.</li>
            <li>Created a repeatable blueprint for rolling out Industry 4.0 capabilities across other plants and regions.</li>
          </ul>
        </article>

        {/* Image gallery */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Selected Visuals</h2>
          <p className="mt-2 text-sm text-slate-300">Click any image to enlarge.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setLightboxIndex(idx)}
                className="group relative block overflow-hidden rounded-lg border border-white/10 p-0"
                aria-label={captions[idx] ?? `GRP image ${idx + 1}`}
              >
                <div style={{ width: "100%", height: 160, position: "relative", overflow: "hidden" }}>
                  <img
                    src={src}
                    alt={captions[idx] ?? `GRP image ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/case-studies/grp/placeholder.png";
                    }}
                  />
                </div>
                <div className="p-3 text-sm text-slate-300">{captions[idx]}</div>
              </button>
            ))}
          </div>

          {/* Lightbox modal */}
          {typeof lightboxIndex === "number" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setLightboxIndex(null)}
            >
              <div
                className="relative w-full max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-3 right-3 z-50 rounded-full bg-black/50 px-3 py-1 text-white"
                  aria-label="Close image"
                >
                  ✕
                </button>

                <div style={{ width: "100%", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={images[lightboxIndex]}
                    alt={captions[lightboxIndex] ?? `GRP image ${lightboxIndex + 1}`}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/case-studies/grp/placeholder.png";
                    }}
                  />
                </div>

                <p className="mt-3 text-center text-sm text-slate-300">
                  {captions[lightboxIndex]}
                </p>
              </div>
            </div>
          )}
        </article>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
          >
            Explore how Industry 4.0 modernization can improve plant performance →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            Book a 20-min Intro
          </Link>
        </div>
      </section>
    </div>
  );
}
