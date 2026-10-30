import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

export function renderReel(targetDir) {
  const outputMp4 = path.join(targetDir, 'out/master_reel.mp4');
  console.log(`[RENDER] Starting Remotion 60FPS render inside ${targetDir}...`);

  const localBin = 'D:/anurag/content_journey/video#4/node_modules/@remotion/cli/remotion-cli.js';
  const remotionBin = fs.existsSync(localBin) ? `node "${localBin}"` : 'npx remotion';
  const cmd = `${remotionBin} render src/index.ts Reel out/master_reel.mp4 --concurrency=1`;
  
  try {
    execSync(cmd, {
      cwd: targetDir,
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: '--max-old-space-size=4096',
      },
    });

    if (fs.existsSync(outputMp4)) {
      const stats = fs.statSync(outputMp4);
      const mb = (stats.size / (1024 * 1024)).toFixed(1);
      console.log(`[RENDER SUCCESS] Master Reel generated: ${mb} MB at ${outputMp4}`);
      return outputMp4;
    } else {
      throw new Error(`Output file not found at ${outputMp4}`);
    }
  } catch (err) {
    console.error(`[RENDER ERROR]`, err.message);
    throw err;
  }
}

if (process.argv[1] && process.argv[1].endsWith('4_render_video.mjs')) {
  const target = process.argv[2] || 'D:/anurag/content_journey/video#5';
  renderReel(target);
}
