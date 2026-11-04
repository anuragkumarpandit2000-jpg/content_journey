import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const chromePath = 'D:/anurag/content_journey/videos/video#10/node_modules/.remotion/chrome-headless-shell/win64/chrome-headless-shell-win64/chrome-headless-shell.exe';
const delivDir = 'D:/anurag/content_journey/deliverables';
const docsPdfDir = 'D:/anurag/content_journey/docs/pdf';

if (!fs.existsSync(docsPdfDir)) {
  fs.mkdirSync(docsPdfDir, { recursive: true });
}

for (let i = 11; i <= 15; i++) {
  const files = fs.readdirSync(delivDir).filter(f => f.startsWith(`guide_video${i}_`) && f.endsWith('.html'));
  if (files.length === 0) {
    console.log(`No HTML file found for Video #${i}`);
    continue;
  }
  const htmlFile = files[0];
  const pdfFile = htmlFile.replace('.html', '.pdf');
  const htmlPath = path.join(delivDir, htmlFile);
  const pdfPath = path.join(delivDir, pdfFile);
  const docsPdfPath = path.join(docsPdfDir, pdfFile);

  console.log(`Rendering PDF for Video #${i}: ${htmlFile} -> ${pdfFile}...`);
  execSync(`"${chromePath}" --no-sandbox --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`, { stdio: 'inherit' });

  fs.copyFileSync(pdfPath, docsPdfPath);
  console.log(`  Copied to: ${docsPdfPath}`);
}

console.log('ALL NEW GUIDES (11-15) RENDERED AND COPIED TO DOCS/PDF SUCCESSFULLY!');
