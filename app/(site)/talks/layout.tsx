import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Talks & Presentations | Soumen Roy",
  description:
    "Conference talks, webinars, and presentations on AI strategy, Industry 4.0, digital transformation, and enterprise data platforms by Soumen Roy.",
  alternates: { canonical: "/talks" },
  openGraph: {
    title: "Talks & Presentations | Soumen Roy",
    description:
      "Keynotes and sessions on AI, SaaS, manufacturing digitalisation, and enterprise transformation — exploring the intersection of technology and real-world business impact.",
    url: "https://soumenroy.com/talks",
    images: [{ url: "/og?title=Talks+%26+Presentations&sub=AI+%C2%B7+Industry+4.0+%C2%B7+Enterprise+Transformation", width: 1200, height: 630 }],
  },
};

export default function TalksLayout({ children }: { children: React.ReactNode }) {
  return <><BreadcrumbJsonLd items={[{ name: "Talks & Presentations", href: "/talks" }]} />{children}</>;
}
