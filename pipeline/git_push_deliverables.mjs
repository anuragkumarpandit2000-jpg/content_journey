import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();

try {
  execSync('git add deliverables/guide_video5_blender_motion_rig.* pipeline/auto_dm_responder.py run_auto_dm_responder.bat pipeline/git_push_deliverables.mjs', { cwd, stdio: 'inherit' });
  execSync('git commit -m "feat(deliverables): Add Guide #5 Blender Motion Rig PDF & Ultra-Fast DM Responder"', { cwd, stdio: 'inherit' });
  execSync(`git push https://${pat}@github.com/anuragkumarpandit2000-jpg/content_journey.git main`, { cwd, stdio: 'inherit' });
  console.log('Successfully pushed Guide #5 and DM automation to GitHub!');
} catch (e) {
  console.error('Error during git push:', e.message);
}
