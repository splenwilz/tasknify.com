export function Services() {
  const services = [
    "MVPs & Product Revamps",
    "AI Features (RAG, LLM Ops)",
    "High-Scale Backends (Rust/Node)",
    "Frontend Platforms (Next.js/React)",
    "Cloud & DevOps (AWS/GCP, k8s)",
    "Security & Compliance (auth, audits)",
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-[#0F172A]">{service}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            What we don't do: no black-box magic; we document and transfer knowledge.
          </p>
        </div>
      </div>
    </section>
  )
}
