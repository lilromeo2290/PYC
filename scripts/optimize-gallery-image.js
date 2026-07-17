/**
 * Optimize an uploaded gallery image for web use.
 * - Source: /home/z/my-project/upload/5B8A0280.JPG (6720x4480, 6.3MB)
 * - Output: public/gallery/events/pyc-panel-discussion.jpg
 *
 * Usage: bun run scripts/optimize-gallery-image.js <input> <output-category> <output-name>
 * Example: bun run scripts/optimize-gallery-image.js 5B8A0280.JPG events pyc-panel-discussion
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const SRC = process.argv[2]
  ? `/home/z/my-project/upload/${process.argv[2]}`
  : "/home/z/my-project/upload/5B8A0280.JPG";
const CATEGORY = process.argv[3] || "events";
const NAME = process.argv[4] || "pyc-panel-discussion";

const OUT_DIR = "/home/z/my-project/public/gallery";
const OUT_PATH = join(OUT_DIR, CATEGORY, `${NAME}.jpg`);

async function main() {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  const buf = readFileSync(SRC);

  // Resize to max 1200px wide, convert to progressive JPEG
  await sharp(buf)
    .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(OUT_PATH);

  const outSize = (await sharp(OUT_PATH).metadata()).width;
  const outBytes = readFileSync(OUT_PATH).length;
  console.log(`✓ ${OUT_PATH} (${outSize}px wide, ${Math.round(outBytes / 1024)}KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
