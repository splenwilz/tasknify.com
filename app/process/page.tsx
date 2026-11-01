import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export const metadata: Metadata = {
  title: "How We Work - Tasknify",
  description: "Tasknify's development process: discovery and a written spec, design, a build you review weekly on staging, launch, and support after.",
}

const phases = [
  { step: "01", title: "Discovery and written spec", when: "Week 1 to 2", text: "A call to understand the business problem, then a review of anything that already exists: code, spreadsheets, designs. You get a written spec, a data model and a milestone plan with a fixed price. Nothing is built until you sign it off.", points: ["Kickoff call and workshop", "Review of existing code and data", "Written scope, price and timeline"] },
  { step: "02", title: "Design and prototype", when: "Week 2 to 3", text: "For products with real user interfaces, a clickable prototype of the key screens before any code, so the expensive decisions happen while they are still cheap to change. For internal tools and APIs this phase is short.", points: ["Clickable prototype of key screens", "Flows agreed with the people who will use them", "Design handed to the build with no gaps"] },
  { step: "03", title: "Build, reviewed weekly", when: "Week 3 onwards", text: "The build runs in weekly increments. Every week you get a written update and a staging link where the new work is live. Automated tests and code review on every change, and a running list of open questions so nothing waits on a meeting.", points: ["Weekly written update", "Staging environment you can use", "Tests and code review on every change"] },
  { step: "04", title: "Launch and handover", when: "Final 1 to 2 weeks", text: "Production deployment, app store submission where there is an app, data import, monitoring and backups. You get documentation, every account in your name, and a handover session with the team who built it.", points: ["Production deployment and store release", "Documentation and account handover", "Handover session, recorded"] },
  { step: "05", title: "Support after launch", when: "Ongoing", text: "Fixed-price projects include 30 days of bug fixes. After that, a monthly retainer or hourly work for new features, with the same team who knows the codebase. Several clients have stayed on for more than a year.", points: ["30 days of bug fixes included", "Retainer or hourly for new work", "Same team, no re-learning"] },
]

const principles = [
  ["One team, end to end", "The project lead on the discovery call stays with your project through the handover. No account manager in between, no hand-off to a different team."],
  ["Written before built", "Scope, price, assumptions and changes are all in writing. A proposal that names what is not included saves arguments later."],
  ["Staging before production", "You see every feature on a staging environment before it goes live, and you can try it, not just watch a demo."],
  ["Your time zone", "Calls in your working hours, replies within one business day, updates you can read in two minutes."],
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#00ffff]/20 blur-[140px]" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">Process</span>
              <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">How a project runs</h1>
              <p className="text-white/50 text-lg leading-relaxed">
                Five phases, each with something you can read or click at the end of it. Most builds take six to twelve weeks from kickoff to launch.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto space-y-6">
            {phases.map((p) => (
              <RevealOnScroll key={p.step}>
                <div className="neon-card rounded-xl bg-[#0a0a0a] p-8 grid md:grid-cols-[140px_1fr] gap-6">
                  <div>
                    <div className="font-display text-4xl text-[#00ffff]">{p.step}</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mt-2">{p.when}</div>
                  </div>
                  <div>
                    <h2 className="text-white text-xl font-semibold mb-3">{p.title}</h2>
                    <p className="text-white/60 leading-relaxed mb-5">{p.text}</p>
                    <ul className="grid sm:grid-cols-3 gap-3">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00ffff] shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <span className="text-[#00ffff] text-xs font-medium tracking-[0.2em] uppercase">Working together</span>
              <h2 className="font-display text-3xl md:text-4xl text-white mt-3 mb-10">What stays the same on every project</h2>
            </RevealOnScroll>
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map(([t, d]) => (
                <RevealOnScroll key={t}>
                  <div className="neon-card rounded-xl bg-[#0a0a0a] p-6 h-full">
                    <h3 className="text-white font-semibold mb-2">{t}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{d}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6">Have something that needs building properly?</h2>
              <p className="text-white/50 mb-8">Tell us what you are working on. The first call is with the project lead who would run it.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-6 py-3 rounded-full bg-[#00ffff] text-[#050505] font-medium hover:bg-[#00ffff] hover:text-[#050505] transition-colors">Start a project</Link>
                <Link href="/case-studies" className="px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors">See case studies</Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
