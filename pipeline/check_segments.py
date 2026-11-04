import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r"D:\anurag\content_journey\pc_hack_transcript.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for idx, seg in enumerate(data.get("segments", [])):
    print(f"Seg {idx}: [{seg['start']}s -> {seg['end']}s] {seg['text']}")
