"use client";

import React from "react";

export function Skills() {
  return (
    <section className="relative w-full border-b-4 border-[var(--color-on-surface)] bg-[var(--color-surface-container-lowest)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)] px-[var(--spacing-gutter)]" id="skills" style={{ backgroundImage: "radial-gradient(var(--color-on-surface) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header Block */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-code text-xs font-black uppercase tracking-wider text-[var(--color-on-surface)]">
              // 03. TECHNICAL CAPABILITIES // ARSENAL
            </span>
            <span className="px-2 py-0.5 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface)]">
              BENCHMARK: TESTED
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--color-on-surface)] tracking-tight leading-[1.05]">
            CRAFTING WITH ROBUST TOOLS <br className="hidden sm:inline" />
            <span className="bg-[var(--color-secondary-container)] px-2 border-4 border-[var(--color-on-surface)] shadow-[5px_5px_0px_0px_#1c1b1b] inline-block mt-1">&amp; MODERN RUNTIMES.</span>
          </h2>
          <p className="font-body-lg text-lg sm:text-xl text-[var(--color-on-surface-variant)] max-w-3xl font-medium mt-1">
            Distinguishing clearly between production-tested workflows, operational foundations, and active expansion territories.
          </p>
        </div>

        {/* 4 Tier Neo-Brutalist Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Group 1: CORE WORKBENCH & PRODUCTION */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)]"></span>
                  <span className="font-label-code text-xs font-black uppercase text-[var(--color-on-surface)]">TIER 01 // PRODUCTION WORKBENCH</span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-label-caps text-[11px] font-bold">DAILY DRIVER</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-[var(--color-on-surface)] mb-2">FRONTEND ARCHITECTURE</h3>
              <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
                Clean component composition, reactive client state, accessible markup, and zero-layout-shift UI engineering.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Next.js 14</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-black">PROD</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">App Router / SSR / Caching</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">React 18</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-black">PROD</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Hooks / State / Context</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">TypeScript</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] font-black">STRICT</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Generics / Interfaces / Safety</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Tailwind CSS</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-black">SPEED</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Design Tokens / Kinetic Brutalism</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center justify-between text-xs font-label-code text-[var(--color-on-surface-variant)]">
              <span>ES6+ / Semantic HTML5 / CSS Grid</span>
              <span className="font-bold text-[var(--color-on-surface)]">100% LIGHTHOUSE READY</span>
            </div>
          </div>

          {/* Group 2: BACKEND & DATA FOUNDATIONS */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)]"></span>
                  <span className="font-label-code text-xs font-black uppercase text-[var(--color-on-surface)]">TIER 02 // DATA &amp; SYSTEM FOUNDATIONS</span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] font-label-caps text-[11px] font-bold">SOLID CORE</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-[var(--color-on-surface)] mb-2">BACKEND &amp; SCHEMAS</h3>
              <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
                Relational database structuring, reliable transactional queries, safe session states, and standards-compliant RESTful endpoints.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">PHP 8+</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-bold">PROD</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">OOP / Sessions / Sanitization</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">MySQL</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-bold">RELATIONAL</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Normalized Schema / Joins</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">RESTful APIs</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] font-bold">STANDARDS</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">CRUD / HTTP Codes / Payloads</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Node.js</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-secondary-fixed)] border border-[var(--color-on-surface)] font-bold">RUNTIME</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Express / Async I/O / NPM</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center justify-between text-xs font-label-code text-[var(--color-on-surface-variant)]">
              <span>JSON Schema / Auth Tokens / Role Guard</span>
              <span className="font-bold text-[var(--color-on-surface)]">FIELD-TESTED IN SMKs</span>
            </div>
          </div>

          {/* Group 3: CURRENTLY EXPLORING & EXPANDING */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)]"></span>
                  <span className="font-label-code text-xs font-black uppercase text-[var(--color-on-surface)]">TIER 03 // ACTIVE HORIZONS</span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)] font-label-caps text-[11px] font-black">LEARNING LAB</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-[var(--color-on-surface)] mb-2">EXPANDING TOOLSET</h3>
              <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
                Scaling up beyond monolith scripts into containerized workflows, enterprise databases, and declarative infrastructure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">PostgreSQL</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)] font-black">EXPLORING</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Prisma / Supabase / Indexing</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Docker</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)] font-black">EXPLORING</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Containerization / Dockerfile</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">CI/CD</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-secondary-container)] border border-[var(--color-on-surface)] font-black">ACTIVE</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">GitHub Actions / Automated Lint</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">System Arch</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] font-bold">THEORY</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Caching / Edge / Microservices</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center justify-between text-xs font-label-code text-[var(--color-on-surface-variant)]">
              <span>Prisma ORM / Redis Caching Concept</span>
              <span className="font-bold text-[var(--color-on-surface)]">WEEKLY EXPERIMENTS</span>
            </div>
          </div>

          {/* Group 4: TOOLING & WORKFLOW ARCHITECTURE */}
          <div className="neo-card-lift bg-[var(--color-surface)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--color-on-surface)] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-on-surface)] border border-[var(--color-surface)]"></span>
                  <span className="font-label-code text-xs font-black uppercase text-[var(--color-on-surface)]">TIER 04 // WORKFLOW &amp; PRECISION</span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--color-surface-container-highest)] border border-[var(--color-on-surface)] font-label-caps text-[11px] font-bold">STANDARDS</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-[var(--color-on-surface)] mb-2">DEV ENVIRONMENT &amp; QA</h3>
              <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
                Optimized developer experience, robust versioning pipelines, testing fixtures, and rigorous performance telemetry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Git &amp; GitHub</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-bold">CORE</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Semantic Commits / PR Reviews</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Lighthouse Audit</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-primary-container)] border border-[var(--color-on-surface)] font-bold">100%</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">SEO / Perf / Accessibility / PWA</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Vite / Bundlers</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-tertiary-container)] border border-[var(--color-on-surface)] font-bold">FAST</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">HMR / Tree-shaking / ESBuild</span>
                </div>
                <div className="p-3 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline-sm text-base font-bold text-[var(--color-on-surface)]">Postman / Linux</span>
                    <span className="text-[10px] font-label-caps px-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-bold">CLI</span>
                  </div>
                  <span className="font-label-code text-[11px] text-[var(--color-on-surface-variant)]">Bash / Endpoint Debugging</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-dashed border-[var(--color-outline-variant)] flex items-center justify-between text-xs font-label-code text-[var(--color-on-surface-variant)]">
              <span>VS Code Power-User / ESLint / Prettier</span>
              <span className="font-bold text-[var(--color-on-surface)]">ZERO WARNING POLICY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
