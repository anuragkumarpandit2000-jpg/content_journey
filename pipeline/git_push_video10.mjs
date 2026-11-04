import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
execSync('git add pipeline/setup_video10.mjs video#10/src/ video#10/public/ video#10/package.json video#10/tsconfig.json video#10/remotion.config.ts', { cwd, stdio: 'inherit' });
execSync('git commit -m "feat(video10): Style 3 - Manga Comic Book Reel with halftone dots, speech bubbles, speed lines and action starbursts"', { cwd, stdio: 'inherit' });

const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();
execSync('git push https://' + pat + '@github.com/anuragkumarpandit2000-jpg/content_journey.git main', { cwd, stdio: 'inherit' });
console.log('video#10 committed & pushed successfully!');
