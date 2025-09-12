import Link from "next/link";

const studies = [
  {
    href: "/case-studies/tata-steel",
    title: "Tata Steel Digital Engineering",
    summary:
      "Modernization of engineering processes with Industry 4.0 workflows and advanced analytics.",
  },
  {
    href: "/case-studies/openlm",
    title: "OpenLM Reporting Modernization",
    summary:
      "Microservices-driven reporting platform delivering real-time analytics and multi-tenancy.",
  },
  {
    href: "/case-studies/grp",
    title: "GRP Manufacturing Analytics ROI",
    summary:
      "Industry 4.0 adoption with digitized shop-floor data, ROI dashboards, and cloud-native automation.",
  },
] as const; // 👈 tells TS these are readonly constants

export default function CaseStudies() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Case Studies</h1>
      <p>
        Selected projects that highlight my contributions to digital transformation, 
        engineering modernization, and business impact.
      </p>
      <div className="mt-8 space-y-6">
        {studies.map((s) => (
          <div
            key={s.href}
            className="border border-slate-700 rounded-lg p-4 hover:border-accent transition"
          >
            <h2 className="text-xl font-semibold">
              <Link href={s.href as any} className="hover:text-accent" legacyBehavior>
                {s.title}
              </Link>
            </h2>
            <p className="text-slate-300">{s.summary}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
