"use client"

import { useEffect, useRef, useState } from "react"
import { RevealOnScroll } from "./reveal-on-scroll"

function AnimatedProgress({ target, label }: { target: number; label: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(target), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-white/30 uppercase tracking-wider">{label}</span>
        <span className="text-xs text-[#00ffff]">{target}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00ffff] to-[#00ff73] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

const stats = [
  {
    title: "Projects Delivered",
    description: "Production-grade applications shipped on time, from MVPs to enterprise platforms serving millions of users.",
    progress: 75,
    progressLabel: "Delivery Rate",
  },
  {
    title: "Code Quality",
    description: "Codebase coverage with automated testing, linting, and CI/CD pipelines ensuring production stability.",
    progress: 98,
    progressLabel: "Test Coverage",
  },
  {
    title: "Client Retention",
    description: "Long-term partnerships with clients who return for new projects, scaling their products with our team.",
    progress: 62,
    progressLabel: "Retention",
  },
  {
    title: "System Uptime",
    description: "Average uptime across all deployed applications, backed by robust infrastructure and proactive monitoring.",
    progress: 85,
    progressLabel: "Availability",
  },
]

export function StatsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              About
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-6">
              What We Deliver
            </h2>
            <p className="text-white/50 leading-relaxed">
              We combine modern frameworks with deep engineering expertise to build
              software solutions that are elegant, performant, and reliable.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats cards 2x2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="neon-card rounded-xl p-6 bg-[#0a0a0a]"
            >
              <h3 className="text-white font-semibold mb-2">
                {stat.title}
              </h3>
              <p className="text-sm text-white/30 leading-relaxed mb-6">
                {stat.description}
              </p>
              <AnimatedProgress
                target={stat.progress}
                label={stat.progressLabel}
              />
            </div>
          ))}
        </div>

        {/* Tech Stack - Scrolling */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-8">
            Technologies We Work With
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee gap-8">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 shrink-0">
                  {[
                    "React", "Next.js", "TypeScript", "Node.js", "Python",
                    "Go", "Swift", "PostgreSQL", "MongoDB", "AWS", "Docker",
                  ].map((name) => (
                    <div
                      key={`${setIndex}-${name}`}
                      className="flex items-center gap-3 shrink-0 px-5 py-3 rounded-lg bg-white/[0.03] border border-white/5"
                    >
                      <span className="text-white/50 text-sm font-medium whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
