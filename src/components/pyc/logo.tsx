import * as React from "react";
import { cn } from "@/lib/utils";

interface PYCLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "full" | "crest" | "white";
  className?: string;
}

/**
 * PYC Club logo. `full` shows crest + wordmark, `crest` shows just the shield,
 * `white` is the full wordmark on dark backgrounds (used in footer/hero).
 */
export function PYCLogo({ variant = "full", className, ...props }: PYCLogoProps) {
  if (variant === "crest") {
    return (
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="PYC Club crest"
        className={cn("h-10 w-10", className)}
        {...props}
      >
        <defs>
          <linearGradient id="crestBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2741B5" />
            <stop offset="100%" stopColor="#1F2E8A" />
          </linearGradient>
          <linearGradient id="crestGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8C766" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <path d="M24 1 L46 8 V25 C46 38 36 46 24 47 C12 46 2 38 2 25 V8 Z" fill="url(#crestBlue)" />
        <path d="M24 1 L46 8 V25 C46 38 36 46 24 47 C12 46 2 38 2 25 V8 Z" fill="none" stroke="url(#crestGold)" strokeWidth="1.4" />
        <path d="M24 35 V18 M24 18 L17 24 M24 18 L31 24 M24 23 L13 30 M24 23 L35 30" stroke="url(#crestGold)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="18" r="3" fill="url(#crestGold)" />
        <g fill="#FFFFFF">
          <circle cx="13" cy="39" r="2" />
          <rect x="11.4" y="41" width="3.2" height="4" rx="1" />
          <circle cx="24" cy="39" r="2.2" />
          <rect x="22" y="41" width="4" height="4.5" rx="1" />
          <circle cx="35" cy="39" r="2" />
          <rect x="33.4" y="41" width="3.2" height="4" rx="1" />
        </g>
      </svg>
    );
  }

  const isWhite = variant === "white";
  const wordmark = isWhite ? "#FFFFFF" : "#1F2E8A";
  const subtitle = isWhite ? "rgba(255,255,255,0.75)" : "#5A6485";
  const tagline = isWhite ? "#E8C766" : "#D4AF37";

  return (
    <svg
      viewBox="0 0 240 64"
      role="img"
      aria-label="Progressive Youth Club, Ho — PYC Club"
      className={cn("h-12 w-auto", className)}
      {...props}
    >
      <defs>
        <linearGradient id="logoBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2741B5" />
          <stop offset="100%" stopColor="#1F2E8A" />
        </linearGradient>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C766" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      <g transform="translate(8,8)">
        <path d="M24 0 L46 7 V24 C46 38 36 47 24 48 C12 47 2 38 2 24 V7 Z" fill="url(#logoBlue)" />
        <path d="M24 0 L46 7 V24 C46 38 36 47 24 48 C12 47 2 38 2 24 V7 Z" fill="none" stroke="url(#logoGold)" strokeWidth="1.5" />
        <path d="M24 36 V18 M24 18 L17 25 M24 18 L31 25 M24 24 L13 31 M24 24 L35 31" stroke="url(#logoGold)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="18" r="3.4" fill="url(#logoGold)" />
        <g fill="#FFFFFF" opacity="0.95">
          <circle cx="13" cy="40" r="2.2" />
          <rect x="11.2" y="42.2" width="3.6" height="4.5" rx="1.2" />
          <circle cx="24" cy="40" r="2.4" />
          <rect x="22" y="42.4" width="4" height="5" rx="1.2" />
          <circle cx="35" cy="40" r="2.2" />
          <rect x="33.2" y="42.2" width="3.6" height="4.5" rx="1.2" />
        </g>
      </g>
      <g transform="translate(70,0)">
        <text x="0" y="28" fontFamily="Poppins, Arial, sans-serif" fontSize="22" fontWeight="700" fill={wordmark} letterSpacing="0.5">
          PYC <tspan fill={isWhite ? "#E8C766" : "#D4AF37"}>Club</tspan>
        </text>
        <text x="0" y="48" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="500" fill={subtitle} letterSpacing="2.5">
          PROGRESSIVE YOUTH CLUB, HO
        </text>
        <text x="0" y="60" fontFamily="Inter, Arial, sans-serif" fontSize="9.5" fontWeight="600" fill={tagline} letterSpacing="3">
          WE STAND FOR SUPPORT
        </text>
      </g>
    </svg>
  );
}
