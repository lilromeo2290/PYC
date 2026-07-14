"use client";

import * as React from "react";
import {
  Calendar,
  Users,
  Award,
  Music,
  Radio,
  Mic2,
  Languages,
  HeartHandshake,
  Trophy,
  Star,
  Quote,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { PYCButton } from "./button";

/* ───────────────────────────────────────────────────────────────────────────
   AboutHistory — four storytelling subsections that sit under the #about
   anchor: Our History · Leadership & Growth · Preserving Culture Through
   Music · Promoting Culture Through Digital Media.
   ─────────────────────────────────────────────────────────────────────── */

export function AboutHistory() {
  return (
    <>
      <OurHistory />
      <Leadership />
      <MusicSection />
      <DigitalMedia />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   1. OUR HISTORY
   ═══════════════════════════════════════════════════════════════════════════ */
const HISTORY_IMG =
  "https://images.unsplash.com/photo-1529390070664-5b20b5c2b139?auto=format&fit=crop&w=1100&q=80";

const HISTORY_TIMELINE = [
  { year: "2007", label: "Founded on 14th February", icon: Calendar },
  { year: "17+", label: "Years of continuous service", icon: Award },
  { year: "Ewe", label: "Cultural community served", icon: Languages },
];

function OurHistory() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: image + stat badges */}
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
                {/* Founding date badge */}
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

            {/* Right: copy */}
            <div>
              <SectionHeader
                align="left"
                eyebrow="Our History"
                title={
                  <>
                    From a small gathering to a{" "}
                    <span className="text-brand">cultural movement</span>
                  </>
                }
              />
              <div className="reveal reveal-delay-1 mt-6 space-y-5 text-[15px] leading-relaxed text-[#5A6485]">
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

              {/* Timeline stats */}
              <div className="reveal reveal-delay-2 mt-8 grid grid-cols-3 gap-4">
                {HISTORY_TIMELINE.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#E3E8F2] bg-surface p-4 text-center transition-all hover:-translate-y-1 hover:shadow-premium"
                  >
                    <item.icon className="size-5 mx-auto text-brand" />
                    <p className="mt-2 font-display text-xl font-extrabold text-[#0E1530]">
                      {item.year}
                    </p>
                    <p className="text-[11px] text-[#5A6485] leading-tight mt-0.5">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   2. LEADERSHIP & GROWTH
   ═══════════════════════════════════════════════════════════════════════════ */
const LEADERSHIP_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80";

const LEADERSHIP_QUALITIES = [
  "Visionary guidance",
  "Disciplined service",
  "Community engagement",
  "Cultural stewardship",
  "Member empowerment",
  "Selfless dedication",
];

function Leadership() {
  return (
    <section className="relative bg-surface py-20 md:py-28">
      <div className="section-pad">
        <SectionHeader
          eyebrow="Leadership & Growth"
          title={
            <>
              Guided by vision,{" "}
              <span className="text-brand">driven by service</span>
            </>
          }
          description="The remarkable progress of Progressive Youth Club has been made possible through visionary leadership and a dedicated team of executives."
        />

        <div className="mx-auto mt-14 max-w-6xl">
          {/* Leader spotlight card */}
          <div className="reveal grid gap-8 rounded-[2rem] border border-[#E3E8F2] bg-white p-8 shadow-premium md:grid-cols-[auto_1fr] md:p-10 lg:gap-12">
            {/* Portrait + name block */}
            <div className="flex flex-col items-center text-center md:w-64">
              <div className="relative">
                <div className="size-40 rounded-full brand-gradient flex items-center justify-center shadow-premium-lg ring-4 ring-gold/20">
                  <span className="font-display text-5xl font-extrabold text-white">
                    FA
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 inline-flex size-12 items-center justify-center rounded-full gold-gradient text-[#182368] shadow-gold ring-4 ring-white">
                  <Star className="size-5 fill-current" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#0E1530]">
                Mr. Francis Aba
              </h3>
              <p className="text-sm text-brand font-semibold">Founder & Leader</p>
              <p className="text-xs text-[#5A6485] mt-1">
                Progressive Youth Club, Ho
              </p>
            </div>

            {/* Bio + qualities */}
            <div>
              <Quote className="size-10 text-gold/30" aria-hidden />
              <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-[#5A6485]">
                <p>
                  The remarkable progress of the club has been made possible
                  through the visionary leadership of{" "}
                  <strong className="text-[#0E1530]">Mr. Francis Aba</strong>,
                  supported by a dedicated team of executives whose commitment,
                  discipline, and selfless service have guided the organization
                  to greater heights.
                </p>
                <p>
                  Under their leadership, Progressive Youth Club has expanded its
                  membership, strengthened its organizational structures,
                  promoted community engagement, and initiated projects that
                  continue to unite people through culture, music, and social
                  development. Their leadership has created an environment where
                  members feel valued, supported, and inspired to contribute
                  their talents for the benefit of the club and society.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {LEADERSHIP_QUALITIES.map((q) => (
                  <span
                    key={q}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft/10 border border-brand/10 px-3 py-1.5 text-xs font-semibold text-brand"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. PRESERVING OUR CULTURE THROUGH MUSIC
   ═══════════════════════════════════════════════════════════════════════════ */
const MUSIC_IMG =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=80";

function MusicSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1130] py-20 md:py-28">
      <img
        src={MUSIC_IMG}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(39,65,181,0.55) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(212,175,55,0.20) 0%, transparent 45%)",
        }}
      />

      <div className="section-pad relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: album feature card */}
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-premium-lg md:p-10">
                {/* Award badge */}
                <div className="absolute -top-4 -right-4 inline-flex items-center gap-1.5 rounded-full gold-gradient px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#182368] shadow-gold">
                  <Trophy className="size-4" />
                  Award Winning
                </div>

                {/* Album cover placeholder */}
                <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-premium-lg">
                  <img
                    src={MUSIC_IMG}
                    alt="Borborbor music performance by Progressive Youth Club"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1130]/80 via-[#0B1130]/20 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#182368]">
                      <Music className="size-3" />
                      Borborbor Album
                    </div>
                    <p className="mt-2 font-display text-xl font-bold leading-tight">
                      Nu Gawoe Nye Mawu
                      <br />
                      Drado Di Nam
                    </p>
                  </div>
                </div>

                {/* Stat row */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/8 p-3 text-center">
                    <Award className="size-5 mx-auto text-gold" />
                    <p className="mt-1 text-[11px] font-semibold text-white/80">
                      Award
                      <br />
                      Winning
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/8 p-3 text-center">
                    <Users className="size-5 mx-auto text-gold" />
                    <p className="mt-1 text-[11px] font-semibold text-white/80">
                      Sub-region
                      <br />
                      Reach
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/8 p-3 text-center">
                    <Languages className="size-5 mx-auto text-gold" />
                    <p className="mt-1 text-[11px] font-semibold text-white/80">
                      Ewe
                      <br />
                      Heritage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div className="text-white">
              <SectionHeader
                align="left"
                light
                eyebrow="Our Culture"
                title={
                  <>
                    Preserving our culture{" "}
                    <span className="text-gold">through music</span>
                  </>
                }
              />
              <div className="reveal reveal-delay-1 mt-6 space-y-5 text-[15px] leading-relaxed text-white/80">
                <p>
                  One of the club's proudest achievements is the successful
                  composition, recording, and production of its own Borborbor
                  music album titled{" "}
                  <em className="text-gold not-italic font-semibold">
                    "Nu Gawoe Nye Mawu Drado Di Nam."
                  </em>{" "}
                  This landmark project showcases the creativity and cultural
                  richness of the club. The album is more than a collection of
                  traditional songs — it reflects everyday life, human
                  experiences, shared values, and the importance of unity within
                  our communities.
                </p>
                <p>
                  The album has received widespread recognition and has won
                  awards, earning praise for its authentic storytelling,
                  meaningful lyrics, and outstanding musical quality. Its
                  messages resonate with people from all walks of life because
                  they address experiences that are familiar and relevant to
                  everyone.
                </p>
              </div>

              <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-4">
                <PYCButton asChild variant="gold" size="lg">
                  <a href="#contact">
                    <Music className="size-5" /> Listen to the Album
                  </a>
                </PYCButton>
                <PYCButton
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand"
                >
                  <a href="#contact">Learn About Borborbor</a>
                </PYCButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. PROMOTING CULTURE THROUGH DIGITAL MEDIA
   ═══════════════════════════════════════════════════════════════════════════ */
const RADIO_PURPOSES = [
  {
    icon: Radio,
    title: "Global Broadcasting",
    description:
      "Broadcasting the club's Borborbor album to audiences around the world.",
  },
  {
    icon: Music,
    title: "Song Preservation",
    description:
      "Teaching listeners the songs and preserving traditional Borborbor music for future generations.",
  },
  {
    icon: Languages,
    title: "Ewe Heritage",
    description:
      "Promoting Ewe language and cultural heritage through dedicated programming.",
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    description:
      "Providing a platform for community engagement and information sharing.",
  },
  {
    icon: Mic2,
    title: "Talent Showcase",
    description:
      "Showcasing the talents and activities of Progressive Youth Club members.",
  },
];

function DigitalMedia() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <SectionHeader
          eyebrow="Digital Media"
          title={
            <>
              Promoting culture through{" "}
              <span className="text-brand">digital media</span>
            </>
          }
          description="In keeping with modern communication trends, Progressive Youth Club has established its own online radio station to support the promotion of its music and cultural activities."
        />

        {/* Radio station feature */}
        <div className="mx-auto mt-14 max-w-7xl">
          {/* Live radio banner */}
          <div className="reveal relative overflow-hidden rounded-[2rem] brand-gradient p-8 text-white shadow-premium-lg md:p-10">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/20">
                  <Radio className="size-8 text-gold animate-pulse" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <span className="size-1.5 rounded-full bg-white animate-pulse" />
                    Live
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                    PYC Online Radio
                  </h3>
                  <p className="text-sm text-white/70">
                    Broadcasting Borborbor music 24/7 to the world
                  </p>
                </div>
              </div>
              <PYCButton asChild variant="gold" size="lg">
                <a href="#contact">
                  <Radio className="size-5" /> Tune In Now
                </a>
              </PYCButton>
            </div>
          </div>

          {/* 5 purpose cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RADIO_PURPOSES.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group rounded-3xl border border-[#E3E8F2] bg-surface p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-premium ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl brand-gradient text-white shadow-premium transition-transform group-hover:scale-110">
                  <p.icon className="size-6" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-[#0E1530]">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6485]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Reach callout */}
          <div className="reveal mt-8 rounded-[2rem] border border-brand/10 bg-brand-gradient-soft p-8 text-center md:p-10">
            <p className="text-base leading-relaxed text-[#0E1530] md:text-lg">
              Through this initiative, the club has successfully expanded the
              reach of its music, with the album enjoying{" "}
              <strong className="text-brand">tremendous popularity</strong>{" "}
              across Ewe-speaking communities throughout the sub-region.
            </p>
          </div>
        </div>

        {/* Borborbor Festival callout */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="reveal relative overflow-hidden rounded-[2rem] border-2 border-gold/30 bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] p-8 md:p-12">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="size-28 rounded-full gold-gradient flex items-center justify-center shadow-gold">
                    <Trophy className="size-12 text-[#182368]" />
                  </div>
                  <span className="absolute -top-2 -right-2 inline-flex items-center rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Annual
                  </span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Borborbor Festival
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-[#0E1530] md:text-3xl">
                  A yearly celebration of Borborbor excellence
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5A6485]">
                  Because of the popularity of its album, the club has
                  instituted a yearly{" "}
                  <strong className="text-[#0E1530]">Borborbor festival</strong>{" "}
                  which gives every popular Borborbor performing group the chance
                  to perform their songs — with the best group going home with
                  the ultimate prize. It has become one of the most anticipated
                  cultural events in the Volta Region.
                </p>
                <div className="mt-6">
                  <PYCButton asChild variant="primary" size="lg">
                    <a href="#events">
                      <Trophy className="size-5" /> Festival Details
                    </a>
                  </PYCButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
