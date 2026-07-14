"use client";

import * as React from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./section-header";

const STORIES = [
  {
    name: "Akosua Mensah",
    role: "Volunteer, Education Program",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
    rating: 5,
    quote:
      "Joining PYC Club as a tutor changed how I see my own community. Watching a child who couldn't read in Primary 4 win a regional essay contest six months later — that's the kind of moment you carry forever.",
  },
  {
    name: "Yaw Adzah",
    role: "Community Member, Ho",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
    rating: 5,
    quote:
      "When PYC came to rehabilitate our borehole, my daughters no longer walked three kilometres every morning for water. They go to school on time now. That is what development looks like.",
  },
  {
    name: "Emefa Kportufe",
    role: "Youth Leader, STEM Bootcamp",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
    rating: 5,
    quote:
      "I built my first mobile app at the PYC Girls in STEM bootcamp at age 16. Today I'm studying computer science at KNUST. PYC didn't just teach me to code — they showed me I belonged in tech.",
  },
  {
    name: "Samuel Dzamesi",
    role: "Volunteer, Environment Program",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
    rating: 5,
    quote:
      "We planted 1,200 trees with 14 schools last year. Watching students return each term to water and measure their saplings — that's stewardship PYC instilled, not just something we did for a day.",
  },
];

export function Stories() {
  const [active, setActive] = React.useState(0);
  const count = STORIES.length;

  const go = (dir: number) => setActive((p) => (p + dir + count) % count);

  React.useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % count), 7000);
    return () => clearInterval(id);
  }, [count]);

  const current = STORIES[active];

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-white to-[#EEF2FB] py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-soft/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="section-pad relative">
        <SectionHeader
          eyebrow="Success Stories"
          title={
            <>
              Voices from the <span className="text-brand">community</span> we
              serve
            </>
          }
          description="Real people, real transformations. These are the stories that remind us why we show up every day."
        />

        <div className="reveal mx-auto mt-12 max-w-4xl">
          <div className="relative rounded-[2rem] bg-white p-8 md:p-12 shadow-premium-lg border border-[#E3E8F2]">
            <Quote
              className="absolute -top-6 left-8 size-16 text-gold/30"
              aria-hidden
            />

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-gold text-gold"
                  aria-hidden
                />
              ))}
            </div>

            <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-[#0E1530] md:text-2xl lg:text-[1.7rem] lg:leading-relaxed">
              "{current.quote}"
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="size-14 rounded-full object-cover ring-4 ring-gold/30"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-1 -right-1 inline-flex size-5 items-center justify-center rounded-full bg-brand text-white text-[10px]">
                    ✓
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-[#0E1530]">
                    {current.name}
                  </p>
                  <p className="text-sm text-[#5A6485]">{current.role}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous story"
                  onClick={() => go(-1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[#E3E8F2] bg-white text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  aria-label="Next story"
                  onClick={() => go(1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[#E3E8F2] bg-white text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {STORIES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to story ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-brand" : "w-2 bg-brand/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
