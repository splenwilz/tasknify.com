import { Button } from "@/components/ui/button"

interface PriceCardProps {
  name: string
  subtitle: string
  price: string
  features: string[]
}

export function PriceCard({ name, subtitle, price, features }: PriceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#0F172A] mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
        <p className="text-2xl font-bold text-[#0F172A]">{price}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#111827] rounded-full"></div>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className="w-full bg-[#111827] hover:bg-[#0F172A] text-white rounded-full">Book a Consultation</Button>
    </div>
  )
}
