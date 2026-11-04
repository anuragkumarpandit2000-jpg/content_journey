import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const VIDEOS = [11, 12, 13, 14, 15];

for (const num of VIDEOS) {
  const vDir = `D:/anurag/content_journey/videos/video#${num}`;
  const outDir = `${vDir}/out`;
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const masterMp4 = `${outDir}/video${num}_master_reel.mp4`;
  const optMp4 = `${outDir}/video${num}_optimized.mp4`;
  const thumbJpg = `${outDir}/thumb_cover.jpg`;

  console.log(`\n====================================================`);
  console.log(`🎬 RENDERING VIDEO #${num} REEL & THUMBNAIL`);
  console.log(`====================================================\n`);

  // 1. Still Cover Thumbnail
  if (!fs.existsSync(thumbJpg) || fs.statSync(thumbJpg).size < 1000) {
    console.log(`Generating cover thumbnail: ${thumbJpg}...`);
    execSync(`npx remotion still src/index.ts MasterReel out/thumb_cover.jpg --frame=100`, { cwd: vDir, stdio: 'inherit' });
  } else {
    console.log(`Thumbnail already exists: ${thumbJpg}`);
  }

  // 2. Master Reel Render
  if (!fs.existsSync(masterMp4) || fs.statSync(masterMp4).size < 1000) {
    console.log(`Rendering Master Reel: ${masterMp4}...`);
    execSync(`npx remotion render src/index.ts MasterReel out/video${num}_master_reel.mp4 --concurrency=4`, { cwd: vDir, stdio: 'inherit' });
  } else {
    console.log(`Master reel already exists: ${masterMp4}`);
  }

  // 3. Instagram Optimized MP4 (<35MB CRF 23)
  if (!fs.existsSync(optMp4) || fs.statSync(optMp4).size < 1000) {
    console.log(`Optimizing with FFmpeg for Instagram: ${optMp4}...`);
    execSync(`ffmpeg -y -i "${masterMp4}" -c:v libx264 -crf 23 -preset fast -pix_fmt yuv420p -c:a aac -b:a 192k "${optMp4}"`, { stdio: 'inherit' });
    const sizeMb = (fs.statSync(optMp4).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Video #${num} Optimized: ${sizeMb} MB`);
  } else {
    console.log(`Optimized reel already exists: ${optMp4}`);
  }
}

console.log(`\n🎉 ALL 5 VIDEOS (#11 to #15) RENDERED AND OPTIMIZED SUCCESSFULLY!`);
