// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GAReporter from "@/components/GAReporter";
import { Suspense } from "react";
import { NAME, ROLE, TAGLINE } from "@/lib/constants";
import Script from "next/script";
import { site } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const OG_IMAGE = "/og?title=Soumen+Roy&sub=AI%2C+SaaS+%26+Enterprise+Transformation+Leader";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${NAME} — ${ROLE}`,
    template: `%s | ${NAME}`,
  },
  description: `${NAME} | ${ROLE} | ${TAGLINE}`,
  keywords: [
    NAME,
    "Technology Leader",
    "Engineering Leader",
    "AI Leader",
    "SaaS Leader",
    "Digital Transformation",
    "3D Plant Engineering",
    "Industry 4.0",
    "Industry 5.0",
    "Manufacturing Analytics",
    "BIM",
    "OpenLM",
    "Kolkata",
  ],
  authors: [{ name: NAME, url: site.url }],
  creator: NAME,
  publisher: NAME,
  alternates: {
    canonical: "/", // route-level files can override this
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: NAME,
    title: `${NAME} — ${ROLE}`,
    description: TAGLINE,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${NAME} — ${ROLE}`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description: TAGLINE,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",

  // ✅ Manifest + icon references
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }, // fallback for older browsers
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  verification: {
    // Google Search Console
    google: "tuF_OrC42pJKVvXlFyzHEg3DH_9h6HWRqHhVaYBjQTw",
    // Add yandex / yahoo / "msvalidate.01" (Bing) here once those tokens exist.
    // Never ship placeholder values — they render as real meta tags on every page.
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f1a",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning className="font-sans">
        <Navbar />
        {/* Wrap hooks like useSearchParams/usePathname in Suspense */}
        <Suspense fallback={null}>
          <GAReporter />
        </Suspense>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />

        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = window.gtag || function(){dataLayer.push(arguments)};
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}

        {/* JSON-LD: WebSite — must be SSR inline, not afterInteractive */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": NAME,
              "url": site.url,
              "description": TAGLINE,
              "inLanguage": "en-US"
              // No SearchAction: this site has no search endpoint. Declaring one
              // for /case-studies?q= advertised a capability that does not exist,
              // and the URL simply renders the unfiltered hub.
            }),
          }}
        />

        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": NAME,
              "jobTitle": ROLE,
              "description": TAGLINE,
              "url": site.url,
              "image": `${site.url}/images/avatar.jpg`,
              "email": "roysowmen@gmail.com",
              "worksFor": {
                "@type": "Organization",
                "name": "OpenLM",
                "url": "https://openlm.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "Kolkata"
              },
              "knowsAbout": [
                "AI Strategy", "SaaS", "Digital Transformation",
                "Industry 4.0", "Data Platforms", "Enterprise Architecture",
                "3D Plant Engineering", "BIM", "Photogrammetry", "LiDAR",
                "OT/IT Convergence", "Steel Manufacturing", "Mental Health Technology"
              ],
              // Ties the Person entity to the book. Without this the authorship
              // credential is prose only — invisible to anything reading structured data.
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Technology and Transformation Leadership"
              },
              "workExample": {
                "@type": "Book",
                "name": "Mastering 3D Plant Engineering, Digitalisation & Automation",
                "url": `${site.url}/publications`
              },
              "sameAs": [
                "https://www.linkedin.com/in/sowmenroy",
                "https://www.goodreads.com/author/show/34690983-soumen-roy",
                "https://3dplantengineering.com",
                "https://www.imotara.com"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
