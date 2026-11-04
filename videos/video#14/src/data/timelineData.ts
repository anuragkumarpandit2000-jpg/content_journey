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
    "endFrame": 211,
    "hinglish": "Agar aap business ya freelance karte ho, toh WhatsApp par 24 ghante manual chats ka reply karna band karo!",
    "keywords": [
      "BUSINESS",
      "FREELANCE",
      "WHATSAPP",
      "24 GHANTE"
    ]
  },
  {
    "id": 1,
    "startFrame": 211,
    "endFrame": 439,
    "hinglish": "Official Meta WhatsApp Cloud API me per-message charges lagte hain aur approval lene me hafte nikal jaate hain!",
    "keywords": [
      "META CLOUD API",
      "PER-MESSAGE",
      "APPROVAL"
    ]
  },
  {
    "id": 2,
    "startFrame": 439,
    "endFrame": 697,
    "hinglish": "Aap Python aur Baileys Webhook se ek custom AI brain connect kar sakte ho jo aapke personal ya business number par fully automate chalta hai!",
    "keywords": [
      "PYTHON",
      "BAILEYS",
      "AI BRAIN",
      "FULLY AUTOMATE"
    ]
  },
  {
    "id": 3,
    "startFrame": 697,
    "endFrame": 956,
    "hinglish": "Ye bot client ke sawalon ka instant answer deta hai, portfolio links share karta hai, aur meetings Google Calendar me auto-schedule kar deta hai!",
    "keywords": [
      "INSTANT ANSWER",
      "PORTFOLIO",
      "GOOGLE CALENDAR"
    ]
  },
  {
    "id": 4,
    "startFrame": 956,
    "endFrame": 1225,
    "hinglish": "Ye complete Python WhatsApp AI bot architecture aur anti-ban setup guide chahiye? Abhi comment karo WHATSAPP aur direct blueprint DM me pao!",
    "keywords": [
      "PYTHON WHATSAPP",
      "ANTI-BAN",
      "COMMENT",
      "WHATSAPP",
      "DM"
    ]
  }
];
