import Image from "next/image";

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl space-y-12">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Tata Steel — Digital Engineering & Industry 4.0
        </h1>
        <p className="text-slate-300 leading-7">
          At Tata Steel, I led the digital transformation of engineering and inspection workflows —
          applying drones, 3D modeling, BIM, GIS, and LiDAR to modernize operations, reduce downtime,
          and establish Industry 4.0 practices across plant and project engineering.
        </p>
      </header>

      {/* Contributions */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6">
        <h2 className="text-2xl font-semibold">My Contributions</h2>
        <ul className="list-disc space-y-3 pl-6 text-slate-200 leading-7">
          <li>
            <strong>Drone-based Inspection:</strong> Introduced UAVs for plant & site inspection,
            cutting inspection time from weeks to days and improving worker safety.
          </li>
          <li>
            <strong>3D Modeling & BIM:</strong> Deployed Building Information Modeling (BIM) and
            3D digital twins to re-engineer design and construction workflows.
          </li>
          <li>
            <strong>GIS & LiDAR Integration:</strong> Implemented geospatial mapping and LiDAR
            scanning to digitize assets, pipelines, and layouts with centimeter-level accuracy.
          </li>
          <li>
            <strong>Industry 4.0 Process Upgrades:</strong> Automated legacy engineering flows,
            enabling predictive maintenance, digital workflows, and real-time decision-making.
          </li>
          <li>
            <strong>Engineering Automation:</strong> Built reusable automation templates for
            design, analysis, and reporting — accelerating project delivery and reducing rework.
          </li>
        </ul>
      </section>

      {/* Context & Mission */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Context">
          <p className="leading-7 text-slate-200">
            Traditional inspection and engineering methods were time-consuming, hazardous, and
            lacked integration. Manual processes slowed projects and limited visibility for leaders.
          </p>
        </Card>
        <Card title="Mission">
          <p className="leading-7 text-slate-200">
            Modernize engineering and asset workflows with drones, BIM, GIS, LiDAR, and Industry 4.0,
            ensuring safer, faster, and smarter decisions at enterprise scale.
          </p>
        </Card>
      </section>

      {/* Sample Visuals */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Digital Engineering in Action</h2>
        <p className="leading-7 text-slate-200">
          Integrating drones, 3D modeling, and LiDAR enabled digital twins and predictive
          maintenance workflows, giving Tata Steel a real-time lens into its assets.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/tata-steel-digital-engineering/drone-inspection.png"
            alt="Drone inspection"
            caption="Drone-based plant inspection reducing downtime and improving safety"
          />
          <Figure
            src="/images/case-studies/tata-steel-digital-engineering/bim-3d.png"
            alt="3D BIM model"
            caption="3D BIM model enabling digital workflows and clash detection"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="/images/case-studies/tata-steel-digital-engineering/lidar-gis.png"
            alt="LiDAR and GIS mapping"
            caption="LiDAR + GIS mapping for high-accuracy asset digitization"
          />
          <Figure
            src="/images/case-studies/tata-steel-digital-engineering/digital-twin.png"
            alt="Digital twin"
            caption="Digital twin supporting Industry 4.0 workflows and predictive insights"
          />
        </div>
      </section>

      {/* Results */}
      <section className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Results</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-200 leading-7">
          <li><strong>Inspection efficiency:</strong> Reduced inspection cycles from weeks to days with UAVs.</li>
          <li><strong>Safety:</strong> Lowered workforce exposure to hazardous environments.</li>
          <li><strong>Accuracy:</strong> Achieved centimeter-level asset mapping with LiDAR & GIS.</li>
          <li><strong>Speed:</strong> Faster project design cycles with reusable automation & 3D BIM workflows.</li>
          <li><strong>Transformation:</strong> Shifted Tata Steel’s engineering model towards Industry 4.0 standards.</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="mt-3 leading-7 text-slate-200">
          Drones (UAVs) • BIM Tools (Revit/Navisworks) • LiDAR • GIS • Python • CAD Automation •
          Cloud Storage • Digital Twin Platforms • Industry 4.0 Integrations
        </p>
      </section>

      {/* CTA */}
      <div className="pt-2">
        <a
          href="/contact"
          className="inline-flex items-center rounded-2xl bg-accent px-4 py-2 font-medium text-slate-900 hover:opacity-90"
        >
          Explore how digital engineering can transform your enterprise →
        </a>
      </div>
    </section>
  );
}

/* Helper Components */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-black/10 p-3">
      <Image src={src} alt={alt} width={600} height={400} className="rounded-xl" />
      <figcaption className="mt-2 text-xs text-slate-400">{caption}</figcaption>
    </figure>
  );
}
