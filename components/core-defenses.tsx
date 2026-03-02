"use client"

import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

const features = [
  {
    icon: "/images/nightsec/GA5DXtJoXksEFHlAawgYB4SAg.svg",
    title: "Custom Web Applications",
    description:
      "Build responsive, high-performance web applications with modern frameworks like React, Next.js, and Node.js, tailored to your business logic.",
    badge: "Deployment Successful",
  },
  {
    icon: "/images/nightsec/ncB8RFXddeC9DUdxc57kTl7Kbg.svg",
    title: "API Development",
    description:
      "Design and implement RESTful and GraphQL APIs with clean documentation, versioning, and robust authentication for seamless integrations.",
  },
  {
    icon: "/images/nightsec/JWWP85KDnNJqhOnszLRISZnq8.svg",
    title: "Cloud & DevOps",
    description:
      "Architect scalable cloud infrastructure on AWS, GCP, or Azure with CI/CD pipelines, containerization, and automated deployments.",
  },
  {
    icon: "/images/nightsec/SbKZmGws0pLdKo0811vwn1kmoIY.svg",
    title: "Mobile Development",
    description:
      "Launch cross-platform mobile applications with React Native or native iOS/Android, delivering fluid experiences across every device.",
  },
]

export function CoreDefenses() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-6">
              Core Capabilities at a Glance
            </h2>
            <p className="text-white/50 leading-relaxed">
              Explore the essential disciplines that power your digital products,
              from frontend craft to backend architecture.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2x2 grid with center image */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="neon-card rounded-xl p-8 bg-[#0a0a0a] group"
              >
                {feature.badge && (
                  <div className="inline-flex items-center gap-2 bg-[#00ffff]/5 border border-[#00ffff]/20 rounded-full px-3 py-1 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff73]" />
                    <span className="text-[#00ffff] text-xs">{feature.badge}</span>
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center image - astronaut */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="w-28 h-28 rounded-full overflow-hidden border border-[#00ffff]/20 shadow-[0_0_40px_rgba(0,255,255,0.1)]">
              <Image
                src="/images/nightsec/astronaut.png"
                alt=""
                width={102}
                height={102}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
