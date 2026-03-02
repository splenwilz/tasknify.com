"use client"

import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

export function ActiveThreatsGlobe() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
        {/* Globe visualization container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] rounded-2xl overflow-hidden bg-[#0a0a0a] neon-border">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* World map image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <Image
              src="/images/nightsec/world-map.png"
              alt="World map"
              width={824}
              height={561}
              className="w-full h-full object-contain"
              style={{ filter: "hue-rotate(160deg) saturate(2) brightness(0.8)" }}
            />
          </div>

          {/* Pulsing threat dots */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            {[
              { cx: 200, cy: 150, delay: "0s" },
              { cx: 260, cy: 300, delay: "0.5s" },
              { cx: 480, cy: 110, delay: "1s" },
              { cx: 490, cy: 250, delay: "1.5s" },
              { cx: 600, cy: 100, delay: "0.3s" },
              { cx: 700, cy: 130, delay: "0.8s" },
              { cx: 820, cy: 340, delay: "1.2s" },
              { cx: 170, cy: 130, delay: "0.7s" },
              { cx: 520, cy: 180, delay: "1.8s" },
              { cx: 750, cy: 170, delay: "0.2s" },
            ].map((dot, i) => (
              <g key={i}>
                <circle cx={dot.cx} cy={dot.cy} r="3" fill="#00ffff" opacity="0.8" />
                <circle cx={dot.cx} cy={dot.cy} r="3" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.4">
                  <animate attributeName="r" from="3" to="14" dur="2s" begin={dot.delay} repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin={dot.delay} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
            {/* Connection lines */}
            <line x1="200" y1="150" x2="480" y2="110" stroke="#00ffff" strokeWidth="0.3" opacity="0.12" />
            <line x1="480" y1="110" x2="700" y2="130" stroke="#00ffff" strokeWidth="0.3" opacity="0.12" />
            <line x1="700" y1="130" x2="820" y2="340" stroke="#00ffff" strokeWidth="0.3" opacity="0.12" />
            <line x1="200" y1="150" x2="260" y2="300" stroke="#00ffff" strokeWidth="0.3" opacity="0.12" />
          </svg>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a_75%)]" />

          {/* Scanning line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent animate-scan" />
          </div>

          {/* Center text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/80 text-center leading-tight">
              Active Projects
              <br />
              <span className="text-[#00ffff]/80">Worldwide</span>
            </h2>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
