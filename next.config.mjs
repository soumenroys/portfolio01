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
  // Strong cache headers for static assets
  async headers() {
    return [
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
