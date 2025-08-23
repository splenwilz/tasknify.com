import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable SaaS Applications: A Complete Guide",
    excerpt:
      "Learn the essential patterns and practices for building SaaS applications that can handle millions of users while maintaining performance and reliability.",
    category: "Development",
    readTime: "8 min read",
    publishDate: "Dec 15, 2024",
    image: "/modern-saas-dashboard.png",
    slug: "building-scalable-saas-applications",
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we build software, from code generation to automated testing and deployment.",
    category: "AI & Tech",
    readTime: "6 min read",
    publishDate: "Dec 12, 2024",
    image: "/ai-coding-assistant-interface.png",
    slug: "future-of-ai-in-software-development",
  },
  {
    id: 3,
    title: "Microservices vs Monoliths: Making the Right Choice",
    excerpt:
      "A comprehensive comparison of architectural patterns to help you decide what's best for your next project based on team size, complexity, and scale.",
    category: "Architecture",
    readTime: "10 min read",
    publishDate: "Dec 8, 2024",
    image: "/software-architecture-diagram.png",
    slug: "microservices-vs-monoliths",
  },
  {
    id: 4,
    title: "Optimizing Database Performance at Scale",
    excerpt:
      "Advanced techniques for database optimization, indexing strategies, and query performance tuning for high-traffic applications.",
    category: "Performance",
    readTime: "12 min read",
    publishDate: "Dec 5, 2024",
    image: "/database-performance-dashboard.png",
    slug: "optimizing-database-performance",
  },
  {
    id: 5,
    title: "Security Best Practices for Modern Web Apps",
    excerpt:
      "Essential security measures every development team should implement to protect user data and prevent common vulnerabilities.",
    category: "Security",
    readTime: "9 min read",
    publishDate: "Dec 1, 2024",
    image: "/cybersecurity-shield-interface.png",
    slug: "security-best-practices",
  },
  {
    id: 6,
    title: "DevOps Culture: Building High-Performance Teams",
    excerpt:
      "How to foster collaboration between development and operations teams to accelerate delivery and improve software quality.",
    category: "Culture",
    readTime: "7 min read",
    publishDate: "Nov 28, 2024",
    image: "/team-collaboration-workspace.png",
    slug: "devops-culture-building-teams",
  },
]

const categories = ["All", "Development", "AI & Tech", "Architecture", "Performance", "Security", "Culture"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources & <span className="text-blue-600 font-semibold">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights on software development, architecture, and technology trends to help you build better
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500 gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with <span className="text-emerald-600 font-semibold">Latest</span> Insights
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get weekly insights on software development, architecture patterns, and technology trends delivered
              straight to your inbox.
            </p>
            <NewsletterSignup />
            <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
