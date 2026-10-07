"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { ProjectTimeline } from "@/components/project-timeline"
import type { TimelinePhase } from "@/components/project-timeline"
import { CaseStudyGallery } from "@/components/case-study-gallery"
import type { GalleryImage } from "@/components/case-study-gallery"

export interface CaseStudyData {
  badge: string
  status: "Completed" | "In Review" | "In Progress"
  name: string
  tagline: string
  summary: string
  metrics: { value: string; label: string }[]
  gallery: GalleryImage[]
  timeline: TimelinePhase[]
  challenges: string[]
  solutions: string[]
  techStack: Record<string, string[]>
  links?: { label: string; href: string }[]
}

/** Shared layout for a real, shipped-product case study. */
export function CaseStudyPage({ data }: { data: CaseStudyData }) {
  const statusColor = data.status === "Completed" ? "#00ff73" : "#00ffff"
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
                  {data.badge}
                </span>
                <span
                  className="text-xs rounded-full px-3 py-1 border"
                  style={{ color: statusColor, borderColor: `${statusColor}33`, background: `${statusColor}0d` }}
                >
                  {data.status}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl text-white mb-3">{data.name}</h1>
              <p className="text-xl text-white/50 mb-6 max-w-2xl">{data.tagline}</p>
              <p className="text-white/40 leading-relaxed mb-10 max-w-3xl">{data.summary}</p>

              {/* Metrics row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.metrics.map((m) => (
                  <div key={m.label} className="neon-card rounded-xl p-5 bg-[#0a0a0a] text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#00ffff] mb-1">{m.value}</div>
                    <div className="text-xs text-white/30">{m.label}</div>
                  </div>
                ))}
              </div>

              {data.links && data.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-8">
                  {data.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#00ffff]/80 hover:text-[#00ffff] border border-[#00ffff]/20 hover:border-[#00ffff]/40 rounded-lg px-4 py-2 transition-colors"
                    >
                      {l.label}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </RevealOnScroll>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-10">
                <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">The Product</span>
                <h2 className="font-display text-3xl md:text-4xl text-white mt-3">What We Shipped</h2>
              </div>
            </RevealOnScroll>
            <CaseStudyGallery images={data.gallery} />
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="mb-12">
                <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">Project Timeline</span>
                <h2 className="font-display text-3xl md:text-4xl text-white mt-3 mb-4">Phase-by-Phase Delivery</h2>
              </div>
            </RevealOnScroll>
            <ProjectTimeline phases={data.timeline} />
          </div>
        </section>

        {/* Challenge vs Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl p-8 bg-[#0a0a0a] border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    The Challenge
                  </h3>
                  <ul className="space-y-4">
                    {data.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-8 bg-[#0a0a0a] border border-[#00ffff]/10">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ff73]" />
                    What We Built
                  </h3>
                  <ul className="space-y-4">
                    {data.solutions.map((s) => (
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(data.techStack).map(([category, techs]) => (
                  <div key={category} className="rounded-xl p-6 bg-[#0a0a0a] border border-white/5">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-4">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((t) => (
                        <span key={t} className="text-xs text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
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

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Have a Similar Project?</h2>
              <p className="text-white/40 mb-10 leading-relaxed">
                Let&apos;s talk about how we can ship your product with the same level of care.
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
