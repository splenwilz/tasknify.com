"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function UseCasesSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Enterprise", "Healthcare", "Finance", "SaaS", "Startup"]

  const cases = [
    {
      title: "Real-Time Analytics Dashboard",
      company: "Fortune 500 Enterprise",
      tags: ["Enterprise", "SaaS"],
      gradient: "from-[#0a1218] to-[#050505]",
    },
    {
      title: "Patient Management Platform",
      company: "Regional Health Network",
      tags: ["Healthcare", "Enterprise"],
      gradient: "from-[#0a1412] to-[#050505]",
    },
    {
      title: "Payment Processing Platform",
      company: "FinTech Startup",
      tags: ["Finance", "SaaS"],
      gradient: "from-[#120a14] to-[#050505]",
    },
  ]

  const filteredCases =
    activeFilter === "All"
      ? cases
      : cases.filter((c) => c.tags.includes(activeFilter))

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-white/50 text-sm tracking-wider">
            Use Cases
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-6 max-w-2xl">
            <span className="cyan-underline">Diverse</span> Software Solutions
            for every{" "}
            <span className="cyan-underline">Challenge</span>
          </h2>
          <p className="text-white/50 leading-relaxed max-w-2xl">
            From SaaS platforms to industry-specific enterprise tools:
            we&apos;ve proven our expertise in a wide variety of projects. With
            results that help our clients achieve lasting growth — regardless of
            size or industry.
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-[#00ffff]/10 rounded flex items-center justify-center">
            <svg
              className="w-4 h-4 text-[#00ffff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === filter
                  ? "border-[#00ffff] text-[#00ffff] bg-[#00ffff]/10"
                  : "border-white/10 text-white/50 hover:border-white/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.title}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-b ${caseItem.gradient} neon-card group cursor-pointer`}
            >
              {/* Placeholder image area */}
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg viewBox="0 0 200 200" className="w-32 h-32">
                    <rect
                      x="40"
                      y="40"
                      width="80"
                      height="80"
                      rx="4"
                      stroke="#00ffff"
                      strokeWidth="1"
                      fill="none"
                      transform="rotate(10 80 80)"
                    />
                    <circle
                      cx="130"
                      cy="130"
                      r="30"
                      stroke="#00ffff"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-lg font-bold text-white mb-1">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-white/40">{caseItem.company}</p>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 z-20">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00ffff]/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#00ffff] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
