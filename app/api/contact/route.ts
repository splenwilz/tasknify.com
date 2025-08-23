import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { firstName, lastName, email, company, projectType, budget, timeline, message } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (HubSpot, Salesforce, etc.)
    // 4. Send confirmation email to user

    // For now, we'll log the submission and return success
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you within 24 hours!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
