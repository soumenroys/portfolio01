type Item = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

const items: Item[] = [
  {
    title: "Head of Data & Platforms",
    org: "OpenLM (India & Israel)",
    period: "2023 — Present",
    points: [
      "Led microservices-based reporting platform (Kafka, Spark, S3/MinIO, MongoDB, Postgres).",
      "Built multi-tenant analytics & BI dashboards (Power BI, QuickSight).",
      "Drove ROI-focused features & cross-functional squads (BI, Data Engg, Integrations).",
    ],
  },
  {
    title: "Digital Transformation Leader",
    org: "Gunung Raja Paksi (Indonesia)",
    period: "2019 — 2022",
    points: [
      "Analytics-driven procurement & cost prediction in heavy industry.",
      "Modernized engineering practices and integrated ERP & data pipelines.",
    ],
  },
  {
    title: "Technology & Engineering Leadership",
    org: "Tata Steel, M. N. Dastur & Co., others",
    period: "Earlier",
    points: [
      "Industry 4.0 initiatives, drone-based 3D modelling for maintenance.",
      "Scaled teams and delivered enterprise-grade platforms across domains.",
    ],
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-s border-white/10 ml-4 space-y-8 mt-8">
      {items.map((it, i) => (
        <li key={i} className="ms-4">
          <div className="absolute w-3 h-3 bg-accent rounded-full -start-1.5 mt-1.5"></div>
          <h3 className="text-lg font-semibold">{it.title} — <span className="text-slate-300">{it.org}</span></h3>
          <p className="text-sm text-slate-400">{it.period}</p>
          <ul className="list-disc ml-6 mt-2 text-slate-200 space-y-1">
            {it.points.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
