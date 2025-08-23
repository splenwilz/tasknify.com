"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Home, Search, ArrowLeft, MessageCircle, FileText, Users } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-16">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">404</div>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Page Not <span className="text-blue-600 font-semibold">Found</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
              wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/">
              <Button className="bg-[#111827] hover:bg-[#0F172A] text-white rounded-full px-8 py-3 flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 flex items-center gap-2 bg-transparent"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Our Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about our development services and technical expertise.
              </p>
              <Link href="/services">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                  View Services
                </Button>
              </Link>
            </Card>

            <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm mb-4">
                See real results from our client projects and success stories.
              </p>
              <Link href="/case-studies">
                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                  View Cases
                </Button>
              </Link>
            </Card>

            <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Get in Touch</h3>
              <p className="text-gray-600 text-sm mb-4">Have questions? We'd love to hear about your project.</p>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 p-0">
                  Contact Us
                </Button>
              </Link>
            </Card>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl max-w-md mx-auto">
            <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Looking for something specific?</h3>
            <p className="text-gray-600 text-sm mb-4">Try searching our FAQ or browse our resources.</p>
            <div className="flex gap-2">
              <Link href="/faq" className="flex-1">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  FAQ
                </Button>
              </Link>
              <Link href="/blog" className="flex-1">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
