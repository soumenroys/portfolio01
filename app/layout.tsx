import type { Metadata } from "next";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NAME, ROLE, TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${NAME} — ${ROLE}`,
  description: `${NAME} | ${ROLE} | ${TAGLINE}`,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: `${NAME} — ${ROLE}`,
    description: `${TAGLINE}`,
    type: "website",
    url: "https://soumenroy.com",
    images: ["/og.jpg"]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
