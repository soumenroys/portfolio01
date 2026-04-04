// /app/experience/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { RESUME_URL, DETAILED_RESUME_URL } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const roles = [
  {
    title: "Tribe Lead — Engineering & Product",
    company: "OpenLM",
    period: "Sep 2022 – Present",
    location: "India (Global operations)",
    domain: "SaaS & AI",
    domainColor: "bg-violet-500/15 text-violet-300 border-violet-500/20",
    dotColor: "bg-violet-400",
    summary:
      "Lead product & engineering tribe for license lifecycle and analytics; accountable for product architecture, delivery, and India operations scaling.",
    responsibilities: [
      "Architect and drive transition from a monolithic product to microservices and container-native SaaS.",
      "Design and operate streaming & batch data pipelines (Apache Spark, Kafka, Airflow, NiFi) for telemetry and analytics.",
      "Own hiring, org scaling, and engineering operations for India — recruiting, SRE practices, and vendor partnerships.",
      "Partner with product and CX to deliver high-value dashboards (Power BI / Superset / QuickSight) and ML-enabled license forecasting.",
    ],
    outcomes: [
      { value: "3 → 85+", label: "Team scaled" },
      { value: "$2K → $35K+", label: "Avg. customer ARR" },
      { value: "70%", label: "Infrastructure cost cut" },
      { value: "Daily", label: "Release cadence" },
    ],
  },
  {
    title: "Head — Business Process & Digital Transformation",
    company: "Gunung Raja Paksi (GRP)",
    period: "Jan 2019 – Sep 2022",
    location: "Indonesia",
    domain: "Industry 4.0 / ERP",
    domainColor: "bg-amber-500/15 text-amber-300 border-amber-500/20",
    dotColor: "bg-amber-400",
    summary:
      "Led digital backbone and ERP/analytics modernization for GRP during a transition to a public company — bridging executive reporting, plant operations, and procurement.",
    responsibilities: [
      "Drive ERP rollouts across 25+ departments and integrate finance, production and maintenance data for consolidated reporting.",
      "Build executive dashboards unifying finance, HR, production, and maintenance to enable faster data-driven decisions.",
      "Introduce mobile asset management and digital inventory flows to reduce manual reconciliation effort.",
      "Design analytics-driven procurement intelligence and scrap pricing models to inform sourcing strategy.",
    ],
    outcomes: [
      { value: "$1M+", label: "Annual savings" },
      { value: "80%", label: "Inventory improvement" },
      { value: "Months → Days", label: "Procurement cycle" },
      { value: "25+", label: "Departments integrated" },
    ],
  },
  {
    title: "Senior Manager — Virtual Engineering & Business Process",
    company: "Tata Steel",
    period: "May 2015 – Dec 2018",
    location: "India",
    domain: "Industry 4.0 / Digital Twin",
    domainColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
    dotColor: "bg-cyan-400",
    badge: { text: "Industry First", color: "border-cyan-400/40 bg-cyan-400/10 text-cyan-300" },
    summary:
      "Led digital engineering, drone & photogrammetry programs and CAD/BIM automation at one of India's largest steel producers.",
    responsibilities: [
      "Piloted drone-based 3D modelling, photogrammetry and LiDAR workflows for large brownfield sites to accelerate design.",
      "Integrated GIS, BIM, and digital twin workflows with engineering and maintenance processes for improved asset visibility.",
      "Developed CAD automation (AutoLISP) to reduce manual drafting and speed engineering cycles.",
      "Operationalised Industry 4.0 pilots into repeatable engineering practices.",
    ],
    outcomes: [
      { value: "~30%", label: "Revenue leakage recovered" },
      { value: "20%", label: "Engineering rework reduced" },
      { value: "Industry first", label: "Drone 3D plant modelling" },
    ],
  },
  {
    title: "Technology Lead — Engineering Systems",
    company: "M. N. Dastur & Co.",
    period: "Apr 2005 – Apr 2015",
    location: "India",
    domain: "Engineering & BIM",
    domainColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    dotColor: "bg-emerald-400",
    summary:
      "Built standard 3D BIM workflows, enterprise CAD/GIS deployments, and automation that accelerated engineering delivery across multi-discipline projects.",
    responsibilities: [
      "Standardize BIM and CAD processes, integrate document management with engineering tools and reduce handoff friction.",
      "Design and deliver company-wide training and governance for digital engineering standards.",
      "Lead automation efforts (scripted CAD tools) to reduce repeatable manual work across projects.",
    ],
    outcomes: [
      { value: "30%", label: "Delivery cycle reduced" },
      { value: "68%", label: "Workforce dependency cut" },
    ],
  },
  {
    title: "R&D Lead — CAD/GIS Automation",
    company: "Cadworld Infosystems",
    period: "Apr 2000 – Mar 2005",
    location: "India & Canada",
    domain: "GIS & Geospatial",
    domainColor: "bg-sky-500/15 text-sky-300 border-sky-500/20",
    dotColor: "bg-sky-400",
    badge: { text: "World-First Achievement", color: "border-sky-400/40 bg-sky-400/10 text-sky-300" },
    summary:
      "Led photogrammetry production and automation for global mapping clients — including a world-first integration of satellite imagery and aerial photography for 3D modelling in partnership with Google, contributing to what became Google 3D Maps.",
    responsibilities: [
      "Led a 30-member photogrammetry team delivering large-scale 3D mapping services to global infrastructure clients.",
      "Pioneered satellite-based imagery + aerial photography pipeline — the first of its kind globally — for high-fidelity 3D mapping at scale.",
      "Built AutoLISP and DCL automation tools for civil CAD workflows, improving team productivity by 50%.",
      "Owned end-to-end geospatial production quality: flight path design, aero-triangulation, vector capture, orthophoto generation.",
    ],
    outcomes: [
      { value: "50%", label: "Team productivity gain" },
      { value: "World-first", label: "Satellite + aerial fusion" },
    ],
  },
  {
    title: "Early Roles",
    company: "RITES Ltd. & Larsen & Toubro ECC",
    period: "1997 – 2000",
    location: "India",
    domain: "EPC / Infrastructure",
    domainColor: "bg-slate-500/15 text-slate-400 border-slate-500/20",
    dotColor: "bg-slate-500",
    summary:
      "Early-career engineering and automation work across EPC and infrastructure projects — irrigation automation at RITES, greenfield refinery execution at L&T.",
    responsibilities: [
      "Automated irrigation gate control and survey plotting; reduced manual reporting time by ~50% at RITES.",
      "Supported EPC layout accuracy and concrete structure alignment at L&T — contributing to early greenfield refinery delivery.",
    ],
    outcomes: [],
  },
];

