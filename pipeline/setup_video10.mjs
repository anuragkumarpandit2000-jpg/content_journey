import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const targetDir = 'D:/anurag/content_journey/video#10';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(path.join(targetDir, 'src/components'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'src/routes'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'src/data'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'public'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'out'), { recursive: true });

// Copy voice & timeline
fs.copyFileSync('D:/anurag/content_journey/podcast_sample.mp3', path.join(targetDir, 'public/voice.mp3'));
fs.copyFileSync('D:/anurag/content_journey/video#8/src/data/timeline.json', path.join(targetDir, 'src/data/timeline.json'));

// Copy configs
fs.copyFileSync('D:/anurag/content_journey/video#4/package.json', path.join(targetDir, 'package.json'));
fs.copyFileSync('D:/anurag/content_journey/video#4/tsconfig.json', path.join(targetDir, 'tsconfig.json'));
fs.copyFileSync('D:/anurag/content_journey/video#7/remotion.config.ts', path.join(targetDir, 'remotion.config.ts'));

// Link node_modules
const nm = path.join(targetDir, 'node_modules');
if (!fs.existsSync(nm)) {
  execSync(`cmd /c mklink /J "${nm}" "D:\\anurag\\content_journey\\video#4\\node_modules"`);
}

console.log('video#10 scaffolded successfully!');
