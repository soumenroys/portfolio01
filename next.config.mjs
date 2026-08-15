/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  // Gzip/Brotli compression for all responses
  compress: true,
  // Serve modern image formats (AVIF first, WebP fallback)
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 60 days on CDN
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },
  // Don't advertise the framework version to scanners.
  poweredByHeader: false,
  // Strong cache headers for static assets
  async headers() {
    return [
      {
        // Baseline security headers on every response. Deliberately conservative:
        // no full CSP yet, because the inline GA snippet and JSON-LD blocks would
        // need nonces threaded through the layout first. These three carry no such
        // risk and close the obvious gaps.
        source: "/:path*",
        headers: [
          // Blocks clickjacking. frame-ancestors supersedes X-Frame-Options in
          // modern browsers; both are sent for older ones.
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Frame-Options", value: "DENY" },
          // Stops MIME sniffing turning an upload or asset into executable script.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Send the full URL same-origin, only the origin cross-origin, and
          // nothing when downgrading to http.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // We use no camera/mic/geolocation; deny by default.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          // HSTS. Vercel already serves HTTPS only; this makes browsers enforce it.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/og",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
