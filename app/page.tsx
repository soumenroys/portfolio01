import Button from "@/components/Button";
import StatBar from "@/components/StatBar";
import Link from "next/link";

import {
  NAME,
  ROLE,
  YEARS,
  LINKEDIN,
  EMAIL,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      <section className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {NAME} — <span className="text-accent">{ROLE}</span>
        </h1>

        {/* Tagline with clickable link */}
        <p className="mt-3 text-slate-300">
          I have delivered{" "}
          <Link
            href="/transformations"
            className="underline hover:text-accent"
          >
            10+ transformations
          </Link>{" "}
          across industries with measurable ROI.
        </p>

        <p className="mt-2 text-slate-400">
          {YEARS} of experience scaling data platforms, modernizing engineering,
          and delivering measurable ROI across India & APAC.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          {/* Primary CV (form page instead of direct PDF) */}
          <Button href="/cv.html">Download CV</Button>

          {/* Detailed CV (form page instead of direct PDF) */}
          <Button href="/detailed_cv.html">Download Detailed CV</Button>

          {/* Book / contact */}
          <Button href="/contact" variant="outline">
            Book a 20-min Intro
          </Button>
        </div>

        <div className="mt-2 text-sm text-slate-400">
          <a
            className="underline hover:text-accent"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a className="underline hover:text-accent" href={`mailto:${EMAIL}`}>
            Email
          </a>
        </div>
      </section>

      <StatBar />

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Microservices Reporting Platform",
            context:
              "From monolith to microservices for enterprise reporting (Kafka, Spark, S3/MinIO).",
            result:
              "Cut report latency from hours to minutes; multi-tenant analytics live across regions.",
            href: "/case-studies/microservices-reporting-platform",
          },
          {
            title: "Manufacturing Analytics ROI",
            context:
              "Analytics-driven procurement and scrap cost prediction in heavy industry.",
            result:
              "Material cost savings and faster decision cycles for plant operations.",
            href: "/case-studies/manufacturing-analytics-roi",
          },
          {
            title: "Executive Dashboards at Scale",
            context:
              "Power BI/QuickSight roll-out with governed datasets and semantic models.",
            result:
              "C-suite adoption; measurable business outcomes with trusted metrics.",
            href: "/case-studies/executive-dashboards-scale",
          },
        ].map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-white/10 p-5 hover:border-white/30 transition"
          >
            <h3 className="font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{card.context}</p>
            <p className="mt-2 text-sm text-slate-400">{card.result}</p>
            <span className="mt-3 inline-block text-accent text-sm">
              Read case study →
            </span>
          </a>
        ))}
      </section>
    </div>
  );
}
