import json

timeline_data = {
    "totalFrames": 1620,  # 54 seconds at 30 fps
    "fps": 30,
    "width": 1080,
    "height": 1920,
    "audio": {
        "voice": "pc_hack_voice.mp3",
        "music": "assets/bg_music.mp3",
        "musicVolume": 0.12
    },
    "sfxEvents": [
        {"frame": 0, "file": "assets/sfx_tension.wav", "volume": 0.7},
        {"frame": 45, "file": "assets/sfx_shocking.mp3", "volume": 0.8},
        {"frame": 140, "file": "assets/sfx_swoosh.mp3", "volume": 0.6},
        {"frame": 270, "file": "assets/sfx_gameover.wav", "volume": 0.85},
        {"frame": 285, "file": "assets/sfx_slap.mp3", "volume": 0.7},
        {"frame": 330, "file": "assets/sfx_swoosh.mp3", "volume": 0.6},
        {"frame": 410, "file": "assets/sfx_riser.wav", "volume": 0.7},
        {"frame": 465, "file": "assets/sfx_wrong.mp3", "volume": 0.8},
        {"frame": 555, "file": "assets/sfx_sonar.mp3", "volume": 0.7},
        {"frame": 605, "file": "assets/sfx_money.wav", "volume": 0.8},
        {"frame": 695, "file": "assets/sfx_swoosh.mp3", "volume": 0.6},
        {"frame": 720, "file": "assets/sfx_popup.wav", "volume": 0.7},
        {"frame": 760, "file": "assets/sfx_popup.wav", "volume": 0.75},
        {"frame": 875, "file": "assets/sfx_swoosh.mp3", "volume": 0.6},
        {"frame": 890, "file": "assets/sfx_typing.wav", "volume": 0.8},
        {"frame": 995, "file": "assets/sfx_swoosh.mp3", "volume": 0.7},
        {"frame": 1095, "file": "assets/sfx_swoosh.mp3", "volume": 0.6},
        {"frame": 1120, "file": "assets/sfx_dialog.wav", "volume": 0.7},
        {"frame": 1260, "file": "assets/sfx_shocking.mp3", "volume": 0.85},
        {"frame": 1395, "file": "assets/sfx_popup.wav", "volume": 0.7},
        {"frame": 1470, "file": "assets/sfx_send.wav", "volume": 0.8},
        {"frame": 1530, "file": "assets/sfx_money.wav", "volume": 0.75}
    ],
    "scenes": [
        {
            "id": "scene_hook",
            "startFrame": 0,
            "endFrame": 140,
            "title": "IS YOUR PC HACKED?",
            "tag": "SECURITY ALERT",
            "badgeColor": "#ef4444",
            "type": "hook"
        },
        {
            "id": "scene_warning",
            "startFrame": 140,
            "endFrame": 325,
            "title": "3 DANGEROUS SIGNS",
            "tag": "SYSTEM CRITICAL",
            "badgeColor": "#f59e0b",
            "type": "signs"
        },
        {
            "id": "scene_sign1",
            "startFrame": 325,
            "endFrame": 550,
            "title": "SIGN 01: 100% CPU SPIKE",
            "tag": "TASK MANAGER",
            "badgeColor": "#ef4444",
            "type": "cpu_spike"
        },
        {
            "id": "scene_sign1_crypto",
            "startFrame": 550,
            "endFrame": 690,
            "title": "CRYPTO MINER IN BACKGROUND",
            "tag": "MALWARE DETECTED",
            "badgeColor": "#10b981",
            "type": "crypto_miner"
        },
        {
            "id": "scene_sign2",
            "startFrame": 690,
            "endFrame": 870,
            "title": "SIGN 02: BROWSER HIJACK & ADS",
            "tag": "ADWARE ATTACK",
            "badgeColor": "#a855f7",
            "type": "browser_hijack"
        },
        {
            "id": "scene_sign3",
            "startFrame": 870,
            "endFrame": 1090,
            "title": "SIGN 03: FLASHING CMD WINDOW",
            "tag": "STEALTH SCRIPT",
            "badgeColor": "#3b82f6",
            "type": "cmd_flash"
        },
        {
            "id": "scene_fix_step1",
            "startFrame": 1090,
            "endFrame": 1250,
            "title": "CHECK NOW: WIN + R -> netstat -ano",
            "tag": "SECURITY AUDIT",
            "badgeColor": "#06b6d4",
            "type": "netstat_check"
        },
        {
            "id": "scene_fix_step2",
            "startFrame": 1250,
            "endFrame": 1390,
            "title": "UNKNOWN FOREIGN IP DETECTED!",
            "tag": "ACTIVE BACKDOOR",
            "badgeColor": "#ef4444",
            "type": "foreign_ip"
        },
        {
            "id": "scene_outro",
            "startFrame": 1390,
            "endFrame": 1620,
            "title": "SAVE & FOLLOW @console.a1",
            "tag": "DAILY TECH HACKS",
            "badgeColor": "#ec4899",
            "type": "cta_follow"
        }
    ],
    "captions": [
        # Scene 0: 0 - 140 (0.0s - 4.6s)
        {"startFrame": 0, "endFrame": 25, "text": "Kya aapka PC", "highlight": "PC", "color": "#38bdf8"},
        {"startFrame": 25, "endFrame": 60, "text": "secretly HACK ho chuka hai", "highlight": "HACK", "color": "#ef4444"},
        {"startFrame": 60, "endFrame": 135, "text": "aur aapko pata bhi nahi?", "highlight": "nahi?", "color": "#facc15"},

        # Scene 1: 140 - 325 (4.7s - 10.8s)
        {"startFrame": 142, "endFrame": 200, "text": "Agar aapke system me", "highlight": "system", "color": "#38bdf8"},
        {"startFrame": 200, "endFrame": 260, "text": "ye TEEN ajeeb SIGNS dikhein,", "highlight": "TEEN SIGNS", "color": "#f59e0b"},
        {"startFrame": 260, "endFrame": 320, "text": "to samjho GAME OVER!", "highlight": "GAME OVER!", "color": "#ef4444"},

        # Scene 2: 325 - 550 (10.8s - 18.3s)
        {"startFrame": 328, "endFrame": 380, "text": "NUMBER ONE:", "highlight": "NUMBER ONE", "color": "#38bdf8"},
        {"startFrame": 380, "endFrame": 440, "text": "Task Manager me CPU bina chalaye", "highlight": "CPU", "color": "#f59e0b"},
        {"startFrame": 440, "endFrame": 545, "text": "100% PAR TOUCH ho raha hai!", "highlight": "100%", "color": "#ef4444"},

        # Scene 3: 550 - 690 (18.3s - 23.0s)
        {"startFrame": 552, "endFrame": 600, "text": "Iska matlab hacker background me", "highlight": "hacker", "color": "#ef4444"},
        {"startFrame": 600, "endFrame": 685, "text": "CRYPTO MINER chala raha hai!", "highlight": "CRYPTO MINER", "color": "#10b981"},

        # Scene 4: 690 - 870 (23.0s - 29.0s)
        {"startFrame": 695, "endFrame": 750, "text": "NUMBER TWO: Browser me", "highlight": "NUMBER TWO", "color": "#38bdf8"},
        {"startFrame": 750, "endFrame": 865, "text": "random search & POP-UP ADS khul rahe hain!", "highlight": "POP-UP ADS", "color": "#a855f7"},

        # Scene 5: 870 - 1090 (29.0s - 36.3s)
        {"startFrame": 875, "endFrame": 930, "text": "AUR NUMBER THREE:", "highlight": "NUMBER THREE", "color": "#38bdf8"},
        {"startFrame": 930, "endFrame": 1000, "text": "Screen par achanak CMD WINDOW aake", "highlight": "CMD WINDOW", "color": "#f59e0b"},
        {"startFrame": 1000, "endFrame": 1085, "text": "1 second me GAYAB ho jana!", "highlight": "GAYAB", "color": "#ef4444"},

        # Scene 6: 1090 - 1250 (36.3s - 41.6s)
        {"startFrame": 1096, "endFrame": 1150, "text": "Isko TURANT check karne ke liye:", "highlight": "TURANT", "color": "#38bdf8"},
        {"startFrame": 1150, "endFrame": 1245, "text": "Press karo WIN + R, type netstat -ano", "highlight": "netstat -ano", "color": "#06b6d4"},

        # Scene 7: 1250 - 1390 (41.6s - 46.3s)
        {"startFrame": 1255, "endFrame": 1310, "text": "aur dekho koi UNKNOWN", "highlight": "UNKNOWN", "color": "#f59e0b"},
        {"startFrame": 1310, "endFrame": 1385, "text": "FOREIGN IP to CONNECTED nahi!", "highlight": "FOREIGN IP", "color": "#ef4444"},

        # Scene 8: 1390 - 1620 (46.3s - 54.0s)
        {"startFrame": 1395, "endFrame": 1480, "text": "PC ko safe rakhne ke liye SAVE KARO,", "highlight": "SAVE KARO", "color": "#facc15"},
        {"startFrame": 1480, "endFrame": 1615, "text": "aur FOLLOW karo daily secret tech hacks!", "highlight": "FOLLOW KARO", "color": "#ec4899"}
    ]
}

with open(r"D:\anurag\content_journey\test_project\src\data\pc_hack_cues.json", "w", encoding="utf-8") as f:
    json.dump(timeline_data, f, indent=2, ensure_ascii=False)

print("Generated pc_hack_cues.json successfully!")
