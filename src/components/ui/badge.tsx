import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "tertiary" | "accent-green" | "accent-violet";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--color-white)]",
    primary: "bg-[var(--color-primary)]",
    secondary: "bg-[var(--color-secondary)]",
    tertiary: "bg-[var(--color-tertiary)]",
    "accent-green": "bg-[var(--color-accent-green)]",
    "accent-violet": "bg-[var(--color-accent-violet)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border-[2px] border-[var(--color-obsidian)] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-obsidian)]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
