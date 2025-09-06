// app/(site)/contact/page.tsx
import Link from "next/link";
// IMPORTANT: relative import from app/(site)/contact -> project-root/components
import ContactForm from "../../../components/ContactForm";
import { NAME, ROLE, EMAIL, LINKEDIN, RESUME_URL } from "@/lib/constants";

export const metadata = {
  title: "Contact — Soumen Roy",
  description: `Contact ${NAME} — ${ROLE}`,
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-accent">Get in touch</h1>
        <p className="mt-2 text-slate-300">
          I consult on data platforms, Industry 4.0 and transformation programs. Use the form below to share a short brief and I’ll get back within 48 hours.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-lg font-semibold">Direct contact</h2>
            <p className="mt-2 text-slate-300">
              <strong>{NAME}</strong><br />
              <span className="text-sm text-slate-400">{ROLE}</span>
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <div>
                <span className="block text-xs text-slate-400">Email</span>
                <a className="underline hover:text-accent" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>

              <div>
                <span className="block text-xs text-slate-400">LinkedIn</span>
                <a className="underline hover:text-accent" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  {LINKEDIN.replace(/^https?:\/\//, "")}
                </a>
              </div>

              <div>
                <span className="block text-xs text-slate-400">Resume</span>
                <a className="underline hover:text-accent" href={RESUME_URL} download>
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-md font-semibold text-accent">Prefer a quick call?</h3>
            <p className="mt-2 text-slate-300 text-sm">
              If you’d like a short intro call, include preferred time windows and your timezone in the message. I’ll propose a 20-minute slot.
            </p>
            <div className="mt-4">
              <a href="#form" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition">
                Request 20-min intro
              </a>
            </div>
          </div>

          {/* Polished one-line contact guidance */}
          <div className="rounded-2xl border border-white/10 p-6">
            <h4 className="text-md font-semibold text-accent mb-2">Getting started</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tell me about your challenge, the outcomes you’re aiming for, and any context that will help me understand your current systems.
            </p>
          </div>
        </aside>

        <main>
          <div id="form" className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
            <h2 className="text-lg font-semibold mb-2">Send a message</h2>
            <p className="text-sm text-slate-400 mb-4">Fill this form — it will POST to <code>/api/contact</code> if you implement it, otherwise it falls back to your email client.</p>

            <ContactForm />
          </div>
        </main>
      </div>

      <div className="mt-12 text-sm text-slate-500">
        <p>
          By contacting me you agree to share the information you provide for the purpose of evaluating a potential engagement. I will treat your information responsibly.
        </p>
      </div>
    </div>
  );
}
