/**
 * Optimize AND brighten the new PYC logo for web use.
 * - Source: /home/z/my-project/upload/Logo - Copy.jpeg (527x593 JPEG)
 * - Brighten: +18% lightness, +25% saturation, slight contrast bump
 * - Outputs:
 *   - public/pyc-logo.png         (full quality, brightened)
 *   - public/pyc-logo-512.png     (512x512 badge, brightened)
 *   - public/pyc-favicon.png      (64x64 favicon, brightened)
 *   - public/pyc-apple-icon.png   (180x180, brightened)
 *   - public/pyc-og-image.png     (1200x630 OG, brightened)
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "/home/z/my-project/upload/Logo - Copy.jpeg";
const OUT_DIR = "/home/z/my-project/public";

/** Brighten pipeline: linear brightness + saturation + contrast + gamma. */
function brighten() {
  return [
    // +18% brightness
    sharp.modulate({ brightness: 1.18, saturation: 1.25 }),
    // Mild contrast bump for crisper whites against blue
    sharp.linear(1.08, -(128 * 0.08)),
    // Gamma correction lifts midtones slightly
    sharp.gamma(1.05),
  ];
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const buf = readFileSync(SRC);

  // Build a brightened base PNG (kept at native size 527x593)
  const brightenedPng = await sharp(buf)
    .modulate({ brightness: 1.18, saturation: 1.28 })
    .linear(1.08, -(128 * 0.08))
    .gamma(1.05)
    .png({ quality: 95, compressionLevel: 9 })
    .toBuffer();

  // Full-res PNG (native dimensions) for premium display (footer emblem)
  await sharp(brightenedPng)
    .toFile(join(OUT_DIR, "pyc-logo.png"));
  console.log("✓ pyc-logo.png (brightened, native size)");

  // Square-cropped 512 badge for navbar / hero chip
  // The source is 527x593 — we extend canvas to square first, then resize,
  // so we don't lose any content.
  const squared = await sharp(brightenedPng)
    .resize({ width: 527, height: 527, fit: "contain", background: { r: 0, g: 51, b: 160, alpha: 1 } })
    .toBuffer();

  await sharp(squared)
    .resize(512, 512, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-logo-512.png"));
  console.log("✓ pyc-logo-512.png (brightened, square)");

  await sharp(squared)
    .resize(64, 64, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-favicon.png"));
  console.log("✓ pyc-favicon.png");

  await sharp(squared)
    .resize(180, 180, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-apple-icon.png"));
  console.log("✓ pyc-apple-icon.png");

  // OG image 1200x630 — brightened logo centered on brand navy
  const ogLogo = await sharp(squared)
    .resize(440, 440, { fit: "cover" })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 11, g: 17, b: 48, alpha: 1 },
    },
  })
    .composite([{ input: ogLogo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-og-image.png"));
  console.log("✓ pyc-og-image.png (1200x630)");

  console.log("\nAll brightened logo assets generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
