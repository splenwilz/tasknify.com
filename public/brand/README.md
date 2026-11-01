# Tasknify brand assets

Full guidelines: `tasknify-brand-guide.pdf` in this folder (source: brand-src/brand-guide). Flyer: `flyer-a4.pdf`.

Logo: "Check T" mark + lowercase `tasknify` wordmark (Space Grotesk Bold, outlined, tracking -0.03em).
The wordmark is converted to paths, so no font is needed to display any file here.

## Colors

| Role | Hex |
|---|---|
| Primary (light backgrounds, print) | `#087EA4` |
| Primary on dark backgrounds | `#58C4DC` |
| Ink (wordmark on light) | `#23272F` |
| Base dark | `#050505` |
| Base light | `#FFFFFF` |

## Files

| File | Use |
|---|---|
| `logo-horizontal.svg` / `-2400.png` | Default logo on white or light backgrounds |
| `logo-horizontal-on-dark.svg` / `-2400.png` | Logo on black or dark backgrounds |
| `logo-horizontal-black.svg`, `logo-horizontal-white.svg` | One-colour versions for print, embroidery, watermarks |
| `logo-stacked.svg`, `logo-stacked-on-dark.svg` (+ `-1600.png`) | Square-ish layouts: covers, slides, flyers |
| `wordmark.svg`, `wordmark-white.svg` | Word only |
| `mark.svg`, `mark-on-dark.svg`, `mark-white.svg`, `mark-black.svg` | Mark only, no tile |
| `icon.svg` (+ `icon-1024/512/192.png`) | App icon tile: blue rounded square, white mark |
| `icon-black.svg` / `icon-black-512.png` | Tile for dark app stores and dark social themes |
| `icon-white.svg` | White tile with blue mark |
| `upwork-logo-250.png` | Upwork agency logo (250 x 250) |
| `apple-icon-180.png`, `favicon-32.png`, `favicon-16.png` | Browser and home-screen icons |

## Rules

- Clear space around the logo: at least the height of the mark's crossbar stroke on every side.
- Minimum size: mark 16 px, horizontal logo 120 px wide.
- Do not recolour, outline, add shadows or glows, or rotate the mark.
- On photos, use the white or black one-colour version over a solid overlay.

Source: generated from `scripts/gen_brand.py` (kept outside the repo); regenerate rather than hand-editing SVGs.
Space Grotesk is licensed under the SIL Open Font License 1.1.
