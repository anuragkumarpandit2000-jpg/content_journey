import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
execSync('git add pipeline/ video#8/src/ video#8/public/ video#8/package.json video#8/tsconfig.json video#8/remotion.config.ts', { cwd, stdio: 'inherit' });
execSync('git commit -m "feat(video8): Style 1 - Podcast Explainer with Raj Shamani cartoon avatar, lip-sync and kinetic metaphors"', { cwd, stdio: 'inherit' });

const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();
execSync('git push https://' + pat + '@github.com/anuragkumarpandit2000-jpg/content_journey.git main', { cwd, stdio: 'inherit' });
console.log('Git commit & push complete!');
