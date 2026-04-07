// /app/(site)/case-studies/grp/page.tsx
import Link from "next/link";
import LightboxGallery from "@/components/LightboxGallery";

import type { Metadata } from "next";
import { canonical } from "@/lib/seo";
import { NAME } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const OG = "/og?title=GRP+%E2%80%94+Industry+4.0+Transformation&sub=Manufacturing+analytics+%C2%B7+OT%2FIT+convergence+%C2%B7+Indonesia";

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
      <BreadcrumbJsonLd items={[{ name: "Case Studies", href: "/case-studies" }, { name: "GRP Steel", href: "/case-studies/grp" }]} />
      {/* Back to Case Studies */}
      <Link
        href="/case-studies"
        className="text-sm underline hover:text-accent mb-6 inline-block"
      >
        ← Back to Case Studies
      </Link>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
        GRP — Manufacturing Modernization &amp; Industry 4.0
      </h1>
      <p className="text-slate-400 text-sm mb-6">Jan 2019 – Sept 2022 &nbsp;·&nbsp; Head – Business Process (Indonesia)</p>

      {/* Metrics banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { value: "$1M+", label: "Annual savings (procurement)" },
          { value: "80%", label: "Inventory movement improvement" },
          { value: "Months→Days", label: "Procurement cycle" },
          { value: "25+", label: "ERP departments re-architected" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-white/10 bg-white/3 p-3 text-center">
            <div className="text-lg font-bold text-accent">{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Intro */}
      <p className="text-slate-300 mb-6">
        I led the digital transformation of Gunung Raja Paksi — Indonesia&apos;s largest privately-owned
        steelmaker — during one of the most consequential periods in its history: its transition from a
        private company to a publicly listed entity. The mandate covered ERP modernization across 25+
        departments, AI-driven procurement intelligence, C-suite analytics, and operational digitalization
        — all while keeping a 50-year-old steel plant running at full capacity.
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
            <li>
              <strong className="text-slate-200">$1M+ annual savings</strong> from AI-driven procurement
              intelligence — predictive scrap pricing and FX trend forecasting enabling optimal sourcing decisions.
            </li>
            <li>
              <strong className="text-slate-200">Procurement cycle: months → days</strong> — automated workflows
              and real-time supplier intelligence collapsed decision time across the procurement chain.
            </li>
            <li>
              <strong className="text-slate-200">Inventory movement improved 80%</strong> — QR-code tracking,
              mobile asset management, and just-in-time availability eliminated stock bottlenecks.
            </li>
            <li>
              <strong className="text-slate-200">ERP modernized across 25+ departments</strong> — unified
              finance, HR, production, and maintenance data for the first time in the company&apos;s history.
            </li>
            <li>
              <strong className="text-slate-200">Board-level data governance enabled</strong> — C-suite
              dashboards delivered data-driven strategic decisions during the IPO transition process.
            </li>
            <li>
              <strong className="text-slate-200">Operational transparency at scale</strong> — real-time scrap
              cost dashboards and location-aware sourcing guidance reduced procurement cost volatility.
            </li>
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
            className="inline-flex items-center rounded-lg border border-accent px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition"
          >
            Book a 20-min Intro
          </Link>
        </div>
      </section>
    </div>
  );
}
