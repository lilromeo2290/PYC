/**
 * Optimize the uploaded Borborbor album cover for web use.
 * - Source: /home/z/my-project/upload/TRACK LIST 3.jpg.jpeg (3000x3000 JPEG, 7.3MB)
 * - Outputs:
 *   - public/borborbor-album.jpg   (1200x1200, optimized for web display)
 *   - public/borborbor-album.webp  (WebP version for better compression)
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "/home/z/my-project/upload/TRACK LIST 3.jpg.jpeg";
const OUT_DIR = "/home/z/my-project/public";

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const buf = readFileSync(SRC);

  // JPEG version (1200x1200, high quality, progressive)
  await sharp(buf)
    .resize(1200, 1200, { fit: "cover", position: "center" })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(join(OUT_DIR, "borborbor-album.jpg"));
  console.log("✓ borborbor-album.jpg (1200x1200 JPEG)");

  // WebP version (better compression, same dimensions)
  await sharp(buf)
    .resize(1200, 1200, { fit: "cover", position: "center" })
    .webp({ quality: 85 })
    .toFile(join(OUT_DIR, "borborbor-album.webp"));
  console.log("✓ borborbor-album.webp (1200x1200 WebP)");

  console.log("\nAll album cover assets generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
