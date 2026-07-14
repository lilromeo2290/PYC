"use client";

import * as React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "./section-header";
import { PYCButton } from "./button";

const POSTS = [
  {
    title: "How 5 PYC scholars just graduated with first-class honours",
    excerpt:
      "Meet five students whose PYC scholarships carried them through university — and the mentors who walked every step with them.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    date: "Jul 02, 2026",
    category: "Education",
    readTime: "5 min read",
  },
  {
    title: "Inside the Ho Clean Water Initiative: 8 boreholes, 8 stories",
    excerpt:
      "A photo-essay from the field — what safe water means for the women, children, and schools of these eight villages.",
    image:
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=900&q=80",
    date: "Jun 18, 2026",
    category: "Community",
    readTime: "7 min read",
  },
  {
    title: "Girls in STEM: why our 2026 cohort is our most ambitious yet",
    excerpt:
      "From robotics kits to mentorship pairs, here's what's new in our flagship bootcamp for senior high girls.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    date: "Jun 01, 2026",
    category: "Programs",
    readTime: "4 min read",
  },
];

export function News() {
  return (
    <section id="news" className="relative bg-surface py-20 md:py-28">
      <div className="section-pad">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="News & Blog"
            title={
              <>
                Latest from <span className="text-brand">the field</span>
              </>
            }
            description="Stories, insights, and updates from PYC Club's work across the Volta Region."
            className="max-w-2xl"
          />
          <PYCButton asChild variant="outline" size="md" className="shrink-0">
            <a href="#news">
              View All Posts <ArrowRight className="size-4" />
            </a>
          </PYCButton>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${i + 1} group flex flex-col overflow-hidden rounded-3xl border border-[#E3E8F2] bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-[#5A6485]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {p.date}
                  </span>
                  <span aria-hidden>•</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-[#0E1530] group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6485]">
                  {p.excerpt}
                </p>
                <a
                  href="#news"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep mt-auto"
                >
                  Read More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
