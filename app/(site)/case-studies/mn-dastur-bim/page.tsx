// /app/(site)/case-studies/mn-dastur-bim/page.tsx
import Link from "next/link";
import LightboxGallery from "@/components/LightboxGallery";

export const metadata = {
  title: "M. N. Dastur — BIM Transformation at Scale",
  description:
    "Converted 50+ years of classical engineering to BIM-based virtual engineering across 32 disciplines; overcame resistance and delivered collaborative 3D and waste reduction.",
};

export default function MNDasturBIM() {
  // Use the SAME filenames you already placed in /public/images/
  const images = [
    "/images/bim-collaboration.jpg",
    "/images/3d-model-review.jpg",
    "/images/cde-dashboard.jpg",
  ];

  const captions = [
    "BIM collaboration across 32 engineering disciplines",
    "Multi-discipline 3D model review & clash-resolution",
    "Common Data Environment (CDE) — governed model lifecycle",
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Top back link */}
      <Link
        href="/case-studies"
        className="text-sm underline hover:text-accent mb-6 inline-block"
      >
        ← Back to Case Studies
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-accent">
        M. N. Dastur — BIM Transformation at Scale
      </h1>

      <p className="mt-4 text-slate-300">
        Led a multi-year change program to convert{" "}
        <span className="font-semibold">50+ years of classical, 2D-centric
        engineering</span> into <span className="font-semibold">BIM-based virtual engineering</span>, rolled out across
        <span className="font-semibold"> 32 engineering disciplines</span>. Despite strong resistance from senior,
        experienced engineers, we institutionalized collaborative 3D ways of working, reduced waste, and made
        clash-free design the default.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Context & Challenge
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-2">
            <li>Legacy processes optimized for 2D drawings, sequential hand-offs, and late discovery of issues.</li>
            <li>High change-order rates and rework during construction due to coordination gaps.</li>
            <li>Strong cultural resistance from senior engineers comfortable with historical methods and tools.</li>
            <li>Fragmented toolchain and data silos; lack of governance for model lifecycle and ownership.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Key Contributions
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-2">
            <li><span className="font-semibold">BIM Playbook & Standards:</span> LOD/LOI, naming, modeling conventions, QA gates, audit checklists.</li>
            <li><span className="font-semibold">Common Data Environment (CDE):</span> Governed model/file lifecycle, versioning, approvals, and traceability.</li>
            <li><span className="font-semibold">Discipline Templates & Libraries:</span> Standard families and reusable components to accelerate multi-discipline delivery.</li>
            <li><span className="font-semibold">Model Coordination:</span> Weekly clash detection, issue tracking, and closure SLAs; 3D review rituals.</li>
            <li><span className="font-semibold">Change Management:</span> Champions network, role-based training, and “model is the contract” governance.</li>
            <li><span className="font-semibold">Toolchain & Interoperability:</span> IFC/Navisworks workflows and CAD–BIM bridges; tuned LOD by project stage.</li>
            <li><span className="font-semibold">Value Tracking & Governance:</span> KPIs (clash counts, rework %, turnaround time) with executive cadence reviews.</li>
            <li><span className="font-semibold">Scaled Rollout:</span> Pilots → templates → production adoption across <span className="font-semibold">32 disciplines</span>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Challenges & How We Overcame Them
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-2">
            <li><span className="font-semibold">Cultural resistance:</span> Paired skeptics with champions, side-by-side mentoring, published productivity baselines; recognized early adopters to drive peer influence.</li>
            <li><span className="font-semibold">Time pressure on live projects:</span> Phased adoption (pilot packages first), clear cut-off dates for 2D handover; protected critical path with gated readiness checks.</li>
            <li><span className="font-semibold">Data quality & ownership:</span> Model QA gates, RACI for ownership, automated validation scripts, and “no QA, no issue closure” policy.</li>
            <li><span className="font-semibold">Performance constraints:</span> Standardized workstations, federated models, and level-of-detail tuning to keep sessions performant.</li>
            <li><span className="font-semibold">Partner alignment:</span> Contractualized 3D reviews, shared viewer exports, and clash-free acceptance criteria with EPCs/contractors.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            BIM Advantages Implemented (at the time)
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-2">
            <li><span className="font-semibold">Single Source of Truth:</span> Centralized models/data with controlled access & history.</li>
            <li><span className="font-semibold">3D Coordination & Clash Detection:</span> Early detection of structural/MEP/process interferences.</li>
            <li><span className="font-semibold">Constructability Reviews:</span> Access, sequencing, maintainability validated pre-IFC.</li>
            <li><span className="font-semibold">Quantity Take-off (QTO):</span> Model-driven quantities for bids and change-impact analysis.</li>
            <li><span className="font-semibold">4D Scheduling:</span> Plan vs. actual visualization and site readiness.</li>
            <li><span className="font-semibold">5D Costing:</span> Budget visibility tied to scope; earlier surfacing of cost risk.</li>
            <li><span className="font-semibold">Libraries & Reuse:</span> Standard families/templates accelerated repeatable design.</li>
            <li><span className="font-semibold">Digital Deliverables:</span> Model-based handover packages enabling operations readiness.</li>
            <li><span className="font-semibold">Stakeholder Communication:</span> 3D/VR walk-throughs for non-CAD stakeholders and management.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-accent">
            Business Value Realized
          </h2>
          <ul className="mt-2 list-disc list-inside text-slate-300 space-y-2">
            <li><span className="font-semibold">Rework reduction:</span> Fewer field clashes/change orders; earlier risk surfacing.</li>
            <li><span className="font-semibold">Schedule adherence:</span> Improved construction readiness via 4D look-aheads and gated reviews.</li>
            <li><span className="font-semibold">Cost control:</span> Tighter bids and fewer surprises via QTO/5D and governed changes.</li>
            <li><span className="font-semibold">Waste reduction:</span> Material savings and lower site disruption through clash-free, constructible designs.</li>
            <li><span className="font-semibold">Faster decisions:</span> Multi-discipline 3D reviews shortened turnaround for design queries.</li>
            <li><span className="font-semibold">Scalable collaboration:</span> <span className="font-semibold">32 disciplines</span> coordinated in a shared model space.</li>
            <li><span className="font-semibold">Talent modernization:</span> Upskilled workforce, improved hiring brand, standardized best practices.</li>
          </ul>
        </section>
      </div>

      {/* Selected Visuals */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-accent">Selected Visuals</h2>
        <p className="mt-2 text-sm text-slate-300">Click any image to enlarge.</p>
        <LightboxGallery images={images} captions={captions} />
      </section>

      {/* Bottom CTAs – unified with other case study pages */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-medium text-black hover:bg-accent/90 transition"
        >
          Explore how BIM modernization can improve project performance →
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg border border-accent px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-black transition"
        >
          Book a 20-min Intro
        </Link>
      </div>
    </div>
  );
}
