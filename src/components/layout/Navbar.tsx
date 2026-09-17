"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[var(--color-surface-container-lowest)] border-b-4 border-[var(--color-on-surface)]">
        <div className="h-20 w-full px-[var(--spacing-gutter)] flex items-center justify-between">
          <div className="flex items-center gap-[var(--spacing-space-sm)]">
            <Link href="#hero" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95">
                <Image
                  src="/icon.png"
                  alt="Hadid R.N. Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)] tracking-tight uppercase hover:text-[var(--color-primary)] transition-colors">
                HADID R.N.
              </span>
            </Link>
            <span className="hidden sm:inline-flex px-[var(--spacing-space-xs)] py-0.5 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold">
              RPL / DEV
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-[var(--spacing-space-sm)]">
            <Link href="#about" className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              ABOUT
            </Link>
            <Link href="#works" className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-tertiary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              WORKS
            </Link>
            <Link href="#skills" className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-tertiary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              SKILLS
            </Link>
            <Link href="#journey" className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-tertiary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              JOURNEY
            </Link>
            <Link href="#beyond" className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-secondary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              BEYOND
            </Link>
            <Link href="#contact" className="px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-surface)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center gap-[var(--spacing-space-sm)]">
            <div className="hidden xl:flex items-center gap-2 px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] animate-pulse border border-[var(--color-on-surface)]"></span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold uppercase">
                AVAILABLE FOR WORK
              </span>
            </div>

            <a
              className="hidden sm:inline-flex items-center px-[var(--spacing-space-sm)] py-1.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              href="https://github.com/Kendid29"
              rel="noopener noreferrer"
              target="_blank"
            >
              GITHUB ↗
            </a>
            
            <Image
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)]"
              src="/images/profile/profile.webp"
              width={32}
              height={32}
            />

            <button
              className="lg:hidden flex items-center justify-center p-1 border-2 border-[var(--color-on-surface)] bg-[var(--color-surface-container-lowest)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-surface-container-lowest)] p-[var(--spacing-space-md)] shadow-[6px_6px_0px_0px_var(--color-on-surface)] border-b-4 border-[var(--color-on-surface)] lg:hidden">
          <div className="flex items-center justify-between pb-[var(--spacing-space-sm)] border-b-2 border-[var(--color-on-surface)]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[1px_1px_0px_0px_var(--color-on-surface)]"></span>
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)] uppercase">
                SYS_INDEX
              </span>
            </div>
            <button
              className="p-1.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg className="w-5 h-5 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-[var(--spacing-space-sm)] py-[var(--spacing-space-md)]">
            <Link href="#about" onClick={() => setIsDrawerOpen(false)} className="flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[var(--color-primary-container)]">
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)]">01. ABOUT</span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface-variant)]">SYS_PHILOSOPHY ↗</span>
            </Link>
            <Link href="#works" onClick={() => setIsDrawerOpen(false)} className="flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[var(--color-tertiary-container)]">
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)]">02. WORKS</span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface-variant)]">SHIPPED_PROD ↗</span>
            </Link>
            <Link href="#skills" onClick={() => setIsDrawerOpen(false)} className="flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[var(--color-primary-container)]">
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)]">03. SKILLS</span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface-variant)]">STACK_MATRIX ↗</span>
            </Link>
            <Link href="#journey" onClick={() => setIsDrawerOpen(false)} className="flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[var(--color-secondary-container)]">
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)]">04. JOURNEY</span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface-variant)]">EXPEDITION ↗</span>
            </Link>
            <Link href="#beyond" onClick={() => setIsDrawerOpen(false)} className="flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[var(--color-tertiary-container)]">
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)]">05. BEYOND</span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface-variant)]">TINKERING ↗</span>
            </Link>
            <Link href="#contact" onClick={() => setIsDrawerOpen(false)} className="flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[var(--color-primary-container)]">
              <span className="font-headline-sm text-[var(--font-headline-sm)] text-[var(--color-on-surface)]">06. CONTACT</span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface-variant)]">TRANSMIT ↗</span>
            </Link>
          </div>

          <div className="mt-auto p-3 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold">READY FOR INTERNSHIP</span>
            </div>
            <span className="font-label-code text-[var(--font-label-code)] text-[var(--color-on-surface-variant)]">REV_2024.12</span>
          </div>
        </div>
      )}
    </>
  );
}
