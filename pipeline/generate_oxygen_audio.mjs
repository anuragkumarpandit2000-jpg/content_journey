import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateGeminiSpeech } from './test_gemini_tts.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const script = `What if Earth lost all oxygen for just 5 seconds? Think you can just hold your breath? Think again.

Second 1: The daytime sky turns pitch black. Without oxygen to scatter sunlight, it is instant midnight.

Second 2: Your inner ears explode from the sudden pressure drop. And with no ozone layer, raw UV light cooks your skin.

Second 3: Every concrete skyscraper and bridge collapses into dust. Oxygen is the chemical binder holding concrete together.

Second 4: Every engine dies. Billions of cars stall, and airplanes plunge out of the sky.

Second 5: The ground vanishes beneath your feet. Earth's crust is 45 percent oxygen. Without it, the ground shatters into free fall.

And then... oxygen returns. Take a deep breath. You will never take 5 seconds for granted again.`;

const outPath = 'D:/anurag/content_journey/video#6/public/oxygen_voice.mp3';

console.log('[AUDIO GEN] Generating Oxygen What-If voiceover with Gemini 3.8 Flash TTS...');
generateGeminiSpeech(script, outPath)
  .then(() => console.log('✅ Oxygen voiceover generated successfully at:', outPath))
  .catch(console.error);
