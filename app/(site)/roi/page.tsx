// /app/(site)/roi/page.tsx
import Link from "next/link";
import { YEARS } from "@/lib/constants";

export const metadata = {
  title: "ROI Delivered — Soumen Roy",
  description:
    "Highlights of $50M+ ROI achieved through enterprise transformations, analytics, and digital modernization.",
};

export default function RoiPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Top back link (underlined) */}
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      {/* Accent-colored main heading (match Countries page) */}
      <h1 className="text-3xl md:text-4xl font-bold text-accent">ROI Delivered</h1>

      {/* Intro */}
      <p className="mt-4 text-slate-300">
        Over my <span className="font-semibold">{YEARS}</span> of leadership, I have aligned
        technology with business outcomes — generating{" "}
        <span className="font-semibold">$50M+ in measurable ROI</span> across manufacturing,
        software, and enterprise modernization programs.
      </p>

      {/* PROGRAM AREAS */}
      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            💹 ROI from Analytics in Manufacturing
          </h2>
          <p className="mt-2 text-slate-300">
            Predictive analytics for procurement and scrap cost optimization produced tangible
            material savings and faster plant decisions with traceable KPIs.
          </p>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Raw-material spend reduction: <span className="font-semibold">3–8% YoY</span>.</li>
            <li>Cycle time to approve POs: <span className="font-semibold">30–50% faster</span>.</li>
            <li>Exception-driven reviews cut manual effort by <span className="font-semibold">25–35%</span>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            ⚙️ Reporting Modernization (Monolith → Microservices)
          </h2>
          <p className="mt-2 text-slate-300">
            Re-architected enterprise reporting using Kafka/Spark and object storage, reducing
            latency and enabling executive-ready, multi-tenant analytics across regions.
          </p>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Report latency: hours → minutes (<span className="font-semibold">95%+</span> reduction).</li>
            <li>Time-to-insight for leadership reviews improved by <span className="font-semibold">2–3×</span>.</li>
            <li>Decommissioned legacy jobs/licences → OPEX savings of <span className="font-semibold">15–20%</span>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            🧭 Engineering Digitalization & Industry 4.0
          </h2>
          <p className="mt-2 text-slate-300">
            Introduced digital workflows and twins to reduce rework and delays in complex
            engineering programs, improving schedule adherence and capital efficiency.
          </p>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Design rework reduced by <span className="font-semibold">20–30%</span>.</li>
            <li>Field-change orders down by <span className="font-semibold">10–15%</span>.</li>
            <li>Commissioning readiness improved; handover defects down <span className="font-semibold">25%+</span>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            📊 Executive Dashboards & Governed KPIs
          </h2>
          <p className="mt-2 text-slate-300">
            Rolled out C-suite analytics with semantic models and governed metrics, standardizing
            reviews and reducing shadow-IT reporting costs.
          </p>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>KPI standardization across BUs; reduced conflicting numbers by <span className="font-semibold">80%+</span>.</li>
            <li>Manual deck preparation time down by <span className="font-semibold">50–70%</span>.</li>
            <li>Adoption (monthly active execs): <span className="font-semibold">85%+</span> within two quarters.</li>
          </ul>
        </section>

        {/* BUSINESS IMPACT SUMMARY */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            🧾 Representative KPIs & Outcomes
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
            <li>Cloud & infra optimization: <span className="font-semibold">15–25%</span> cost reduction via right-sizing and tiering.</li>
            <li>SLA/MTTR improvements: incidents resolved <span className="font-semibold">30–40%</span> faster with proactive observability.</li>
            <li>Revenue enablement: faster quoting & on-boarding → <span className="font-semibold">2–5%</span> uplift in conversion in targeted lines.</li>
            <li>Compliance risk: auditable lineage & access controls; findings reduced in subsequent audits.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            🧮 How the $50M+ ROI Was Realized (Illustrative Mix)
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
            <li><span className="font-semibold">Cost Savings:</span> decommissioned tooling, infra optimization, manual-effort reduction.</li>
            <li><span className="font-semibold">Cost Avoidance:</span> early-risk detection, fewer change orders, better forecast accuracy.</li>
            <li><span className="font-semibold">Revenue Enablement:</span> faster time-to-market, improved win-rates via timely insights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent flex items-center gap-2">
            🏁 Governance & Measurement
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
            <li>ROI model agreed upfront with Finance & BU leaders; tracked quarterly.</li>
            <li>Before/After baselines; independent validation for major initiatives.</li>
            <li>Adoption metrics (MAU/WAU), SLA targets, and value-realization dashboards.</li>
          </ul>
        </section>
      </div>

      {/* Bottom back button (bordered) */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 hover:border-white/30 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
