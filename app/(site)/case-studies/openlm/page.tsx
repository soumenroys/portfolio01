// /app/(site)/case-studies/openlm/page.tsx
import Link from "next/link";
import LightboxGallery from "@/components/LightboxGallery";

export default function OpenLMCaseStudy() {
  // ✅ Image files in /public/images/case-studies/openlm/
  const images = [
    "/images/case-studies/openlm/license_monitoring.png",
    "/images/case-studies/openlm/activation_flow.png",
    "/images/case-studies/openlm/usage_dashboard.png",
  ];

  const captions = [
    "License telemetry & usage monitoring dashboard",
    "SaaS activation / lifecycle automation flow",
    "Cost optimisation dashboard showing reclaimable licenses",
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
        OpenLM — SaaS License Activation & Optimization
      </h1>

      {/* Intro */}
      <p className="text-slate-300 mb-6">
        As part of product and professional services engagements with OpenLM initiatives, I architected SaaS lifecycle
        services for license activation, telemetry, and automated reclamation. These solutions helped enterprise
        customers regain control of license spend, automate entitlement workflows, and surface usage insights to product
        & finance teams.
      </p>

      <section className="space-y-8 text-slate-400">
        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Problem Statement</h2>
          <p className="mt-2 text-sm">
            Organizations using commercial engineering and analytics tools frequently over-provision licenses or leave
            them assigned when not actively used. This creates unnecessary spend and governance risks. Manual license
            process and lack of telemetry made it hard to reconcile consumption vs entitlement.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>License costs spiralling without visibility into actual use.</li>
            <li>Manual activation/deactivation processes causing long lead-times.</li>
            <li>Inability to reclaim unused licenses safely without interrupting users.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Approach</h2>
          <p className="mt-2 text-sm">
            We built a SaaS lifecycle and telemetry platform designed around three pillars:{" "}
            <strong>visibility, automation, and policy-driven reclamation</strong>. Workstreams included telemetry
            ingestion, entitlement reconciliation, automation rules, and actionable dashboards for finance and product
            owners.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Ingested usage events from clients' agents into a central event stream (Kafka / managed pubsub).</li>
            <li>
              Normalized events and correlated them with license entitlement data to produce accurate utilisation
              metrics.
            </li>
            <li>
              Implemented policy-driven automation: idle-window detection, safe suspension, and reclaim workflows with
              human-in-the-loop approvals.
            </li>
            <li>Exposed APIs for activation / deactivation and integrated with SSO / provisioning systems.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Solution — What We Delivered</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>
              <strong>Centralized license registry</strong> that stores entitlements, seat assignments, and policy flags.
            </li>
            <li>
              <strong>Streaming telemetry pipeline</strong> for near-real-time usage events and session analytics.
            </li>
            <li>
              <strong>Automation engine</strong> for lifecycle actions (suspend, reclaim, notify) with audit trails.
            </li>
            <li>
              <strong>Dashboards & recommendations</strong> to identify reclaimable licenses and optimize spend.
            </li>
            <li>
              <strong>Integrations:</strong> SSO, ITSM (ServiceNow type), billing, and alerting systems.
            </li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Representative Tech Stack</h2>
          <p className="mt-2 text-sm">
            Kafka / Managed PubSub, Spark/Flink streaming, Postgres / ClickHouse for serving, Kafka Connect / CDC for
            entitlements sync, Docker & Kubernetes, Prometheus & Grafana, and a React+Next frontend for dashboards and
            admin.
          </p>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Business Outcomes</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>
              Recovered license spend: single-customer engagements reclaimed mid-double-digit % of wasted licenses within
              quarters.
            </li>
            <li>Reduced manual provisioning lead-times from days to minutes via automation APIs.</li>
            <li>
              Improved governance and auditability — full audit trail for license actions and human approvals.
            </li>
            <li>
              Actionable recommendations allowed product & finance teams to negotiate better license terms.
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
            Explore how license automation can reduce your SaaS spend →
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
