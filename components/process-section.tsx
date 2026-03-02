import { ArrowUpRight } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      total: "04",
      title: "Identify the Right Opportunities",
      description:
        "We help you identify the right technology priorities for your company and industry with our experience and market insight.",
    },
    {
      num: "02",
      total: "04",
      title: "Technical Assessment",
      description:
        "With our proven approach, we evaluate your current systems before development begins. This saves you time and money while focusing on the right solutions.",
    },
    {
      num: "03",
      total: "04",
      title: "Architecture & Planning",
      description:
        "We help you gather the necessary requirements for your product use cases from internal and external sources and prepare them for development.",
    },
    {
      num: "04",
      total: "04",
      title: "Development & Launch",
      description:
        "We build and ship the right solutions based on your requirements and business goals. Transparent reporting from first commit to final deployment.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
            Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-6">
            The <span className="cyan-underline">Tasknify</span> Process
          </h2>
          <div className="max-w-3xl">
            <p className="text-white/50 leading-relaxed mb-4">
              Effective software solutions tailored to your needs require an
              individual analysis of your business and your technology landscape. Our
              goal is to work together with our clients to determine how
              custom development optimally fits into their specific business model.
            </p>
            <p className="text-white/50 leading-relaxed">
              That&apos;s why we&apos;ve established the Tasknify Process: a
              well-thought-out and proven procedure in which we identify exactly
              the technical components and architectures that power your
              business.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="neon-card rounded-2xl p-8 bg-[#050505] group"
            >
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-display text-white">
                  {step.num}
                </span>
                <span className="text-lg text-white/20">/{step.total}</span>
              </div>
              <h3 className="text-[#00ffff] font-medium mb-3 flex items-center gap-2">
                {step.title}
                <ArrowUpRight className="w-4 h-4" />
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
