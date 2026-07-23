import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { PYCLogo } from "./logo";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "What We Do", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
];

const PROGRAMS = [
  { label: "Youth Empowerment", href: "#programs" },
  { label: "Education Support", href: "#programs" },
  { label: "Community Development", href: "#programs" },
  { label: "Health Awareness", href: "#programs" },
  { label: "Environmental Protection", href: "#programs" },
  { label: "Women's Empowerment", href: "#programs" },
];

const RESOURCES = [
  { label: "Annual Reports", href: "#about" },
  { label: "Partner With Us", href: "#volunteer" },
  { label: "Donate", href: "#donate" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0B1130] text-white">
      {/* Decorative gradient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(39,65,181,0.45) 0%, transparent 45%), radial-gradient(circle at 100% 100%, rgba(212,175,55,0.18) 0%, transparent 40%)",
        }}
      />

      {/* Main footer grid */}
      <div className="relative section-pad py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <PYCLogo
                variant="emblem"
                className="size-20 rounded-2xl shadow-premium-lg ring-1 ring-white/10"
              />
              <div>
                <div className="font-display text-2xl font-extrabold text-white">
                  PYC <span className="text-gold">Club</span>
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  Progressive Youth Club, Ho
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                  We Stand For Support
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-sm">
              Progressive Youth Club, Ho is a youth-led non-governmental
              organization dedicated to empowering young people through
              education, leadership, community development, advocacy, and social
              support across the Volta Region of Ghana.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-gold shrink-0" />
                <span>Ho, Volta Region, Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-gold shrink-0" />
                <span className="flex flex-col">
                  <a href="tel:+233540737813" className="hover:text-gold">
                    054 073 7813
                  </a>
                  <a href="tel:+233243717212" className="hover:text-gold">
                    024 371 7212
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-gold shrink-0" />
                <a href="mailto:info@pycclub.org" className="hover:text-gold">
                  info@pycclub.org
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-gold hover:text-[#182368] transition-colors"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Programs
            </h4>
            <ul className="mt-5 space-y-3">
              {PROGRAMS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Resources
            </h4>
            <ul className="mt-5 space-y-3">
              {RESOURCES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="section-pad py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/55 md:flex-row">
            <p>
              © {new Date().getFullYear()} Progressive Youth Club, Ho. All rights reserved.
            </p>
            <p>
              Developed and Designed by{" "}
              <a
                href="https://clipe233eng.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:text-[#E8C766] transition-colors"
              >
                CLIPE CONSULT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
