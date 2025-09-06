// /app/transformations/page.tsx
import Link from "next/link";

export default function TransformationsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link
        href="/"
        className="text-sm underline hover:text-accent mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-accent">
        10+ Transformations
      </h1>

      <p className="text-slate-300 mb-8">
        Over the past years I have successfully led more than 10 major digital
        and business transformations across industries — steel, manufacturing,
        product SaaS, and enterprise data platforms. These initiatives delivered
        measurable ROI, cost savings, and operational excellence.
      </p>

      <ol className="list-decimal pl-6 space-y-6 text-slate-400">
        <li>
          <strong>Microservices Reporting Platform</strong>
          <p className="mt-1 text-sm">
            Migrated a monolithic reporting system to a microservices
            architecture (Kafka, Spark, S3/MinIO). Report latency reduced from
            hours to minutes; multi-tenant analytics across regions.
          </p>
        </li>

        <li>
          <strong>Manufacturing Analytics ROI</strong>
          <p className="mt-1 text-sm">
            Implemented analytics-driven procurement and scrap prediction,
            resulting in measurable material cost savings.
          </p>
        </li>

        <li>
          <strong>Executive Dashboards at Scale</strong>
          <p className="mt-1 text-sm">
            Rolled out governed Power BI/QuickSight datasets and semantic models
            to drive C-suite adoption and trusted metrics.
          </p>
        </li>

        <li>
          <strong>SaaS License Optimization</strong>
          <p className="mt-1 text-sm">
            Built SaaS activation/deactivation and monitoring workflows,
            reducing cloud license waste and improving utilization.
          </p>
        </li>

        <li>
          <strong>Factory Digitalization (Industry 4.0)</strong>
          <p className="mt-1 text-sm">
            Delivered IoT edge-to-cloud data pipelines, visualization
            dashboards, and real-time monitoring for steel plants.
          </p>
        </li>

        <li>
          <strong>ERP + BI Integration</strong>
          <p className="mt-1 text-sm">
            Integrated ERP with BI systems to streamline procurement and
            financial reporting, accelerating decision-making.
          </p>
        </li>

        <li>
          <strong>AI/ML for Process Efficiency</strong>
          <p className="mt-1 text-sm">
            Deployed predictive ML models for scrap reduction, yield improvement
            and preventive maintenance.
          </p>
        </li>

        <li>
          <strong>Enterprise Data Platform Modernization</strong>
          <p className="mt-1 text-sm">
            Consolidated siloed data systems into an enterprise data lake with
            Iceberg/Parquet, enabling self-service analytics.
          </p>
        </li>

        <li>
          <strong>Indonesia Steel Plant Automation</strong>
          <p className="mt-1 text-sm">
            Digitalized key operational processes with dashboards, workflow
            automation, and KPI visibility across departments.
          </p>
        </li>

        <li>
          <strong>OpenLM Product Expansion</strong>
          <p className="mt-1 text-sm">
            Led development of SaaS license monitoring & optimization tools for
            OpenLM, delivering significant cost reductions for clients.
          </p>
        </li>
      </ol>

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
