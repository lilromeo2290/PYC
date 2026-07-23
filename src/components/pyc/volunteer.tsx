"use client";

import * as React from "react";
import { Heart, Handshake, CheckCircle2 } from "lucide-react";
import { PYCButton } from "./button";

const BG = "/images/volunteer-bg.jpg";

const BENEFITS = [
  "Hands-on leadership training",
  "Mentorship & networking",
  "Certificate of service",
  "Real community impact",
];

export function Volunteer() {
  return (
    <section
      id="volunteer"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <img
        src={BG}
        alt="Smiling young PYC volunteers in branded t-shirts"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1130]/95 via-[#1F2E8A]/85 to-[#1F2E8A]/55"
      />

      <div className="section-pad relative">
        <div className="mx-auto max-w-3xl text-center text-white">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Join the movement
          </div>
          <h2 className="reveal reveal-delay-1 mt-5 font-display text-3xl font-bold leading-tight md:text-5xl lg:text-[3.3rem]">
            Become a{" "}
            <span className="bg-gradient-to-r from-[#E8C766] to-[#D4AF37] bg-clip-text text-transparent">
              Volunteer
            </span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-white/85 md:text-xl">
            Whether you have one weekend a month or one day a week, your time can
            rewrite a child's future, restore a water source, or launch a young
            entrepreneur. Join 200+ active volunteers shaping the Volta Region.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center justify-center gap-4">
            <PYCButton asChild variant="gold" size="xl">
              <a href="#contact">
                <Heart className="size-5" /> Volunteer Now
              </a>
            </PYCButton>
            <PYCButton asChild variant="outline" size="xl" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand">
              <a href="#contact">
                <Handshake className="size-5" /> Partner With Us
              </a>
            </PYCButton>
          </div>

          <div className="reveal reveal-delay-4 mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                key={b}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white backdrop-blur"
              >
                <CheckCircle2 className="size-4 text-gold shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
