#!/bin/sh
# Renders the brand guide to public/brand/tasknify-brand-guide.pdf.
#   sh brand-src/brand-guide/render.sh
# Needs the proposal sample rendered first (page thumbnails come from it) and pdftoppm (brew install poppler).
set -e
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SRC="$ROOT/brand-src/brand-guide"; WORK="$SRC/.work"; mkdir -p "$WORK"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -f "$WORK/proposal-1.png" ] || pdftoppm -r 110 -png -f 1 -l 2 "$ROOT/brand-src/proposal/out/sample.pdf" "$WORK/proposal"
sed -e "s#ROOT/#file://$ROOT/#g" "$SRC/guide.html" > "$WORK/guide.html"
"$CHROME" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=15000 \
  --user-data-dir="$WORK/profile" --no-pdf-header-footer --print-to-pdf="$ROOT/public/brand/tasknify-brand-guide.pdf" "file://$WORK/guide.html" 2>/dev/null
ls -la "$ROOT/public/brand/tasknify-brand-guide.pdf"
