/**
 * Tasknify proposal renderer: A4 PDF from a JSON data file.
 *   node brand-src/proposal/render.mjs brand-src/proposal/sample.json [out.pdf]
 * Copy sample.json per client, edit, render. Needs Google Chrome; fonts load from Google Fonts.
 * Pages are fixed A4 boxes: if a section no longer fits, shorten the text or split the list.
 */
import { execFileSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { basename, dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(here, "../..")
const WORK = join(here, ".work")
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const [dataPath, outArg] = process.argv.slice(2)
if (!dataPath) { console.error("usage: node render.mjs <data.json> [out.pdf]"); process.exit(1) }
const d = JSON.parse(readFileSync(dataPath, "utf8"))
const out = resolve(outArg || join(here, "out", basename(dataPath).replace(/\.json$/, "") + ".pdf"))
mkdirSync(WORK, { recursive: true }); mkdirSync(dirname(out), { recursive: true })

const AGENCY = {
  name: "Tasknify Limited", site: "tasknify.com", email: "info@tasknify.com", phone: "+234 913 551 5251",
  address: "Remote", upwork: "Clients worldwide",
  proof: [["Fixed price", "Written plan before work starts"], ["Weekly", "Staging link and written update"], ["Yours", "Code, accounts and data in your name"], ["Same team", "From first call to after launch"]],
  work: [
    ["Pepmax", "Peptide dose tracker for iOS: calculator, dose log, subscriptions and push. Live on the App Store."],
    ["BoothIQ", "Photo booth platform: booth software, web dashboard and a React Native companion app on one API."],
    ["Lift AI", "Asset-management platform for the elevator industry: contracts, KPIs, compliance and insights."],
  ],
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
const money = (n) => d.currency + n.toLocaleString("en-US")
const total = d.milestones.reduce((a, m) => a + m[2], 0)
const logoDark = `file://${ROOT}/public/brand/logo-horizontal-on-dark.svg`
const logo = `file://${ROOT}/public/brand/logo-horizontal.svg`
const globe = `file://${ROOT}/brand-src/upwork-banner/globe.svg`

const CSS = `
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap">
<style>
@page{size:A4;margin:0}
html,body{margin:0;padding:0;background:#fff}
*{box-sizing:border-box}
body{font-family:Inter,sans-serif;color:#23272F;font-size:10.5pt;line-height:1.5;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{position:relative;width:210mm;height:297mm;overflow:hidden;page-break-after:always;padding:20mm 20mm 22mm}
.page:last-child{page-break-after:auto}
.cover{background:#040913;color:#fff;padding:0}
.cover .g1{position:absolute;left:-60mm;top:-80mm;width:220mm;height:170mm;background:radial-gradient(closest-side,rgba(8,126,164,.5),rgba(4,89,117,.22) 45%,transparent 72%)}
.cover .g3{position:absolute;left:-40mm;bottom:-70mm;width:200mm;height:140mm;background:radial-gradient(closest-side,rgba(8,126,164,.28),transparent 70%)}
.cover .globe{position:absolute;right:-62mm;top:-26mm;width:150mm;height:150mm}
.cover .in{position:absolute;inset:0;padding:16mm 18mm 14mm;display:flex;flex-direction:column}
.cover .top img{height:9.5mm}
.cover .mid{margin-top:auto;margin-bottom:auto}
.cover .eyebrow{color:#58C4DC}
.cover h1{font-size:34pt;color:#fff;margin:5mm 0 0;max-width:150mm}
.cover .for{margin-top:12mm;font-size:12pt;color:rgba(255,255,255,.85);line-height:1.6}
.cover .for b{color:#fff;font-weight:600;font-size:14pt}
.cover .meta{display:flex;gap:14mm;margin-top:8mm;font-size:9.5pt;color:rgba(255,255,255,.6)}
.cover .meta b{display:block;color:#fff;font-weight:500;font-size:10.5pt}
.cover .bot{display:flex;justify-content:space-between;font-size:9.5pt;color:rgba(255,255,255,.6);line-height:1.7}
.cover .bot b{color:#fff;font-weight:600}
.eyebrow{font-size:8.5pt;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#087EA4}
h1,h2,h3{font-family:"Space Grotesk",sans-serif;font-weight:700;letter-spacing:-.025em;line-height:1.08}
h1{font-size:24pt;margin:3mm 0 7mm}
h2{font-size:13pt;margin:9mm 0 3mm}
h3{font-size:11pt;margin:0 0 1mm}
p{margin:0 0 3.5mm}
ul{margin:0;padding-left:5mm}
li{margin-bottom:1.6mm}
.lead{font-size:11.5pt}
table{width:100%;border-collapse:collapse;font-size:10pt}
th{text-align:left;font-size:8.5pt;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#087EA4;padding:0 3mm 2.5mm 0;border-bottom:.5mm solid #087EA4}
td{padding:3mm 3mm 3mm 0;border-bottom:.25mm solid #E3E7EC;vertical-align:top}
td b{font-weight:600}
td.r,th.r{text-align:right;padding-right:0;white-space:nowrap}
tr.total td{border-bottom:none;border-top:.5mm solid #23272F;font-weight:600;font-size:11pt;padding-top:3.5mm}
.phase{display:grid;grid-template-columns:34mm 1fr;gap:4mm;padding:3.5mm 0;border-bottom:.25mm solid #E3E7EC}
.phase .w{font-weight:600;color:#087EA4;font-size:9.5pt;padding-top:.6mm}
.phase p{margin:0;color:#4B5563}
.two{display:grid;grid-template-columns:1fr 1fr;gap:6mm 10mm}
.proof{display:grid;grid-template-columns:repeat(4,1fr);gap:4mm;margin:4mm 0 2mm}
.proof div{border:.3mm solid #E3E7EC;border-radius:2.5mm;padding:4mm}
.proof b{display:block;font-family:"Space Grotesk",sans-serif;font-size:13pt;letter-spacing:-.02em}
.proof small{display:block;color:#6B7280;font-size:8.5pt;margin-top:1mm}
.work{border-left:.6mm solid #087EA4;padding:.5mm 0 .5mm 4mm;margin-bottom:4mm}
.work p{margin:1mm 0 0;color:#4B5563}
.note{background:#F2F7F9;border-radius:2.5mm;padding:5mm 6mm;color:#374151}
.sig{display:grid;grid-template-columns:1fr 1fr;gap:12mm;margin-top:8mm}
.sig div{border-top:.4mm solid #23272F;padding-top:2.5mm;font-size:9.5pt;color:#4B5563;line-height:1.7}
.sig b{display:block;color:#23272F;font-weight:600}
.sig .line{margin-top:12mm;border-top:.25mm solid #9CA3AF}
.foot{position:absolute;left:20mm;right:20mm;bottom:11mm;display:flex;justify-content:space-between;font-size:8.5pt;color:#6B7280}
.foot img{height:5mm;vertical-align:middle}
</style>`

let n = 0
const foot = () => `<div class="foot"><span><img src="${logo}"> &nbsp; ${esc(AGENCY.name)} · Proposal ${esc(d.ref)} · ${esc(d.title)}</span><span>Page ${++n}</span></div>`
const page = (inner) => `<div class="page">${inner}${foot()}</div>`
const li = (l) => l.map((x) => `<li>${esc(x)}</li>`).join("")

const cover = `<div class="page cover"><div class="g1"></div><div class="g3"></div><img class="globe" src="${globe}"><div class="in">
  <div class="top"><img src="${logoDark}"></div>
  <div class="mid">
    <div class="eyebrow">Proposal</div>
    <h1>${esc(d.title)}</h1>
    <div class="for">Prepared for<br><b>${esc(d.client.company)}</b><br>${esc(d.client.contact)}<br>${esc(d.client.location)}</div>
    <div class="meta"><div>Reference<b>${esc(d.ref)}</b></div><div>Date<b>${esc(d.date)}</b></div><div>Valid until<b>${esc(d.validUntil)}</b></div></div>
  </div>
  <div class="bot"><div><b>${esc(AGENCY.name)}</b><br>${esc(AGENCY.address)}<br>${esc(AGENCY.upwork)}</div><div style="text-align:right"><b>${AGENCY.site}</b><br>${AGENCY.email}<br>${AGENCY.phone}</div></div>
</div></div>`

const overview = page(`<div class="eyebrow">Overview</div><h1>What you are trying to achieve</h1>
  ${d.summary.map((p, i) => `<p class="${i === 0 ? "lead" : ""}">${esc(p)}</p>`).join("")}
  <h2>Goals for this project</h2><ul>${li(d.goals)}</ul>
  <h2>How we got here</h2><p>This proposal is based on our conversation and the material you shared. Where we have made an assumption, it is written down in the scope or the terms, so nothing is left to guesswork. If anything here does not match what you had in mind, tell us and we will revise it before you sign.</p>`)

const scope = page(`<div class="eyebrow">Scope</div><h1>What we will deliver</h1>
  <table><tr><th style="width:52mm">Deliverable</th><th>What it includes</th></tr>
  ${d.deliverables.map(([a, b]) => `<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td></tr>`).join("")}</table>
  <h2>Not included</h2><ul>${li(d.outOfScope)}</ul>
  <p style="margin-top:4mm;color:#4B5563">Anything not listed above is outside scope. We are happy to quote for it separately so the price and timeline here stay fixed.</p>`)

const approach = page(`<div class="eyebrow">Approach</div><h1>How the work will run</h1>
  ${d.phases.map(([t, w, p]) => `<div class="phase"><div class="w">${esc(w)}</div><div><h3>${esc(t)}</h3><p>${esc(p)}</p></div></div>`).join("")}
  <h2>Working together</h2>
  <div class="two">
    <div><h3>One team, start to finish</h3><p>A dedicated team and a named project lead from discovery to launch. No hand-offs, no account managers in between.</p></div>
    <div><h3>Weekly written updates</h3><p>Every week you get a short written update: what shipped, what is next, and anything we need from you.</p></div>
    <div><h3>Staging before production</h3><p>You review every feature on a staging environment before it goes live. Automated tests and code review on every change.</p></div>
    <div><h3>Your time zone</h3><p>Calls scheduled in your working hours, messages answered within one business day.</p></div>
  </div>`)

const investment = page(`<div class="eyebrow">Investment</div><h1>Pricing and milestones</h1>
  <table><tr><th>Milestone</th><th>Due</th><th class="r">Amount</th></tr>
  ${d.milestones.map(([a, b, c]) => `<tr><td><b>${esc(a)}</b></td><td style="white-space:nowrap">${esc(b)}</td><td class="r">${money(c)}</td></tr>`).join("")}
  <tr class="total"><td colspan="2">Total, fixed price</td><td class="r">${money(total)}</td></tr></table>
  <h2>Included in the price</h2><ul>${li(d.included)}</ul>
  ${d.optional?.length ? `<h2>Optional extras</h2><table>${d.optional.map(([a, b]) => `<tr><td><b>${esc(a)}</b></td><td class="r">${esc(b)}</td></tr>`).join("")}</table>` : ""}`)

const why = page(`<div class="eyebrow">Why Tasknify</div><h1>Who you would be working with</h1>
  <p class="lead">Tasknify builds custom web and mobile software for startups and businesses that have outgrown off-the-shelf tools. Our team takes a half-formed idea, turns it into a working product, and keeps owning it after launch.</p>
  <div class="proof">${AGENCY.proof.map(([a, b]) => `<div><b>${esc(a)}</b><small>${esc(b)}</small></div>`).join("")}</div>
  <h2>Recent work</h2>
  ${AGENCY.work.map(([a, b]) => `<div class="work"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join("")}
  <h2>What we build with</h2>
  <p>React, Next.js and TypeScript on the web. React Native and Expo on mobile. Django, FastAPI and Node.js behind the scenes, with PostgreSQL and AWS. AI features with LangChain and the OpenAI API where they earn their place. Case studies at <b>tasknify.com/case-studies</b>.</p>`)

const terms = page(`<div class="eyebrow">Terms</div><h1>Terms and next steps</h1>
  <ul>${li(d.terms)}</ul>
  <h2>Next steps</h2><ol style="margin:0;padding-left:5mm">${li(d.nextSteps)}</ol>
  <h2>Acceptance</h2>
  <div class="note">Signing below confirms the scope, price and terms in this proposal (reference ${esc(d.ref)}).</div>
  <div class="sig">
    <div><b>For ${esc(d.client.company)}</b>${esc(d.client.contact)}<div class="line"></div>Signature and date</div>
    <div><b>For ${esc(AGENCY.name)}</b>${esc(d.signatory)}<div class="line"></div>Signature and date</div>
  </div>`)

const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(d.title)} – Proposal</title>${CSS}</head><body>${cover}${overview}${scope}${approach}${investment}${why}${terms}</body></html>`
const htmlPath = join(WORK, basename(out, ".pdf") + ".html")
writeFileSync(htmlPath, html)
execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--allow-file-access-from-files", "--virtual-time-budget=10000", `--user-data-dir=${join(WORK, "profile")}`, "--no-pdf-header-footer", `--print-to-pdf=${out}`, `file://${htmlPath}`], { stdio: "pipe" })
console.log("wrote", out)
