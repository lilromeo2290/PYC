import { writeFileSync } from "fs";

const failed = [
  { url: "https://images.unsplash.com/photo-1529390070664-5b20b5c2b139?auto=format&fit=crop&w=1100&q=80", dest: "public/images/history-community.jpg" },
  { url: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=1200&q=80", dest: "public/images/project-water.jpg" },
];

for (const img of failed) {
  try {
    const res = await fetch(img.url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(img.dest, buf);
    console.log(`✓ ${img.dest} (${Math.round(buf.length / 1024)}KB)`);
  } catch (e) {
    console.error(`✗ ${img.dest}: ${e.message}`);
  }
}
