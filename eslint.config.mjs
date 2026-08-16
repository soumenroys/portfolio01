// eslint.config.mjs — ESLint 9 flat config.
//
// Replaces .eslintrc.json. Next 16 removed the `next lint` command, and
// eslint-config-next@16 requires eslint >= 9, which only reads flat config —
// so this migration came as a package with the Next 16 upgrade rather than
// as an optional cleanup.
//
// `next/typescript` is enabled. The old .eslintrc.json was bare
// `next/core-web-vitals` with no TypeScript rules at all, which is why ~20
// `any` annotations sat unflagged in the API routes and components.
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const config = [
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
  ...(Array.isArray(nextTypeScript) ? nextTypeScript : [nextTypeScript]),
];

export default config;
