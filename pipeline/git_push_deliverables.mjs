import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();

try {
  execSync('git add deliverables/ docs/ pipeline/auto_dm_responder.py pipeline/autopilot_publisher.py pipeline/render_all_guides.mjs', { cwd, stdio: 'inherit' });
  execSync('git commit -m "feat(autopilot): Fully automated end-to-end 10-video PDF pipeline & Netlify DM sync"', { cwd, stdio: 'inherit' });
  execSync(`git push https://${pat}@github.com/anuragkumarpandit2000-jpg/content_journey.git main`, { cwd, stdio: 'inherit' });
  console.log('Successfully pushed full 10-video automation pipeline to GitHub!');
} catch (e) {
  console.error('Error during git push:', e.message);
}
