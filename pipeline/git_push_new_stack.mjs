import fs from 'fs';
import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';
const pat = fs.readFileSync(cwd + '/.env', 'utf-8').match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();

try {
  execSync('git add deliverables/ docs/ pipeline/auto_dm_responder.py pipeline/generate_batch_11_15_audio.py pipeline/generate_video_sources.mjs pipeline/render_guides_11_15.mjs pipeline/update_portal_15.mjs pipeline/timings_11_15.json "videos/video#11/caption.txt" "videos/video#12/caption.txt" "videos/video#13/caption.txt" "videos/video#14/caption.txt" "videos/video#15/caption.txt" "videos/content_roadmap.md"', { cwd, stdio: 'inherit' });
  execSync('git commit -m "feat(pipeline): Research and build complete 15-video stack with Netlify deliverables and AI audio"', { cwd, stdio: 'inherit' });
  execSync(`git push https://${pat}@github.com/anuragkumarpandit2000-jpg/content_journey.git main`, { cwd, stdio: 'inherit' });
  console.log('✅ GitHub Push complete!');
} catch (e) {
  console.error('Error during git push:', e.message);
}
