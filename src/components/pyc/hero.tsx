"use client";

import { Heart, Users, ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { PYCLogo } from "./logo";
import { PYCButton } from "./button";

const HERO_BG =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={HERO_BG}
        alt="Young volunteers from PYC Club supporting their community"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Brand overlay */}
      <div className="absolute inset-0 -z-10 hero-overlay" aria-hidden />

      {/* Decorative floating blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="absolute bottom-10 -left-32 -z-10 h-96 w-96 rounded-full bg-[#2741B5]/40 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="section-pad relative w-full pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Floating logo chip */}
          <div className="reveal mb-8 inline-flex items-center gap-3 rounded-2xl glass-dark px-4 py-2.5">
            <PYCLogo variant="crest" className="size-10" />
            <div className="text-white">
              <p className="text-xs font-semibold tracking-wider text-gold uppercase">
                Progressive Youth Club, Ho
              </p>
              <p className="text-[11px] text-white/70">We Stand For Support</p>
            </div>
          </div>

          <div className="text-white">
            <div className="reveal reveal-delay-1 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <Sparkles className="size-3.5 text-gold" />
              Youth-Led NGO in the Volta Region
            </div>

            <p className="reveal reveal-delay-3 mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Progressive Youth Club, Ho is dedicated to empowering young
              people through education, leadership, community development,
              advocacy, environmental sustainability, and social support.
            </p>

            <div className="reveal reveal-delay-4 mt-8 flex flex-wrap items-center gap-4">
              <PYCButton asChild variant="gold" size="xl">
                <a href="#volunteer">
                  <Users className="size-5" /> Join Us
                </a>
              </PYCButton>
              <PYCButton asChild variant="white" size="xl">
                <a href="#donate">
                  <Heart className="size-5" /> Donate Today
                </a>
              </PYCButton>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
              >
                <PlayCircle className="size-7 text-gold" />
                Watch our story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <span className="animate-bounce">
              <ArrowRight className="size-4 rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
