// /app/(site)/case-studies/page.tsx
import type { Metadata, Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { canonical, site } from "@/lib/seo";
import { NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Case Studies | ${NAME}`,
  description:
    "Selected case studies across BIM, Industry 4.0, and SaaS optimization — including Tata Steel, GRP, OpenLM, and M. N. Dastur.",
  alternates: { canonical: canonical("/case-studies") },
  openGraph: {
    url: canonical("/case-studies"),
    title: `Case Studies | ${NAME}`,
    description:
      "Selected case studies across BIM, Industry 4.0, and SaaS optimization — including Tata Steel, GRP, OpenLM, and M. N. Dastur.",
    images: [{ url: site.ogDefault, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies | ${NAME}`,
    description:
      "Selected case studies across BIM, Industry 4.0, and SaaS optimization — including Tata Steel, GRP, OpenLM, and M. N. Dastur.",
    images: [site.ogDefault],
  },
};

const studies = [
  {
    href: "/case-studies/tata-steel",
    title: "Tata Steel — Digital Engineering Transformation",
    blurb:
      "Drones, LiDAR, photogrammetry, GIS, and BIM — reduced rework and accelerated engineering at scale.",
    image: "/images/case-studies/tata-steel/drone-survey.png",
  },
  {
    href: "/case-studies/openlm",
    title: "OpenLM — Reporting & License Optimization",
    blurb:
      "Telemetry, automation, and policy-driven reclamation to cut license waste and improve governance.",
    image: "/images/case-studies/openlm/license_monitoring.png",
  },
  {
    href: "/case-studies/grp",
    title: "GRP — Manufacturing Modernization & Industry 4.0",
    blurb:
      "OT/IT convergence, real-time analytics, and predictive insights to improve yield and throughput.",
    image: "/images/case-studies/grp/plant-overview.png",
  },
  {
    href: "/case-studies/mn-dastur-bim",
    title: "M. N. Dastur — BIM Transformation at Scale",
    blurb:
      "Converted 50+ years of classical 2D engineering to BIM-based virtual engineering across 32 disciplines.",
    image: "/images/bim-collaboration.jpg", // ensure this file exists
  },
] as const satisfies ReadonlyArray<{
  href: Route;
  title: string;
  blurb: string;
  image: string;
}>;

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-accent">Case Studies</h1>
      <p className="mt-3 text-slate-300">
        Selected initiatives that delivered measurable impact — from cost reduction and efficiency gains
        to enterprise adoption of digital platforms.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {studies.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block rounded-lg border border-white/10 overflow-hidden hover:bg-white/5 transition"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={false}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-accent">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{s.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
