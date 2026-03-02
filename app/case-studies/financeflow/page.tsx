"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { ProjectTimeline } from "@/components/project-timeline"
import type { TimelinePhase } from "@/components/project-timeline"

const metrics = [
  { value: "2M+", label: "Active Users" },
  { value: "$50M", label: "Series B Raised" },
  { value: "99.99%", label: "Uptime" },
  { value: "6 months", label: "Development Time" },
]

const timeline: TimelinePhase[] = [
  {
    title: "Discovery & Scoping",
    date: "January 2024",
    status: "completed",
    description:
      "Audited the existing MVP codebase and infrastructure. Mapped all user flows and identified critical scaling bottlenecks in the transaction processing pipeline. Conducted stakeholder interviews and defined a phased technical roadmap with the founding team. Delivered a 40-page technical assessment document.",
  },
  {
    title: "Architecture & Planning",
    date: "February 2024",
    status: "completed",
    description:
      "Designed a microservices architecture to replace the monolithic transaction engine. Selected the tech stack — React frontend, Node.js API layer, PostgreSQL with read replicas, Redis for caching, all hosted on AWS ECS. Set up CI/CD pipelines with GitHub Actions, staging environments, and automated testing infrastructure.",
  },
  {
    title: "Core Development — Sprint 1–4",
    date: "March – April 2024",
    status: "completed",
    description:
      "Built the core transaction engine handling deposits, withdrawals, and transfers with sub-200ms latency. Implemented user authentication with MFA, role-based access control, and the payment processing integration with Stripe. Migrated 1.2M records from the legacy database with zero data loss. Delivered a working staging environment for client review.",
  },
  {
    title: "Core Development — Sprint 5–8",
    date: "May – June 2024",
    status: "completed",
    description:
      "Built the real-time analytics dashboard with WebSocket feeds, the notification system (email + push + in-app), and the full admin panel for operations. Load testing confirmed a 10x throughput improvement over the original platform. Conducted weekly client demos and incorporated feedback across 3 iteration cycles.",
  },
  {
    title: "QA & Security Audit",
    date: "June 2024",
    status: "completed",
    description:
      "Ran a full penetration testing engagement with a third-party security firm. Completed SOC 2 Type II compliance review. End-to-end automated test coverage reached 94% across all critical paths. Zero critical or high-severity vulnerabilities found. Performed chaos engineering tests to verify fault tolerance under load.",
  },
  {
    title: "Launch & Handoff",
    date: "July 2024",
    status: "completed",
    description:
      "Executed a blue-green production deployment with zero downtime. Onboarded the client's 4-person engineering team with comprehensive documentation, architecture walkthroughs, and pair programming sessions. Provided 30 days of post-launch monitoring and support. The platform scaled to 2M+ active users within 6 months of launch.",
  },
]

const challenges = [
  "Monolithic architecture couldn't handle transaction volume beyond 10K/day",
  "Single-point-of-failure database causing intermittent outages",
  "No automated testing — every release was a manual QA effort",
  "Investor due diligence flagged scalability as the top risk",
]

const solutions = [
  "Microservices architecture processing 500K+ transactions/day",
  "Multi-region PostgreSQL with automated failover and read replicas",
  "94% automated test coverage with CI/CD deploying 10+ times/day",
  "SOC 2 Type II compliance achieved ahead of Series B close",
]

const techStack = {
  Backend: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe API"],
  Infrastructure: ["AWS ECS", "CloudFront", "RDS", "ElastiCache", "S3"],
  Monitoring: ["Datadog", "Sentry", "PagerDuty", "CloudWatch"],
}

export default function FinanceFlowPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        {/* Breadcrumb + Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white/40 hover:text-[#00ffff] text-sm mb-8 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Case Studies
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-[#00ffff]/5 border border-[#00ffff]/20 text-[#00ffff] rounded-full px-3 py-1">
                  FinTech
                </span>
                <span className="text-xs bg-[#00ff73]/5 border border-[#00ff73]/20 text-[#00ff73] rounded-full px-3 py-1">
                  Completed
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl text-white mb-3">
                FinanceFlow
              </h1>
              <p className="text-xl text-white/50 mb-10 max-w-2xl">
                From Prototype to $50M Series B
              </p>

              {/* Metrics row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="neon-card rounded-xl p-5 bg-[#0a0a0a] text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#00ffff] mb-1">
                      {m.value}
                    </div>
                    <div className="text-xs text-white/30">{m.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-12">
                <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
                  Project Timeline
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-white mt-3 mb-4">
                  Phase-by-Phase Delivery
                </h2>
                <p className="text-white/50 leading-relaxed max-w-2xl">
                  Every milestone tracked, every decision documented. Here&apos;s
                  exactly how the project progressed from day one to launch.
                </p>
              </div>
            </RevealOnScroll>

            <ProjectTimeline phases={timeline} />
          </div>
        </section>

        {/* Challenge vs Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Challenge */}
                <div className="rounded-xl p-8 bg-[#0a0a0a] border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    The Challenge
                  </h3>
                  <ul className="space-y-4">
                    {challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="rounded-xl p-8 bg-[#0a0a0a] border border-[#00ffff]/10">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ff73]" />
                    What We Built
                  </h3>
                  <ul className="space-y-4">
                    {solutions.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff73]/50 mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-lg font-semibold text-white mb-8">Technology Stack</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {Object.entries(techStack).map(([category, techs]) => (
                  <div key={category} className="rounded-xl p-6 bg-[#0a0a0a] border border-white/5">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-4">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((t) => (
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
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="neon-card rounded-xl p-8 md:p-12 bg-[#0a0a0a] text-center">
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 mx-auto mb-6 opacity-30">
                  <path
                    d="M14 24H6c0-6.627 5.373-12 12-12v6c-3.314 0-6 2.686-6 6h6v12H6V24h8zm18 0h-8c0-6.627 5.373-12 12-12v6c-3.314 0-6 2.686-6 6h6v12h-12V24h8z"
                    fill="#00ffff"
                  />
                </svg>
                <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-8 max-w-2xl mx-auto">
                  &ldquo;Tasknify didn&apos;t just build our platform — they transformed our entire
                  technical foundation. The transparency throughout the project was
                  unlike anything we&apos;d experienced. We always knew exactly where things stood.&rdquo;
                </p>
                <p className="text-white font-semibold">Marcus Chen</p>
                <p className="text-white/30 text-sm">CTO, FinanceFlow</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Have a Similar Project?
              </h2>
              <p className="text-white/40 mb-10 leading-relaxed">
                Let&apos;s talk about how we can help you scale your product
                with the same level of transparency and engineering quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] font-semibold rounded-lg px-8 py-3.5 text-sm transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center border border-white/10 hover:border-[#00ffff]/30 text-white rounded-lg px-8 py-3.5 text-sm transition-colors"
                >
                  View More Case Studies
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
