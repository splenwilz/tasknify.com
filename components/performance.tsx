export function Performance() {
  const cards = [
    {
      title: "Performance First",
      description: "Optimized code and architecture for latency-sensitive workloads.",
    },
    {
      title: "Ops You Can Trust",
      description: "Observability, alerts, error budgets, runbooks.",
    },
    {
      title: "DX That Ships",
      description: "CI/CD, preview envs, typed APIs, proper testing.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-16 text-center">Architectures that scale with your team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div className="text-left">
              <p className="text-2xl font-bold text-[#0F172A]">97%</p>
              <p className="text-sm text-gray-600">'would hire again'</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
