import Image from "next/image";

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl space-y-12">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          OpenLM: Microservices Reporting Platform
        </h1>
        <p className="text-slate-300 leading-7">
          As Head of Technology Transformation, I led OpenLM’s shift from a legacy,
          monolithic reporting system to a modern, event-driven microservices
          platform — scaling engineering, embedding analytics, and enabling SaaS
          expansion globally.
        </p>
      </header>

      {/* Contributions */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6">
        <h2 className="text-2xl font-semibold">My Contributions</h2>

        <div className="space-y-4 text-slate-200 leading-7">
          <p>
            At OpenLM, I was responsible for transforming the company’s reporting
            backbone and positioning it for enterprise SaaS growth. My key
            contributions spanned architecture, engineering leadership, analytics,
            and business impact:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Platform Modernization:</strong> Re-architected a batch-driven
              monolith into a microservices platform with Kafka, Spark, MongoDB,
              Postgres, and S3/MinIO, enabling real-time analytics and multi-tenancy.
            </li>
            <li>
              <strong>Engineering Leadership:</strong> Grew Indian operations from 3
              to 85 engineers across 4 squads. Embedded CI/CD, IaC, and observability
              as cultural practices. Achieved 70% infra cost reduction and 30% cloud
              savings.
            </li>
            <li>
              <strong>Analytics Transformation:</strong> Delivered BI through Power
              BI, Superset, and embedded QuickSight portals with secure, branded,
              role-based access. Built self-service analytics for compliance, usage,
              denials, and cost optimization.
            </li>
            <li>
              <strong>Product & Customer Impact:</strong> Enabled customers to cut
              reporting latency from hours to minutes, achieve 10× ingestion
              throughput, and reduce duplicative infra costs through a true
              multi-tenant model.
            </li>
            <li>
              <strong>Strategic Value:</strong> Positioned OpenLM as a SaaS-ready SAM
              provider, opening pathways into contract management, ServiceNow/Monday
              integrations, and broader software asset optimization.
            </li>
          </ul>
        </div>
      </section>

      {/* Product Dashboards */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Product Dashboards</h2>
        <p className="leading-7 text-slate-200">
          Feature hubs and admin views that power OpenLM’s daily operations.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Figure
            src="/images/case-studies/microservices-reporting-platform/product/dashboard-1.png"
            alt="OpenLM product hubs overview"
            caption="Feature hubs & admin tools"
          />
          <Figure
            src="/images/case-studies/microservices-reporting-platform/product/dashboard-2.png"
            alt="OpenLM reporting service entry points"
            caption="Reporting service shortcuts"
          />
          <Figure
            src="/images/case-studies/microservices-reporting-platform/product/dashboard-3.png"
            alt="OpenLM process sessions"
            caption="Process sessions detail"
          />
        </div>
      </section>

      {/* Architecture */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Architecture Overview</h2>
        <p className="leading-7 text-slate-200">
          Agents & Brokers stream data into Kafka; microservices and enrichment
          persist to MongoDB/Postgres; Spark ETL prepares datasets for reporting
          and S3/Athena. BI is served via Superset, Power BI, and embedded QuickSight.
        </p>

        <FigureWide
          src="/images/case-studies/microservices-reporting-platform/architecture.png"
          alt="End-to-end architecture"
          caption="Event-driven architecture enabling real-time analytics and SaaS scale"
        />
      </section>

      {/* BI Reporting */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">BI Reporting</h2>
        <p className="leading-7 text-slate-200">
          Executives, compliance managers, and operations teams access actionable
          insights through dashboards covering cost, usage, denials, compliance,
          and project performance.
        </p>

        {/* Row 1 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/cost-report.png"
            alt="Cost report dashboard"
            caption="Cost visibility by package, user, and license type"
          />
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/top5-report.png"
            alt="Top 5 report dashboard"
            caption="Top features, users, idle time, and denials"
          />
        </div>

        {/* Row 2 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/summary-report.png"
            alt="Summary report dashboard"
            caption="Server status, utilization and denials overview"
          />
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/usage-report.png"
            alt="License usage report"
            caption="Usage by feature, vendor, server, and time"
          />
        </div>

        {/* Row 3 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/denials-report.png"
            alt="Denials analytics"
            caption="Denied users, causes, and feature hotspots"
          />
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/project-report.png"
            alt="Project report"
            caption="Utilization by project, priority and status"
          />
        </div>

        {/* Row 4 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/compliance-report.png"
            alt="Compliance report"
            caption="Geo compliance view by user and feature"
          />
          <Figure
            src="/images/case-studies/microservices-reporting-platform/bi/dongle-report.png"
            alt="Dongle monitoring"
            caption="Device usage, blacklist and time by host"
          />
        </div>

        {/* Full-width */}
        <FigureWide
          src="/images/case-studies/microservices-reporting-platform/bi/concurrent-report.png"
          alt="Concurrent usage report"
          caption="Concurrent usage by feature, server, and hour"
        />
      </section>

      {/* CTA */}
      <div className="pt-2">
        <a
          href="/contact"
          className="inline-flex items-center rounded-2xl bg-accent px-4 py-2 font-medium text-slate-900 hover:opacity-90"
        >
          Ask how I’d replicate this for your org →
        </a>
      </div>
    </section>
  );
}

/* Helper Components */
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
      <figcaption className="mt-2 text-xs text-slate-400">{caption}</figcaption>
    </figure>
  );
}
