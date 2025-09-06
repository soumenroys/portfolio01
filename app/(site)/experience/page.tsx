// /app/experience/page.tsx
import Link from "next/link";
import { RESUME_URL, DETAILED_RESUME_URL } from "@/lib/constants";

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Link href="/" className="text-sm underline hover:text-accent mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-accent">Experience — Selected Roles & Impact</h1>

      <p className="text-slate-300 mb-6">
        27+ years delivering engineering automation, data platforms, and Industry 4.0 transformations across India, Southeast Asia and Canada.
        Below are role-level responsibilities and measurable outcomes pulled from the detailed CV. For the full CV (project-level detail and references) you can download the PDF below.
      </p>

      <div className="flex gap-3 mb-8">
        <Link
          href={RESUME_URL as any}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-black font-medium"
        >
          Download CV (PDF)
        </Link>

        <Link
          href={DETAILED_RESUME_URL as any}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/5"
        >
          Download Detailed CV (PDF)
        </Link>
      </div>

      {/* Summary stats */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-white/10 p-4">
          <div className="text-sm text-slate-400">Total Experience</div>
          <div className="text-2xl font-semibold">27+ years</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-4">
          <div className="text-sm text-slate-400">Transformations</div>
          <div className="text-2xl font-semibold">10+</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-4">
          <div className="text-sm text-slate-400">Teams Led</div>
          <div className="text-2xl font-semibold">200+</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-4">
          <div className="text-sm text-slate-400">Geographies</div>
          <div className="text-2xl font-semibold">India · Indonesia · Canada</div>
        </div>
      </section>

      {/* Experience list */}
      <section className="space-y-12 text-slate-400">

        {/* OpenLM */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Tribe Lead — OpenLM (September 2022 – Present)</h2>
          <p className="mt-2">
            Lead product & engineering tribe for license lifecycle and analytics; accountable for product architecture, delivery, and India operations scaling.
          </p>

          <h3 className="mt-3 font-medium">Responsibilities</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Architect and drive transition from a monolithic product to microservices and container-native SaaS.</li>
            <li>Design and operate streaming & batch data pipelines (Apache Spark, Kafka, Airflow, NiFi) for telemetry and analytics.</li>
            <li>Own hiring, org scaling, and engineering operations for India — recruiting, SRE practices, and vendor partnerships.</li>
            <li>Partner with product and CX to deliver high-value dashboards (Power BI / Superset / QuickSight) and ML-enabled license forecasting.</li>
          </ul>

          <h3 className="mt-3 font-medium">Value delivered</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Scaled Indian engineering & support operations from a small team to 85+ people across multiple product lines, enabling faster feature delivery and 24×7 support coverage.</li>
            <li>Implemented cloud cost optimisation that reduced infrastructure spend by ~30% through architecture redesign and right-sizing.</li>
            <li>Reduced on-prem/edge hosting costs by introducing a lightweight clustering approach for edge use-cases.</li>
            <li>Launched ML-based license forecasting and real-time analytics that increased reclaimable-license detection and delivered actionable customer recommendations.</li>
          </ul>
        </article>

        {/* GRP */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Head — Business Process, Gunung Raja Paksi (Jan 2019 – Sep 2022)</h2>
          <p className="mt-2">
            Led digital backbone and ERP/analytics modernization for GRP during a transition to a public company — bridging C-suite reporting, plant operations, and procurement.
          </p>

          <h3 className="mt-3 font-medium">Responsibilities</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Drive ERP rollouts across departments and integrate finance, production and maintenance data for consolidated reporting.</li>
            <li>Build C-level dashboards unifying finance, HR, production, and maintenance to enable faster data-driven decisions.</li>
            <li>Introduce mobile asset management and digital inventory flows to reduce manual reconciliation effort.</li>
            <li>Design analytics-driven procurement intelligence and scrap pricing models to inform sourcing strategy.</li>
          </ul>

          <h3 className="mt-3 font-medium">Value delivered</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Delivered real-time scrap-cost dashboards and location-aware sourcing guidance that reduced procurement cost volatility.</li>
            <li>Introduced AI-based scrap grading to improve supplier fairness and reduce disputes, improving procurement cycle times.</li>
            <li>Enabled enterprise reporting that shortened executive decision cycles and supported corporate transformation.</li>
          </ul>
        </article>

        {/* Tata Steel */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Senior Manager — Virtual Engineering & Business Process, Tata Steel (May 2015 – Dec 2018)</h2>
          <p className="mt-2">
            Led digital engineering, drone & photogrammetry programs and CAD/BIM automation at one of India’s largest steel producers, focusing on brownfield expansion, maintenance, and operational readiness.
          </p>

          <h3 className="mt-3 font-medium">Responsibilities</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Piloted drone-based 3D modelling, photogrammetry and LiDAR workflows for large brownfield sites to accelerate design and reduce site visits.</li>
            <li>Integrated GIS, BIM, and digital twin workflows with engineering and maintenance processes for improved asset visibility and planning.</li>
            <li>Developed CAD automation (AutoLISP) to reduce manual drafting and speed engineering cycles.</li>
            <li>Partnered with vendors and operations to operationalise Industry 4.0 pilots into repeatable engineering practices.</li>
          </ul>

          <h3 className="mt-3 font-medium">Value delivered</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Pioneered Tata Steel’s first drone-based 3D modelling capability — reducing engineering rework and planning cycles by approximately 20%.</li>
            <li>Introduced LiDAR and BIM workflows that improved design accuracy and coordination across disciplines, lowering rework and enabling better CAPEX planning.</li>
            <li>Delivered CAD automation that improved drafting throughput and reduced manual errors in engineering deliverables.</li>
          </ul>
        </article>

        {/* M. N. Dastur */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Technology Lead — Engineering Systems, M. N. Dastur & Co. (Apr 2005 – Apr 2015)</h2>
          <p className="mt-2">
            Built standard 3D BIM workflows, enterprise CAD/GIS deployments, and automation that accelerated engineering delivery across multi-discipline projects.
          </p>

          <h3 className="mt-3 font-medium">Responsibilities</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Standardize BIM and CAD processes, integrate document management with engineering tools and reduce handoff friction.</li>
            <li>Design and deliver company-wide training and governance for digital engineering standards.</li>
            <li>Lead automation efforts (scripted CAD tools) to reduce repeatable manual work across projects.</li>
          </ul>

          <h3 className="mt-3 font-medium">Value delivered</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Reduced engineering delivery cycles by ~30% via design automation and standardized 3D workflows.</li>
            <li>Rolled out an in-house CAD Management System to integrate legacy workflows into automated pipelines across the firm.</li>
          </ul>
        </article>

        {/* Cadworld */}
        <article>
          <h2 className="text-xl font-semibold text-accent">R&D Assistant — CAD/GIS Automation, Cadworld Infosystems (Apr 2000 – Mar 2005)</h2>
          <p className="mt-2">
            Led photogrammetry production and automation projects; responsible for flight planning, aero-triangulation, orthophoto generation and 3D modelling for global mapping clients.
          </p>

          <h3 className="mt-3 font-medium">Responsibilities & outcomes</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Led a 30-member photogrammetry team and delivered 3D mapping services used in international projects, including contributions to Google 3D Maps.</li>
            <li>Owned end-to-end geospatial production chain — flight path design, aero-triangulation and vector capture — and improved throughput and QA.</li>
          </ul>
        </article>

        {/* RITES & L&T (early roles) */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Early Roles — RITES Ltd. (1998–2000) & Larsen &amp; Toubro ECC (1997–1998)</h2>
          <p className="mt-2">
            Early-career engineering and automation work across EPC and infrastructure projects; delivered automation for surveying, plotting and feature extraction, and supported greenfield refinery execution.
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Automated irrigation gate control and survey plotting; reduced manual reporting time by ~50% at RITES.</li>
            <li>Supported EPC layout accuracy and concrete structure alignment at L&T — contributing to early greenfield refinery delivery.</li>
          </ul>
        </article>

        {/* Photogrammetry / Canada highlight */}
        <article>
          <h2 className="text-xl font-semibold text-accent">Photogrammetry — OSIG / Google (Canada) — Select Project</h2>
          <p className="mt-2">
            Led a world-first photogrammetry program in partnership with OSIG to deliver high-fidelity 3D mapping datasets for a global client. The project formalised quality controls, processing pipelines and dataset handoff standards used in future mapping programs.
          </p>
        </article>

        {/* Closing CTA */}
        <div className="mt-6 rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
          <h3 className="text-lg font-semibold">Want the full CV or project references?</h3>
          <p className="text-sm text-slate-300 mt-2">
            The detailed CV contains project artifacts, publication references, and contactable client references. <Link href="/contact" className="underline hover:text-accent">Contact me</Link> or download the full PDF above.
          </p>
        </div>
      </section>
    </div>
  );
}
