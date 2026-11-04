import { execSync } from 'child_process';

const cwd = 'D:/anurag/content_journey';

console.log('Staging files...');
execSync('git add pipeline/ videos/video#11/src/ videos/video#12/src/ videos/video#13/src/ videos/video#14/src/ videos/video#15/src/ autopilot_ledger.json', { cwd, stdio: 'inherit' });

console.log('Committing changes...');
try {
  execSync('git commit -m "feat(videos): Complete bespoke themes and full render for videos #11 to #15 + Autopilot v6 uploaded"', { cwd, stdio: 'inherit' });
  console.log('Pushing to GitHub...');
  execSync('git push origin main', { cwd, stdio: 'inherit' });
  console.log('✅ Successfully pushed to GitHub!');
} catch (e) {
  console.log('Git output:', e.message);
}
