# Case-study candidates (audit of Upwork contracts + local repos, 2026-10-21)

Source: Upwork contract history for the freelancer profile (47 jobs) and ~/projects on this machine.
Goal: replace the fake FinanceFlow / HealthTech case studies and fill the site + agency portfolio with real work.

## Tier 1: Upwork-verified, substantial, code on disk

| # | Project | Upwork contract | Period | Local repo | Notes |
|---|---|---|---|---|---|
| 1 | Lift AI: elevator asset-management platform (eAMP) | "Full-stack React/Django Software ... elevator industry", 2 contracts | Oct 2024 - Jun 2025, 40 h/wk | ~/projects/liftAI (django-api 89 commits, asset-management 128 commits, liftai-intelligence 2) | Commits cover contract management (rate sets, review rules, contract upload, car linking), KPI targets + callback rates, compliance (CAT-1/CAT-5), insight templates/reports, invoices, tickets, Django 4->5 upgrade, test suites. The "RAG feature" claim on the profile is NOT visible in these commits: confirm with user. |
| 2 | BoothIQ booth software (desktop, Arduino payments) | "Develop Software for a coin-operated Photobooth with Arduino integration", Nick Morales | May 2025 - active | desktop repo location unknown (see upwork-portfolio-project memory) | Separate case study from the mobile app. |
| 3 | BoothIQ web dashboard (boothiq.com) | same contract | Jan 2026 - active | ~/projects/photobooth-website (514 commits) | Separate case study. |
| 4 | Shelf Life Testing Platform (Foresight Food) | "Python/FastAPI Developer for Render.com Deployment", Brandon J. | Jun 2026 | ~/projects/shelf-life-platform (handoff bundle, 3 commits) | FastAPI + SQLite + vanilla ES6; docs say "extracted from a larger personal project". Confirm how much of the platform the user built vs deployed. |
| 5 | Navigo, Inc: WordPress backend + React/React Native apps | "WordPress and React Developer", 2 contracts | Jul 2023 - Jul 2024 (13 months) | none on disk | The "13-month platform build" in the profile. Need screenshots/description from user. |
| 6 | Media AI: MVP web app | "MVP Web App Development", Sam A. | Jul - Nov 2024, 40 h/wk | none on disk | Need details from user. |

## Tier 2: Upwork-verified, smaller or narrower

| # | Project | Contract | Period | Notes |
|---|---|---|---|---|
| 7 | AI encyclopedia article generator (ChatGPT, cited sources, Markdown, Sheets/MongoDB) | The Project Studio, West, 4 short contracts | Mar - Jun 2023 | Early LLM work; good short case study. |
| 8 | React web app synced with PlayFab DB and a Unity game | The Project Studio, West | Jun 2023 - Feb 2024 | Final milestone closed unfunded; use only if user is comfortable. |
| 9 | Email templates and newsletters | Sagetap (Customer.io, 2024-25), ParentData (Iterable, 2024), Philip B monthly newsletters (2026, ongoing) | 2024 - 2026 | One "email development" case study across clients. |
| 10 | Biofarm newsletters + web prototypes (off-platform, UK) | n/a, invoiced directly | Jan 2026 - active | ~/projects/biofarm (94 commits). Monthly newsletters, brand assets, web banner prototypes. |
| 11 | Archer Property Partners website | OneBite Marketing, Tara L. | Dec 2025 - Jan 2026 | Need URL. |
| 12 | Farm management Flask app (mobs, paddocks, pasture totals) | Shrimal Dharmik | Oct - Nov 2024 | Small ($150). Optional. |

Skip: Tac Logistics WordPress booking site (only first milestone funded), 2023 micro-jobs (Strategic Wear, Jenkins, SEO, VA uploads), Vaadin help, Confidential Upwork Talent Group job.

## Tier 3: on disk, client status unknown (ask user)

| Repo | What it is | Size |
|---|---|---|
| ~/projects/schoolnify | Multi-tenant school management platform (Rust API + Next.js), own product, live | 28 commits + schoolnify-api |
| ~/projects/humanline | HR management platform (Next.js, FastAPI, Supabase), OTP auth, onboarding | 96 commits, Aug - Oct 2025 |
| ~/projects/nexadocs | Multi-tenant RAG knowledge assistant (PDF upload, embeddings, WorkOS tenants) | 12 commits, Nov 2025 |
| ~/projects/tryrack (+ -api, -app) | Wardrobe / boutique marketplace: web, FastAPI, Expo app | ~75 commits, Oct - Dec 2025 |
| ~/projects/recruitcompanion | Electron AI interview note-taker (WorkOS auth, FastAPI backend), milestone 2 | not a git repo |
| ~/projects/soccerteria | Peer-to-peer sports betting platform (Next.js), soccerteria.com | 17 commits |
| ~/projects/FotoShr | Flask image-sharing app with S3 | 4 commits, Apr 2025 |

## Proposed site layout

Case studies (client work): Lift AI, BoothIQ booth software, BoothIQ web dashboard, BoothIQ mobile, Pepmax, Shelf Life platform, Navigo, Email/newsletter development (Sagetap, ParentData, Philip B, Biofarm).
Products (own): Schoolnify, NexaDocs, plus any Tier 3 repo the user confirms.

## Housekeeping noticed during the audit

- ~/projects/liftAI/django-api and liftai-intelligence contain a Firebase service-account JSON (liftai-f22ba-*.json). It is a client credential sitting on disk; delete it if the engagement is over.
