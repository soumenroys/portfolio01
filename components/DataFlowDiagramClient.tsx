"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NodeId = "edge" | "ingest" | "lakehouse" | "serving" | "dashboards";

const DESCRIPTIONS: Record<NodeId, string> = {
  edge:
    "Edge / PLCs — sensors and OT adapters capture time-series and event data at source. Typical concerns: connectivity, mapping PLC tags, sample rates.",
  ingest:
    "Ingestion — streaming (Kafka) or batch ingestion, buffering & schema extraction. Responsible for validation, deduplication and landing raw events.",
  lakehouse:
    "Lakehouse — governed storage (Iceberg/Parquet) with catalog, ACID semantics and time-travel. Provides curated datasets and lineage for analysts.",
  serving:
    "Serving / APIs — materialized views, serving tables and semantic APIs that deliver low-latency results to BI and apps.",
  dashboards:
    "Dashboards — BI/Executive views that consume serving APIs or semantic layers; focus on trusted KPIs and performant UX.",
};

export default function DataFlowDiagramClient() {
  const [hover, setHover] = useState<NodeId | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setExpanded(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const highlight = (node: NodeId | null) => setHover(node);
  const open = () => setExpanded(true);
  const close = () => setExpanded(false);
  const fillFor = (id: NodeId) => (hover === null ? 1 : hover === id ? 1 : 0.22);

  return (
    <div>
      <figure className="w-full max-w-3xl mx-auto my-6 relative">
        <motion.svg
          viewBox="0 0 900 220"
          width="100%"
          height="220"
          role="img"
          aria-labelledby="dataflowTitle"
          className="cursor-pointer"
          onClick={open}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <title id="dataflowTitle">Interactive data flow: Edge to Dashboard</title>

          <rect x="0" y="0" width="900" height="220" fill="transparent" rx="8" />

          {/* Edge */}
          <motion.g
            onMouseEnter={() => highlight("edge")}
            onMouseLeave={() => highlight(null)}
            aria-hidden
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "100px 100px" }}
          >
            <motion.rect
              x="30"
              y="70"
              rx="10"
              ry="10"
              width="140"
              height="60"
              fill={`rgba(15,23,36,${fillFor("edge")})`}
              stroke="#334155"
              className="transition-opacity"
            />
            <text x="100" y="100" textAnchor="middle" fill="#cbd5e1" fontSize="12">
              Edge / PLCs
            </text>
            <text x="100" y="116" textAnchor="middle" fill="#94a3b8" fontSize="10">
              Sensors, OT
            </text>
          </motion.g>

          {/* Ingest */}
          <motion.g
            onMouseEnter={() => highlight("ingest")}
            onMouseLeave={() => highlight(null)}
            aria-hidden
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "285px 100px" }}
          >
            <motion.rect
              x="200"
              y="40"
              rx="10"
              ry="10"
              width="170"
              height="120"
              fill={`rgba(7,17,51,${fillFor("ingest")})`}
              stroke="#334155"
              className="transition-opacity"
            />
            <text x="285" y="80" textAnchor="middle" fill="#cbd5e1" fontSize="12">
              Ingestion
            </text>
            <text x="285" y="98" textAnchor="middle" fill="#94a3b8" fontSize="10">
              Stream (Kafka) / Batch
            </text>
          </motion.g>

          {/* Lakehouse */}
          <motion.g
            onMouseEnter={() => highlight("lakehouse")}
            onMouseLeave={() => highlight(null)}
            aria-hidden
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "490px 100px" }}
          >
            <motion.rect
              x="400"
              y="50"
              rx="10"
              ry="10"
              width="180"
              height="100"
              fill={`rgba(5,47,47,${fillFor("lakehouse")})`}
              stroke="#334155"
              className="transition-opacity"
            />
            <text x="490" y="88" textAnchor="middle" fill="#cbd5e1" fontSize="12">
              Lakehouse
            </text>
            <text x="490" y="106" textAnchor="middle" fill="#94a3b8" fontSize="10">
              Iceberg / Parquet · Catalog
            </text>
          </motion.g>

          {/* Serving/API */}
          <motion.g
            onMouseEnter={() => highlight("serving")}
            onMouseLeave={() => highlight(null)}
            aria-hidden
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "680px 100px" }}
          >
            <motion.rect
              x="620"
              y="40"
              rx="10"
              ry="10"
              width="120"
              height="120"
              fill={`rgba(16,24,39,${fillFor("serving")})`}
              stroke="#334155"
              className="transition-opacity"
            />
            <text x="680" y="88" textAnchor="middle" fill="#cbd5e1" fontSize="12">
              Serving / APIs
            </text>
            <text x="680" y="106" textAnchor="middle" fill="#94a3b8" fontSize="10">
              Materialized views / APIs
            </text>
          </motion.g>

          {/* Dashboards */}
          <motion.g
            onMouseEnter={() => highlight("dashboards")}
            onMouseLeave={() => highlight(null)}
            aria-hidden
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "820px 100px" }}
          >
            <motion.rect
              x="770"
              y="70"
              rx="10"
              ry="10"
              width="100"
              height="60"
              fill={`rgba(15,23,36,${fillFor("dashboards")})`}
              stroke="#334155"
              className="transition-opacity"
            />
            <text x="820" y="100" textAnchor="middle" fill="#cbd5e1" fontSize="12">
              Dashboards
            </text>
            <text x="820" y="116" textAnchor="middle" fill="#94a3b8" fontSize="10">
              BI / Executive
            </text>
          </motion.g>

          {/* Arrows */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
            </marker>
          </defs>

          <line x1="170" y1="100" x2="200" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="370" y1="100" x2="400" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="580" y1="100" x2="620" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="740" y1="100" x2="770" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
        </motion.svg>

        <figcaption className="text-sm text-slate-400 mt-2 text-center">
          Click the diagram to expand. Hover a block to highlight it.
        </figcaption>

        <div className="mt-3 mx-auto max-w-3xl text-sm">
          <AnimatePresence>
            {hover ? (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.16 }}
                className="rounded-md border border-white/10 bg-slate-900 p-3 text-slate-200"
              >
                <strong className="text-accent mr-2">{hover.toUpperCase()}</strong>
                <span className="text-slate-300">{DESCRIPTIONS[hover]}</span>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.16 }}
                className="rounded-md border border-white/6 bg-transparent p-2 text-sm text-slate-400 text-center"
              >
                Hover a block to see details. Click the diagram to open an expanded view.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </figure>

      {/* Modal expanded view */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 w-full max-w-4xl bg-slate-900 rounded-lg border border-white/10 p-6"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-accent">Data Flow — Expanded</h3>
                <button onClick={close} className="text-sm px-3 py-2 rounded hover:bg-white/5" aria-label="Close diagram">
                  Close
                </button>
              </div>

              <div className="mt-4">
                <motion.svg viewBox="0 0 1200 320" width="100%" height="320" role="img" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                  <rect x="0" y="0" width="1200" height="320" fill="transparent" rx="8" />

                  {/* Edge */}
                  <g>
                    <rect x="40" y="100" rx="10" ry="10" width="200" height="80" fill={`rgba(15,23,36,${fillFor("edge")})`} stroke="#334155" />
                    <text x="140" y="135" textAnchor="middle" fill="#cbd5e1" fontSize="14">
                      Edge / PLCs
                    </text>
                  </g>

                  {/* Ingest */}
                  <g>
                    <rect x="300" y="70" rx="10" ry="10" width="250" height="160" fill={`rgba(7,17,51,${fillFor("ingest")})`} stroke="#334155" />
                    <text x="425" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="14">
                      Ingestion
                    </text>
                  </g>

                  {/* Lakehouse */}
                  <g>
                    <rect x="620" y="80" rx="10" ry="10" width="260" height="140" fill={`rgba(5,47,47,${fillFor("lakehouse")})`} stroke="#334155" />
                    <text x="750" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="14">
                      Lakehouse
                    </text>
                  </g>

                  {/* Serving */}
                  <g>
                    <rect x="940" y="70" rx="10" ry="10" width="160" height="160" fill={`rgba(16,24,39,${fillFor("serving")})`} stroke="#334155" />
                    <text x="1020" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="14">
                      Serving / APIs
                    </text>
                  </g>

                  <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                      <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
                    </marker>
                  </defs>
                  <line x1="240" y1="140" x2="300" y2="140" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrow2)" />
                  <line x1="550" y1="140" x2="620" y2="140" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrow2)" />
                  <line x1="880" y1="140" x2="940" y2="140" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrow2)" />
                </motion.svg>

                <div className="mt-4 text-sm text-slate-300">
                  <p>
                    <strong>Tip:</strong> Hover blocks in the diagram to focus a layer. Click outside the popup or press Escape to close.
                  </p>
                  {hover && (
                    <div className="mt-3 rounded-md border border-white/10 bg-slate-900 p-3 text-slate-200">
                      <strong className="text-accent mr-2">{hover.toUpperCase()}</strong>
                      <span className="text-slate-300">{DESCRIPTIONS[hover]}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
