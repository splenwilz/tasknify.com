"use client"

import Link from "next/link"
import { RevealOnScroll } from "./reveal-on-scroll"

const projects = [
  {
    badge: "FinTech",
    name: "FinanceFlow",
    description:
      "Rebuilt a fintech MVP into an enterprise-grade platform processing millions of transactions daily, scaling from 1,000 to 2M+ users.",
    metrics: [
      { value: "2M+", label: "Active Users" },
      { value: "$50M", label: "Series B Raised" },
    ],
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    badge: "Healthcare",
    name: "HealthTech Platform",
    description:
      "Built a HIPAA-compliant telemedicine platform with EHR integrations, serving hundreds of thousands of patients nationwide.",
    metrics: [
      { value: "500K+", label: "Patients Served" },
      { value: "15+", label: "EHR Integrations" },
    ],
    tech: ["React", "Node.js", "HIPAA", "AWS"],
  },
  {
    badge: "Retail",
    name: "E-commerce Optimization",
    description:
      "Optimized checkout flow and recommendation engine for a Fortune 500 retailer, driving measurable revenue growth.",
    metrics: [
      { value: "40%", label: "Conversion Increase" },
      { value: "$50M", label: "Additional Revenue" },
    ],
    tech: ["Python", "ML", "Redis", "Kubernetes"],
  },
]

export function PastProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-6">
              Projects We&apos;ve Delivered
            </h2>
            <p className="text-white/50 leading-relaxed">
              Real results from real projects. Here are a few of the products
              we&apos;ve helped bring to life.
            </p>
          </div>
        </RevealOnScroll>

        {/* Project cards */}
        <RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="neon-card rounded-xl p-8 bg-[#0a0a0a] group"
              >
                {/* Badge */}
                <div className="inline-flex items-center bg-[#00ffff]/5 border border-[#00ffff]/20 rounded-full px-3 py-1 mb-5">
                  <span className="text-[#00ffff] text-xs">{project.badge}</span>
                </div>

                {/* Name + description */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-[#00ffff]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-white/30">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* View all link */}
        <RevealOnScroll>
          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#00ffff] text-sm hover:text-[#00ffff]/80 transition-colors"
            >
              View All Case Studies
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
