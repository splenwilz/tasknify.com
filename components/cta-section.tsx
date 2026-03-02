"use client"

import Link from "next/link"
import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

export function CtaSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          src="/media/XOwLdNBabkifSjvwP8aDLEmbSqk.mp4"
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
        <div className="absolute inset-0 bg-[#050505]/75" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <RevealOnScroll>
        {/* Paper plane icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/nightsec/paper-plane.png"
            alt=""
            width={60}
            height={37}
            className="opacity-40"
          />
        </div>

        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
          Let&apos;s Talk About
          <br />
          Your Project
        </h2>
        <p className="text-white/40 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Have questions or need a custom solution? Reach out and our team will
          get back to you shortly.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-[#00ffff]/40 hover:bg-white/5 rounded-lg px-8 py-3.5 text-sm font-medium transition-all"
        >
          Get in Touch
        </Link>
        </RevealOnScroll>
      </div>
    </section>
  )
}
