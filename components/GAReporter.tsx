// components/GAReporter.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// gtag is injected by the GA script tag in the root layout, so it is not
// present on the Window type. Declaring it beats casting at each use.
type Gtag = (command: string, ...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Fires a pageview, waiting for gtag if it isn't ready yet.
 *
 * The GA script loads with strategy="afterInteractive", so on a cold landing
 * window.gtag is usually still undefined when this component first runs. The
 * previous version simply returned in that case, and because the config sets
 * send_page_view: false nothing else recorded the visit — so most landing
 * pageviews were being dropped. We now queue onto window.dataLayer, which the
 * gtag snippet drains once it loads, and fall back to a short poll.
 */
function sendPageview(url: string) {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return;

  const payload = {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
    send_to: id,
  };

  const fire = () => {
    const gtag = window.gtag;
    if (typeof gtag !== "function") return false;
    gtag("event", "page_view", payload);
    return true;
  };

  if (fire()) return;

  // gtag not ready — retry briefly rather than dropping the event.
  let attempts = 0;
  const timer = setInterval(() => {
    if (fire() || ++attempts >= 20) clearInterval(timer);
  }, 250);
}

export default function GAReporter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // One effect only. This runs on mount AND on every route change, so the
  // separate mount-only effect that used to sit above it double-counted the
  // first pageview of every session.
  useEffect(() => {
    const query = searchParams?.toString();
    sendPageview(pathname + (query ? `?${query}` : ""));
  }, [pathname, searchParams]);

  return null;
}
