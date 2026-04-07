import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | Soumen Roy",
  description:
    "Author of Mastering 3D Plant Engineering, Digitalisation & Automation — a practical field guide blending plant engineering fundamentals with modern digital workflows, BIM, LiDAR, and Industry 4.0.",
  alternates: { canonical: "/publications" },
  openGraph: {
    title: "Publications | Soumen Roy",
    description:
      "Mastering 3D Plant Engineering: a hands-on guide for plant engineers and digital leaders on photogrammetry, BIM, CAD automation, and digital twin integration.",
    url: "https://soumenroy.com/publications",
    images: [{ url: "/og?title=Publications&sub=Mastering+3D+Plant+Engineering%2C+Digitalisation+%26+Automation", width: 1200, height: 630 }],
  },
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
