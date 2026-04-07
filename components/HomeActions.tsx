// components/HomeActions.tsx
// Thin client island — only the interactive download buttons + ContactForm modal.
// Everything else in the hero is server-rendered for fast LCP.
"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { RESUME_URL, DETAILED_RESUME_URL, LINKEDIN } from "@/lib/constants";
import EmailLink from "@/components/EmailLink";

export default function HomeActions() {
  const [openDownloadForm, setOpenDownloadForm] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const openFormFor = (url: string) => {
    setDownloadUrl(url);
    setOpenDownloadForm(true);
  };

  return (
    <>
      {/* CTAs */}
      <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition text-sm"
        >
          Start a Conversation
        </a>
        <button
          onClick={() => openFormFor(RESUME_URL as string)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm font-medium hover:bg-white/5 transition"
        >
          Download CV
        </button>
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

      {openDownloadForm && downloadUrl && (
        <ContactForm
          downloadUrl={downloadUrl}
          onClose={() => {
            setOpenDownloadForm(false);
            setDownloadUrl(null);
          }}
        />
      )}
    </>
  );
}
