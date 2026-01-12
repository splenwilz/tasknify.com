"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function TeamsSection() {
  const [activeTab, setActiveTab] = useState("Business Owners")

  const tabs = [
    "Business Owners",
    "Project Managers", 
    "Finance & Accounting",
    "Developers"
  ]

  const content = {
    "Business Owners": {
      title: "Cut development costs without cutting corners",
      description: "Gain full visibility into your development spending and eliminate unnecessary delays.",
      image: "/placeholder.jpg",
      features: [
        "No more hidden and additional fees. Know exactly what you're paying—no surprises.",
        "One platform for all development needs. Frontend, backend, DevOps—tracked in real-time."
      ]
    },
    "Project Managers": {
      title: "Stay in control without the admin headache", 
      description: "Streamline your development operations with real-time tracking and automated progress management.",
      image: "/placeholder.jpg",
      features: [
        "Every milestone is tracked as it happens. No more end-of-sprint surprises.",
        "Set delivery limits and scope restrictions. Stop scope creep before it happens."
      ]
    },
    "Finance & Accounting": {
      title: "Automate expense tracking & reconciliation",
      description: "Reconcile development costs in minutes, not hours—so you can focus on what matters.",
      image: "/placeholder.jpg", 
      features: [
        "Automated reporting & exports. Sync expenses with your accounting software in seconds.",
        "No more chasing invoices. Every transaction is logged and categorized automatically."
      ]
    },
    "Developers": {
      title: "Code, Deploy, Done. No more deployment hassles.",
      description: "Spend less time on infrastructure headaches and more time building features.",
      image: "/placeholder.jpg",
      features: [
        "Works everywhere. No more wasted time configuring different environments.",
        "No more chasing approvals. Push code and Tasknify AI handles the rest."
      ]
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            [03] Teams
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tasknify for everyone
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="text-blue-600 font-bold text-2xl">{activeTab}</div>
            
            <h3 className="text-4xl font-bold text-black leading-tight">
              {content[activeTab as keyof typeof content].title}
            </h3>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {content[activeTab as keyof typeof content].description}
            </p>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Get started with Tasknify
            </Button>

            <div className="space-y-4">
              {content[activeTab as keyof typeof content].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-xl">
                      {activeTab.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div className="text-gray-600 font-medium">{activeTab}</div>
                  <div className="text-sm text-gray-500 mt-2">Dashboard View</div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                [03.1] {activeTab.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
