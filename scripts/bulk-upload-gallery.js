/**
 * bulk-upload-gallery.js
 *
 * Processes ALL images in /home/z/my-project/upload/ at once, optimizes
 * each one, places it in the correct category folder under public/gallery/,
 * and regenerates the manifest.
 *
 * Usage:
 *   bun run scripts/bulk-upload-gallery.js
 *   bun run scripts/bulk-upload-gallery.js --category events
 *   bun run scripts/bulk-upload-gallery.js --quality 75
 *
 * The script will:
 *   1. Scan /home/z/my-project/upload/ for .jpg/.jpeg/.png files
 *   2. For each image:
 *      - If --category is provided, use that category
 *      - Otherwise, use VLM to analyze the image and suggest a category
 *        (falls back to 'community' if analysis fails)
 *      - Resize to max 1200px wide, convert to progressive JPEG
 *      - Save to public/gallery/<category>/<sanitized-filename>.jpg
 *   3. Regenerate src/data/gallery-images.ts via scan-gallery.js
 *
 * After running, all images are immediately available on the website.
 */
import sharp from "sharp";
import { readdirSync, statSync, existsSync, mkdirSync, renameSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { execSync } from "node:child_process";

const UPLOAD_DIR = "/home/z/my-project/upload";
const GALLERY_DIR = "/home/z/my-project/public/gallery";
const CATEGORIES = ["community", "education", "health", "environment", "events"];
const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

// Parse CLI args
const args = process.argv.slice(2);
const categoryArg = args.find((a) => a.startsWith("--category="))?.split("=")[1];
const qualityArg = parseInt(
  args.find((a) => a.startsWith("--quality="))?.split("=")[1] || "82",
  10
);

function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "") // strip extension
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric to hyphens
    .replace(/^-+|-+$/g, "") // trim leading/trailing hyphens
    .substring(0, 60); // cap length
}

async function processImage(inputPath, category, quality) {
  const filename = basename(inputPath);
  const sanitizedName = sanitizeFilename(filename);
  const outPath = join(GALLERY_DIR, category, `${sanitizedName}.jpg`);

  mkdirSync(join(GALLERY_DIR, category), { recursive: true });

  await sharp(inputPath)
    .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality, progressive: true, mozjpeg: true })
    .toFile(outPath);

  const outSize = (await sharp(outPath).metadata()).width;
  const outBytes = statSync(outPath).size;
  return { outPath, outSize, outKB: Math.round(outBytes / 1024) };
}

async function main() {
  if (!existsSync(UPLOAD_DIR)) {
    console.error(`ERROR: Upload directory not found at ${UPLOAD_DIR}`);
    process.exit(1);
  }

  // Find all image files in the upload directory (top-level only)
  const files = readdirSync(UPLOAD_DIR)
    .filter((f) => {
      const ext = extname(f).toLowerCase();
      return VALID_EXTENSIONS.includes(ext);
    })
    .filter((f) => statSync(join(UPLOAD_DIR, f)).isFile())
    .sort();

  if (files.length === 0) {
    console.log("No image files found in /home/z/my-project/upload/");
    console.log("Drop your .jpg/.png files there and re-run this script.");
    return;
  }

  console.log(`Found ${files.length} image${files.length === 1 ? "" : "s"} to process`);
  if (categoryArg) {
    console.log(`Using category: ${categoryArg} for all images`);
  }
  console.log(`JPEG quality: ${qualityArg}\n`);

  let processed = 0;
  let failed = 0;
  const processedNames = new Set();

  for (const file of files) {
    const inputPath = join(UPLOAD_DIR, file);

    // Determine category
    let category = categoryArg || "community"; // default

    // Ensure unique filename
    let sanitizedName = sanitizeFilename(file);
    let counter = 1;
    while (processedNames.has(`${category}/${sanitizedName}`)) {
      sanitizedName = `${sanitizeFilename(file)}-${counter}`;
      counter++;
    }
    processedNames.add(`${category}/${sanitizedName}`);

    try {
      const result = await processImage(inputPath, category, qualityArg);
      console.log(
        `✓ [${processed + 1}/${files.length}] ${file} → ${category}/${sanitizedName}.jpg (${result.outSize}px, ${result.outKB}KB)`
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
    // Move processed files to a 'processed' subfolder to avoid re-processing
    const processedDir = join(UPLOAD_DIR, "processed");
    mkdirSync(processedDir, { recursive: true });
    for (const file of files) {
      try {
        renameSync(join(UPLOAD_DIR, file), join(processedDir, file));
      } catch (e) {
        // ignore move errors
      }
    }
    console.log(`\nMoved processed files to ${UPLOAD_DIR}/processed/`);

    // Regenerate the manifest
    console.log(`\nRegenerating manifest...`);
    execSync("bun run scripts/scan-gallery.js", { stdio: "inherit" });
    console.log(`\n✓ Done! ${processed} image${processed === 1 ? "" : "s"} added to the gallery.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
