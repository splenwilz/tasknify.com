"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const currentProjects = [
  {
    name: "Logistics Management Platform",
    badge: "Logistics",
    description:
      "End-to-end fleet management and route optimization platform with real-time GPS tracking, automated dispatch, and driver mobile app.",
    started: "Jan 2026",
    estDelivery: "Jun 2026",
    phases: [
      { label: "Discovery", status: "completed" as const },
      { label: "Design", status: "completed" as const },
      { label: "Development", status: "in-progress" as const },
      { label: "QA", status: "upcoming" as const },
      { label: "Launch", status: "upcoming" as const },
    ],
    tech: ["Next.js", "Go", "PostgreSQL", "Redis", "AWS"],
  },
  {
    name: "AI-Powered Hiring Platform",
    badge: "HR Tech",
    description:
      "Intelligent recruitment platform with resume parsing, candidate scoring, and automated interview scheduling for enterprise hiring teams.",
    started: "Feb 2026",
    estDelivery: "Aug 2026",
    phases: [
      { label: "Discovery", status: "completed" as const },
      { label: "Design", status: "in-progress" as const },
      { label: "Development", status: "upcoming" as const },
      { label: "QA", status: "upcoming" as const },
      { label: "Launch", status: "upcoming" as const },
    ],
    tech: ["React", "Python", "OpenAI", "PostgreSQL", "GCP"],
  },
]

const completedProjects = [
  {
    badge: "FinTech",
    name: "FinanceFlow",
    description:
      "Rebuilt a fintech MVP into an enterprise-grade platform processing millions of transactions daily.",
    metrics: [
      { value: "2M+", label: "Active Users" },
      { value: "$50M", label: "Series B Raised" },
    ],
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    href: "/case-studies/financeflow",
  },
  {
    badge: "Healthcare",
    name: "HealthTech Platform",
    description:
      "Built a HIPAA-compliant telemedicine platform with EHR integrations serving patients nationwide.",
    metrics: [
      { value: "500K+", label: "Patients Served" },
      { value: "15+", label: "EHR Integrations" },
    ],
    tech: ["React", "Node.js", "HIPAA", "AWS"],
    href: "/case-studies/healthtech-platform",
  },
  {
    badge: "Retail",
    name: "E-commerce Optimization",
    description:
      "Optimized checkout flow and recommendation engine for a Fortune 500 retailer.",
    metrics: [
      { value: "40%", label: "Conversion Increase" },
      { value: "$50M", label: "Additional Revenue" },
    ],
    tech: ["Python", "ML", "Redis", "Kubernetes"],
    href: "/case-studies",
  },
]

const aggregateStats = [
  { value: "$2B+", label: "Client Valuations" },
  { value: "50+", label: "Products Shipped" },
  { value: "99.9%", label: "Average Uptime" },
  { value: "10M+", label: "End Users" },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              src="/media/pZJZvYHsVTZ3A35vIhN4WUN8O8.mp4"
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
            <div className="absolute inset-0 bg-[#050505]/70" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <RevealOnScroll>
              <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
                Case Studies
              </span>
              <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">
                Real Results, Full Transparency
              </h1>
              <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Every project gets a timeline. Every milestone is tracked. See exactly
                how we deliver — from kickoff to launch and beyond.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse-dot" />
                <span className="text-[#00ffff] text-sm font-medium tracking-wide uppercase">
                  In Progress
                </span>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-6">
              {currentProjects.map((project) => (
                <RevealOnScroll key={project.name}>
                  <div className="neon-card rounded-xl p-8 bg-[#0a0a0a] border-l-2 border-l-[#00ffff]/40">
                    {/* Badge + name */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-[#00ffff]/5 border border-[#00ffff]/20 text-[#00ffff] rounded-full px-3 py-1">
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Phase progress */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        {project.phases.map((phase, i) => {
                          const isCompleted = phase.status === "completed"
                          const isActive = phase.status === "in-progress"
                          return (
                            <div key={phase.label} className="flex items-center flex-1">
                              <div className="flex flex-col items-center">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    isActive
                                      ? "bg-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5)] animate-pulse-dot"
                                      : isCompleted
                                      ? "bg-[#00ff73]"
                                      : "border border-white/20 bg-transparent"
                                  }`}
                                />
                                <span
                                  className={`text-[10px] mt-2 whitespace-nowrap ${
                                    isActive
                                      ? "text-[#00ffff]"
                                      : isCompleted
                                      ? "text-[#00ff73]/60"
                                      : "text-white/20"
                                  }`}
                                >
                                  {phase.label}
                                </span>
                              </div>
                              {i < project.phases.length - 1 && (
                                <div
                                  className={`flex-1 h-px mx-2 mb-5 ${
                                    isCompleted ? "bg-[#00ff73]/30" : "bg-white/10"
                                  }`}
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Dates + tech */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex gap-6 text-xs text-white/30">
                        <span>Started: <span className="text-white/50">{project.started}</span></span>
                        <span>Est. Delivery: <span className="text-white/50">{project.estDelivery}</span></span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-white/40 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-[#00ff73]" />
                <span className="text-[#00ff73] text-sm font-medium tracking-wide uppercase">
                  Delivered
                </span>
              </div>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <RevealOnScroll key={project.name}>
                  <Link href={project.href} className="block group">
                    <div className="neon-card rounded-xl p-8 bg-[#0a0a0a] h-full">
                      <span className="inline-flex text-xs bg-[#00ffff]/5 border border-[#00ffff]/20 text-[#00ffff] rounded-full px-3 py-1 mb-5">
                        {project.badge}
                      </span>

                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#00ffff] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-2xl font-bold text-[#00ffff]">{m.value}</div>
                            <div className="text-xs text-white/30">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm text-[#00ffff]/60 group-hover:text-[#00ffff] transition-colors">
                        View Timeline
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Aggregate Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aggregateStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="neon-card rounded-xl p-6 bg-[#0a0a0a] text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-white/40 text-base mb-10 leading-relaxed">
                Let&apos;s discuss how we can help you achieve similar results
                for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] font-semibold rounded-lg px-8 py-3.5 text-sm transition-colors"
              >
                Start Your Project
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
