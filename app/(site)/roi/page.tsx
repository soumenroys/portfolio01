// /app/(site)/roi/page.tsx
import Link from "next/link";
import { YEARS } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "ROI & Business Impact — Soumen Roy",
  description:
    "$50M+ ROI delivered through enterprise transformations — ARR growth, SaaS platform modernization, manufacturing analytics, and engineering digitalization.",
  openGraph: {
    title: "ROI & Business Impact | Soumen Roy",
    url: "https://soumenroy.com/roi",
    images: [{ url: "/og?title=ROI+%26+Business+Impact&sub=%2450M%2B+delivered+across+10%2B+enterprise+transformations", width: 1200, height: 630 }],
  },
};

export default function RoiPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <BreadcrumbJsonLd items={[{ name: "ROI & Business Impact", href: "/roi" }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-accent">ROI &amp; Business Impact</h1>

      <p className="mt-4 text-slate-300">
        Over {YEARS} years of leadership I have aligned technology investments with business
        outcomes — generating{" "}
        <span className="font-semibold">$50M+ in measurable ROI</span> across manufacturing,
        SaaS, and enterprise modernization programs.
      </p>

      {/* Top-level summary metrics */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "$50M+", label: "Total ROI Delivered" },
          { value: "$35K+", label: "Avg. Enterprise Renewal" },
          { value: "$1M+", label: "Annual Procurement Savings" },
          { value: "70%", label: "Infrastructure Cost Cut" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/3 p-4 text-center">
            <div className="text-2xl font-bold text-accent">{stat.value}</div>
            <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── ENTERPRISE VALUE CREATION ── */}
      <section className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-accent mb-1">
          Enterprise Value Creation
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Revenue and commercial impact from platform transformation at OpenLM
        </p>

        {/* Metric highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-bold text-slate-100">$2K–$5K</div>
            <div className="text-xs text-slate-500 mt-1">Avg. customer renewal before</div>
          </div>
          <div className="flex items-center justify-center text-accent font-bold text-2xl">→</div>
          <div className="rounded-xl border border-accent/40 bg-accent/10 p-4 text-center">
            <div className="text-2xl font-bold text-accent">$35K+</div>
            <div className="text-xs text-slate-400 mt-1">Avg. customer renewal after</div>
          </div>
        </div>

        <ul className="space-y-3 text-slate-300 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">SMB to enterprise market shift:</strong> enabled
              entry into large global deals across US, Europe, and Japan — unlocking enterprise
              contract sizes that were previously out of reach.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">Consumption-based pricing model:</strong>{" "}
              introduced profitability tracking per customer and improved deal conversion rates —
              replacing flat-fee licensing that obscured true margin.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">Analytics-driven retention:</strong> built
              product analytics capabilities that improved customer stickiness and gave the
              customer success team actionable signals before churn.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">Unlimited scale unlocked:</strong> removed the
              1,000-user ceiling — enabling enterprise-wide deployments for customers with
              global, multi-site license estates.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">Infrastructure cost reduction of 70%:</strong>{" "}
              migrating to a consumption-based, right-sized cloud architecture reduced Apache
              infrastructure spend while improving performance and reliability.
            </span>
          </li>
        </ul>
      </section>

      {/* ── MANUFACTURING IMPACT ── */}
      <section className="mt-6 rounded-xl border border-white/10 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-accent mb-1">
          Manufacturing & Industrial Impact
        </h2>
        <p className="text-sm text-slate-400 mb-5">
          Operational savings from AI-driven procurement and digital transformation at Gunung Raja Paksi
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
          {[
            { value: "$1M+", label: "Annual savings from AI procurement" },
            { value: "80%", label: "Inventory movement improvement" },
            { value: "Months→Days", label: "Procurement cycle reduction" },
            { value: "~30%", label: "Revenue leakage recovered at Tata Steel" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/3 p-3 text-center">
              <div className="text-xl font-bold text-slate-100">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <ul className="space-y-3 text-slate-300 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">AI-driven scrap procurement:</strong> built
              predictive ML platform forecasting scrap prices and FX trends — enabling
              just-in-time sourcing and reducing cost volatility for a major steel producer.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">Board-level data governance:</strong> delivered
              C-suite dashboards unifying finance, HR, production, and maintenance data —
              enabling data-driven strategic decisions during the company&apos;s IPO transition.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold mt-0.5 shrink-0">✦</span>
            <span>
              <strong className="text-slate-100">Industry 4.0 at Tata Steel:</strong> pioneered
              drone-based 3D modelling across 800+ acres — an industry first — recovering
              ~30% revenue leakage and reducing engineering rework by 20%.
            </span>
          </li>
        </ul>
      </section>

      {/* ── PROGRAM AREAS ── */}
      <div className="mt-6 space-y-8">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            ROI from Analytics in Manufacturing
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Reporting Modernization (Monolith → Microservices)
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Engineering Digitalization &amp; Industry 4.0
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Executive Dashboards &amp; Governed KPIs
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
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Representative KPIs &amp; Outcomes
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
            <li>Cloud & infra optimization: <span className="font-semibold">15–25%</span> cost reduction via right-sizing and tiering.</li>
            <li>SLA/MTTR improvements: incidents resolved <span className="font-semibold">30–40%</span> faster with proactive observability.</li>
            <li>Revenue enablement: faster quoting & on-boarding → <span className="font-semibold">2–5%</span> uplift in conversion in targeted lines.</li>
            <li>Compliance risk: auditable lineage & access controls; findings reduced in subsequent audits.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            How the $50M+ ROI Was Realized
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
            <li><span className="font-semibold">Cost Savings:</span> decommissioned tooling, infra optimization, manual-effort reduction.</li>
            <li><span className="font-semibold">Cost Avoidance:</span> early-risk detection, fewer change orders, better forecast accuracy.</li>
            <li><span className="font-semibold">Revenue Enablement:</span> faster time-to-market, improved win-rates via timely insights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Governance &amp; Measurement
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
            <li>ROI model agreed upfront with Finance & BU leaders; tracked quarterly.</li>
            <li>Before/After baselines; independent validation for major initiatives.</li>
            <li>Adoption metrics (MAU/WAU), SLA targets, and value-realization dashboards.</li>
          </ul>
        </section>
      </div>

    </div>
  );
}
