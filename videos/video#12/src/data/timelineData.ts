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
    "endFrame": 274,
    "hinglish": "Kya aapko pata hai ki 2026 me aap ek aisa AI bana sakte ho jo customer calls answer kare sirf 300 millisecond response time me?",
    "keywords": [
      "2026",
      "AI",
      "CUSTOMER CALLS",
      "300 MILLISECOND"
    ]
  },
  {
    "id": 1,
    "startFrame": 274,
    "endFrame": 528,
    "hinglish": "Purane voice bots robotic hote the, user ke bolne ke 3 second baad reply karte the, aur Twilio ka bill hazaaro rupaye aata tha!",
    "keywords": [
      "ROBOTIC",
      "3 SECOND",
      "TWILIO",
      "HAZAARO RUPAYE"
    ]
  },
  {
    "id": 2,
    "startFrame": 528,
    "endFrame": 810,
    "hinglish": "Ab LiveKit Agents framework ke saath aap WebRTC aur Gemini Live ko jod kar ultra-fast conversational voice bot create kar sakte ho!",
    "keywords": [
      "LIVEKIT",
      "WEBRTC",
      "GEMINI LIVE",
      "CONVERSATIONAL"
    ]
  },
  {
    "id": 3,
    "startFrame": 810,
    "endFrame": 1114,
    "hinglish": "Ye bot beech me interrupt hone par naturally ruk jaata hai, Hindi aur English dono samajhta hai, aur appointment calendar me book kar deta hai!",
    "keywords": [
      "INTERRUPT",
      "HINDI",
      "ENGLISH",
      "CALENDAR BOOK"
    ]
  },
  {
    "id": 4,
    "startFrame": 1114,
    "endFrame": 1418,
    "hinglish": "Ye complete LiveKit Voice Agent Python source code aur free telephony template chahiye? Abhi comment karo CALL aur direct link DM me milega!",
    "keywords": [
      "PYTHON SOURCE CODE",
      "COMMENT",
      "CALL",
      "DIRECT LINK"
    ]
  }
];
