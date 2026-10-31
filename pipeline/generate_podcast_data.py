import json
import numpy as np
import librosa
from faster_whisper import WhisperModel

audio_path = "D:/anurag/content_journey/podcast_sample.mp3"

# 1. Transcribe words with Whisper
print("Transcribing with faster-whisper...")
model = WhisperModel("base", device="cpu", compute_type="int8")
segments, info = model.transcribe(audio_path, word_timestamps=True)

words_list = []
for segment in segments:
    for w in segment.words:
        clean_word = w.word.strip()
        if clean_word:
            words_list.append({
                "w": clean_word,
                "s": round(w.start, 2),
                "e": round(w.end, 2)
            })

print(f"Extracted {len(words_list)} words.")

# 2. Lip sync envelope (mouth openness 0..1 at 30 fps)
print("Extracting lip-sync envelope...")
SR, HOP = 16000, 533  # ~30 frames per second
y, _ = librosa.load(audio_path, sr=SR, mono=True)
S = np.abs(librosa.stft(y, n_fft=1024, hop_length=HOP))
f = librosa.fft_frequencies(sr=SR, n_fft=1024)
band = S[(f > 300) & (f < 3000)].sum(0)
e = np.clip(band / (np.percentile(band, 97) + 1e-9), 0, 1)
e = np.convolve(e, [0.25, 0.5, 0.25], "same")
e = np.where(e < 0.06, 0, e)
mouth_list = [round(float(v), 3) for v in e]
print(f"Extracted {len(mouth_list)} mouth frames at {SR/HOP:.2f} fps.")

# 3. Save outputs
out_dir = "D:/anurag/content_journey/video#8/src/data"
import os
os.makedirs(out_dir, exist_ok=True)

timeline_data = {
    "duration": 29.63,
    "fps": 30,
    "words": words_list,
    "mouth": mouth_list,
    "beats": [
        {
            "id": "beat1",
            "startSec": 0.0,
            "endSec": 4.60,
            "chip": "01 THE QUOTE",
            "title": "DAVID GOGGINS",
            "subtitle": "Mindset of the Toughest Man",
            "icon": "quote"
        },
        {
            "id": "beat2",
            "startSec": 4.60,
            "endSec": 12.28,
            "chip": "02 THE COMFORT TRAP",
            "title": "LIVING TOO COMFORTABLE",
            "subtitle": "Danger: Dying Without Realizing",
            "icon": "warning"
        },
        {
            "id": "beat3",
            "startSec": 12.28,
            "endSec": 19.28,
            "chip": "03 TRUE POTENTIAL",
            "title": "HIT ME SO HARD",
            "subtitle": "Unlocking Hidden Power",
            "icon": "zap"
        },
        {
            "id": "beat4",
            "startSec": 19.28,
            "endSec": 24.74,
            "chip": "04 THE ILLUSION",
            "title": "I THOUGHT I WORKED HARD",
            "subtitle": "Doing a Lot in Life",
            "icon": "activity"
        },
        {
            "id": "beat5",
            "startSec": 24.74,
            "endSec": 29.63,
            "chip": "05 BRUTAL TRUTH",
            "title": "SO BRUTAL",
            "subtitle": "No Sugarcoating Reality",
            "icon": "flame"
        }
    ]
}

with open(f"{out_dir}/timeline.json", "w") as f_out:
    json.dump(timeline_data, f_out, indent=2)

print("Saved timeline.json successfully!")
