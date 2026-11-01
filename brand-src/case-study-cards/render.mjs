/**
 * Case-study card renderer: builds 2400x1800 (4:3) JPEG cards for /public/case-studies/<slug>/.
 *   node brand-src/case-study-cards/render.mjs [slug ...]
 * Card definitions live in cards.mjs. Needs Google Chrome and macOS sips. Fonts load from Google Fonts.
 */
import { execFileSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { PROJECTS } from "./cards.mjs"

const here = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(here, "../..")
const WORK = join(here, ".work")
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const only = process.argv.slice(2)
mkdirSync(WORK, { recursive: true })

const T = { navy: "#0F2040", ink: "#FFFFFF", sub: "rgba(201,214,240,0.92)", teal: "#58C4DC", chipBg: "rgba(255,255,255,0.06)", chipBorder: "rgba(255,255,255,0.14)" }
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
const fileUrl = (p) => `file://${p.startsWith("/") ? p : join(ROOT, p)}`
const MARK = `<svg viewBox="0 0 100 100" style="position:absolute;right:-180px;top:120px;width:1500px;height:1500px;opacity:.045"><path d="M18 20h64M50 20v52M32 56l18 16 34-34" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const CSS = `
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap">
<style>
html,body{margin:0;padding:0}
.c{position:relative;width:2400px;height:1800px;overflow:hidden;background:${T.navy};color:${T.ink};font-family:Inter,sans-serif}
.pad{position:absolute;inset:0;padding:150px}
.eyebrow{font-size:34px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${T.teal}}
h1{font-family:"Space Grotesk",sans-serif;font-weight:700;letter-spacing:-.025em;line-height:1.02;margin:0}
.big{font-size:132px;margin-top:34px;white-space:pre-line}
.mid{font-size:96px;margin-top:30px;white-space:pre-line}
.small{font-size:44px;line-height:1.45;color:${T.sub};margin-top:44px;max-width:1500px}
.chips{display:flex;flex-wrap:wrap;gap:18px;margin-top:60px}
.chip{font-size:36px;font-weight:500;padding:16px 34px;border-radius:999px;background:${T.chipBg};border:2px solid ${T.chipBorder}}
.pts{list-style:none;padding:0;margin:70px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:44px 80px}
.pts li{position:relative;padding-left:52px;font-size:46px;line-height:1.4;color:${T.sub}}
.pts li:before{content:"";position:absolute;left:0;top:26px;width:18px;height:18px;border-radius:50%;background:${T.teal}}
.pts.one{grid-template-columns:1fr;max-width:1700px}
.frame{position:absolute;border-radius:28px;overflow:hidden;box-shadow:0 60px 140px rgba(0,0,0,.55);background:#0a0a0a;border:3px solid rgba(255,255,255,.08)}
.frame img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
.bar{height:54px;background:#1b2b47;display:flex;align-items:center;gap:14px;padding:0 26px}
.bar i{width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.18)}
.groups{display:grid;grid-template-columns:1fr 1fr;gap:70px 90px;margin-top:70px}
.g .l{font-size:30px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${T.teal};margin-bottom:22px}
.g .chips{margin-top:0}
.rule{height:2px;background:rgba(255,255,255,.1);margin:70px 0 10px}
.strip{position:absolute;left:150px;right:150px;bottom:0;top:660px;display:flex;gap:50px;align-items:flex-start}
.strip .ph{flex:1;height:100%;border-radius:24px 24px 0 0;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.5);background:#fff}
.strip .ph img{display:block;width:100%;height:auto}
.photos{position:absolute;left:150px;right:150px;top:640px;bottom:150px;display:grid;grid-template-columns:repeat(4,1fr);gap:36px}
.photos div{border-radius:24px;overflow:hidden;background:#fff}
.photos img{display:block;width:100%;height:100%;object-fit:cover}
.foot{position:absolute;left:150px;bottom:110px;font-size:34px;color:rgba(255,255,255,.45);display:flex;align-items:center;gap:22px}
.foot svg{width:44px;height:44px}
</style>`

const foot = `<div class="foot"><svg viewBox="0 0 100 100"><path d="M18 20h64M50 20v52M32 56l18 16 34-34" fill="none" stroke="${T.teal}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></svg>tasknify.com</div>`
const chips = (l) => (l && l.length ? `<div class="chips">${l.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>` : "")
const frame = (file, geom) => `<div class="frame" style="${geom}"><div class="bar"><i></i><i></i><i></i></div><img src="${fileUrl(file)}"></div>`

function body(card) {
  const head = `<div class="eyebrow">${esc(card.eyebrow || "")}</div>`
  switch (card.layout) {
    case "cover":
      return `${MARK}<div class="pad">${head}<h1 class="big">${esc(card.big)}</h1><div class="small">${esc(card.small || "")}</div>${chips(card.chips)}</div>${foot}`
    case "points":
      return `${MARK}<div class="pad">${head}<h1 class="mid">${esc(card.big)}</h1>${card.small ? `<div class="small">${esc(card.small)}</div>` : ""}<ul class="pts ${card.points.length <= 4 ? "one" : ""}">${card.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>${foot}`
    case "screen":
      // Text block top-left, screenshot bleeding off bottom-right.
      return `${MARK}<div class="pad">${head}<h1 class="mid" style="max-width:1500px">${esc(card.big)}</h1>${card.small ? `<div class="small" style="max-width:1300px">${esc(card.small)}</div>` : ""}</div>${frame(card.file, card.geom || "left:150px;right:-260px;top:900px;bottom:-200px")}`
    case "stack":
      return `${MARK}<div class="pad">${head}<h1 class="mid">${esc(card.big)}</h1><div class="groups">${card.groups.map(([l, c]) => `<div class="g"><div class="l">${esc(l)}</div>${chips(c)}</div>`).join("")}</div><div class="rule"></div><ul class="pts" style="margin-top:50px">${card.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>`
    case "strip":
      return `${MARK}<div class="pad">${head}<h1 class="mid">${esc(card.big)}</h1>${card.small ? `<div class="small">${esc(card.small)}</div>` : ""}</div><div class="strip">${card.files.map((f) => `<div class="ph"><img src="${fileUrl(f)}"></div>`).join("")}</div>`
    case "photos":
      return `${MARK}<div class="pad">${head}<h1 class="mid">${esc(card.big)}</h1>${card.small ? `<div class="small">${esc(card.small)}</div>` : ""}</div><div class="photos">${card.files.map((f) => `<div><img src="${fileUrl(f)}"></div>`).join("")}</div>`
    default:
      throw new Error(`unknown layout ${card.layout}`)
  }
}

for (const [slug, cards] of Object.entries(PROJECTS)) {
  if (only.length && !only.includes(slug)) continue
  const out = join(ROOT, "public/case-studies", slug)
  mkdirSync(out, { recursive: true })
  for (const card of cards) {
    const page = join(WORK, `${slug}-${card.id}.html`)
    const png = join(WORK, `${slug}-${card.id}.png`)
    writeFileSync(page, `<!doctype html><html><head><meta charset="utf-8">${CSS}</head><body><div class="c">${body(card)}</div></body></html>`)
    execFileSync(CHROME, ["--headless=new", "--disable-gpu", `--screenshot=${png}`, "--window-size=2400,1800", "--force-device-scale-factor=1", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=8000", `--user-data-dir=${join(WORK, "profile")}`, `file://${page}`], { stdio: "pipe" })
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "88", png, "--out", join(out, `${card.id}.jpg`)], { stdio: "pipe" })
    console.log(slug, card.id)
  }
}
