"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { RevealOnScroll } from "./reveal-on-scroll"

const testimonials = [
  {
    quote:
      "Tasknify transformed our concept into a production-ready platform in record time. The code quality and architecture exceeded our expectations.",
    name: "Sarah Mitchell",
    position: "VP of Product",
    avatar: "/images/nightsec/avatar-1.png",
  },
  {
    quote:
      "Our development velocity doubled after partnering with Tasknify. Their engineers integrated seamlessly with our team and delivered consistently.",
    name: "David Carter",
    position: "CTO",
    avatar: "/images/nightsec/avatar-2.png",
  },
  {
    quote:
      "The mobile app they built for us handles thousands of daily transactions without a hitch. Clean code, thorough testing, and excellent communication throughout.",
    name: "Emily Roberts",
    position: "Engineering Manager",
    avatar: "/images/nightsec/avatar-3.png",
  },
  {
    quote:
      "We needed a team that could scale our SaaS platform from MVP to enterprise-grade. Tasknify delivered exactly that, on time and under budget.",
    name: "James Nguyen",
    position: "Head of Technology",
    avatar: "/images/nightsec/avatar-4.png",
  },
  {
    quote:
      "Unlike other agencies, Tasknify combines deep technical expertise with genuine business understanding. They built exactly what we needed, not what was easy.",
    name: "Laura Gomez",
    position: "Operations Director",
    avatar: "/images/nightsec/avatar-5.png",
  },
  {
    quote:
      "The level of craft in every feature is outstanding. We can focus on growth knowing our platform is built on a rock-solid foundation.",
    name: "Michael Lee",
    position: "Chief Technology Officer",
    avatar: "/images/nightsec/avatar-1.png",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#00ffff] text-[#00ffff]" />
      ))}
    </div>
  )
}

export function TestimonialSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-6">
              Trusted by Professionals
            </h2>
            <p className="text-white/50 leading-relaxed">
              Hear from our clients how we&apos;ve transformed their ideas
              into scalable digital products.
            </p>
          </div>
        </RevealOnScroll>

        {/* Testimonial cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="neon-card rounded-xl p-6 bg-[#0a0a0a]"
            >
              <StarRating />
              <p className="text-white/50 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
