interface MetricBarProps {
  label: string
  percentage: number
  suffix: string
}

export function MetricBar({ label, percentage, suffix }: MetricBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="text-[#0F172A] font-medium">
          {percentage}% {suffix}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-[#111827] h-2 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  )
}
