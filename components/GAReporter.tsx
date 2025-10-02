// components/GAReporter.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function sendPageview(url: string) {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return;
  const gtag = (window as any).gtag;
  if (!gtag) return;

  gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
    send_to: id,
  });
}

export default function GAReporter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // initial load
  useEffect(() => {
    const url =
      pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    sendPageview(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // on route changes
  useEffect(() => {
    const url =
      pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    sendPageview(url);
  }, [pathname, searchParams]);

  return null;
}
