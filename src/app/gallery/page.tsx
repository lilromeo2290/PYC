"use client";

import * as React from "react";
import { Navbar } from "@/components/pyc/navbar";
import { Gallery } from "@/components/pyc/gallery";
import { Footer } from "@/components/pyc/footer";
import { FloatingActions } from "@/components/pyc/floating-actions";
import { useScrollReveal } from "@/components/pyc/use-scroll-reveal";
import { Hero } from "@/components/pyc/hero";

export default function GalleryPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Compact hero banner for the gallery page */}
        <section className="relative isolate overflow-hidden bg-[#0B1130] py-24 md:py-32">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(39,65,181,0.55) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.25) 0%, transparent 45%)",
            }}
          />
          <div className="section-pad relative text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Gallery
            </div>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Moments of{" "}
              <span className="bg-gradient-to-r from-[#E8C766] to-[#D4AF37] bg-clip-text text-transparent">
                hope in action
              </span>
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-2xl mx-auto text-lg text-white/75">
              A glimpse into the people, places, and partnerships that make PYC
              Club's work possible across the Volta Region.
            </p>
          </div>
        </section>

        {/* Full gallery with filters */}
        <Gallery />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
