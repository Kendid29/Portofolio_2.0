"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = card.parentElement;
    if (!container) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = ((x - centerX) / centerX) * 9;
        const rotateX = -((y - centerY) / centerY) * 9;

        const shadowX = 10 - (rotateY * 0.6);
        const shadowY = 10 + (rotateX * 0.6);

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.boxShadow = `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 0px 0px #1c1b1b`;
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.boxShadow = "10px 10px 0px 0px #1c1b1b";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-surface)] border-b-4 border-[var(--color-on-surface)]" id="hero" style={{ backgroundImage: "radial-gradient(var(--color-on-surface) 1.25px, transparent 1.25px)", backgroundSize: "28px 28px" }}>
      {/* Top System Diagnostic Bar */}
      <div className="w-full bg-[var(--color-surface-container-high)] border-b-2 border-[var(--color-on-surface)] px-[var(--spacing-gutter)] py-2 flex flex-wrap items-center justify-between gap-2 font-label-code text-[var(--font-label-code)]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)]"></span>
          <span className="text-[var(--color-on-surface)] font-bold">KERNEL://HADID_RN.SYS.V2.4</span>
          <span className="hidden md:inline-block px-1.5 py-0.5 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] text-[var(--color-on-surface)] text-[11px] font-bold">INDEX: 0x7FFE</span>
        </div>
        <div className="flex items-center gap-4 text-[var(--font-body-sm)] text-[var(--color-on-surface-variant)] font-medium">
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] animate-ping"></span>
            SYS_STATUS: ACTIVE
          </span>
          <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border border-[var(--color-on-surface)] font-label-code text-[12px] text-[var(--color-on-surface)] font-bold">PORT: 8080</span>
        </div>
      </div>

      {/* Main Hero Matrix */}
      <div className="w-full max-w-7xl mx-auto px-[var(--spacing-gutter)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typography & Intent Engine (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-[var(--spacing-space-md)] z-10">
            {/* High-Octane Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 anim-spring-1">
              <div className="inline-flex items-center gap-2 px-[var(--spacing-space-sm)] py-1 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1c1b1b] transition-all">
                <svg className="w-4 h-4 text-[var(--color-primary)] font-bold animate-bounce" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold tracking-wider">
                  12TH GRADE RPL STUDENT · FRONTEND &amp; FULL-STACK EXPLORER
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center px-2 py-1 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] float-badge-1 cursor-default select-none">
                <span className="font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-black">INTERNSHIP READY</span>
              </div>
            </div>

            {/* Headline Stack with Staggered Neo-Brutalist Words */}
            <div className="relative flex flex-col pt-2">
              <div className="flex items-center gap-2 -mb-2 anim-spring-2">
                <span className="px-2.5 py-0.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-code text-[12px] text-[var(--color-on-surface)] font-bold uppercase rotate-1">
                  // SYSTEM ARCHITECT
                </span>
                <span className="px-2 py-0.5 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold float-badge-2 cursor-default select-none">
                  100% HAND-CRAFTED CODE
                </span>
              </div>
              <h1 className="font-display text-[42px] sm:text-[60px] lg:text-[76px] leading-[0.98] tracking-tighter text-[var(--color-on-surface)] font-extrabold uppercase mt-2">
                <span className="inline-block anim-spring-2">BUILDING</span>{" "}
                <span className="bg-[var(--color-primary-container)] px-2 py-0.5 border-4 border-[var(--color-on-surface)] shadow-[5px_5px_0px_0px_#1c1b1b] inline-block -rotate-1 anim-spring-3 hover:rotate-0 transition-transform duration-200">IDEAS,</span><br/>
                <span className="inline-block anim-spring-4">EXPLORING</span>{" "}
                <span className="relative inline-block mt-2 anim-spring-5">
                  <span className="relative z-10 text-[var(--color-on-surface)]">SYSTEMS.</span>
                  <span className="absolute bottom-2 left-0 w-full h-5 bg-[var(--color-tertiary-container)] border-t-2 border-b-2 border-[var(--color-on-surface)] -z-0"></span>
                </span>
              </h1>
            </div>

            {/* Precision Sub-Copy */}
            <p className="font-body-lg text-[var(--font-body-lg)] text-[var(--color-on-surface-variant)] max-w-xl font-medium leading-relaxed anim-spring-5">
              Hi, I&apos;m <strong className="text-[var(--color-on-surface)] underline decoration-[var(--color-primary-container)] decoration-4">Hadid Rayyan Nandana</strong>. Driven by the machinery under the hood, I engineer ultra-responsive web interfaces, optimize frontend pipelines, and bridge client mechanics with solid backend logic.
            </p>

            {/* Tactile Action Triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-2 anim-spring-6">
              <Link href="#works" className="tactile-btn brutalist-confetti-btn group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-primary-container)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] font-label-code text-[15px] font-bold text-[var(--color-on-surface)] uppercase tracking-wide cursor-pointer">
                <span>EXPLORE SELECTED WORKS</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="tactile-btn brutalist-confetti-btn group relative inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] font-label-code text-[15px] font-bold text-[var(--color-on-surface)] uppercase tracking-wide hover:bg-[var(--color-secondary-container)] cursor-pointer">
                <span>GITHUB REPO</span>
                <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <Link href="#contact" className="tactile-btn brutalist-confetti-btn inline-flex items-center gap-2 px-4 py-3 bg-[var(--color-surface-container-high)] border-2 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] text-[var(--color-on-surface)] font-bold hover:bg-[var(--color-tertiary-container)] cursor-pointer">
                <span>LET&apos;S TALK</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </Link>
            </div>

            {/* Micro Hardware Spec Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[var(--font-body-sm)] font-label-code text-[var(--color-on-surface-variant)] anim-spring-6">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[var(--color-primary)] border border-[var(--color-on-surface)]"></span>
                SPEC: TS / NEXT 14 / TAILWIND
              </span>
              <span className="text-[var(--color-outline-variant)] font-bold">/</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)]"></span>
                FOCUS: COMPONENT SYSTEMS
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Tilt Neo-Brutalist Frame with Stickers (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0 tilt-card-perspective anim-spring-4">
            <div ref={cardRef} className="tilt-card relative w-full max-w-[420px] bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[10px_10px_0px_0px_#1c1b1b]" id="heroPortraitCard">
              {/* Technical Window Titlebar */}
              <div className="bg-[var(--color-on-surface)] text-[var(--color-surface)] px-4 py-2 flex items-center justify-between border-b-4 border-[var(--color-on-surface)] select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-error)] border border-[var(--color-surface)] rounded-none"></span>
                  <span className="w-3 h-3 bg-[var(--color-primary-container)] border border-[var(--color-surface)] rounded-none"></span>
                  <span className="w-3 h-3 bg-[var(--color-tertiary-container)] border border-[var(--color-surface)] rounded-none"></span>
                  <span className="ml-2 font-label-code text-[12px] font-bold text-[var(--color-surface)] tracking-wider">PORTRAIT_FEED://HD_01</span>
                </div>
                <span className="font-label-caps text-[10px] bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] px-1.5 py-0.2 border border-[var(--color-surface)] font-bold">60FPS</span>
              </div>
              
              {/* Frame Viewport */}
              <div className="relative p-4 bg-[var(--color-tertiary-fixed-dim)]/20">
                {/* Floating Slanted Badge: Top-Right */}
                <div className="absolute -top-5 -right-4 z-20 px-3 py-1 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] float-badge-4 hover:rotate-0 transition-transform select-none">
                  <div className="flex items-center gap-1.5 font-label-code text-[12px] font-bold text-[var(--color-on-surface)]">
                    <span>📍 IDN / GMT+7</span>
                  </div>
                </div>

                {/* Main Hero Image Container */}
                <div className="relative w-full aspect-square border-4 border-[var(--color-on-surface)] overflow-hidden bg-[var(--color-surface-container)]">
                  <img alt="Portrait Placeholder" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300" src="https://placehold.co/800x800/1c1b1b/fcf9f8?text=Portrait" />
                  {/* Crosshairs in Corners */}
                  <div className="absolute top-2 left-2 pointer-events-none font-label-code text-[11px] font-black text-[var(--color-on-surface)] bg-[var(--color-surface-container-lowest)] px-1 border border-[var(--color-on-surface)] select-none">+ [0,0]</div>
                  <div className="absolute bottom-2 right-2 pointer-events-none font-label-code text-[11px] font-black text-[var(--color-on-surface)] bg-[var(--color-primary-container)] px-1 border border-[var(--color-on-surface)] select-none">1024x1024</div>
                </div>

                {/* Floating Tactile Badge: Bottom-Left */}
                <div className="absolute -bottom-4 -left-4 z-20 px-3 py-1.5 bg-[var(--color-secondary-container)] border-3 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] float-badge-3 hover:rotate-0 transition-transform select-none">
                  <div className="flex items-center gap-1.5 font-label-code text-[13px] font-bold text-[var(--color-on-surface)]">
                    <svg className="w-4 h-4 font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 6h16v12H4z" /></svg>
                    <span>3+ YRS CODE EXP</span>
                  </div>
                </div>
              </div>

              {/* Terminal Telemetry Footer on Card */}
              <div className="p-3 bg-[var(--color-surface-container-low)] border-t-4 border-[var(--color-on-surface)] flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary-fixed-dim)] border border-[var(--color-on-surface)] animate-pulse"></span>
                  <span className="font-label-code text-[12px] font-bold text-[var(--color-on-surface)]">ZERO_ERRORS // ALL TESTS PASS</span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">SHA: b47a8f</span>
              </div>
            </div>

            {/* Decorative Geometric Neo-Brutalist Underlay Blocks */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary-container)] border-4 border-[var(--color-on-surface)] -z-10 hidden sm:block"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[var(--color-secondary-container)] border-4 border-[var(--color-on-surface)] -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>

      {/* Quick Metrics / Highlight Bar */}
      <div className="w-full bg-[var(--color-surface-container-lowest)] border-t-4 border-[var(--color-on-surface)]">
        <div className="max-w-7xl mx-auto px-[var(--spacing-gutter)] py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[var(--color-surface)] border-3 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] flex flex-col justify-between group hover:bg-[var(--color-primary-container)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1c1b1b] transition-all cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-on-surface)]">TRACK RECORD</span>
                <svg className="w-6 h-6 text-[var(--color-on-surface)] group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div>
                <div className="font-display text-[var(--font-headline-lg)] font-black text-[var(--color-on-surface)] leading-tight">3+ SHIPPED</div>
                <p className="font-label-code text-[13px] text-[var(--color-on-surface)] mt-1 font-semibold">SchoolCanteen · IT Clinic · Wedding App</p>
              </div>
            </div>
            
            <div className="p-4 bg-[var(--color-surface)] border-3 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] flex flex-col justify-between group hover:bg-[var(--color-tertiary-container)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1c1b1b] transition-all cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-on-surface)]">PRIMARY WORKBENCH</span>
                <svg className="w-6 h-6 text-[var(--color-on-surface)] group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <div>
                <div className="font-headline-md text-[26px] sm:text-[var(--font-headline-md)] font-black text-[var(--color-on-surface)] uppercase leading-tight">NEXT.JS + TS</div>
                <p className="font-label-code text-[13px] text-[var(--color-on-surface)] mt-1 font-semibold">Tailwind CSS · React · Node Logic</p>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-surface)] border-3 border-[var(--color-on-surface)] shadow-[4px_4px_0px_0px_#1c1b1b] flex flex-col justify-between group hover:bg-[var(--color-secondary-container)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1c1b1b] transition-all cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-on-surface)]">BENCHMARK</span>
                <svg className="w-6 h-6 text-[var(--color-on-surface)] group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <div className="font-display text-[var(--font-headline-lg)] font-black text-[var(--color-on-surface)] leading-tight">100% AUDIT</div>
                <p className="font-label-code text-[13px] text-[var(--color-on-surface)] mt-1 font-semibold">Lighthouse Clean · Accessible · Fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite High-Voltage Marquee Strip with Pause on Hover */}
      <div className="marquee-container w-full bg-[var(--color-on-surface)] border-t-4 border-[var(--color-on-surface)] py-3 overflow-hidden select-none cursor-pointer">
        <div className="marquee-inner">
          <span className="font-label-code text-[var(--font-label-code)] text-white font-extrabold tracking-wider uppercase flex items-center gap-4 pr-8">
            <span>FRONTEND ARCHITECTURE</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>FULL-STACK CURIOUS</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>NEXT.JS &amp; TAILWIND</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>SYSTEMS THINKING</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>RPL VOCATIONAL STUDENT</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>CONTINUOUS LEARNING</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>CLEAN CODE CRAFT</span>
            <span className="text-[var(--color-surface)]">✦</span>
          </span>
          <span className="font-label-code text-[var(--font-label-code)] text-white font-extrabold tracking-wider uppercase flex items-center gap-4 pr-8">
            <span>FRONTEND ARCHITECTURE</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>FULL-STACK CURIOUS</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>NEXT.JS &amp; TAILWIND</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>SYSTEMS THINKING</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>RPL VOCATIONAL STUDENT</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>CONTINUOUS LEARNING</span>
            <span className="text-[var(--color-surface)]">✦</span>
            <span>CLEAN CODE CRAFT</span>
            <span className="text-[var(--color-surface)]">✦</span>
          </span>
        </div>
      </div>
    </section>
  );
}
