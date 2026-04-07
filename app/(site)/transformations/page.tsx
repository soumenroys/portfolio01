// /app/transformations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Transformations | Soumen Roy",
  description:
    "10+ enterprise digital transformations delivered across heavy industry, SaaS, and manufacturing — from pilot to production at scale.",
  alternates: { canonical: "/transformations" },
  openGraph: {
    title: "Enterprise Transformations | Soumen Roy",
    url: "https://soumenroy.com/transformations",
  },
};

const transformations = [
  {
    title: "SaaS Platform Re-Architecture",
    company: "OpenLM",
    period: "2022–Present",
    context: "Legacy monolith with a 1,000-user ceiling serving SMB customers.",
    outcome: "Microservices-based, cloud-native SaaS platform — unlimited scale, enterprise market entry, ARR per customer up from $2K–$5K to $35K+.",
    tags: ["SaaS", "Microservices", "Kafka", "Spark", "AI"],
  },
  {
    title: "Real-Time Analytics Platform",
    company: "OpenLM",
    period: "2022–Present",
    context: "Twice-daily batch reporting with no real-time visibility for customers.",
    outcome: "Streaming analytics platform delivering live insights — improved decision speed and customer adoption.",
    tags: ["Streaming", "Kafka", "Spark", "BI"],
  },
  {
    title: "NLP-Based Conversational BI Interface",
    company: "OpenLM",
    period: "2023–Present",
    context: "Complex BI requiring analyst expertise to query — limiting self-service adoption.",
    outcome: "NLP/MCP reporting interface converting BI queries into plain language — improved usability and reduced support overhead.",
    tags: ["NLP", "LLM", "Product Innovation"],
  },
  {
    title: "Enterprise Digital Backbone (IPO Transition)",
    company: "Gunung Raja Paksi, Indonesia",
    period: "2019–2022",
    context: "50-year-old steel plant preparing for public listing with fragmented, siloed data across departments.",
    outcome: "ERP re-architected across 25+ departments; unified C-suite dashboards enabled data-driven strategic decisions during IPO.",
    tags: ["ERP", "BI", "Industry 4.0", "IPO"],
  },
  {
    title: "AI-Driven Procurement Intelligence",
    company: "Gunung Raja Paksi, Indonesia",
    period: "2019–2022",
    context: "Manual procurement with high cost volatility and months-long decision cycles.",
    outcome: "$1M+ annual savings — predictive scrap pricing and FX forecasting reduced procurement cycle from months to days.",
    tags: ["AI/ML", "Procurement", "Predictive Analytics"],
  },
  {
    title: "Inventory & Asset Digitalization",
    company: "Gunung Raja Paksi, Indonesia",
    period: "2019–2022",
    context: "Manual inventory reconciliation with poor stock visibility across the plant.",
    outcome: "80% improvement in inventory movement — QR-code tracking and mobile asset management enabled just-in-time availability.",
    tags: ["IoT", "Mobile", "Operations"],
  },
  {
    title: "Industry 4.0 — Drone & Digital Twin",
    company: "Tata Steel, India",
    period: "2015–2018",
    context: "Brownfield plant engineering relying on manual surveying over 800+ acres with high rework rates.",
    outcome: "Industry-first drone-based 3D modelling system — recovered ~30% revenue leakage, reduced engineering rework by 20%.",
    tags: ["Drones", "LiDAR", "BIM", "Digital Twin"],
  },
  {
    title: "CAD & Engineering Automation",
    company: "M. N. Dastur & Co.",
    period: "2005–2015",
    context: "Manual drafting workflows across multi-discipline engineering teams causing slow delivery cycles.",
    outcome: "Engineering delivery cycles cut by 30%; workforce dependency reduced by 68% through scripted CAD automation.",
    tags: ["CAD Automation", "BIM", "AutoLISP"],
  },
  {
    title: "World-First Photogrammetry Platform",
    company: "Cadworld / Google (Canada)",
    period: "2000–2005",
    context: "No established pipeline for integrating satellite + aerial imagery for 3D mapping at global scale.",
    outcome: "First-ever satellite + aerial photogrammetry integration — contributed to Google 3D Maps; productivity improved 50%.",
    tags: ["Photogrammetry", "GIS", "Google", "World-First"],
  },
  {
    title: "Executive Dashboards at Scale",
    company: "Multiple engagements",
    period: "Ongoing",
    context: "Siloed reporting, conflicting KPI definitions, and manual deck preparation slowing C-suite decisions.",
    outcome: "Governed semantic models and standardized KPIs — 85%+ monthly active executive adoption within two quarters.",
    tags: ["Power BI", "QuickSight", "Governance", "Executive BI"],
  },
];

export default function TransformationsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-3 text-accent">10+ Enterprise Transformations</h1>
      <p className="text-slate-300 mb-8">
        Each transformation below started with a specific business problem and ended with measurable
        outcomes — cost savings, revenue growth, or capability that did not exist before.
      </p>

      <ol className="space-y-5">
        {transformations.map((t, i) => (
          <li key={t.title} className="rounded-xl border border-white/10 p-5 hover:border-white/20 transition">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-accent/40 leading-none mt-0.5 w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="font-semibold text-slate-100">{t.title}</h2>
                  <span className="text-xs text-slate-500 shrink-0">{t.period}</span>
                </div>
                <div className="text-xs text-accent mt-0.5 mb-2">{t.company}</div>
                <p className="text-sm text-slate-400">
                  <span className="text-slate-500">Before: </span>{t.context}
                </p>
                <p className="text-sm text-slate-300 mt-1">
                  <span className="text-accent font-medium">Outcome: </span>{t.outcome}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

    </div>
  );
}
