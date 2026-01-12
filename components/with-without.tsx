import { Phone, FileText, AlertTriangle, CheckCircle, MessageSquare } from "lucide-react"

export function WithWithout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            [01] TASKNIFY DIFFERENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            With & Without
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Without Tasknify */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-8">
              Without Tasknify
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-green-100 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Developer calling</div>
                  <div className="text-sm text-gray-500 mb-2">5m ago</div>
                  <div className="text-gray-800">My deployment failed again! 😡😡</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Manual excel work</div>
                  <div className="text-sm text-gray-500 mb-2">5m ago</div>
                  <div className="text-gray-800">Reconciling endless invoices & recei...</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-100 rounded-lg">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Unexpected fees</div>
                  <div className="text-sm text-gray-500 mb-2">5m ago</div>
                  <div className="text-gray-800">20% surcharge for low usage</div>
                </div>
              </div>
            </div>
          </div>

          {/* With Tasknify */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-8">
              With Tasknify
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-100 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Feature deployed</div>
                  <div className="text-sm text-gray-500 mb-2">Transaction approved within policy</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-100 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Progress tracked</div>
                  <div className="text-sm text-gray-500 mb-2">Instantly verified with Tasknify AI</div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-semibold text-gray-900 mb-2">That's it! No more manual work</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional development agencies create problems. <br />
            <span className="font-semibold text-black">Tasknify solves them for your whole team.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
