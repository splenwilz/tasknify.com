import { Check, X } from "lucide-react"

export function ComparisonTable() {
  const features = [
    {
      feature: "Fixed-price delivery guarantee",
      tasknify: true,
      traditional: false,
      traditionalText: "Hourly billing with scope creep"
    },
    {
      feature: "Real-time progress tracking",
      tasknify: true,
      traditional: false,
      traditionalText: "Weekly status calls only"
    },
    {
      feature: "Direct team communication",
      tasknify: true,
      traditional: false,
      traditionalText: "Through account managers"
    },
    {
      feature: "Modern tech stack (React, Node.js, Cloud)",
      tasknify: true,
      traditional: false,
      traditionalText: "Legacy technologies"
    },
    {
      feature: "Automated testing & CI/CD",
      tasknify: true,
      traditional: false,
      traditionalText: "Manual testing processes"
    },
    {
      feature: "Post-launch support included",
      tasknify: true,
      traditional: false,
      traditionalText: "Additional maintenance costs"
    },
    {
      feature: "AI-powered development tools",
      tasknify: true,
      traditional: false,
      traditionalText: "Traditional coding only"
    },
    {
      feature: "4-6 week MVP delivery",
      tasknify: true,
      traditional: false,
      traditionalText: "3-6 month timelines"
    },
    {
      feature: "24/7 technical support",
      tasknify: true,
      traditional: false,
      traditionalText: "Business hours only"
    },
    {
      feature: "Source code ownership",
      tasknify: true,
      traditional: "Coming Soon",
      traditionalText: "Vendor lock-in"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Tasknify vs. traditional agencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why modern businesses choose Tasknify over traditional development agencies
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-6 px-6 font-semibold text-gray-900 bg-gray-50">
                    Feature
                  </th>
                  <th className="text-center py-6 px-6 font-semibold text-white bg-[#0F172A] relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Recommended
                      </div>
                    </div>
                    Tasknify
                  </th>
                  <th className="text-center py-6 px-6 font-semibold text-gray-900 bg-gray-50">
                    Traditional agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-900 font-medium">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.tasknify === true ? (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                      ) : item.tasknify === "Coming Soon" ? (
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </span>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="w-4 h-4 text-red-600" />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.traditional ? (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">
                          {item.traditionalText}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the Tasknify difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#0F172A] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
            >
              Get Started
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full font-semibold bg-white hover:bg-gray-50 transition-colors inline-block"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

