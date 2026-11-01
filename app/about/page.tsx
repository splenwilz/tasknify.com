import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              src="/media/mvB9WcnuFfp972GtoEFFP3AKuf0.mp4"
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
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight">
              We build software that{" "}
              <span className="cyan-underline">scales</span> with your ambition
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Tasknify is a remote-first software development agency. We combine deep
              engineering expertise with modern architecture to bring digital products
              to life for clients across the US, the UK and beyond.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-white/50 mb-6 leading-relaxed">
                  After more than a decade of building web and mobile products for
                  clients, we noticed a pattern: most development agencies either lacked
                  the technical depth for complex systems or moved too slowly for
                  fast-moving startups.
                </p>
                <p className="text-white/50 mb-6 leading-relaxed">
                  We founded Tasknify to bridge that gap — bringing enterprise-grade
                  engineering expertise with the speed and agility that growing companies need.
                </p>
                <p className="text-white/50 leading-relaxed">
                  Today, Tasknify Limited is the development partner for ambitious
                  companies who refuse to compromise between quality and velocity, with
                  apps on the App Store and platforms running real businesses.
                </p>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl p-8 neon-border">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-display text-[#00ffff]">10+</div>
                    <div className="text-white/50 mt-1">Years building software</div>
                  </div>
                  <div className="border-t border-white/5 pt-8">
                    <div className="text-4xl font-display text-[#00ffff]">47</div>
                    <div className="text-white/50 mt-1">Projects delivered</div>
                  </div>
                  <div className="border-t border-white/5 pt-8">
                    <div className="text-4xl font-display text-[#00ffff]">9</div>
                    <div className="text-white/50 mt-1">Published case studies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Leadership</h2>
              <p className="text-xl text-white/50">
                A dedicated team on every project, with a named project lead as your single point of contact
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-[#050505] rounded-2xl p-8 neon-card text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden border border-[#00ffff]/20">
                  <Image src="/images/nightsec/leader.png" alt="God'Swill William" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">God&apos;Swill William</h3>
                <p className="text-[#00ffff] text-sm font-medium mb-3">Founder &amp; Managing Director</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Leads Tasknify and its client engagements. Over ten years in software,
                  with recent work spanning a peptide dose tracker on the App Store, a
                  photo booth platform across desktop, web and mobile, and production
                  AI features for a contract management platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-white/50">
                The principles that guide how we build and who we work with
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0a0a0a] rounded-2xl p-8 neon-card border-l-4 border-l-[#00ffff]">
                <h3 className="text-xl font-semibold text-white mb-4">Engineering Excellence</h3>
                <p className="text-white/50 leading-relaxed">
                  We don&apos;t just write code — we architect systems that anticipate scale
                  and adapt to changing requirements. Every component is built with
                  production-grade standards.
                </p>
              </div>

              <div className="bg-[#0a0a0a] rounded-2xl p-8 neon-card border-l-4 border-l-[#00ffff]">
                <h3 className="text-xl font-semibold text-white mb-4">Rapid Delivery</h3>
                <p className="text-white/50 leading-relaxed">
                  Speed matters when markets move. We ship in weeks, not months,
                  iterating on feedback before opportunities pass you by.
                </p>
              </div>

              <div className="bg-[#0a0a0a] rounded-2xl p-8 neon-card border-l-4 border-l-[#00ffff]">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Transparent Partnership
                </h3>
                <p className="text-white/50 leading-relaxed">
                  No black boxes. We work as an extension of your team, sharing progress
                  openly and ensuring you understand every technical decision.
                </p>
              </div>

              <div className="bg-[#0a0a0a] rounded-2xl p-8 neon-card border-l-4 border-l-[#00ffff]">
                <h3 className="text-xl font-semibold text-white mb-4">Future-Ready Architecture</h3>
                <p className="text-white/50 leading-relaxed">
                  We build for where technology is heading, not just where it is. Our
                  architectures are designed to evolve with your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#0a0a0a] rounded-2xl p-12 neon-border relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#00ffff]/5 blur-3xl rounded-full" />

              <h2 className="text-3xl font-bold text-white mb-4 relative">
                Ready to build your next product?
              </h2>
              <p className="text-xl text-white/50 mb-8 relative">
                Let&apos;s discuss how we can bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="relative inline-block bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] rounded-full px-8 py-3 text-lg font-semibold transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
