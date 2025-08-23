"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { CheckCircle, Loader2, Mail } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "inline"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "compact") {
    return (
      <div className={`${className}`}>
        {isSubscribed ? (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-sm"
              required
            />
            <Button type="submit" disabled={isSubmitting} size="sm" className="bg-blue-600 hover:bg-blue-700">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
            </Button>
          </form>
        )}
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`bg-blue-50 rounded-2xl p-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Stay Updated</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Get weekly insights on software development and technology trends.
            </p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
                  </Button>
                </form>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <p className="text-xs text-gray-500">No spam. Unsubscribe at any time.</p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <Card className={`p-8 border border-gray-100 shadow-sm ${className}`}>
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
          Stay Updated with <span className="text-emerald-600 font-semibold">Latest</span> Insights
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get weekly insights on software development, architecture patterns, and technology trends delivered straight
          to your inbox.
        </p>

        {isSubscribed ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">You're all set!</h3>
              <p className="text-gray-600">Thanks for subscribing. You'll receive our next newsletter soon.</p>
            </div>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3"
                required
              />
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 px-8">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
            <p className="text-xs text-gray-500">No spam. Unsubscribe at any time.</p>
          </>
        )}
      </div>
    </Card>
  )
}

export default NewsletterSignup
