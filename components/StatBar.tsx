// /components/StatBar.tsx
import Link from "next/link";
import { STATS } from "@/lib/constants";

export default function StatBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {STATS.map((s) => {
        const href = `/${s.slug ?? s.label.toLowerCase().replace(/\s+/g, "-")}`;

        // Special rendering for Countries: show flag emojis
        if (s.slug === "countries") {
          return (
            <Link
              key={s.label}
              href={href as any}
              className="rounded-2xl border border-white/10 p-4 hover:border-white/30 transition block text-center"
              aria-label={`View details for ${s.label}`}
              legacyBehavior>
              <div className="text-2xl font-semibold text-accent">{s.value}</div>
              <div className="mt-2 flex items-center justify-center gap-3 text-2xl">
                <span role="img" aria-label="India" className="drop-shadow-sm">
                  🇮🇳
                </span>
                <span role="img" aria-label="Indonesia" className="drop-shadow-sm">
                  🇮🇩
                </span>
                <span role="img" aria-label="Canada" className="drop-shadow-sm">
                  🇨🇦
                </span>
              </div>
              <div className="mt-3 text-sm text-slate-400">{s.label}</div>
            </Link>
          );
        }

        // Default rendering for all other stats
        return (
          <Link
            key={s.label}
            href={href as any}
            className="rounded-2xl border border-white/10 p-4 hover:border-white/30 transition block text-center"
            aria-label={`View details for ${s.label}`}
            legacyBehavior>
            <div className="text-2xl font-semibold text-accent">{s.value}</div>
            <div className="mt-3 text-sm text-slate-400">{s.label}</div>
          </Link>
        );
      })}
    </section>
  );
}
