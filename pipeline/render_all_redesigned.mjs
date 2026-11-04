import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';

const VIDEOS = [12, 13, 14, 15];

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

console.log(`\n========================================================================`);
console.log(`🎬 STARTING SEQUENTIAL RENDER OF BESPOKE THEMED VIDEOS (#12 to #15)`);
console.log(`========================================================================\n`);

for (const num of VIDEOS) {
  const vDir = `D:/anurag/content_journey/videos/video#${num}`;
  const outDir = `${vDir}/out`;
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const masterMp4 = `${outDir}/video${num}_master_reel.mp4`;
  const optMp4 = `${outDir}/video${num}_optimized.mp4`;
  const thumbJpg = `${outDir}/thumb_cover.jpg`;

  console.log(`\n----------------------------------------------------`);
  console.log(`🎬 RENDERING VIDEO #${num} WITH UNIQUE BESPOKE THEME`);
  console.log(`----------------------------------------------------\n`);

  // Clean old files for clean fresh render
  if (fs.existsSync(masterMp4)) try { fs.unlinkSync(masterMp4); } catch (e) {}
  if (fs.existsSync(optMp4)) try { fs.unlinkSync(optMp4); } catch (e) {}

  cleanPuppeteerTemp();

  // 1. Generate Still Thumbnail Cover
  console.log(`Generating still cover: ${thumbJpg}...`);
  try {
    execSync(`npx remotion still src/index.ts MasterReel "${thumbJpg}" --frame=100 --image-format=jpeg`, {
      cwd: vDir,
      stdio: 'inherit',
    });
    console.log(`✅ Still cover generated (${(fs.statSync(thumbJpg).size / 1024).toFixed(1)} KB)`);
  } catch (e) {
    console.warn(`Still cover warning:`, e.message);
  }

  cleanPuppeteerTemp();

  // 2. Render Master Reel with Rock-Solid Concurrency=1
  const startTime = Date.now();
  console.log(`Rendering Master 30FPS Reel for Video #${num} (concurrency=1)...`);
  execSync(`npx remotion render src/index.ts MasterReel "${masterMp4}" --concurrency=1`, {
    cwd: vDir,
    stdio: 'inherit',
  });

  const renderDur = ((Date.now() - startTime) / 1000).toFixed(1);
  const masterSizeMb = (fs.statSync(masterMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Master Reel #${num} Done in ${renderDur}s (${masterSizeMb} MB)`);

  // 3. Compress with FFmpeg for Instagram Reel
  console.log(`Compressing with FFmpeg for Instagram (CRF 23 1080x1920)...`);
  execSync(`ffmpeg -y -i "${masterMp4}" -c:v libx264 -crf 23 -preset fast -pix_fmt yuv420p -c:a aac -b:a 192k "${optMp4}"`, {
    stdio: 'inherit',
  });

  const optSizeMb = (fs.statSync(optMp4).size / (1024 * 1024)).toFixed(2);
  console.log(`🎉 Video #${num} Instagram Ready: ${optMp4} (${optSizeMb} MB)\n`);

  cleanPuppeteerTemp();
}

console.log(`\n🏆 ALL BESPOKE VIDEOS (#12, #13, #14, #15) FULLY RENDERED & READY FOR AUTOPILOT!`);
