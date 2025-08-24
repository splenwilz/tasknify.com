import { Button } from "@/components/ui/button"
import { StepCard } from "@/components/step-card"
import Link from "next/link"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "align on goals, risks, constraints.",
      deliverables: "brief + success metrics",
    },
    {
      number: 2,
      title: "Blueprint",
      description: "architecture, milestones, estimates, SLAs.",
      deliverables: "technical architecture plan",
    },
    {
      number: 3,
      title: "Build & Launch",
      description: "secure, observable, CI/CD from day one.",
      deliverables: "production deployment",
    },
    {
      number: 4,
      title: "Partner & Improve",
      description: "continuous tuning & features.",
      deliverables: "ongoing optimization",
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How we build confidently</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/process">
            <Button variant="ghost" className="rounded-full cursor-pointer px-8 py-3 border border-slate-200 hover:bg-slate-50">
              See the process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
