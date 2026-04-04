import { NAME, ROLE, EMAIL, LINKEDIN, TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {/* Left: identity */}
          <div>
            <p className="font-semibold text-slate-100">{NAME}</p>
            <p className="text-sm text-slate-400 mt-0.5">{ROLE}</p>
            <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed">{TAGLINE}</p>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-1.5 text-sm sm:items-end">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-400 hover:text-accent transition"
            >
              {EMAIL}
            </a>
            <a href="/contact" className="text-slate-400 hover:text-accent transition">
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/6 text-xs text-slate-600">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
