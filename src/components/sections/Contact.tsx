"use client";

import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending logic, maybe trigger some UI animation
    alert(`Transmission sent, ${formData.name}! (Placeholder action)`);
  };

  return (
    <section className="relative w-full border-b-4 border-[var(--color-on-surface)] bg-[var(--color-surface)] py-[var(--spacing-space-lg)] lg:py-[var(--spacing-space-xl)] px-[var(--spacing-gutter)]" id="contact" style={{ backgroundImage: "linear-gradient(var(--color-on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--color-on-surface) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      <div className="absolute inset-0 bg-[var(--color-surface)] opacity-80"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Contact Module Header */}
        <div className="flex flex-col gap-3 items-center text-center max-w-3xl mx-auto bg-[var(--color-surface)] p-6 border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3 py-1 bg-[var(--color-primary-container)] border-2 border-[var(--color-on-surface)] shadow-[3px_3px_0px_0px_#1c1b1b] font-label-code text-xs font-black uppercase tracking-wider text-[var(--color-on-surface)]">
              // 06. TRANSMISSION PROTOCOL
            </span>
            <span className="px-2 py-0.5 bg-[var(--color-tertiary-container)] border-2 border-[var(--color-on-surface)] shadow-[2px_2px_0px_0px_#1c1b1b] font-label-caps text-[var(--font-label-caps)] font-bold text-[var(--color-on-surface)]">
              INITIATE COMMS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--color-on-surface)] tracking-tight leading-[1.05] mt-2">
            OPEN FOR <br className="hidden sm:inline" />
            <span className="bg-[var(--color-secondary-container)] px-2 border-4 border-[var(--color-on-surface)] shadow-[5px_5px_0px_0px_#1c1b1b] inline-block mt-1">NEW CONNECTIONS.</span>
          </h2>
          <p className="font-body-lg text-lg sm:text-xl text-[var(--color-on-surface-variant)] font-medium mt-3">
            Currently seeking internship opportunities, client projects, or just a good technical discussion. Ping my local server.
          </p>
        </div>

        {/* Form & Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          
          {/* Data Transmission Form */}
          <div className="neo-card-lift bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[10px_10px_0px_0px_#1c1b1b] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b-4 border-[var(--color-on-surface)] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[var(--color-primary)] border border-[var(--color-on-surface)] animate-ping"></span>
                <span className="font-label-code text-sm font-black uppercase text-[var(--color-on-surface)]">PAYLOAD_FORM.EXE</span>
              </div>
              <span className="font-label-code text-[11px] font-bold text-[var(--color-on-surface-variant)]">PORT: 443 SECURE</span>
            </div>
            
            <form id="contactForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-label-code text-xs font-bold text-[var(--color-on-surface)] uppercase flex items-center gap-2">
                  <span>&gt; IDENTIFIER // NAME</span>
                  <span className="text-[var(--color-error)]">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] p-3 font-body-md text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-label-code text-xs font-bold text-[var(--color-on-surface)] uppercase flex items-center gap-2">
                  <span>&gt; RETURN_ADDRESS // EMAIL</span>
                  <span className="text-[var(--color-error)]">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] p-3 font-body-md text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label-code text-xs font-bold text-[var(--color-on-surface)] uppercase flex items-center gap-2">
                  <span>&gt; DATA_PACKET // MESSAGE</span>
                  <span className="text-[var(--color-error)]">*</span>
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] p-3 font-body-md text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all resize-none" 
                  placeholder="Initiating handshake..."
                ></textarea>
              </div>
              
              <div className="flex items-start gap-3 mt-2">
                <div className="relative flex items-start">
                  <input 
                    type="checkbox" 
                    id="telemetryCheck" 
                    checked={formData.agreed}
                    onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                    className="peer appearance-none w-5 h-5 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] cursor-pointer checked:bg-[var(--color-primary-container)] checked:border-[var(--color-on-surface)] transition-colors" 
                  />
                  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-[var(--color-on-surface)] font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <label htmlFor="telemetryCheck" className="font-label-code text-[11px] text-[var(--color-on-surface-variant)] cursor-pointer select-none mt-0.5">
                  I agree to send telemetry data <span className="italic">(Just kidding, it&apos;s just an email).</span>
                </label>
              </div>

              <button type="submit" className="tactile-btn brutalist-confetti-btn group relative inline-flex items-center justify-center gap-2 w-full px-6 py-4 mt-4 bg-[var(--color-primary-container)] border-4 border-[var(--color-on-surface)] shadow-[6px_6px_0px_0px_#1c1b1b] font-label-code text-[16px] font-bold text-[var(--color-on-surface)] uppercase tracking-wide cursor-pointer hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-colors active:translate-x-1 active:translate-y-1 active:shadow-none">
                <span>EXECUTE TRANSMISSION</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
              </button>
            </form>
          </div>

          {/* Terminal Diagnostic Window & Network Nodes */}
          <div className="flex flex-col gap-6">
            
            <div className="neo-card-lift bg-[var(--color-surface-container)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] flex flex-col">
              <div className="bg-[var(--color-on-surface)] text-[var(--color-surface)] px-4 py-2.5 flex items-center justify-between border-b-4 border-[var(--color-on-surface)] font-label-code text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[var(--color-tertiary)] border border-[var(--color-surface)]"></span>
                  <span className="font-bold tracking-wider uppercase">CONNECTION_STATUS.SH</span>
                </div>
                <span className="hidden sm:inline-block font-label-caps text-[11px] bg-[var(--color-surface)] text-[var(--color-on-surface)] px-2 py-0.5 font-bold">LIVE PING</span>
              </div>
              <div className="p-6 font-label-code text-xs sm:text-sm text-[var(--color-on-surface)] flex flex-col gap-2 bg-[var(--color-surface-container-low)]">
                <div className="flex gap-2">
                  <span className="text-[var(--color-tertiary)]">&gt;</span>
                  <span>Attempting handshake with host...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--color-tertiary)]">&gt;</span>
                  <span>Host: <strong className="text-[var(--color-primary)] bg-[var(--color-primary-container)] px-1">hadid.rn@developer</strong></span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--color-tertiary)]">&gt;</span>
                  <span>Location: IDN / GMT+7</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--color-tertiary)]">&gt;</span>
                  <span>Status: <span className="text-[var(--color-secondary)] font-bold animate-pulse">ONLINE &amp; RECEIVING</span></span>
                </div>
                <div className="flex gap-2 mt-4 text-[var(--color-on-surface-variant)]">
                  <span className="text-[var(--color-tertiary)]">&gt;</span>
                  <span className="typing-cursor">Waiting for input</span>
                </div>
              </div>
            </div>

            <div className="neo-card-lift bg-[var(--color-surface-container-lowest)] border-4 border-[var(--color-on-surface)] shadow-[8px_8px_0px_0px_#1c1b1b] p-6 flex flex-col gap-4">
              <h3 className="font-label-code text-sm font-black uppercase text-[var(--color-on-surface)] pb-2 border-b-2 border-[var(--color-on-surface)]">// ESTABLISHED NETWORK NODES</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/hadid-rn" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] hover:bg-[var(--color-primary-container)] hover:-translate-y-1 shadow-[2px_2px_0px_0px_#1c1b1b] hover:shadow-[4px_4px_0px_0px_#1c1b1b] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    <span className="font-label-code text-sm font-bold text-[var(--color-on-surface)]">GITHUB://hadid-rn</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border border-[var(--color-on-surface)] font-label-caps text-[10px] font-black uppercase text-[var(--color-on-surface)] group-hover:bg-[var(--color-on-surface)] group-hover:text-[var(--color-surface)] transition-colors">CONNECT ↗</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] hover:bg-[var(--color-tertiary-container)] hover:-translate-y-1 shadow-[2px_2px_0px_0px_#1c1b1b] hover:shadow-[4px_4px_0px_0px_#1c1b1b] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <span className="font-label-code text-sm font-bold text-[var(--color-on-surface)]">LINKEDIN://hadid.rn</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border border-[var(--color-on-surface)] font-label-caps text-[10px] font-black uppercase text-[var(--color-on-surface)] group-hover:bg-[var(--color-on-surface)] group-hover:text-[var(--color-surface)] transition-colors">CONNECT ↗</span>
                </a>
                <a href="mailto:contact@hadid-rn.com" className="group flex items-center justify-between p-3 bg-[var(--color-surface)] border-2 border-[var(--color-on-surface)] hover:bg-[var(--color-secondary-container)] hover:-translate-y-1 shadow-[2px_2px_0px_0px_#1c1b1b] hover:shadow-[4px_4px_0px_0px_#1c1b1b] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[var(--color-on-surface)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>
                    <span className="font-label-code text-sm font-bold text-[var(--color-on-surface)]">DIRECT://contact@hadid-rn</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[var(--color-surface-container-lowest)] border border-[var(--color-on-surface)] font-label-caps text-[10px] font-black uppercase text-[var(--color-on-surface)] group-hover:bg-[var(--color-on-surface)] group-hover:text-[var(--color-surface)] transition-colors">MAIL ↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Huge Decorative Marquee at Bottom */}
      <div className="absolute bottom-0 left-0 w-full marquee-container bg-[var(--color-on-surface)] py-2 overflow-hidden select-none translate-y-full border-t-4 border-[var(--color-on-surface)] z-50 pointer-events-none">
        <div className="marquee-inner">
          <span className="font-display text-4xl sm:text-6xl text-[var(--color-surface)] font-black uppercase flex items-center gap-8 pr-8">
            <span>AVAILABLE FOR INTERNSHIP</span>
            <span className="text-[var(--color-primary-container)]">✦</span>
            <span>READY TO SHIP CODE</span>
            <span className="text-[var(--color-primary-container)]">✦</span>
            <span>BUILDING SYSTEMS</span>
            <span className="text-[var(--color-primary-container)]">✦</span>
          </span>
          <span className="font-display text-4xl sm:text-6xl text-[var(--color-surface)] font-black uppercase flex items-center gap-8 pr-8">
            <span>AVAILABLE FOR INTERNSHIP</span>
            <span className="text-[var(--color-primary-container)]">✦</span>
            <span>READY TO SHIP CODE</span>
            <span className="text-[var(--color-primary-container)]">✦</span>
            <span>BUILDING SYSTEMS</span>
            <span className="text-[var(--color-primary-container)]">✦</span>
          </span>
        </div>
      </div>
    </section>
  );
}
