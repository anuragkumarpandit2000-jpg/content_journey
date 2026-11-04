import { createRequire } from 'module';
const require = createRequire('D:/anurag/content_journey/extra/video#4_archive/node_modules');
const { bundle } = require('@remotion/bundler');
const { renderMedia, selectComposition } = require('@remotion/renderer');
import path from 'path';
import fs from 'fs';

async function test() {
  const vDir = 'D:/anurag/content_journey/videos/video#12';
  const entryPoint = `${vDir}/src/index.ts`;
  console.log('Bundling video #12...');
  const bundleLocation = await bundle({ entryPoint });
  console.log('Bundle ready at:', bundleLocation);

  console.log('Selecting composition MasterReel...');
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: 'MasterReel',
  });
  console.log('Composition found:', composition.id, `${composition.durationInFrames} frames`);

  const outPath = `${vDir}/out/test_30f.mp4`;
  console.log('Rendering 30 frames test to:', outPath);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation: outPath,
    frameRange: [0, 30],
    concurrency: 1,
    onProgress: ({ renderedFrames }) => {
      console.log(`Rendered ${renderedFrames}/30 frames`);
    },
  });

  console.log('SUCCESS! File exists:', fs.existsSync(outPath), 'Size:', fs.statSync(outPath).size);
}

test().catch(console.error);
