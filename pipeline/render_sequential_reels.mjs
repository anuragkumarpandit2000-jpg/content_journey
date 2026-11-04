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

  console.log(`\n====================================================`);
  console.log(`🎬 [START] RENDERING VIDEO #${num} IN VIDEO #2 STYLE`);
  console.log(`====================================================\n`);

  // Remove stale or incomplete files
  if (fs.existsSync(masterMp4) && fs.statSync(masterMp4).size < 1000000) {
    fs.unlinkSync(masterMp4);
  }

  const startTime = Date.now();
  console.log(`Rendering Master Reel for Video #${num}...`);
  // Using 3 concurrency for stable memory on Windows
  execSync(`npx remotion render src/index.ts MasterReel "${masterMp4}" --concurrency=3 --timeout=120000`, {
    cwd: vDir,
    stdio: 'inherit'
  });

  const renderDur = ((Date.now() - startTime) / 1000).toFixed(1);
  const masterSizeMb = (fs.statSync(masterMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Master Reel #${num} Rendered in ${renderDur}s (${masterSizeMb} MB)`);

  console.log(`Compressing with FFmpeg for Instagram (CRF 23 1080x1920)...`);
  execSync(`ffmpeg -y -i "${masterMp4}" -c:v libx264 -crf 23 -preset fast -pix_fmt yuv420p -c:a aac -b:a 192k "${optMp4}"`, {
    stdio: 'inherit'
  });

  const optSizeMb = (fs.statSync(optMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`🎉 Video #${num} Ready for Upload: ${optMp4} (${optSizeMb} MB)`);
}

console.log(`\n🏆 ALL 5 VIDEOS (#11 to #15) RENDERED & OPTIMIZED IN VIDEO #2 STYLE!`);
