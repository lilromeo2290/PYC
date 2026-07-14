"use client";

import * as React from "react";
import { Navbar } from "@/components/pyc/navbar";
import { Hero } from "@/components/pyc/hero";
import { About } from "@/components/pyc/about";
import { Programs } from "@/components/pyc/programs";
import { Impact } from "@/components/pyc/impact";
import { Projects } from "@/components/pyc/projects";
import { Stories } from "@/components/pyc/stories";
import { Events } from "@/components/pyc/events";
import { Volunteer } from "@/components/pyc/volunteer";
import { Donate } from "@/components/pyc/donate";
import { Gallery } from "@/components/pyc/gallery";
import { News } from "@/components/pyc/news";
import { Partners } from "@/components/pyc/partners";
import { Contact } from "@/components/pyc/contact";
import { Footer } from "@/components/pyc/footer";
import { FloatingActions } from "@/components/pyc/floating-actions";
import { useScrollReveal } from "@/components/pyc/use-scroll-reveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Projects />
        <Stories />
        <Events />
        <Volunteer />
        <Donate />
        <Gallery />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
