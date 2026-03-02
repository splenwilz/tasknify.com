"use client"

import { useState } from "react"
import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

const cards = [
  {
    icon: "/images/nightsec/GA5DXtJoXksEFHlAawgYB4SAg.svg",
    title: "Web Development",
    description:
      "We build high-performance web applications using modern frameworks, ensuring speed, accessibility, and seamless user experiences across all devices.",
  },
  {
    icon: "/images/nightsec/JWWP85KDnNJqhOnszLRISZnq8.svg",
    title: "Mobile Apps",
    description:
      "Our mobile development team crafts native and cross-platform applications that deliver fluid, intuitive experiences on iOS and Android.",
  },
  {
    icon: "/images/nightsec/SbKZmGws0pLdKo0811vwn1kmoIY.svg",
    title: "Cloud Architecture",
    description:
      "We design and deploy scalable cloud infrastructure on AWS, GCP, and Azure, ensuring reliability, performance, and cost efficiency at every scale.",
  },
  {
    icon: "/images/nightsec/ncB8RFXddeC9DUdxc57kTl7Kbg.svg",
    title: "API & Integrations",
    description:
      "We architect robust APIs and third-party integrations, ensuring your systems communicate seamlessly and data flows reliably across platforms.",
  },
  {
    icon: "/images/nightsec/GA5DXtJoXksEFHlAawgYB4SAg.svg",
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive interfaces and user experiences, transforming complex workflows into elegant, user-centered digital products.",
  },
  {
    icon: "/images/nightsec/JWWP85KDnNJqhOnszLRISZnq8.svg",
    title: "DevOps & CI/CD",
    description:
      "With automated pipelines and infrastructure-as-code, we ensure your deployments are fast, reliable, and repeatable across every environment.",
  },
]

export function ComprehensiveProtection() {
  const [showAll, setShowAll] = useState(true)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              Services
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-white/50 leading-relaxed">
              From initial concept to production deployment, our services cover
              every layer of software development to bring your product to market.
            </p>
          </div>
          {/* Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAll(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                showAll
                  ? "border-[#00ffff] text-[#00ffff] bg-[#00ffff]/10"
                  : "border-white/10 text-white/50 hover:border-white/30"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setShowAll(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                !showAll
                  ? "border-[#00ffff] text-[#00ffff] bg-[#00ffff]/10"
                  : "border-white/10 text-white/50 hover:border-white/30"
              }`}
            >
              Core
            </button>
          </div>
        </div>
        </RevealOnScroll>

        {/* Cards 3x2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? cards : cards.slice(0, 3)).map((card) => (
            <div
              key={card.title}
              className="neon-card rounded-xl p-8 bg-[#0a0a0a] group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00ffff]/10 flex items-center justify-center mb-5 group-hover:bg-[#00ffff]/15 transition-colors">
                <Image
                  src={card.icon}
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
