import fs from 'fs';
import path from 'path';

export function getNextVideoInfo(baseDir = 'D:/anurag/content_journey') {
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  const entries = fs.readdirSync(baseDir);
  let maxNum = 0;

  for (const entry of entries) {
    const match = entry.match(/^video#(\d+)$/i);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) {
        maxNum = num;
      }
    }
  }

  const nextNum = maxNum + 1;
  const folderName = `video#${nextNum}`;
  const fullPath = path.join(baseDir, folderName);

  return {
    nextNum,
    folderName,
    fullPath,
  };
}

if (process.argv[1] && process.argv[1].endsWith('1_get_next_video.js')) {
  const info = getNextVideoInfo();
  console.log(`Next Video detected: ${info.folderName} at ${info.fullPath}`);
}
