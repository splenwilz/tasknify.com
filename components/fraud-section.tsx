import { AlertTriangle, CheckCircle, Clock, X } from "lucide-react"

export function FraudSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Stop bugs <br />
              before they happen
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Get instant alerts when code quality looks suspicious. Stop production issues with real-time controls.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">Instant bug alerts</h3>
                <p className="text-gray-600 text-sm">Get notified the moment a bug is detected in your codebase.</p>
              </div>

              <div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3">
                  <X className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">Real-time quality limits</h3>
                <p className="text-gray-600 text-sm">Block poor code before it reaches production.</p>
              </div>

              <div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">One-tap approvals</h3>
                <p className="text-gray-600 text-sm">Quickly approve changes without disrupting development.</p>
              </div>

              <div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">Smart quality detection</h3>
                <p className="text-gray-600 text-sm">AI flags code issues so you can maintain high standards.</p>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard mockup */}
          <div className="relative">
            {/* Main dashboard */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Code Quality Dashboard</h3>
                <div className="text-sm text-gray-500">Live Monitoring</div>
              </div>

              {/* Team member list */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">MW</div>
                    <div>
                      <div className="font-medium text-gray-900">Max Weber</div>
                      <div className="text-sm text-gray-500">Frontend Dev</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">€78.45</div>
                    <div className="text-xs text-gray-500">Shell</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">BM</div>
                    <div>
                      <div className="font-medium text-gray-900">Ben Meyer</div>
                      <div className="text-sm text-gray-500">Backend Dev</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">€63.20</div>
                    <div className="text-xs text-gray-500">BP</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">LW</div>
                    <div>
                      <div className="font-medium text-gray-900">Lukas Wagner</div>
                      <div className="text-sm text-gray-500">DevOps</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">€10.00</div>
                    <div className="text-xs text-gray-500">Fastned</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert notifications */}
            <div className="absolute -right-4 top-16 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Off Route Transaction</div>
                  <div className="text-xs text-gray-600 mb-2">Purchase 36km away from vehicle</div>
                  <div className="text-xs text-gray-900 font-medium">€45.38</div>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="text-xs bg-green-600 text-white px-2 py-1 rounded">Yes</button>
                <button className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">No</button>
              </div>
            </div>

            <div className="absolute -right-8 bottom-20 bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Unapproved Category</div>
                  <div className="text-xs text-gray-600 mb-2">Purchase attempt at restaurant</div>
                  <div className="text-xs text-gray-900 font-medium">€28.52</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

