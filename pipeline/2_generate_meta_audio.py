import asyncio
import os
import sys
import json
import subprocess
import edge_tts

SENTENCES = [
    {
        "text": "Arre bro, kya tumhe pata hai ye video jo tum screen pe dekh rahe ho, isse kisi human ne record ya edit nahi kiya?",
        "theme": "INTRO_CYBER"
    },
    {
        "text": "Ye script AI ne likhi hai, ye voice neural network se generate hui hai,",
        "theme": "SOLUTION_NEON"
    },
    {
        "text": "ye 3D Three.js kinetic typography code se render hui hai,",
        "theme": "EDITORIAL_BW"
    },
    {
        "text": "aur ye video mere laptop band hone ke baad cloud se khud upload ho rahi hai!",
        "theme": "RED_ALERT"
    },
    {
        "text": "Crazy lag raha hai na bro? Ab se roz ek aisi hi video bina ungli hilaye post hogi!",
        "theme": "CRAZY_SPEED_PURPLE"
    },
    {
        "text": "Agar tum bhi apna pura content creation autopilot pe daalna chahte ho,",
        "theme": "TECH_EXPAND_CYAN"
    },
    {
        "text": "to mujhe follow karke comment me 'AI CODE' likh do,",
        "theme": "LUXURY_GOLD_CTA"
    },
    {
        "text": "main is pure zero-cost pipeline ka source code aur tutorial DM me bhej doonga! Aur haan, follow karna mat bhoolna.",
        "theme": "LUXURY_GOLD_CTA"
    }
]

def get_audio_duration(file_path):
    cmd = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        file_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return float(res.stdout.strip())

async def generate_reel_audio(output_dir):
    voice = "hi-IN-MadhurNeural"
    temp_files = []
    sentence_data = []

    print(f"[AUDIO] Generating {len(SENTENCES)} sentences via Edge-TTS ({voice})...")
    
    for i, item in enumerate(SENTENCES):
        temp_mp3 = os.path.join(output_dir, f"temp_chunk_{i}.mp3")
        temp_files.append(temp_mp3)
        # Use rate=+10% for crisp energetic reel delivery
        communicate = edge_tts.Communicate(item["text"], voice, rate="+10%")
        await communicate.save(temp_mp3)
        
        duration = get_audio_duration(temp_mp3)
        sentence_data.append({
            "text": item["text"],
            "theme": item["theme"],
            "duration": duration,
            "file": temp_mp3
        })
        print(f"  Chunk {i+1}/{len(SENTENCES)}: {duration:.2f}s | {item['text'][:40]}...")

    # Combine into single master audio
    master_audio_path = os.path.join(output_dir, "public", "audio.mp3")
    
    # Write concat list for ffmpeg
    concat_list_path = os.path.join(output_dir, "concat.txt")
    with open(concat_list_path, "w", encoding="utf-8") as f:
        for tf in temp_files:
            # Use forward slashes
            f.write(f"file '{tf.replace(os.sep, '/')}'\n")

    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", concat_list_path, "-c", "copy", master_audio_path
    ]
    subprocess.run(cmd, capture_output=True, check=True)
    total_duration = get_audio_duration(master_audio_path)
    print(f"[AUDIO] Master audio ready: {total_duration:.2f}s at {master_audio_path}")

    # Build words timeline with exact timestamps
    words_timeline = []
    current_time = 0.5  # 0.5s breathing lead-in

    for s in sentence_data:
        raw_words = s["text"].split()
        # Clean words
        char_counts = [max(1, len(w)) for w in raw_words]
        total_chars = sum(char_counts)
        s_duration = s["duration"]
        
        chunk_start = current_time
        
        for w_idx, w in enumerate(raw_words):
            fraction = char_counts[w_idx] / total_chars
            w_duration = s_duration * fraction
            w_start = chunk_start
            w_end = chunk_start + w_duration
            
            words_timeline.append({
                "word": w,
                "start": round(w_start, 3),
                "end": round(w_end, 3)
            })
            chunk_start = w_end

        current_time += s_duration + 0.35  # Natural pause between sentences

    words_json_path = os.path.join(output_dir, "words.json")
    with open(words_json_path, "w", encoding="utf-8") as f:
        json.dump(words_timeline, f, indent=2, ensure_ascii=False)
    print(f"[AUDIO] Saved {len(words_timeline)} words in {words_json_path}")

    # Cleanup temp chunks
    for tf in temp_files:
        if os.path.exists(tf):
            os.remove(tf)
    if os.path.exists(concat_list_path):
        os.remove(concat_list_path)

    return {
        "master_audio_path": master_audio_path,
        "total_duration": total_duration,
        "words_count": len(words_timeline)
    }

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "D:/anurag/content_journey/video#5"
    asyncio.run(generate_reel_audio(target))
