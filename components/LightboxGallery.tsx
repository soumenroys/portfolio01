// components/LightboxGallery.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  captions?: string[];
  thumbHeight?: number; // defaults to 160
  className?: string;
};

export default function LightboxGallery({
  images,
  captions = [],
  thumbHeight = 160,
  className = "",
}: Props) {
  const [index, setIndex] = useState<number | null>(null);

  // Keyboard controls for modal
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight")
        setIndex((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    // Prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, images.length]);

  return (
    <>
      {/* Thumbnails */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className="group relative block overflow-hidden rounded-lg border border-white/10 p-0 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={captions[i] ?? `Image ${i + 1}`}
          >
            <div
              style={{
                width: "100%",
                height: thumbHeight,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={captions[i] ?? `Image ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition group-hover:scale-[1.02]"
              />
            </div>
            {captions[i] && (
              <div className="p-3 text-sm text-slate-300">{captions[i]}</div>
            )}
          </button>
        ))}
      </div>

      {/* Modal */}
      {typeof index === "number" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIndex(null)}
              className="absolute top-3 right-3 z-50 rounded-full bg-black/60 px-3 py-1 text-white"
              aria-label="Close image"
            >
              ✕
            </button>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIndex((i) =>
                      i === null ? 0 : (i - 1 + images.length) % images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/60 px-3 py-2 text-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setIndex((i) => (i === null ? 0 : (i + 1) % images.length))
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/60 px-3 py-2 text-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Image */}
            <div
              className="flex items-center justify-center"
              style={{ width: "100%", height: "70vh", position: "relative" }}
            >
              <Image
                src={images[index]}
                alt={captions[index] ?? `Image ${index + 1}`}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>

            {captions[index] && (
              <p className="mt-3 text-center text-sm text-slate-300">
                {captions[index]}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
