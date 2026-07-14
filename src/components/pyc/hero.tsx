"use client";

import * as React from "react";
import { Heart, Users, ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { PYCLogo } from "./logo";
import { PYCButton } from "./button";

const HERO_STATS = [
  { value: 500, suffix: "+", label: "Youth Impacted" },
  { value: 50, suffix: "+", label: "Community Projects" },
  { value: 200, suffix: "+", label: "Volunteers" },
  { value: 10, suffix: "+", label: "Years of Service" },
];

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
        <div className="mx-auto max-w-7xl">
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

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 text-white">
              <div className="reveal reveal-delay-1 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                <Sparkles className="size-3.5 text-gold" />
                Youth-Led NGO in the Volta Region
              </div>

              <h1 className="reveal reveal-delay-2 mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-shadow-hero sm:text-5xl lg:text-6xl xl:text-7xl">
                Empowering Youth.
                <br />
                <span className="bg-gradient-to-r from-[#E8C766] to-[#D4AF37] bg-clip-text text-transparent">
                  Transforming Communities.
                </span>
              </h1>

              <p className="reveal reveal-delay-3 mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
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

            {/* Right: floating stat cards */}
            <div className="lg:col-span-5">
              <div className="reveal reveal-delay-3 grid grid-cols-2 gap-4">
                {HERO_STATS.map((stat, i) => (
                  <HeroStatCard
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={i * 0.1}
                    highlight={i % 2 === 1}
                  />
                ))}
              </div>
              <div className="reveal reveal-delay-5 mt-4 rounded-2xl glass-dark p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80",
                    ].map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt="Volunteer avatar"
                        className="size-9 rounded-full border-2 border-white/80 object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">200+ active volunteers</p>
                    <p className="text-white/70 text-xs">Be part of the movement</p>
                  </div>
                </div>
              </div>
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

interface HeroStatCardProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  highlight?: boolean;
}

function HeroStatCard({ value, suffix, label, delay, highlight }: HeroStatCardProps) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let raf = 0;
    let start = 0;
    const dur = 1600;
    const animate = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(animate);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className={
        highlight
          ? "rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F] p-5 text-[#182368] shadow-gold"
          : "rounded-2xl glass-dark p-5 text-white shadow-premium"
      }
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="font-display text-3xl font-extrabold md:text-4xl tabular-nums">
        {display.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </div>
      <div
        className={
          highlight
            ? "mt-1 text-xs font-medium text-[#182368]/80 uppercase tracking-wider"
            : "mt-1 text-xs font-medium text-white/75 uppercase tracking-wider"
        }
      >
        {label}
      </div>
    </div>
  );
}
