// app/og/route.tsx
// Dynamic OG image generator — 1200×630 — used by all portfolio pages.
// Usage: /og?title=Page+Title&sub=Optional+subtitle
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const SITE_URL = "https://soumenroy.com";
const ACCENT   = "#6366f1"; // indigo-500
const BG       = "#0b0f1a";
const SURFACE  = "rgba(255,255,255,0.04)";
const BORDER   = "rgba(255,255,255,0.10)";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const title    = searchParams.get("title") ?? "Soumen Roy";
  const sub      = searchParams.get("sub")   ?? "AI, SaaS & Enterprise Transformation Leader";
  const avatarSrc = `${SITE_URL}/images/avatar.jpg`;

  // Fetch avatar so ImageResponse can embed it
  const avatarData = await fetch(avatarSrc).then((r) => r.arrayBuffer());
  const avatarBase64 = `data:image/jpeg;base64,${Buffer.from(avatarData).toString("base64")}`;

  const titleSize = title.length > 50 ? 38 : title.length > 30 ? 44 : 50;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: BG,
          position: "relative",
          overflow: "hidden",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 5,
            background: `linear-gradient(90deg, ${ACCENT} 0%, #818cf8 60%, transparent 100%)`,
            display: "flex",
          }}
        />

        {/* Subtle radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120, right: -120,
            width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content row */}
        <div style={{ display: "flex", flex: 1, alignItems: "center", padding: "60px 72px" }}>

          {/* Left: avatar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginRight: 60,
            }}
          >
            {/* Ring */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${ACCENT}60, #818cf840)`,
                padding: 4,
              }}
            >
              <img
                src={avatarBase64}
                width={212}
                height={212}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  border: `3px solid ${BG}`,
                }}
              />
            </div>
          </div>

          {/* Right: text */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>

            {/* Site label */}
            <div
              style={{
                display: "flex",
                color: ACCENT,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              soumenroy.com
            </div>

            {/* Page title */}
            <div
              style={{
                display: "flex",
                color: "#f1f5f9",
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                display: "flex",
                color: "#94a3b8",
                fontSize: 21,
                lineHeight: 1.5,
                marginBottom: 36,
              }}
            >
              {sub}
            </div>

            {/* Stat pills */}
            <div style={{ display: "flex", gap: 12 }}>
              {["28+ Years", "$50M+ ROI", "10+ Transformations"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    background: "rgba(99,102,241,0.12)",
                    border: `1px solid rgba(99,102,241,0.28)`,
                    borderRadius: 8,
                    padding: "6px 16px",
                    color: "#a5b4fc",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 72px 32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 6, height: 6, borderRadius: "50%",
                background: ACCENT, display: "flex",
              }}
            />
            <div style={{ color: "#475569", fontSize: 14, display: "flex" }}>
              AI · SaaS · Industry 4.0 · Enterprise Transformation
            </div>
          </div>
          <div style={{ color: "#334155", fontSize: 13, display: "flex" }}>
            Kolkata, India
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
