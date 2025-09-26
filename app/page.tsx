// /app/page.tsx
"use client";

import { useState } from "react";
import Button from "@/components/Button";
import StatBar from "@/components/StatBar";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  NAME,
  ROLE,
  YEARS,
  LINKEDIN,
  EMAIL,
  RESUME_URL,
  DETAILED_RESUME_URL,
} from "@/lib/constants";

export default function HomePage() {
  const [openDownloadForm, setOpenDownloadForm] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const openFormFor = (url: string) => {
    setDownloadUrl(url);
    setOpenDownloadForm(true);
  };

  return (
    <div>
      <section className="text-center">
        {/* Credibility strip (optional, subtle) */}
        <p className="text-xs md:text-sm text-slate-400 mb-2">
          Trusted by leaders across manufacturing & software — India & APAC
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {NAME} — <span className="text-accent">{ROLE}</span>
        </h1>

        {/* Executive sub-headline */}
        <p className="mt-3 text-slate-300 md:text-lg">
          {YEARS}+ years aligning technology with business outcomes: scaling data
          platforms, modernizing engineering, and delivering measurable ROI for
          enterprises.
        </p>

        {/* Positioning line */}
        <p className="mt-1 text-slate-400">
          From <span className="font-medium text-slate-200">Steel to SaaS</span> — strategy to execution for C-suite impact.
        </p>

        {/* Author badge */}
        <div className="inline-flex items-center gap-2 mt-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="text-xs uppercase tracking-wide text-slate-400">Author</span>
          <span className="text-sm text-slate-200">
            “Mastering 3D Plant Engineering, Digitalisation & Automation”
          </span>
        </div>

        {/* Impact teaser linking to transformations */}
        <p className="mt-4 text-slate-300">
          I’ve delivered{" "}
          <Link href="/transformations" className="underline hover:text-accent">
            10+ enterprise transformations
          </Link>{" "}
          with clear ROI and executive adoption.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          {/* Primary CV (opens form modal) */}
          <Button onClick={() => openFormFor(RESUME_URL as string)}>
            Download CV
          </Button>

          {/* Detailed CV (opens form modal) */}
          <Button onClick={() => openFormFor(DETAILED_RESUME_URL as string)}>
            Download Detailed CV
          </Button>

          {/* Executive discussion CTA - now primary */}
          <Button href="/contact" variant="primary">
            Schedule an Executive Discussion
          </Button>
        </div>

        <div className="mt-2 text-sm text-slate-400">
          <a
            className="underline hover:text-accent"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a className="underline hover:text-accent" href={`mailto:${EMAIL}`}>
            Email
          </a>
        </div>
      </section>

      <StatBar />

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Microservices Reporting Platform",
            context:
              "Enterprise reporting re-architected from monolith to microservices (Kafka, Spark, S3/MinIO).",
            result:
              "Reduced latency from hours to near-real-time; enabled multi-tenant analytics and faster C-suite decisions across regions.",
            href: "/case-studies/microservices-reporting-platform",
          },
          {
            title: "Manufacturing Analytics ROI",
            context:
              "Predictive analytics for procurement and scrap cost in heavy industry; governed data for plant operations.",
            result:
              "Material cost reductions and shorter decision cycles; measurable bottom-line impact with transparent metrics.",
            href: "/case-studies/manufacturing-analytics-roi",
          },
          {
            title: "Executive Dashboards at Scale",
            context:
              "Power BI / QuickSight with governed datasets and semantic models; change management for leadership adoption.",
            result:
              "Standardized KPI definitions; C-suite adoption and confident, data-driven reviews across business units.",
            href: "/case-studies/executive-dashboards-scale",
          },
        ].map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-white/10 p-5 hover:border-white/30 transition"
          >
            <h3 className="font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{card.context}</p>
            <p className="mt-2 text-sm text-slate-400">{card.result}</p>
            <span className="mt-3 inline-block text-accent text-sm">
              Read case study →
            </span>
          </a>
        ))}
      </section>

      {/* Render ContactForm modal when a download is requested */}
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
