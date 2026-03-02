"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Loader2, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              src="/media/zusZxDjPIiUuNWQpaLjpPuk4yK4.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            />
            <div className="absolute inset-0 bg-[#050505]/70" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
              Contact
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-white mt-4 max-w-2xl leading-tight">
              Start building{" "}
              <span className="cyan-underline">your digital product</span> today.
            </h1>
          </div>
        </section>

        {/* Two-Column Layout */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Contact Info */}
              <div className="space-y-0">
                <div className="py-8 border-b border-white/5">
                  <span className="text-[#00ffff] text-xs font-medium uppercase tracking-widest">
                    Email
                  </span>
                  <p className="text-white text-lg mt-2">hello@tasknify.com</p>
                </div>

                <div className="py-8 border-b border-white/5">
                  <span className="text-[#00ffff] text-xs font-medium uppercase tracking-widest">
                    Phone
                  </span>
                  <p className="text-white text-lg mt-2">+1 (555) 123-4567</p>
                </div>

                <div className="py-8">
                  <span className="text-[#00ffff] text-xs font-medium uppercase tracking-widest">
                    Address
                  </span>
                  <p className="text-white text-lg mt-2">
                    Abuja, Nigeria / Remote-First
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-[#00ffff]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-[#00ffff]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Message Sent!
                    </h2>
                    <p className="text-white/50 mb-8">
                      Thank you for reaching out. We&apos;ll get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="border border-[#00ffff]/30 text-[#00ffff] hover:bg-[#00ffff]/10 rounded-full px-8 py-3 text-sm font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-white/30 py-3 text-sm focus:outline-none focus:border-[#00ffff] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-white/30 py-3 text-sm focus:outline-none focus:border-[#00ffff] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-white/30 py-3 text-sm focus:outline-none focus:border-[#00ffff] transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-white/30 py-3 text-sm focus:outline-none focus:border-[#00ffff] transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] rounded-full px-10 py-3 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
