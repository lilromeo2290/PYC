"use client";

import * as React from "react";
import { ArrowRight, Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { PYCButton } from "./button";

export const CATEGORIES = ["All", "Community", "Education", "Health", "Environment", "Events"] as const;
export type Category = typeof CATEGORIES[number];

export interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  span?: boolean;
}

export const IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    alt: "Volunteers helping children in a rural community",
    category: "Community",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    alt: "Classroom learning session",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    alt: "Health outreach camp",
    category: "Health",
  },
  {
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=600&q=80",
    alt: "Tree planting activity",
    category: "Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    alt: "Youth summit event",
    category: "Events",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
    alt: "Children at a community library",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    alt: "Volunteers distributing supplies",
    category: "Community",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    alt: "Health education workshop",
    category: "Health",
  },
  {
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=600&q=80",
    alt: "Reforestation campaign",
    category: "Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80",
    alt: "Annual gala event",
    category: "Events",
  },
];

interface GalleryProps {
  /** Limit the number of images shown (home page uses 6). */
  limit?: number;
  /** Show the "View Full Gallery" button (home page uses true). */
  showViewMore?: boolean;
}

export function Gallery({ limit, showViewMore = false }: GalleryProps = {}) {
  const [filter, setFilter] = React.useState<Category>("All");

  const isLimited = typeof limit === "number";

  // For limited (home) view: no filter, just take the first `limit` images
  const displayed = isLimited
    ? IMAGES.slice(0, limit)
    : filter === "All"
      ? IMAGES
      : IMAGES.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <SectionHeader
          eyebrow="Gallery"
          title={
            <>
              Moments of <span className="text-brand">hope in action</span>
            </>
          }
          description="A glimpse into the people, places, and partnerships that make PYC Club's work possible across the Volta Region."
        />

        {/* Filter pills — only on full gallery page */}
        {!isLimited && (
          <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                  filter === c
                    ? "bg-brand text-white shadow-premium"
                    : "bg-surface text-[#5A6485] hover:bg-brand-soft/10 hover:text-brand"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {/* Masonry grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {displayed.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className={cn(
                "reveal group relative overflow-hidden rounded-3xl shadow-premium break-inside-avoid",
                img.span ? "aspect-[4/5]" : "aspect-square"
              )}
              style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0B1130]/85 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#182368]">
                  {img.category}
                </span>
                <p className="mt-2 text-sm font-medium text-white">
                  {img.alt}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* View Full Gallery button — only on home page (limited view) */}
        {showViewMore && (
          <div className="reveal mt-12 flex flex-col items-center gap-3">
            <p className="text-sm text-[#5A6485]">
              Showing {displayed.length} of {IMAGES.length} photos
            </p>
            <PYCButton asChild variant="primary" size="lg">
              <a href="/gallery">
                <Images className="size-5" />
                View Full Gallery
                <ArrowRight className="size-4" />
              </a>
            </PYCButton>
          </div>
        )}
      </div>
    </section>
  );
}
