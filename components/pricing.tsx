import { PriceCard } from "@/components/price-card"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "MVP Build",
      price: "from $5k",
      features: ["4–6 week delivery", "Design system starter", "CI/CD", "Analytics"],
    },
    {
      name: "Growth",
      subtitle: "Scale Package",
      price: "from $15k",
      features: ["Performance audit + fixes", "Caching", "Observability", "Cost tuning"],
    },
    {
      name: "Enterprise",
      subtitle: "Dedicated Pod",
      price: "from $30k",
      features: ["Senior team", "SLAs", "Security review", "Ongoing roadmap"],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-16 text-center">Transparent starting points</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500">Custom quotes available.</p>
      </div>
    </section>
  )
}
