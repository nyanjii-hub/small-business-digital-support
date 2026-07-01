import { copyFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imageDir = path.join(process.cwd(), "public", "images");
const backupDir = path.join(imageDir, "_originals");
const targetWidth = 1200;
const targetBytes = 200 * 1024;
const pngNames = [
  "accounting-lp.png",
  "cafe-lp.png",
  "ai-school-lp.png",
  "bodywork-lp.png",
  "minicrm.png"
];

async function fileSize(filePath) {
  return (await stat(filePath)).size;
}

async function writeOptimized(inputPath, outputPath, colors = null) {
  let pipeline = sharp(inputPath, { limitInputPixels: false })
    .rotate()
    .resize({
      width: targetWidth,
      withoutEnlargement: true
    });

  if (colors) {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: true,
      colors
    });
  } else {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true
    });
  }

  await pipeline.toFile(outputPath);
}

async function optimize(fileName) {
  const inputPath = path.join(imageDir, fileName);
  const backupPath = path.join(backupDir, fileName);
  const tempPath = path.join(imageDir, `.${fileName}.tmp`);
  const before = await fileSize(inputPath);

  await mkdir(backupDir, { recursive: true });
  if (!existsSync(backupPath)) {
    await copyFile(inputPath, backupPath);
  }

  await writeOptimized(inputPath, tempPath);

  for (const colors of [256, 192, 128, 96, 64]) {
    if ((await fileSize(tempPath)) <= targetBytes) {
      break;
    }
    await writeOptimized(inputPath, tempPath, colors);
  }

  await copyFile(tempPath, inputPath);
  const after = await fileSize(inputPath);
  const metadata = await sharp(inputPath).metadata();
  const status = after <= targetBytes ? "OK" : "OVER";

  console.log(
    `${status} ${fileName}: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(
      1
    )}KB, ${metadata.width}x${metadata.height}`
  );
}

const existingFiles = pngNames.filter((fileName) => existsSync(path.join(imageDir, fileName)));

if (existingFiles.length === 0) {
  console.log("No target PNG files found in public/images.");
  console.log(`Expected: ${pngNames.join(", ")}`);
} else {
  for (const fileName of existingFiles) {
    await optimize(fileName);
  }
}
