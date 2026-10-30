import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const src = 'D:/anurag/content_journey/video#6';
const dst = 'D:/anurag/content_journey/video#7';

['package.json', 'tsconfig.json', 'remotion.config.ts'].forEach((f) => {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
});

const targetNodeModules = path.join(dst, 'node_modules');
if (!fs.existsSync(targetNodeModules)) {
  const shared = 'D:\\anurag\\content_journey\\video#4\\node_modules';
  execSync(`cmd /c mklink /J "${targetNodeModules}" "${shared}"`);
}

console.log('✅ video#7 setup complete!');
