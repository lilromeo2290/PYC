/**
 * Optimize all images from the Dropbox download and add to gallery.
 */
import sharp from "sharp";
import { readdirSync, statSync, existsSync, mkdirSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { execSync } from "node:child_process";

const SRC_DIR = "/home/z/my-project/tmp/dropbox/extracted";
const GALLERY_DIR = "/home/z/my-project/public/gallery/events";
const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 60);
}

async function main() {
  mkdirSync(GALLERY_DIR, { recursive: true });

  const files = readdirSync(SRC_DIR)
    .filter((f) => {
      const ext = extname(f).toLowerCase();
      return VALID_EXTENSIONS.includes(ext);
    })
    .filter((f) => statSync(join(SRC_DIR, f)).isFile())
    .sort();

  console.log(`Found ${files.length} images to process\n`);

  let processed = 0;
  let failed = 0;
  const existingFiles = new Set(readdirSync(GALLERY_DIR));

  for (const file of files) {
    const inputPath = join(SRC_DIR, file);
    const sanitizedName = sanitizeFilename(file);
    let outName = `${sanitizedName}.jpg`;
    let counter = 1;
    while (existingFiles.has(outName)) {
      outName = `${sanitizedName}-${counter}.jpg`;
      counter++;
    }
    existingFiles.add(outName);

    const outPath = join(GALLERY_DIR, outName);

    try {
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
        .jpeg({ quality: 82, progressive: true, mozjpeg: true })
        .toFile(outPath);

      const outBytes = statSync(outPath).size;
      console.log(
        `✓ [${processed + failed + 1}/${files.length}] ${file} → ${outName} (${Math.round(outBytes / 1024)}KB)`
      );
      processed++;
    } catch (e) {
      console.error(`✗ [${processed + failed + 1}/${files.length}] ${file}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Processed: ${processed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${files.length}`);

  if (processed > 0) {
    console.log(`\nRegenerating manifest...`);
    execSync("bun run scripts/scan-gallery.js", { stdio: "inherit", cwd: "/home/z/my-project" });
    console.log(`\n✓ Done! ${processed} image${processed === 1 ? "" : "s"} added to the gallery.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
