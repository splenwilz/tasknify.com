# Ad copy

Five creatives, each in four sizes (brand-src/ads/out): square 1080×1080 (Instagram and Facebook feed),
portrait 1080×1350 (feed, more screen), story 1080×1920 (Stories and Reels), landscape 1200×628 (LinkedIn, X, link ads).
Every creative drives to https://tasknify.com/start, a landing page with no nav and a short form; add ?utm_source=meta&utm_campaign=<id> per platform.
Image text is already on the creative; the fields below are the platform text fields.

## 1. brand – "Software Built To Last"
- Primary text: Custom web and mobile apps for startups and growing businesses. A dedicated team and a named project lead own your project from the first sketch to launch, with tests, code review and staging on every build.
- Headline: Software Built To Last
- Description: Web, mobile and AI features, built properly.
- CTA button: Learn More → tasknify.com/start
- Audience: founders, operations leads and marketing agencies who outsource builds; interests in SaaS, startups, no-code limits.

## 2. appstore – "Kickoff to the App Store in ten weeks"
- Primary text: Pepmax went from kickoff to a live App Store listing in ten weeks: React Native, subscriptions, push, App Review passed. If you have an app idea that has been stuck in a notes file, we can scope it in one call.
- Headline: Your app, on the App Store
- Description: React Native, iOS and Android, shipped through review.
- CTA button: Get Quote → tasknify.com/start
- Audience: founders and small businesses searching for "app developer", "build an app", "React Native agency".

## 3. spreadsheets – "Still running the business on spreadsheets?"
- Primary text: Spreadsheets, WhatsApp updates and re-typing between systems cost more than custom software. We build the dashboards, client portals and internal tools your team will actually use, on your data, in weeks.
- Headline: Replace the spreadsheet with a system
- Description: Internal tools, portals and dashboards.
- CTA button: Contact Us → tasknify.com/start
- Audience: operations managers, owners of service businesses (logistics, property, facilities, clinics), 20 to 200 staff.

## 4. ai – "AI features that work in production"
- Primary text: Most AI demos never survive contact with real users. We build RAG search, document Q&A and LLM integrations that do: evaluated, monitored and maintained by senior engineers.
- Headline: AI features, production ready
- Description: RAG, document Q&A, LLM integrations.
- CTA button: Learn More → tasknify.com/start
- Audience: product managers and CTOs at SaaS companies; interests in LangChain, OpenAI, vector databases.

## 5. proof – "One team. Your whole project."
- Primary text: Work with one dedicated team, led by a named project lead. A written plan and fixed price before work starts, a staging link every week, and the same team after launch. No account managers, no hand-offs.
- Headline: One team from plan to launch
- Description: Direct engagements, fixed scope or hourly.
- CTA button: Contact Us → tasknify.com/start
- Audience: retargeting (site visitors, case-study readers) and LinkedIn job titles: founder, CEO, COO, head of product.

## Notes
- Keep the proof creative free of numbers and platform names; it sells the way of working, not a track record.
- Story size keeps the top 250 px and bottom 300 px free of copy for platform UI.
- Rendered JPEGs are under 500 KB each; re-export at 90% quality if a platform asks for smaller.
- Regenerate: `node brand-src/ads/render.mjs` (all), or `node brand-src/ads/render.mjs proof --size=square`.
- Phone screenshots come from the Pepmax and BoothIQ repos (paths in render.mjs); both clients have the work shown publicly already.
