// /app/page.tsx
import type { Metadata } from "next";
import { canonical, site } from "@/lib/seo";
import { NAME, ROLE, TAGLINE } from "@/lib/constants";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: `${NAME} — ${ROLE}`,
  description: TAGLINE,
  alternates: { canonical: canonical("/") },
  openGraph: {
    url: canonical("/"),
    title: `${NAME} — ${ROLE}`,
    description: TAGLINE,
    images: [{ url: site.ogDefault, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description: TAGLINE,
    images: [site.ogDefault],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
