// /app/case-studies/executive-dashboards-scale/page.tsx
import Link from "next/link";

export default function ExecutiveDashboardsScale() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-accent">Executive Dashboards at Scale</h1>

      <p className="text-slate-300 mb-6">
        Rolled out governed enterprise dashboards and semantic models to power C-suite decisioning across multiple business units and regions. The program focused on building <strong>trusted metrics</strong>, repeatable dataset governance, and performant dashboards that executives actually use.
      </p>

      <section className="space-y-8 text-slate-400">
        <article>
          <h2 className="text-xl font-semibold text-accent">Context & Challenge</h2>
          <p className="mt-2">
            Large organizations often suffer from multiple versions of the truth: many teams build dashboards against different data extracts and transformation logic. This case targeted a global enterprise effort to replace ad-hoc reports with governed executive dashboards that provide a single source of truth and fast answers for leadership.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Multiple BI tools in use (Power BI, QuickSight, legacy Excel-based reporting).</li>
            <li>Inconsistent KPIs across business units and regions.</li>
            <li>Long lead times for dashboard requests due to manual dataset preparation.</li>
            <li>Performance issues — some dashboards took minutes to render, harming adoption.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">Approach</h2>
          <p className="mt-2">
            We used a three-layer approach: <strong>governance, semantic modeling, and performance engineering</strong>. The work was split into discovery, pilot, and enterprise roll-out phases with clear acceptance criteria at each stage.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li><strong>Discovery:</strong> aligned stakeholders on top 10 executive KPIs and source-of-truth datasets.</li>
            <li><strong>Pilot:</strong> built canonical semantic models and a few high-impact dashboards with Power BI/QuickSight connectors.</li>
            <li><strong>Roll-out:</strong> operationalised dataset certification, scheduling, and access controls; established change-control for KPI evolution.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">Solution — What We Built</h2>
          <p className="mt-2">
            Delivered a repeatable pattern for enterprise dashboards that combined governed datasets (served from the data platform), semantic models, and optimized dashboard design.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li><strong>Certified datasets:</strong> curated, tested datasets in the data lakehouse (Iceberg/Parquet) exposed via semantic views.</li>
            <li><strong>Semantic layer:</strong> reusable semantic models (calculated measures, hierarchies) that Power BI & QuickSight teams consumed.</li>
            <li><strong>Performance layer:</strong> pre-aggregations and query acceleration (materialized views / serving tables) to ensure sub-second to few-second dashboard loads.</li>
            <li><strong>Governance:</strong> dataset certification process, role-based access, a KPI registry, and a lightweight data contract process for downstream owners.</li>
            <li><strong>Onboarding & docs:</strong> dashboard design patterns, performance checklists, and training for analysts and report authors.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">Representative Tech Stack</h2>
          <p className="mt-2 text-sm">
            Apache Iceberg / Parquet, Presto/Trino or Spark SQL, materialized serving tables (Redshift/ClickHouse/Postgres), Power BI, AWS QuickSight, dbt or Spark-based transforms, Airflow/GitHub Actions for orchestration, RBAC via IAM/ABAC, and monitoring via Prometheus/Grafana.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">Results & Business Impact</h2>
          <p className="mt-2">
            The program shifted dashboards from being a cost center to a strategic asset — executives began using dashboards daily for decision making.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Adoption: executive dashboard usage grew from ad-hoc (sporadic) to daily active use among leadership teams.</li>
            <li>Trust: certified datasets reduced KPI disputes by &gt;80% in pilot units.</li>
            <li>Performance: majority of executive dashboards rendered within 2–5 seconds (where previously many took minutes).</li>
            <li>Delivery speed: average time to deliver a new executive dashboard dropped from weeks to days due to semantic model reuse.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">Sample Metrics</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Trusted KPI ratio (certified KPIs / requested KPIs): increased to ~90% in rolled-out divisions.</li>
            <li>Dashboard render time: median reduced to 2–5s for executive views.</li>
            <li>Time-to-delivery: mean time to create a new certified dashboard reduced by ~60%.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">How we ensured sustainability</h2>
          <p className="mt-2">
            To keep dashboards healthy after rollout, we introduced governance cadence (dataset owners, monthly KPI reviews), automated freshness alerts, and a lightweight SLA for dataset issues. Analysts were empowered with semantic models and a "pattern library" to avoid one-off reports.
          </p>
        </article>

        {/* Adjacent CTA buttons — match other case-study pages */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
            aria-label="Explore how executive dashboards can accelerate decision-making"
          >
            Explore how executive dashboards can accelerate decision-making →
          </Link>
        </div>
      </section>
    </div>
  );
}
