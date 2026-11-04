import asyncio
import edge_tts
import json
import os
import subprocess

SCRIPT_TEXT = (
    "Kya aapka PC secretly hack ho chuka hai aur aapko pata bhi nahi? "
    "Agar aapke computer me ye teen ajeeb signs dikh rahe hain, to samjho game over! "
    "Number one: Task Manager me CPU ya GPU bina kuch chalaye 100% par touch ho raha hai. "
    "Iska matlab hacker background me crypto miner chala raha hai! "
    "Number two: Browser me random search engine aur pop-up ads apne aap open ho rahe hain. "
    "Aur Number three: Screen par achanak command prompt black window aake ek second me gayab ho jana! "
    "Isko turant check karne ke liye: Press karo Windows plus R, type karo 'netstat -ano', "
    "aur dekho koi unknown foreign IP address to connected nahi hai! "
    "Apne PC ko safe rakhne ke liye abhi is reel ko save kar lo aur follow karo daily secret tech hacks ke liye!"
)

output_audio = r"D:\anurag\content_journey\pc_hack_voice.mp3"

async def main():
    print(f"Generating voiceover with edge-tts (hi-IN-MadhurNeural, +10% rate)...")
    communicate = edge_tts.Communicate(
        text=SCRIPT_TEXT,
        voice="hi-IN-MadhurNeural",
        rate="+12%",
        pitch="+0Hz"
    )
    await communicate.save(output_audio)
    print(f"Audio saved to: {output_audio}")

if __name__ == "__main__":
    asyncio.run(main())
