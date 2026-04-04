// components/ContactForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { EMAIL, RESUME_URL, DETAILED_RESUME_URL } from "@/lib/constants";

// Common country dial codes
const COUNTRY_CODES = [
  { code: "+91", label: "IN +91" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "GB +44" },
  { code: "+61", label: "AU +61" },
  { code: "+65", label: "SG +65" },
  { code: "+62", label: "ID +62" },
  { code: "+971", label: "AE +971" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+81", label: "JP +81" },
  { code: "+86", label: "CN +86" },
  { code: "+1-CA", label: "CA +1" },
  { code: "+60", label: "MY +60" },
  { code: "+64", label: "NZ +64" },
  { code: "+27", label: "ZA +27" },
  { code: "+55", label: "BR +55" },
  { code: "+52", label: "MX +52" },
  { code: "+966", label: "SA +966" },
];

type FormState = {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  company: string;
  subject: string;
  message: string;
  comments: string;
};

// Download flow has two steps: "details" → "verify"
type DownloadStep = "details" | "verify";

interface ContactFormProps {
  downloadUrl?: string | null;
  onClose?: () => void;
  mode?: "modal" | "page";
}

export default function ContactForm({
  downloadUrl: downloadUrlProp = null,
  onClose,
  mode = "modal",
}: ContactFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement | HTMLDivElement | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    company: "",
    subject: "",
    message: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const [emailBtnLabel, setEmailBtnLabel] = useState("Open email client");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(downloadUrlProp);

  // OTP verification state (download flow only)
  const [downloadStep, setDownloadStep] = useState<DownloadStep>("details");
  const [otpToken, setOtpToken] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  // Resolve ?download= query param
  useEffect(() => {
    if (downloadUrlProp !== null) {
      setDownloadUrl(downloadUrlProp);
      return;
    }
    const qp = searchParams?.get?.("download") ?? null;
    if (!qp) { setDownloadUrl(null); return; }
    const raw = qp.trim().toLowerCase();
    if (raw === "detailed" || raw === "detail" || raw === "long") {
      setDownloadUrl(DETAILED_RESUME_URL); return;
    }
    if (raw === "resume" || raw === "short" || raw === "cv") {
      setDownloadUrl(RESUME_URL); return;
    }
    try {
      const decoded = decodeURIComponent(qp);
      if (decoded.startsWith("/")) { setDownloadUrl(decoded); return; }
    } catch { /* ignore */ }
    setDownloadUrl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, downloadUrlProp]);

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

  const clearDownloadQuery = () => {
    try {
      const hash = window.location.hash || "#form";
      router.replace((pathname + hash) as any);
    } catch { /* ignore */ }
  };

  // Step 1 (download flow): send OTP to user's email
  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ ok: false, msg: "Please provide your name and email." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send code");
      setOtpToken(data.token);
      setDownloadStep("verify");
      setStatus({ ok: true, msg: `Verification code sent to ${form.email}. Check your inbox.` });
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Could not send verification code." });
    } finally {
      setLoading(false);
    }
  }

  // Step 2 (download flow): verify OTP and submit
  async function handleVerifyAndDownload(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!otp.trim() || otp.length < 6) {
      setStatus({ ok: false, msg: "Please enter the 6-digit code from your email." });
      return;
    }
    setLoading(true);
    try {
      const dialCode = form.countryCode === "+1-CA" ? "+1" : form.countryCode;
      const fullContact = form.contact ? `${dialCode} ${form.contact}` : "";
      const payload = {
        name: form.name,
        email: form.email,
        contact: fullContact,
        company: form.company || "",
        comments: form.comments || "",
        downloadUrl: downloadUrl || null,
        otpToken,
        otp,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Verification failed");

      setStatus({ ok: true, msg: "Verified! Your download will begin shortly." });
      setTimeout(() => {
        if (downloadUrl) triggerDownload(downloadUrl);
        clearDownloadQuery();
      }, 300);
      if (onClose) setTimeout(() => onClose(), 800);
      setForm({ name: "", email: "", countryCode: "+91", contact: "", company: "", subject: "", message: "", comments: "" });
      setOtp("");
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  // Regular contact form submit (non-download)
  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ ok: false, msg: "Please provide your name and email." });
      return;
    }
    if (!form.subject.trim() || !form.message.trim()) {
      setStatus({ ok: false, msg: "Please provide a subject and a short message." });
      return;
    }
    setLoading(true);
    try {
      const dialCode = form.countryCode === "+1-CA" ? "+1" : form.countryCode;
      const fullContact = form.contact ? `${dialCode} ${form.contact}` : "";
      const payload = {
        name: form.name,
        email: form.email,
        contact: fullContact,
        company: form.company || "",
        subject: form.subject,
        message: form.message,
        comments: form.comments || "",
        downloadUrl: null,
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
      setStatus({ ok: true, msg: "Message sent — thank you! I'll respond shortly." });
      clearDownloadQuery();
      setForm({ name: "", email: "", countryCode: "+91", contact: "", company: "", subject: "", message: "", comments: "" });
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  const inputCls = "mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent";
  const selectCls = "mt-1 rounded-md border border-white/10 bg-slate-900 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm";

  // Phone field with country code
  const phoneField = (
    <div className="block">
      <span className="text-sm text-slate-400">Contact number (optional)</span>
      <div className="mt-1 flex gap-2">
        <select
          value={form.countryCode}
          onChange={(e) => update("countryCode", e.target.value)}
          className={selectCls}
          aria-label="Country dial code"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>{c.label}</option>
          ))}
        </select>
        <input
          type="tel"
          value={form.contact}
          onChange={(e) => update("contact", e.target.value)}
          className={inputCls + " flex-1"}
          placeholder="98765 43210"
        />
      </div>
    </div>
  );

  // ── Download flow ──────────────────────────────────────────
  if (downloadUrl) {
    const detailsForm = (
      <form onSubmit={handleSendOtp} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-slate-400">Your name</span>
            <input value={form.name} onChange={(e) => update("name", e.target.value)}
              className={inputCls} placeholder="Jane Doe" required />
          </label>
          <label className="block">
            <span className="text-sm text-slate-400">Your email</span>
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
              className={inputCls} placeholder="you@company.com" required />
          </label>
        </div>

        {phoneField}

        <label className="block">
          <span className="text-sm text-slate-400">Company name (optional)</span>
          <input value={form.company} onChange={(e) => update("company", e.target.value)}
            className={inputCls} placeholder="Your organisation" />
        </label>

        <label className="block">
          <span className="text-sm text-slate-400">Comments / Suggestions (optional)</span>
          <textarea value={form.comments} onChange={(e) => update("comments", e.target.value)}
            className={inputCls + " h-20"} placeholder="Any feedback or message for Soumen?" />
        </label>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition disabled:opacity-50">
            {loading ? "Sending code…" : "Send verification code"}
          </button>
          {mode === "modal" && onClose && (
            <button type="button" onClick={onClose}
              className="ml-auto text-sm underline text-slate-400 hover:text-accent">
              Close
            </button>
          )}
        </div>

        {status && (
          <div role="status" className={`mt-2 rounded-md p-3 text-sm ${status.ok
            ? "bg-green-900/40 border border-green-700 text-green-200"
            : "bg-red-900/40 border border-red-700 text-red-200"}`}>
            {status.msg}
          </div>
        )}
      </form>
    );

    const verifyForm = (
      <form onSubmit={handleVerifyAndDownload} className="space-y-4">
        <p className="text-sm text-slate-300">
          A 6-digit code was sent to <strong className="text-white">{form.email}</strong>. Enter it below to verify and download.
        </p>

        <label className="block">
          <span className="text-sm text-slate-400">Verification code</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            value={otp}
            onChange={(e) => { setOtp(e.target.value.replace(/\D/g, "")); setStatus(null); }}
            className={inputCls + " text-center text-2xl tracking-[0.4em] font-mono"}
            placeholder="000000"
            autoFocus
            required
          />
        </label>

        <div className="flex items-center gap-3 flex-wrap">
          <button type="submit" disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition disabled:opacity-50">
            {loading ? "Verifying…" : "Verify & Download"}
          </button>
          <button type="button" disabled={loading}
            onClick={() => { setDownloadStep("details"); setOtp(""); setStatus(null); }}
            className="text-sm underline text-slate-400 hover:text-accent">
            Change details
          </button>
          <button type="button" disabled={loading}
            onClick={async () => {
              setStatus(null);
              setLoading(true);
              try {
                const res = await fetch("/api/contact/send-otp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name: form.name, email: form.email }),
                });
                const data = await res.json();
                if (!data.ok) throw new Error(data.error);
                setOtpToken(data.token);
                setStatus({ ok: true, msg: "New code sent." });
              } catch (err: any) {
                setStatus({ ok: false, msg: err?.message || "Could not resend." });
              } finally {
                setLoading(false);
              }
            }}
            className="text-sm underline text-slate-400 hover:text-accent">
            Resend code
          </button>
          {mode === "modal" && onClose && (
            <button type="button" onClick={onClose}
              className="ml-auto text-sm underline text-slate-400 hover:text-accent">
              Close
            </button>
          )}
        </div>

        {status && (
          <div role="status" className={`mt-2 rounded-md p-3 text-sm ${status.ok
            ? "bg-green-900/40 border border-green-700 text-green-200"
            : "bg-red-900/40 border border-red-700 text-red-200"}`}>
            {status.msg}
          </div>
        )}
      </form>
    );

    const downloadContent = (
      <div ref={formRef as React.RefObject<HTMLDivElement>} id="form">
        {downloadStep === "details" ? detailsForm : verifyForm}
      </div>
    );

    if (mode === "modal") {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => onClose && onClose()} />
          <div className="relative z-10 w-full max-w-md rounded-xl p-6 bg-slate-900 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-1">
              {downloadStep === "details" ? "Fill your details to download" : "Verify your email"}
            </h3>
            {downloadStep === "details" && (
              <p className="text-xs text-slate-500 mb-4">A verification code will be sent to your email.</p>
            )}
            {downloadContent}
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2 text-accent">
          {downloadStep === "details" ? "Download CV" : "Verify your email"}
        </h1>
        {downloadStep === "details" && (
          <p className="text-sm text-slate-400 mb-6">A verification code will be sent to your email address.</p>
        )}
        {downloadContent}
      </div>
    );
  }

  // ── Regular contact form ───────────────────────────────────
  const contactFormEl = (
    <form ref={formRef as React.RefObject<HTMLFormElement>} id="form" onSubmit={handleContactSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-slate-400">Your name</span>
          <input value={form.name} onChange={(e) => update("name", e.target.value)}
            className={inputCls} placeholder="Jane Doe" required />
        </label>
        <label className="block">
          <span className="text-sm text-slate-400">Your email</span>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
            className={inputCls} placeholder="you@company.com" required />
        </label>
      </div>

      {phoneField}

      <label className="block">
        <span className="text-sm text-slate-400">Company name (optional)</span>
        <input value={form.company} onChange={(e) => update("company", e.target.value)}
          className={inputCls} placeholder="Your organisation" />
      </label>

      <label className="block">
        <span className="text-sm text-slate-400">Subject</span>
        <input value={form.subject} onChange={(e) => update("subject", e.target.value)}
          className={inputCls} placeholder="Short summary" required />
      </label>

      <label className="block">
        <span className="text-sm text-slate-400">Message</span>
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)}
          className={inputCls + " h-36"} placeholder="What's the challenge? What outcomes matter?" required />
      </label>

      <div className="flex items-center gap-3 flex-wrap">
        <button type="submit" disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition disabled:opacity-50">
          {loading ? "Sending…" : "Send message"}
        </button>

        <button
          type="button"
          onClick={() => {
            const subject = encodeURIComponent(form.subject || "Contact via website");
            const body = encodeURIComponent(
              `${form.message || ""}\n\n— ${form.name || ""}\n${form.email ? `Reply: ${form.email}` : ""}\n${form.contact ? `Contact: ${form.contact}` : ""}`
            );
            const a = document.createElement("a");
            a.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
            a.click();
            // Copy email to clipboard as fallback when no mail client is configured
            try {
              navigator.clipboard.writeText(EMAIL).then(() => {
                setEmailBtnLabel("Email copied!");
                setTimeout(() => setEmailBtnLabel("Open email client"), 2500);
              });
            } catch { /* clipboard unavailable */ }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
        >
          {emailBtnLabel}
        </button>

        {mode === "modal" && onClose && (
          <button type="button" onClick={onClose}
            className="ml-auto text-sm underline text-slate-400 hover:text-accent">
            Close
          </button>
        )}
      </div>

      {status && (
        <div role="status" className={`mt-2 rounded-md p-3 text-sm ${status.ok
          ? "bg-green-900/40 border border-green-700 text-green-200"
          : "bg-red-900/40 border border-red-700 text-red-200"}`}>
          {status.msg}
        </div>
      )}

      {mode === "page" && (
        <p className="mt-4 text-xs text-slate-500">
          Privacy: I will only use the details you provide to reply about the enquiry. If you prefer not to share, email directly at{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
    </form>
  );

  if (mode === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" onClick={() => onClose && onClose()} />
        <div className="relative z-10 w-full max-w-md rounded-xl p-6 bg-slate-900">
          <h3 className="text-lg font-semibold mb-4">Send me a message</h3>
          {contactFormEl}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-accent">Contact me</h1>
      {contactFormEl}
    </div>
  );
}
