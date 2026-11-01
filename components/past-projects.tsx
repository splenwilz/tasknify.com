"use client"

import Link from "next/link"
import { RevealOnScroll } from "./reveal-on-scroll"

const projects = [
  {
    badge: "Health & Fitness",
    name: "Pepmax",
    description:
      "Native iOS peptide dose tracker with a reconstitution calculator, dose log, vial inventory and cycle tracking. Built and shipped to the App Store in ten weeks.",
    metrics: [
      { value: "Live", label: "On the App Store" },
      { value: "10 wks", label: "Kickoff to launch" },
    ],
    tech: ["React Native", "Expo", "tRPC", "MongoDB"],
    href: "/case-studies/pepmax",
  },
  {
    badge: "Photo Booth · Mobile",
    name: "BoothIQ Mobile",
    description:
      "Companion app to the BoothIQ photo booth software we built: live revenue, hardware alerts, remote control and a template store, for iOS and Android.",
    metrics: [
      { value: "Live", label: "On the App Store" },
      { value: "130", label: "Test files, TDD" },
    ],
    tech: ["React Native", "Expo", "StoreKit", "Push"],
    href: "/case-studies/boothiq-mobile",
  },
  {
    badge: "PropTech · Elevator industry",
    name: "Lift AI",
    description:
      "Seven months embedded in Lift AI's asset-management platform: service contracts, KPI targets, compliance tracking and insight reports on a Django API and React web app.",
    metrics: [
      { value: "7 mo", label: "Full time, 2024 to 2025" },
      { value: "217", label: "Commits shipped" },
    ],
    tech: ["Django", "DRF", "React", "TypeScript"],
    href: "/case-studies/lift-ai",
  },
  {
    badge: "Photo Booth · Web",
    name: "BoothIQ Web Dashboard",
    description:
      "boothiq.com: the operator dashboard, admin panel, store, template marketplace and operator docs, on the same API as the kiosk and the mobile app.",
    metrics: [
      { value: "389", label: "Commits since Jan 2026" },
      { value: "4", label: "Surfaces in one codebase" },
    ],
    tech: ["Next.js 16", "React 19", "Tailwind 4", "FastAPI"],
    href: "/case-studies/boothiq-dashboard",
  },
  {
    badge: "Publishing · Web & mobile",
    name: "The Bible Says",
    description:
      "Thirteen months as the WordPress and React developer on Navigo's online Bible commentary platform, across the content backend, the web front end and the mobile apps.",
    metrics: [
      { value: "13 mo", label: "Jul 2023 to Jul 2024" },
      { value: "iOS + Android", label: "Apps in both stores" },
    ],
    tech: ["WordPress", "React", "React Native", "REST"],
    href: "/case-studies/thebiblesays",
  },
  {
    badge: "Real estate · WordPress",
    name: "Archer Property Partners",
    description:
      "A WordPress site for a medical real-estate investment firm, built from a marketing agency's design and launched in four weeks.",
    metrics: [
      { value: "4 wks", label: "Kickoff to launch" },
      { value: "3", label: "Audience journeys" },
    ],
    tech: ["WordPress", "PHP", "SEO"],
    href: "/case-studies/archer-property-partners",
  },
]

export function PastProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">
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
              <Link
                key={project.name}
                href={"href" in project && project.href ? project.href : "/case-studies"}
                className="neon-card rounded-xl p-8 bg-[#0a0a0a] group block"
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
              </Link>
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
