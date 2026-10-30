import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export async function generateGeminiSpeech(text, outputMp3Path, apiKey) {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error('GEMINI_API_KEY is not configured. Provide it via .env or argument.');
  }

  console.log(`[GEMINI TTS] Requesting native audio generation from Gemini 3.8 Flash TTS...`);
  console.log(`  Text: "${text}"`);

  const url = `https://generativelanguage.googleapis.com/v1beta/interactions`;

  const requestBody = {
    model: 'gemini-3.8-flash-tts',
    input: [
      {
        type: 'user_input',
        content: [
          {
            type: 'text',
            text: text,
            annotations: [
              {
                type: 'speech_metadata',
                style: 'energetic, conversational and natural Hinglish accent',
              },
            ],
          },
        ],
      },
    ],
    response_format: {
      type: 'audio',
    },
    generation_config: {
      speech_config: [
        { voice: 'Puck' },
      ],
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': key,
    },
    body: JSON.stringify(requestBody),
  });

  const data = await res.json();
  if (data.error) {
    console.error('[GEMINI API ERROR]', data.error);
    throw new Error(data.error.message);
  }

  // Find audio data in steps or output_audio
  let audioBase64 = null;
  let mimeType = 'audio/wav';

  if (data.output_audio?.data) {
    audioBase64 = data.output_audio.data;
    mimeType = data.output_audio.mime_type || mimeType;
  } else if (data.steps) {
    for (const step of data.steps) {
      if (step.type === 'model_output' && Array.isArray(step.content)) {
        for (const item of step.content) {
          if (item.type === 'audio' && item.data) {
            audioBase64 = item.data;
            mimeType = item.mime_type || mimeType;
            break;
          }
        }
      }
      if (audioBase64) break;
    }
  }

  if (!audioBase64) {
    console.error('[GEMINI RESPONSE UNEXPECTED]', JSON.stringify(data, null, 2));
    throw new Error('No audio found in Gemini Interactions response');
  }

  console.log(`[GEMINI TTS] Audio received! MimeType: ${mimeType}, Size: ${Math.round(audioBase64.length / 1024)} KB base64`);

  const rawBuffer = Buffer.from(audioBase64, 'base64');
  fs.mkdirSync(path.dirname(outputMp3Path), { recursive: true });
  const tempWavFile = path.join(path.dirname(outputMp3Path), 'temp_gemini.wav');
  fs.writeFileSync(tempWavFile, rawBuffer);

  // Convert to clean MP3 using ffmpeg
  console.log(`[GEMINI TTS] Converting WAV/PCM to MP3 via ffmpeg...`);
  execSync(`ffmpeg -y -i "${tempWavFile}" -c:a libmp3lame -b:a 192k "${outputMp3Path}"`, {
    stdio: 'inherit',
  });

  if (fs.existsSync(tempWavFile)) fs.unlinkSync(tempWavFile);

  console.log(`🎉 [GEMINI TTS SUCCESS] Saved audio: ${outputMp3Path}`);
  return outputMp3Path;
}

if (process.argv[1] && process.argv[1].endsWith('test_gemini_tts.mjs')) {
  const text = process.argv[2] || 'Arre bhai, ye suno! Ye voice direct Gemini AI se generate hui hai, ekdum natural aur crisp!';
  const outPath = process.argv[3] || 'D:/anurag/content_journey/video#5/out/gemini_voice_10s.mp3';
  const key = process.argv[4] || null;

  generateGeminiSpeech(text, outPath, key).catch(console.error);
}
