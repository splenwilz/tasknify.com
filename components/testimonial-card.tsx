interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100">
      <p className="text-gray-600 mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div>
          <p className="font-medium text-[#0F172A]">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
