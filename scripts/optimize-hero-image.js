/**
 * Optimize the uploaded hero image for web use.
 * - Source: /home/z/my-project/upload/62cab447-d933-4211-b940-3651238ee222.jpg (1280x853, 234KB)
 * - Output: public/hero-bg.jpg (1920x1080 optimized for full-screen hero)
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";

const SRC = "/home/z/my-project/upload/62cab447-d933-4211-b940-3651238ee222.jpg";
const OUT_PATH = "/home/z/my-project/public/hero-bg.jpg";

async function main() {
  mkdirSync("/home/z/my-project/public", { recursive: true });
  const buf = readFileSync(SRC);

  // Resize to 1920x1080 (cover) for full-screen hero, progressive JPEG
  await sharp(buf)
    .resize(1920, 1080, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(OUT_PATH);

  const outSize = (await sharp(OUT_PATH).metadata()).width;
  const outBytes = readFileSync(OUT_PATH).length;
  console.log(`✓ ${OUT_PATH} (${outSize}x${(await sharp(OUT_PATH).metadata()).height}, ${Math.round(outBytes / 1024)}KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
