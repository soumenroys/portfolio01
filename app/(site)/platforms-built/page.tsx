// /app/platforms-built/page.tsx
import Link from "next/link";

export default function PlatformsBuiltPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-accent">
        Platforms Built — Data & Microservices
      </h1>

      <p className="text-slate-300 mb-6">
        I have architected and delivered end-to-end data platforms and microservice
        ecosystems that enabled self-service analytics, operational resilience,
        and measurable business outcomes. These platforms span data lakes, governed
        semantic layers, real-time event streams, and microservices-based reporting
        systems for large industrial and SaaS customers.
      </p>

      <section className="space-y-8 text-slate-400">
        <article>
          <h2 className="text-xl font-semibold text-accent">
            Enterprise Data Platform Modernization
          </h2>
          <p className="mt-2">
            Consolidated siloed on-prem and cloud data into a governed data lake using
            Apache Iceberg on object storage (Parquet format). The platform provided:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>ACID-compliant table formats with time-travel and schema evolution (Iceberg).</li>
            <li>Parquet storage for performant columnar analytics and reduced storage cost.</li>
            <li>Object storage integration (MinIO / S3 compatible) for cheap, scalable storage.</li>
            <li>Data cataloging, dataset lineage, and role-based access for governed self-service.</li>
          </ul>
          <p className="mt-2 text-sm text-slate-300">
            Impact: reduced analytical ETL time by 60–80%, enabled trusted metrics across teams,
            and accelerated dashboard delivery for business stakeholders.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            Microservices Reporting Platform
          </h2>
          <p className="mt-2">
            Designed a microservices-first reporting architecture to replace a monolithic
            reporting stack. Key elements:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Event-driven ingestion with Kafka (high-throughput buffering & replayability).</li>
            <li>Stream processing (Spark/Flink) for near-real-time aggregation and feature extraction.</li>
            <li>Isolated reporting microservices exposing semantic APIs consumed by BI tools.</li>
            <li>Multi-tenant design with quota and governance boundaries for each tenant/region.</li>
          </ul>
          <p className="mt-2 text-sm text-slate-300">
            Outcome: report latency cut from hours to minutes, elastic scale to handle peak ingestion,
            and a clear separation between platform and BI layers for faster feature rollout.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            SaaS Activation, License Monitoring & Optimization
          </h2>
          <p className="mt-2">
            Built SaaS lifecycle services for activation/deactivation, usage telemetry,
            and license optimization (used within OpenLM product initiatives).
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Centralized license registry with usage events streamed to analytics.</li>
            <li>Automation for license provisioning and policy-driven deactivation.</li>
            <li>Cost dashboards and recommendations to reclaim unused licences.</li>
          </ul>
          <p className="mt-2 text-sm text-slate-300">
            Resulted in measurable license cost reduction for customers and improved governance over SaaS spend.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            Operational Observability & CI/CD
          </h2>
          <p className="mt-2">
            Delivered platform reliability through robust CI/CD pipelines, infra-as-code, and
            observability stacks:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Automated builds, tests, and canary deployments for microservices (GitHub Actions / Jenkins).</li>
            <li>Logging/metrics tracing (Prometheus + Grafana + OpenTelemetry) for end-to-end visibility.</li>
            <li>Alerting and runbook integration to reduce MTTR and support SRE workflows.</li>
          </ul>
          <p className="mt-2 text-sm text-slate-300">
            Effect: stable rollouts with predictable lead times and a visible reduction in incident durations.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            Governance, Security & Data Contracts
          </h2>
          <p className="mt-2">
            Implemented governance controls and data contracts to enable safe self-service:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Row/column-level access controls and attribute-based access for datasets.</li>
            <li>Data contracts and schema checks preventing downstream breakages.</li>
            <li>Secure credentials management and auditing for object stores and service principals.</li>
          </ul>
          <p className="mt-2 text-sm text-slate-300">
            This provided the confidence for analytics teams to ship new dashboards without manual gatekeeping.
          </p>
        </article>

        {/* Case Study Section */}
        <article>
          <h2 className="text-xl font-semibold text-accent">
            Case Study: Migrating to Apache Iceberg + Parquet
          </h2>

          <p className="mt-2">
            At one of the largest privately owned steel companies in Indonesia, I led the
            migration of analytics data from traditional relational data stores into a
            modern <strong>data lakehouse architecture</strong> based on Apache Iceberg
            with Parquet as the columnar format. The project required balancing cost,
            governance, and analytical performance across multiple regions.
          </p>

          <h3 className="mt-4 text-lg font-semibold">Objectives</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Unify siloed departmental data into a central, queryable store.</li>
            <li>Enable schema evolution without downtime or re-ingestion.</li>
            <li>Reduce report generation time for management dashboards.</li>
            <li>Lay a foundation for real-time analytics pipelines.</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold">Approach</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Deployed MinIO for object storage with S3 compatibility.</li>
            <li>Adopted Apache Iceberg table format for ACID guarantees and time-travel queries.</li>
            <li>Re-partitioned raw data into Parquet files for efficient scanning.</li>
            <li>Introduced Spark SQL as the query engine, connected to BI tools (Power BI / QuickSight).</li>
            <li>Implemented metadata refresh jobs and catalog sync for governance.</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold">Results</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Batch ETL windows reduced from 8 hours to ~2 hours.</li>
            <li>Ad-hoc query performance improved by 60–70%.</li>
            <li>Enabled reproducible analysis with time-travel queries.</li>
            <li>Storage costs reduced by leveraging compressed Parquet.</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold">Migration Checklist</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>🔍 Assess current data volume, schema complexity, and retention needs.</li>
            <li>📂 Identify landing zone (object storage, MinIO/S3, HDFS).</li>
            <li>⚙️ Define partition strategy (by time, region, product, etc.).</li>
            <li>🧩 Convert legacy tables to Parquet, validate against queries.</li>
            <li>📑 Register tables in Iceberg catalog (Glue/Hive/REST catalog).</li>
            <li>🛠️ Update ETL jobs to write to Iceberg instead of RDBMS.</li>
            <li>📊 Connect BI tools (Power BI, QuickSight, Superset) to new tables.</li>
            <li>🔄 Monitor performance, optimize file sizes, compaction, and caching.</li>
          </ul>

          <p className="mt-4 text-slate-300 text-sm">
            This case study demonstrated how open formats and modern table
            management systems can transform traditional industrial analytics
            into a future-ready lakehouse platform.
          </p>

          {/* Diagram Placeholder */}
          <div className="mt-6 flex justify-center">
            <img
              src="/images/iceberg-architecture.png"
              alt="Apache Iceberg & Parquet Migration Architecture"
              className="rounded-lg border border-white/10 shadow-md max-w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-slate-400 mt-2">
            Figure: Migration from legacy RDBMS to Iceberg + Parquet Lakehouse (S3/MinIO).
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            Representative Tech Stack
          </h2>
          <p className="mt-2 text-sm">
            Kafka, Spark/Flink, Apache Iceberg, Parquet, MinIO / S3, PostgreSQL / ClickHouse,
            Docker & Kubernetes, Prometheus/Grafana, OpenTelemetry, GitHub Actions / Jenkins,
            Python, Java, and Node.js.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            Business Outcomes — Sample Metrics
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Report latency: from ~3–6 hours → 2–5 minutes for core business reports.</li>
            <li>ETL window shrink: 60–80% reduction in batch processing time (Parquet + Iceberg optimizations).</li>
            <li>License spend: single-digit % to mid-teens % reduction in wasted SaaS licensing via automated reclamation.</li>
            <li>MTTR (incidents): decreased by ~40% after observability and runbook automation.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-accent">
            How I work with clients / teams
          </h2>
          <p className="mt-2">
            I partner with product owners, architects, and operations to translate business
            outcomes into a phased technical roadmap. Early emphasis is placed on:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Clearly defined SLAs and success metrics.</li>
            <li>Small, deliverable-aligned milestones to show early ROI.</li>
            <li>Automation and governance that scale without bottlenecks.</li>
          </ul>
        </article>
      </section>

      {/* Back Button at the bottom */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-md border border-white/10 text-sm hover:bg-white/5"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
