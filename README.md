# Soumen Roy — Portfolio (Next.js + Tailwind)

A clean, recruiter‑friendly personal site using Next.js (App Router) and Tailwind CSS.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev

# 3) Build for production
npm run build && npm start
```

## Deploy to Vercel
1. Create a GitHub repo and push this folder.
2. In Vercel: **New Project → Import from GitHub** → select the repo → Deploy.
3. After deployment, add your custom domain in Vercel (e.g., `soumenroy.com`).

## Connect Domain
- In Vercel Project Settings → **Domains** → Add `soumenroy.com`.
- Vercel shows DNS records (A/CNAME). Copy them.
- Go to your domain registrar (Hostinger) → DNS → paste records and save.
- Wait for DNS to propagate (usually 5–30 min).

## Customize
- Update `lib/constants.ts` (name, email, LinkedIn, resume URL).
- Replace `/public/Soumen-Roy-CV.pdf` with your real CV (rename accordingly).
- Edit case studies at `app/(site)/case-studies/*` with real metrics.
- Add a high‑res `public/og.jpg` and a real `public/favicon.ico`.

## Notes
- TypeScript strict mode enabled.
- No external UI libs (kept lightweight). Add shadcn/ui if you wish.
- Lighthouse-friendly, SEO tags in `app/layout.tsx` metadata.
