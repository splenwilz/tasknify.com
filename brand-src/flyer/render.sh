#!/bin/sh
# Renders the A4 flyer to public/brand/flyer-a4.pdf and flyer-a4.png (1588x2246 preview).
#   sh brand-src/flyer/render.sh
set -e
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SRC="$ROOT/brand-src/flyer"
WORK="$SRC/.work"; mkdir -p "$WORK"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
sed -e "s#GLOBE_SRC#file://$ROOT/brand-src/upwork-banner/globe.svg#" \
    -e "s#LOGO_SRC#file://$ROOT/public/brand/logo-horizontal-on-dark.svg#" "$SRC/flyer.html" > "$WORK/flyer.html"
"$CHROME" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=10000 \
  --user-data-dir="$WORK/profile" --no-pdf-header-footer --print-to-pdf="$ROOT/public/brand/flyer-a4.pdf" "file://$WORK/flyer.html" 2>/dev/null
"$CHROME" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=10000 \
  --user-data-dir="$WORK/profile" --hide-scrollbars --window-size=794,1123 --force-device-scale-factor=2 \
  --screenshot="$ROOT/public/brand/flyer-a4.png" "file://$WORK/flyer.html" 2>/dev/null
ls -la "$ROOT/public/brand/flyer-a4.pdf" "$ROOT/public/brand/flyer-a4.png"
