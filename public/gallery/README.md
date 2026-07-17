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

1. Drop your `.jpg`, `.jpeg`, or `.png` files into the appropriate category
   subfolder above.
2. Run the manifest generator:
   ```bash
   bun run scripts/scan-gallery.js
   ```
   This scans all subfolders and writes `src/data/gallery-images.json`.
3. The website automatically picks up the new images — no code changes needed.

## Naming Convention

- Use lowercase, hyphens instead of spaces: `community-outreach-2024.jpg`
- Include the year or location if relevant: `ho-clean-water-2024.jpg`
- Avoid special characters and accents.

## Image Optimization

For best performance, images should be:
- **Width:** 800–1200px (the gallery resizes them responsively)
- **Format:** JPEG (photos) or PNG (graphics with transparency)
- **Size:** under 300KB each (use https://squoosh.app if needed)

The scanner script will warn you about files larger than 500KB.

## Removing Images

Just delete the file from its subfolder and re-run `bun run scripts/scan-gallery.js`.
