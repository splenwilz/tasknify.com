import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "godswill.williamsz@gmail.com"
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Tasknify <onboarding@resend.dev>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, projectType, budget, timeline, message } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const fullName = `${firstName} ${lastName}`
    const optionalRows: Array<[string, string]> = []
    if (company) optionalRows.push(["Company", company])
    if (projectType) optionalRows.push(["Project type", projectType])
    if (budget) optionalRows.push(["Budget", budget])
    if (timeline) optionalRows.push(["Timeline", timeline])

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px;">
        <h2 style="margin: 0 0 16px;">New contact form submission</h2>
        <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
          <tr><td style="padding: 6px 0; color: #666; width: 130px;">Name</td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${optionalRows
            .map(
              ([label, value]) =>
                `<tr><td style="padding: 6px 0; color: #666;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`
            )
            .join("")}
        </table>
        <h3 style="margin: 20px 0 8px; font-size: 14px;">Message</h3>
        <div style="white-space: pre-wrap; padding: 12px; background: #f6f6f6; border-radius: 6px; font-size: 14px;">${escapeHtml(message)}</div>
      </div>
    `

    const text = [
      `New contact form submission`,
      ``,
      `Name: ${fullName}`,
      `Email: ${email}`,
      ...optionalRows.map(([label, value]) => `${label}: ${value}`),
      ``,
      `Message:`,
      message,
    ].join("\n")

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      html,
      text,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you within 24 hours!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
