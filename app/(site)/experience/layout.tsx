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
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
