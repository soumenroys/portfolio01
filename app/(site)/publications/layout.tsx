import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { canonical, site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Publications | Soumen Roy",
  description:
    "Author of Mastering 3D Plant Engineering, Digitalisation & Automation — a practical field guide blending plant engineering fundamentals with modern digital workflows, BIM, LiDAR, and Industry 4.0.",
  alternates: { canonical: "/publications" },
  openGraph: {
    title: "Publications | Soumen Roy",
    description:
      "Mastering 3D Plant Engineering: a hands-on guide for plant engineers and digital leaders on photogrammetry, BIM, CAD automation, and digital twin integration.",
    url: canonical("/publications"),
    images: [{ url: "/og?title=Publications&sub=Mastering+3D+Plant+Engineering%2C+Digitalisation+%26+Automation", width: 1200, height: 630 }],
  },
};

// Book structured data. Authorship is one of the strongest entity signals both
// Google and LLM retrievers use to connect a person to a subject area, and the
// site was publishing none of it despite the book being a headline credential.
const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Mastering 3D Plant Engineering, Digitalisation & Automation",
  "author": {
    "@type": "Person",
    "name": "Soumen Roy",
    "url": site.url,
  },
  "url": canonical("/publications"),
  "image": `${site.url}/images/publications/mastering-3d-plant-engineering-cover.png`,
  "inLanguage": "en",
  "bookFormat": "https://schema.org/Paperback",
  "description":
    "A practical field guide for plant engineers and digital leaders, covering photogrammetry, BIM, LiDAR, CAD automation, digital twin integration and Industry 4.0 in real plant environments.",
  "about": [
    "3D Plant Engineering",
    "Building Information Modelling",
    "Photogrammetry",
    "LiDAR",
    "CAD Automation",
    "Digital Twins",
    "Industry 4.0",
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://www.amazon.com/dp/B0F7M239VJ",
    "availability": "https://schema.org/InStock",
  },
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Publications", href: "/publications" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      {children}
    </>
  );
}
