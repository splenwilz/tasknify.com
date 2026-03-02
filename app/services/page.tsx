"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const potentialCards = [
  {
    number: "01",
    title: "Technical Discovery",
    description:
      "We evaluate your existing systems, identify technical opportunities, and recommend solutions that align with your business objectives and growth trajectory.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description:
      "We analyze your data models and system requirements to design scalable architectures that perform reliably across all platforms and environments.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "We implement comprehensive testing strategies, including unit, integration, and E2E testing, to ensure reliability and build confidence in every release.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We design and implement robust CI/CD pipelines, ensuring your team can ship, monitor, and roll back releases with confidence in minutes.",
  },
]

const steps = [
  {
    number: "01",
    title: "Discovery & Roadmap",
    description:
      "We begin by understanding your business inside and out. Through structured workshops and stakeholder interviews, we map your current systems, technical debt, and goals. The result is a tailored development roadmap that prioritizes high-impact initiatives.",
  },
  {
    number: "02",
    title: "Architecture Design & Technology Selection",
    description:
      "Based on your roadmap, we design a robust system architecture and select the optimal frameworks and technologies. We consider scalability, performance requirements, and your team's capabilities to ensure the solution is both powerful and practical.",
  },
  {
    number: "03",
    title: "Implementation, Testing & Continuous Delivery",
    description:
      "Our engineers build your product in iterative sprints, testing at every stage. Unit tests, integration tests, and performance benchmarks ensure quality. After launch, we provide ongoing support and continuous optimization.",
  },
]

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              src="/media/fJb4ExvGppt4mVPRn7K3miduw.mp4"
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
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <span className="inline-block text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase mb-6">
                  Development Services
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                  Expert{" "}
                  <span className="cyan-underline">Development</span>{" "}
                  for{" "}
                  <span className="cyan-underline">Your Business</span>
                </h1>
                <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-xl">
                  Tasknify provides end-to-end software development services to help
                  businesses design, build, and scale digital products. We combine
                  deep engineering expertise with modern technology to deliver
                  measurable results.
                </p>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <span className="text-white font-semibold text-lg">
                    Let&apos;s build it.
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#00ffff] transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Right illustration */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <svg
                    viewBox="0 0 400 400"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle cx="200" cy="200" r="150" fill="#00ffff" fillOpacity="0.03" />
                    <circle cx="200" cy="200" r="140" stroke="#00ffff" strokeOpacity="0.15" strokeWidth="1" />
                    <circle cx="200" cy="200" r="100" stroke="#00ffff" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="8 4" />
                    <polygon points="200,80 300,160 270,280 130,280 100,160" stroke="#00ffff" strokeOpacity="0.3" strokeWidth="1.5" fill="#00ffff" fillOpacity="0.05" />
                    <polygon points="200,140 240,165 240,215 200,240 160,215 160,165" stroke="#00ffff" strokeOpacity="0.5" strokeWidth="1.5" fill="#00ffff" fillOpacity="0.08" />
                    <line x1="200" y1="80" x2="200" y2="140" stroke="#00ffff" strokeOpacity="0.2" strokeWidth="1" />
                    <line x1="300" y1="160" x2="240" y2="165" stroke="#00ffff" strokeOpacity="0.2" strokeWidth="1" />
                    <line x1="100" y1="160" x2="160" y2="165" stroke="#00ffff" strokeOpacity="0.2" strokeWidth="1" />
                    <line x1="270" y1="280" x2="240" y2="215" stroke="#00ffff" strokeOpacity="0.2" strokeWidth="1" />
                    <line x1="130" y1="280" x2="160" y2="215" stroke="#00ffff" strokeOpacity="0.2" strokeWidth="1" />
                    <circle cx="200" cy="80" r="4" fill="#00ffff" />
                    <circle cx="300" cy="160" r="4" fill="#00ffff" />
                    <circle cx="270" cy="280" r="4" fill="#00ffff" />
                    <circle cx="130" cy="280" r="4" fill="#00ffff" />
                    <circle cx="100" cy="160" r="4" fill="#00ffff" />
                    <circle cx="200" cy="190" r="6" fill="#00ffff" fillOpacity="0.8" />
                    <circle cx="200" cy="190" r="12" stroke="#00ffff" strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx="320" cy="100" r="2" fill="#00ffff" fillOpacity="0.4" />
                    <circle cx="80" cy="300" r="2" fill="#00ffff" fillOpacity="0.4" />
                    <circle cx="340" cy="280" r="1.5" fill="#00ffff" fillOpacity="0.3" />
                    <circle cx="60" cy="120" r="1.5" fill="#00ffff" fillOpacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== IDENTIFYING POTENTIAL SECTION ===== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Identifying{" "}
                <span className="cyan-underline">Opportunities</span> —{" "}
                <span className="cyan-underline">Systematically</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Before we write a single line of code, we thoroughly assess
                your requirements to determine where technology can create the most impact.
                Our structured approach ensures every recommendation is grounded
                in data and aligned with your growth goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {potentialCards.map((card) => (
                <div
                  key={card.number}
                  className="bg-[#050505] rounded-2xl neon-card p-6 flex flex-col group"
                >
                  <span className="text-[#00ffff] font-mono text-sm font-medium mb-4">
                    {card.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  <div className="w-full aspect-[4/3] bg-white/5 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      viewBox="0 0 80 60"
                      fill="none"
                      className="w-16 h-12 opacity-30"
                    >
                      <rect x="5" y="5" width="70" height="50" rx="6" stroke="#00ffff" strokeWidth="1.5" />
                      <circle cx="25" cy="25" r="8" stroke="#00ffff" strokeWidth="1" />
                      <line x1="35" y1="20" x2="65" y2="20" stroke="#00ffff" strokeWidth="1" />
                      <line x1="35" y1="30" x2="55" y2="30" stroke="#00ffff" strokeWidth="1" />
                      <line x1="15" y1="42" x2="65" y2="42" stroke="#00ffff" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
                    {card.description}
                  </p>
                  <div className="flex justify-end">
                    <ArrowUpRight className="w-5 h-5 text-[#00ffff] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROMISE SECTION ===== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase mb-6">
              Our Tasknify Promise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
              Our promise: We build software only when it creates real value
              for your business.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] rounded-full px-8 py-3 text-sm font-semibold transition-colors"
            >
              Get a Technical Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ===== STEPS SECTION ===== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left illustration */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <svg
                    viewBox="0 0 400 400"
                    fill="none"
                    className="w-full h-full"
                  >
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="40"
                        y1={60 + i * 40}
                        x2="360"
                        y2={60 + i * 40}
                        stroke="#00ffff"
                        strokeOpacity="0.05"
                        strokeWidth="1"
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={60 + i * 40}
                        y1="40"
                        x2={60 + i * 40}
                        y2="360"
                        stroke="#00ffff"
                        strokeOpacity="0.05"
                        strokeWidth="1"
                      />
                    ))}
                    <path
                      d="M80 320 L160 240 L200 260 L280 140 L340 100"
                      stroke="#00ffff"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M80 320 L160 240 L200 260 L280 140 L340 100 L340 340 L80 340 Z"
                      fill="#00ffff"
                      fillOpacity="0.05"
                    />
                    <circle cx="80" cy="320" r="5" fill="#00ffff" />
                    <circle cx="160" cy="240" r="5" fill="#00ffff" />
                    <circle cx="200" cy="260" r="5" fill="#00ffff" />
                    <circle cx="280" cy="140" r="5" fill="#00ffff" />
                    <circle cx="340" cy="100" r="5" fill="#00ffff" />
                    <rect x="148" y="228" width="24" height="24" rx="4" stroke="#00ffff" strokeOpacity="0.3" strokeWidth="1" fill="none" />
                    <rect x="268" y="128" width="24" height="24" rx="4" stroke="#00ffff" strokeOpacity="0.3" strokeWidth="1" fill="none" />
                    <rect x="100" y="190" width="60" height="6" rx="3" fill="#00ffff" fillOpacity="0.15" />
                    <rect x="240" y="100" width="40" height="6" rx="3" fill="#00ffff" fillOpacity="0.15" />
                  </svg>
                </div>
              </div>

              {/* Right content */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[#00ffff] font-mono text-sm font-medium">
                    {steps[activeStep].number}
                  </span>
                  <span className="text-white/20 font-mono text-sm">/</span>
                  <span className="text-white/20 font-mono text-sm">
                    0{steps.length}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                  {steps[activeStep].title}
                </h2>

                <p className="text-lg text-white/50 leading-relaxed mb-10">
                  {steps[activeStep].description}
                </p>

                <div className="flex items-center gap-3">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeStep
                          ? "w-10 h-3 bg-[#00ffff]"
                          : "w-3 h-3 bg-white/10 hover:bg-white/30"
                      }`}
                      aria-label={`Step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <ContactSection />

      </main>

      <Footer />
    </div>
  )
}
