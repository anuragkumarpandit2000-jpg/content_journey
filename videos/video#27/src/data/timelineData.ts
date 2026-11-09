export interface CaptionWord {
  text: string;
  startFrame: number;
  endFrame: number;
  highlight?: boolean;
  color?: string;
}

export interface SceneMeta {
  id: string;
  title: string;
  startFrame: number;
  endFrame: number;
  durationFrames: number;
}

export const SCENES: SceneMeta[] = [
  {
    id: "scene1",
    title: "3D Hook: Speaking to Phone & Shoe Ad Pop",
    startFrame: 0,
    endFrame: 285,
    durationFrames: 285,
  },
  {
    id: "scene2",
    title: "The Secret: 24/7 Google Audio Surveillance",
    startFrame: 285,
    endFrame: 546,
    durationFrames: 261,
  },
  {
    id: "scene3",
    title: "Step 1: Settings to Manage Google Account",
    startFrame: 546,
    endFrame: 825,
    durationFrames: 279,
  },
  {
    id: "scene4",
    title: "Step 2: Uncheck Voice and Audio Recordings",
    startFrame: 825,
    endFrame: 1125,
    durationFrames: 300,
  },
  {
    id: "scene5",
    title: "Outro & CTA: Comment STOP for Blueprint",
    startFrame: 1125,
    endFrame: 1506,
    durationFrames: 381,
  },
];

