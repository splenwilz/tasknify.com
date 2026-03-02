"use client"

import Link from "next/link"
import { RevealOnScroll } from "./reveal-on-scroll"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          src="/media/QuN1ehny4A3VcebYsn8Mndpbo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
        {/* Darkening overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ffff]/[0.03] rounded-full blur-[120px]" />
      </div>


      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge with corner brackets */}
        <RevealOnScroll delay={0.1}>
          <div className="relative inline-flex items-center justify-center px-3 py-1.5 mb-10">
            {/* Background */}
            <div className="absolute inset-0 bg-[#00ffff]/10" />
            {/* Corner brackets */}
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#00ffff]" />
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#00ffff]" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#00ffff]" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#00ffff]" />
            <p className="relative text-[#00ffff] text-sm tracking-[-0.02em] leading-[1.6]">
              Custom Software Development
            </p>
          </div>
        </RevealOnScroll>

        {/* Main headline */}
        <RevealOnScroll delay={0.2}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] mb-8">
            Your Vision,
            <br />
            Precision Engineered
          </h1>
        </RevealOnScroll>

        {/* Subtitle */}
        <RevealOnScroll delay={0.3}>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your vision into production-grade software with modern
            architecture and precision engineering.
          </p>
        </RevealOnScroll>

        {/* CTA Button with corner brackets */}
        <RevealOnScroll delay={0.4}>
          <Link href="/contact" className="relative inline-flex items-center justify-center px-8 py-3.5 group">
            {/* Corner brackets */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#d9e0ff] group-hover:border-[#00ffff] transition-colors" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#d9e0ff] group-hover:border-[#00ffff] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#d9e0ff] group-hover:border-[#00ffff] transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#d9e0ff] group-hover:border-[#00ffff] transition-colors" />
            <span className="relative text-white text-lg tracking-[-0.02em]">
              Get in Touch
            </span>
          </Link>
        </RevealOnScroll>
      </div>

      {/* Trusted by section at bottom */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10">
        <p className="text-center text-xs text-white/30 mb-4 tracking-wider">
          Trusted by top innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4">
          {["Vercel", "Stripe", "Loom", "APEX", "Quantum", "Celestial", "Basecamp", "Linear"].map((name) => (
            <span key={name} className="text-white/20 text-sm font-medium tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  )
}
