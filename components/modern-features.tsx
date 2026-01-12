import { AlertCircle, X, Zap, Bell } from "lucide-react"

export function ModernFeatures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Features grid - 4 cards like Rally */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1: Instant bug alerts */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Instant bug alerts</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get notified the moment a bug is detected in your codebase.
            </p>
          </div>

          {/* Feature 2: Real-time progress limits */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
              <X className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Real-time progress limits</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Block scope creep before it happens with clear project boundaries.
            </p>
          </div>

          {/* Feature 3: One-tap approvals */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">One-tap approvals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Quickly approve changes without disrupting development flow.
            </p>
          </div>

          {/* Feature 4: Smart quality detection */}
          <div className="text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Smart quality detection</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI flags code quality issues so you can maintain high standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
