// app/(site)/expertise/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { canonical, site } from "@/lib/seo";
import { NAME, YEARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Technology Expertise | ${NAME}`,
  description:
    "28+ years of hands-on depth across AI, SaaS platforms, data engineering, cloud, and industrial systems — applied to measurable business outcomes.",
  alternates: { canonical: canonical("/expertise") },
  openGraph: {
    url: canonical("/expertise"),
    title: `Technology Expertise | ${NAME}`,
    description:
      "28+ years of hands-on depth across AI, SaaS platforms, data engineering, cloud, and industrial systems — applied to measurable business outcomes.",
    images: [{ url: site.ogDefault, width: 1200, height: 630 }],
  },
};

const domains = [
  {
    category: "Architecture & Platforms",
    color: "border-violet-500/40 bg-violet-500/5",
    tagColor: "bg-violet-500/15 text-violet-300 border border-violet-500/20",
    headingColor: "text-violet-300",
    narrative:
      "Designed and delivered cloud-native, multi-tenant SaaS platforms from the ground up — re-architecting legacy monoliths into event-driven microservices with full scalability and governance.",
    skills: [
      "Microservices",
      "Event-Driven Architecture",
      "SaaS Platform Design",
      "Multi-Tenant Architecture",
      "Cloud-Native Systems",
      "API Gateway & Service Mesh",
      "Domain-Driven Design",
    ],
  },
  {
    category: "Data Engineering & AI",
    color: "border-cyan-500/40 bg-cyan-500/5",
    tagColor: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20",
    headingColor: "text-cyan-300",
    narrative:
      "Built real-time streaming analytics pipelines and AI-driven decision systems — transitioning enterprises from batch reporting to live, predictive intelligence at TB scale.",
    skills: [
      "Apache Spark",
      "Apache Kafka",
      "Apache Airflow",
      "Apache NiFi",
      "NLP & Conversational AI",
      "Predictive Analytics",
      "ML-Based Forecasting",
      "LLM Integration (Claude, Gemini, GPT)",
      "Anomaly Detection",
      "Lakehouse Architecture",
    ],
  },
  {
    category: "BI & Analytics",
    color: "border-amber-500/40 bg-amber-500/5",
    tagColor: "bg-amber-500/15 text-amber-300 border border-amber-500/20",
    headingColor: "text-amber-300",
    narrative:
      "Delivered executive-grade BI platforms with governed semantic layers and standardized KPIs — enabling C-suite adoption and reducing manual deck preparation by 50–70%.",
    skills: [
      "Power BI",
      "Apache Superset",
      "AWS QuickSight",
      "Real-Time Dashboards",
      "Semantic Layer Design",
      "KPI Governance",
      "Executive Reporting",
      "Self-Service Analytics",
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "border-emerald-500/40 bg-emerald-500/5",
    tagColor: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20",
    headingColor: "text-emerald-300",
    narrative:
      "Deployed and operated global cloud infrastructure with full CI/CD automation — increasing release cadence from 1–2 per year to daily deployments and cutting infrastructure cost by 30%.",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Kubernetes",
      "Docker",
      "CI/CD Pipelines",
      "Docker Swarm",
      "Infrastructure as Code",
      "SRE & Observability",
      "AI-Based Monitoring",
    ],
  },
  {
    category: "Enterprise Systems",
    color: "border-rose-500/40 bg-rose-500/5",
    tagColor: "bg-rose-500/15 text-rose-300 border border-rose-500/20",
    headingColor: "text-rose-300",
    narrative:
      "Re-architected ERP systems across 25+ departments and integrated enterprise platforms to deliver unified data and operational transparency at board level.",
    skills: [
      "SAP",
      "Oracle",
      "RPA (UiPath)",
      "Power Automate",
      "ERP Integration",
      "SCM Platforms",
      "License Management (SAM)",
      "Consumption-Based Pricing Models",
    ],
  },
  {
    category: "Engineering & Digital Twin",
    color: "border-sky-500/40 bg-sky-500/5",
    tagColor: "bg-sky-500/15 text-sky-300 border border-sky-500/20",
    headingColor: "text-sky-300",
    narrative:
      "Pioneered industry-first digital engineering practices — drone-based 3D modelling, LiDAR, BIM, and digital twins — reducing engineering rework by 20% across large brownfield sites.",
    skills: [
      "BIM (Revit / AutoCAD)",
      "LiDAR & Photogrammetry",
      "Drone Survey Systems",
      "GIS Platforms",
      "Digital Twin",
      "AR / VR",
      "AutoLISP / VisualLISP",
      "CAD Automation",
      "Satellite Imagery",
      "3D Plant Modelling",
    ],
  },
];

const certifications = [
  { label: "Six Sigma Green Belt", area: "Process Excellence" },
  { label: "PMP", area: "Project Management" },
  { label: "AI/ML Certifications", area: "Artificial Intelligence" },
  { label: "BI & Analytics Certifications", area: "Business Intelligence" },
  { label: "RPA Certifications", area: "Automation" },
  { label: "GEM Certified", area: "Government Enterprise" },
];

export default function ExpertisePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-accent">
          Technology Expertise
        </h1>
        <p className="mt-3 text-slate-300 max-w-3xl">
          {YEARS} years of hands-on depth across AI, SaaS, data engineering, cloud
          infrastructure, and industrial systems — always applied to measurable business
          outcomes rather than technology for its own sake.
        </p>
      </header>

      {/* Cross-Domain Advantage — the key differentiator */}
      <section className="mb-12 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-accent mb-3">
          The Cross-Domain Advantage
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Most technology leaders come from either software or engineering. I have led
          at depth in both — from drone surveying on a 800-acre steel plant to
          re-architecting a global SaaS platform serving enterprise customers across
          US, Europe, and Japan. This rare combination means I translate{" "}
          <span className="text-slate-100 font-medium">
            shop-floor realities into scalable software decisions
          </span>{" "}
          and{" "}
          <span className="text-slate-100 font-medium">
            enterprise software thinking into operational impact
          </span>{" "}
          — a bridge most organisations struggle to build.
        </p>

        {/* The career arc */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 text-sm">
          {[
            { stage: "GIS & Geospatial", years: "1997–2005" },
            { stage: "Engineering & BIM", years: "2005–2015" },
            { stage: "Industry 4.0", years: "2015–2019" },
            { stage: "SaaS & AI", years: "2019–Present" },
          ].map((item, i, arr) => (
            <div key={item.stage} className="flex items-center gap-0">
              <div className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-center">
                <div className="text-slate-200 font-medium">{item.stage}</div>
                <div className="text-slate-500 text-xs mt-0.5">{item.years}</div>
              </div>
              {i < arr.length - 1 && (
                <span className="text-accent font-bold px-2 hidden sm:block">→</span>
              )}
              {i < arr.length - 1 && (
                <span className="text-accent font-bold py-1 sm:hidden">↓</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technology domains */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-100 mb-6">
          Technology Domains
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.category}
              className={`rounded-xl border p-6 ${domain.color}`}
            >
              <h3 className={`text-lg font-semibold mb-2 ${domain.headingColor}`}>
                {domain.category}
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                {domain.narrative}
              </p>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${domain.tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-100 mb-4">
          Certifications & Credentials
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="rounded-xl border border-white/10 bg-white/3 p-3 text-center"
            >
              <div className="text-xs text-slate-500 mb-1">{cert.area}</div>
              <div className="text-sm font-medium text-slate-200">{cert.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature achievements tied to tech */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-100 mb-4">
          Signature Technical Achievements
        </h2>
        <div className="space-y-3">
          {[
            {
              headline: "World-first satellite + aerial photogrammetry integration for Google 3D Maps",
              context: "Led the photogrammetry production team at Cadworld delivering the first-of-its-kind 3D mapping dataset for a global platform.",
            },
            {
              headline: "Industry-first drone-based 3D modelling system at Tata Steel",
              context: "Pioneered drone survey and LiDAR workflows across 800+ acres of brownfield plant — reducing planning time and recovering ~30% revenue leakage.",
            },
            {
              headline: "Monolith → microservices SaaS re-architecture at enterprise scale",
              context: "Re-architected a legacy system into a cloud-native, multi-tenant SaaS platform using Spark, Kafka, and Kubernetes — removing the 1K-user ceiling entirely.",
            },
            {
              headline: "AI-driven procurement intelligence saving $1M+ annually",
              context: "Built predictive scrap pricing and FX forecasting models that reduced procurement cycles from months to days.",
            },
            {
              headline: "NLP-based conversational BI interface",
              context: "Developed an MCP reporting layer that converted complex BI queries into natural language — improving product adoption and reducing analyst dependency.",
            },
            {
              headline: "Real-time streaming analytics replacing twice-daily batch reporting",
              context: "Built a Spark + Kafka streaming platform delivering live insights and improving executive decision-making speed across global enterprise customers.",
            },
          ].map((item) => (
            <div
              key={item.headline}
              className="rounded-xl border border-white/10 p-4 hover:border-white/20 transition"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-accent font-bold text-lg leading-none">
                  ✦
                </span>
                <div>
                  <p className="font-semibold text-slate-100">{item.headline}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
        <h3 className="text-lg font-semibold">Want to discuss a specific technology challenge?</h3>
        <p className="mt-2 text-slate-300 text-sm">
          I work best at the intersection of business strategy and deep technical execution.
          Share your challenge and I&apos;ll tell you how I&apos;d approach it.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition"
          >
            Start a conversation
          </Link>
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            See my approach →
          </Link>
        </div>
      </div>
    </div>
  );
}
