#!/usr/bin/env python3
"""Turn the raw files from extract-bundle.js into the site's assets/ folder.

Usage: python3 scripts/optimize-images.py <raw-dir> <assets-dir>

- PNGs over 400 KB become WebP (max 1800 px wide); smaller PNGs and AVIFs are copied.
- Card thumbnails (thumb-<case>.webp, 720 px) come from each case's first image.
- The PU mark is cropped and saved as a single-colour alpha mask, recoloured in CSS,
  plus a 64 px favicon on the dark canvas.
- ds-doc-8 (the team-credits slide, which names colleagues) and hero-bg are skipped.
"""
import os
import shutil
import sys

from PIL import Image, ImageDraw

raw, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
SKIP = {"ds-doc-8.png", "hero-bg.png", "pu-mark.png"}
LIMIT = 400 * 1024
# Card thumbnail source per case, when the first gallery image crops badly in a card band.
THUMB_SOURCE = {"ds": "ds-3.png"}
CANVAS = (0x2A, 0x21, 0x45, 255)
MARK = (0xB7, 0x9C, 0xFF, 255)


def webp(src, dst, width):
    im = Image.open(src).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(dst, "WEBP", quality=82, method=6)


for name in sorted(os.listdir(raw)):
    src = os.path.join(raw, name)
    if os.path.isdir(src) or name in SKIP or not name.endswith((".png", ".avif")):
        continue
    stem, ext = os.path.splitext(name)
    if ext == ".png" and os.path.getsize(src) > LIMIT:
        webp(src, os.path.join(out, stem + ".webp"), 1800)
    else:
        shutil.copy(src, os.path.join(out, name))
    if stem.endswith("-1") and not stem.startswith("ds-doc"):
        case = stem[:-2]
        thumb_src = os.path.join(raw, THUMB_SOURCE.get(case, name))
        webp(thumb_src, os.path.join(out, "thumb-" + case + ".webp"), 720)

fonts = os.path.join(raw, "fonts")
if os.path.isdir(fonts):
    shutil.copytree(fonts, os.path.join(out, "fonts"), dirs_exist_ok=True)

# PU mark: alpha mask (any colour, recoloured with CSS mask-image) + favicon.
mark = Image.open(os.path.join(raw, "pu-mark.png")).convert("RGBA")
mark = mark.crop(mark.getbbox())
alpha = mark.getchannel("A")
mask = Image.new("RGBA", mark.size, MARK)
mask.putalpha(alpha)
mask.thumbnail((160, 160), Image.LANCZOS)
mask.save(os.path.join(out, "pu-mark.png"), optimize=True)

size = 256
fav = Image.new("RGBA", (size, size), (0, 0, 0, 0))
ImageDraw.Draw(fav).rounded_rectangle((0, 0, size - 1, size - 1), radius=56, fill=CANVAS)
glyph = mask.copy()
glyph.thumbnail((170, 170), Image.LANCZOS)
fav.alpha_composite(glyph, ((size - glyph.width) // 2, (size - glyph.height) // 2))
fav.resize((64, 64), Image.LANCZOS).save(os.path.join(out, "favicon.png"), optimize=True)

for name in sorted(os.listdir(out)):
    p = os.path.join(out, name)
    if os.path.isfile(p):
        print(f"{name:24} {os.path.getsize(p):>9} B")
