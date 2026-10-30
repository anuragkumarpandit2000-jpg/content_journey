import fs from 'fs';
import path from 'path';

const audioData = fs.readFileSync('D:/anurag/content_journey/premanand_voice.mp3');
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
              text: 'Transcribe this Hindi pravachan audio verbatim in clean Devanagari Hindi with exact start and end timestamps in seconds for each phrase/sentence. Output JSON: [{"startSec": number, "endSec": number, "text": string, "chapterChip": string}]',
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
  fs.writeFileSync('D:/anurag/content_journey/premanand_transcript.json', text);
}

main().catch(console.error);
