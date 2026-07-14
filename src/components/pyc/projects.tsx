"use client";

import * as React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./section-header";

const PROJECTS = [
  {
    title: "Ho Clean Water Initiative",
    location: "Ho Municipality, Volta Region",
    description:
      "Borehole rehabilitation and hygiene education reaching 8 rural communities with safe drinking water for the first time.",
    image:
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=1200&q=80",
    tag: "WASH",
    large: true,
  },
  {
    title: "Girls in STEM Bootcamp",
    location: "Ho, Ghana",
    description:
      "A 6-week coding and robotics intensive for 60 senior high school girls.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    tag: "Education",
    large: false,
  },
  {
    title: "Volta Tree Planting Drive",
    location: "Across 12 districts",
    description:
      "5,000+ indigenous trees planted with schools and faith groups to restore degraded land.",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=900&q=80",
    tag: "Environment",
    large: false,
  },
  {
    title: "Youth Mental Health First Aid",
    location: "Ho & surrounding towns",
    description:
      "Training 80 youth leaders as certified mental health first-aid responders in their schools and churches.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    tag: "Health",
    large: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-white py-20 md:py-28">
      <div className="section-pad">
        <SectionHeader
          eyebrow="Featured Projects"
          title={
            <>
              Real work, <span className="text-brand">real results</span> on the
              ground
            </>
          }
          description="From clean water to classrooms to climate action — these are the projects your support makes possible."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl shadow-premium ${
                p.large ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${p.large ? "h-[420px] lg:h-full min-h-[420px]" : "h-72"}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1130]/95 via-[#0B1130]/40 to-transparent"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#182368]">
                  {p.tag}
                </span>
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
                    <MapPin className="size-3.5 text-gold" />
                    {p.location}
                  </div>
                  <h3
                    className={`mt-2 font-display font-bold leading-tight ${
                      p.large ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm text-white/75 leading-relaxed ${
                      p.large ? "max-w-xl" : ""
                    }`}
                  >
                    {p.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur border border-white/20 transition-all hover:bg-white hover:text-brand"
                  >
                    Read More
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
