/**
 * Optimize the uploaded Francis Aba photo for web use.
 * - Source: /home/z/my-project/upload/Francis.jpg (719x607 JPEG, 124KB)
 * - Outputs:
 *   - public/francis-aba.jpg       (400x400 square crop for leader card avatar)
 *   - public/francis-aba-large.jpg (600x600 for larger displays)
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "/home/z/my-project/upload/Francis.jpg";
const OUT_DIR = "/home/z/my-project/public";

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const buf = readFileSync(SRC);

  // Square crop 400x400 for the leader card avatar (centered on face)
  await sharp(buf)
    .resize(400, 400, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(join(OUT_DIR, "francis-aba.jpg"));
  console.log("✓ francis-aba.jpg (400x400)");

  // Larger version 600x600 for high-DPI displays
  await sharp(buf)
    .resize(600, 600, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(join(OUT_DIR, "francis-aba-large.jpg"));
  console.log("✓ francis-aba-large.jpg (600x600)");

  console.log("\nAll Francis Aba photo assets generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
