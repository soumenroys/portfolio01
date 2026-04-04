// components/HomeClient.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import StatBar from "@/components/StatBar";
import ContactForm from "@/components/ContactForm";
import EmailLink from "@/components/EmailLink";
import {
  NAME,
  ROLE,
  YEARS,
  QUOTE,
  LINKEDIN,
  RESUME_URL,
  DETAILED_RESUME_URL,
} from "@/lib/constants";

const caseCards = [
  {
    title: "Microservices Reporting Platform",
    context: "Enterprise reporting re-architected from monolith to microservices (Kafka, Spark, S3/MinIO).",
    result: "Latency from hours → near-real-time; multi-tenant analytics across regions.",
    href: "/case-studies/microservices-reporting-platform",
    accent: "from-violet-500/10 to-transparent border-violet-500/20 hover:border-violet-500/40",
    tag: "Platform Architecture",
  },
  {
    title: "Manufacturing Analytics ROI",
    context: "Predictive analytics for procurement and scrap cost in heavy industry.",
    result: "$1M+ annual savings; procurement cycles from months to days.",
    href: "/case-studies/manufacturing-analytics-roi",
    accent: "from-amber-500/10 to-transparent border-amber-500/20 hover:border-amber-500/40",
    tag: "Analytics & AI",
  },
  {
    title: "Executive Dashboards at Scale",
    context: "Power BI / QuickSight with governed semantic models; executive change management.",
    result: "85%+ monthly active executive adoption; standardized KPIs enterprise-wide.",
    href: "/case-studies/executive-dashboards-scale",
    accent: "from-emerald-500/10 to-transparent border-emerald-500/20 hover:border-emerald-500/40",
    tag: "BI & Governance",
  },
];

export default function HomeClient() {
  const [openDownloadForm, setOpenDownloadForm] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const openFormFor = (url: string) => {
    setDownloadUrl(url);
    setOpenDownloadForm(true);
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center py-6 md:py-10">
        {/* Subtle ambient glow behind the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at 10% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Left: headshot */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
                transform: "scale(1.3)",
              }}
            />
            <Image
              src="/images/avatar.jpg"
              alt={NAME}
              width={152}
              height={152}
              className="relative rounded-full border-2 border-accent/40 shadow-2xl shadow-accent/10 object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: identity + positioning */}
        <div className="text-center md:text-left">
          {/* Social proof strip */}
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-white/8 bg-white/4 text-xs text-slate-500 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            Tata Steel &nbsp;·&nbsp; OpenLM &nbsp;·&nbsp; Gunung Raja Paksi &nbsp;·&nbsp; M. N. Dastur
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            {NAME}
          </h1>
          <p className="mt-1.5 text-accent font-medium text-lg tracking-wide">{ROLE}</p>

          <blockquote className="mt-4 text-slate-300 italic border-l-2 border-accent/60 pl-4 text-sm leading-relaxed max-w-lg">
            &ldquo;{QUOTE}&rdquo;
          </blockquote>

          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            {YEARS} of hands-on depth — delivering scalable platforms, revenue growth, and enterprise
            transformation across SaaS, manufacturing, and industrial engineering.
          </p>

          {/* Author badge */}
          <div className="inline-flex items-center gap-2 mt-4 rounded-full border border-accent/20 bg-accent/8 px-4 py-1.5">
            <span className="text-xs uppercase tracking-wider text-accent/70 font-medium">Author</span>
            <span className="text-xs text-slate-300">Mastering 3D Plant Engineering, Digitalisation &amp; Automation</span>
          </div>

          {/* CTAs */}
          <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
            <Button onClick={() => openFormFor(RESUME_URL as string)} variant="outline">
              Download CV
            </Button>
          </div>

          <div className="mt-3 text-xs text-slate-500 flex gap-3 justify-center md:justify-start items-center">
            <a className="hover:text-accent transition" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="text-white/15">|</span>
            <EmailLink className="hover:text-accent transition">
              Email
            </EmailLink>
            <span className="text-white/15">|</span>
            <button
              className="hover:text-accent transition underline underline-offset-2"
              onClick={() => openFormFor(DETAILED_RESUME_URL as string)}
            >
              Detailed CV
            </button>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <StatBar />

      {/* ── CASE STUDY CARDS ── */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-slate-100">Selected Outcomes</h2>
          <a href="/case-studies" className="text-sm text-accent hover:underline underline-offset-2">
            All case studies →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {caseCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className={`group rounded-xl border bg-gradient-to-b p-5 transition-all duration-200 ${card.accent}`}
            >
              <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                {card.tag}
              </span>
              <h3 className="font-semibold text-slate-100 group-hover:text-white transition">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{card.context}</p>
              <p className="mt-3 text-sm font-medium text-accent/90 leading-relaxed">{card.result}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-accent text-xs font-medium group-hover:gap-2 transition-all">
                Read case study <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── EXPERTISE + ROI ENTRY POINTS ── */}
      <section className="mt-4 grid md:grid-cols-2 gap-4">
        <a
          href="/expertise"
          className="group rounded-xl border border-white/10 p-5 hover:border-violet-500/30 transition-all bg-gradient-to-br from-violet-500/5 to-cyan-500/5"
        >
          <div className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-2">Technology Stack</div>
          <h3 className="font-semibold text-slate-100 group-hover:text-white transition">Technology Expertise</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {YEARS} of depth across AI, SaaS platforms, data engineering, cloud infrastructure, and industrial
            systems — from Spark &amp; Kafka to LiDAR, BIM, and digital twins.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-accent text-sm group-hover:gap-2 transition-all">
            Explore the stack <span aria-hidden>→</span>
          </span>
        </a>

        <a
          href="/roi"
          className="group rounded-xl border border-white/10 p-5 hover:border-amber-500/30 transition-all bg-gradient-to-br from-amber-500/5 to-emerald-500/5"
        >
          <div className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-2">Business Impact</div>
          <h3 className="font-semibold text-slate-100 group-hover:text-white transition">ROI &amp; Business Impact</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            $50M+ in measurable ROI — from a 7&times; ARR uplift per enterprise customer to $1M+ annual
            procurement savings and 70% infrastructure cost reduction.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-accent text-sm group-hover:gap-2 transition-all">
            See the numbers <span aria-hidden>→</span>
          </span>
        </a>
      </section>

      {/* ContactForm modal */}
      {openDownloadForm && downloadUrl && (
        <ContactForm
          downloadUrl={downloadUrl}
          onClose={() => {
            setOpenDownloadForm(false);
            setDownloadUrl(null);
          }}
        />
      )}
    </div>
  );
}
