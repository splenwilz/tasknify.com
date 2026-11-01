/**
 * Ad creative renderer: node brand-src/ads/render.mjs [creative-id ...] [--size=square,portrait,story,landscape]
 * Writes JPEGs to brand-src/ads/out/<creative>-<size>.jpg. Needs Google Chrome and macOS sips; fonts from Google Fonts.
 */
import { execFileSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(here, "../..")
const WORK = join(here, ".work"); const OUT = join(here, "out")
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdirSync(WORK, { recursive: true }); mkdirSync(OUT, { recursive: true })
const args = process.argv.slice(2)
const sizeArg = args.find((a) => a.startsWith("--size="))
const onlySizes = sizeArg ? sizeArg.slice(7).split(",") : null
const onlyIds = args.filter((a) => !a.startsWith("--"))

const SIZES = { square: [1080, 1080], portrait: [1080, 1350], story: [1080, 1920], landscape: [1200, 628] }
const SHOTS = {
  pepmax: "/Users/splenwilz/projects/pepmax/tools/store-screenshots/assets/screens/reconstitution-clean.png",
  boothiq: "/Users/splenwilz/projects/photobooth-app/appstore-screenshots/raw/01-dashboard.png",
}
export const CREATIVES = [
  { id: "brand", eyebrow: "Software development agency", h: "Software Built\nTo Last", sub: "Custom web and mobile apps for startups and growing businesses.", cta: "See our work", art: "globe" },
  { id: "appstore", eyebrow: "Mobile apps · React Native", h: "Kickoff to the App Store in ten weeks", sub: "Pepmax is a dose-tracking app we designed, built and shipped. Yours could be next.", cta: "Start your app", art: "phone", shot: "pepmax" },
  { id: "spreadsheets", eyebrow: "Internal tools & portals", h: "Still running the business on spreadsheets?", sub: "We build the dashboards, portals and internal tools your team will actually use.", cta: "Talk to an engineer", art: "phone", shot: "boothiq" },
  { id: "ai", eyebrow: "AI features · Production ready", h: "AI features that work in production", sub: "RAG search, document Q&A and LLM integrations, built and maintained by senior engineers.", cta: "See how we build", art: "globe" },
  { id: "proof", eyebrow: "One team, start to finish", h: "One team.\nYour whole project.", sub: "A written plan and fixed price before work starts. A staging link every week. The same team after launch.", cta: "Work with us", art: "globe" },
]

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
const html = (c, size, [W, H]) => {
  const u = W / 1080                             // scale unit
  const story = size === "story", land = size === "landscape"
  const hSize = (land ? 64 : story ? 92 : 86) * u * (c.h.length > 36 ? 0.86 : 1)
  const pad = (land ? 56 : 80) * u
  const globe = `<img src="file://${ROOT}/brand-src/upwork-banner/globe.svg" style="position:absolute;${land ? `right:-${260 * u}px;top:-${180 * u}px;width:${900 * u}px` : story ? `right:-${420 * u}px;top:${1060 * u}px;width:${1200 * u}px` : `right:-${380 * u}px;bottom:-${520 * u}px;width:${1180 * u}px`};opacity:.95">`
  const phone = c.shot ? `<div style="position:absolute;${land ? `right:${70 * u}px;top:${90 * u}px;width:${300 * u}px` : story ? `left:50%;transform:translateX(-50%);bottom:-${300 * u}px;width:${560 * u}px` : `right:-${40 * u}px;bottom:-${280 * u}px;width:${500 * u}px`};aspect-ratio:1290/2796;border-radius:${80 * u}px;border:${10 * u}px solid #1a2230;background:#000;overflow:hidden;box-shadow:0 ${60 * u}px ${140 * u}px rgba(0,0,0,.6)"><img src="file://${SHOTS[c.shot]}" style="width:100%;height:100%;object-fit:cover;display:block"></div>` : ""
  const copyW = land ? (c.art === "phone" ? 600 : 720) * u : c.art === "phone" && !story ? 520 * u : 900 * u
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@700&display=swap">
<style>html,body{margin:0}.a{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:#040913;color:#fff;font-family:Inter,sans-serif}
.g1{position:absolute;left:-${300 * u}px;top:-${500 * u}px;width:${1500 * u}px;height:${1200 * u}px;background:radial-gradient(closest-side,rgba(8,126,164,.55),rgba(4,89,117,.25) 45%,transparent 72%)}
.g2{position:absolute;right:-${300 * u}px;bottom:-${500 * u}px;width:${1200 * u}px;height:${1000 * u}px;background:radial-gradient(closest-side,rgba(88,196,220,.16),transparent 70%)}
.logo{position:absolute;left:${pad}px;top:${pad}px;height:${(land ? 40 : 48) * u}px}
.site{position:absolute;right:${pad}px;top:${pad + 6 * u}px;font-size:${(land ? 20 : 24) * u}px;color:rgba(255,255,255,.55)}
.copy{position:absolute;left:${pad}px;${story ? `top:${330 * u}px` : land ? `top:50%;transform:translateY(-50%)` : `bottom:${pad}px`};width:${copyW}px}
.eyebrow{font-size:${(land ? 18 : 22) * u}px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#58C4DC}
h1{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:${hSize}px;letter-spacing:-.03em;line-height:1.02;margin:${22 * u}px 0 0;white-space:pre-line}
.sub{font-size:${(land ? 22 : 28) * u}px;line-height:1.4;color:rgba(255,255,255,.78);margin-top:${22 * u}px;max-width:${(land ? 640 : 760) * u}px}
.cta{display:inline-block;margin-top:${34 * u}px;padding:${(land ? 14 : 18) * u}px ${(land ? 30 : 38) * u}px;border-radius:999px;background:#087EA4;color:#fff;font-weight:600;font-size:${(land ? 20 : 26) * u}px}
</style></head><body><div class="a"><div class="g1"></div><div class="g2"></div>${c.art === "globe" ? globe : ""}${phone}
<img class="logo" src="file://${ROOT}/public/brand/logo-horizontal-on-dark.svg"><div class="site">tasknify.com</div>
<div class="copy"><div class="eyebrow">${esc(c.eyebrow)}</div><h1>${esc(c.h)}</h1><div class="sub">${esc(c.sub)}</div><span class="cta">${esc(c.cta)}</span></div>
</div></body></html>`
}

for (const c of CREATIVES) {
  if (onlyIds.length && !onlyIds.includes(c.id)) continue
  for (const [size, dims] of Object.entries(SIZES)) {
    if (onlySizes && !onlySizes.includes(size)) continue
    const page = join(WORK, `${c.id}-${size}.html`), png = join(WORK, `${c.id}-${size}.png`)
    writeFileSync(page, html(c, size, dims))
    execFileSync(CHROME, ["--headless=new", "--disable-gpu", `--screenshot=${png}`, `--window-size=${dims[0]},${dims[1]}`, "--force-device-scale-factor=1", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=8000", `--user-data-dir=${join(WORK, "profile")}`, `file://${page}`], { stdio: "pipe" })
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "90", png, "--out", join(OUT, `${c.id}-${size}.jpg`)], { stdio: "pipe" })
    console.log(c.id, size)
  }
}
