import os
import sys
import subprocess
import asyncio
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

env_p = Path(r"D:\anurag\content_journey\.env")
if env_p.exists():
    for line in open(env_p, encoding="utf-8"):
        if "=" in line and not line.startswith("#"):
            k, v = line.strip().split("=", 1)
            os.environ[k] = v

from google import genai
from google.genai import types

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

VIDEOS_CONFIG = {
    "video#11": {
        "title": "Run 70B & DeepSeek LLMs 100% Locally for FREE",
        "scenes": [
            {
                "id": "scene1",
                "text": "Bhai! OpenAI aur Anthropic ke monthly API bills se agar aapka wallet khali ho raha hai, toh ye suno!"
            },
            {
                "id": "scene2",
                "text": "Cloud LLMs expensive hote hain, internet down hote hi kaam band, aur aapka sensitive client data kisi aur ke server par chala jaata hai!"
            },
            {
                "id": "scene3",
                "text": "Solution hai Ollama aur GGUF 4-bit quantization! Aap apne normal PC ya laptop par DeepSeek aur LLaMA 70B bilkul FREE aur offline run kar sakte ho!"
            },
            {
                "id": "scene4",
                "text": "Sirf terminal me likho: ollama run deepseek-r1 ya llama3.3, aur zero latency ke saath unlimited code generation aur reasoning enjoy karo!"
            },
            {
                "id": "scene5",
                "text": "Ye complete Local LLM setup guide aur hardware sizing cheat sheet bilkul FREE chahiye? Abhi comment karo LOCAL aur main direct DM me bhej doonga!"
            }
        ]
    },
    "video#12": {
        "title": "Build a Real-Time AI Voice Call Agent in 15 Mins with LiveKit",
        "scenes": [
            {
                "id": "scene1",
                "text": "Kya aapko pata hai ki 2026 me aap ek aisa AI bana sakte ho jo customer calls answer kare sirf 300 millisecond response time me?"
            },
            {
                "id": "scene2",
                "text": "Purane voice bots robotic hote the, user ke bolne ke 3 second baad reply karte the, aur Twilio ka bill hazaaro rupaye aata tha!"
            },
            {
                "id": "scene3",
                "text": "Ab LiveKit Agents framework ke saath aap WebRTC aur Gemini Live ko jod kar ultra-fast conversational voice bot create kar sakte ho!"
            },
            {
                "id": "scene4",
                "text": "Ye bot beech me interrupt hone par naturally ruk jaata hai, Hindi aur English dono samajhta hai, aur customer ka appointment calendar me book kar deta hai!"
            },
            {
                "id": "scene5",
                "text": "Ye complete LiveKit Voice Agent Python source code aur free telephony template chahiye? Abhi comment karo CALL aur direct link DM me milega!"
            }
        ]
    },
    "video#13": {
        "title": "Cursor AI is Overpriced: VS Code + Cline + DeepSeek",
        "scenes": [
            {
                "id": "scene1",
                "text": "Cursor AI ke $20 har mahine de rahe ho? Bhai stop it right now! Aapka 95% paisa barbaad ho raha hai!"
            },
            {
                "id": "scene2",
                "text": "Cursor fast hai lekin closed ecosystem hai aur high usage par request limits lag jaati hain!"
            },
            {
                "id": "scene3",
                "text": "Standard VS Code me install karo Cline ya Roo Code extension, aur connect karo DeepSeek V3 API se sirf 14 cents per million tokens me!"
            },
            {
                "id": "scene4",
                "text": "Ye extension poore project folder ko analyze karta hai, terminal me commands khud execute karta hai, aur bugs bina single human touch ke fix kar deta hai!"
            },
            {
                "id": "scene5",
                "text": "Ye complete Cline configuration aur custom developer rules template bilkul FREE chahiye? Abhi comment karo CLINE aur link DM me turant aayega!"
            }
        ]
    },
    "video#14": {
        "title": "Build an Autonomous WhatsApp AI Agent with Python",
        "scenes": [
            {
                "id": "scene1",
                "text": "Agar aap business ya freelance karte ho, toh WhatsApp par 24 ghante manual chats ka reply karna band karo!"
            },
            {
                "id": "scene2",
                "text": "Official Meta WhatsApp Cloud API me per-message charges lagte hain aur approval lene me hafte nikal jaate hain!"
            },
            {
                "id": "scene3",
                "text": "Aap Python aur Baileys Webhook se ek custom AI brain connect kar sakte ho jo aapke personal ya business number par fully automate chalta hai!"
            },
            {
                "id": "scene4",
                "text": "Ye bot client ke sawalon ka instant answer deta hai, portfolio links share karta hai, aur meetings Google Calendar me auto-schedule kar deta hai!"
            },
            {
                "id": "scene5",
                "text": "Ye complete Python WhatsApp AI bot architecture aur anti-ban setup guide chahiye? Abhi comment karo WHATSAPP aur direct blueprint DM me pao!"
            }
        ]
    },
    "video#15": {
        "title": "Instant 3D Game Meshes from 2D Images with Trellis AI & Blender",
        "scenes": [
            {
                "id": "scene1",
                "text": "Blender me 3D assets model karne me ghanto ya din lagte hain? 2026 me ye workflow poori tarah badal chuka hai!"
            },
            {
                "id": "scene2",
                "text": "Detailed game props, characters aur vehicles banane ke liye topology aur UV unwrapping me dimag kharab ho jaata hai!"
            },
            {
                "id": "scene3",
                "text": "Solution hai Microsoft Trellis aur TripoSR – sirf ek single flat 2D image do aur 5 second ke andar complete textured 3D mesh ready!"
            },
            {
                "id": "scene4",
                "text": "Direct Blender Python script se mesh auto-import hota hai, vertex normals clean hote hain, aur instant rendering ya Unreal Engine export ke liye ready!"
            },
            {
                "id": "scene5",
                "text": "Ye 2D to 3D AI generator script aur Blender automation addon bilkul FREE chahiye? Abhi comment karo 3D aur link seedha DM me bhej doonga!"
            }
        ]
    }
}

