// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GAReporter from "@/components/GAReporter";
import { NAME, ROLE, TAGLINE } from "@/lib/constants";
import Script from "next/script";
import { site } from "@/lib/seo";

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
    "CTO",
    "CIO",
    "Engineering Leader",
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
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <GAReporter />
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

        {/* JSON-LD: Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": NAME,
              "url": site.url,
              "logo": "/favicon.ico",
              "sameAs": [
                "https://www.linkedin.com/in/soumenroy", // update with exact LinkedIn
                "https://github.com/your-handle",        // update with exact GitHub
                "https://www.goodreads.com/author/show/34690983-soumen-roy"
              ]
            }),
          }}
        />

        {/* JSON-LD: Person */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": NAME,
              "jobTitle": ROLE,
              "description": TAGLINE,
              "url": site.url,
              "worksFor": { "@type": "Organization", "name": "OpenLM" }, // adjust if needed
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "Kolkata"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
