# Proposal template

Branded A4 proposal, rendered from a JSON file so each client gets a consistent document.

    cp brand-src/proposal/sample.json brand-src/proposal/clients/acme.json   # edit it
    node brand-src/proposal/render.mjs brand-src/proposal/clients/acme.json  # -> brand-src/proposal/out/acme.pdf

Pages: dark cover, Overview, Scope, Approach, Investment, Why Tasknify, Terms and acceptance (7 pages).
Agency details, proof stats and recent work live in `AGENCY` at the top of render.mjs; update them there
when the numbers change. Each page is a fixed A4 box, so if a long list overflows, shorten it or split it.
`sample.json` is a fictional example (Northwind Facilities); `out/` and `.work/` are not committed.
