import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
execSync('git add pipeline/setup_video9.mjs video#9/src/ video#9/public/ video#9/package.json video#9/tsconfig.json video#9/remotion.config.ts', { cwd, stdio: 'inherit' });
execSync('git commit -m "feat(video9): Style 2 - Cinematic Motion Graphics with real Raj Shamani footage HUD, 3D glass cards and fiery typography"', { cwd, stdio: 'inherit' });

const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();
execSync('git push https://' + pat + '@github.com/anuragkumarpandit2000-jpg/content_journey.git main', { cwd, stdio: 'inherit' });
console.log('video#9 committed & pushed successfully!');
