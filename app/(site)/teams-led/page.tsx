// /app/teams-led/page.tsx
import Link from "next/link";

export default function TeamsLedPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link
        href="/"
        className="text-sm underline hover:text-accent mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-accent">200+ Teams Led</h1>

      <p className="text-slate-300 mb-6">
        Over the span of 27+ years, I have had the privilege of leading and
        mentoring diverse teams of engineers, technologists, and business
        analysts across some of the world’s most challenging industrial and
        digital transformation programs. These teams, often numbering over{" "}
        <strong>200 professionals</strong>, operated in highly complex,
        multi-disciplinary environments where precision, safety, and innovation
        were non-negotiable.
      </p>

      <div className="space-y-8 text-slate-400">
        <div>
          <h2 className="text-xl font-semibold text-accent">
            Steel Plant Consultancy — India
          </h2>
          <p className="mt-2">
            Early in my career at one of India’s largest steel plant consultancies,
            I was entrusted with building and guiding project teams responsible for
            <strong> greenfield and brownfield steel plant design</strong>. These
            groups brought together civil, mechanical, electrical, and process
            engineers. I played a central role in aligning multi-disciplinary
            expertise, ensuring integration between design, automation, and cost
            optimization.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-accent">
            Tata Steel — Largest Steel Plant in India
          </h2>
          <p className="mt-2">
            At Tata Steel, one of India’s most prestigious and largest steel
            producers, I managed technology and automation teams embedded within
            critical production units. The teams I led drove{" "}
            <strong>digitalization, ERP integration, and process automation</strong>,
            delivering measurable ROI while scaling operations. I developed leaders
            from within, building a culture of ownership and continuous
            improvement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-accent">
            GRP — Largest Privately Owned Steel Plant in Indonesia
          </h2>
          <p className="mt-2">
            In Indonesia, I assumed responsibility for large cross-functional teams
            at <strong>Gunung Raja Paksi (GRP)</strong>, the country’s largest
            privately owned steel company. I guided{" "}
            <strong>process engineers, IT specialists, and data professionals</strong>{" "}
            in modernizing plant operations. My leadership helped transform legacy
            systems into modern <strong>Industry 4.0 platforms</strong> — enabling
            predictive analytics, real-time dashboards, and global reporting
            visibility across management layers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-accent">
            L&amp;T — Largest Construction Company in India
          </h2>
          <p className="mt-2">
            At Larsen &amp; Toubro, India’s largest construction and engineering
            conglomerate, I led teams working on{" "}
            <strong>large-scale infrastructure and project management systems</strong>.
            My leadership focused on bridging the gap between field operations and
            corporate systems, introducing automation and digital tools that
            improved collaboration, resource allocation, and reporting across
            thousands of project sites.
          </p>
        </div>
      </div>

      <p className="mt-8 text-slate-300">
        Across these assignments, my approach to leadership has remained
        consistent: <strong>develop talent, empower decision-making, and instill
        accountability</strong>. The result has been resilient teams capable of
        scaling operations, embracing transformation, and consistently delivering
        measurable outcomes.
      </p>

      {/* Back Button at the bottom */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-md border border-white/10 text-sm hover:bg-white/5"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
