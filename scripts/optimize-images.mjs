// Стиснення фото для сайту.
//
// Запуск (з кореня проєкту):
//   npm run optimize-images                         — папка cabinets (за замовчуванням)
//   npm run optimize-images -- public/assets/images/events   — будь-яка інша папка
//
// Що робить з кожним .jpg / .jpeg / .png у папці та підпапках:
//   1. копіює оригінал у image-originals/ (поза public, на сайт не потрапляє);
//   2. повертає фото за EXIF (щоб не було «лежачих» фото з телефона);
//   3. зменшує до 1600 px по довшій стороні (менші — не збільшує);
//   4. зберігає як .jpg (якість 80) з тим самим ім'ям.
// Повторний запуск безпечний: фото .jpg, що вже ≤ 1600 px, пропускаються (повторно не стискаються),
// а оригінал, якщо вже є в image-originals/, не перезаписується.

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const TARGET = path.resolve(ROOT, process.argv[2] ?? "public/assets/images/cabinets");
const BACKUP = path.resolve(ROOT, "image-originals");
const MAX_SIDE = 1600;
const QUALITY = 80;
const EXT = new Set([".jpg", ".jpeg", ".png"]);

const kb = (bytes) => `${Math.round(bytes / 1024)} КБ`;

async function* walk(dir) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else if (EXT.has(path.extname(entry.name).toLowerCase())) yield full;
    }
}

async function exists(file) {
    try { await fs.access(file); return true; } catch { return false; }
}

let before = 0, after = 0, done = 0, skipped = 0;

for await (const file of walk(TARGET)) {
    const rel = path.relative(ROOT, file);
    const input = await fs.readFile(file);
    const meta = await sharp(input).metadata();
    const isJpg = path.extname(file) === ".jpg";

    if (isJpg && Math.max(meta.width, meta.height) <= MAX_SIDE) {
        skipped++;
        continue;
    }

    // резервна копія оригіналу
    const backupFile = path.join(BACKUP, path.relative(path.join(ROOT, "public"), file));
    await fs.mkdir(path.dirname(backupFile), { recursive: true });
    if (!(await exists(backupFile))) await fs.writeFile(backupFile, input);

    const output = await sharp(input)
        .rotate()
        .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();

    // нове ім'я: те саме, але з розширенням .jpg у нижньому регістрі
    const outFile = file.replace(/\.(jpe?g|png)$/i, ".jpg");
    // через тимчасовий файл: на Windows 1.JPG і 1.jpg — той самий файл
    const tmpFile = outFile + ".tmp";
    await fs.writeFile(tmpFile, output);
    await fs.unlink(file);
    await fs.rename(tmpFile, outFile);

    before += input.length;
    after += output.length;
    done++;
    console.log(`✔ ${rel}: ${kb(input.length)} → ${kb(output.length)}`);
}

console.log(`\nСтиснено: ${done}, пропущено (вже оптимальні): ${skipped}`);
if (done) {
    console.log(`Разом: ${kb(before)} → ${kb(after)} (−${Math.round((1 - after / before) * 100)}%)`);
    console.log(`Оригінали збережено в: ${path.relative(ROOT, BACKUP)}/`);
}
