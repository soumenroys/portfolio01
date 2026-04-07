import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Soumen Roy",
  description:
    "28+ years of technology leadership across AI, SaaS, Industry 4.0, and enterprise digital transformation — spanning OpenLM, GRP, Tata Steel, and M. N. Dastur.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Soumen Roy",
    description:
      "Career timeline: from digital engineering in heavy industry to leading product and engineering tribes in global SaaS — with measurable outcomes at every stage.",
    url: "https://soumenroy.com/experience",
    images: [{ url: "/og?title=Experience&sub=28%2B+years+across+SaaS%2C+Industry+4.0+%26+Enterprise+Transformation", width: 1200, height: 630 }],
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
