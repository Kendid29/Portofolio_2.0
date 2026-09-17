"use client";

import React, { useState } from "react";

export function Journey() {
  const [filter, setFilter] = useState("all");
  const [openDrawers, setOpenDrawers] = useState<{ [key: string]: boolean }>({});

  const toggleDrawer = (id: string) => {
    setOpenDrawers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <section className="relative w-full border-b-4 border-[var(--color-on-surface)] bg-[var(--color-surface)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)] px-[var(--spacing-gutter)]" id="journey">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-4 border-[var(--color-on-surface)]">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-code text-xs font-black uppercase tracking-wider text-[var(--color-on-surface)]">
                // 04. PROGRESSION VECTOR // MILESTONES
              </span>
              <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface)]">
                CHRONOLOGICAL LOG
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></span>
                TIMELINE: ACTIVE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--color-on-surface)] tracking-tight leading-[1.05]">
              THE LEARNING TIMELINE <br className="hidden sm:inline" />
              <span className="bg-[var(--color-primary-container)] px-2 border-4 border-[var(--color-on-surface)] shadow-[5px_5px_0px_0px_#1c1b1b] inline-block mt-1">&amp; EXPEDITION.</span>
            </h2>
            <p className="font-body-lg text-lg sm:text-xl text-[var(--color-on-surface-variant)] max-w-3xl font-medium mt-1">
              A documented progression from innate mechanical curiosity to shipped production architectures.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start md:items-end">
            <span className="font-label-code text-xs font-bold text-[var(--color-on-surface-variant)] uppercase">// VECTOR FILTER &amp; EXPEDITION CONTROLS</span>
            <div className="flex flex-wrap gap-2" id="timelineFilters">
              <button onClick={() => setFilter("all")} className={`timeline-tag-filter px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-caps text-xs font-bold cursor-pointer transition-all ${filter === "all" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-primary-container)]"}`} type="button">SHOW ALL (4)</button>
              <button onClick={() => setFilter("2024")} className={`timeline-tag-filter px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-caps text-xs font-bold cursor-pointer transition-all ${filter === "2024" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-tertiary-container)]"}`} type="button">2024 LOGIC</button>
              <button onClick={() => setFilter("2025")} className={`timeline-tag-filter px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-caps text-xs font-bold cursor-pointer transition-all ${filter === "2025" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-tertiary-container)]"}`} type="button">2025 FRAMEWORKS</button>
              <button onClick={() => setFilter("2026")} className={`timeline-tag-filter px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-caps text-xs font-bold cursor-pointer transition-all ${filter === "2026" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-primary-container)]"}`} type="button">2026 PROD</button>
              <button onClick={() => setFilter("now")} className={`timeline-tag-filter px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-caps text-xs font-bold cursor-pointer transition-all ${filter === "now" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-secondary-container)]"}`} type="button">NOW HORIZONS</button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-8 before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-8 before:w-1.5 before:bg-[var(--color-on-surface)]">
          <div className="absolute left-[13px] sm:left-[29px] top-0 bottom-0 w-2 overflow-hidden pointer-events-none">
            <div className="w-full h-10 bg-[var(--color-primary)] animate-[springInUp_3s_infinite] shadow-[0_0_10px_#fde047]"></div>
          </div>

          {/* 2024 */}
          <div className={`timeline-milestone relative items-start gap-6 sm:gap-10 pl-10 sm:pl-16 group ${(filter === "all" || filter === "2024") ? "flex" : "hidden"}`}>
            <div className="absolute left-1.5 sm:left-5.5 -top-1 w-7 h-7 bg-[var(--color-surface-container-lowest)] border-3 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex items-center justify-center -translate-x-1/2 group-hover:bg-[var(--color-primary-container)] transition-colors z-10">
              <svg className="w-4 h-4 font-bold text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 6h16v12H4z" /></svg>
            </div>
            <div className="timeline-card w-full bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-[var(--color-on-surface)]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black">2024</span>
                  <span className="font-headline-sm text-lg sm:text-xl font-bold uppercase text-[var(--color-on-surface)]">THE BEGINNING &amp; LOGIC ROOTS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-code text-xs font-bold text-[var(--color-on-surface-variant)]">SMK TELKOM / INITIALIZATION</span>
                  <button onClick={() => toggleDrawer("2024")} className="drawer-toggle-btn px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-xs font-bold hover:bg-[var(--color-primary-container)] flex items-center gap-1 transition-colors cursor-pointer" type="button">
                    <span className="toggle-text">{openDrawers["2024"] ? "COLLAPSE" : "INSPECT"}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openDrawers["2024"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              </div>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base mt-3 leading-relaxed">
                First introduction to structured programming, computer hardware mechanics, and algorithmic thinking. Built foundational discipline by breaking down how programs execute sequentially.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 font-label-code text-xs text-[var(--color-on-surface)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Hardware diagnostics &amp; networking logic</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Mastery of core HTML5 semantic structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Native JavaScript algorithms &amp; DOM manipulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Basic relational data modeling with SQL</span>
                </li>
              </ul>
              {openDrawers["2024"] && (
                <div className="timeline-drawer mt-4 pt-4 border-t-2 border-dashed border-[var(--color-on-surface)]/20 flex flex-col gap-3">
                  <div className="p-3 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] text-xs font-label-code flex flex-col gap-1">
                    <span className="font-bold text-[var(--color-primary)] uppercase">// KEY ARTIFACTS &amp; MILESTONE DRILLDOWN</span>
                    <p className="text-[var(--color-on-surface-variant)]">Crafted foundational CLI scripts, built responsive semantic landing pages, mastered network subnetting, and resolved 50+ algorithmic logic challenges.</p>
                  </div>
                  <div className="flex items-center justify-between font-label-code text-xs">
                    <span className="text-[var(--color-on-surface)] font-bold">LOG_HASH: 0x2024_BEGIN_SYS</span>
                    <button onClick={() => handleCopy("0x2024_BEGIN_SYS")} className="copy-log-btn px-2 py-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-bold flex items-center gap-1 hover:bg-[var(--color-on-surface)] hover:text-[var(--color-surface)] transition-colors cursor-pointer" type="button">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      <span>COPY REF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2025 */}
          <div className={`timeline-milestone relative items-start gap-6 sm:gap-10 pl-10 sm:pl-16 group ${(filter === "all" || filter === "2025") ? "flex" : "hidden"}`}>
            <div className="absolute left-1.5 sm:left-5.5 -top-1 w-7 h-7 bg-[var(--color-surface-container-lowest)] border-3 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex items-center justify-center -translate-x-1/2 group-hover:bg-[var(--color-tertiary-container)] transition-colors z-10">
              <svg className="w-4 h-4 font-bold text-[var(--color-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div className="timeline-card w-full bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-[var(--color-on-surface)]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black">2025</span>
                  <span className="font-headline-sm text-lg sm:text-xl font-bold uppercase text-[var(--color-on-surface)]">FRAMEWORK EXPLORATION &amp; COMPONENT ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-code text-xs font-bold text-[var(--color-tertiary)]">ECOSYSTEM SHIFT</span>
                  <button onClick={() => toggleDrawer("2025")} className="drawer-toggle-btn px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-xs font-bold hover:bg-[var(--color-tertiary-container)] flex items-center gap-1 transition-colors cursor-pointer" type="button">
                    <span className="toggle-text">{openDrawers["2025"] ? "COLLAPSE" : "INSPECT"}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openDrawers["2025"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              </div>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base mt-3 leading-relaxed">
                Transitioned from static coding to declarative UI systems. Deep-dived into React lifecycles, atomic components, and modern CSS tooling for responsive, high-speed user interfaces.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 font-label-code text-xs text-[var(--color-on-surface)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Adopting Next.js 14 and App Router patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Designing tactical, kinetic neo-brutalist interfaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Strict TypeScript integration across projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Delivering interactive client work (Wedding Invitation)</span>
                </li>
              </ul>
              {openDrawers["2025"] && (
                <div className="timeline-drawer mt-4 pt-4 border-t-2 border-dashed border-[var(--color-on-surface)]/20 flex flex-col gap-3">
                  <div className="p-3 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] text-xs font-label-code flex flex-col gap-1">
                    <span className="font-bold text-[var(--color-tertiary)] uppercase">// KEY ARTIFACTS &amp; MILESTONE DRILLDOWN</span>
                    <p className="text-[var(--color-on-surface-variant)]">Constructed reusable design system modules, deployed Next.js App Router applications with server components, and implemented interactive celebration particle engines.</p>
                  </div>
                  <div className="flex items-center justify-between font-label-code text-xs">
                    <span className="text-[var(--color-on-surface)] font-bold">LOG_HASH: 0x2025_REACT_EXP</span>
                    <button onClick={() => handleCopy("0x2025_REACT_EXP")} className="copy-log-btn px-2 py-1 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] font-bold flex items-center gap-1 hover:bg-[var(--color-on-surface)] hover:text-[var(--color-surface)] transition-colors cursor-pointer" type="button">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      <span>COPY REF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2026 */}
          <div className={`timeline-milestone relative items-start gap-6 sm:gap-10 pl-10 sm:pl-16 group ${(filter === "all" || filter === "2026") ? "flex" : "hidden"}`}>
            <div className="absolute left-1.5 sm:left-5.5 -top-1 w-7 h-7 bg-[var(--color-surface-container-lowest)] border-3 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex items-center justify-center -translate-x-1/2 group-hover:bg-[var(--color-primary-container)] transition-colors z-10">
              <svg className="w-4 h-4 font-bold text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="timeline-card w-full bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-[var(--color-on-surface)]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black">2026</span>
                  <span className="font-headline-sm text-lg sm:text-xl font-bold uppercase text-[var(--color-on-surface)]">REAL-WORLD EXPERIENCE &amp; PRODUCTION RUNTIMES</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-code text-xs font-bold text-[var(--color-on-surface)] font-black">PRODUCTION PHASE</span>
                  <button onClick={() => toggleDrawer("2026")} className="drawer-toggle-btn px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-xs font-bold hover:bg-[var(--color-primary-container)] flex items-center gap-1 transition-colors cursor-pointer" type="button">
                    <span className="toggle-text">{openDrawers["2026"] ? "COLLAPSE" : "INSPECT"}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openDrawers["2026"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              </div>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base mt-3 leading-relaxed">
                Delivered real-world client platforms and internal tooling systems used daily by students, technicians, and administrators. Experienced the friction of real users and solved for robustness.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 font-label-code text-xs text-[var(--color-on-surface)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Architected SchoolCanteen order validation engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Shipped IT Clinic repair pipeline tracking software</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Role-based permission gating &amp; session security</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Vocational Industry Internship (PKL Readiness)</span>
                </li>
              </ul>
              {openDrawers["2026"] && (
                <div className="timeline-drawer mt-4 pt-4 border-t-2 border-dashed border-[var(--color-on-surface)]/20 flex flex-col gap-3">
                  <div className="p-3 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] text-xs font-label-code flex flex-col gap-1">
                    <span className="font-bold text-[var(--color-primary)] uppercase">// KEY ARTIFACTS &amp; MILESTONE DRILLDOWN</span>
                    <p className="text-[var(--color-on-surface-variant)]">Integrated QR token verification scanners, created fault-tolerant hardware repair states, handled high concurrent traffic spikes in school canteen rush hours.</p>
                  </div>
                  <div className="flex items-center justify-between font-label-code text-xs">
                    <span className="text-[var(--color-on-surface)] font-bold">LOG_HASH: 0x2026_PROD_SHIPPED</span>
                    <button onClick={() => handleCopy("0x2026_PROD_SHIPPED")} className="copy-log-btn px-2 py-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-bold flex items-center gap-1 hover:bg-[var(--color-on-surface)] hover:text-[var(--color-surface)] transition-colors cursor-pointer" type="button">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      <span>COPY REF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* NOW */}
          <div className={`timeline-milestone relative items-start gap-6 sm:gap-10 pl-10 sm:pl-16 group ${(filter === "all" || filter === "now") ? "flex" : "hidden"}`}>
            <div className="absolute left-1.5 sm:left-5.5 -top-1 w-7 h-7 bg-[var(--color-secondary-container)] border-3 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex items-center justify-center -translate-x-1/2 z-10">
              <svg className="w-4 h-4 font-bold text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div className="timeline-card w-full bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] p-6 transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-[var(--color-on-surface)]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] font-label-code text-xs font-black">NOW // ACTIVE</span>
                  <span className="font-headline-sm text-lg sm:text-xl font-bold uppercase text-[var(--color-on-surface)]">FULL-STACK HORIZONS &amp; RESILIENT ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-label-caps text-[11px] font-black">EXPANDING VECTOR</span>
                  <button onClick={() => toggleDrawer("now")} className="drawer-toggle-btn px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-xs font-bold hover:bg-[var(--color-secondary-container)] flex items-center gap-1 transition-colors cursor-pointer" type="button">
                    <span className="toggle-text">{openDrawers["now"] ? "COLLAPSE" : "INSPECT"}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openDrawers["now"] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              </div>
              <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm sm:text-base mt-3 leading-relaxed">
                Pursuing engineering depth beyond screen layouts: learning PostgreSQL optimization, micro-containers with Docker, continuous delivery pipelines, and production backend paradigms.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 font-label-code text-xs text-[var(--color-on-surface)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Deploying containerized local test environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Exploring Prisma ORM with PostgreSQL databases</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Automating builds &amp; lint gates via GitHub Actions</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Seeking junior engineer / internship engineering roles</span>
                </li>
              </ul>
              {openDrawers["now"] && (
                <div className="timeline-drawer mt-4 pt-4 border-t-2 border-dashed border-[var(--color-on-surface)]/20 flex flex-col gap-3">
                  <div className="p-3 bg-[var(--color-surface-container)] border-2 border-[var(--color-on-surface)] text-xs font-label-code flex flex-col gap-1">
                    <span className="font-bold text-[var(--color-secondary)] uppercase">// KEY ARTIFACTS &amp; MILESTONE DRILLDOWN</span>
                    <p className="text-[var(--color-on-surface-variant)]">Constructing containerized microservices templates with Docker, CI/CD automated test gates on GitHub, and schema design with Prisma and PostgreSQL.</p>
                  </div>
                  <div className="flex items-center justify-between font-label-code text-xs">
                    <span className="text-[var(--color-on-surface)] font-bold">LOG_HASH: 0xNOW_CONTAINER_LAB</span>
                    <button onClick={() => handleCopy("0xNOW_CONTAINER_LAB")} className="copy-log-btn px-2 py-1 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)] font-bold flex items-center gap-1 hover:bg-[var(--color-on-surface)] hover:text-[var(--color-surface)] transition-colors cursor-pointer" type="button">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      <span>COPY REF</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
