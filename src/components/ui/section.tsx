import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full py-16 md:py-24", className)}
        {...props}
      >
        <div
          className={cn(
            "container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl",
            containerClassName
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
