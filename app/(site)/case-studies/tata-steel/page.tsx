// /app/(site)/case-studies/tata-steel/page.tsx
import Link from "next/link";
import LightboxGallery from "@/components/LightboxGallery";

export default function TataSteelCaseStudy() {
  // ✅ PNG file paths in /public/images/case-studies/tata-steel/
  const images = [
    "/images/case-studies/tata-steel/drone-survey.png",
    "/images/case-studies/tata-steel/lidar-scan.png",
    "/images/case-studies/tata-steel/digital-twin.png",
    "/images/case-studies/tata-steel/bim3d.png",
  ];

  const captions = [
    "Drone-based 3D survey used for brownfield planning",
    "LiDAR scan — pointcloud-derived structural model",
    "Digital twin & photogrammetry output used in engineering review",
    "BIM-based 3D modelling integrated into steel plant projects",
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back to Case Studies */}
      <Link href="/case-studies" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
        Tata Steel — Driving Digital Engineering Transformation
      </h1>

      {/* Intro */}
      <p className="text-slate-300 mb-6">
        As <strong>Senior Manager – Virtual Engineering & Business Process</strong> at Tata Steel (2015–2018),
        I pioneered the adoption of Industry 4.0 technologies across one of India’s largest and most respected steel producers.
        My work focused on integrating drones, photogrammetry, GIS, BIM, and automation into engineering and plant operations,
        setting a new benchmark for digital transformation in heavy industry.
      </p>

      <section className="space-y-8 text-slate-400">
        {/* Key Contributions */}
        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Key Contributions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li>🚁 Pioneered Tata Steel’s first drone-based 3D modelling system for brownfield expansion and maintenance projects.</li>
            <li>🗺 Implemented GIS, BIM, and photogrammetry workflows to unify design, execution, and operations data.</li>
            <li>🔦 Introduced LiDAR scanning technology for rapid structural modelling and inspection.</li>
            <li>📉 Achieved a 20% reduction in engineering rework and turnaround time through digital workflows and automation.</li>
            <li>🛠 Developed CAD automation tools (AutoLISP) for rapid drafting and improved design productivity.</li>
            <li>✅ Applied Industry 4.0 technologies in QA & control systems, enhancing quality, safety, and resilience.</li>
          </ul>
        </article>

        {/* Image gallery (shared Lightbox) */}
        <article>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">Selected Visuals</h2>
          <p className="mt-2 text-sm text-slate-300">Click any image to enlarge.</p>

          <LightboxGallery images={images} captions={captions} />
        </article>

        {/* CTA Buttons – unified with other case study pages */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-medium text-black hover:bg-accent/90 transition"
          >
            Explore how Industry 4.0 engineering workflows can modernize your operations →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-accent px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-black transition"
          >
            Book a 20-min Intro
          </Link>
        </div>
      </section>
    </div>
  );
}
