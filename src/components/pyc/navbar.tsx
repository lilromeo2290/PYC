"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { PYCLogo } from "./logo";
import { PYCButton } from "./button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E3E8F2] shadow-[0_4px_30px_-12px_rgba(31,46,138,0.18)] py-2.5"
          : "bg-gradient-to-b from-black/35 via-black/15 to-transparent py-4"
      )}
    >
      <nav className="section-pad flex items-center justify-between gap-6">
        {/* Logo — white wordmark over hero, dark navy once scrolled */}
        <Link href="#home" aria-label="PYC Club home" className="flex items-center">
          <PYCLogo
            variant={scrolled ? "full" : "white"}
            badgeClassName="size-11 md:size-12"
          />
        </Link>

        {/* Desktop nav — white text over hero, dark navy once scrolled */}
        <ul className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors group",
                  scrolled
                    ? "text-[#0E1530]/80 hover:text-brand"
                    : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]"
                )}
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <PYCButton
            asChild
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="#donate">
              <Heart className="size-4" /> Donate Now
            </a>
          </PYCButton>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={cn(
                  "xl:hidden inline-flex size-11 items-center justify-center rounded-full transition-colors",
                  scrolled
                    ? "bg-brand-soft/10 text-brand hover:bg-brand-soft/15"
                    : "bg-white/15 text-white backdrop-blur hover:bg-white/25 ring-1 ring-white/20"
                )}
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l-0 p-0 bg-white"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-[#E3E8F2]">
                  <PYCLogo badgeClassName="size-10" />
                  <SheetClose asChild>
                    <button
                      aria-label="Close menu"
                      className="inline-flex size-10 items-center justify-center rounded-full bg-surface text-brand hover:bg-brand-soft/10"
                    >
                      <X className="size-5" />
                    </button>
                  </SheetClose>
                </div>
                <ul className="flex flex-col p-3 overflow-y-auto thin-scroll">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="block rounded-xl px-4 py-3 text-base font-medium text-[#0E1530] hover:bg-brand-soft/8 hover:text-brand"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto p-5 border-t border-[#E3E8F2] space-y-3">
                  <PYCButton asChild variant="primary" size="lg" className="w-full">
                    <a href="#donate">
                      <Heart className="size-4" /> Donate Now
                    </a>
                  </PYCButton>
                  <PYCButton asChild variant="outline" size="lg" className="w-full">
                    <a href="#volunteer">Join as Volunteer</a>
                  </PYCButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
