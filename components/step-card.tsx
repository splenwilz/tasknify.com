interface StepCardProps {
  number: number
  title: string
  description: string
  deliverables: string
}

export function StepCard({ number, title, description, deliverables }: StepCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
        {number}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        <div className="pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-3 h-3 border border-slate-300 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            </div>
            <span>Deliverables: {deliverables}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
