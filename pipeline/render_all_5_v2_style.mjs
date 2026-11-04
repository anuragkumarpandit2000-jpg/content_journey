import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';

const VIDEOS = [11, 12, 13, 14, 15];

function cleanPuppeteerTemp() {
  try {
    const tmp = os.tmpdir();
    for (const f of fs.readdirSync(tmp)) {
      if (f.startsWith('puppeteer_dev_chrome_profile-') || f.startsWith('remotion-')) {
        try {
          fs.rmSync(path.join(tmp, f), { recursive: true, force: true });
        } catch (e) {}
      }
    }
  } catch (e) {}
}

for (const num of VIDEOS) {
  const vDir = `D:/anurag/content_journey/videos/video#${num}`;
  const outDir = `${vDir}/out`;
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const masterMp4 = `${outDir}/video${num}_master_reel.mp4`;
  const optMp4 = `${outDir}/video${num}_optimized.mp4`;

  // If already rendered and optimized, skip!
  if (fs.existsSync(optMp4) && fs.statSync(optMp4).size > 2000000) {
    const optSizeMb = (fs.statSync(optMp4).size / (1024 * 1024)).toFixed(2);
    console.log(`⏩ Video #${num} already completed and optimized: ${optMp4} (${optSizeMb} MB). Skipping!`);
    continue;
  }

  console.log(`\n====================================================`);
  console.log(`🎬 RENDERING VIDEO #${num} IN VIDEO #2 VIBRANT STYLE`);
  console.log(`====================================================\n`);

  // Clean incomplete master if not optimized yet
  if (fs.existsSync(masterMp4)) {
    try { fs.unlinkSync(masterMp4); } catch (e) {}
  }

  cleanPuppeteerTemp();

  const startTime = Date.now();
  console.log(`Rendering Master Reel for Video #${num} (concurrency=1 for rock-solid stability)...`);
  execSync(`npx remotion render src/index.ts MasterReel "${masterMp4}" --concurrency=1`, {
    cwd: vDir,
    stdio: 'inherit'
  });

  const renderDur = ((Date.now() - startTime) / 1000).toFixed(1);
  const masterSizeMb = (fs.statSync(masterMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Master Reel #${num} Done in ${renderDur}s (${masterSizeMb} MB)`);

  console.log(`Compressing with FFmpeg for Instagram (CRF 23 1080x1920)...`);
  execSync(`ffmpeg -y -i "${masterMp4}" -c:v libx264 -crf 23 -preset fast -pix_fmt yuv420p -c:a aac -b:a 192k "${optMp4}"`, {
    stdio: 'inherit'
  });

  const optSizeMb = (fs.statSync(optMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`🎉 Video #${num} Instagram Ready: ${optMp4} (${optSizeMb} MB)\n`);

  cleanPuppeteerTemp();
}

console.log(`\n🏆 ALL 5 VIDEOS (#11 to #15) FULLY RENDERED & READY IN VIDEO #2 STYLE!`);
