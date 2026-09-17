"use client";

import React from "react";

export function About() {
  return (
    <section className="relative w-full border-b-4 border-[var(--color-on-surface)] bg-[var(--color-surface-container-lowest)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)] px-[var(--spacing-gutter)]" id="about" style={{ backgroundImage: "radial-gradient(var(--color-on-surface) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header Block with Sub-Tag and Massive Neo-Brutalist Heading */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-code text-xs font-bold uppercase tracking-wider text-[var(--color-on-surface)]">
              // 01. IDENTITY &amp; PHILOSOPHY
            </span>
            <span className="px-2 py-0.5 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] font-black text-[var(--color-on-surface)]">
              DEEP DIVE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--color-on-surface)] tracking-tight leading-[1.05]">
            UNDERSTANDING SYSTEMS, <br className="hidden sm:inline" />
            <span className="bg-[var(--color-primary-container)] px-2 border-4 border-[var(--color-on-surface)] shadow-[5px_5px_0px_0px_#1c1b1b] inline-block mt-1">BUILDING REAL SOLUTIONS.</span>
          </h2>
          <p className="font-body-lg text-lg sm:text-xl text-[var(--color-on-surface-variant)] max-w-3xl font-medium mt-1">
            12th Grade RPL student driven by curiosity. <em className="text-[var(--color-on-surface)] not-italic font-bold bg-[var(--color-secondary-fixed)] px-1 border border-[var(--color-on-surface)]">&quot;I like taking things apart just to understand how they work.&quot;</em> Bridging resilient frontends, component pipelines, and backend logic.
          </p>
        </div>

        {/* 3 Pillar Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar Card 1 */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)]">
                <span className="px-2 py-0.5 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black uppercase">
                  PIL_01
                </span>
                <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <h3 className="font-headline-sm text-2xl font-black uppercase tracking-tight text-[var(--color-on-surface)] mt-4 mb-2">
                SYSTEM-ORIENTED THINKING
              </h3>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base leading-relaxed">
                Viewing every feature as part of a larger ecosystem. Connecting frontend state, responsive caching, and API pipeline flows seamlessly with resilient error boundaries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-primary)]"></span>
              <span className="font-label-code text-xs font-bold text-[var(--color-on-surface)]">STATE / PIPELINES / APIS</span>
            </div>
          </div>

          {/* Pillar Card 2 */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)]">
                <span className="px-2 py-0.5 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black uppercase">
                  PIL_02
                </span>
                <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-headline-sm text-2xl font-black uppercase tracking-tight text-[var(--color-on-surface)] mt-4 mb-2">
                ACCESSIBLE &amp; CRAFTED UI
              </h3>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base leading-relaxed">
                Tactile, memorable, and high-impact designs with rock-solid semantic HTML. Zero layout shift, full keyboard accessibility, and 100% Lighthouse audit standards.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-tertiary)]"></span>
              <span className="font-label-code text-xs font-bold text-[var(--color-on-surface)]">ACCESSIBLE / ZERO CLS / FAST</span>
            </div>
          </div>

          {/* Pillar Card 3 */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)]">
                <span className="px-2 py-0.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black uppercase">
                  PIL_03
                </span>
                <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="font-headline-sm text-2xl font-black uppercase tracking-tight text-[var(--color-on-surface)] mt-4 mb-2">
                CONTINUOUS ITERATION
              </h3>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base leading-relaxed">
                Honest about current capacity, committed to rapid experimentation. Continually expanding from client engineering to database modeling, containers, and production deployment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-secondary)]"></span>
              <span className="font-label-code text-xs font-bold text-[var(--color-on-surface)]">LEARN / TEST / DEPLOY</span>
            </div>
          </div>
        </div>

        {/* Mini Hardware / Developer Spec Sheet Terminal */}
        <div className="w-full bg-[var(--color-surface-container)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] overflow-hidden">
          <div className="bg-[var(--color-on-surface)] text-[var(--color-surface)] px-4 py-2.5 flex items-center justify-between border-b-4 border-[var(--color-on-surface)] font-label-code text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[var(--color-primary-container)] border border-[var(--color-surface)]"></span>
              <span className="font-bold tracking-wider uppercase">DEV_SPEC_SHEET.JSON // TELEMETRY</span>
            </div>
            <span className="hidden sm:inline-block font-label-caps text-[11px] bg-[var(--color-primary-container)] text-[var(--color-on-surface)] px-2 py-0.5 font-bold">STATUS: OK</span>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-label-code">
            {/* Field 1 */}
            <div className="flex flex-col gap-1 p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b]">
              <span className="text-xs text-[var(--color-on-surface-variant)] uppercase font-semibold">// 01_IDENTITY</span>
              <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Hadid Rayyan N.</span>
              <span className="text-xs text-[var(--color-on-surface)] mt-1">12th Grade RPL Student</span>
            </div>
            {/* Field 2 */}
            <div className="flex flex-col gap-1 p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b]">
              <span className="text-xs text-[var(--color-on-surface-variant)] uppercase font-semibold">// 02_CORE_STACK</span>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="px-1.5 py-0.5 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] text-[11px] font-bold">Next.js 14</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] text-[11px] font-bold">React 18</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-secondary-fixed)] border border-[var(--color-on-surface)] text-[11px] font-bold">TS</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-surface-container-high)] border border-[var(--color-on-surface)] text-[11px] font-bold">Tailwind</span>
              </div>
            </div>
            {/* Field 3 */}
            <div className="flex flex-col gap-1 p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b]">
              <span className="text-xs text-[var(--color-on-surface-variant)] uppercase font-semibold">// 03_BACKEND_FOUNDATIONS</span>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="px-1.5 py-0.5 bg-[var(--color-surface-container-high)] border border-[var(--color-on-surface)] text-[11px] font-bold">Node.js</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-surface-container-high)] border border-[var(--color-on-surface)] text-[11px] font-bold">PHP</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-surface-container-high)] border border-[var(--color-on-surface)] text-[11px] font-bold">REST APIs</span>
              </div>
            </div>
            {/* Field 4 */}
            <div className="flex flex-col gap-1 p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b]">
              <span className="text-xs text-[var(--color-on-surface-variant)] uppercase font-semibold">// 04_TARGET_EXPANSION</span>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="px-1.5 py-0.5 bg-[var(--color-tertiary-fixed-dim)] border border-[var(--color-on-surface)] text-[11px] font-bold">PostgreSQL</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] text-[11px] font-bold">Docker</span>
                <span className="px-1.5 py-0.5 bg-[var(--color-surface)] border border-[var(--color-on-surface)] text-[11px] font-bold">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
