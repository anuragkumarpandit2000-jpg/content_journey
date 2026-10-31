import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
console.log('Staging video#11 files...');
execSync('git add video#11/src/ video#11/public/ video#11/package.json video#11/tsconfig.json video#11/remotion.config.ts pipeline/git_push_video11.mjs .gitignore', { cwd, stdio: 'inherit' });
execSync('git commit -m "feat(video11): Style B - Zero Se Freelance 2D Anime Character Reel for Raj Shamani with audio lip-sync, HUD, speed lines, and kinetic captions"', { cwd, stdio: 'inherit' });

const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();
execSync('git push https://' + pat + '@github.com/anuragkumarpandit2000-jpg/content_journey.git main', { cwd, stdio: 'inherit' });
console.log('video#11 committed & pushed to GitHub successfully!');
