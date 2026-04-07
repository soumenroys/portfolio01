// components/BreadcrumbJsonLd.tsx
// Server component — renders BreadcrumbList JSON-LD inline for Google rich results.
// Usage: <BreadcrumbJsonLd items={[{ name: "Experience", href: "/experience" }]} />

const SITE_URL = "https://soumenroy.com";

type Crumb = { name: string; href: string };

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const allCrumbs = [{ name: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allCrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
