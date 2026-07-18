"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
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

const NAV_LINKS: {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}[] = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about",
    submenu: [
      { label: "Our History", href: "#our-history" },
      { label: "Vision and Mission", href: "#vision-mission" },
      { label: "Our Core Values", href: "#core-values" },
      { label: "Our Motto", href: "#our-motto" },
      { label: "Executives", href: "#executives" },
    ],
  },
  { label: "What We Do", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Media", href: "/media" },
  { label: "Events", href: "#events" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mobileSubOpen, setMobileSubOpen] = React.useState(false);

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
        {/* Logo */}
        <Link href="#home" aria-label="PYC Club home" className="flex items-center">
          <PYCLogo
            variant={scrolled ? "full" : "white"}
            badgeClassName="size-11 md:size-12"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.submenu ? (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors group inline-flex items-center gap-1",
                    scrolled
                      ? "text-[#0E1530]/80 hover:text-brand"
                      : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]"
                  )}
                >
                  {link.label}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0">
                  <ul className="min-w-[220px] rounded-2xl border border-[#E3E8F2] bg-white shadow-premium-lg overflow-hidden">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <a
                          href={sub.href}
                          className="block px-5 py-3 text-sm font-medium text-[#0E1530] hover:bg-brand-soft/8 hover:text-brand transition-colors border-b border-[#E3E8F2] last:border-b-0"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
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
            )
          )}
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
                  {NAV_LINKS.map((link) =>
                    link.submenu ? (
                      <li key={link.href}>
                        <button
                          onClick={() => setMobileSubOpen((p) => !p)}
                          aria-expanded={mobileSubOpen}
                          className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[#0E1530] hover:bg-brand-soft/8 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform",
                              mobileSubOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileSubOpen && (
                          <ul className="ml-4 border-l-2 border-brand/10 pl-2 mb-1">
                            {link.submenu.map((sub) => (
                              <li key={sub.href}>
                                <SheetClose asChild>
                                  <a
                                    href={sub.href}
                                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#5A6485] hover:bg-brand-soft/8 hover:text-brand transition-colors"
                                  >
                                    {sub.label}
                                  </a>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <a
                            href={link.href}
                            className="block rounded-xl px-4 py-3 text-base font-medium text-[#0E1530] hover:bg-brand-soft/8 hover:text-brand transition-colors"
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      </li>
                    )
                  )}
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
