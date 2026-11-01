// Card definitions for brand-src/case-study-cards/render.mjs. Paths are repo-relative or absolute.
const SHOTS = "/private/tmp/claude-501/-Users-splenwilz-projects-personal-tasknify-com/244fa138-8c76-4091-b154-a94acc538b2a/scratchpad/shots"
const NEWS = "/private/tmp/claude-501/-Users-splenwilz-projects-personal-tasknify-com/244fa138-8c76-4091-b154-a94acc538b2a/scratchpad/news"
const BOOTH_PUB = "/Users/splenwilz/projects/photobooth-website/public"

export const PROJECTS = {
  "lift-ai": [
    {
      id: "01-cover", layout: "cover", eyebrow: "Lift AI · Elevator asset management",
      big: "Contracts, KPIs and\ncompliance for elevator\nportfolios",
      small: "Seven months as a full-stack engineer on Lift AI's asset-management platform: a Django REST API and a React web app used by building owners, property managers and elevator consultants.",
      chips: ["Django 5", "Django REST Framework", "PostgreSQL", "React", "TypeScript"],
    },
    {
      id: "02-contracts", layout: "points", eyebrow: "Contract management",
      big: "Service contracts,\nmodelled properly",
      points: [
        "Rate sets and rate modifications on property contracts, with validation and admin tooling",
        "Review rules captured at contract creation so invoices are checked against what was agreed",
        "Contract upload with attachments, automatic elevator (car) linking and overlap validation",
        "Per-car callback rates and KPI targets, with emergency and regular response thresholds",
      ],
    },
    {
      id: "03-kpis", layout: "points", eyebrow: "KPIs and insights",
      big: "Numbers the client\ncan act on",
      points: [
        "On-time response rate and emergency callback rate across car, property and portfolio views",
        "Insight templates and reports with filtering, requester tracking and shareable links",
        "Invoice review insights, invoice numbers on stamped pages and fixed stamped-invoice downloads",
        "Ticket exports with arrival, departure, time on site, travel time, overtime and call time",
      ],
    },
    {
      id: "04-compliance", layout: "points", eyebrow: "Compliance and tickets",
      big: "Certificates, violations\nand inspections",
      points: [
        "Compliance API for certificate and violation monitoring, with AHJ IDs and attachments",
        "CAT-1 and CAT-5 test dates on cars, with date-range filters in the compliance table",
        "Inspection report forms with server-side error handling and validation display",
        "Soft delete for properties and related entities, so nothing is lost by accident",
      ],
    },
    {
      id: "05-stack", layout: "stack", eyebrow: "Under the hood",
      big: "Under the hood",
      groups: [
        ["Backend", ["Django 5.1", "Django REST Framework", "PostgreSQL", "Docker dev containers"]],
        ["Web app", ["React", "TypeScript", "Yarn workspaces", "Sentry"]],
        ["Process", ["Linear tickets", "Pull-request code review", "Automated tests", "Staged releases"]],
        ["Engagement", ["Nov 2024 to Jun 2025", "40 hours a week", "217 commits"]],
      ],
      points: [
        "Upgraded the API from Django 4.2 to 5.1 without downtime",
        "Tests for KPI targets, callback rates and contract operations",
        "Shared TypeScript schemas between the API client and forms",
        "Every change reviewed by the client's engineering lead",
      ],
    },
  ],

  "boothiq-dashboard": [
    {
      id: "01-cover", layout: "screen", eyebrow: "BoothIQ · Web dashboard",
      big: "Run a fleet of photo\nbooths from the browser",
      small: "Revenue, upsells, payment mix, hardware health and alerts for every booth, on the same API as the kiosk software and the mobile app.",
      file: `${BOOTH_PUB}/web-screens/dashboard-overview.png`,
    },
    {
      id: "02-booths", layout: "screen", eyebrow: "Fleet view",
      big: "Every booth, its status\nand its takings",
      small: "Online and offline booths, cash box, credits, printer and camera status, backups, licensing and remote commands.",
      file: `${BOOTH_PUB}/web-screens/dashboard-booths.png`,
    },
    {
      id: "03-analytics", layout: "screen", eyebrow: "Analytics",
      big: "Today, this week,\nthis month, this year",
      small: "Revenue trends, transactions, popular templates and upsell breakdowns per booth or combined, in each booth's time zone.",
      file: `${BOOTH_PUB}/web-screens/dashboard-analytics.png`,
    },
    {
      id: "04-settings", layout: "screen", eyebrow: "Remote configuration",
      big: "Prices, modes and\ntemplates, pushed to\nthe booth",
      small: "Coin-operated or free-play mode, pricing, business name and logo, and templates from the marketplace, synced to the kiosk when it is online.",
      file: `${BOOTH_PUB}/web-screens/dashboard-settings.png`,
    },
    {
      id: "05-admin", layout: "screen", eyebrow: "Admin panel",
      big: "Users, subscriptions,\nrevenue and support",
      small: "An internal panel for the BoothIQ team: accounts, plans and licenses, sales, credits, products and support tickets.",
      file: `${BOOTH_PUB}/admin-screenshot.png`,
    },
    {
      id: "06-site", layout: "screen", eyebrow: "boothiq.com",
      big: "Marketing site, store,\ntemplate marketplace\nand docs",
      small: "Public site with a payback calculator, a hardware and media store, a print-template marketplace and operator documentation.",
      file: `${SHOTS}/boothiq.png`, geom: "left:150px;right:-260px;top:1000px;bottom:-500px",
    },
    {
      id: "07-stack", layout: "stack", eyebrow: "Under the hood",
      big: "Under the hood",
      groups: [
        ["Web", ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "MDX docs"]],
        ["API", ["FastAPI", "Python", "WebSockets", "Webhooks"]],
        ["Quality", ["Vitest", "Type checks in CI", "Supply-chain scan script"]],
        ["Engagement", ["Jan 2026 to date", "389 commits", "Ongoing"]],
      ],
      points: [
        "One API serves the kiosk, the web dashboard and the mobile app",
        "Route groups for public site, auth, dashboard and admin in one codebase",
        "Operator docs written from the kiosk source, with each page citing its sources",
        "Backups, licensing and emergency access exposed consistently on web and mobile",
      ],
    },
  ],

  "boothiq-software": [
    {
      id: "01-cover", layout: "cover", eyebrow: "BoothIQ · Booth software",
      big: "The software inside a\ncoin-operated photo\nbooth",
      small: "A Windows kiosk application that takes cash and cards, shoots, prints in about twelve seconds, and keeps selling when the venue's internet drops.",
      chips: ["C# / WPF", "Arduino payments", "Dye-sub printers", "DSLR and webcam capture", "Cloud sync"],
    },
    {
      id: "02-offline", layout: "points", eyebrow: "Offline first",
      big: "A complete booth\non its own",
      points: [
        "The whole customer session runs on the kiosk: welcome screen, capture, template, print",
        "Credits, cash collection and sales records work with no internet; the cloud copy syncs later",
        "A heartbeat channel and a WebSocket channel carry status up and remote commands down",
        "Price changes, template pushes, restarts and backups arrive as queued commands",
      ],
    },
    {
      id: "03-activation", layout: "points", eyebrow: "Activation, licensing and recovery",
      big: "Linked with one scan,\nlicensed offline",
      points: [
        "QR activation: the kiosk shows a hardware fingerprint, the owner's app approves it",
        "A signed license file validated on the kiosk at startup, with subscription, perpetual and trial kinds",
        "Nightly encrypted database backups, seven kept locally and each uploaded to the cloud",
        "Emergency one-time codes and an offline master code when every password is lost",
      ],
    },
    {
      id: "04-hardware", layout: "photos", eyebrow: "Hardware it drives",
      big: "Bill acceptors, card readers,\nprinters, touchscreens",
      files: [`${BOOTH_PUB}/store/real-bill-acceptor.jpg`, `${BOOTH_PUB}/store/real-card-reader.jpg`, `${BOOTH_PUB}/store/real-printer.jpg`, `${BOOTH_PUB}/store/real-touchscreen.jpg`],
    },
    {
      id: "05-stack", layout: "stack", eyebrow: "Under the hood",
      big: "Under the hood",
      groups: [
        ["Kiosk", ["C#", "WPF", "Windows", "Encrypted local database"]],
        ["Payments", ["Arduino coin and bill acceptors", "Card readers", "Coin-operated and free-play modes"]],
        ["Capture and print", ["USB webcams", "DSLR tethering (Canon, Nikon, Sony)", "DNP, HiTi, Mitsubishi printers"]],
        ["Cloud", ["FastAPI", "WebSockets", "Heartbeat sync", "Template marketplace"]],
      ],
      points: [
        "Offline-first design with a sync queue, not a thin client",
        "Licensing and identity installed atomically so a kiosk is never half-linked",
        "Admin area with staff roles, PIN recovery and audited sign-ins",
        "USB exports of sales and photos for venues with no connectivity",
      ],
    },
  ],

  thebiblesays: [
    {
      id: "01-cover", layout: "cover", eyebrow: "Navigo, Inc · thebiblesays.com",
      big: "Thirteen months on an\nonline Bible commentary\nplatform",
      small: "Verse-by-verse commentary on every book of the Bible, articles, maps, timelines and iOS and Android apps. We joined the Navigo team as the WordPress and React developer.",
      chips: ["WordPress", "PHP", "React", "React Native", "REST APIs"],
    },
    {
      id: "02-work", layout: "points", eyebrow: "What the engagement covered",
      big: "Backend, web\nand mobile",
      points: [
        "Custom WordPress theme and plugin work as the content backend for thousands of commentary pages",
        "React web front end and React Native apps for iOS and Android, consuming the WordPress REST API",
        "Integrations with external APIs and services, plus cross-browser and cross-device fixes",
        "Code documentation and technical support for the in-house team",
      ],
    },
    {
      id: "03-engagement", layout: "points", eyebrow: "The engagement",
      big: "Two consecutive\ncontracts, one team",
      points: [
        "July 2023 to July 2024, hourly, up to 50 hours a week at peak",
        "Remote collaboration with a US-based product team on GitHub",
        "Live today at thebiblesays.com with apps on the App Store and Google Play",
      ],
    },
  ],

  "archer-property-partners": [
    {
      id: "01-cover", layout: "screen", eyebrow: "Archer Property Partners",
      big: "A WordPress site for a\nmedical real-estate firm",
      small: "Built for OneBite Marketing's client: investors, providers and property-management audiences, a portfolio of medical office buildings, press, and an investor-portal link.",
      file: `${SHOTS}/archer.png`, geom: "left:150px;right:-260px;top:980px;bottom:-500px",
    },
    {
      id: "02-portfolio", layout: "screen", eyebrow: "Portfolio",
      big: "Properties with status,\nsize and location",
      small: "Property cards with state, square footage and status, a full-portfolio view and a static US market map.",
      file: `${SHOTS}/archer-portfolio.png`, geom: "left:150px;right:-260px;top:900px;bottom:-500px",
    },
    {
      id: "03-providers", layout: "screen", eyebrow: "Audience pages",
      big: "Investors, providers,\nowners",
      small: "Three audience journeys from the home page, each ending in a strategy-call request.",
      file: `${SHOTS}/archer-providers.png`, geom: "left:150px;right:-260px;top:900px;bottom:-500px",
    },
    {
      id: "04-stack", layout: "stack", eyebrow: "Under the hood",
      big: "Under the hood",
      groups: [
        ["Platform", ["WordPress", "PHP", "Custom theme", "SEO sitemap"]],
        ["Front end", ["Responsive layouts", "Mobile menu", "Compliance disclaimer"]],
        ["Delivery", ["Dec 2025 to Jan 2026", "Hourly, 40 h/week", "Agency white-label"]],
        ["Integrations", ["Investor portal link", "LinkedIn", "Contact routing"]],
      ],
      points: [
        "Delivered through a marketing agency, so the brand and design were theirs and the build was ours",
        "Four weeks from kickoff to launch",
        "Press and articles section for ongoing content",
        "Live at archerpropertypartners.com",
      ],
    },
  ],

  "email-development": [
    {
      id: "01-cover", layout: "strip", eyebrow: "Email development",
      big: "HTML email that renders\neverywhere",
      small: "Newsletters and campaign templates for Customer.io, Iterable and direct sends. Table-based HTML, Outlook conditionals, mobile-first.",
      files: [`${NEWS}/june.png`, `${NEWS}/september.png`, `${NEWS}/april.png`],
    },
    {
      id: "02-biofarm", layout: "strip", eyebrow: "Biofarm · Monthly newsletter",
      big: "Stories from the ground,\nevery month since January",
      small: "A UK biodiversity company's monthly update: brand fonts with safe fallbacks, illustrated characters, video hero blocks and a deliverability checklist.",
      files: [`${NEWS}/january.png`, `${NEWS}/february.png`, `${NEWS}/march.png`],
    },
    {
      id: "03-clients", layout: "points", eyebrow: "Across platforms",
      big: "Figma to the\nemail builder",
      points: [
        "Sagetap: campaign templates built in the Customer.io editor from Figma mockups, over eleven months",
        "ParentData: an Iterable newsletter template for a large subscriber base",
        "A monthly newsletter coded for a publisher since January 2026, still ongoing",
        "Biofarm: nine newsletters and a set of web-page and roller-banner prototypes",
      ],
    },
    {
      id: "04-stack", layout: "stack", eyebrow: "Under the hood",
      big: "Under the hood",
      groups: [
        ["Markup", ["Table-based HTML", "Inline CSS", "MSO conditionals", "VML backgrounds"]],
        ["Responsive", ["Mobile-first", "600px breakpoint", "Dark-mode safe colours"]],
        ["Platforms", ["Customer.io", "Iterable", "Direct HTML sends"]],
        ["Checks", ["Outlook, Gmail, Apple Mail", "Deliverability guide", "Alt text and plain-text parts"]],
      ],
      points: [
        "Brand typography with web-safe fallbacks that hold the layout when fonts do not load",
        "Reusable section patterns so each month's issue takes hours, not days",
        "Video and image heroes that degrade gracefully in clients that block them",
        "Legal footers and unsubscribe handling built in from the first issue",
      ],
    },
  ],

  "shelf-life-platform": [
    {
      id: "01-cover", layout: "cover", eyebrow: "Foresight Food · Deployment and handoff",
      big: "A lab platform moved\nto Render, data intact",
      small: "A FastAPI and SQLite shelf-life testing app for food scientists, deployed with a persistent disk and GitHub auto-deploy, then handed over with documentation and an orientation call.",
      chips: ["FastAPI", "SQLite", "Render", "GitHub auto-deploy", "Handoff docs"],
    },
    {
      id: "02-work", layout: "points", eyebrow: "What we did",
      big: "Live, safe,\nhanded over",
      points: [
        "Render service with a persistent disk so the SQLite database survives deploys and restarts",
        "Infrastructure as code in render.yaml, environment configuration and a documented run script",
        "GitHub auto-deploy so the client's team ships by merging",
        "Three milestones: site live, data safe and handoff complete, next-steps orientation call",
      ],
    },
  ],
}
