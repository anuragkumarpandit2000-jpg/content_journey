import fs from 'fs';

for (let i = 6; i <= 10; i++) {
  const p = `D:/anurag/content_journey/videos/video#${i}/out`;
  if (fs.existsSync(p)) {
    const files = fs.readdirSync(p).filter(f => f.endsWith('.mp4'));
    console.log(`Video #${i}:`, files);
  } else {
    console.log(`Video #${i}: NO OUT FOLDER`);
  }
}
