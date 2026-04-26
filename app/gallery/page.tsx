"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { useReveal } from "../components/useReveal";
import { galleryImages, type GalleryImage } from "../data/gallery-images";

type FilterVal = "all" | "argi" | "max";

const filters: Array<{ val: FilterVal; label: string }> = [
  { val: "all", label: "All" },
  { val: "argi", label: "Argi's Party" },
  { val: "max", label: "SYNC Xmas Party" },
];

const photos = galleryImages.filter((g) => g.type === "image");
const videos = galleryImages.filter((g) => g.type === "video");

function isLandscape(item: GalleryImage) {
  return item.width > 0 && item.height > 0 && item.width >= item.height;
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterVal>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  useReveal([filter]);

  const visiblePhotos = useMemo<GalleryImage[]>(
    () => (filter === "all" ? photos : photos.filter((p) => p.event === filter)),
    [filter],
  );
  const visibleVideos = useMemo<GalleryImage[]>(
    () => (filter === "all" ? videos : videos.filter((v) => v.event === filter)),
    [filter],
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return (i - 1 + visiblePhotos.length) % visiblePhotos.length;
    });
  }, [visiblePhotos.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return (i + 1) % visiblePhotos.length;
    });
  }, [visiblePhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activePhoto = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  return (
    <main>
      <PageHero
        eyebrow="Our Gallery"
        title="Our Gallery"
        description="Real moments from real events across Swansea and South Wales."
        heroBg="/assets/hero-banner-2.webp"
      />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(({ val, label }) => (
              <button
                key={val}
                type="button"
                className={`filter-btn${filter === val ? " active" : ""}`}
                onClick={() => setFilter(val)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="gallery-card-grid">
            {visiblePhotos.map((photo, idx) => (
              <button
                key={photo.src}
                type="button"
                className={`reveal gallery-card${isLandscape(photo) ? " is-landscape" : ""}`}
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open ${photo.eventName} photo in lightbox`}
              >
                <div className="gallery-card-frame">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-type">{photo.eventType}</span>
                    <strong className="gallery-card-name">{photo.eventName}</strong>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {visibleVideos.length > 0 && (
            <section className="mt-16">
              <h2
                className="text-center mb-8"
                style={{
                  fontFamily: "var(--font-family-display)",
                  fontSize: "clamp(1.6rem,3.2vw,2.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Behind the Scenes
              </h2>
              <div className="gallery-video-grid">
                {visibleVideos.map((video) => (
                  <video
                    key={video.src}
                    className="reveal gallery-video"
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                  />
                ))}
              </div>
            </section>
          )}

          <p
            className="gallery-copyright-notice"
            style={{
              fontSize: "0.75rem",
              color: "var(--color-fg-faint)",
              textAlign: "center",
              margin: "2rem auto",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            The gallery images featured on this page were captured at real events by our sister business,
            The Shan Booth, based in Australia. Photo Booth Hire Swansea is the official UK operation run by
            the same team and operator. All images © The Shan Booth Australia. All rights reserved.
          </p>

          <div className="text-center mt-16">
            <h2
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: "clamp(1.5rem,3vw,2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Want moments like these at your event?
            </h2>
            <Link href="/quickquote" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {activePhoto && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              width={activePhoto.width || 600}
              height={activePhoto.height || 1740}
              quality={90}
              sizes="90vw"
              style={{ maxHeight: "90vh", width: "auto", height: "auto", maxWidth: "100%" }}
              priority
            />
          </div>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
