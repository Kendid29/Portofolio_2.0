import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? (props as { href?: string }).href ? "a" : "button" : "button";
    
    const variants = {
      primary: "bg-[var(--color-primary)] border-[3px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-md)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-[var(--color-obsidian)] font-display uppercase tracking-wider font-bold",
      secondary: "bg-[var(--color-white)] border-[3px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-md)] hover:bg-[var(--color-tertiary)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-[var(--color-obsidian)] font-display uppercase tracking-wider font-bold",
      destructive: "bg-[var(--color-secondary)] border-[3px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-sm)] hover:shadow-[var(--shadow-neo-md)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-[var(--color-obsidian)] font-display uppercase tracking-wider font-bold",
      ghost: "hover:bg-black/5 text-[var(--color-obsidian)] font-display uppercase font-bold",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-10 px-4 text-sm",
      lg: "h-14 px-8 text-lg",
      icon: "h-12 w-12 flex items-center justify-center",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obsidian disabled:pointer-events-none disabled:opacity-50",
          variants[variant as keyof typeof variants],
          sizes[size as keyof typeof sizes],
          className
        )}
        ref={ref as any}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
