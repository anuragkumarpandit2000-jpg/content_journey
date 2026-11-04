import shutil
import os

source_dir = r"D:\anurag\Downloads\Telegram Desktop"
dest_dir = r"D:\anurag\content_journey\test_project\public\assets"

os.makedirs(dest_dir, exist_ok=True)

files_to_copy = {
    # SFX
    "CINEMATIC_TENSION_Rise_Squeak_01.wav": "sfx_tension.wav",
    "Game Over - Dramatic 1.wav": "sfx_gameover.wav",
    "SFX- Swoosh08.mp3": "sfx_swoosh.mp3",
    "Pop-up (5).wav": "sfx_popup.wav",
    "Slap (1).mp3": "sfx_slap.mp3",
    "Up Riser 3.wav": "sfx_riser.wav",
    "shocking 3.mp3": "sfx_shocking.mp3",
    "mixkit-smartphone-typing-1393.wav": "sfx_typing.wav",
    "wrong_5.mp3": "sfx_wrong.mp3",
    "ACNH - Dialog Text.wav": "sfx_dialog.wav",
    "ACNH - Money.wav": "sfx_money.wav",
    "Iphone Send.wav": "sfx_send.wav",
    "sonar-ping.mp3": "sfx_sonar.mp3",
    
    # Music
    "synthwave goose - blade runner 2049(MP3_160K).mp3": "bg_music.mp3",
    
    # Video Overlays
    "TECH NUMBERS OVERLAY.mp4": "overlay_tech_numbers.mp4",
    "GLITCHY OVERLAY.mp4": "overlay_glitch.mp4",
    "BLACK THEME GRID.mp4": "overlay_black_grid.mp4",
    "Fire Effect - Overlays - Action VFX (2).mp4": "overlay_fire.mp4",
    "Transition 1.mp4": "transition_1.mp4",
    "WHITE PARTICLES OVERLAY.mp4": "overlay_particles.mp4",
    
    # Images
    "ultimate growth graph red png.png": "graph_red.png",
    "Blue Filled Graph Spikes png.png": "graph_blue_spikes.png",
    "NON MOVING BLACK GRID.jpg": "bg_black_grid.jpg",
    "views analytics graph png.png": "graph_analytics.png",
}

for src_name, dst_name in files_to_copy.items():
    src_path = os.path.join(source_dir, src_name)
    dst_path = os.path.join(dest_dir, dst_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        size_mb = os.path.getsize(dst_path) / (1024 * 1024)
        print(f"Copied: {src_name} -> {dst_name} ({size_mb:.2f} MB)")
    else:
        print(f"WARNING: Source not found: {src_name}")

# Also copy voiceover
voice_src = r"D:\anurag\content_journey\pc_hack_voice.mp3"
voice_dst = os.path.join(r"D:\anurag\content_journey\test_project\public", "pc_hack_voice.mp3")
if os.path.exists(voice_src):
    shutil.copy2(voice_src, voice_dst)
    print(f"Copied voiceover -> {voice_dst}")

print("All asset preparations complete!")
