// /components/StatBar.tsx
import Link from "next/link";
import { TrendingUp, Users, Globe, BarChart2, Layers } from "lucide-react";

const EXEC_STATS = [
  {
    label: "Enterprise Transformations",
    value: "10+",
    slug: "transformations",
    icon: <TrendingUp size={18} />,
    color: "text-violet-400",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    label: "Global Teams Led",
    value: "200+",
    slug: "teams-led",
    icon: <Users size={18} />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    label: "Countries of Impact",
    value: "3",
    slug: "countries",
    icon: <Globe size={18} />,
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
    flags: true,
  },
  {
    label: "ROI Delivered",
    value: "$50M+",
    slug: "roi",
    icon: <BarChart2 size={18} />,
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-500/10",
  },
  {
    label: "Platforms Built",
    value: "Data & AI",
    slug: "platforms-built",
    icon: <Layers size={18} />,
    color: "text-rose-400",
    glow: "group-hover:shadow-rose-500/10",
  },
];

export default function StatBar() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-8">
      {EXEC_STATS.map((s) => (
        <Link
          key={s.label}
          href={`/${s.slug}` as any}
          aria-label={`View details for ${s.label}`}
          className={`group block rounded-xl border border-white/8 bg-white/2 p-4 hover:border-white/20 hover:bg-white/4 hover:shadow-lg transition-all duration-200 text-center ${s.glow}`}
        >
          <div className={`flex justify-center mb-2 ${s.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
            {s.icon}
          </div>
          <div className={`text-xl font-bold tracking-tight text-slate-100 group-hover:${s.color} transition-colors`}>
            {s.value}
          </div>
          {s.flags && (
            <div className="mt-1 flex items-center justify-center gap-1 text-sm">
              <span role="img" aria-label="India">🇮🇳</span>
              <span role="img" aria-label="Indonesia">🇮🇩</span>
              <span role="img" aria-label="Canada">🇨🇦</span>
            </div>
          )}
          <div className="mt-1.5 text-xs text-slate-500 group-hover:text-slate-400 transition-colors leading-snug">
            {s.label}
          </div>
        </Link>
      ))}
    </section>
  );
}
