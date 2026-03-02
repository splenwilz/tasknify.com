"use client"

import { RevealOnScroll } from "./reveal-on-scroll"

export interface TimelinePhase {
  title: string
  date: string
  status: "completed" | "in-progress" | "upcoming"
  description: string
}

export function ProjectTimeline({ phases }: { phases: TimelinePhase[] }) {
  return (
    <div className="relative">
      {phases.map((phase, i) => {
        const isCompleted = phase.status === "completed"
        const isInProgress = phase.status === "in-progress"
        const isLast = i === phases.length - 1

        return (
          <RevealOnScroll key={phase.title}>
            <div className="relative pl-10 pb-12 last:pb-0">
              {/* Vertical line */}
              {!isLast && (
                <div
                  className={`absolute left-[11px] top-6 bottom-0 w-px ${
                    isCompleted
                      ? "bg-[#00ffff]/30"
                      : "bg-white/10"
                  }`}
                />
              )}

              {/* Dot */}
              <div className="absolute left-0 top-1.5">
                {isInProgress ? (
                  <div className="relative">
                    <div className="w-[23px] h-[23px] rounded-full bg-[#00ffff]/20 animate-pulse-dot absolute -inset-[4px]" />
                    <div className="w-[15px] h-[15px] rounded-full bg-[#00ffff] shadow-[0_0_12px_rgba(0,255,255,0.5)]" />
                  </div>
                ) : isCompleted ? (
                  <div className="w-[15px] h-[15px] rounded-full bg-[#00ffff] flex items-center justify-center">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-[15px] h-[15px] rounded-full border-2 border-white/20 bg-transparent" />
                )}
              </div>

              {/* Content */}
              <div
                className={`rounded-xl p-6 transition-all ${
                  isInProgress
                    ? "bg-[#0a0a0a] border border-[#00ffff]/30 shadow-[0_0_20px_rgba(0,255,255,0.06)]"
                    : isCompleted
                    ? "bg-[#0a0a0a] border border-white/5"
                    : "bg-[#0a0a0a]/50 border border-white/5"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3
                    className={`text-base font-semibold ${
                      phase.status === "upcoming" ? "text-white/30" : "text-white"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full ${
                      isInProgress
                        ? "bg-[#00ffff]/10 text-[#00ffff] border border-[#00ffff]/20"
                        : isCompleted
                        ? "bg-[#00ff73]/10 text-[#00ff73] border border-[#00ff73]/20"
                        : "bg-white/5 text-white/30 border border-white/10"
                    }`}
                  >
                    {isInProgress ? "In Progress" : isCompleted ? "Completed" : "Upcoming"}
                  </span>
                </div>
                <p className="text-xs text-white/30 mb-3">{phase.date}</p>
                <p
                  className={`text-sm leading-relaxed ${
                    phase.status === "upcoming" ? "text-white/20" : "text-white/40"
                  }`}
                >
                  {phase.description}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        )
      })}
    </div>
  )
}
