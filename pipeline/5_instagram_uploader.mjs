import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env if present
function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const [key, ...vals] = trimmed.split('=');
      const val = vals.join('=').trim();
      if (key && !process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

loadEnv();

const INSTAGRAM_ACCOUNT_ID = process.env.INSTAGRAM_ACCOUNT_ID || '28515918178012876';
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || 'IGAGJR8RyZB0ThBZAGFuUFE4UTFIRnBJcUpiVENvQnR6QnNLakllS2pCdXdRQXVvR1N2eFQ5cHVjUUZAFQ21QNFR4aE1sOXFHSWIzMjZAxYUpYd19sYWVNNkltN3l4REtMR2N1WWxPc0pqbmZAYd2E2dnN6bFlITFAxUnctNTBnd2gzOAZDZD';
const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME || 'console.a1';

export async function uploadToInstagram(videoPath, caption, hashtags, publicVideoUrl = null) {
  const fullCaption = `${caption}\n\n${hashtags}`;
  console.log(`\n[INSTAGRAM API] Target Account: @${INSTAGRAM_USERNAME} (ID: ${INSTAGRAM_ACCOUNT_ID})`);

  const videoUrl = publicVideoUrl || process.env.PUBLIC_VIDEO_URL;

  if (!videoUrl) {
    console.log(`[INSTAGRAM API] Local video file ready at: ${videoPath}`);
    console.log(`[INSTAGRAM API] Meta Graph API requires a public 'video_url' to ingest into Instagram.`);

    const metaPath = path.join(path.dirname(videoPath), 'instagram_post_ready.json');
    const deploymentData = {
      status: 'AUTHENTICATED_AND_READY',
      account: {
        username: INSTAGRAM_USERNAME,
        accountId: INSTAGRAM_ACCOUNT_ID,
      },
      videoLocalPath: videoPath,
      caption: fullCaption,
      readyToPublishCommand: `node pipeline/5_instagram_uploader.mjs "${videoPath}" "<YOUR_PUBLIC_VIDEO_URL>"`,
      instructions: 'When running on GitHub Actions, the workflow generates a temporary public CDN URL and publishes automatically to @console.a1.',
    };

    fs.writeFileSync(metaPath, JSON.stringify(deploymentData, null, 2), 'utf8');
    console.log(`[INSTAGRAM METADATA] Deployment specs saved to: ${metaPath}`);
    return deploymentData;
  }

  console.log(`[INSTAGRAM API] Step 1: Initializing Reels Container on Instagram...`);
  console.log(`  Source Video URL: ${videoUrl}`);

  // Step 1: Create Container
  const createUrl = `https://graph.instagram.com/v21.0/${INSTAGRAM_ACCOUNT_ID}/media`;
  const createRes = await fetch(createUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      media_type: 'REELS',
      video_url: videoUrl,
      caption: fullCaption,
      share_to_feed: 'true',
      access_token: INSTAGRAM_ACCESS_TOKEN,
    }),
  });

  const createData = await createRes.json();
  if (createData.error) {
    console.error('[INSTAGRAM API ERROR - Step 1]', createData.error);
    throw new Error(createData.error.message);
  }

  const containerId = createData.id;
  console.log(`[INSTAGRAM API] Container created successfully! Container ID: ${containerId}`);

  // Step 2: Poll Container Status
  console.log(`[INSTAGRAM API] Step 2: Waiting for Instagram to process video...`);
  let isReady = false;
  let attempts = 0;
  const maxAttempts = 30; // 30 * 5s = 2.5 minutes

  while (!isReady && attempts < maxAttempts) {
    attempts++;
    await new Promise((r) => setTimeout(r, 5000));

    const statusUrl = `https://graph.instagram.com/v21.0/${containerId}?fields=status_code,status&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    const statusRes = await fetch(statusUrl);
    const statusData = await statusRes.json();

    const code = statusData.status_code;
    console.log(`  Attempt ${attempts}/${maxAttempts}: Status = ${code}`);

    if (code === 'FINISHED') {
      isReady = true;
    } else if (code === 'ERROR') {
      throw new Error(`Instagram video processing failed: ${JSON.stringify(statusData)}`);
    }
  }

  if (!isReady) {
    throw new Error('Timed out waiting for Instagram to process video container.');
  }

  // Step 3: Publish Reel
  console.log(`[INSTAGRAM API] Step 3: Publishing Reel to @${INSTAGRAM_USERNAME} profile...`);
  const publishUrl = `https://graph.instagram.com/v21.0/${INSTAGRAM_ACCOUNT_ID}/media_publish`;
  const publishRes = await fetch(publishUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      creation_id: containerId,
      access_token: INSTAGRAM_ACCESS_TOKEN,
    }),
  });

  const publishData = await publishRes.json();
  if (publishData.error) {
    console.error('[INSTAGRAM API ERROR - Step 3]', publishData.error);
    throw new Error(publishData.error.message);
  }

  const publishedMediaId = publishData.id;
  console.log(`\n🎉 [INSTAGRAM SUCCESS] Reel published live to @${INSTAGRAM_USERNAME}! Media ID: ${publishedMediaId}`);
  return {
    status: 'PUBLISHED',
    mediaId: publishedMediaId,
    username: INSTAGRAM_USERNAME,
  };
}

if (process.argv[1] && process.argv[1].endsWith('5_instagram_uploader.mjs')) {
  const vidPath = process.argv[2] || 'D:/anurag/content_journey/video#5/out/master_reel.mp4';
  const pubUrl = process.argv[3] || null;
  const caption = `Day 1 of letting an AI agent run this entire Instagram account autonomously! 🤖🔥\nNo human touched this video:\n✅ Script written by AI\n✅ Voice generated by Neural TTS\n✅ 3D Three.js kinetic typography rendered via code\n✅ Uploaded automatically from the cloud while my laptop is off!\n\nWant the complete free source code?\nComment "AI CODE" and I will DM you the entire zero-cost blueprint! 🚀`;
  const tags = `#ai #automation #coding #remotion #threejs #techhacks #aitools #programming #developer #reelsindia`;

  uploadToInstagram(vidPath, caption, tags, pubUrl).catch(console.error);
}