export default function ExperiencePage() {
  const [openDownloadForm, setOpenDownloadForm] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>("OpenLM");

  const openFormFor = (url: string) => {
    setDownloadUrl(url);
    setOpenDownloadForm(true);
  };

  return (
    <div className="py-10">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-accent">
          Experience
        </h1>
        <p className="mt-3 text-slate-400 max-w-2xl">
          28+ years delivering engineering automation, data platforms, and enterprise transformations
          across India, Southeast Asia and Canada.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => openFormFor(RESUME_URL as string)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white font-medium text-sm hover:opacity-90 transition"
          >
            Download CV
          </button>
          <button
            onClick={() => openFormFor(DETAILED_RESUME_URL as string)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            Download Detailed CV
          </button>
        </div>
      </header>

      {/* Summary stats */}
      <section className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { value: "28+", label: "Years of Experience", color: "text-accent" },
          { value: "10+", label: "Enterprise Transformations", color: "text-violet-400" },
          { value: "200+", label: "People Led", color: "text-cyan-400" },
          { value: "3", label: "Countries — IN · ID · CA", color: "text-emerald-400" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-white/8 bg-white/2 p-4 text-center">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-500 mt-1 leading-snug">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Cross-Domain section */}
      <section className="mb-10 rounded-xl border border-accent/25 bg-accent/5 p-6 md:p-8">
        <h2 className="text-xl font-semibold text-accent mb-3">The Cross-Domain Advantage</h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          Most technology leaders operate within one domain — software or industry. My 28+ years span both: from
          surveying irrigation systems and mapping the earth for Google, to building BIM workflows at one of India&apos;s
          largest engineering firms, to leading Industry 4.0 at Tata Steel, to transforming a steel manufacturer into
          a publicly listed company, to re-architecting a global SaaS platform serving enterprise customers across US,
          Europe, and Japan.
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {[
            { label: "Engineering & Industrial Depth", desc: "Drones, LiDAR, BIM, GIS, digital twins — built and operated at scale, not consulted on.", color: "text-violet-300" },
            { label: "Data & AI Platform Leadership", desc: "Real-time analytics, NLP, ML models, streaming pipelines — each tied to measurable outcomes.", color: "text-cyan-300" },
            { label: "SaaS Strategy & Revenue Alignment", desc: "Product strategy, pricing design, go-to-market, and team scaling aligned with commercial growth.", color: "text-amber-300" },
          ].map((p) => (
            <div key={p.label} className="rounded-xl border border-white/8 bg-white/4 p-4">
              <div className={`text-sm font-semibold mb-1.5 ${p.color}`}>{p.label}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        {/* Career arc */}
        <div className="flex flex-wrap gap-2 items-center text-xs">
          {[
            { stage: "GIS & Geospatial", years: "1997–2005" },
            { stage: "Engineering & BIM", years: "2005–2015" },
            { stage: "Industry 4.0", years: "2015–2019" },
            { stage: "SaaS & AI", years: "2019–Present" },
          ].map((item, i, arr) => (
            <div key={item.stage} className="flex items-center gap-2">
              <div className="rounded-lg border border-white/12 bg-white/4 px-3 py-1.5 text-center">
                <div className="text-slate-200 font-medium">{item.stage}</div>
                <div className="text-slate-500 text-xs mt-0.5">{item.years}</div>
              </div>
              {i < arr.length - 1 && <span className="text-accent/60 font-bold">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section>
        <h2 className="text-lg font-semibold text-slate-300 mb-6">Career Timeline</h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent hidden sm:block" aria-hidden />

          <div className="space-y-3">
            {roles.map((role) => {
              const isOpen = expanded === role.company;
              return (
                <div key={role.company} className="sm:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-5 w-6 h-6 rounded-full border-2 border-slate-900 hidden sm:flex items-center justify-center ${role.dotColor}`}
                    aria-hidden
                  />

                  {/* Role card */}
                  <div
                    className={`rounded-xl border transition-all duration-200 ${
                      isOpen
                        ? "border-white/15 bg-white/3"
                        : "border-white/8 bg-transparent hover:border-white/15 hover:bg-white/2"
                    }`}
                  >
                    {/* Header row — always visible, click to expand */}
                    <button
                      className="w-full text-left p-5 flex items-start justify-between gap-4"
                      onClick={() => setExpanded(isOpen ? null : role.company)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${role.domainColor}`}>
                            {role.domain}
                          </span>
                          {role.badge && (
                            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${role.badge.color}`}>
                              ✦ {role.badge.text}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-slate-100 text-base leading-snug">{role.title}</h3>
                        <div className="mt-1 text-sm text-slate-400">
                          <span className="font-medium text-slate-300">{role.company}</span>
                          <span className="text-slate-600 mx-2">·</span>
                          <span>{role.period}</span>
                          <span className="text-slate-600 mx-2">·</span>
                          <span>{role.location}</span>
                        </div>
                      </div>
                      <span className={`text-slate-500 mt-1 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} aria-hidden>
                        ▾
                      </span>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-white/6">
                        <p className="mt-4 text-sm text-slate-400 leading-relaxed">{role.summary}</p>

                        {/* Outcome metrics */}
                        {role.outcomes.length > 0 && (
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {role.outcomes.map((o) => (
                              <div key={o.label} className="rounded-lg border border-white/8 bg-white/3 p-3 text-center">
                                <div className="text-base font-bold text-accent">{o.value}</div>
                                <div className="text-xs text-slate-500 mt-0.5 leading-snug">{o.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Responsibilities */}
                        <div className="mt-5">
                          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-1.5">
                            {role.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                <span className="text-accent/50 mt-1 flex-shrink-0">›</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International highlight */}
      <section className="mt-8 rounded-xl border border-sky-500/20 bg-sky-500/5 p-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300 mb-3">
          ✦ Select International Project
        </div>
        <h2 className="text-lg font-semibold text-accent">Photogrammetry — OSIG / Google (Canada)</h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          Led a world-first photogrammetry program in partnership with OSIG (Canada) to deliver high-fidelity 3D mapping
          datasets for a global platform. The project established quality controls, processing pipelines, and dataset
          handoff standards — contributing directly to the foundation of Google 3D Maps.
        </p>
        <ul className="mt-3 space-y-1">
          {[
            "First integration of satellite imagery + aerial photography for 3D modelling at global scale.",
            "Formalised QA/QC and production SLAs for geospatial datasets delivered to a major technology platform.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="text-sky-400/60 mt-1 flex-shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing CTA */}
      <div className="mt-8 rounded-xl border border-white/10 p-6 bg-gradient-to-b from-white/2 to-transparent">
        <h3 className="text-base font-semibold text-slate-100">Want the full CV or project references?</h3>
        <p className="text-sm text-slate-400 mt-2">
          The detailed CV contains project artifacts, publication references, and contactable client references.{" "}
          <Link href="/contact" className="underline hover:text-accent">Contact me</Link>{" "}
          or download the full PDF above.
        </p>
      </div>

      {openDownloadForm && downloadUrl && (
        <ContactForm
          downloadUrl={downloadUrl}
          onClose={() => { setOpenDownloadForm(false); setDownloadUrl(null); }}
        />
      )}
    </div>
  );
}
