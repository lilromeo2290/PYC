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
  Quote,
  Music,
  Radio,
  Mic2,
  Trophy,
  HeartHandshake,
  Star,
  Crown,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   About — single section containing three anchored subsections:
     1. #our-history     — founding story + leadership + music + digital media
     2. #vision-mission  — vision + mission cards
     3. #core-values     — 7 core values grid
   The wrapper carries id="about" so the parent navbar link still works.
   ═══════════════════════════════════════════════════════════════════════════ */

const HISTORY_IMG = "/images/history-community.jpg";

const MUSIC_BG = "/images/music-bg.jpg";

const MUSIC_IMG = "/borborbor-album.jpg";

const VALUES = [
  { icon: Users, label: "Unity" },
  { icon: Heart, label: "Love" },
  { icon: Shield, label: "Respect" },
  { icon: Scale, label: "Integrity" },
  { icon: HandHeart, label: "Teamwork" },
  { icon: Globe2, label: "Cultural Preservation" },
  { icon: Sparkles, label: "Community Service" },
  { icon: HandHeart, label: "Mutual Support" },
];

const LEADERSHIP_QUALITIES = [
  "Visionary guidance",
  "Disciplined service",
  "Community engagement",
  "Cultural stewardship",
  "Member empowerment",
  "Selfless dedication",
];

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

