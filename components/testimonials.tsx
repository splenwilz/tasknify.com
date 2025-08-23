import { TestimonialCard } from "@/components/testimonial-card"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Taxnify delivered our MVP in 5 weeks with zero downtime. Their Rust backend handles 10k+ concurrent users effortlessly.",
      author: "Alex Thompson",
      role: "CTO, FinanceFlow",
    },
    {
      quote:
        "The team's attention to performance and security gave us confidence to scale. Our API response times improved by 60%.",
      author: "Maria Santos",
      role: "Head of Engineering, EduTech Pro",
    },
    {
      quote: "Clean code, proper documentation, and knowledge transfer. They built it right the first time.",
      author: "David Kim",
      role: "Founder, RetailOS",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
