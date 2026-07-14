"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pycButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand)] active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-premium hover:bg-brand-deep hover:shadow-premium-lg hover:-translate-y-0.5",
        gold:
          "gold-gradient text-[#182368] shadow-gold hover:-translate-y-0.5 hover:shadow-premium-lg",
        outline:
          "border-2 border-brand/20 bg-white/70 backdrop-blur text-brand hover:border-brand hover:bg-white hover:-translate-y-0.5",
        ghost:
          "text-brand hover:bg-brand-soft/10 hover:text-brand-deep",
        white:
          "bg-white text-brand shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5",
        link:
          "text-brand underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base py-3.5",
        xl: "h-14 px-10 text-base py-4",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface PYCButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof pycButtonVariants> {
  asChild?: boolean;
}

function PYCButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: PYCButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="pyc-button"
      className={cn(pycButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { PYCButton, pycButtonVariants };
