import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-surface-container-lowest)] border-t-4 border-[var(--color-on-surface)]">
      <div className="w-full px-[var(--spacing-gutter)] py-[var(--spacing-space-lg)] flex flex-col md:flex-row items-center justify-between gap-[var(--spacing-space-md)]">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)] uppercase">HADID R.N.</span>
            <span className="px-2 py-0.5 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-black">SYS_ONLINE</span>
          </div>
          <p className="font-body-sm text-[var(--font-body-sm)] text-[var(--color-on-surface-variant)]">
            © 2024 HADID RAYYAN NANDANA. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-[var(--spacing-space-sm)]">
          <div className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] font-label-code text-[var(--font-label-code)] text-[var(--color-on-surface)]">
            <span className="text-[var(--color-primary)] font-bold">&gt;_</span> STATUS: ACTIVE V2.4
          </div>
          <div className="flex items-center gap-2">
            <a 
              className="p-1.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              href="https://github.com/Kendid29"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a 
              className="p-1.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              href="https://www.linkedin.com/in/hadid-rayyan-nandana-baa42b378"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a 
              className="p-1.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              href="mailto:harana2912@gmail.com"
            >
              EMAIL
            </a>
            <a 
              className="tactile-btn p-1.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-on-surface)] hover:text-[var(--color-surface)] transition-all flex items-center gap-1 cursor-pointer"
              href="#hero"
              title="Return to Top"
            >
              <span>TOP</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
