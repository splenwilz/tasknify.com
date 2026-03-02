"use client"

import type React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
          Contact
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-white mt-3 mb-12 max-w-2xl">
          Start building{" "}
          <span className="cyan-underline">your digital product</span> today.
        </h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-[#00ffff] text-xs tracking-wider uppercase">
                Email
              </span>
              <p className="text-white font-semibold mt-1">
                hello@tasknify.com
              </p>
            </div>
            <div className="border-t border-white/5 pt-6">
              <span className="text-[#00ffff] text-xs tracking-wider uppercase">
                Phone
              </span>
              <p className="text-white font-semibold mt-1">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="border-t border-white/5 pt-6">
              <span className="text-[#00ffff] text-xs tracking-wider uppercase">
                Address
              </span>
              <p className="text-white font-semibold mt-1">
                Abuja, Nigeria
                <br />
                Remote-First
              </p>
            </div>
          </div>

          {/* Right - Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00ffff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#00ffff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/50">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-[#00ffff] hover:text-[#00ffff]/70 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/30 tracking-wider uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white focus:border-[#00ffff] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/30 tracking-wider uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white focus:border-[#00ffff] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/30 tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white focus:border-[#00ffff] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/30 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-b border-white/10 bg-transparent py-2 text-white focus:border-[#00ffff] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] rounded-full px-8 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
