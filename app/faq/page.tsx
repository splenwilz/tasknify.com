"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ChevronDown, ChevronUp, Search, MessageCircle, Clock, DollarSign, Users, Code, Shield } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  { id: "all", name: "All Questions", icon: MessageCircle },
  { id: "general", name: "General", icon: MessageCircle },
  { id: "pricing", name: "Pricing", icon: DollarSign },
  { id: "process", name: "Process", icon: Clock },
  { id: "technical", name: "Technical", icon: Code },
  { id: "team", name: "Team", icon: Users },
  { id: "security", name: "Security", icon: Shield },
]

const faqs = [
  {
    id: 1,
    category: "general",
    question: "What types of projects does Taxnify work on?",
    answer:
      "We specialize in building scalable web applications, mobile apps, and enterprise software solutions. Our expertise spans MVP development, system architecture, performance optimization, and scaling existing products. We work with startups, scale-ups, and established companies across various industries including FinTech, HealthTech, E-commerce, and SaaS.",
  },
  {
    id: 2,
    category: "general",
    question: "How quickly can you start a new project?",
    answer:
      "We typically begin new projects within 1-2 weeks of contract signing. For urgent projects or technical emergencies, we can often start within 48 hours. Our rapid start capability comes from our streamlined onboarding process and dedicated project kickoff team.",
  },
  {
    id: 3,
    category: "pricing",
    question: "What is your minimum project size?",
    answer:
      "Our minimum engagement for development projects is typically $25,000. For consulting, architecture reviews, and technical audits, we have smaller engagements starting at $5,000. We believe this ensures we can deliver meaningful value while maintaining our quality standards.",
  },
  {
    id: 4,
    category: "pricing",
    question: "Do you offer fixed-price or hourly billing?",
    answer:
      "We offer both models depending on project requirements. For well-defined projects with clear scope, we prefer fixed-price engagements. For ongoing development, consulting, or projects with evolving requirements, we use time-and-materials billing. We always provide detailed estimates and regular budget updates.",
  },
  {
    id: 5,
    category: "pricing",
    question: "Do you work with startup budgets?",
    answer:
      "Yes! We love working with ambitious startups and understand budget constraints. We offer flexible engagement models, milestone-based payments, and can sometimes work with equity components for the right opportunities. We've helped numerous startups from pre-seed to Series B and beyond.",
  },
  {
    id: 6,
    category: "process",
    question: "What is your development process?",
    answer:
      "We follow a proven 6-step process: Discovery & Planning, System Architecture, Agile Development, Quality Assurance, Deployment & Launch, and Ongoing Support. Each phase includes specific deliverables, regular check-ins, and transparent progress tracking. We adapt our process to fit your team's workflow and preferences.",
  },
  {
    id: 7,
    category: "process",
    question: "How do you handle project communication?",
    answer:
      "We believe in transparent, frequent communication. You'll have a dedicated project manager, weekly progress reports, and access to our project dashboard. We use tools like Slack, Notion, and GitHub for real-time collaboration. We also schedule regular video calls and can adapt to your preferred communication style.",
  },
  {
    id: 8,
    category: "process",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer various support packages including maintenance, monitoring, feature development, and emergency response. Our support ranges from basic monitoring and updates to full-service ongoing development partnerships. We can discuss the right support level during project planning.",
  },
  {
    id: 9,
    category: "technical",
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, Node.js, TypeScript, Python, and modern cloud platforms (AWS, Vercel, Google Cloud). We also work with databases (PostgreSQL, MongoDB, Redis), mobile technologies (React Native, Flutter), and emerging technologies like AI/ML integration. We choose technologies based on your specific needs and long-term goals.",
  },
  {
    id: 10,
    category: "technical",
    question: "Can you work with our existing codebase?",
    answer:
      "Yes, we frequently work with existing codebases. We start with a comprehensive technical audit to understand the current architecture, identify potential issues, and recommend improvements. Whether you need bug fixes, feature additions, performance optimization, or complete refactoring, we can help.",
  },
  {
    id: 11,
    category: "technical",
    question: "Do you handle DevOps and infrastructure?",
    answer:
      "Yes, we provide full-stack services including DevOps, infrastructure setup, and deployment automation. We can set up CI/CD pipelines, monitoring systems, auto-scaling infrastructure, and security protocols. Our goal is to deliver production-ready systems that can scale with your business.",
  },
  {
    id: 12,
    category: "team",
    question: "Who will work on my project?",
    answer:
      "Each project is staffed with a dedicated team including a project manager, senior developers, and specialists as needed (UI/UX, DevOps, QA). You'll know exactly who's working on your project and can communicate directly with team members. All our developers are senior-level with 5+ years of experience.",
  },
  {
    id: 13,
    category: "team",
    question: "Are your developers in-house or contractors?",
    answer:
      "All our core team members are full-time employees, not contractors. This ensures consistency, accountability, and deep knowledge of our processes and standards. For specialized needs, we occasionally bring in trusted partners, but the core team managing your project will always be our full-time staff.",
  },
  {
    id: 14,
    category: "team",
    question: "Can we interview the developers who will work on our project?",
    answer:
      "We encourage you to meet the team members who will be working on your project. This helps ensure a good fit and builds trust from the start. We can arrange video calls with key team members during the proposal process.",
  },
  {
    id: 15,
    category: "security",
    question: "How do you handle data security and compliance?",
    answer:
      "Security is built into everything we do. We follow industry best practices including secure coding standards, regular security audits, and compliance frameworks like SOC 2, HIPAA, and GDPR as needed. All our team members sign NDAs, and we can work within your security requirements and compliance needs.",
  },
  {
    id: 16,
    category: "security",
    question: "Do you sign NDAs and work with confidential information?",
    answer:
      "Yes, we regularly work with confidential and proprietary information. All team members sign comprehensive NDAs before starting any project. We have established processes for handling sensitive data and can work within your specific confidentiality requirements.",
  },
  {
    id: 17,
    category: "general",
    question: "What makes Taxnify different from other development agencies?",
    answer:
      "We focus exclusively on scalable, production-ready solutions rather than quick prototypes. Our team has deep experience with high-growth companies and understands the technical challenges of scaling. We combine technical excellence with business understanding, and we're selective about projects to ensure we can deliver exceptional results.",
  },
  {
    id: 18,
    category: "process",
    question: "How do you handle scope changes during development?",
    answer:
      "We understand that requirements evolve. We use an agile approach that accommodates reasonable scope changes. For significant changes, we'll provide updated estimates and timeline impacts before proceeding. Our goal is to build what you actually need, not just what was originally specified.",
  },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              Frequently Asked <span className="font-semibold text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to know about working with Taxnify. Can't find what you're looking for?
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 ml-1">
                Get in touch
              </Link>
              .
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search questions..."
                className="pl-10 py-3 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {faqCategories.map((category) => {
                const Icon = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <Button
                    key={category.id}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    className="rounded-full flex items-center gap-2"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <Card className="p-8 text-center border border-gray-100 shadow-sm">
                <p className="text-gray-600">
                  No questions found matching your search. Try a different search term or category.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openItems.includes(faq.id)
                  return (
                    <Card key={faq.id} className="border border-gray-100 shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-3">
                            <Badge variant="secondary" className="text-xs mt-1">
                              {faqCategories.find((cat) => cat.id === faq.category)?.name}
                            </Badge>
                            <h3 className="text-lg font-semibold text-[#0F172A] pr-4">{faq.question}</h3>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pl-16">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Still have questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-8">Contact Us</Button>
              </Link>
              <Button variant="outline" className="rounded-full px-8 bg-transparent">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Popular Resources</h2>
              <p className="text-xl text-gray-600">Learn more about our process and expertise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Our Process</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our proven 6-step development methodology and how we deliver results.
                </p>
                <Link href="/process">
                  <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Case Studies</h3>
                <p className="text-gray-600 mb-4">
                  See real results from our client projects and learn how we solve complex challenges.
                </p>
                <Link href="/case-studies">
                  <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                    View Cases
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Technical Blog</h3>
                <p className="text-gray-600 mb-4">
                  Read insights on software architecture, performance, and development best practices.
                </p>
                <Link href="/blog">
                  <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                    Read Blog
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
