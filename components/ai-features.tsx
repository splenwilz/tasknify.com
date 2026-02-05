import { MessageCircle, TrendingUp } from "lucide-react"

export function AIFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - AI Features */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                Save time with AI intelligent features
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Code review, automated testing, performance analysis, and more — all in one place with Tasknify.
              </p>
            </div>

            {/* WhatsApp mockup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-500">Tasknify</div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <div className="text-sm text-gray-700">Tasknify AI is analyzing your code</div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-3 space-y-2">
                <div className="text-sm font-medium text-gray-900">Code review completed via Tasknify AI 🤖</div>
                <div className="text-xs text-gray-600">
                  <div>Issues found: 2</div>
                  <div>Performance: 95/100</div>
                  <div>Security: Passed</div>
                  <div>AutoMatch: Yes</div>
                </div>
              </div>
              
              <div className="mt-3 text-xs text-blue-600 underline">
                Check details in Tasknify
              </div>
            </div>
          </div>

          {/* Right side - Sustainability */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                Reduce technical debt, optimize performance
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transition to maintainable code with full support for automated refactoring, performance monitoring, and more.
              </p>
            </div>

            {/* Performance chart mockup */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
                <div className="text-sm text-gray-500">Real-time</div>
              </div>

              {/* Legend */}
              <div className="flex gap-6 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Throughput</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Error Rate</span>
                </div>
              </div>

              {/* Simple chart visualization */}
              <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-center p-4">
                <div className="flex items-end gap-2 h-full">
                  <div className="w-4 bg-red-500 rounded-t" style={{height: '60%'}}></div>
                  <div className="w-4 bg-green-500 rounded-t" style={{height: '80%'}}></div>
                  <div className="w-4 bg-gray-400 rounded-t" style={{height: '20%'}}></div>
                  <div className="w-4 bg-red-500 rounded-t" style={{height: '40%'}}></div>
                  <div className="w-4 bg-green-500 rounded-t" style={{height: '90%'}}></div>
                  <div className="w-4 bg-gray-400 rounded-t" style={{height: '10%'}}></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">↓ 45%</div>
                  <div className="text-xs text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">↑ 120%</div>
                  <div className="text-xs text-gray-600">Throughput</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">↓ 89%</div>
                  <div className="text-xs text-gray-600">Error Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

