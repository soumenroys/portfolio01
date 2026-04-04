// /app/countries/page.tsx
import Link from "next/link";

export default function CountriesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-accent">3 Countries</h1>

      <p className="text-slate-300 mb-8">
        My professional journey has extended across{" "}
        <strong>India, Indonesia, and Canada</strong>, where I have delivered
        large-scale transformation and digitalization projects in steel,
        manufacturing, construction, and technology domains.
      </p>

      <div className="space-y-8 text-slate-400">
        <div>
          <h2 className="text-xl font-semibold text-accent">🇮🇳 India</h2>
          <p className="mt-2">
            Led technology and engineering teams at{" "}
            <strong>Tata Steel</strong>, one of the world’s largest integrated
            steel plants, as well as at{" "}
            <strong>Larsen &amp; Toubro (L&amp;T)</strong>, India’s largest
            construction and engineering conglomerate. Delivered digital
            transformation projects in ERP integration, automation, and project
            management systems.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-accent">🇮🇩 Indonesia</h2>
          <p className="mt-2">
            At <strong>Gunung Raja Paksi (GRP)</strong>, the largest privately
            owned steel plant in Indonesia, I led cross-functional teams driving
            <strong> Industry 4.0 adoption</strong>. Introduced predictive
            analytics, IoT-based monitoring, and enterprise dashboards to
            modernize steel manufacturing processes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-accent">🇨🇦 Canada</h2>
          <p className="mt-2">
            Spearheaded the <strong>world’s first photogrammetry project with
            OSIG for Google</strong>. This pioneering initiative brought
            together advanced geospatial mapping and automation, demonstrating
            the global applicability of Indian-led engineering expertise.
          </p>
        </div>
      </div>

      <p className="mt-8 text-slate-300">
        These cross-border experiences have not only broadened my professional
        perspective but also enabled me to{" "}
        <strong>integrate global best practices</strong> into digital
        transformation journeys across industries.
      </p>

    </div>
  );
}
