import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/assets/projects";
const EXTS = [".jpg", ".jpeg", ".png"];

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(full)));
    } else if (EXTS.includes(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

const files = await getFiles(INPUT_DIR);

if (files.length === 0) {
  console.log("No images found in", INPUT_DIR);
  process.exit(0);
}

for (const file of files) {
  const before = (await stat(file)).size;
  const name = basename(file, extname(file));
  const dir = file.replace(/[^/\\]+$/, "");
  const out = join(dir, name + ".webp");

  await sharp(file)
    .webp({ lossless: true })
    .toFile(out);

  const after = (await stat(out)).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`✓ ${basename(file)} → ${basename(out)}  (${saved}% smaller)`);
}

console.log(`\nDone — ${files.length} image(s) compressed.`);
