/**
 * Optimize the uploaded PYC logo for web use.
 * - Source: /home/z/my-project/upload/Logo.jpeg (1080x1080 JPEG, 41KB)
 * - Outputs:
 *   - public/pyc-logo.png   (full quality, for crisp display)
 *   - public/pyc-logo-512.png (512x512, for general use)
 *   - public/pyc-favicon.png  (64x64 favicon)
 *   - public/pyc-apple-icon.png (180x180 for apple touch)
 *   - public/pyc-og-image.png  (1200x630 Open Graph image)
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "/home/z/my-project/upload/Logo.jpeg";
const OUT_DIR = "/home/z/my-project/public";

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const buf = readFileSync(SRC);

  // Full-res PNG (lossless) for premium display
  await sharp(buf)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-logo.png"));
  console.log("✓ pyc-logo.png (1080x1080)");

  // 512x512 for cards / sharing
  await sharp(buf)
    .resize(512, 512, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-logo-512.png"));
  console.log("✓ pyc-logo-512.png");

  // Favicon 64x64
  await sharp(buf)
    .resize(64, 64, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-favicon.png"));
  console.log("✓ pyc-favicon.png");

  // Apple touch icon 180x180
  await sharp(buf)
    .resize(180, 180, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-apple-icon.png"));
  console.log("✓ pyc-apple-icon.png");

  // OG image 1200x630 — logo centered on brand blue
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 11, g: 17, b: 48, alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp(buf).resize(440, 440, { fit: "cover" }).png().toBuffer(),
        gravity: "center",
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(OUT_DIR, "pyc-og-image.png"));
  console.log("✓ pyc-og-image.png (1200x630)");

  console.log("\nAll logo assets generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
