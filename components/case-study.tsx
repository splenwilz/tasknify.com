export function CaseStudy() {
  const outcomes = [
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Checkout reliability + Stripe webhooks hardening",
    },
    {
      icon: "🤖",
      title: "AI/RAG",
      description: "Sub-2s suggestions with caching and fallbacks",
    },
    {
      icon: "⚡",
      title: "Realtime",
      description: "Websockets @ scale with graceful degradation",
    },
    {
      icon: "🔄",
      title: "Migrations",
      description: "Zero-downtime + cost reduction (-30–40%)",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-16 text-center">Trusted outcomes, not just deliverables</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-[#0F172A] mb-6">Confidential Fintech</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">99.99% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{"<2s AI suggestions with fallback"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Checkout success 98.7%</span>
              </div>
            </div>
            <a href="#" className="text-[#111827] font-medium text-sm hover:underline">
              Read case study →
            </a>
          </div>

          <div className="space-y-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl">{outcome.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">{outcome.title}</h4>
                  <p className="text-sm text-gray-600">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
