import json
import os
from faster_whisper import WhisperModel

audio_path = r"D:\anurag\content_journey\pc_hack_voice.mp3"
output_json = r"D:\anurag\content_journey\pc_hack_transcript.json"

print("Loading Whisper model (tiny or base)...")
# Using tiny or base on CPU
model = WhisperModel("base", device="cpu", compute_type="int8")

print(f"Transcribing {audio_path}...")
segments, info = model.transcribe(
    audio_path,
    beam_size=5,
    word_timestamps=True,
    language="hi"
)

words_list = []
full_segments = []

for seg in segments:
    seg_data = {
        "start": round(seg.start, 3),
        "end": round(seg.end, 3),
        "text": seg.text.strip(),
        "words": []
    }
    for w in seg.words:
        w_data = {
            "word": w.word.strip(),
            "start": round(w.start, 3),
            "end": round(w.end, 3),
            "probability": round(w.probability, 3)
        }
        words_list.append(w_data)
        seg_data["words"].append(w_data)
    full_segments.append(seg_data)

total_duration = round(info.duration, 3)
print(f"Transcription complete! Duration: {total_duration}s, Words: {len(words_list)}")

result = {
    "duration": total_duration,
    "words": words_list,
    "segments": full_segments
}

with open(output_json, "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"Saved transcript to {output_json}")
