import fs from 'fs';
import path from 'path';

const audioData = fs.readFileSync('D:/anurag/content_journey/video#6/public/oxygen_voice.mp3');
const env = Object.fromEntries(
  fs.readFileSync('D:/anurag/content_journey/.env', 'utf8')
    .split('\n')
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => l.trim().split('='))
);

async function main() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${env.GEMINI_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: 'audio/mp3',
                data: audioData.toString('base64'),
              },
            },
            {
              text: 'Provide exact start and end timestamps in seconds for each sentence spoken in this audio. Output clean JSON array with: [{ "stage": "Hook" | "1 sec" | "2 sec" | "3 sec" | "4 sec" | "5 sec" | "Outro", "startSec": number, "endSec": number, "text": string }]',
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
      },
    }),
  });

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log(text);
  fs.writeFileSync('D:/anurag/content_journey/video#6/src/data/oxygen_timeline.json', text);
}

main().catch(console.error);
