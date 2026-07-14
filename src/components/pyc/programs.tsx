"use client";

import * as React from "react";
import {
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  Wrench,
  Users2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./section-header";

const PROGRAMS = [
  {
    icon: Users2,
    title: "Youth Empowerment",
    description:
      "Leadership academies, mentorship, and life-skills programs that equip young people to lead change in their communities.",
    color: "from-[#1F2E8A] to-[#2741B5]",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description:
      "Scholarships, after-school tutoring, and learning materials for students from low-income families across the Volta Region.",
    color: "from-[#2741B5] to-[#3A55D6]",
  },
  {
    icon: HandHeart,
    title: "Community Development",
    description:
      "Clean-water projects, sanitation drives, and infrastructure upgrades co-designed with local chiefs and assemblies.",
    color: "from-[#D4AF37] to-[#B8941F]",
  },
  {
    icon: HeartPulse,
    title: "Health Awareness",
    description:
      "Free screenings, mental health workshops, reproductive health education, and outreach to underserved rural communities.",
    color: "from-[#1F2E8A] to-[#2741B5]",
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    description:
      "Tree-planting campaigns, plastic recovery drives, and climate education in schools and marketplaces across Ho.",
    color: "from-[#2741B5] to-[#3A55D6]",
  },
  {
    icon: Wrench,
    title: "Skills Training",
    description:
      "Vocational bootcamps in coding, tailoring, agribusiness, and digital marketing that turn talent into livelihoods.",
    color: "from-[#D4AF37] to-[#B8941F]",
  },
  {
    icon: Users2,
    title: "Women's Empowerment",
    description:
      "Savings circles, entrepreneurship coaching, and advocacy that amplify women's voices and economic power.",
    color: "from-[#1F2E8A] to-[#2741B5]",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Engagement",
    description:
      "Structured pathways for young people to serve, learn, and grow through meaningful community placements.",
    color: "from-[#2741B5] to-[#3A55D6]",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative bg-surface py-20 md:py-28">
      {/* Decorative blob */}
      <div
        aria-hidden
        className="absolute top-20 right-0 h-72 w-72 rounded-full bg-brand-soft/8 blur-3xl"
      />
      <div className="section-pad relative">
        <SectionHeader
          eyebrow="What We Do"
          title={
            <>
              Programs designed for{" "}
              <span className="text-brand">lasting impact</span>
            </>
          }
          description="Every PYC Club program is built around the belief that young people are not just beneficiaries — they are the architects of their communities' future."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl border border-[#E3E8F2] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-premium-lg hover:border-brand/15`}
            >
              {/* Top gradient bar */}
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div
                className={`inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-premium transition-transform group-hover:scale-110`}
              >
                <p.icon className="size-7" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-[#0E1530]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A6485]">
                {p.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep group/link"
              >
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
