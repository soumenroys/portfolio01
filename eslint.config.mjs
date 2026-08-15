// eslint.config.mjs — ESLint 9 flat config.
//
// Replaces .eslintrc.json. Next 16 removed the `next lint` command, and
// eslint-config-next@16 requires eslint >= 9, which only reads flat config —
// so this migration came as a package with the Next 16 upgrade rather than
// as an optional cleanup.
//
// Rule parity with the previous .eslintrc.json is deliberate. Adding
// `next/typescript` surfaces 20 pre-existing `no-explicit-any` errors — all
// genuine, none related to this upgrade. Landing them together would make a
// breaking framework upgrade unbisectable, so they are a separate follow-up.
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      "public/**",
    ],
  },
  ...(Array.isArray(next) ? next : [next]),
  ...(Array.isArray(nextCoreWebVitals) ? nextCoreWebVitals : [nextCoreWebVitals]),
];
