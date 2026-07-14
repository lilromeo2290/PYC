"use client";

import * as React from "react";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  HandHeart,
  Globe2,
  Sparkles,
  Scale,
} from "lucide-react";
import { SectionHeader } from "./section-header";

const VALUES = [
  { icon: Shield, label: "Integrity" },
  { icon: Users, label: "Leadership" },
  { icon: Heart, label: "Community" },
  { icon: HandHeart, label: "Service" },
  { icon: Globe2, label: "Inclusion" },
  { icon: Sparkles, label: "Innovation" },
  { icon: Scale, label: "Accountability" },
];

const ABOUT_IMG_1 =
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80";
const ABOUT_IMG_2 =
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=700&q=80";

export function About() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: images */}
            <div className="reveal relative">
              <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[540px]">
                <div className="col-span-3 row-span-4 relative overflow-hidden rounded-3xl shadow-premium">
                  <img
                    src={ABOUT_IMG_1}
                    alt="Youth volunteers collaborating on a community project"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-2 row-span-3 col-start-4 row-start-1 relative overflow-hidden rounded-3xl shadow-premium">
                  <img
                    src={ABOUT_IMG_2}
                    alt="Young women at a PYC Club mentorship session"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating badge */}
                <div className="col-span-2 row-span-2 col-start-2 row-start-5 relative rounded-3xl brand-gradient p-5 text-white shadow-premium-lg flex flex-col justify-center">
                  <p className="font-display text-3xl font-extrabold">10+</p>
                  <p className="text-xs text-white/80 uppercase tracking-wider">
                    Years serving
                    <br />the Volta Region
                  </p>
                </div>
                {/* Glass card stat */}
                <div className="col-span-2 row-span-2 col-start-4 row-start-4 relative glass-card rounded-3xl p-5 shadow-premium">
                  <p className="font-display text-3xl font-extrabold text-brand">500+</p>
                  <p className="text-xs text-[#5A6485] uppercase tracking-wider">
                    Young people
                    <br />empowered
                  </p>
                </div>
              </div>
            </div>

            {/* Right: copy + values */}
            <div>
              <SectionHeader
                align="left"
                eyebrow="About PYC Club"
                title={
                  <>
                    A youth-led movement building{" "}
                    <span className="text-brand">stronger communities</span>{" "}
                    from the ground up
                  </>
                }
                description="For more than a decade, Progressive Youth Club, Ho has worked alongside young people, families, and local leaders in the Volta Region to unlock opportunity, advance equity, and create lasting social change."
              />

              <div className="reveal reveal-delay-1 mt-8 grid gap-5 sm:grid-cols-2">
                <MissionCard
                  icon={Target}
                  title="Our Mission"
                  body="To empower young people with the skills, values, and platforms they need to lead change in their communities — through education, service, advocacy, and inclusive development."
                />
                <MissionCard
                  icon={Eye}
                  title="Our Vision"
                  body="A Volta Region where every young person is equipped, inspired, and supported to build a self-reliant, just, and sustainable future for themselves and their communities."
                />
              </div>

              <div className="reveal reveal-delay-2 mt-8">
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#5A6485]">
                  Our Core Values
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {VALUES.map((v) => (
                    <div
                      key={v.label}
                      className="group flex flex-col items-center gap-2 rounded-2xl border border-[#E3E8F2] bg-white p-4 text-center transition-all hover:-translate-y-1 hover:border-brand/20 hover:shadow-premium"
                    >
                      <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <v.icon className="size-5" />
                      </div>
                      <span className="text-sm font-semibold text-[#0E1530]">
                        {v.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E3E8F2] bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-premium">
      <div className="inline-flex size-12 items-center justify-center rounded-2xl brand-gradient text-white shadow-premium">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-[#0E1530]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5A6485]">{body}</p>
    </div>
  );
}
