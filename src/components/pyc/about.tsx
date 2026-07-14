"use client";

import * as React from "react";
import {
  Target,
  Eye,
  Shield,
  Users,
  Heart,
  HandHeart,
  Globe2,
  Sparkles,
  Scale,
  Calendar,
  Languages,
  Award,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   About — single section containing three anchored subsections:
     1. #our-history     — founding story
     2. #vision-mission  — vision + mission cards
     3. #core-values     — 7 core values grid
   The wrapper carries id="about" so the parent navbar link still works.
   ═══════════════════════════════════════════════════════════════════════════ */

const HISTORY_IMG =
  "https://images.unsplash.com/photo-1529390070664-5b20b5c2b139?auto=format&fit=crop&w=1100&q=80";

const VALUES = [
  { icon: Shield, label: "Integrity" },
  { icon: Users, label: "Leadership" },
  { icon: Heart, label: "Community" },
  { icon: HandHeart, label: "Service" },
  { icon: Globe2, label: "Inclusion" },
  { icon: Sparkles, label: "Innovation" },
  { icon: Scale, label: "Accountability" },
];

export function About() {
  return (
    <section id="about" className="bg-white">
      <OurHistory />
      <VisionMission />
      <CoreValues />
    </section>
  );
}

/* ─── 1. OUR HISTORY ─────────────────────────────────────────────────────── */
function OurHistory() {
  return (
    <div id="our-history" className="relative py-20 md:py-28">
      <div className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-premium-lg">
                <img
                  src={HISTORY_IMG}
                  alt="Members of Progressive Youth Club gathered together in celebration"
                  className="w-full h-[480px] object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1130]/60 via-transparent to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-card p-5 shadow-premium">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-14 items-center justify-center rounded-2xl gold-gradient text-[#182368] shadow-gold shrink-0">
                      <Calendar className="size-7" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-extrabold text-[#0E1530]">
                        14th February 2007
                      </p>
                      <p className="text-sm text-[#5A6485]">
                        Registered under the laws of Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="reveal inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Our History
              </div>
              <h2 className="reveal reveal-delay-1 mt-5 font-display text-3xl font-bold leading-tight text-[#0E1530] md:text-4xl lg:text-[2.7rem]">
                From a small gathering to a{" "}
                <span className="text-brand">cultural movement</span>
              </h2>
              <div className="reveal reveal-delay-2 mt-6 space-y-5 text-[15px] leading-relaxed text-[#5A6485]">
                <p>
                  The Progressive Youth Club (PYC) is a dynamic registered social
                  organization founded on{" "}
                  <strong className="text-[#0E1530]">14th February 2007</strong>{" "}
                  under the laws of Ghana, with a clear vision of bringing people
                  together through friendship, unity, cultural preservation, and
                  mutual support. Since its inception, the club has remained
                  committed to creating a strong network where members uplift one
                  another while contributing positively to society.
                </p>
                <p>
                  What began as a small gathering of like-minded individuals has
                  grown into a respected and influential social club whose impact
                  extends far beyond its membership. Over the years, PYC has
                  become a symbol of togetherness, cultural pride, and community
                  service — earning admiration from people across the{" "}
                  <strong className="text-[#0E1530]">Ewe-speaking communities</strong>{" "}
                  and beyond.
                </p>
              </div>

              <div className="reveal reveal-delay-3 mt-8 grid grid-cols-3 gap-4">
                <StatTile icon={Calendar} value="2007" label="Founded" />
                <StatTile icon={Award} value="17+" label="Years of service" />
                <StatTile icon={Languages} value="Ewe" label="Community served" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 2. VISION AND MISSION ─────────────────────────────────────────────── */
function VisionMission() {
  return (
    <div id="vision-mission" className="relative bg-surface py-20 md:py-28">
      <div className="section-pad">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Vision and Mission
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0E1530] md:text-4xl lg:text-[2.7rem]">
            What drives <span className="text-brand">our purpose</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A6485]">
            Every project, every gathering, and every initiative at PYC traces
            back to a clear sense of direction and a deep commitment to the
            communities we serve.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="reveal reveal-delay-1 group relative overflow-hidden rounded-3xl border border-[#E3E8F2] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-premium-lg">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl brand-gradient text-white shadow-premium">
              <Target className="size-7" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-[#0E1530]">
              Our Mission
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5A6485]">
              To bring people together through friendship, unity, cultural
              preservation, and mutual support — creating a strong network where
              members uplift one another while contributing positively to
              society and preserving the rich heritage of the Ewe-speaking
              communities for generations to come.
            </p>
          </div>

          {/* Vision */}
          <div className="reveal reveal-delay-2 group relative overflow-hidden rounded-3xl border border-[#E3E8F2] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-premium-lg">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl gold-gradient text-[#182368] shadow-gold">
              <Eye className="size-7" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-[#0E1530]">
              Our Vision
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5A6485]">
              To be a respected and influential social club that serves as a
              symbol of togetherness, cultural pride, and community service —
              uniting people across the Ewe-speaking communities and beyond
              through culture, music, and sustainable social development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. OUR CORE VALUES ────────────────────────────────────────────────── */
function CoreValues() {
  return (
    <div id="core-values" className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Our Core Values
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0E1530] md:text-4xl lg:text-[2.7rem]">
            The principles that <span className="text-brand">guide us</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A6485]">
            Seven values shape every decision we make and every relationship we
            build at Progressive Youth Club.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div
              key={v.label}
              className={`reveal reveal-delay-${(i % 4) + 1} group flex flex-col items-center gap-3 rounded-3xl border border-[#E3E8F2] bg-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-brand/20 hover:bg-white hover:shadow-premium`}
            >
              <div className="inline-flex size-14 items-center justify-center rounded-2xl brand-gradient text-white shadow-premium transition-transform group-hover:scale-110">
                <v.icon className="size-7" />
              </div>
              <span className="font-display text-base font-bold text-[#0E1530]">
                {v.label}
              </span>
            </div>
          ))}

          {/* CTA tile to fill the 8th grid slot */}
          <div className="reveal reveal-delay-4 group flex flex-col items-center justify-center gap-3 rounded-3xl gold-gradient p-6 text-center shadow-gold transition-all hover:-translate-y-1">
            <HandHeart className="size-8 text-[#182368]" />
            <span className="font-display text-base font-bold text-[#182368]">
              Want to live these values with us?
            </span>
            <a
              href="#volunteer"
              className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#182368] px-5 py-2 text-xs font-bold text-white hover:bg-[#0E1530] transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── helpers ───────────────────────────────────────────────────────────── */
function StatTile({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E3E8F2] bg-surface p-4 text-center transition-all hover:-translate-y-1 hover:shadow-premium">
      <Icon className="size-5 mx-auto text-brand" />
      <p className="mt-2 font-display text-xl font-extrabold text-[#0E1530]">
        {value}
      </p>
      <p className="text-[11px] text-[#5A6485] leading-tight mt-0.5">{label}</p>
    </div>
  );
}
