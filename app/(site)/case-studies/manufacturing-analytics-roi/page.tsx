import Image from "next/image";

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl space-y-12">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Manufacturing Analytics ROI — Gunung Raja Paksi (GRP)
        </h1>
        <p className="text-slate-300 leading-7">
          At GRP, Indonesia’s largest private steelmaker, I spearheaded an enterprise-wide analytics and Industry 4.0 transformation —
          integrating ERP + plant data, predictive procurement, and executive dashboards to deliver measurable ROI and
          modernize legacy workflows.
        </p>
      </header>

      {/* Contributions */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6">
        <h2 className="text-2xl font-semibold">My Contributions</h2>
        <ul className="list-disc space-y-3 pl-6 text-slate-200 leading-7">
          <li>
            <strong>ERP & Plant Data Integration:</strong> Unified fragmented ERP, plant historians, vendor feeds, and
            price indices into a governed data backbone with audit trails and lineage.
          </li>
          <li>
            <strong>Predictive Procurement:</strong> Developed ML models to forecast scrap/raw material price movements,
            enabling buyers to time purchases optimally and reduce cost volatility.
          </li>
          <li>
            <strong>Executive Dashboards:</strong> Delivered semantic BI models (Power BI / QuickSight) with standardized KPIs across procurement, production, and finance; implemented row-level security (RLS).
          </li>
          <li>
            <strong>Industry 4.0 Transformation:</strong> Re-engineered legacy procurement and production workflows into automated,
            IoT- and data-driven processes. Introduced predictive maintenance, real-time monitoring, and digital twins to
            shift GRP’s operating model from reactive to proactive.
          </li>
          <li>
            <strong>Governance & Change Management:</strong> Established KPI governance, standardized reporting hierarchies, and
            trained buyers, operations staff, and finance leaders — moving the org from static reports to weekly executive reviews.
          </li>
        </ul>
      </section>

      {/* Context & Mission */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Context">
          <p className="leading-7 text-slate-200">
            Volatile scrap/raw material prices, siloed ERP vs. plant data, and manual reporting slowed decisions and
            increased procurement costs. Legacy workflows lacked predictive insight or automation.
          </p>
        </Card>
        <Card title="Mission">
          <p className="leading-7 text-slate-200">
            Establish a governed analytics & Industry 4.0 foundation — integrating ERP + plant data, enabling predictive
            procurement, automating workflows, and providing trusted KPIs through executive dashboards.
          </p>
        </Card>
      </section>

      {/* Architecture */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Architecture Overview</h2>
        <p className="leading-7 text-slate-200">
          ERP + plant historian + vendor feeds → curated data warehouse → feature store for procurement →
          predictive ML models → Industry 4.0 workflows → governed BI dashboards.
        </p>

        <FigureWide
          src="/images/case-studies/manufacturing-analytics-roi/architecture.png"
          alt="GRP analytics and Industry 4.0 architecture"
          caption="Integrated ERP + plant + external feeds → predictive models + Industry 4.0 automation → governed BI dashboards"
        />
      </section>

      {/* Dashboards */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Executive & Operations Dashboards</h2>
        <p className="leading-7 text-slate-200">
          Role-based dashboards for procurement, operations, and finance — enabling a shift from reactive to predictive,
          and aligning all functions on governed KPIs.
        </p>

        {/* Row 1 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/manufacturing-analytics-roi/bi/procurement-overview.png"
            alt="Procurement overview"
            caption="Spend analysis, supplier performance, and buy-window recommendations"
          />
          <Figure
            src="/images/case-studies/manufacturing-analytics-roi/bi/price-forecast.png"
            alt="Price forecast"
            caption="Forecasted scrap/raw material prices with confidence intervals"
          />
        </div>

        {/* Row 2 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/manufacturing-analytics-roi/bi/operations-kpi.png"
            alt="Operations KPI"
            caption="Production throughput, quality, and utilization trends"
          />
          <Figure
            src="/images/case-studies/manufacturing-analytics-roi/bi/finance-kpi.png"
            alt="Finance KPI"
            caption="Working capital, cost-to-serve, and budget variance tracking"
          />
        </div>
      </section>

      {/* Results */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Results</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-200 leading-7">
          <li>
            <strong>Procurement ROI:</strong> Optimized material purchase timing, reducing volatility and emergency buys.
          </li>
          <li>
            <strong>Operational Efficiency:</strong> Weekly decision cadence established around trusted KPIs.
          </li>
          <li>
            <strong>Industry 4.0 Adoption:</strong> Legacy manual flows upgraded into digital, automated, and predictive
            workflows, positioning GRP as a modern, competitive steelmaker in Southeast Asia.
          </li>
          <li>
            <strong>Executive Alignment:</strong> Dashboards and predictive insights became central to C-suite strategy.
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="mt-3 leading-7 text-slate-200">
          Python • SQL • Power BI / QuickSight • Airflow • ERP Connectors • Cloud Data Warehouse • GitHub Actions • Terraform (IaC) • IoT / Industry 4.0 Integrations
        </p>
      </section>

      {/* CTA */}
      <div className="pt-2">
        <a
          href="/contact"
          className="inline-flex items-center rounded-2xl bg-accent px-4 py-2 font-medium text-slate-900 hover:opacity-90"
        >
          Explore how Industry 4.0 workflows can modernize your operations →
        </a>
      </div>
    </section>
  );
}

/* Helper Components */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-black/10 p-3">
      <Image src={src} alt={alt} width={600} height={400} className="rounded-xl" />
      <figcaption className="mt-2 text-xs text-slate-400">{caption}</figcaption>
    </figure>
  );
}

function FigureWide({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-black/10 p-3">
      <Image src={src} alt={alt} width={1200} height={600} className="rounded-xl" />
      <figcaption className="mt-2 text-sm text-slate-400">{caption}</figcaption>
    </figure>
  );
}
