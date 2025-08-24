import { Button } from "@/components/ui/button"
import { MetricBar } from "@/components/metric-bar"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight tracking-[-0.01em]">
                The wrong tech partner slows growth.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Tasknify builds fast, scalable software, so your product moves at the speed of your ambition.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Full-Stack Development</span>
                <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Auto-Scaling Infrastructure</span>
                <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                  High-Performance Systems
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#0F172A] cursor-pointer hover:bg-slate-800 text-white rounded-full px-8 py-3 w-full sm:w-auto">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  variant="ghost"
                  className="rounded-full cursor-pointer px-8 py-3 border border-slate-200 hover:bg-slate-50 w-full sm:w-auto"
                >
                  See Case Studies
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Delivery Metrics</h3>
            <div className="space-y-6">
              <MetricBar label="MVP in 4–6 weeks" percentage={92} suffix="on-time" />
              <MetricBar label="Availability" percentage={99.99} suffix="uptime" />
              <MetricBar label="Client NPS" percentage={72} suffix="score" />
              <MetricBar label="Incidents Resolved" percentage={100} suffix="< 1hr" />
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-slate-900">Lead Engineer: Godswill S. William</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
