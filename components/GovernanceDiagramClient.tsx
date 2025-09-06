"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BoxId = "catalog" | "owners" | "contracts" | "qa" | "kpi";

const DESCS: Record<BoxId, string> = {
  catalog: "Data Catalog — central metadata, lineage and classification. Enables discovery and ties datasets to owners and KPIs.",
  owners: "Dataset Owners — named accountability for freshness, quality and SLA. They own the remediation & stakeholder notifications.",
  contracts: "Data Contracts — schema, SLA and test requirements that producers must meet to protect downstream consumers.",
  qa: "QA / CI — automated checks, monitoring and alerting (unit tests, integration tests, freshness checks).",
  kpi: "KPI Registry & Policy — formal change-control and KPI signing process to prevent ad-hoc metric drift at executive level.",
};

export default function GovernanceDiagramClient() {
  const [hover, setHover] = useState<BoxId | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setExpanded(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const fillFor = (id: BoxId) => (hover === null ? 1 : hover === id ? 1 : 0.24);
  const open = () => setExpanded(true);
  const close = () => setExpanded(false);

  return (
    <div>
      <figure className="w-full max-w-3xl mx-auto my-6 relative">
        <motion.svg
          viewBox="0 0 900 260"
          width="100%"
          height="260"
          role="img"
          aria-labelledby="govTitle"
          className="cursor-pointer"
          onClick={open}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <title id="govTitle">Interactive governance diagram</title>
          <rect x="0" y="0" width="900" height="260" fill="transparent" rx="6" />

          {/* Catalog */}
          <motion.g
            onMouseEnter={() => setHover("catalog")}
            onMouseLeave={() => setHover(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "170px 76px" }}
          >
            <motion.rect x="60" y="36" rx="8" width="220" height="80" fill={`rgba(8,41,58,${fillFor("catalog")})`} stroke="#2b6b6b" />
            <text x="170" y="68" textAnchor="middle" fill="#cbd5e1" fontSize="13">
              Data Catalog
            </text>
            <text x="170" y="86" textAnchor="middle" fill="#94a3b8" fontSize="11">
              Metadata • Lineage • Tags
            </text>
          </motion.g>

          {/* Owners */}
          <motion.g
            onMouseEnter={() => setHover("owners")}
            onMouseLeave={() => setHover(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "170px 180px" }}
          >
            <motion.rect x="60" y="140" rx="8" width="220" height="80" fill={`rgba(11,36,48,${fillFor("owners")})`} stroke="#2b6b6b" />
            <text x="170" y="172" textAnchor="middle" fill="#cbd5e1" fontSize="13">
              Dataset Owners
            </text>
            <text x="170" y="190" textAnchor="middle" fill="#94a3b8" fontSize="11">
              Freshness & Quality
            </text>
          </motion.g>

          {/* Contracts */}
          <motion.g
            onMouseEnter={() => setHover("contracts")}
            onMouseLeave={() => setHover(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "430px 76px" }}
          >
            <motion.rect x="320" y="36" rx="8" width="220" height="80" fill={`rgba(5,43,43,${fillFor("contracts")})`} stroke="#2b6b6b" />
            <text x="430" y="68" textAnchor="middle" fill="#cbd5e1" fontSize="13">
              Data Contracts
            </text>
            <text x="430" y="86" textAnchor="middle" fill="#94a3b8" fontSize="11">
              Schema • SLA • Tests
            </text>
          </motion.g>

          {/* QA */}
          <motion.g
            onMouseEnter={() => setHover("qa")}
            onMouseLeave={() => setHover(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "430px 180px" }}
          >
            <motion.rect x="320" y="140" rx="8" width="220" height="80" fill={`rgba(7,17,51,${fillFor("qa")})`} stroke="#2b6b6b" />
            <text x="430" y="172" textAnchor="middle" fill="#cbd5e1" fontSize="13">
              QA / CI
            </text>
            <text x="430" y="190" textAnchor="middle" fill="#94a3b8" fontSize="11">
              Checks • Monitoring • Alerts
            </text>
          </motion.g>

          {/* KPI Registry */}
          <motion.g
            onMouseEnter={() => setHover("kpi")}
            onMouseLeave={() => setHover(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            style={{ transformOrigin: "690px 140px" }}
          >
            <motion.rect x="580" y="80" rx="8" width="220" height="120" fill={`rgba(8,26,43,${fillFor("kpi")})`} stroke="#2b6b6b" />
            <text x="690" y="120" textAnchor="middle" fill="#cbd5e1" fontSize="13">
              KPI Registry & Policy
            </text>
            <text x="690" y="140" textAnchor="middle" fill="#94a3b8" fontSize="11">
              Change Control • Owners
            </text>
          </motion.g>

          <defs>
            <marker id="smallArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="#94a3b8" />
            </marker>
          </defs>

          <line x1="280" y1="76" x2="320" y2="76" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#smallArrow)" />
          <line x1="280" y1="172" x2="320" y2="172" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#smallArrow)" />
          <line x1="540" y1="100" x2="580" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#smallArrow)" />
          <line x1="540" y1="172" x2="580" y2="150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#smallArrow)" />
        </motion.svg>

        <figcaption className="text-sm text-slate-400 mt-2 text-center">Click the diagram to expand. Hover blocks to highlight.</figcaption>

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
                <span className="text-slate-300">{DESCS[hover]}</span>
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
                Hover a block to see a short description. Click to expand the governance diagram.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </figure>

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
            <motion.div className="absolute inset-0 bg-black/60" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div
              className="relative z-10 w-full max-w-4xl bg-slate-900 rounded-lg border border-white/10 p-6"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-accent">Governance — Expanded</h3>
                <button onClick={close} className="text-sm px-3 py-2 rounded hover:bg-white/5">
                  Close
                </button>
              </div>

              <div className="mt-4">
                <motion.svg viewBox="0 0 1200 360" width="100%" height="320" role="img" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.18 }}>
                  <rect x="0" y="0" width="1200" height="360" fill="transparent" rx="6" />
                  <rect x="80" y="50" rx="10" width="300" height="110" fill={`rgba(8,41,58,${fillFor("catalog")})`} stroke="#2b6b6b" />
                  <text x="230" y="90" textAnchor="middle" fill="#cbd5e1" fontSize="16">
                    Data Catalog
                  </text>

                  <rect x="80" y="200" rx="10" width="300" height="110" fill={`rgba(11,36,48,${fillFor("owners")})`} stroke="#2b6b6b" />
                  <text x="230" y="240" textAnchor="middle" fill="#cbd5e1" fontSize="16">
                    Dataset Owners
                  </text>

                  <rect x="460" y="50" rx="10" width="300" height="110" fill={`rgba(5,43,43,${fillFor("contracts")})`} stroke="#2b6b6b" />
                  <text x="610" y="90" textAnchor="middle" fill="#cbd5e1" fontSize="16">
                    Data Contracts
                  </text>

                  <rect x="460" y="200" rx="10" width="300" height="110" fill={`rgba(7,17,51,${fillFor("qa")})`} stroke="#2b6b6b" />
                  <text x="610" y="240" textAnchor="middle" fill="#cbd5e1" fontSize="16">
                    QA / CI
                  </text>

                  <rect x="840" y="110" rx="10" width="300" height="140" fill={`rgba(8,26,43,${fillFor("kpi")})`} stroke="#2b6b6b" />
                  <text x="990" y="160" textAnchor="middle" fill="#cbd5e1" fontSize="16">
                    KPI Registry & Policy
                  </text>
                </motion.svg>

                <div className="mt-4">
                  {hover ? (
                    <div className="rounded-md border border-white/10 bg-slate-900 p-3 text-slate-200">
                      <strong className="text-accent mr-2">{hover.toUpperCase()}</strong>
                      <span className="text-slate-300">{DESCS[hover]}</span>
                    </div>
                  ) : (
                    <div className="rounded-md border border-white/6 bg-transparent p-2 text-sm text-slate-400">
                      Hover a block above to see details here.
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
