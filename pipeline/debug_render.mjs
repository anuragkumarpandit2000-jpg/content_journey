process.on('unhandledRejection', (reason, promise) => {
  console.error('=== UNHANDLED REJECTION DETECTED ===');
  console.error('Type:', typeof reason);
  console.error('Constructor:', reason?.constructor?.name);
  console.error('Properties:', Object.getOwnPropertyNames(reason));
  console.error('Details:', reason);
  if (reason?.error) console.error('Inner error:', reason.error);
  if (reason?.message) console.error('Message:', reason.message);
  if (reason?.stack) console.error('Stack:', reason.stack);
});

import { createRequire } from 'module';
const require = createRequire('D:/anurag/content_journey/extra/video#4_archive/node_modules');
const { bundle } = require('@remotion/bundler');

async function main() {
  const entryPoint = 'D:/anurag/content_journey/videos/video#12/src/index.ts';
  console.log('Testing bundle for:', entryPoint);
  try {
    const bundled = await bundle({
      entryPoint,
      onProgress: (p) => console.log('Bundle progress:', p + '%'),
    });
    console.log('Bundle success! Output:', bundled);
  } catch (err) {
    console.error('Bundle caught error:', err);
  }
}

main();
