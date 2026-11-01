# Ad creatives

`node brand-src/ads/render.mjs [id ...] [--size=square,portrait,story,landscape]` writes JPEGs to `out/`.
Creatives are defined in CREATIVES inside render.mjs; platform text and targeting notes are in copy.md.
Layout: night base, blue glow, logo top-left, site top-right, eyebrow + headline + sub + CTA pill, and
either the dotted globe or a phone mock with a real screenshot. `.work/` is ignored by git.
