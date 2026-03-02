"use client"

import Link from "next/link"
import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

const features = [
  "Custom web & mobile development",
  "Dedicated project manager",
  "Cloud infrastructure & DevOps",
  "API design & integration",
  "UI/UX design & prototyping",
  "24/7 technical support & monitoring",
]

const plans = [
  {
    name: "Starter",
    label: "Perfect for MVPs & small projects",
    popular: false,
  },
  {
    name: "Growth",
    label: "For scaling products & teams",
    popular: true,
  },
  {
    name: "Enterprise",
    label: "Full-scale custom development",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              Pricing
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-4">
              Per-Project Pricing
            </h2>
            <p className="text-white/50 leading-relaxed">
              Every project is unique. We scope, estimate, and deliver with
              transparent pricing tailored to your goals and timeline.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/30">
              Custom quotes per engagement
            </div>
          </div>
        </RevealOnScroll>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 relative ${
                plan.popular
                  ? "bg-[#0a0a0a] border border-[#00ffff]/40 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
                  : "bg-[#0a0a0a] neon-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#00ffff] text-[#050505] text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <p className="text-lg font-semibold text-white mb-1">{plan.name}</p>
              <p className="text-sm text-white/40 mb-8">{plan.label}</p>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/50"
                  >
                    <Image
                      src={plan.popular ? "/images/nightsec/TH1kdBcGJaidc7usqE8yk8DilQ0.svg" : "/images/nightsec/opdFfkH5sp0RTiVq8kQWrclz0.svg"}
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block w-full text-center rounded-lg py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505]"
                    : "border border-white/10 text-white hover:border-[#00ffff]/30"
                }`}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
