"use client";

import * as React from "react";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { SectionHeader } from "./section-header";
import { PYCButton } from "./button";

const EVENTS = [
  {
    date: "Aug 12, 2026",
    time: "09:00 AM",
    title: "International Youth Day Summit",
    location: "Ho Stadium, Volta Region",
    description:
      "A regional gathering of 1,000+ young leaders, policymakers, and partners discussing youth-led solutions to climate, jobs, and education.",
    badge: "Flagship",
  },
  {
    date: "Sep 05, 2026",
    time: "10:00 AM",
    title: "Volta Region Tree Planting Day",
    location: "12 districts across Volta",
    description:
      "Join 500 volunteers planting 3,000 indigenous trees in schools, churches, and along the Ho–Aflao road corridor.",
    badge: "Volunteer",
  },
  {
    date: "Oct 18, 2026",
    time: "02:00 PM",
    title: "PYC Skills Fair & Job Clinic",
    location: "Ho Technical University",
    description:
      "CV clinics, mock interviews, and on-the-spot recruitment with 20+ employers for graduates of PYC vocational bootcamps.",
    badge: "Career",
  },
  {
    date: "Nov 23, 2026",
    time: "06:00 PM",
    title: "Annual fundraising Gala: Hope in Action",
    location: "Cedi Conference Centre, Ho",
    description:
      "An evening of impact storytelling, music, and an auction — all proceeds fund PYC's 2027 scholarship pipeline.",
    badge: "Fundraiser",
  },
];

export function Events() {
  return (
    <section id="events" className="relative bg-surface py-20 md:py-28">
      <div className="section-pad">
        <SectionHeader
          eyebrow="Upcoming Events"
          title={
            <>
              Come <span className="text-brand">learn, serve, or celebrate</span>{" "}
              with us
            </>
          }
          description="From regional summits to community service days, there's a place for everyone at PYC events this year."
        />

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/30 via-brand/15 to-transparent md:-translate-x-1/2"
            />

            <ol className="space-y-8">
              {EVENTS.map((e, i) => (
                <li
                  key={e.title}
                  className={`reveal relative grid md:grid-cols-2 gap-6 ${
                    i % 2 === 0 ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Dot */}
                  <div
                    aria-hidden
                    className="absolute left-[19px] md:left-1/2 top-6 size-4 rounded-full bg-gold ring-4 ring-white md:-translate-x-1/2 z-10"
                  />

                  {/* Card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:col-start-2 [direction:ltr]"
                    }`}
                  >
                    <div className="inline-block rounded-2xl bg-white border border-[#E3E8F2] p-6 shadow-premium hover:shadow-premium-lg transition-all hover:-translate-y-1">
                      <span className="inline-flex items-center rounded-full bg-brand-soft/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
                        {e.badge}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold text-[#0E1530]">
                        {e.title}
                      </h3>
                      <div
                        className={`mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-[#5A6485] ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-brand" />
                          {e.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-brand" />
                          {e.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-brand" />
                          {e.location}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A6485]">
                        {e.description}
                      </p>
                      <div
                        className={`mt-5 ${
                          i % 2 === 0 ? "md:flex md:justify-end" : ""
                        }`}
                      >
                        <PYCButton asChild variant="outline" size="sm">
                          <a href="#contact">
                            Register Now <ArrowRight className="size-4" />
                          </a>
                        </PYCButton>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
