// components/ContactForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { EMAIL, RESUME_URL, DETAILED_RESUME_URL } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  contact?: string;
  subject: string;
  message: string;
};

interface ContactFormProps {
  downloadUrl?: string | null; // optional explicit CV/Detailed CV link (prop overrides query)
  onClose?: () => void; // optional callback to close modal
  mode?: "modal" | "page"; // render mode: modal (default) or page (inline)
}

export default function ContactForm({
  downloadUrl: downloadUrlProp = null,
  onClose,
  mode = "modal",
}: ContactFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  // resolved download URL (either from explicit prop or read from ?download=)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(downloadUrlProp);

  // Resolve query param into concrete download URL
  useEffect(() => {
    if (downloadUrlProp !== null) {
      setDownloadUrl(downloadUrlProp);
      return;
    }

    const qp = searchParams?.get?.("download") ?? null;
    if (!qp) {
      setDownloadUrl(null);
      return;
    }

    const raw = qp.trim().toLowerCase();
    if (raw === "detailed" || raw === "detail" || raw === "long") {
      setDownloadUrl(DETAILED_RESUME_URL);
      return;
    }
    if (raw === "resume" || raw === "short" || raw === "cv") {
      setDownloadUrl(RESUME_URL);
      return;
    }
    // allow passing absolute/relative path via query (e.g. ?download=/files/foo.pdf)
    try {
      const decoded = decodeURIComponent(qp);
      if (decoded.startsWith("/")) {
        setDownloadUrl(decoded);
        return;
      }
    } catch {
      // ignore decode errors
    }

    // fallback: no download
    setDownloadUrl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, downloadUrlProp]);

  // If opened with ?download or #form, scroll the form into view on mount
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash?.includes("#form") || searchParams?.get("download")) {
      setTimeout(() => {
        const el = document.getElementById("form") || formRef.current;
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((s) => ({ ...s, [k]: v }));
    setStatus(null);
  }

  const triggerDownload = (url: string) => {
    try {
      // If same-origin, download attribute will prompt download; otherwise open in new tab
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", "");
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      window.open(url, "_blank");
    }
  };

  // Remove the ?download query param while preserving hash (so reload won't re-trigger)
  const clearDownloadQuery = () => {
    try {
      const hash = window.location.hash || "#form";
      // router.replace() expects typed route; cast to any to avoid TS errors in app router
      router.replace((pathname + hash) as any);
    } catch {
      // ignore errors
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // always require name and email
    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ ok: false, msg: "Please provide your name and email." });
      return;
    }

    // If not a download flow, require subject + message
    if (!downloadUrl && (!form.subject.trim() || !form.message.trim())) {
      setStatus({ ok: false, msg: "Please provide a subject and a short message." });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        contact: form.contact || "",
        subject: form.subject || "",
        message: form.message || "",
        downloadUrl: downloadUrl || null,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "Server error");
        throw new Error(txt || "Failed to submit");
      }

      setStatus({
        ok: true,
        msg: downloadUrl
          ? "Thanks — your download will begin shortly."
          : "Message sent — thank you! I'll respond shortly.",
      });

      if (downloadUrl) {
        // let success message render, then trigger download
        setTimeout(() => {
          triggerDownload(downloadUrl);
          clearDownloadQuery();
        }, 250);

        if (onClose) setTimeout(() => onClose(), 700);
      } else {
        // if user opened via a query like ?download=none, clear it after successful send
        clearDownloadQuery();
      }

      // reset form
      setForm({ name: "", email: "", contact: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  // Shared form JSX
  const formEl = (
    <form ref={formRef} id="form" onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-slate-400">Your name</span>
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Jane Doe"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-400">Your email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="you@company.com"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-slate-400">Contact number (optional)</span>
        <input
          type="tel"
          value={form.contact}
          onChange={(e) => update("contact", e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="+91 98765 43210"
        />
      </label>

      {!downloadUrl && (
        <>
          <label className="block">
            <span className="text-sm text-slate-400">Subject</span>
            <input
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Short summary"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-400">Message</span>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 h-36 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="What's the challenge? What outcomes matter?"
              required
            />
          </label>
        </>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition disabled:opacity-50"
        >
          {loading ? "Sending…" : downloadUrl ? "Submit & Download" : "Send message"}
        </button>

        {!downloadUrl && (
          <button
            type="button"
            onClick={() => {
              const subject = encodeURIComponent(form.subject || "Contact via website");
              const body = encodeURIComponent(
                `${form.message || ""}\n\n— ${form.name || ""}\n${form.email ? `Reply: ${form.email}` : ""}\n${form.contact ? `Contact: ${form.contact}` : ""}`
              );
              window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            Open email client
          </button>
        )}

        {mode === "modal" && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-sm underline text-slate-400 hover:text-accent"
          >
            Close
          </button>
        )}
      </div>

      {status && (
        <div
          role="status"
          className={`mt-2 rounded-md p-3 ${
            status.ok
              ? "bg-green-900/40 border border-green-700 text-green-200"
              : "bg-red-900/40 border border-red-700 text-red-200"
          }`}
        >
          {status.msg}
        </div>
      )}

      {mode === "page" && (
        <p className="mt-4 text-xs text-slate-500">
          Privacy: I will only use the details you provide to reply about the enquiry. If you prefer not to share, email directly at{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );

  if (mode === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" onClick={() => onClose && onClose()} />
        <div className="relative z-10 w-full max-w-md rounded-2xl p-6 bg-slate-900">
          <h3 className="text-lg font-semibold mb-4">
            {downloadUrl ? "Please fill your details to download" : "Send me a message"}
          </h3>
          {formEl}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-accent">Contact me</h1>
      {formEl}
    </div>
  );
}
