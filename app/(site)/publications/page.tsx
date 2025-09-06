"use client";

import PublicationsWithLinks from "@/components/PublicationsWithLinks";

// /app/publications/page.tsx
import Link from "next/link";
import {
  NAME,
  ROLE,
  LINKEDIN,
  EMAIL,
  RESUME_URL,
  DETAILED_RESUME_URL,
} from "@/lib/constants";
import { useState } from "react";

export default function PublicationsPage() {
  // image paths — change if you stored images under different filenames
  const coverSrc = "/images/publications/mastering-3d-plant-engineering-cover.png";
  const avatarSrc = "/images/publications/author-avatar.png"; // optional, put a file here if available

  // local state to detect avatar load failure and show initials fallback
  const [avatarFailed, setAvatarFailed] = useState(false);

  const initials = NAME
    .split(" ")
    .map((n) => (n ? n[0] : ""))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      <header className="flex flex-col md:flex-row items-start gap-6 mb-6">
        <img
          src={coverSrc}
          alt="Mastering 3D Plant Engineering — book cover"
          className="w-48 rounded-lg border border-white/10 shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-accent">
            Mastering 3D Plant Engineering, Digitalisation & Automation
          </h1>
          <p className="mt-3 text-slate-300">
            A practical field guide blending plant engineering fundamentals with modern digital workflows — photogrammetry, BIM, LiDAR, CAD automation and Industry 4.0
            patterns for engineering teams and digital leaders.
          </p>

          <div className="mt-4 text-sm text-slate-400 space-y-1">
            <div><strong>Author:</strong> {NAME}</div>
            <div><strong>Role:</strong> {ROLE}</div>
            <div>
              <strong>Formats:</strong> Paperback / PDF
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.amazon.com/dp/B0F7M239VJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
            >
              Buy on Amazon →
            </a>

            <Link
              href={RESUME_URL as any}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
            >
              Download CV
            </Link>

            <Link
              href={DETAILED_RESUME_URL as any}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
            >
              Download Detailed CV
            </Link>
          </div>
        </div>
      </header>

      {/* AUTHOR BIO PANEL */}
      <section className="mb-8 flex flex-col md:flex-row gap-4 items-start rounded-2xl border border-white/8 p-4 bg-gradient-to-b from-transparent to-white/1">
        {/* Avatar (client-side onError allowed) */}
        <div className="flex-shrink-0">
          {!avatarFailed ? (
            <img
              src={avatarSrc}
              alt={`${NAME} — author`}
              onError={() => setAvatarFailed(true)}
              className="w-20 h-20 rounded-full object-cover border border-white/10 shadow-sm"
            />
          ) : (
            <div
              aria-hidden
              className="w-20 h-20 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-lg font-semibold border border-white/8"
            >
              {initials}
            </div>
          )}
        </div>

        {/* Bio text */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-accent">{NAME}</h3>
          <div className="text-sm text-slate-400">{ROLE}</div>

          <p className="mt-3 text-slate-300 text-sm">
            Soumen Roy is an executive technology and transformation leader with 27+ years of experience leading digital engineering, Industry 4.0, and data platform programs
            for heavy industry and enterprise software. He has led large multi-disciplinary teams, delivered 10+ enterprise transformations and built platforms that reduced
            analytic lead-times and delivered measurable ROI across India, Indonesia and Canada.
          </p>

          <ul className="mt-3 text-sm text-slate-400 list-disc pl-6 space-y-1">
            <li><strong>Focus areas:</strong> photogrammetry & drone surveying, BIM/CAD automation, data platforms (lakehouse), microservices & analytics.</li>
            <li><strong>Audience:</strong> plant engineers, BIM managers, digital leaders and architects looking to modernise brownfield and greenfield projects.</li>
          </ul>

          {/* Quick links */}
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
            >
              View all publications
            </Link>

            {/* FIXED — using <a> instead of Link to avoid TS error if /talks page not present */}
            <a
              href="/talks"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
            >
              Talks & presentations
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
            >
              Email the author
            </a>
          </div>
        </div>
      </section>

      {/* Short summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-accent">Short Summary</h2>
        <p className="mt-2 text-slate-300">
          <em>Mastering 3D Plant Engineering</em> is a hands-on guide for plant engineers, BIM specialists, surveyors and engineering managers who want to convert legacy engineering processes
          into repeatable, digital-first workflows. The book walks through end-to-end pipelines — from site capture (drones, LiDAR, satellite) to model creation (photogrammetry, BIM) to
          engineering delivery (CAD automation, semantic layers) and operational integration (digital twins, analytics).
        </p>
      </section>

      {/* Detailed description */}
      <section className="mb-8 text-slate-400">
        <h2 className="text-xl font-semibold text-accent">Detailed Description</h2>
        <p className="mt-3">
          The book combines engineering fundamentals with practical recipes and case studies. It opens with an overview of common plant engineering problems (brownfield complexity, inconsistent
          as-built documentation, long survey cycles) and then demonstrates how modern data capture and processing eliminate bottlenecks. Chapters include real-world patterns for:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
          <li><strong>Site Capture:</strong> drone flight planning, photogrammetry basics, LiDAR capture and satellite imagery integration.</li>
          <li><strong>Data Processing:</strong> image-to-pointcloud workflows, orthophoto generation, pointcloud cleanup, and mesh / DSM production.</li>
          <li><strong>BIM & CAD Integration:</strong> translating pointclouds into Revit / AutoCAD assets, model cleanup, and maintaining coordinate systems.</li>
          <li><strong>Automation:</strong> AutoLISP and script-driven CAD automation to accelerate drafting, reduce errors, and standardize deliverables.</li>
          <li><strong>Digital Twin & Analytics:</strong> building a semantic layer, linking model attributes to operational KPIs and integrating with analytics pipelines.</li>
          <li><strong>Governance & Scale:</strong> QA/QC checklists, processing SLAs, storage strategy (object stores), and team roles for repeatable delivery.</li>
        </ul>
      </section>

      {/* Recordings & talks (curated links) */}
      <PublicationsWithLinks />

      {/* Review */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-accent">Review & Endorsements</h2>
        <blockquote className="mt-4 border-l-2 pl-4 italic text-slate-300">
          “A practical and rare field guide that bridges classic plant engineering with modern digital practice. This book demystifies photogrammetry, BIM and CAD automation in a way that
          engineers can actually adopt on-site.” — Industry peer
        </blockquote>
      </section>

      {/* CTA */}
      <div className="mt-8 flex gap-4">
        <a
          href="https://www.amazon.com/dp/B0F7M239VJ"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
        >
          Buy on Amazon →
        </a>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
        >
          Contact the author
        </Link>
      </div>
    </div>
  );
}
