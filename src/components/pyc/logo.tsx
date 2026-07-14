import * as React from "react";
import { cn } from "@/lib/utils";

interface PYCLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * - `full`: circular badge + wordmark "PYC Club" beside it (navbar, hero chip)
   * - `crest`: just the circular badge (small placements)
   * - `emblem`: the full square logo image, no wordmark (footer, about)
   * - `white`: circular badge + white wordmark (dark backgrounds)
   */
  variant?: "full" | "crest" | "emblem" | "white";
  className?: string;
  badgeClassName?: string;
}

/**
 * PYC Club logo — uses the official uploaded emblem (pyc-logo.png).
 * The emblem is a self-contained badge (solid navy background with the
 * circular crest, org name, tagline, and "PYC CLUB" wordmark baked in).
 *
 * Because the emblem already contains all branding text, we display it as
 * a circular badge (cropping the square corners) and optionally pair it
 * with a clean text wordmark for horizontal layouts like the navbar.
 */
export function PYCLogo({
  variant = "full",
  className,
  badgeClassName,
  ...props
}: PYCLogoProps) {
  // Just the badge image
  if (variant === "crest") {
    return (
      <img
        src="/pyc-logo-512.png"
        alt="PYC Club crest"
        width={48}
        height={48}
        className={cn(
          "rounded-full object-cover ring-1 ring-white/20 shadow-premium",
          className
        )}
        {...props}
      />
    );
  }

  // Full square emblem (footer, about section)
  if (variant === "emblem") {
    return (
      <img
        src="/pyc-logo.png"
        alt="Progressive Youth Club, Ho — PYC Club emblem"
        width={120}
        height={120}
        className={cn(
          "rounded-2xl object-cover shadow-premium",
          className
        )}
        {...props}
      />
    );
  }

  // Badge + wordmark (navbar / hero chip / footer brand on dark)
  const isWhite = variant === "white";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/pyc-logo-512.png"
        alt="PYC Club crest"
        width={44}
        height={44}
        className={cn(
          "rounded-full object-cover ring-1 ring-white/25 shadow-premium shrink-0",
          badgeClassName
        )}
        {...props}
      />
      <div className="leading-tight">
        <div
          className={cn(
            "font-display font-extrabold tracking-tight",
            isWhite ? "text-white text-xl" : "text-brand text-xl"
          )}
        >
          PYC{" "}
          <span className={isWhite ? "text-gold" : "text-gold"}>Club</span>
        </div>
        <div
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.18em]",
            isWhite ? "text-white/70" : "text-[#5A6485]"
          )}
        >
          Progressive Youth Club, Ho
        </div>
        <div
          className={cn(
            "text-[9px] font-bold uppercase tracking-[0.22em] text-gold"
          )}
        >
          We Stand For Support
        </div>
      </div>
    </div>
  );
}
