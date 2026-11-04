export interface SegmentTiming {
  id: number;
  startFrame: number;
  endFrame: number;
  hinglish: string;
  keywords: string[];
}

export const TIMELINE_SEGMENTS: SegmentTiming[] = [
  {
    "id": 0,
    "startFrame": 0,
    "endFrame": 257,
    "hinglish": "Cursor AI ke $20 har mahine de rahe ho? Bhai stop it right now! Aapka 95% paisa barbaad ho raha hai!",
    "keywords": [
      "CURSOR AI",
      "$20",
      "STOP IT",
      "95% PAISA"
    ]
  },
  {
    "id": 1,
    "startFrame": 257,
    "endFrame": 445,
    "hinglish": "Cursor fast hai lekin closed ecosystem hai aur high usage par request limits lag jaati hain!",
    "keywords": [
      "CLOSED ECOSYSTEM",
      "REQUEST LIMITS"
    ]
  },
  {
    "id": 2,
    "startFrame": 445,
    "endFrame": 753,
    "hinglish": "Standard VS Code me install karo Cline ya Roo Code extension, aur connect karo DeepSeek V3 API se sirf 14 cents per million tokens me!",
    "keywords": [
      "VS CODE",
      "CLINE",
      "DEEPSEEK V3",
      "14 CENTS"
    ]
  },
  {
    "id": 3,
    "startFrame": 753,
    "endFrame": 1053,
    "hinglish": "Ye extension poore project folder ko analyze karta hai, terminal me commands khud execute karta hai, aur bugs bina single human touch ke fix kar deta hai!",
    "keywords": [
      "TERMINAL",
      "COMMANDS",
      "BUGS",
      "HUMAN TOUCH"
    ]
  },
  {
    "id": 4,
    "startFrame": 1053,
    "endFrame": 1347,
    "hinglish": "Ye complete Cline configuration aur custom developer rules template bilkul FREE chahiye? Abhi comment karo CLINE aur link DM me turant aayega!",
    "keywords": [
      "CLINE CONFIGURATION",
      "FREE",
      "COMMENT",
      "CLINE",
      "DM"
    ]
  }
];
