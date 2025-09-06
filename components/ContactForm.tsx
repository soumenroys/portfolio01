// /components/ContactForm.tsx
"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((s) => ({ ...s, [k]: v }));
    setStatus(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.message.trim() || !form.subject.trim()) {
      setStatus({ ok: false, msg: "Please provide your name, subject and a short message." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent — thank you! I'll respond shortly." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else if (res.status === 404) {
        throw new Error("No /api/contact endpoint");
      } else {
        const text = await res.text().catch(() => "Server rejected the request.");
        setStatus({ ok: false, msg: `Failed to send: ${text}` });
      }
    } catch (err) {
      // fallback to mailto
      const to = EMAIL;
      const subject = encodeURIComponent(form.subject || "Contact via website");
      const bodyParts = [
        form.message,
        "",
        `— ${form.name}`,
        form.email ? `Reply: ${form.email}` : "",
      ].filter(Boolean).join("\n");

      const body = encodeURIComponent(bodyParts);
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

      window.location.href = mailto;
      setStatus({ ok: true, msg: "Opened your email client as a fallback — please send the message there." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          <span className="text-sm text-slate-400">Your email (optional)</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-slate-400">Subject</span>
        <input
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Short summary (e.g. 'Pilot: reduce scrap by 10%')"
          required
        />
      </label>

      <label className="block">
        <span className="text-sm text-slate-400">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 h-36 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="What's the challenge? What outcomes matter? Any constraints?"
          required
        />
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send message"}
        </button>

        <button
          type="button"
          onClick={() => {
            const subject = encodeURIComponent(form.subject || "Contact via website");
            const body = encodeURIComponent(`${form.message || ""}\n\n— ${form.name || ""}\n${form.email ? `Reply: ${form.email}` : ""}`);
            window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
        >
          Open email client
        </button>
      </div>

      {status && (
        <div
          role="status"
          className={`mt-2 rounded-md p-3 ${status.ok ? "bg-green-900/40 border border-green-700 text-green-200" : "bg-red-900/40 border border-red-700 text-red-200"}`}
        >
          {status.msg}
        </div>
      )}

      <p className="mt-4 text-xs text-slate-500">
        Privacy: I will only use the details you provide to reply about the enquiry. If you prefer not to share, email directly at <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </form>
  );
}
