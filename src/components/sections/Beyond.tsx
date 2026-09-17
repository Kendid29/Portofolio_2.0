"use client";

import React from "react";

export function Beyond() {
  return (
    <section className="relative w-full border-b-4 border-[var(--color-on-surface)] bg-[var(--color-surface)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)] px-[var(--spacing-gutter)]" id="beyond" style={{ backgroundImage: "radial-gradient(var(--color-on-surface) 1.25px, transparent 1.25px)", backgroundSize: "28px 28px" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-code text-xs font-black uppercase tracking-wider text-[var(--color-on-surface)]">
              // 05. AUXILIARY MODULES
            </span>
            <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface)]">
              OFF-SCREEN PURSUITS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--color-on-surface)] tracking-tight leading-[1.05]">
            BEYOND THE <br className="hidden sm:inline" />
            <span className="bg-[var(--color-secondary-container)] px-2 border-4 border-[var(--color-on-surface)] shadow-[5px_5px_0px_0px_#1c1b1b] inline-block mt-1 text-[var(--color-on-surface)]">TERMINAL.</span>
          </h2>
          <p className="font-body-lg text-lg sm:text-xl text-[var(--color-surface-container-highest)] max-w-3xl font-bold mt-1 px-2 py-1 bg-[var(--color-on-surface)] inline-block">
            Engineering doesn&apos;t stop at the code editor. It extends into visual composition, hardware mechanics, and continuous system observation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4">
          <div className="neo-card-lift group bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] flex flex-col hover:shadow-[12px_12px_0px_0px_#1c1b1b] hover:-translate-y-1 transition-all">
            <div className="h-48 border-b-4 border-[var(--color-on-surface)] bg-[var(--color-primary-container)] relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(45deg, var(--color-on-surface) 25%, transparent 25%, transparent 75%, var(--color-on-surface) 75%, var(--color-on-surface)), linear-gradient(45deg, var(--color-on-surface) 25%, transparent 25%, transparent 75%, var(--color-on-surface) 75%, var(--color-on-surface))", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>
              <svg className="w-24 h-24 text-[var(--color-on-surface)] relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] font-label-code text-[10px] font-black uppercase text-[var(--color-on-surface)]">VISUAL_SYS</div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[var(--color-on-surface)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Visual Design &amp; Typography</h3>
              <p className="font-body-md text-[var(--color-on-surface-variant)] leading-relaxed mb-6 flex-1">
                A strong interface requires more than just logic. I actively study kinetic typography, neo-brutalist layouts, and Swiss design principles to create web experiences that are structurally sound and visually assertive.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[var(--color-outline-variant)]">
                <span className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Figma Prototypes</span>
                <span className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Micro-Animations</span>
                <span className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Color Theory</span>
              </div>
            </div>
          </div>

          <div className="neo-card-lift group bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] flex flex-col hover:shadow-[12px_12px_0px_0px_#1c1b1b] hover:-translate-y-1 transition-all">
            <div className="h-48 border-b-4 border-[var(--color-on-surface)] bg-[var(--color-tertiary-container)] relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, var(--color-on-surface) 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
              <svg className="w-24 h-24 text-[var(--color-on-surface)] relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] font-label-code text-[10px] font-black uppercase text-[var(--color-on-surface)]">HW_MECH_SYS</div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[var(--color-on-surface)] mb-3 group-hover:text-[var(--color-tertiary)] transition-colors">Hardware &amp; Mechanics</h3>
              <p className="font-body-md text-[var(--color-on-surface-variant)] leading-relaxed mb-6 flex-1">
                Fascinated by the physical layers beneath the code. From assembling custom desktop rigs to understanding networking topologies and server architecture, bridging the gap between hardware execution and software logic.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[var(--color-outline-variant)]">
                <span className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">PC Building</span>
                <span className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Linux Envs</span>
                <span className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Networking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
