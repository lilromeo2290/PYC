"use client";

import * as React from "react";
import { Heart, ShieldCheck, Repeat, Sparkles } from "lucide-react";
import { PYCButton } from "./button";
import { cn } from "@/lib/utils";

const PRESETS = [10, 25, 50];

const IMPACT = [
  { amount: 10, label: "Buys a school kit for one child" },
  { amount: 25, label: "Funds a tree-planting micro-project" },
  { amount: 50, label: "Sponsors one month of STEM bootcamp" },
];

export function Donate() {
  const [selected, setSelected] = React.useState<number | "custom">(25);
  const [custom, setCustom] = React.useState("");

  const activeAmount =
    selected === "custom" ? Number(custom) || 0 : selected;

  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-white to-[#EEF2FB] py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-brand-soft/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="section-pad relative">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/10 border border-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Donate
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#0E1530] md:text-4xl lg:text-[2.7rem]">
              Together We Can{" "}
              <span className="text-brand">Change Lives</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5A6485]">
              Every cedi, dollar, and pound you give goes directly into programs
              that empower young people, restore ecosystems, and uplift families
              in the Volta Region. Your generosity is the engine of our mission.
            </p>

            <ul className="mt-8 space-y-3">
              {IMPACT.map((it) => (
                <li
                  key={it.amount}
                  className="flex items-center gap-3 rounded-2xl border border-[#E3E8F2] bg-white p-4 shadow-premium"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-xl gold-gradient text-[#182368] font-display font-bold">
                    ${it.amount}
                  </div>
                  <span className="text-sm font-medium text-[#0E1530]">
                    {it.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#5A6485]">
              <ShieldCheck className="size-4 text-brand" />
              100% secure, tax-deductible. Registered NGO — Ghana DSW/xxxx.
            </div>
          </div>

          {/* Right donation card */}
          <div className="reveal reveal-delay-2">
            <div className="relative overflow-hidden rounded-[2rem] brand-gradient p-8 md:p-10 text-white shadow-premium-lg">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl"
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[#E8C766]">
                  <Sparkles className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Make your impact
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                  Choose your gift
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Select an amount or enter your own.
                </p>

                {/* Amount grid */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {PRESETS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelected(amt)}
                      aria-pressed={selected === amt}
                      className={cn(
                        "h-14 rounded-2xl border text-lg font-bold transition-all",
                        selected === amt
                          ? "border-gold bg-gold text-[#182368] shadow-gold"
                          : "border-white/20 bg-white/10 text-white hover:border-white/40"
                      )}
                    >
                      ${amt}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelected("custom")}
                    aria-pressed={selected === "custom"}
                    className={cn(
                      "h-14 col-span-2 rounded-2xl border text-lg font-bold transition-all flex items-center justify-center gap-2",
                      selected === "custom"
                        ? "border-gold bg-gold text-[#182368] shadow-gold"
                        : "border-white/20 bg-white/10 text-white hover:border-white/40"
                    )}
                  >
                    Custom Amount
                  </button>
                </div>

                {selected === "custom" && (
                  <div className="mt-3">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 font-bold">
                        $
                      </span>
                      <input
                        type="number"
                        min={1}
                        value={custom}
                        onChange={(e) => setCustom(e.target.value)}
                        placeholder="Enter amount"
                        aria-label="Custom donation amount"
                        className="h-14 w-full rounded-2xl border border-white/20 bg-white/10 pl-9 pr-4 text-lg font-bold text-white placeholder:text-white/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                  </div>
                )}

                <p className="mt-4 text-center text-sm text-white/70">
                  You are giving{" "}
                  <span className="font-bold text-gold">
                    ${activeAmount.toLocaleString() || 0}
                  </span>{" "}
                  today.
                </p>

                <PYCButton
                  asChild
                  variant="gold"
                  size="xl"
                  className="mt-4 w-full"
                >
                  <a href="#contact">
                    <Heart className="size-5" /> Donate Securely
                  </a>
                </PYCButton>

                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60">
                  <Repeat className="size-4 text-gold" />
                  Want to give monthly?{" "}
                  <a href="#contact" className="text-gold underline underline-offset-2">
                    Become a monthly donor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
