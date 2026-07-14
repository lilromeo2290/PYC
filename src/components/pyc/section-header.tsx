import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
            light
              ? "bg-white/10 text-[#E8C766] border border-white/15"
              : "bg-brand-soft/10 text-brand border border-brand/10"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.7rem]",
          light ? "text-white" : "text-[#0E1530]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-[#5A6485]",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
