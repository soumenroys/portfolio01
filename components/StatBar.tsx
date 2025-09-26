// /components/StatBar.tsx
import Link from "next/link";

const EXEC_STATS = [
  {
    label: "Enterprise Transformations",
    value: "10+",
    slug: "transformations",
    icon: "🚀",
  },
  {
    label: "Global Teams Led",
    value: "200+",
    slug: "teams-led",
    icon: "👥",
  },
  {
    label: "Countries of Impact",
    value: "3",
    slug: "countries",
  },
  {
    label: "ROI Delivered",
    value: "$50M+",
    slug: "roi",
    icon: "💹",
  },
  {
    label: "Platforms Built",
    value: "Data & Microservices",
    slug: "platforms-built",
    icon: "⚙️",
  },
];

export default function StatBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
      {EXEC_STATS.map((s) => {
        const href = `/${s.slug ?? s.label.toLowerCase().replace(/\s+/g, "-")}`;

        if (s.slug === "countries") {
          return (
            <Link
              key={s.label}
              href={href as any}
              aria-label={`View details for ${s.label}`}
              className="block rounded-2xl border border-white/10 p-4 hover:border-white/30 transition text-center"
            >
              <div>
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
              </div>
            </Link>
          );
        }

        return (
          <Link
            key={s.label}
            href={href as any}
            aria-label={`View details for ${s.label}`}
            className="block rounded-2xl border border-white/10 p-4 hover:border-white/30 transition text-center"
          >
            <div>
              <div className="text-2xl font-semibold text-accent">{s.value}</div>
              {s.icon && <div className="mt-2 text-2xl">{s.icon}</div>}
              <div className="mt-3 text-sm text-slate-400">{s.label}</div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