export function About() {
  return (
    <section id="about" className="bg-white">
      <OurHistory />
      <VisionMission />
      <CoreValues />
      <OurMotto />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   1. OUR HISTORY  (id="our-history")
   Contains 4 sub-areas: founding story · leadership · music · digital media
   ═══════════════════════════════════════════════════════════════════════════ */
function OurHistory() {
  return (
    <div id="our-history">
      <FoundingStory />
      <LeadershipGrowth />
      <MusicCulture />
      <DigitalMedia />
    </div>
  );
}

/* ─── 1a. Founding Story ─────────────────────────────────────────────────── */
function FoundingStory() {
  return (
    <div className="relative py-20 md:py-28">
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

/* ─── 1b. Leadership and Growth ─────────────────────────────────────────── */
function LeadershipGrowth() {
  return (
    <div className="relative bg-surface py-20 md:py-28">
      <div className="section-pad">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Leadership and Growth
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0E1530] md:text-4xl lg:text-[2.7rem]">
            Guided by vision,{" "}
            <span className="text-brand">driven by service</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A6485]">
            The remarkable progress of the club has been made possible through
            visionary leadership and a dedicated team of executives.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          {/* Leader spotlight card */}
          <div className="reveal grid gap-8 rounded-[2rem] border border-[#E3E8F2] bg-white p-8 shadow-premium md:grid-cols-[auto_1fr] md:p-10 lg:gap-12">
            {/* Portrait + name block */}
            <div className="flex flex-col items-center text-center md:w-64">
              <div className="relative">
                <div className="size-40 rounded-full overflow-hidden shadow-premium-lg ring-4 ring-gold/20">
                  <img
                    src="/francis-aba.jpg"
                    alt="Mr. Francis Aba — Chairman of Progressive Youth Club"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 inline-flex size-12 items-center justify-center rounded-full gold-gradient text-[#182368] shadow-gold ring-4 ring-white">
                  <Crown className="size-5" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[#0E1530]">
                Mr. Francis Aba
              </h3>
              <p className="text-sm text-brand font-semibold">Chairman</p>
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
    </div>
  );
}

/* ─── 1c. Preserving Our Culture Through Music ──────────────────────────── */
function MusicCulture() {
  return (
    <div className="relative isolate overflow-hidden bg-[#0B1130] py-20 md:py-28">
      <img
        src={MUSIC_BG}
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

                {/* Album cover */}
                <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-premium-lg">
                  <img
                    src={MUSIC_IMG}
                    alt="Borborbor album cover — Nu Gawoe Nye Mawu Drado Di Nam by Progressive Youth Club, featuring the track list and group photo"
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
              <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Preserving Our Culture
              </div>
              <h2 className="reveal reveal-delay-1 mt-5 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.7rem]">
                Through <span className="text-gold">music</span>
              </h2>
              <div className="reveal reveal-delay-2 mt-6 space-y-5 text-[15px] leading-relaxed text-white/80">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 1d. Promoting Culture Through Digital Media + Festival ────────────── */
function DigitalMedia() {
  return (
    <div className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Promoting Culture Through Digital Media
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0E1530] md:text-4xl lg:text-[2.7rem]">
            PYC <span className="text-brand">Online Radio</span>
          </h2>
          <p className="mt-4 text-lg text-[#5A6485]">
            In keeping with modern communication trends, Progressive Youth Club
            has established its own online radio station to support the promotion
            of its music and cultural activities.
          </p>
        </div>

        {/* Radio station banner */}
        <div className="mx-auto mt-14 max-w-7xl">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   2. VISION AND MISSION  (id="vision-mission")
   ═══════════════════════════════════════════════════════════════════════════ */
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
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#5A6485]">
              <p>
                Progressive Youth Club exists to promote friendship, unity, love,
                and mutual support among its members while contributing
                positively to the communities in which they live.
              </p>
              <p>
                We believe that when individuals stand together, they become
                stronger, more resilient, and better equipped to overcome life's
                challenges. Through social activities, cultural programmes,
                music, and community engagement, we strive to build lasting
                relationships that positively impact generations.
              </p>
            </div>
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
              To be a leading social and cultural organization that inspires
              unity, preserves Ewe cultural heritage, promotes traditional music,
              and empowers communities through collective support and meaningful
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. OUR CORE VALUES  (id="core-values")
   ═══════════════════════════════════════════════════════════════════════════ */
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
            Our activities and decisions are guided by the following values:
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
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. OUR MOTTO  (id="our-motto")
   ═══════════════════════════════════════════════════════════════════════════ */
function OurMotto() {
  return (
    <div id="our-motto" className="relative isolate overflow-hidden bg-[#0B1130] py-20 md:py-28">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(39,65,181,0.55) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(212,175,55,0.25) 0%, transparent 45%)",
        }}
      />
      {/* Floating decorative blobs */}
      <div
        aria-hidden
        className="absolute top-10 left-10 -z-10 h-64 w-64 rounded-full bg-gold/15 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-[#2741B5]/40 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="section-pad relative">
        <div className="reveal mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Our Motto
          </div>

          {/* Decorative opening quote mark */}
          <div className="mt-8 text-7xl leading-none text-gold/30 font-display">
            &ldquo;
          </div>

          {/* The motto — large, gold gradient */}
          <h2 className="reveal reveal-delay-1 mt-2 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#E8C766] to-[#D4AF37] bg-clip-text text-transparent">
              We Stand for Support.
            </span>
          </h2>

          {/* Closing quote mark */}
          <div className="mt-2 text-7xl leading-none text-gold/30 font-display -scale-x-100">
            &ldquo;
          </div>

          {/* Motto explanation */}
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-white/80">
            This motto represents the very foundation upon which Progressive
            Youth Club was built. It reminds every member that no one stands
            alone. We celebrate together during moments of joy, support one
            another during difficult times, and work collectively to build a
            stronger, united family.
          </p>
        </div>

        {/* Looking Ahead sub-section */}
        <div className="reveal reveal-delay-3 mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
                <Sparkles className="size-3.5" />
                Looking Ahead
              </div>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/80">
                <p>
                  As Progressive Youth Club continues to grow, we remain
                  committed to expanding our cultural initiatives, strengthening
                  community partnerships, embracing innovation, and preserving
                  our rich traditions for future generations.
                </p>
                <p>
                  We welcome everyone who shares our vision of unity,
                  friendship, cultural excellence, and community development to
                  join us in building a brighter future together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement that re-quotes the motto */}
        <div className="reveal reveal-delay-4 mx-auto mt-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            Progressive Youth Club (PYC) continues to stand as a beacon of hope,
            culture, unity, and support — bringing people together through
            music, friendship, and service while proudly living by our enduring
            motto:
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#E8C766]/15 to-[#D4AF37]/15 border border-gold/30 px-8 py-4">
            <span className="text-2xl font-display font-extrabold bg-gradient-to-r from-[#E8C766] to-[#D4AF37] bg-clip-text text-transparent md:text-3xl">
              &ldquo;We Stand for Support.&rdquo;
            </span>
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
