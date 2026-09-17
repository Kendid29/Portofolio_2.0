"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Works() {
  const [filter, setFilter] = useState("all");

  return (
    <section className="reveal-on-scroll relative w-full border-b-4 border-[var(--color-on-surface)] bg-[var(--color-surface)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)] px-[var(--spacing-gutter)]" id="works">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header Block with High-Contrast Badges & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-4 border-[var(--color-on-surface)]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 anim-spring-1">
              <span className="px-2.5 py-0.5 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-code text-xs font-black uppercase">
                // 02. PRODUCTION INDEX
              </span>
              <span className="font-label-caps text-xs text-[var(--color-on-surface-variant)] font-bold uppercase float-badge-2 cursor-default select-none px-2 py-0.5 bg-[var(--color-surface-container-high)] border border-[var(--color-on-surface)]">3 SHIPPED SYSTEMS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[var(--color-on-surface)] tracking-tight anim-spring-2">
              SELECTED WORKS
            </h2>
            <p className="font-body-md text-[var(--color-on-surface-variant)] max-w-xl text-base anim-spring-3">
              A curated index of production systems, client platforms, and interactive experiences crafted with clean architectural patterns.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-2 anim-spring-3" id="projectFilterGroup">
            <button
              onClick={() => setFilter("all")}
              className={`filter-tab px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-caps text-xs font-bold cursor-pointer ${filter === "all" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-tertiary-container)]"}`}
              type="button"
            >
              ALL WORKS (3)
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`filter-tab px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-caps text-xs font-bold cursor-pointer ${filter === "fullstack" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-tertiary-container)]"}`}
              type="button"
            >
              FULL-STACK / NEXT.JS
            </button>
            <button
              onClick={() => setFilter("clinic")}
              className={`filter-tab px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-caps text-xs font-bold cursor-pointer ${filter === "clinic" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-tertiary-container)]"}`}
              type="button"
            >
              INTERNAL TOOLS / CLINIC
            </button>
            <button
              onClick={() => setFilter("interactive")}
              className={`filter-tab px-3 py-1.5 border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-caps text-xs font-bold cursor-pointer ${filter === "interactive" ? "active-filter" : "bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-tertiary-container)]"}`}
              type="button"
            >
              INTERACTIVE WEB
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="projectsContainer">
          {/* Project 1: SchoolCanteen */}
          <article className={`anim-spring-4 project-item neo-card-lift bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_var(--color-on-surface)] flex-col justify-between ${(filter === "all" || filter === "fullstack") ? "flex" : "hidden"}`}>
            <div>
              <div className="relative w-full h-52 bg-[var(--color-surface-container)] border-b-4 border-[var(--color-on-surface)] overflow-hidden group/img">
                <Image
                  src="/images/projects/schoolcanteen/overviewcanteen.webp"
                  alt="SchoolCanteen Platform Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-code text-[11px] font-black uppercase text-[var(--color-on-surface)]">
                    FEATURED PRODUCTION
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-code text-[11px] text-[var(--color-error)] font-black">
                    ● LIVE
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] p-2 shadow-[3px_3px_0px_0px_var(--color-on-surface)]">
                  <div className="flex items-center justify-between text-[11px] font-label-code font-bold pb-1 border-b border-[var(--color-on-surface)]">
                    <span>CANTEEN_ORDER_ENGINE</span>
                    <span className="text-[var(--color-primary)] font-bold">READY_PICKUP</span>
                  </div>
                  <div className="pt-1 text-[11px] font-label-code text-[var(--color-on-surface-variant)] flex items-center justify-between">
                    <span>QR_TOKEN: #CAN-8841</span>
                    <span className="font-bold text-[var(--color-on-surface)]">APP_ROUTER_V14</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-xs font-bold text-[var(--color-primary)] tracking-wider uppercase">01 // COMMERCE &amp; ORDERS</span>
                  <span className="font-label-caps text-xs px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-semibold">PRODUCTION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[var(--color-on-surface)]">
                  SchoolCanteen
                </h3>
                <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Aplikasi pemesanan makanan digital untuk siswa sekolah. Mempercepat antrean jam istirahat dengan sistem verifikasi penjemputan QR otomatis dan arsitektur komponen modular.
                </p>
                <ul className="flex flex-col gap-1.5 py-2 text-xs font-label-code text-[var(--color-on-surface)]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Real-time order state &amp; queue handling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>QR Code automatic pickup validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-primary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>99.8% uptime during peak lunch school rushes</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Next.js 14</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">React</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">TypeScript</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 border-t-2 border-[var(--color-on-surface)]/10 mt-4 flex items-center gap-3">
              <Link href="/works/schoolcanteen" className="open-modal-btn flex-1 py-2.5 px-3 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-code text-xs font-bold uppercase hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer text-center">
                CASE STUDY DETAILS ↗
              </Link>
              <Link href="/works/schoolcanteen" className="p-2.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] hover:bg-[var(--color-secondary-container)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" title="Live Preview">
                <svg className="w-5 h-5 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </Link>
            </div>
          </article>

          {/* Project 2: IT Clinic */}
          <article className={`anim-spring-5 project-item neo-card-lift bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_var(--color-on-surface)] flex-col justify-between ${(filter === "all" || filter === "clinic") ? "flex" : "hidden"}`}>
            <div>
              <div className="relative w-full h-52 bg-[var(--color-surface-container)] border-b-4 border-[var(--color-on-surface)] overflow-hidden group/img">
                <Image
                  src="/images/projects/it-clinic/overviewit.webp"
                  alt="IT Clinic Service Management Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-code text-[11px] font-black uppercase text-[var(--color-on-surface)]">
                    WORKFLOW SYSTEM
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-code text-[11px] font-black text-[var(--color-on-surface)]">
                    ENTERPRISE
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] p-2 shadow-[3px_3px_0px_0px_var(--color-on-surface)]">
                  <div className="flex items-center justify-between text-[11px] font-label-code font-bold pb-1 border-b border-[var(--color-on-surface)]">
                    <span>TICKET://#SRV-4092</span>
                    <span className="text-[var(--color-tertiary)] font-bold">REPAIRING</span>
                  </div>
                  <div className="pt-1 text-[11px] font-label-code text-[var(--color-on-surface-variant)] flex items-center justify-between">
                    <span>UNIT: MOTHERBOARD_CAP</span>
                    <span className="font-bold text-[var(--color-on-surface)]">TECH: HD_01</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-xs font-bold text-[var(--color-tertiary)] tracking-wider uppercase">02 // SERVICE MANAGEMENT</span>
                  <span className="font-label-caps text-xs px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-semibold">ENTERPRISE</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[var(--color-on-surface)]">
                  IT Clinic
                </h3>
                <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Sistem manajemen operasional servis perangkat multi-role untuk melacak proses reparasi hardware &amp; perbaikan software laboratorium komputer secara real-time.
                </p>
                <ul className="flex flex-col gap-1.5 py-2 text-xs font-label-code text-[var(--color-on-surface)]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Role-based portal (Admin, Teknisi, Klien)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Repair status tracking pipeline with logs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-tertiary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Inventory &amp; spare part tracking system</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">PHP</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">MySQL</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">JavaScript</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Bootstrap</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 border-t-2 border-[var(--color-on-surface)]/10 mt-4 flex items-center gap-3">
              <Link href="/works/it-clinic" className="open-modal-btn flex-1 py-2.5 px-3 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-code text-xs font-bold uppercase hover:bg-[var(--color-tertiary)] hover:text-[var(--color-on-tertiary)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer text-center">
                VIEW WORKFLOW ↗
              </Link>
              <a href="https://github.com/Kendid29" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] hover:bg-[var(--color-primary-container)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" title="Source Code">
                <svg className="w-5 h-5 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </a>
            </div>
          </article>

          {/* Project 3: Wedding Invitation */}
          <article className={`anim-spring-6 project-item neo-card-lift bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_var(--color-on-surface)] flex-col justify-between ${(filter === "all" || filter === "interactive") ? "flex" : "hidden"}`}>
            <div>
              <div className="relative w-full h-52 bg-[var(--color-surface-container)] border-b-4 border-[var(--color-on-surface)] overflow-hidden group/img">
                <Image
                  src="/images/projects/wedding/overviewwedding.webp"
                  alt="Wedding Invitation Interactive Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-code text-[11px] font-black uppercase text-[var(--color-on-surface)]">
                    INTERACTIVE EXPERIENCE
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_var(--color-on-surface)] font-label-code text-[11px] font-black text-[var(--color-on-surface)]">
                    AUDIO: ON
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] p-2 shadow-[3px_3px_0px_0px_var(--color-on-surface)]">
                  <div className="flex items-center justify-between text-[11px] font-label-code font-bold pb-1 border-b border-[var(--color-on-surface)]">
                    <span>GUEST_RSVP_SYNC</span>
                    <span className="text-[var(--color-secondary)] font-bold">142 CONFIRMED</span>
                  </div>
                  <div className="pt-1 text-[11px] font-label-code text-[var(--color-on-surface-variant)] flex items-center justify-between">
                    <span>COUNTDOWN: 14D 08H</span>
                    <span className="font-bold text-[var(--color-on-surface)]">PARTICLE_FX</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-xs font-bold text-[var(--color-secondary)] tracking-wider uppercase">03 // INTERACTIVE WEB</span>
                  <span className="font-label-caps text-xs px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-semibold">CLIENT WORK</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[var(--color-on-surface)]">
                  Wedding Invitation
                </h3>
                <p className="font-body-sm text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  Pengalaman undangan pernikahan digital interaktif dengan hitung mundur waktu nyata, integrasi buku tamu virtual, serta mikro-animasi partikel responsif.
                </p>
                <ul className="flex flex-col gap-1.5 py-2 text-xs font-label-code text-[var(--color-on-surface)]">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Bespoke canvas celebration particles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Live guest confirmation &amp; wishes feed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-secondary)] font-bold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Fluid mobile layout &amp; soundscapes</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">HTML5</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Tailwind CSS</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">JavaScript</span>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-on-surface)] font-label-code text-[11px] font-bold">Motion API</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 border-t-2 border-[var(--color-on-surface)]/10 mt-4 flex items-center gap-3">
              <Link href="/works/wedding" className="open-modal-btn flex-1 py-2.5 px-3 bg-[var(--color-secondary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] font-label-code text-xs font-bold uppercase hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer text-center">
                EXPERIENCE DEMO ↗
              </Link>
              <a href="#" className="p-2.5 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_var(--color-on-surface)] hover:bg-[var(--color-primary-container)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" title="Read Specs">
                <svg className="w-5 h-5 text-[var(--color-on-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
