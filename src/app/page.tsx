"use client";

import * as React from "react";
import { Navbar } from "@/components/pyc/navbar";
import { Hero } from "@/components/pyc/hero";
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
        <Programs />
        <Projects />
        <Events />
        <Volunteer />
        <Donate />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
