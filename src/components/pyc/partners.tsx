"use client";

import * as React from "react";
import { Building2, Landmark, Briefcase, GraduationCap, Globe } from "lucide-react";

const PARTNERS = [
  { name: "Volta Regional Coordinating Council", icon: Landmark, type: "Government" },
  { name: "Ho Municipal Assembly", icon: Building2, type: "Government" },
  { name: "UNICEF Ghana", icon: Globe, type: "International" },
  { name: "Ghana Education Service", icon: GraduationCap, type: "Institution" },
  { name: "Ho Technical University", icon: GraduationCap, type: "Institution" },
  { name: "Ecobank Ghana", icon: Briefcase, type: "Corporate" },
  { name: "MTN Ghana Foundation", icon: Briefcase, type: "Corporate" },
  { name: "World Vision Ghana", icon: Globe, type: "International" },
  { name: "Plan International", icon: Globe, type: "International" },
  { name: "Ghana Health Service", icon: Landmark, type: "Government" },
];

export function Partners() {
  // Duplicate the array for a seamless marquee
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="section-pad">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Our Partners
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold text-[#0E1530] md:text-3xl">
            Trusted by the institutions shaping Ghana's future
          </h2>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="reveal mt-12 relative overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"
        />

        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-3 rounded-2xl border border-[#E3E8F2] bg-surface px-6 py-4 min-w-[280px]"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-soft/10 text-brand shrink-0">
                <p.icon className="size-6" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#0E1530] leading-tight">
                  {p.name}
                </p>
                <p className="text-xs text-[#5A6485] uppercase tracking-wider">
                  {p.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
