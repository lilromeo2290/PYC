"use client";

import * as React from "react";
import { MapPin, Award, TreePine, Users, HeartHandshake, Megaphone } from "lucide-react";

const STATS = [
  { icon: MapPin, value: 35, suffix: "+", label: "Communities Reached" },
  { icon: Award, value: 120, suffix: "+", label: "Scholarships Awarded" },
  { icon: TreePine, value: 5000, suffix: "+", label: "Trees Planted" },
  { icon: Users, value: 200, suffix: "+", label: "Active Volunteers" },
  { icon: HeartHandshake, value: 500, suffix: "+", label: "Beneficiaries" },
  { icon: Megaphone, value: 25, suffix: "+", label: "Campaigns Run" },
];

const BG =
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80";

export function Impact() {
  return (
    <section id="impact" className="relative isolate overflow-hidden bg-[#0B1130] py-20 md:py-28">
      <img
        src={BG}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(39,65,181,0.55) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(212,175,55,0.18) 0%, transparent 45%)",
        }}
      />

      <div className="section-pad relative">
        <div className="mx-auto max-w-3xl text-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Our Impact
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.7rem]">
            Measured in lives changed, not just numbers
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Every figure below represents a young person, a family, or a community
            whose story is still unfolding — thanks to supporters like you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <ImpactCard key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ImpactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function ImpactCard({ icon: Icon, value, suffix, label, delay }: ImpactCardProps) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let raf = 0;
    let start = 0;
    const dur = 2000;
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
      className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:bg-white/8 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        aria-hidden
        className="absolute -top-12 -right-12 size-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
      />
      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8C766] to-[#D4AF37] text-[#182368] shadow-gold">
        <Icon className="size-6" />
      </div>
      <div className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl tabular-nums">
        {display.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium uppercase tracking-wider text-white/65">
        {label}
      </div>
    </div>
  );
}