export const CAPTIONS: CaptionWord[] = [
  // Scene 1: Hook (0 - 285)
  { text: "Kya", startFrame: 0, endFrame: 8 },
  { text: "aapke", startFrame: 8, endFrame: 16 },
  { text: "sath", startFrame: 16, endFrame: 24 },
  { text: "bhi", startFrame: 24, endFrame: 32 },
  { text: "aisa", startFrame: 32, endFrame: 40 },
  { text: "HUA HAI?", startFrame: 40, endFrame: 55, highlight: true, color: "#FACC15" },

  { text: "Aap", startFrame: 57, endFrame: 66 },
  { text: "doston", startFrame: 66, endFrame: 76 },
  { text: "se", startFrame: 76, endFrame: 85 },
  { text: "kisi", startFrame: 85, endFrame: 95 },
  { text: "naye", startFrame: 95, endFrame: 105 },
  { text: "SHOE", startFrame: 105, endFrame: 125, highlight: true, color: "#38BDF8" },
  { text: "ya", startFrame: 125, endFrame: 135 },
  { text: "SNEAKER", startFrame: 135, endFrame: 155, highlight: true, color: "#F472B6" },
  { text: "ki", startFrame: 155, endFrame: 162 },
  { text: "baat", startFrame: 162, endFrame: 172 },
  { text: "karte", startFrame: 172, endFrame: 182 },
  { text: "ho,", startFrame: 182, endFrame: 192 },

  { text: "aur", startFrame: 195, endFrame: 205 },
  { text: "agle", startFrame: 205, endFrame: 215 },
  { text: "hi", startFrame: 215, endFrame: 225 },
  { text: "minute", startFrame: 225, endFrame: 238 },
  { text: "phone", startFrame: 238, endFrame: 248 },
  { text: "par", startFrame: 248, endFrame: 256 },
  { text: "SAME SHOE", startFrame: 256, endFrame: 272, highlight: true, color: "#4ADE80" },
  { text: "ka", startFrame: 272, endFrame: 278 },
  { text: "AD", startFrame: 278, endFrame: 285, highlight: true, color: "#EF4444" },

  // Scene 2: The Secret (285 - 546)
  { text: "Yeh", startFrame: 285, endFrame: 295 },
  { text: "koi", startFrame: 295, endFrame: 305 },
  { text: "COINCIDENCE", startFrame: 305, endFrame: 325, highlight: true, color: "#FACC15" },
  { text: "nahi", startFrame: 325, endFrame: 335 },
  { text: "hai!", startFrame: 335, endFrame: 345 },

  { text: "Google", startFrame: 345, endFrame: 360, highlight: true, color: "#38BDF8" },
  { text: "ka", startFrame: 360, endFrame: 370 },
  { text: "ek", startFrame: 370, endFrame: 380 },
  { text: "SECRET", startFrame: 380, endFrame: 405, highlight: true, color: "#EF4444" },
  { text: "MICROPHONE", startFrame: 405, endFrame: 435, highlight: true, color: "#FACC15" },
  { text: "toggle", startFrame: 435, endFrame: 450 },
  { text: "aapke", startFrame: 450, endFrame: 462 },
  { text: "phone", startFrame: 462, endFrame: 475 },
  { text: "me", startFrame: 475, endFrame: 485 },
  { text: "chupke", startFrame: 485, endFrame: 500 },
  { text: "se", startFrame: 500, endFrame: 510 },
  { text: "24 GHANTE", startFrame: 510, endFrame: 535, highlight: true, color: "#F472B6" },
  { text: "audio", startFrame: 535, endFrame: 546 },

  // Scene 3: Settings Step 1 (546 - 825)
  { text: "Isko", startFrame: 546, endFrame: 558 },
  { text: "turant", startFrame: 558, endFrame: 572 },
  { text: "PERMANENT", startFrame: 572, endFrame: 595, highlight: true, color: "#4ADE80" },
  { text: "OFF", startFrame: 595, endFrame: 615, highlight: true, color: "#EF4444" },
  { text: "kaise", startFrame: 615, endFrame: 628 },
  { text: "karein:", startFrame: 628, endFrame: 642 },

  { text: "Phone", startFrame: 642, endFrame: 655 },
  { text: "ki", startFrame: 655, endFrame: 665 },
  { text: "SETTINGS", startFrame: 665, endFrame: 690, highlight: true, color: "#38BDF8" },
  { text: "me", startFrame: 690, endFrame: 700 },
  { text: "jao,", startFrame: 700, endFrame: 712 },
  { text: "niche", startFrame: 712, endFrame: 725 },
  { text: "scroll", startFrame: 725, endFrame: 740 },
  { text: "karke", startFrame: 740, endFrame: 752 },
  { text: "GOOGLE", startFrame: 752, endFrame: 775, highlight: true, color: "#FACC15" },
  { text: "par", startFrame: 775, endFrame: 785 },
  { text: "tap", startFrame: 785, endFrame: 795 },
  { text: "karo,", startFrame: 795, endFrame: 805 },
  { text: "aur", startFrame: 805, endFrame: 815 },
  { text: "MANAGE ACCOUNT", startFrame: 815, endFrame: 830, highlight: true, color: "#38BDF8" },

  // Scene 4: Settings Step 2 Uncheck (825 - 1125)
  { text: "Ab", startFrame: 830, endFrame: 842 },
  { text: "DATA & PRIVACY", startFrame: 842, endFrame: 875, highlight: true, color: "#38BDF8" },
  { text: "tab", startFrame: 875, endFrame: 888 },
  { text: "me", startFrame: 888, endFrame: 900 },
  { text: "jao,", startFrame: 900, endFrame: 915 },

  { text: "WEB & APP ACTIVITY", startFrame: 915, endFrame: 955, highlight: true, color: "#FACC15" },
  { text: "par", startFrame: 955, endFrame: 968 },
  { text: "click", startFrame: 968, endFrame: 980 },
  { text: "karo,", startFrame: 980, endFrame: 995 },

  { text: "aur", startFrame: 995, endFrame: 1008 },
  { text: "niche", startFrame: 1008, endFrame: 1020 },
  { text: "yeh", startFrame: 1020, endFrame: 1032 },
  { text: "VOICE & AUDIO", startFrame: 1032, endFrame: 1065, highlight: true, color: "#EF4444" },
  { text: "checkbox", startFrame: 1065, endFrame: 1080 },
  { text: "ko", startFrame: 1080, endFrame: 1090 },
  { text: "UNCHECK", startFrame: 1090, endFrame: 1115, highlight: true, color: "#4ADE80" },
  { text: "karke", startFrame: 1115, endFrame: 1125 },
  { text: "PAUSE", startFrame: 1125, endFrame: 1145, highlight: true, color: "#EF4444" },
  { text: "kar", startFrame: 1145, endFrame: 1155 },
  { text: "do!", startFrame: 1155, endFrame: 1165 },

  // Scene 5: Outro & CTA (1165 - 1506)
  { text: "Bas!", startFrame: 1165, endFrame: 1180, highlight: true, color: "#4ADE80" },
  { text: "Ab", startFrame: 1180, endFrame: 1192 },
  { text: "Google", startFrame: 1192, endFrame: 1205 },
  { text: "aapki", startFrame: 1205, endFrame: 1218 },
  { text: "PERSONAL", startFrame: 1218, endFrame: 1238, highlight: true, color: "#FACC15" },
  { text: "baatein", startFrame: 1238, endFrame: 1252 },
  { text: "kabhi", startFrame: 1252, endFrame: 1265 },
  { text: "NAHI", startFrame: 1265, endFrame: 1285, highlight: true, color: "#EF4444" },
  { text: "sun", startFrame: 1285, endFrame: 1295 },
  { text: "payega.", startFrame: 1295, endFrame: 1310 },

  { text: "Yeh", startFrame: 1315, endFrame: 1325 },
  { text: "SECRET TRICK", startFrame: 1325, endFrame: 1350, highlight: true, color: "#38BDF8" },
  { text: "doston", startFrame: 1350, endFrame: 1365 },
  { text: "ke", startFrame: 1365, endFrame: 1375 },
  { text: "sath", startFrame: 1375, endFrame: 1385 },
  { text: "SHARE KARO!", startFrame: 1385, endFrame: 1410, highlight: true, color: "#F472B6" },

  { text: "Aur", startFrame: 1415, endFrame: 1425 },
  { text: "VIP", startFrame: 1425, endFrame: 1435, highlight: true, color: "#FACC15" },
  { text: "PRIVACY", startFrame: 1435, endFrame: 1450, highlight: true, color: "#38BDF8" },
  { text: "GUIDE", startFrame: 1450, endFrame: 1465, highlight: true, color: "#4ADE80" },
  { text: "ke", startFrame: 1465, endFrame: 1475 },
  { text: "liye", startFrame: 1475, endFrame: 1485 },
  { text: "COMMENT", startFrame: 1485, endFrame: 1495 },
  { text: "'STOP'!", startFrame: 1495, endFrame: 1506, highlight: true, color: "#EF4444" },
];
