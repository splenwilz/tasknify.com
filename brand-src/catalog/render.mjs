/**
 * Upwork project-catalog gallery renderer.
 *   node brand-src/catalog/render.mjs <catalog-slug> [slide-id ...]
 * Reads brand-src/catalog/<slug>.mjs (exports `slides`) and writes 2400x1800 JPEGs (Upwork wants 4:3,
 * 1000x750 minimum) to brand-src/catalog/out/<slug>/NN-<id>.jpg. Needs Google Chrome and macOS sips.
 */
import { execFileSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(here, "../..")
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const [slug, ...onlyIds] = process.argv.slice(2)
if (!slug) { console.error("usage: node brand-src/catalog/render.mjs <catalog-slug> [slide-id ...]"); process.exit(1) }
const { slides } = await import(pathToFileURL(join(here, `${slug}.mjs`)).href)
const WORK = join(here, ".work", slug), OUT = join(here, "out", slug)
mkdirSync(WORK, { recursive: true }); mkdirSync(OUT, { recursive: true })

const W = 2400, H = 1800
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
const file = (p) => `file://${p.startsWith("/") ? p : join(ROOT, p)}`
const globe = (style) => `<img src="${file("brand-src/upwork-banner/globe.svg")}" style="position:absolute;opacity:.9;${style}">`
const logo = `<img src="${file("public/brand/logo-horizontal-on-dark.svg")}" style="position:absolute;left:120px;top:110px;height:84px">`
const site = (n, total) => `<div style="position:absolute;right:120px;top:124px;font-size:40px;color:rgba(255,255,255,.5)">tasknify.com${total ? ` <span style="margin-left:40px;color:rgba(255,255,255,.3)">${n} / ${total}</span>` : ""}</div>`
const check = `<svg viewBox="0 0 24 24" width="44" height="44" style="flex:none"><circle cx="12" cy="12" r="12" fill="#087EA4"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const CSS = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@700&display=swap">
<style>
html,body{margin:0}*{box-sizing:border-box}
.a{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:#040913;color:#fff;font-family:Inter,sans-serif}
.g1{position:absolute;left:-600px;top:-900px;width:2600px;height:2000px;background:radial-gradient(closest-side,rgba(8,126,164,.5),rgba(4,89,117,.22) 45%,transparent 72%)}
.g2{position:absolute;right:-500px;bottom:-900px;width:2200px;height:1800px;background:radial-gradient(closest-side,rgba(88,196,220,.14),transparent 70%)}
.eyebrow{font-size:40px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#58C4DC}
h1{font-family:"Space Grotesk",sans-serif;font-weight:700;letter-spacing:-.03em;line-height:1.02;margin:36px 0 0;white-space:pre-line}
.sub{font-size:50px;line-height:1.4;color:rgba(255,255,255,.75);margin-top:40px}
.card{background:linear-gradient(180deg,rgba(18,32,46,.96),rgba(9,18,28,.96));border:2px solid rgba(88,196,220,.28);border-radius:40px;box-shadow:0 60px 140px rgba(0,0,0,.55)}
.chip{display:inline-flex;align-items:center;gap:18px;padding:22px 40px;border-radius:999px;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.14);font-size:40px;font-weight:500}
.muted{color:rgba(255,255,255,.6)}
.teal{color:#58C4DC}
</style>`

const T = {
  cover: (s) => `
    ${globe("right:-700px;bottom:-900px;width:2000px")}
    <div style="position:absolute;left:120px;top:420px;width:1080px">
      <div class="eyebrow">${esc(s.eyebrow)}</div><h1 style="font-size:136px">${esc(s.h)}</h1>
      <div class="sub" style="max-width:980px">${esc(s.sub)}</div>
    </div>
    <div class="card" style="position:absolute;left:1300px;top:300px;width:980px;padding:56px 60px">
      <div style="display:flex;align-items:center;gap:20px;font-size:34px;color:rgba(255,255,255,.55);border-bottom:2px solid rgba(255,255,255,.08);padding-bottom:36px"><span style="width:18px;height:18px;border-radius:50%;background:#58C4DC;box-shadow:0 0 18px #58C4DC"></span>${esc(s.chat.title)}</div>
      <div style="margin:48px 0 0 160px;background:#087EA4;border-radius:36px 36px 8px 36px;padding:36px 44px;font-size:40px;line-height:1.35">${esc(s.chat.q)}</div>
      <div style="margin:40px 160px 0 0;background:rgba(255,255,255,.07);border-radius:36px 36px 36px 8px;padding:40px 44px;font-size:40px;line-height:1.4">${esc(s.chat.a)}
        <div style="margin-top:32px;display:inline-flex;align-items:center;gap:18px;padding:18px 30px;border-radius:999px;background:rgba(88,196,220,.12);border:2px solid rgba(88,196,220,.4);font-size:32px;color:#58C4DC"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#58C4DC" stroke-width="2"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>${esc(s.chat.source)}</div>
      </div>
      <div style="margin-top:48px;display:flex;align-items:center;gap:24px;border:2px solid rgba(255,255,255,.12);border-radius:999px;padding:26px 40px;font-size:36px;color:rgba(255,255,255,.4)">${esc(s.chat.placeholder)}<span style="margin-left:auto;width:64px;height:64px;border-radius:50%;background:#58C4DC;display:flex;align-items:center;justify-content:center"><svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#04202a" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
    </div>`,

  steps: (s) => `
    ${globe("left:-900px;top:-1100px;width:2000px;opacity:.5")}
    <div style="position:absolute;left:120px;top:330px;width:2160px;text-align:center">
      <div class="eyebrow">${esc(s.eyebrow)}</div><h1 style="font-size:116px">${esc(s.h)}</h1>
    </div>
    <div style="position:absolute;left:120px;right:120px;top:780px;display:grid;grid-template-columns:1fr 90px 1fr 90px 1fr;align-items:center;gap:0">
      ${s.steps.map((st, i) => `${i ? `<div style="display:flex;justify-content:center"><svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#58C4DC" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>` : ""}
        <div class="card" style="padding:64px 56px;min-height:720px">
          <div style="width:120px;height:120px;border-radius:30px;background:rgba(88,196,220,.12);border:2px solid rgba(88,196,220,.35);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk';font-size:56px;color:#58C4DC">${i + 1}</div>
          <div style="font-family:'Space Grotesk';font-size:60px;margin-top:44px;line-height:1.1">${esc(st.t)}</div>
          <div class="muted" style="font-size:40px;line-height:1.45;margin-top:28px">${esc(st.d)}</div>
        </div>`).join("")}
    </div>`,

  list: (s) => `
    ${globe("right:-800px;top:-1000px;width:2000px;opacity:.5")}
    <div style="position:absolute;left:120px;top:300px;width:900px">
      <div class="eyebrow">${esc(s.eyebrow)}</div><h1 style="font-size:124px">${esc(s.h)}</h1>
      ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ""}
    </div>
    <div style="position:absolute;left:1140px;top:300px;width:1140px;display:flex;flex-direction:column;gap:30px">
      ${s.items.map((it) => `<div class="card" style="display:flex;gap:36px;align-items:flex-start;padding:44px 52px;border-radius:30px">${check}<div><div style="font-size:48px;font-weight:600;line-height:1.2">${esc(it.t)}</div>${it.d ? `<div class="muted" style="font-size:36px;line-height:1.4;margin-top:12px">${esc(it.d)}</div>` : ""}</div></div>`).join("")}
    </div>`,

  stack: (s) => `
    ${globe("left:-700px;bottom:-1000px;width:1900px;opacity:.6")}
    <div style="position:absolute;left:120px;top:300px;width:2160px">
      <div class="eyebrow">${esc(s.eyebrow)}</div><h1 style="font-size:124px;max-width:1500px">${esc(s.h)}</h1>
    </div>
    <div style="position:absolute;left:120px;top:800px;width:1240px">
      <div class="muted" style="font-size:36px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:36px">${esc(s.chipsLabel)}</div>
      <div style="display:flex;flex-wrap:wrap;gap:26px">${s.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
      <div class="muted" style="font-size:36px;letter-spacing:.12em;text-transform:uppercase;margin:80px 0 36px">${esc(s.inputsLabel)}</div>
      <div style="display:flex;flex-wrap:wrap;gap:26px">${s.inputs.map((c) => `<span class="chip" style="background:rgba(88,196,220,.08);border-color:rgba(88,196,220,.3)">${esc(c)}</span>`).join("")}</div>
    </div>
    <div class="card" style="position:absolute;left:1460px;top:800px;width:820px;padding:72px 64px;text-align:center">
      <svg viewBox="0 0 24 24" width="160" height="160" fill="none" stroke="#58C4DC" stroke-width="1.6" style="margin:0 auto"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.4" fill="#58C4DC"/></svg>
      <div style="font-family:'Space Grotesk';font-size:64px;margin-top:40px;line-height:1.1">${esc(s.panel.t)}</div>
      <div class="muted" style="font-size:38px;line-height:1.45;margin-top:28px">${esc(s.panel.d)}</div>
    </div>`,

  tiers: (s) => `
    <div style="position:absolute;left:120px;top:260px;width:2160px;text-align:center">
      <div class="eyebrow">${esc(s.eyebrow)}</div><h1 style="font-size:110px">${esc(s.h)}</h1>
    </div>
    <div style="position:absolute;left:120px;right:120px;top:640px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:stretch">
      ${s.tiers.map((t) => `<div class="card" style="padding:60px 52px;position:relative;${t.featured ? "border-color:#58C4DC;box-shadow:0 0 0 2px #58C4DC,0 60px 140px rgba(0,0,0,.55)" : ""}">
        ${t.featured ? `<div style="position:absolute;top:-30px;left:52px;background:#58C4DC;color:#04202a;font-weight:600;font-size:30px;padding:12px 30px;border-radius:999px">${esc(t.featured)}</div>` : ""}
        <div class="teal" style="font-size:38px;font-weight:600;letter-spacing:.1em;text-transform:uppercase">${esc(t.name)}</div>
        <div style="font-family:'Space Grotesk';font-size:96px;margin-top:20px;line-height:1">${esc(t.price)}</div>
        <div class="muted" style="font-size:36px;margin-top:14px">${esc(t.time)}</div>
        <div style="height:2px;background:rgba(255,255,255,.08);margin:44px 0"></div>
        <div style="display:flex;flex-direction:column;gap:26px">${t.points.map((p) => `<div style="display:flex;gap:22px;align-items:flex-start;font-size:36px;line-height:1.35"><span style="flex:none;width:14px;height:14px;border-radius:50%;background:#58C4DC;margin-top:20px"></span>${esc(p)}</div>`).join("")}</div>
      </div>`).join("")}
    </div>`,

  proof: (s) => `
    ${globe("right:-800px;top:-900px;width:2100px;opacity:.7")}
    <div style="position:absolute;left:120px;top:360px;width:1000px">
      <div class="eyebrow">${esc(s.eyebrow)}</div><h1 style="font-size:124px">${esc(s.h)}</h1>
      <div class="sub">${esc(s.sub)}</div>
      <div style="display:flex;gap:60px;margin-top:70px">${s.stats.map((st) => `<div><div style="font-family:'Space Grotesk';font-size:90px;color:#58C4DC;line-height:1">${esc(st.v)}</div><div class="muted" style="font-size:34px;margin-top:12px">${esc(st.l)}</div></div>`).join("")}</div>
    </div>
    <div style="position:absolute;left:1260px;top:380px;width:1040px;transform:perspective(3000px) rotateY(-10deg);transform-origin:left center">
      <div style="border-radius:34px;overflow:hidden;border:3px solid rgba(88,196,220,.35);box-shadow:0 80px 160px rgba(0,0,0,.6)"><img src="${file(s.image)}" style="width:100%;display:block"></div>
      <div class="muted" style="font-size:32px;margin-top:28px;text-align:center">${esc(s.caption)}</div>
    </div>`,
}

slides.forEach((s, i) => {
  if (onlyIds.length && !onlyIds.includes(s.id)) return
  const n = String(i + 1).padStart(2, "0")
  const page = join(WORK, `${n}-${s.id}.html`), png = join(WORK, `${n}-${s.id}.png`)
  writeFileSync(page, `<!doctype html><html><head><meta charset="utf-8">${CSS}</head><body><div class="a"><div class="g1"></div><div class="g2"></div>${T[s.type](s)}${logo}${site(i + 1, slides.length)}</div></body></html>`)
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", `--screenshot=${png}`, `--window-size=${W},${H}`, "--force-device-scale-factor=1", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=8000", `--user-data-dir=${join(WORK, "profile")}`, `file://${page}`], { stdio: "pipe" })
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "88", png, "--out", join(OUT, `${n}-${s.id}.jpg`)], { stdio: "pipe" })
  console.log(`${n}-${s.id}.jpg`)
})
