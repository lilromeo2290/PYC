"use client";

import * as React from "react";
import {
  Mail,
  Linkedin,
  Facebook,
  Star,
  Crown,
  Users,
  FileText,
  Wallet,
  Coins,
  CalendarDays,
  Bus,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./section-header";

/* ═══════════════════════════════════════════════════════════════════════════
   Executives — leadership team grid for Progressive Youth Club, Ho.
   Sits under #executives anchor (5th item in the About Us submenu).
   ═══════════════════════════════════════════════════════════════════════════ */

interface Executive {
  name: string;
  role: string;
  initials: string;
  bio: string;
  icon: LucideIcon;
  isLeader?: boolean;
  socials?: { icon: LucideIcon; href: string; label: string }[];
}

const EXECUTIVES: Executive[] = [
  {
    name: "Mr. Francis Aba",
    role: "Chairman",
    initials: "FA",
    icon: Crown,
    bio:
      "Visionary founder and Chairman of Progressive Youth Club. Since 2007, " +
      "his disciplined, selfless leadership has guided PYC from a small " +
      "gathering into a respected social club whose cultural and community " +
      "impact is felt across the Ewe-speaking communities and beyond.",
    isLeader: true,
    socials: [
      { icon: Mail, href: "#contact", label: "Email" },
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  },
  {
    name: "Jerry Dzamesi",
    role: "Vice Chairman",
    initials: "JD",
    icon: Users,
    bio:
      "Supports the Chairman in steering the club's direction and deputises " +
      "in all leadership duties, ensuring continuity and stability across " +
      "Progressive Youth Club's programmes and engagements.",
  },
  {
    name: "Justine Maame Akpabli",
    role: "General Secretary",
    initials: "JA",
    icon: FileText,
    bio:
      "Keeps the heart of the organization beating — managing records, " +
      "official correspondence, and the communications that keep PYC aligned " +
      "with its mission and the laws of Ghana.",
  },
  {
    name: "Freda Saaneye",
    role: "Deputy General Secretary",
    initials: "FS",
    icon: FileText,
    bio:
      "Assists the General Secretary in documentation and administration, " +
      "ensuring the club's records, minutes, and communications are " +
      "accurately maintained and readily accessible.",
  },
  {
    name: "Otumfour Mark",
    role: "Financial Secretary",
    initials: "OM",
    icon: Wallet,
    bio:
      "Oversees the club's financial records and reporting with transparency " +
      "and accountability, ensuring every contribution is properly tracked " +
      "and directed toward initiatives that uplift the community.",
  },
  {
    name: "Stella Tuekpe",
    role: "Treasurer",
    initials: "ST",
    icon: Coins,
    bio:
      "Stewards the club's funds with integrity, managing receipts, " +
      "disbursements, and the financial health that sustains Progressive " +
      "Youth Club's cultural and community initiatives.",
  },
  {
    name: "Felix Atsu Kpemli",
    role: "Organiser",
    initials: "FK",
    icon: CalendarDays,
    bio:
      "Designs and coordinates the club's events, gatherings, and " +
      "community-development initiatives — turning ideas into memorable " +
      "experiences that strengthen the bonds of membership.",
  },
  {
    name: "Agbeve Agbesi",
    role: "Deputy Organiser",
    initials: "AA",
    icon: CalendarDays,
    bio:
      "Supports the Organiser in planning and executing the club's calendar " +
      "of activities, ensuring every event runs smoothly and every member " +
      "feels included.",
  },
  {
    name: "Edem Atigah",
    role: "Transport Officer",
    initials: "EA",
    icon: Bus,
    bio:
      "Coordinates transportation logistics for the club's events, " +
      "gatherings, and outreach — ensuring members and materials arrive " +
      "safely and on time.",
  },
  {
    name: "Matilda Keh",
    role: "Woman Organiser",
    initials: "MK",
    icon: Heart,
    bio:
      "Champions the engagement, welfare, and leadership of women within " +
      "Progressive Youth Club, organizing programmes that amplify women's " +
      "voices and contributions.",
  },
  {
    name: "Bernice Dzah",
    role: "Deputy Woman Organiser",
    initials: "BD",
    icon: Heart,
    bio:
      "Assists the Woman Organiser in advocating for women's participation " +
      "and supporting initiatives that empower female members across the " +
      "club's activities.",
  },
];

export function Executives() {
  return (
    <section
      id="executives"
      className="relative bg-gradient-to-b from-white via-surface to-white py-20 md:py-28"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-soft/8 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="section-pad relative">
        <SectionHeader
          eyebrow="Our Executives"
          title={
            <>
              The team <span className="text-brand">guiding our mission</span>
            </>
          }
          description="The remarkable progress of Progressive Youth Club has been made possible through visionary leadership and a dedicated team of executives whose commitment, discipline, and selfless service have guided the organization to greater heights."
        />

        {/* Leader spotlight */}
        <div className="mx-auto mt-14 max-w-6xl">
          <LeaderCard exec={EXECUTIVES[0]} />

          {/* Rest of the team */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXECUTIVES.slice(1).map((exec, i) => (
              <ExecutiveCard
                key={exec.role}
                exec={exec}
                delay={(i % 3) + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Leader spotlight card (Francis Aba) ───────────────────────────────── */
function LeaderCard({ exec }: { exec: Executive }) {
  return (
    <div className="reveal relative overflow-hidden rounded-[2rem] border border-[#E3E8F2] bg-white p-8 shadow-premium-lg md:p-10">
      <div
        aria-hidden
        className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
      />
      <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
        {/* Portrait */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="size-40 rounded-full overflow-hidden shadow-premium-lg ring-4 ring-gold/30 md:size-48">
              <img
                src="/francis-aba.jpg"
                alt="Mr. Francis Aba — Founder & Chairman of Progressive Youth Club"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="absolute -top-2 -right-2 inline-flex size-14 items-center justify-center rounded-full gold-gradient text-[#182368] shadow-gold ring-4 ring-white">
              <Crown className="size-7" />
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#182368]">
            <Star className="size-3 fill-current" />
            Chairman
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold text-[#0E1530] md:text-3xl">
            {exec.name}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5A6485] max-w-2xl">
            {exec.bio}
          </p>
          <div className="mt-5 flex justify-center gap-2 md:justify-start">
            {exec.socials?.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`${exec.name} ${s.label}`}
                className="inline-flex size-10 items-center justify-center rounded-full bg-brand-soft/10 text-brand hover:bg-brand hover:text-white transition-colors"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Standard executive card ───────────────────────────────────────────── */
function ExecutiveCard({
  exec,
  delay,
}: {
  exec: Executive;
  delay: number;
}) {
  return (
    <div
      className={`reveal reveal-delay-${delay} group relative overflow-hidden rounded-3xl border border-[#E3E8F2] bg-white p-7 transition-all hover:-translate-y-2 hover:shadow-premium-lg hover:border-brand/15`}
    >
      {/* Hover gradient bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 brand-gradient opacity-0 transition-opacity group-hover:opacity-100"
      />

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div className="inline-flex size-16 items-center justify-center rounded-2xl brand-gradient text-white shadow-premium transition-transform group-hover:scale-105">
            <span className="font-display text-xl font-bold">{exec.initials}</span>
          </div>
          <span className="absolute -bottom-1 -right-1 inline-flex size-7 items-center justify-center rounded-full gold-gradient text-[#182368] shadow-gold ring-2 ring-white">
            <exec.icon className="size-3.5" />
          </span>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-[#0E1530] leading-tight">
            {exec.name}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            {exec.role}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-4 text-sm leading-relaxed text-[#5A6485]">{exec.bio}</p>

      {/* Social row (revealed on hover) */}
      {exec.socials && (
        <div className="mt-5 flex gap-2 opacity-70 transition-opacity group-hover:opacity-100">
          {exec.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={`${exec.name} ${s.label}`}
              className="inline-flex size-9 items-center justify-center rounded-full bg-surface text-brand hover:bg-brand hover:text-white transition-colors"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
