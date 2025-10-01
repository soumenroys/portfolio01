// /app/(site)/case-studies/grp/page.tsx
import Link from "next/link";
import LightboxGallery from "@/components/LightboxGallery";

import type { Metadata } from "next";
import { canonical } from "@/lib/seo";
import { NAME } from "@/lib/constants";

const OG = "/og/case-studies/grp.png"; // optional per-page OG image

export const metadata: Metadata = {
  title: `GRP — Manufacturing Modernization & Industry 4.0 | ${NAME}`,
  description:
    "OT/IT convergence, real-time analytics, and predictive insights to improve yield, throughput, and reliability.",
  alternates: { canonical: canonical("/case-studies/grp") },
  openGraph: {
    url: canonical("/case-studies/grp"),
    title: `GRP — Manufacturing Modernization & Industry 4.0 | ${NAME}`,
    description:
      "OT/IT convergence, real-time analytics, and predictive insights to improve yield and throughput.",
    images: [{ url: OG, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `GRP — Manufacturing Modernization & Industry 4.0 | ${NAME}`,
    description:
      "Analytics-driven improvements in yield, throughput, and reliability.",
    images: [OG],
  },
};

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

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back to Case Studies */}
      <Link
        href="/case-studies"
        className="text-sm underline hover:text-accent mb-6 inline-block"
      >
        ← Back to Case Studies
      </Link>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Key Contributions</h2>
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Context & Challenges</h2>
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Approach</h2>
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Solution & Technology</h2>
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Business Impact</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li>Reduced scrap rates by identifying process drivers — measurable material cost savings.</li>
            <li>Improved first-time yield and throughput through focused operator interventions and predictive alerts.</li>
            <li>Shortened incident resolution and RCA cycles via consolidated telemetry and historical analysis.</li>
            <li>Created a repeatable blueprint for rolling out Industry 4.0 capabilities across other plants and regions.</li>
          </ul>
        </article>

        {/* Image gallery (shared Lightbox) */}
        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Selected Visuals</h2>
          <p className="mt-2 text-sm text-slate-300">Click any image to enlarge.</p>

          <LightboxGallery images={images} captions={captions} />
        </article>

        {/* CTA Buttons – unified with other case study pages */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-medium text-black hover:bg-accent/90 transition"
          >
            Explore how Industry 4.0 modernization can improve plant performance →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-accent px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-black transition"
          >
            Book a 20-min Intro
          </Link>
        </div>
      </section>
    </div>
  );
}
