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

const SITE_URL = "https://soumenroy.com";
const OG_IMAGE = "/og/og-default.png"; // place a 1200×630 image at /public/og/og-default.png

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  alternates: {
    canonical: "/", // route-level files can override this
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
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
    // Yandex and Yahoo are optional
    yandex: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    yahoo: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    // Identity links (optional)
    me: ["https://github.com/your-handle"],
    // Bing Webmaster Tools uses the meta name "msvalidate.01"
    other: {
      "msvalidate.01": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
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
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${site.url}/case-studies?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
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
                "3D Plant Engineering", "BIM", "Mental Health Technology"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/sowmenroy",
                "https://www.goodreads.com/author/show/34690983-soumen-roy",
                "https://3dplantengineering.com",
                "https://imotara.app"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
