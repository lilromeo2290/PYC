"use client";

import * as React from "react";
import { Navbar } from "@/components/pyc/navbar";
import { Hero } from "@/components/pyc/hero";
import { About } from "@/components/pyc/about";
import { Executives } from "@/components/pyc/executives";
import { Programs } from "@/components/pyc/programs";
import { Projects } from "@/components/pyc/projects";
import { Events } from "@/components/pyc/events";
import { Volunteer } from "@/components/pyc/volunteer";
import { Donate } from "@/components/pyc/donate";
import { Gallery } from "@/components/pyc/gallery";
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
        <Executives />
        <Programs />
        <Projects />
        <Events />
        <Volunteer />
        <Donate />
        <Gallery limit={6} showViewMore />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
