"use client"

import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

export function LeadershipQuote() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
        {/* Decorative quote icon */}
        <div className="flex justify-center mb-8">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="w-10 h-10 opacity-30"
          >
            <path
              d="M14 24H6c0-6.627 5.373-12 12-12v6c-3.314 0-6 2.686-6 6h6v12H6V24h8zm18 0h-8c0-6.627 5.373-12 12-12v6c-3.314 0-6 2.686-6 6h6v12h-12V24h8z"
              fill="#00ffff"
            />
          </svg>
        </div>

        <h2 className="font-display text-2xl md:text-4xl text-white mb-10">
          A Note from Our Leadership
        </h2>

        {/* Quote */}
        <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-3xl mx-auto">
          At Tasknify, our leadership believes that great software is built on
          clarity, craftsmanship, and relentless iteration. As we navigate an
          ever-evolving technology landscape, our mission remains clear — to empower
          organizations with scalable architectures and production-ready digital
          products. This vision shapes every line of code we write and every
          system we deliver.
        </p>

        {/* Author with image */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-[#00ffff]/20">
            <Image
              src="/images/nightsec/leader.png"
              alt="Godswill William"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Signature line */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div>
            <p className="text-white font-semibold">Godswill William</p>
            <p className="text-white/30 text-sm">Founder &amp; Principal Engineer</p>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
