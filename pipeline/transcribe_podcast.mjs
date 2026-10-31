import fs from 'fs';
import path from 'path';

const envText = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const apiKey = envText.match(/GEMINI_API_KEY=([^\r\n]+)/)[1].trim();

const audioBytes = fs.readFileSync('D:/anurag/content_journey/podcast_sample.mp3');
const audioBase64 = audioBytes.toString('base64');

const prompt = `Transcribe this podcast audio into JSON with precise timestamps.
Split the speech into chronological spoken phrases (each phrase 1 to 4 seconds).
For each phrase provide:
- "startSec": float (e.g. 0.0)
- "endSec": float (e.g. 2.4)
- "text": the exact words spoken in Hinglish/Hindi/English as spoken
- "concept": a short 2-3 word visual concept/metaphor for animation (e.g. "COMFORT ZONE", "PAIN PUSH", "MINDSET")

Return ONLY pure valid JSON in this format:
{
  "title": "...",
  "speaker": "...",
  "duration": 29.6,
  "phrases": [
    { "startSec": 0.0, "endSec": 2.5, "text": "...", "concept": "..." }
  ]
}`;

const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          { inlineData: { mimeType: 'audio/mp3', data: audioBase64 } },
          { text: prompt }
        ]
      }
    ]
  })
});

const data = await res.json();
console.log('API RESPONSE:\n', JSON.stringify(data, null, 2));
const textOut = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
const cleanJson = textOut.replace(/```json/g, '').replace(/```/g, '').trim();
fs.writeFileSync('D:/anurag/content_journey/podcast_transcript.json', cleanJson);
