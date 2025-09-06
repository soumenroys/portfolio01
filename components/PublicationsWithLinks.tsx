// components/PublicationsWithLinks.tsx
import React from "react";

const recordings = [
  {
    id: "industry4",
    title: "Industry 4.0 — Connected enterprises (overview / keynote)",
    subtitle: "Authoritative industry-level view useful for hiring managers",
    href: "https://www.youtube.com/watch?v=ktcRXyE8SaY"
  },
  {
    id: "otit_threats",
    title: "IT/OT Convergence: Proactive Threat Detection (webinar)",
    subtitle: "Practical OT/IT security & monitoring concerns",
    href: "https://www.youtube.com/watch?v=H9_BPgin6So"
  },
  {
    id: "connected_factory",
    title: "IT/OT Convergence for a Connected Factory (webinar)",
    subtitle: "Factory use-cases and IIoT integration patterns",
    href: "https://www.youtube.com/watch?v=hCXX9sBAJuo"
  },
  {
    id: "data_mesh",
    title: "Data Mesh — Zhamak Dehghani (architecture talk)",
    subtitle: "Foundational talk on modern data platform thinking",
    href: "https://www.youtube.com/watch?v=CDWp_xyCdzw"
  },
  {
    id: "apache_iceberg",
    title: "Apache Iceberg — overview / deep-dive",
    subtitle: "Relevant to Parquet / Iceberg / modern lakehouses",
    href: "https://www.youtube.com/watch?v=stJLaIZRcJs"
  },
  {
    id: "photogrammetry",
    title: "Pix4Dmatic / Photogrammetry intro (practical demo)",
    subtitle: "Vendor demo and practical tips for photogrammetry at scale",
    href: "https://www.youtube.com/watch?v=TcGlAtuyp6U"
  }
];

export default function PublicationsWithLinks() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-accent mb-4">Recordings & talks</h2>

      <div className="grid gap-4">
        {recordings.map((r) => (
          <div key={r.id} className="rounded-2xl border border-white/10 p-4 flex items-center justify-between">
            <div className="pr-4">
              <div className="font-semibold">{r.title}</div>
              <div className="text-xs text-slate-400">{r.subtitle}</div>
            </div>

            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
            >
              Watch recording
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
