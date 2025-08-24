"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        })
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              Let's build something <span className="font-semibold text-purple-600">extraordinary</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to scale your technical vision? We'd love to hear about your project and explore how we can help.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 border border-gray-100 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Message Sent!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours with next steps.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full px-6">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Start a Conversation</h2>
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="mt-1"
                            placeholder="Alex"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className="mt-1"
                            placeholder="Chen"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          className="mt-1"
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          className="mt-1"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="projectType" className="text-sm font-medium text-gray-700">
                          Project Type
                        </Label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.projectType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a project type</option>
                          <option value="mvp">MVP Development</option>
                          <option value="scaling">Scaling Existing Product</option>
                          <option value="architecture">System Architecture</option>
                          <option value="performance">Performance Optimization</option>
                          <option value="consulting">Technical Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                          Budget Range
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.budget}
                          onChange={handleInputChange}
                        >
                          <option value="">Select budget range</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k-250k">$100k - $250k</option>
                          <option value="250k+">$250k+</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                          Timeline
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.timeline}
                          onChange={handleInputChange}
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6months+">6+ months</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="mt-1"
                          placeholder="Tell us about your project, technical challenges, and goals..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#111827] hover:bg-[#0F172A] text-white rounded-full py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Get in Touch</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We typically respond within 24 hours. For urgent technical emergencies, use our emergency contact
                    below.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2">General Inquiries</h3>
                    <p className="text-gray-600 mb-2">hello@tasknify.com</p>
                    <p className="text-sm text-gray-500">Response time: 24 hours</p>
                  </Card>

                  <Card className="p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Technical Emergencies</h3>
                    <p className="text-gray-600 mb-2">emergency@tasknify.com</p>
                    <p className="text-sm text-gray-500">24/7 support for critical issues</p>
                  </Card>

                  <Card className="p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Partnership Opportunities</h3>
                    <p className="text-gray-600 mb-2">partners@tasknify.com</p>
                    <p className="text-sm text-gray-500">Strategic partnerships and collaborations</p>
                  </Card>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Prefer to Schedule a Call?</h3>
                  <p className="text-gray-600 mb-4">
                    Book a 30-minute technical consultation to discuss your project in detail.
                  </p>
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100 bg-transparent">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Common questions about working with Tasknify</p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">How quickly can you start a project?</h3>
                <p className="text-gray-600">
                  We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can
                  often start within 48 hours.
                </p>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Do you work with early-stage startups?</h3>
                <p className="text-gray-600">
                  We love working with ambitious startups. We offer flexible engagement models and can work within
                  startup budgets while maintaining our quality standards.
                </p>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">What's your minimum project size?</h3>
                <p className="text-gray-600">
                  Our minimum engagement is typically $25,000 for development projects. For consulting and architecture
                  reviews, we have smaller minimum engagements starting at $5,000.
                </p>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, we offer various support packages including maintenance, monitoring, feature development, and
                  emergency response. We can discuss ongoing support during your project planning.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Where We Work</h2>
              <p className="text-xl text-gray-600">Remote-first with hubs in major tech cities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">San Francisco</h3>
                <p className="text-gray-600 mb-3">Primary Hub</p>
                <p className="text-sm text-gray-500">Pacific Time Zone</p>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">New York</h3>
                <p className="text-gray-600 mb-3">East Coast Operations</p>
                <p className="text-sm text-gray-500">Eastern Time Zone</p>
              </Card>

              <Card className="p-6 text-center border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Remote</h3>
                <p className="text-gray-600 mb-3">Distributed Team</p>
                <p className="text-sm text-gray-500">Global Coverage</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
