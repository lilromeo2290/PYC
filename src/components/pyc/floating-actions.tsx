"use client";

import * as React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setShowTop(scrollTop > 600);
      setProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-1 gold-gradient transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      {/* Floating donate button - bottom right */}
      <a
        href="#donate"
        aria-label="Donate now"
        className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-3.5 text-sm font-semibold text-[#182368] shadow-gold hover:shadow-premium-lg hover:-translate-y-0.5 transition-all animate-pulse-gold"
      >
        <Heart className="size-4 fill-current" />
        <span className="hidden sm:inline">Donate</span>
      </a>

      {/* Back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-24 right-6 z-50 inline-flex size-12 items-center justify-center rounded-full bg-brand text-white shadow-premium hover:bg-brand-deep transition-all",
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
}