async def generate_scene_live(text, out_mp3_path):
    config = types.LiveConnectConfig(
        response_modalities=['AUDIO'],
        speech_config=types.SpeechConfig(
            voice_config=types.VoiceConfig(
                prebuilt_voice_config=types.PrebuiltVoiceConfig(
                    voice_name="Puck"
                )
            )
        ),
        system_instruction=types.Content(parts=[types.Part(
            text="You are a professional voice actor. When given a text prompt, read ONLY the requested text aloud exactly as provided in natural Hindi/Hinglish with energetic emotion, loud vocal projection, crisp clarity, and excitement. Do not add any conversational remarks, introductions, or extra commentary."
        )])
    )
    async with client.aio.live.connect(model='gemini-2.5-flash-native-audio-latest', config=config) as session:
        await session.send_client_content(
            turns=[types.Content(role="user", parts=[types.Part(text=f"Read this line aloud: {text}")])],
            turn_complete=True
        )
        audio_data = bytearray()
        async for response in session.receive():
            server_content = response.server_content
            if server_content is not None:
                model_turn = server_content.model_turn
                if model_turn is not None:
                    for part in model_turn.parts:
                        if part.inline_data and part.inline_data.data:
                            audio_data.extend(part.inline_data.data)
                if server_content.turn_complete:
                    break

        temp_pcm = out_mp3_path.with_suffix('.pcm')
        with open(temp_pcm, "wb") as f:
            f.write(audio_data)

        cmd = f'ffmpeg -y -f s16le -ar 24000 -ac 1 -i "{temp_pcm}" -c:a libmp3lame -b:a 192k "{out_mp3_path}"'
        subprocess.run(cmd, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if temp_pcm.exists():
            temp_pcm.unlink()

async def main():
    print("====================================================")
    print("🎙️ GENERATING VIDEOS #11 to #15 AUDIO (GEMINI LIVE)")
    print("====================================================\n")

    timing_results = {}

    for v_folder, cfg in VIDEOS_CONFIG.items():
        print(f"\n🎬 Processing [{v_folder}]: {cfg['title']}")
        v_dir = Path(r"D:\anurag\content_journey\videos") / v_folder / "public"
        v_dir.mkdir(parents=True, exist_ok=True)
        
        timing_results[v_folder] = {}
        total_frames = 0

        for sc in cfg["scenes"]:
            sc_id = sc["id"]
            text = sc["text"]
            mp3_path = v_dir / f"{sc_id}.mp3"

            if mp3_path.exists() and mp3_path.stat().st_size > 1000:
                dur_cmd = f'ffprobe -i "{mp3_path}" -show_entries format=duration -v quiet -of csv=p=0'
                dur = float(subprocess.check_output(dur_cmd, shell=True).decode().strip())
                frames = int(round(dur * 30)) + 12
                timing_results[v_folder][sc_id] = {"duration": dur, "frames": frames}
                total_frames += frames
                print(f"  ⚡ Exists: {sc_id}.mp3 ({dur:.2f}s -> {frames} frames)")
                continue

            print(f"  Generating {sc_id}...")
            await generate_scene_live(text, mp3_path)
            dur_cmd = f'ffprobe -i "{mp3_path}" -show_entries format=duration -v quiet -of csv=p=0'
            dur = float(subprocess.check_output(dur_cmd, shell=True).decode().strip())
            frames = int(round(dur * 30)) + 12
            timing_results[v_folder][sc_id] = {"duration": dur, "frames": frames}
            total_frames += frames
            print(f"  ✅ Saved: {sc_id}.mp3 ({dur:.2f}s -> {frames} frames)")
            await asyncio.sleep(1)

        timing_results[v_folder]["total_frames"] = total_frames
        print(f"  🏁 Total: {total_frames} frames ({total_frames/30:.2f}s)")

    import json
    out_timings = Path(r"D:\anurag\content_journey\pipeline\timings_11_15.json")
    with open(out_timings, "w", encoding="utf-8") as f:
        json.dump(timing_results, f, indent=2)
    print(f"\nAll timings saved to {out_timings}")

if __name__ == '__main__':
    asyncio.run(main())
