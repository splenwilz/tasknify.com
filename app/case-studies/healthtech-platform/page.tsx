"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { ProjectTimeline } from "@/components/project-timeline"
import type { TimelinePhase } from "@/components/project-timeline"

const metrics = [
  { value: "500K+", label: "Patients Served" },
  { value: "15+", label: "EHR Integrations" },
  { value: "SOC 2", label: "Type II Certified" },
  { value: "99.95%", label: "Platform Uptime" },
]

const timeline: TimelinePhase[] = [
  {
    title: "Discovery & Compliance Assessment",
    date: "March 2024",
    status: "completed",
    description:
      "Conducted a comprehensive audit of regulatory requirements including HIPAA, HITECH, and state-level privacy laws. Mapped the patient journey across 12 specialties. Interviewed clinical staff, administrators, and patients. Defined compliance-first architecture requirements and created a phased delivery plan aligned with the client's Series A timeline.",
  },
  {
    title: "Architecture & HIPAA Framework",
    date: "April 2024",
    status: "completed",
    description:
      "Designed a zero-trust architecture with end-to-end encryption for all patient data at rest and in transit. Built the HIPAA compliance layer — audit logging, access controls, consent management, and data retention policies. Selected infrastructure: React frontend, Node.js API, PostgreSQL with encryption, all on AWS GovCloud with BAA in place.",
  },
  {
    title: "Core Platform Development",
    date: "May – July 2024",
    status: "completed",
    description:
      "Built the telemedicine video consultation system with WebRTC, patient scheduling engine, electronic prescriptions module, and the clinician dashboard. Implemented role-based access for 6 user types (patient, doctor, nurse, admin, pharmacist, billing). Delivered bi-weekly staging demos with the clinical team and incorporated 40+ feedback items.",
  },
  {
    title: "EHR Integration Sprint",
    date: "August 2024",
    status: "completed",
    description:
      "Integrated with 15+ Electronic Health Record systems using HL7 FHIR R4 APIs. Built a universal adapter layer to normalize data formats across Epic, Cerner, Allscripts, and athenahealth. Implemented real-time data sync with conflict resolution. Each integration was validated with test patient data before going live.",
  },
  {
    title: "Security Audit & SOC 2",
    date: "September 2024",
    status: "completed",
    description:
      "Engaged an independent auditor for SOC 2 Type II certification. Passed penetration testing with zero critical findings. Achieved full HIPAA compliance certification. Conducted a red team exercise simulating breach scenarios. Automated compliance monitoring with continuous alerting on access anomalies.",
  },
  {
    title: "Launch & Monitoring",
    date: "October 2024",
    status: "completed",
    description:
      "Rolled out to 50 initial clinics with a phased onboarding plan. Provided on-site training for clinical staff. Established 24/7 monitoring with automatic incident escalation. Platform scaled to 500K+ patients within 4 months. Post-launch support included weekly performance reviews and optimization sprints.",
  },
]

const challenges = [
  "No existing telemedicine infrastructure — everything built from scratch",
  "Strict HIPAA and state-level compliance requirements across 12 states",
  "Complex EHR landscape with 15+ systems using different data formats",
  "Clinical staff with limited technical experience needed intuitive UX",
]

const solutions = [
  "HIPAA-compliant telemedicine platform with end-to-end encryption",
  "Universal EHR adapter layer integrating 15+ systems via FHIR R4",
  "SOC 2 Type II certified with zero critical audit findings",
  "Intuitive clinician dashboard tested with 50+ healthcare workers",
]

const techStack = {
  Backend: ["Node.js", "Express", "PostgreSQL", "Redis", "HL7 FHIR"],
  Infrastructure: ["AWS GovCloud", "CloudFront", "RDS", "S3", "KMS"],
  Compliance: ["SOC 2 Type II", "HIPAA", "HITECH", "Audit Logging"],
}

export default function HealthTechPage() {
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
                  Healthcare
                </span>
                <span className="text-xs bg-[#00ff73]/5 border border-[#00ff73]/20 text-[#00ff73] rounded-full px-3 py-1">
                  Completed
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-6xl text-white mb-3">
                HealthTech Platform
              </h1>
              <p className="text-xl text-white/50 mb-10 max-w-2xl">
                HIPAA-Compliant Telemedicine at Scale
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
                  From compliance assessment to nationwide rollout — every phase
                  documented with full transparency for the client team.
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
                  &ldquo;The timeline transparency was game-changing for us. Our board could see
                  exactly where the project stood at any point. Tasknify delivered a platform
                  that met every compliance requirement and our clinical staff actually
                  enjoys using it.&rdquo;
                </p>
                <p className="text-white font-semibold">Dr. Sarah Patel</p>
                <p className="text-white/30 text-sm">Chief Medical Officer</p>
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
                Let&apos;s talk about how we can help you build a compliant,
                scalable healthcare platform.
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
