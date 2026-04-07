// /app/(site)/case-studies/openlm/page.tsx
import Link from "next/link";
import LightboxGallery from "@/components/LightboxGallery";

import type { Metadata } from "next";
import { canonical } from "@/lib/seo";
import { NAME } from "@/lib/constants";

const OG = "/og?title=OpenLM+%E2%80%94+SaaS+Transformation&sub=Microservices+%C2%B7+AI+Analytics+%C2%B7+3%E2%86%9285%2B+team";

export const metadata: Metadata = {
  title: `OpenLM — SaaS Platform Transformation | ${NAME}`,
  description:
    "Re-architected a legacy monolith into a cloud-native, AI-first SaaS platform — scaling from 1K users to enterprise-grade deployments, 3 to 85+ team members, and $2K to $35K+ ARR per customer.",
  alternates: { canonical: canonical("/case-studies/openlm") },
  openGraph: {
    url: canonical("/case-studies/openlm"),
    title: `OpenLM — Reporting & License Optimization | ${NAME}`,
    description:
      "Telemetry-driven reporting, policy-based reclamation, and automation to cut license waste and improve governance.",
    images: [{ url: OG, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `OpenLM — Reporting & License Optimization | ${NAME}`,
    description:
      "Telemetry-driven reporting and automation for governance and cost reduction.",
    images: [OG],
  },
};

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
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
        OpenLM — SaaS Platform Transformation
      </h1>
      <p className="text-slate-400 text-sm mb-6">Sept 2022 – Present &nbsp;·&nbsp; Tribe Lead</p>

      {/* Metrics banner */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {[
          { value: "3 → 85+", label: "Team scaled" },
          { value: "$2K → $35K+", label: "Avg. customer ARR" },
          { value: "70%", label: "Infra cost reduction" },
          { value: "Daily", label: "Release cadence (was 1–2/yr)" },
          { value: "50%", label: "Downtime reduction" },
          { value: "Near real-time", label: "Data (was twice-daily batch)" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-white/10 bg-white/3 p-3 text-center">
            <div className="text-lg font-bold text-accent">{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Intro */}
      <p className="text-slate-300 mb-6">
        I was brought in with a clear mandate: transform OpenLM from a legacy, monolithic license management
        tool into a scalable, AI-first SaaS platform capable of serving global enterprise customers. Over two
        years I owned the full scope — product architecture, engineering team scaling, real-time data platform,
        AI integration, commercial strategy, and global expansion — working directly with the founders and leadership team.
      </p>

      <section className="space-y-8 text-slate-400">
        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Strategic Mandate</h2>
          <p className="mt-2 text-sm">
            OpenLM had a hard 1,000-user ceiling, a twice-daily batch reporting architecture, and a customer
            base of SMB accounts with average renewals of $2K–$5K. The business needed to move upmarket to
            win enterprise deals across US, Europe, and Japan — but the platform couldn&apos;t support it.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Legacy monolith — no multi-tenancy, no horizontal scale, no real-time data.</li>
            <li>1–2 software releases per year — too slow for enterprise feature demands.</li>
            <li>No AI capabilities, no NLP interface, no consumption-based pricing.</li>
            <li>3-person engineering team — insufficient for the scope of transformation needed.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">What I Built</h2>

          <h3 className="mt-4 font-semibold text-slate-200 text-sm">SaaS Platform Re-architecture</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Re-architected the legacy monolith into a microservices-based, cloud-native SaaS platform.</li>
            <li>Enabled multi-tenant architecture with distributed data using Apache Spark and Kafka.</li>
            <li>Removed the 1,000-user ceiling — platform now supports unlimited enterprise-scale deployments.</li>
            <li>Aligned product architecture with a consumption-based SaaS monetization strategy.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-slate-200 text-sm">Real-Time Data & Analytics Platform</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Built a streaming analytics platform replacing the batch-based reporting system.</li>
            <li>Transitioned from twice-daily reporting to real-time license and usage insights.</li>
            <li>Scaled data capacity from GB to TB-scale processing.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-slate-200 text-sm">AI Engineering & DevOps</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Introduced AI-assisted development, testing, and CI/CD automation.</li>
            <li>Implemented predictive alerting and anomaly detection across microservices.</li>
            <li>Release frequency: 1–2 per year → daily deployments.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-slate-200 text-sm">NLP-Based Product Innovation</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Developed an NLP-based MCP reporting interface — converting complex BI into conversational queries.</li>
            <li>Simplified product UX and improved enterprise customer adoption.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-slate-200 text-sm">Multi-Platform BI Ecosystem</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Delivered a multi-platform BI architecture (Power BI, Superset, QuickSight) for flexibility.</li>
            <li>Enabled upsell opportunities through analytics-driven value creation for customers.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Tech Stack</h2>
          <p className="mt-2 text-sm">
            Apache Spark, Kafka, Airflow &nbsp;·&nbsp; AWS / Azure &nbsp;·&nbsp; Kubernetes, Docker, Swarm &nbsp;·&nbsp;
            Power BI, Superset, QuickSight &nbsp;·&nbsp; NLP / LLM integration &nbsp;·&nbsp;
            AI-based monitoring &amp; anomaly detection &nbsp;·&nbsp; CI/CD (GitHub Actions) &nbsp;·&nbsp;
            Postgres / ClickHouse
          </p>
        </article>

        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Business Outcomes</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li>
              <strong className="text-slate-200">Average customer renewal: $2K–$5K → $35K+</strong> — enabled
              entry into enterprise segment across US, Europe, and Japan.
            </li>
            <li>
              <strong className="text-slate-200">Team: 3 → 85+ people</strong> — scaled engineering and
              support across 4 product lines with 24×7 global coverage.
            </li>
            <li>
              <strong className="text-slate-200">Infrastructure cost: –70%</strong> — consumption-based
              architecture and right-sizing eliminated Apache overhead.
            </li>
            <li>
              <strong className="text-slate-200">Releases: 1–2/year → daily</strong> — AI-assisted CI/CD
              cut development effort by 30–50%.
            </li>
            <li>
              <strong className="text-slate-200">Downtime: –50%, support tickets: –20%</strong> — via
              AI-based monitoring and anomaly detection.
            </li>
            <li>
              <strong className="text-slate-200">Customer onboarding: 1 week → near real-time</strong> —
              automated provisioning removed manual bottlenecks entirely.
            </li>
            <li>
              <strong className="text-slate-200">GEM certified</strong> — unlocked government contract
              segment, demonstrating enterprise compliance standards.
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
            className="inline-flex items-center rounded-lg border border-accent px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition"
          >
            Book a 20-min Intro
          </Link>
        </div>
      </section>
    </div>
  );
}
