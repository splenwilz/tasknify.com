import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Save to database/mailing list service (Mailchimp, ConvertKit, etc.)
    // 2. Send welcome email
    // 3. Add to CRM
    // 4. Track subscription analytics

    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
      source: "website",
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
