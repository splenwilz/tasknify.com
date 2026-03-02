import { ArrowUpRight } from "lucide-react"

export function ServicesIntro() {
  const services = [
    {
      num: "01",
      title: "Technical Consulting",
      description:
        "Discover the potential of modern software architecture for your business — transparent, no-obligation, opportunity-driven.",
    },
    {
      num: "02",
      title: "Product Engineering",
      description:
        "We make your vision production-ready with tailored development and deployment solutions built for scale.",
    },
    {
      num: "03",
      title: "Technical Workshops",
      description:
        "In collaborative workshops, we identify the most effective technology strategy for your business — live.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
            <span className="cyan-underline">Professional</span> Software Development
            for{" "}
            <span className="cyan-underline">Your Business</span>
          </h2>
          <p className="text-white/50 leading-relaxed">
            We integrate cutting-edge software solutions rapidly and sustainably into your
            business operations — for quick impact and long-term scalability.
            We leverage our network of specialized technology partners whenever needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-[#0a0a0a] rounded-2xl p-6 neon-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/30">{service.num}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 text-[#00ffff]" />
              </h3>

              {/* Placeholder illustration */}
              <div className="h-40 mb-4 rounded-lg bg-gradient-to-br from-[#050505] to-[#111111] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                  <svg
                    viewBox="0 0 200 160"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="60"
                      y="30"
                      width="60"
                      height="60"
                      rx="4"
                      stroke="#00ffff"
                      strokeWidth="1"
                      transform="rotate(15 90 60)"
                    />
                    <circle
                      cx="120"
                      cy="90"
                      r="25"
                      stroke="#00ffff"
                      strokeWidth="1"
                    />
                    <polygon
                      points="50,120 80,80 110,120"
                      stroke="#00ffff"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
