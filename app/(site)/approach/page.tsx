// /app/approach/page.tsx
import Link from "next/link";
import { NAME, ROLE, DETAILED_RESUME_URL } from "@/lib/constants";

// Import client components (interactive)
import DataFlowDiagramClient from "@/components/DataFlowDiagramClient";
import GovernanceDiagramClient from "@/components/GovernanceDiagramClient";

export default function ApproachPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <a href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </a>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-accent">Our Approach to Transformation</h1>
        <p className="mt-3 text-slate-300">
          Pragmatic, risk-aware, outcome-driven transformation for industrial engineering and data platforms — a playbook I use to convert pilots into sustained
          business value while keeping operations running.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">Principles I follow</h2>

        <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-400">
          <li><strong>Business-first:</strong> start with measurable outcomes (cost, throughput, safety, cycle-time) and work backwards to technical scope.</li>
          <li><strong>Incremental delivery:</strong> small, safe pilots that deliver value early and de-risk at every step.</li>
          <li><strong>Repeatable patterns:</strong> build blueprints and reusable components so success can be scaled across sites/regions.</li>
          <li><strong>Operational ownership:</strong> hand over reliable runbooks, dashboards and SRE practices so operations own day-2 support.</li>
          <li><strong>Data confidence:</strong> governed datasets, semantic layers and signed-off KPIs to make executive decisions trustable.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">Phased Delivery — Discovery → Pilot → Scale → Operate</h2>

        <div className="mt-6 space-y-8 text-slate-400">
          {/* ... keep the rest of your phased content exactly as before ... */}
          <div>
            <h3 className="text-xl font-semibold">1. Discover (2–4 weeks)</h3>
            <p className="mt-2">Rapid fact-finding to map stakeholders, data sources, and constraints. Deliverables:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Business impact hypotheses and priority KPIs.</li>
              <li>Source-of-truth inventory (systems, sensors, files, people).</li>
              <li>Feasibility & risk map with pragmatic next-step recommendations.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Pilot (6–12 weeks)</h3>
            <p className="mt-2">Build a focused proof-of-value that demonstrates ROI and informs architecture decisions. Deliverables:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Working data pipeline / ingestion to a serving table or semantic view.</li>
              <li>Operational dashboard with validated KPIs and user acceptance tests.</li>
              <li>Clear migration & scale plan (costs, infra, team roles).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Scale (3–9 months)</h3>
            <p className="mt-2">Apply learnings to a broader rollout with hardened platform components and governance. Deliverables:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Platform components (governed lakehouse, streaming layer, semantic APIs).</li>
              <li>Multi-tenant boundary & quota model where required (regions / business units).</li>
              <li>Automated CI/CD, infra-as-code and templates for rapid project bootstrapping.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">4. Operate (ongoing)</h3>
            <p className="mt-2">Transfer ownership to operations and product teams with the right tooling and runbooks. Deliverables:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Runbooks, SLOs, alerting and on-call playbooks for incident response.</li>
              <li>Governance cadence (dataset owners, KPI review board, release window policies).</li>
              <li>Continuous improvement loop: instrumentation + metric-driven backlog prioritisation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent">Example: Data Flow (Interactive)</h2>
        <p className="text-slate-400 mt-2">Hover layers to highlight them. Click the diagram to open an expanded, interactive view.</p>
        <DataFlowDiagramClient />
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent">Example: Governance (Interactive)</h2>
        <p className="text-slate-400 mt-2">Hover building blocks to focus them. Click to expand the governance diagram.</p>
        <GovernanceDiagramClient />
      </section>

      {/* keep the remainder of your Approach content (Patterns, Governance, CTA) here */}
      <section className="mb-10 mt-8">
        <h2 className="text-2xl font-semibold text-accent">Patterns & Technical Choices</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4 text-slate-400">
          <div>
            <h4 className="font-semibold">Data Platform</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Open table formats (Iceberg/Delta) on object storage for ACID & time-travel.</li>
              <li>Parquet columnar files for cost-efficient analytics and compaction strategies.</li>
              <li>Serving tables / materialized views for executive dashboards to ensure low-latency.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Streaming & Integration</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Event-first ingestion (Kafka or managed pub/sub) for replayability and resiliency.</li>
              <li>Lightweight edge adapters for OT/PLC systems to avoid plant disruption.</li>
              <li>Schema evolution patterns & data contracts to prevent downstream breakages.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
        <h3 className="text-lg font-semibold">Want a customised transformation plan?</h3>
        <p className="mt-2 text-slate-300">
          I prepare bespoke, phased plans aligned to your priorities — from a short discovery to full delivery. Share your challenge and I’ll propose a concrete next step.
        </p>

        <div className="mt-4 flex gap-3">
          <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition">
            Book a discussion
          </a>

          <a href={DETAILED_RESUME_URL} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition">
            Request the playbook
          </a>
        </div>
      </div>
    </div>
  );
}
