"use client";

// /app/(site)/case-studies/tata-steel/page.tsx
import Link from "next/link";
import { useState } from "react";

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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back to home link */}
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-accent">
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
          <h2 className="text-xl font-semibold text-accent">Key Contributions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li>🚁 Pioneered Tata Steel’s first drone-based 3D modelling system for brownfield expansion and maintenance projects.</li>
            <li>🗺 Implemented GIS, BIM, and photogrammetry workflows to unify design, execution, and operations data.</li>
            <li>🔦 Introduced LiDAR scanning technology for rapid structural modelling and inspection.</li>
            <li>📉 Achieved a 20% reduction in engineering rework and turnaround time through digital workflows and automation.</li>
            <li>🛠 Developed CAD automation tools (AutoLISP) for rapid drafting and improved design productivity.</li>
            <li>✅ Applied Industry 4.0 technologies in QA & control systems, enhancing quality, safety, and resilience.</li>
          </ul>
        </article>

        {/* Image gallery */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Selected Visuals</h2>
          <p className="mt-2 text-sm text-slate-300">Click any image to enlarge.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setLightboxIndex(idx)}
                className="group relative block overflow-hidden rounded-lg border border-white/10 p-0"
              >
                <div style={{ width: "100%", height: 160, position: "relative", overflow: "hidden" }}>
                  <img
                    src={src}
                    alt={captions[idx] ?? `Tata Steel image ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/case-studies/tata-steel/placeholder.png";
                    }}
                  />
                </div>
                <div className="p-3 text-sm text-slate-300">{captions[idx]}</div>
              </button>
            ))}
          </div>

          {/* Lightbox modal */}
          {typeof lightboxIndex === "number" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setLightboxIndex(null)}
            >
              <div
                className="relative w-full max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-3 right-3 z-50 rounded-full bg-black/50 px-3 py-1 text-white"
                  aria-label="Close image"
                >
                  ✕
                </button>

                <div
                  style={{
                    width: "100%",
                    height: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={images[lightboxIndex]}
                    alt={captions[lightboxIndex] ?? `Tata Steel image ${lightboxIndex + 1}`}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/case-studies/tata-steel/placeholder.png";
                    }}
                  />
                </div>

                <p className="mt-3 text-center text-sm text-slate-300">
                  {captions[lightboxIndex]}
                </p>
              </div>
            </div>
          )}
        </article>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent text-black font-medium hover:opacity-95 transition"
          >
            Explore how Industry 4.0 engineering workflows can modernize your operations →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            Book a 20-min Intro
          </Link>
        </div>
      </section>
    </div>
  );
}
