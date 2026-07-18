# Gallery Images

This folder contains the PYC Club photo collection, organized by category.

## Folder Structure

```
public/gallery/
├── community/       — Community outreach, gatherings, volunteer work
├── education/       — Classroom sessions, scholarships, bootcamps
├── health/          — Health camps, screenings, awareness drives
├── environment/     — Tree planting, clean-ups, climate activities
└── events/          — Borborbor festival, galas, summits, celebrations
```

## How to Add Images

### Option 1: Bulk Upload (recommended for many images)

1. Drop all your `.jpg`/`.jpeg`/`.png` files into `/home/z/my-project/upload/`
2. Run the bulk-upload script:
   ```bash
   bun run scripts/bulk-upload-gallery.js
   ```
3. The script will:
   - Optimize each image (resize to 1200px, convert to progressive JPEG)
   - Place them in the `community/` folder by default
   - Move processed files to `upload/processed/` to avoid re-processing
   - Regenerate the manifest automatically

**Specify a category for all images:**
```bash
bun run scripts/bulk-upload-gallery.js --category=events
```

**Adjust JPEG quality (default 82):**
```bash
bun run scripts/bulk-upload-gallery.js --quality=75
```

### Option 2: Single Image Upload

1. Drop your `.jpg`/`.png` file into `/home/z/my-project/upload/`
2. Run:
   ```bash
   bun run scripts/optimize-gallery-image.js <filename> <category> <name>
   # Example:
   bun run scripts/optimize-gallery-image.js 5B8A0280.JPG events pyc-panel-discussion
   ```
3. Regenerate the manifest:
   ```bash
   bun run scripts/scan-gallery.js
   ```

### Option 3: Manual Placement

1. Drop your `.jpg`/`.jpeg`/`.png` files into the appropriate category subfolder above
2. Run the manifest generator:
   ```bash
   bun run scripts/scan-gallery.js
   ```

## Performance

The gallery component supports **150+ images** with built-in pagination:
- Loads 12 images at a time on the `/gallery` page
- "Load More" button reveals the next batch
- All images use `loading="lazy"` so they only load when scrolled into view
- Images are resized to max 1200px wide and compressed to progressive JPEG

## Naming Convention

- Use lowercase, hyphens instead of spaces: `community-outreach-2024.jpg`
- Include the year or location if relevant: `ho-clean-water-2024.jpg`
- Avoid special characters and accents.
- The bulk-upload script auto-sanitizes filenames

## Image Optimization

For best performance, images should be:
- **Width:** 800–1200px (the gallery resizes them responsively)
- **Format:** JPEG (photos) or PNG (graphics with transparency)
- **Size:** under 300KB each

The scripts automatically optimize images during upload. The scanner will
warn you about files larger than 500KB.

## Removing Images

Just delete the file from its subfolder and re-run `bun run scripts/scan-gallery.js`.
