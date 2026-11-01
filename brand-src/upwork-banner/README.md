# Upwork banner source

`banner.html` composes the 3200 x 320 agency banner: dark base, brand-blue glow, one headline,
one subline, and `globe.svg` (a generated dotted globe in brand teal) at the far right.
Fonts: Space Grotesk (download the variable TTF as `SpaceGrotesk.ttf` next to this file; it is
not committed) and Inter from Google Fonts. `preview-centre-1300.png` is the centre crop a
narrow viewer sees. `p1.jpg` / `b1.jpg` are phone crops kept from an earlier version.

Render (macOS, Chrome installed):

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
      --hide-scrollbars --force-device-scale-factor=1 --window-size=3200,320 --virtual-time-budget=4000 \
      --screenshot=../../public/brand/upwork-banner-3200x320.png "file://$PWD/banner.html"

Keep the headline inside the centre 1200 px: Upwork may crop the sides on narrow screens.
Upwork overlays the agency logo tile at the bottom-left of the banner.

`banner-alt-mark.html` is an alternate with the glowing brand mark in place of the globe (not the one uploaded).
