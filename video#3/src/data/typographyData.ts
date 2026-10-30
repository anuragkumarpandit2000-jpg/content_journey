export interface WordDetail {
  word: string;
  startSec: number;
  endSec: number;
  style: string;
  isHero: boolean;
}

export interface PhraseItem {
  id: string;
  text: string;
  startSec: number;
  endSec: number;
  theme: string;
  layout: string;
  words: WordDetail[];
}

export const ALL_WORDS = [
  {
    "word": "Arre",
    "start": 1.3,
    "end": 1.86
  },
  {
    "word": "bro",
    "start": 1.86,
    "end": 2.42
  },
  {
    "word": "kya",
    "start": 2.42,
    "end": 4
  },
  {
    "word": "cheez",
    "start": 4,
    "end": 4.76
  },
  {
    "word": "dhoondhi",
    "start": 4.76,
    "end": 5.22
  },
  {
    "word": "hai",
    "start": 5.22,
    "end": 5.34
  },
  {
    "word": "maine,",
    "start": 5.34,
    "end": 5.66
  },
  {
    "word": "ruko",
    "start": 6.44,
    "end": 7.02
  },
  {
    "word": "batata",
    "start": 7.02,
    "end": 7.46
  },
  {
    "word": "hoon.",
    "start": 7.46,
    "end": 7.72
  },
  {
    "word": "Agar",
    "start": 8.42,
    "end": 8.94
  },
  {
    "word": "tum",
    "start": 8.94,
    "end": 9.16
  },
  {
    "word": "log",
    "start": 9.16,
    "end": 9.38
  },
  {
    "word": "bhi",
    "start": 9.38,
    "end": 9.66
  },
  {
    "word": "c",
    "start": 9.66,
    "end": 9.92
  },
  {
    "word": "drive",
    "start": 9.92,
    "end": 10.22
  },
  {
    "word": "ke",
    "start": 10.22,
    "end": 10.44
  },
  {
    "word": "full",
    "start": 10.44,
    "end": 10.64
  },
  {
    "word": "hoonne",
    "start": 10.64,
    "end": 10.9
  },
  {
    "word": "se",
    "start": 10.9,
    "end": 11
  },
  {
    "word": "pareshaan",
    "start": 11,
    "end": 11.7
  },
  {
    "word": "ho,",
    "start": 11.7,
    "end": 11.88
  },
  {
    "word": "aur",
    "start": 12.36,
    "end": 12.48
  },
  {
    "word": "soshte",
    "start": 12.48,
    "end": 12.78
  },
  {
    "word": "ho",
    "start": 12.78,
    "end": 12.86
  },
  {
    "word": "na,",
    "start": 12.86,
    "end": 12.94
  },
  {
    "word": "yaar",
    "start": 13.34,
    "end": 13.74
  },
  {
    "word": "c",
    "start": 13.74,
    "end": 14.06
  },
  {
    "word": "drive",
    "start": 14.06,
    "end": 14.36
  },
  {
    "word": "thodi",
    "start": 14.36,
    "end": 14.64
  },
  {
    "word": "khali",
    "start": 14.64,
    "end": 15.24
  },
  {
    "word": "hoja",
    "start": 15.24,
    "end": 15.54
  },
  {
    "word": "hai",
    "start": 15.54,
    "end": 15.64
  },
  {
    "word": "tum",
    "start": 15.64,
    "end": 15.76
  },
  {
    "word": "mazaa",
    "start": 15.76,
    "end": 16.18
  },
  {
    "word": "aaja",
    "start": 16.18,
    "end": 16.3
  },
  {
    "word": "hai,",
    "start": 16.3,
    "end": 16.44
  },
  {
    "word": "to",
    "start": 16.9,
    "end": 16.98
  },
  {
    "word": "bro,",
    "start": 16.98,
    "end": 17.22
  },
  {
    "word": "maine",
    "start": 17.82,
    "end": 18.06
  },
  {
    "word": "hai",
    "start": 18.06,
    "end": 18.28
  },
  {
    "word": "ek",
    "start": 18.28,
    "end": 18.48
  },
  {
    "word": "solution",
    "start": 18.48,
    "end": 18.76
  },
  {
    "word": "dhoondha",
    "start": 18.76,
    "end": 19.32
  },
  {
    "word": "hai.",
    "start": 19.32,
    "end": 19.44
  },
  {
    "word": "Lekin",
    "start": 19.84,
    "end": 20.08
  },
  {
    "word": "ushe",
    "start": 20.08,
    "end": 20.28
  },
  {
    "word": "bhai",
    "start": 20.28,
    "end": 20.44
  },
  {
    "word": "le,",
    "start": 20.44,
    "end": 20.56
  },
  {
    "word": "samajna",
    "start": 20.86,
    "end": 21.36
  },
  {
    "word": "baadhe",
    "start": 21.36,
    "end": 21.6
  },
  {
    "word": "ga",
    "start": 21.6,
    "end": 21.7
  },
  {
    "word": "ki",
    "start": 21.7,
    "end": 21.86
  },
  {
    "word": "partition",
    "start": 21.86,
    "end": 22.36
  },
  {
    "word": "actually",
    "start": 22.36,
    "end": 22.94
  },
  {
    "word": "hoota",
    "start": 22.94,
    "end": 23.36
  },
  {
    "word": "ke",
    "start": 23.36,
    "end": 23.54
  },
  {
    "word": "hai,",
    "start": 23.54,
    "end": 23.66
  },
  {
    "word": "maan",
    "start": 24.38,
    "end": 24.76
  },
  {
    "word": "le,",
    "start": 24.76,
    "end": 24.86
  },
  {
    "word": "tere",
    "start": 25.08,
    "end": 25.1
  },
  {
    "word": "khaana",
    "start": 25.1,
    "end": 25.58
  },
  {
    "word": "padha",
    "start": 25.58,
    "end": 25.76
  },
  {
    "word": "hai,",
    "start": 25.76,
    "end": 25.9
  },
  {
    "word": "aur",
    "start": 26.12,
    "end": 26.42
  },
  {
    "word": "tere",
    "start": 26.42,
    "end": 26.64
  },
  {
    "word": "plate",
    "start": 26.64,
    "end": 26.84
  },
  {
    "word": "all",
    "start": 26.84,
    "end": 27.18
  },
  {
    "word": "ready",
    "start": 27.18,
    "end": 27.42
  },
  {
    "word": "bhai",
    "start": 27.42,
    "end": 27.8
  },
  {
    "word": "huye,",
    "start": 27.8,
    "end": 28.06
  },
  {
    "word": "lekin",
    "start": 28.28,
    "end": 28.86
  },
  {
    "word": "utna",
    "start": 28.86,
    "end": 29.2
  },
  {
    "word": "nahi",
    "start": 29.2,
    "end": 29.42
  },
  {
    "word": "jitna",
    "start": 29.42,
    "end": 29.7
  },
  {
    "word": "toje",
    "start": 29.7,
    "end": 29.92
  },
  {
    "word": "chahiye,",
    "start": 29.92,
    "end": 30.44
  },
  {
    "word": "aur",
    "start": 30.62,
    "end": 31.06
  },
  {
    "word": "khaana",
    "start": 31.06,
    "end": 31.42
  },
  {
    "word": "bhi",
    "start": 31.42,
    "end": 31.64
  },
  {
    "word": "all",
    "start": 31.64,
    "end": 31.86
  },
  {
    "word": "most",
    "start": 31.86,
    "end": 32.08
  },
  {
    "word": "kata",
    "start": 32.08,
    "end": 32.32
  },
  {
    "word": "mein,",
    "start": 32.32,
    "end": 32.44
  },
  {
    "word": "lekin",
    "start": 32.94,
    "end": 33.24
  },
  {
    "word": "tere",
    "start": 33.24,
    "end": 33.4
  },
  {
    "word": "bhai",
    "start": 33.4,
    "end": 33.76
  },
  {
    "word": "hu",
    "start": 33.76,
    "end": 33.86
  },
  {
    "word": "ko",
    "start": 33.86,
    "end": 34.04
  },
  {
    "word": "zyada",
    "start": 34.04,
    "end": 34.94
  },
  {
    "word": "khaana",
    "start": 34.94,
    "end": 35.36
  },
  {
    "word": "mila",
    "start": 35.36,
    "end": 35.62
  },
  {
    "word": "huye,",
    "start": 35.62,
    "end": 35.8
  },
  {
    "word": "to",
    "start": 36.06,
    "end": 36.36
  },
  {
    "word": "tu",
    "start": 36.36,
    "end": 36.48
  },
  {
    "word": "kya",
    "start": 36.48,
    "end": 36.6
  },
  {
    "word": "karega,",
    "start": 36.6,
    "end": 36.88
  },
  {
    "word": "tu",
    "start": 37.26,
    "end": 37.44
  },
  {
    "word": "vek",
    "start": 37.44,
    "end": 37.62
  },
  {
    "word": "bhai",
    "start": 37.62,
    "end": 37.94
  },
  {
    "word": "plate",
    "start": 37.94,
    "end": 38.2
  },
  {
    "word": "lai",
    "start": 38.2,
    "end": 38.44
  },
  {
    "word": "ka,",
    "start": 38.44,
    "end": 38.56
  },
  {
    "word": "aur",
    "start": 38.88,
    "end": 39.16
  },
  {
    "word": "apne",
    "start": 39.16,
    "end": 39.32
  },
  {
    "word": "agal",
    "start": 39.32,
    "end": 39.84
  },
  {
    "word": "bagal",
    "start": 39.84,
    "end": 40.1
  },
  {
    "word": "ke",
    "start": 40.1,
    "end": 40.24
  },
  {
    "word": "bhai",
    "start": 40.24,
    "end": 40.48
  },
  {
    "word": "hu",
    "start": 40.48,
    "end": 40.56
  },
  {
    "word": "ko",
    "start": 40.56,
    "end": 40.64
  },
  {
    "word": "se",
    "start": 40.64,
    "end": 40.66
  },
  {
    "word": "thoda",
    "start": 40.66,
    "end": 40.88
  },
  {
    "word": "khaana",
    "start": 40.88,
    "end": 41.18
  },
  {
    "word": "le",
    "start": 41.18,
    "end": 41.46
  },
  {
    "word": "le",
    "start": 41.46,
    "end": 41.58
  },
  {
    "word": "ka.",
    "start": 41.58,
    "end": 41.74
  },
  {
    "word": "Abh",
    "start": 42.1,
    "end": 42.46
  },
  {
    "word": "sab",
    "start": 42.46,
    "end": 42.88
  },
  {
    "word": "kuxi",
    "start": 42.88,
    "end": 43.18
  },
  {
    "word": "kval,",
    "start": 43.18,
    "end": 43.38
  },
  {
    "word": "bas,",
    "start": 43.72,
    "end": 43.82
  },
  {
    "word": "same",
    "start": 44.6,
    "end": 44.92
  },
  {
    "word": "concepti",
    "start": 44.92,
    "end": 45.52
  },
  {
    "word": "hai",
    "start": 45.52,
    "end": 45.62
  },
  {
    "word": "bhi",
    "start": 45.62,
    "end": 45.78
  },
  {
    "word": "hai,",
    "start": 45.78,
    "end": 45.86
  },
  {
    "word": "agar",
    "start": 46.34,
    "end": 46.64
  },
  {
    "word": "c",
    "start": 46.64,
    "end": 46.82
  },
  {
    "word": "drive",
    "start": 46.82,
    "end": 47.06
  },
  {
    "word": "bhar",
    "start": 47.06,
    "end": 47.42
  },
  {
    "word": "rahi",
    "start": 47.42,
    "end": 47.64
  },
  {
    "word": "hai,",
    "start": 47.64,
    "end": 47.84
  },
  {
    "word": "to",
    "start": 48.24,
    "end": 48.28
  },
  {
    "word": "tum",
    "start": 48.28,
    "end": 48.46
  },
  {
    "word": "D",
    "start": 48.46,
    "end": 48.68
  },
  {
    "word": "drive",
    "start": 48.68,
    "end": 48.96
  },
  {
    "word": "aur",
    "start": 48.96,
    "end": 49.32
  },
  {
    "word": "e",
    "start": 49.32,
    "end": 49.54
  },
  {
    "word": "drive",
    "start": 49.54,
    "end": 49.8
  },
  {
    "word": "ki",
    "start": 49.8,
    "end": 50
  },
  {
    "word": "available",
    "start": 50,
    "end": 50.42
  },
  {
    "word": "free",
    "start": 50.42,
    "end": 50.8
  },
  {
    "word": "space",
    "start": 50.8,
    "end": 51.1
  },
  {
    "word": "ka",
    "start": 51.1,
    "end": 51.24
  },
  {
    "word": "use",
    "start": 51.24,
    "end": 51.46
  },
  {
    "word": "ka",
    "start": 51.46,
    "end": 51.64
  },
  {
    "word": "ke",
    "start": 51.64,
    "end": 51.78
  },
  {
    "word": "c",
    "start": 51.78,
    "end": 52.04
  },
  {
    "word": "drive",
    "start": 52.04,
    "end": 52.3
  },
  {
    "word": "ko",
    "start": 52.3,
    "end": 52.52
  },
  {
    "word": "expand",
    "start": 52.52,
    "end": 53.04
  },
  {
    "word": "karsak",
    "start": 53.04,
    "end": 53.44
  },
  {
    "word": "te",
    "start": 53.44,
    "end": 53.54
  },
  {
    "word": "ho,",
    "start": 53.54,
    "end": 53.64
  },
  {
    "word": "matlab",
    "start": 53.98,
    "end": 54.3
  },
  {
    "word": "c",
    "start": 54.3,
    "end": 54.8
  },
  {
    "word": "drive",
    "start": 54.8,
    "end": 55.08
  },
  {
    "word": "ki",
    "start": 55.08,
    "end": 55.26
  },
  {
    "word": "length",
    "start": 55.26,
    "end": 55.58
  },
  {
    "word": "bada",
    "start": 55.58,
    "end": 55.84
  },
  {
    "word": "jagi,",
    "start": 55.84,
    "end": 56.12
  },
  {
    "word": "aur",
    "start": 56.32,
    "end": 56.66
  },
  {
    "word": "jab",
    "start": 56.66,
    "end": 56.84
  },
  {
    "word": "space",
    "start": 56.84,
    "end": 57.1
  },
  {
    "word": "zada",
    "start": 57.1,
    "end": 57.46
  },
  {
    "word": "ho",
    "start": 57.46,
    "end": 57.6
  },
  {
    "word": "jai",
    "start": 57.6,
    "end": 57.76
  },
  {
    "word": "ga,",
    "start": 57.76,
    "end": 57.84
  },
  {
    "word": "to",
    "start": 58.06,
    "end": 58.24
  },
  {
    "word": "abh",
    "start": 58.24,
    "end": 58.5
  },
  {
    "word": "asli",
    "start": 58.5,
    "end": 58.7
  },
  {
    "word": "u",
    "start": 58.7,
    "end": 58.98
  },
  {
    "word": "se",
    "start": 58.98,
    "end": 59.08
  },
  {
    "word": "bharne",
    "start": 59.08,
    "end": 59.48
  },
  {
    "word": "me",
    "start": 59.48,
    "end": 59.62
  },
  {
    "word": "bhi",
    "start": 59.62,
    "end": 59.78
  },
  {
    "word": "zada",
    "start": 59.78,
    "end": 60.06
  },
  {
    "word": "time",
    "start": 60.06,
    "end": 60.34
  },
  {
    "word": "lagi",
    "start": 60.34,
    "end": 60.58
  },
  {
    "word": "hai",
    "start": 60.58,
    "end": 60.62
  },
  {
    "word": "ga,",
    "start": 60.62,
    "end": 60.7
  },
  {
    "word": "crazy",
    "start": 61.14,
    "end": 61.86
  },
  {
    "word": "hai",
    "start": 61.86,
    "end": 62.12
  },
  {
    "word": "na",
    "start": 62.12,
    "end": 62.26
  },
  {
    "word": "bro,",
    "start": 62.26,
    "end": 62.46
  },
  {
    "word": "to",
    "start": 63.08,
    "end": 63.3
  },
  {
    "word": "agar",
    "start": 63.3,
    "end": 63.66
  },
  {
    "word": "to",
    "start": 63.66,
    "end": 63.76
  },
  {
    "word": "me",
    "start": 63.76,
    "end": 63.84
  },
  {
    "word": "iske",
    "start": 63.84,
    "end": 64.12
  },
  {
    "word": "bhar",
    "start": 64.12,
    "end": 64.32
  },
  {
    "word": "me",
    "start": 64.32,
    "end": 64.42
  },
  {
    "word": "complete",
    "start": 64.42,
    "end": 64.9
  },
  {
    "word": "detail",
    "start": 64.9,
    "end": 65.38
  },
  {
    "word": "chahiye,",
    "start": 65.38,
    "end": 65.88
  },
  {
    "word": "mojhe",
    "start": 66.08,
    "end": 66.26
  },
  {
    "word": "follow",
    "start": 66.26,
    "end": 66.54
  },
  {
    "word": "kar",
    "start": 66.54,
    "end": 66.78
  },
  {
    "word": "ki",
    "start": 66.78,
    "end": 66.92
  },
  {
    "word": "comment",
    "start": 66.92,
    "end": 67.26
  },
  {
    "word": "me",
    "start": 67.26,
    "end": 67.46
  },
  {
    "word": "drive",
    "start": 67.46,
    "end": 67.84
  },
  {
    "word": "lek",
    "start": 67.84,
    "end": 68.1
  },
  {
    "word": "dho,",
    "start": 68.1,
    "end": 68.26
  },
  {
    "word": "mais",
    "start": 68.56,
    "end": 68.72
  },
  {
    "word": "ki",
    "start": 68.72,
    "end": 68.86
  },
  {
    "word": "sari",
    "start": 68.86,
    "end": 69.3
  },
  {
    "word": "details",
    "start": 69.3,
    "end": 69.72
  },
  {
    "word": "dm",
    "start": 69.72,
    "end": 70.22
  },
  {
    "word": "me",
    "start": 70.22,
    "end": 70.32
  },
  {
    "word": "dhe",
    "start": 70.32,
    "end": 70.42
  },
  {
    "word": "dhoondha,",
    "start": 70.42,
    "end": 70.66
  },
  {
    "word": "aur",
    "start": 71.04,
    "end": 71.22
  },
  {
    "word": "ha",
    "start": 71.22,
    "end": 71.38
  },
  {
    "word": "follow",
    "start": 71.38,
    "end": 72.08
  },
  {
    "word": "kar",
    "start": 72.08,
    "end": 72.3
  },
  {
    "word": "na",
    "start": 72.3,
    "end": 72.4
  },
  {
    "word": "madbhul",
    "start": 72.4,
    "end": 72.76
  },
  {
    "word": "na.",
    "start": 72.76,
    "end": 72.86
  }
];

export const MASTER_PHRASES: PhraseItem[] = [
  {
    "id": "phrase_0",
    "text": "Arre bro kya cheez",
    "startSec": 1.3,
    "endSec": 4.76,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "Arre",
        "startSec": 1.3,
        "endSec": 1.86,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bro",
        "startSec": 1.86,
        "endSec": 2.42,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "kya",
        "startSec": 2.42,
        "endSec": 4,
        "style": "default",
        "isHero": false
      },
      {
        "word": "cheez",
        "startSec": 4,
        "endSec": 4.76,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_1",
    "text": "dhoondhi hai maine,",
    "startSec": 4.76,
    "endSec": 5.66,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "dhoondhi",
        "startSec": 4.76,
        "endSec": 5.22,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "hai",
        "startSec": 5.22,
        "endSec": 5.34,
        "style": "default",
        "isHero": false
      },
      {
        "word": "maine,",
        "startSec": 5.34,
        "endSec": 5.66,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_2",
    "text": "ruko batata hoon.",
    "startSec": 6.44,
    "endSec": 7.72,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ruko",
        "startSec": 6.44,
        "endSec": 7.02,
        "style": "italic_serif",
        "isHero": true
      },
      {
        "word": "batata",
        "startSec": 7.02,
        "endSec": 7.46,
        "style": "italic_serif",
        "isHero": true
      },
      {
        "word": "hoon.",
        "startSec": 7.46,
        "endSec": 7.72,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_3",
    "text": "Agar tum log bhi",
    "startSec": 8.42,
    "endSec": 9.66,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "Agar",
        "startSec": 8.42,
        "endSec": 8.94,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tum",
        "startSec": 8.94,
        "endSec": 9.16,
        "style": "default",
        "isHero": false
      },
      {
        "word": "log",
        "startSec": 9.16,
        "endSec": 9.38,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhi",
        "startSec": 9.38,
        "endSec": 9.66,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_4",
    "text": "c drive ke full",
    "startSec": 9.66,
    "endSec": 10.64,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "c",
        "startSec": 9.66,
        "endSec": 9.92,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "drive",
        "startSec": 9.92,
        "endSec": 10.22,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "ke",
        "startSec": 10.22,
        "endSec": 10.44,
        "style": "default",
        "isHero": false
      },
      {
        "word": "full",
        "startSec": 10.44,
        "endSec": 10.64,
        "style": "red_danger",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_5",
    "text": "hoonne se pareshaan ho,",
    "startSec": 10.64,
    "endSec": 11.88,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "hoonne",
        "startSec": 10.64,
        "endSec": 10.9,
        "style": "default",
        "isHero": true
      },
      {
        "word": "se",
        "startSec": 10.9,
        "endSec": 11,
        "style": "default",
        "isHero": false
      },
      {
        "word": "pareshaan",
        "startSec": 11,
        "endSec": 11.7,
        "style": "red_danger",
        "isHero": true
      },
      {
        "word": "ho,",
        "startSec": 11.7,
        "endSec": 11.88,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_6",
    "text": "aur soshte ho na,",
    "startSec": 12.36,
    "endSec": 12.94,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "aur",
        "startSec": 12.36,
        "endSec": 12.48,
        "style": "default",
        "isHero": false
      },
      {
        "word": "soshte",
        "startSec": 12.48,
        "endSec": 12.78,
        "style": "default",
        "isHero": true
      },
      {
        "word": "ho",
        "startSec": 12.78,
        "endSec": 12.86,
        "style": "default",
        "isHero": false
      },
      {
        "word": "na,",
        "startSec": 12.86,
        "endSec": 12.94,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_7",
    "text": "yaar c drive thodi",
    "startSec": 13.34,
    "endSec": 14.64,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "yaar",
        "startSec": 13.34,
        "endSec": 13.74,
        "style": "default",
        "isHero": false
      },
      {
        "word": "c",
        "startSec": 13.74,
        "endSec": 14.06,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "drive",
        "startSec": 14.06,
        "endSec": 14.36,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "thodi",
        "startSec": 14.36,
        "endSec": 14.64,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_8",
    "text": "khali hoja hai tum",
    "startSec": 14.64,
    "endSec": 15.76,
    "theme": "SOLUTION_NEON",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "khali",
        "startSec": 14.64,
        "endSec": 15.24,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hoja",
        "startSec": 15.24,
        "endSec": 15.54,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai",
        "startSec": 15.54,
        "endSec": 15.64,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tum",
        "startSec": 15.64,
        "endSec": 15.76,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_9",
    "text": "mazaa aaja hai,",
    "startSec": 15.76,
    "endSec": 16.44,
    "theme": "SOLUTION_NEON",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "mazaa",
        "startSec": 15.76,
        "endSec": 16.18,
        "style": "default",
        "isHero": false
      },
      {
        "word": "aaja",
        "startSec": 16.18,
        "endSec": 16.3,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai,",
        "startSec": 16.3,
        "endSec": 16.44,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_10",
    "text": "to bro,",
    "startSec": 16.9,
    "endSec": 17.22,
    "theme": "SOLUTION_NEON",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "to",
        "startSec": 16.9,
        "endSec": 16.98,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bro,",
        "startSec": 16.98,
        "endSec": 17.22,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_11",
    "text": "maine hai ek solution",
    "startSec": 17.82,
    "endSec": 18.76,
    "theme": "SOLUTION_NEON",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "maine",
        "startSec": 17.82,
        "endSec": 18.06,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai",
        "startSec": 18.06,
        "endSec": 18.28,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ek",
        "startSec": 18.28,
        "endSec": 18.48,
        "style": "default",
        "isHero": false
      },
      {
        "word": "solution",
        "startSec": 18.48,
        "endSec": 18.76,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_12",
    "text": "dhoondha hai.",
    "startSec": 18.76,
    "endSec": 19.44,
    "theme": "SOLUTION_NEON",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "dhoondha",
        "startSec": 18.76,
        "endSec": 19.32,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "hai.",
        "startSec": 19.32,
        "endSec": 19.44,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_13",
    "text": "Lekin ushe bhai le,",
    "startSec": 19.84,
    "endSec": 20.56,
    "theme": "EDITORIAL_BW",
    "layout": "EDITORIAL_BLOCK",
    "words": [
      {
        "word": "Lekin",
        "startSec": 19.84,
        "endSec": 20.08,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ushe",
        "startSec": 20.08,
        "endSec": 20.28,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhai",
        "startSec": 20.28,
        "endSec": 20.44,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "le,",
        "startSec": 20.44,
        "endSec": 20.56,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_14",
    "text": "samajna baadhe ga ki",
    "startSec": 20.86,
    "endSec": 21.86,
    "theme": "EDITORIAL_BW",
    "layout": "EDITORIAL_BLOCK",
    "words": [
      {
        "word": "samajna",
        "startSec": 20.86,
        "endSec": 21.36,
        "style": "default",
        "isHero": true
      },
      {
        "word": "baadhe",
        "startSec": 21.36,
        "endSec": 21.6,
        "style": "default",
        "isHero": true
      },
      {
        "word": "ga",
        "startSec": 21.6,
        "endSec": 21.7,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ki",
        "startSec": 21.7,
        "endSec": 21.86,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_15",
    "text": "partition actually hoota ke",
    "startSec": 21.86,
    "endSec": 23.54,
    "theme": "EDITORIAL_BW",
    "layout": "EDITORIAL_BLOCK",
    "words": [
      {
        "word": "partition",
        "startSec": 21.86,
        "endSec": 22.36,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "actually",
        "startSec": 22.36,
        "endSec": 22.94,
        "style": "italic_serif",
        "isHero": true
      },
      {
        "word": "hoota",
        "startSec": 22.94,
        "endSec": 23.36,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ke",
        "startSec": 23.36,
        "endSec": 23.54,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_16",
    "text": "hai,",
    "startSec": 23.54,
    "endSec": 23.66,
    "theme": "EDITORIAL_BW",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "hai,",
        "startSec": 23.54,
        "endSec": 23.66,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_17",
    "text": "maan le,",
    "startSec": 24.38,
    "endSec": 24.86,
    "theme": "EDITORIAL_BW",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "maan",
        "startSec": 24.38,
        "endSec": 24.76,
        "style": "default",
        "isHero": false
      },
      {
        "word": "le,",
        "startSec": 24.76,
        "endSec": 24.86,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_18",
    "text": "tere khaana padha hai,",
    "startSec": 25.08,
    "endSec": 25.9,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "tere",
        "startSec": 25.08,
        "endSec": 25.1,
        "style": "default",
        "isHero": false
      },
      {
        "word": "khaana",
        "startSec": 25.1,
        "endSec": 25.58,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "padha",
        "startSec": 25.58,
        "endSec": 25.76,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai,",
        "startSec": 25.76,
        "endSec": 25.9,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_19",
    "text": "aur tere plate all",
    "startSec": 26.12,
    "endSec": 27.18,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "aur",
        "startSec": 26.12,
        "endSec": 26.42,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tere",
        "startSec": 26.42,
        "endSec": 26.64,
        "style": "default",
        "isHero": false
      },
      {
        "word": "plate",
        "startSec": 26.64,
        "endSec": 26.84,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "all",
        "startSec": 26.84,
        "endSec": 27.18,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_20",
    "text": "ready bhai huye,",
    "startSec": 27.18,
    "endSec": 28.06,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ready",
        "startSec": 27.18,
        "endSec": 27.42,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhai",
        "startSec": 27.42,
        "endSec": 27.8,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "huye,",
        "startSec": 27.8,
        "endSec": 28.06,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_21",
    "text": "lekin utna nahi jitna",
    "startSec": 28.28,
    "endSec": 29.7,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "lekin",
        "startSec": 28.28,
        "endSec": 28.86,
        "style": "default",
        "isHero": false
      },
      {
        "word": "utna",
        "startSec": 28.86,
        "endSec": 29.2,
        "style": "default",
        "isHero": false
      },
      {
        "word": "nahi",
        "startSec": 29.2,
        "endSec": 29.42,
        "style": "default",
        "isHero": false
      },
      {
        "word": "jitna",
        "startSec": 29.42,
        "endSec": 29.7,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_22",
    "text": "toje chahiye,",
    "startSec": 29.7,
    "endSec": 30.44,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "toje",
        "startSec": 29.7,
        "endSec": 29.92,
        "style": "default",
        "isHero": false
      },
      {
        "word": "chahiye,",
        "startSec": 29.92,
        "endSec": 30.44,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_23",
    "text": "aur khaana bhi all",
    "startSec": 30.62,
    "endSec": 31.86,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "aur",
        "startSec": 30.62,
        "endSec": 31.06,
        "style": "default",
        "isHero": false
      },
      {
        "word": "khaana",
        "startSec": 31.06,
        "endSec": 31.42,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "bhi",
        "startSec": 31.42,
        "endSec": 31.64,
        "style": "default",
        "isHero": false
      },
      {
        "word": "all",
        "startSec": 31.64,
        "endSec": 31.86,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_24",
    "text": "most kata mein,",
    "startSec": 31.86,
    "endSec": 32.44,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "most",
        "startSec": 31.86,
        "endSec": 32.08,
        "style": "default",
        "isHero": false
      },
      {
        "word": "kata",
        "startSec": 32.08,
        "endSec": 32.32,
        "style": "default",
        "isHero": false
      },
      {
        "word": "mein,",
        "startSec": 32.32,
        "endSec": 32.44,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_25",
    "text": "lekin tere bhai hu",
    "startSec": 32.94,
    "endSec": 33.86,
    "theme": "FOOD_PLATE_AMBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "lekin",
        "startSec": 32.94,
        "endSec": 33.24,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tere",
        "startSec": 33.24,
        "endSec": 33.4,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhai",
        "startSec": 33.4,
        "endSec": 33.76,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "hu",
        "startSec": 33.76,
        "endSec": 33.86,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_26",
    "text": "ko zyada khaana mila",
    "startSec": 33.86,
    "endSec": 35.62,
    "theme": "BROTHERS_DUO",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ko",
        "startSec": 33.86,
        "endSec": 34.04,
        "style": "default",
        "isHero": false
      },
      {
        "word": "zyada",
        "startSec": 34.04,
        "endSec": 34.94,
        "style": "default",
        "isHero": false
      },
      {
        "word": "khaana",
        "startSec": 34.94,
        "endSec": 35.36,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "mila",
        "startSec": 35.36,
        "endSec": 35.62,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_27",
    "text": "huye,",
    "startSec": 35.62,
    "endSec": 35.8,
    "theme": "BROTHERS_DUO",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "huye,",
        "startSec": 35.62,
        "endSec": 35.8,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_28",
    "text": "to tu kya karega,",
    "startSec": 36.06,
    "endSec": 36.88,
    "theme": "BROTHERS_DUO",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "to",
        "startSec": 36.06,
        "endSec": 36.36,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tu",
        "startSec": 36.36,
        "endSec": 36.48,
        "style": "default",
        "isHero": false
      },
      {
        "word": "kya",
        "startSec": 36.48,
        "endSec": 36.6,
        "style": "default",
        "isHero": false
      },
      {
        "word": "karega,",
        "startSec": 36.6,
        "endSec": 36.88,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_29",
    "text": "tu vek bhai plate",
    "startSec": 37.26,
    "endSec": 38.2,
    "theme": "BROTHERS_DUO",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "tu",
        "startSec": 37.26,
        "endSec": 37.44,
        "style": "default",
        "isHero": false
      },
      {
        "word": "vek",
        "startSec": 37.44,
        "endSec": 37.62,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhai",
        "startSec": 37.62,
        "endSec": 37.94,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "plate",
        "startSec": 37.94,
        "endSec": 38.2,
        "style": "gold_luxury",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_30",
    "text": "lai ka,",
    "startSec": 38.2,
    "endSec": 38.56,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "lai",
        "startSec": 38.2,
        "endSec": 38.44,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ka,",
        "startSec": 38.44,
        "endSec": 38.56,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_31",
    "text": "aur apne agal bagal",
    "startSec": 38.88,
    "endSec": 40.1,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "aur",
        "startSec": 38.88,
        "endSec": 39.16,
        "style": "default",
        "isHero": false
      },
      {
        "word": "apne",
        "startSec": 39.16,
        "endSec": 39.32,
        "style": "default",
        "isHero": false
      },
      {
        "word": "agal",
        "startSec": 39.32,
        "endSec": 39.84,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bagal",
        "startSec": 39.84,
        "endSec": 40.1,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_32",
    "text": "ke bhai hu ko",
    "startSec": 40.1,
    "endSec": 40.64,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ke",
        "startSec": 40.1,
        "endSec": 40.24,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhai",
        "startSec": 40.24,
        "endSec": 40.48,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "hu",
        "startSec": 40.48,
        "endSec": 40.56,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ko",
        "startSec": 40.56,
        "endSec": 40.64,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_33",
    "text": "se thoda khaana le",
    "startSec": 40.64,
    "endSec": 41.46,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "se",
        "startSec": 40.64,
        "endSec": 40.66,
        "style": "default",
        "isHero": false
      },
      {
        "word": "thoda",
        "startSec": 40.66,
        "endSec": 40.88,
        "style": "default",
        "isHero": false
      },
      {
        "word": "khaana",
        "startSec": 40.88,
        "endSec": 41.18,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "le",
        "startSec": 41.18,
        "endSec": 41.46,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_34",
    "text": "le ka.",
    "startSec": 41.46,
    "endSec": 41.74,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "le",
        "startSec": 41.46,
        "endSec": 41.58,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ka.",
        "startSec": 41.58,
        "endSec": 41.74,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_35",
    "text": "Abh sab kuxi kval,",
    "startSec": 42.1,
    "endSec": 43.38,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "Abh",
        "startSec": 42.1,
        "endSec": 42.46,
        "style": "default",
        "isHero": false
      },
      {
        "word": "sab",
        "startSec": 42.46,
        "endSec": 42.88,
        "style": "default",
        "isHero": false
      },
      {
        "word": "kuxi",
        "startSec": 42.88,
        "endSec": 43.18,
        "style": "default",
        "isHero": false
      },
      {
        "word": "kval,",
        "startSec": 43.18,
        "endSec": 43.38,
        "style": "green_emerald",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_36",
    "text": "bas,",
    "startSec": 43.72,
    "endSec": 43.82,
    "theme": "EQUAL_BALANCE_GREEN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "bas,",
        "startSec": 43.72,
        "endSec": 43.82,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_37",
    "text": "same concepti hai bhi",
    "startSec": 44.6,
    "endSec": 45.78,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "same",
        "startSec": 44.6,
        "endSec": 44.92,
        "style": "default",
        "isHero": false
      },
      {
        "word": "concepti",
        "startSec": 44.92,
        "endSec": 45.52,
        "style": "default",
        "isHero": true
      },
      {
        "word": "hai",
        "startSec": 45.52,
        "endSec": 45.62,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhi",
        "startSec": 45.62,
        "endSec": 45.78,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_38",
    "text": "hai,",
    "startSec": 45.78,
    "endSec": 45.86,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "hai,",
        "startSec": 45.78,
        "endSec": 45.86,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_39",
    "text": "agar c drive bhar",
    "startSec": 46.34,
    "endSec": 47.42,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "agar",
        "startSec": 46.34,
        "endSec": 46.64,
        "style": "default",
        "isHero": false
      },
      {
        "word": "c",
        "startSec": 46.64,
        "endSec": 46.82,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "drive",
        "startSec": 46.82,
        "endSec": 47.06,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "bhar",
        "startSec": 47.06,
        "endSec": 47.42,
        "style": "red_danger",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_40",
    "text": "rahi hai,",
    "startSec": 47.42,
    "endSec": 47.84,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "rahi",
        "startSec": 47.42,
        "endSec": 47.64,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai,",
        "startSec": 47.64,
        "endSec": 47.84,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_41",
    "text": "to tum D drive",
    "startSec": 48.24,
    "endSec": 48.96,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "to",
        "startSec": 48.24,
        "endSec": 48.28,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tum",
        "startSec": 48.28,
        "endSec": 48.46,
        "style": "default",
        "isHero": false
      },
      {
        "word": "D",
        "startSec": 48.46,
        "endSec": 48.68,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "drive",
        "startSec": 48.68,
        "endSec": 48.96,
        "style": "purple_violet",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_42",
    "text": "aur e drive ki",
    "startSec": 48.96,
    "endSec": 50,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "aur",
        "startSec": 48.96,
        "endSec": 49.32,
        "style": "default",
        "isHero": false
      },
      {
        "word": "e",
        "startSec": 49.32,
        "endSec": 49.54,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "drive",
        "startSec": 49.54,
        "endSec": 49.8,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "ki",
        "startSec": 49.8,
        "endSec": 50,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_43",
    "text": "available free space ka",
    "startSec": 50,
    "endSec": 51.24,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "available",
        "startSec": 50,
        "endSec": 50.42,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "free",
        "startSec": 50.42,
        "endSec": 50.8,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "space",
        "startSec": 50.8,
        "endSec": 51.1,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "ka",
        "startSec": 51.1,
        "endSec": 51.24,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_44",
    "text": "use ka ke c",
    "startSec": 51.24,
    "endSec": 52.04,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "use",
        "startSec": 51.24,
        "endSec": 51.46,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ka",
        "startSec": 51.46,
        "endSec": 51.64,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ke",
        "startSec": 51.64,
        "endSec": 51.78,
        "style": "default",
        "isHero": false
      },
      {
        "word": "c",
        "startSec": 51.78,
        "endSec": 52.04,
        "style": "gold_luxury",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_45",
    "text": "drive ko expand karsak",
    "startSec": 52.04,
    "endSec": 53.44,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "drive",
        "startSec": 52.04,
        "endSec": 52.3,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "ko",
        "startSec": 52.3,
        "endSec": 52.52,
        "style": "default",
        "isHero": false
      },
      {
        "word": "expand",
        "startSec": 52.52,
        "endSec": 53.04,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "karsak",
        "startSec": 53.04,
        "endSec": 53.44,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_46",
    "text": "te ho,",
    "startSec": 53.44,
    "endSec": 53.64,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "te",
        "startSec": 53.44,
        "endSec": 53.54,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ho,",
        "startSec": 53.54,
        "endSec": 53.64,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_47",
    "text": "matlab c drive ki",
    "startSec": 53.98,
    "endSec": 55.26,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "matlab",
        "startSec": 53.98,
        "endSec": 54.3,
        "style": "default",
        "isHero": true
      },
      {
        "word": "c",
        "startSec": 54.3,
        "endSec": 54.8,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "drive",
        "startSec": 54.8,
        "endSec": 55.08,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "ki",
        "startSec": 55.08,
        "endSec": 55.26,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_48",
    "text": "length bada jagi,",
    "startSec": 55.26,
    "endSec": 56.12,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "length",
        "startSec": 55.26,
        "endSec": 55.58,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "bada",
        "startSec": 55.58,
        "endSec": 55.84,
        "style": "default",
        "isHero": false
      },
      {
        "word": "jagi,",
        "startSec": 55.84,
        "endSec": 56.12,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_49",
    "text": "aur jab space zada",
    "startSec": 56.32,
    "endSec": 57.46,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "aur",
        "startSec": 56.32,
        "endSec": 56.66,
        "style": "default",
        "isHero": false
      },
      {
        "word": "jab",
        "startSec": 56.66,
        "endSec": 56.84,
        "style": "default",
        "isHero": false
      },
      {
        "word": "space",
        "startSec": 56.84,
        "endSec": 57.1,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "zada",
        "startSec": 57.1,
        "endSec": 57.46,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_50",
    "text": "ho jai ga,",
    "startSec": 57.46,
    "endSec": 57.84,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ho",
        "startSec": 57.46,
        "endSec": 57.6,
        "style": "default",
        "isHero": false
      },
      {
        "word": "jai",
        "startSec": 57.6,
        "endSec": 57.76,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ga,",
        "startSec": 57.76,
        "endSec": 57.84,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_51",
    "text": "to abh asli u",
    "startSec": 58.06,
    "endSec": 58.98,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "to",
        "startSec": 58.06,
        "endSec": 58.24,
        "style": "default",
        "isHero": false
      },
      {
        "word": "abh",
        "startSec": 58.24,
        "endSec": 58.5,
        "style": "default",
        "isHero": false
      },
      {
        "word": "asli",
        "startSec": 58.5,
        "endSec": 58.7,
        "style": "default",
        "isHero": false
      },
      {
        "word": "u",
        "startSec": 58.7,
        "endSec": 58.98,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_52",
    "text": "se bharne me bhi",
    "startSec": 58.98,
    "endSec": 59.78,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "se",
        "startSec": 58.98,
        "endSec": 59.08,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bharne",
        "startSec": 59.08,
        "endSec": 59.48,
        "style": "default",
        "isHero": true
      },
      {
        "word": "me",
        "startSec": 59.48,
        "endSec": 59.62,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhi",
        "startSec": 59.62,
        "endSec": 59.78,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_53",
    "text": "zada time lagi hai",
    "startSec": 59.78,
    "endSec": 60.62,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "zada",
        "startSec": 59.78,
        "endSec": 60.06,
        "style": "default",
        "isHero": false
      },
      {
        "word": "time",
        "startSec": 60.06,
        "endSec": 60.34,
        "style": "default",
        "isHero": false
      },
      {
        "word": "lagi",
        "startSec": 60.34,
        "endSec": 60.58,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai",
        "startSec": 60.58,
        "endSec": 60.62,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_54",
    "text": "ga,",
    "startSec": 60.62,
    "endSec": 60.7,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "ga,",
        "startSec": 60.62,
        "endSec": 60.7,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_55",
    "text": "crazy hai na bro,",
    "startSec": 61.14,
    "endSec": 62.46,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "crazy",
        "startSec": 61.14,
        "endSec": 61.86,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "hai",
        "startSec": 61.86,
        "endSec": 62.12,
        "style": "default",
        "isHero": false
      },
      {
        "word": "na",
        "startSec": 62.12,
        "endSec": 62.26,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bro,",
        "startSec": 62.26,
        "endSec": 62.46,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_56",
    "text": "to agar to me",
    "startSec": 63.08,
    "endSec": 63.84,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "to",
        "startSec": 63.08,
        "endSec": 63.3,
        "style": "default",
        "isHero": false
      },
      {
        "word": "agar",
        "startSec": 63.3,
        "endSec": 63.66,
        "style": "default",
        "isHero": false
      },
      {
        "word": "to",
        "startSec": 63.66,
        "endSec": 63.76,
        "style": "default",
        "isHero": false
      },
      {
        "word": "me",
        "startSec": 63.76,
        "endSec": 63.84,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_57",
    "text": "iske bhar me complete",
    "startSec": 63.84,
    "endSec": 64.9,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "iske",
        "startSec": 63.84,
        "endSec": 64.12,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhar",
        "startSec": 64.12,
        "endSec": 64.32,
        "style": "red_danger",
        "isHero": true
      },
      {
        "word": "me",
        "startSec": 64.32,
        "endSec": 64.42,
        "style": "default",
        "isHero": false
      },
      {
        "word": "complete",
        "startSec": 64.42,
        "endSec": 64.9,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_58",
    "text": "detail chahiye,",
    "startSec": 64.9,
    "endSec": 65.88,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "detail",
        "startSec": 64.9,
        "endSec": 65.38,
        "style": "default",
        "isHero": true
      },
      {
        "word": "chahiye,",
        "startSec": 65.38,
        "endSec": 65.88,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_59",
    "text": "mojhe follow kar ki",
    "startSec": 66.08,
    "endSec": 66.92,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "mojhe",
        "startSec": 66.08,
        "endSec": 66.26,
        "style": "default",
        "isHero": false
      },
      {
        "word": "follow",
        "startSec": 66.26,
        "endSec": 66.54,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "kar",
        "startSec": 66.54,
        "endSec": 66.78,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ki",
        "startSec": 66.78,
        "endSec": 66.92,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_60",
    "text": "comment me drive lek",
    "startSec": 66.92,
    "endSec": 68.1,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "comment",
        "startSec": 66.92,
        "endSec": 67.26,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "me",
        "startSec": 67.26,
        "endSec": 67.46,
        "style": "default",
        "isHero": false
      },
      {
        "word": "drive",
        "startSec": 67.46,
        "endSec": 67.84,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "lek",
        "startSec": 67.84,
        "endSec": 68.1,
        "style": "purple_violet",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_61",
    "text": "dho,",
    "startSec": 68.1,
    "endSec": 68.26,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "dho,",
        "startSec": 68.1,
        "endSec": 68.26,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_62",
    "text": "mais ki sari details",
    "startSec": 68.56,
    "endSec": 69.72,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "mais",
        "startSec": 68.56,
        "endSec": 68.72,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ki",
        "startSec": 68.72,
        "endSec": 68.86,
        "style": "default",
        "isHero": false
      },
      {
        "word": "sari",
        "startSec": 68.86,
        "endSec": 69.3,
        "style": "default",
        "isHero": false
      },
      {
        "word": "details",
        "startSec": 69.3,
        "endSec": 69.72,
        "style": "green_emerald",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_63",
    "text": "dm me dhe dhoondha,",
    "startSec": 69.72,
    "endSec": 70.66,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "dm",
        "startSec": 69.72,
        "endSec": 70.22,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "me",
        "startSec": 70.22,
        "endSec": 70.32,
        "style": "default",
        "isHero": false
      },
      {
        "word": "dhe",
        "startSec": 70.32,
        "endSec": 70.42,
        "style": "default",
        "isHero": false
      },
      {
        "word": "dhoondha,",
        "startSec": 70.42,
        "endSec": 70.66,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_64",
    "text": "aur ha follow kar",
    "startSec": 71.04,
    "endSec": 72.3,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "aur",
        "startSec": 71.04,
        "endSec": 71.22,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ha",
        "startSec": 71.22,
        "endSec": 71.38,
        "style": "default",
        "isHero": false
      },
      {
        "word": "follow",
        "startSec": 71.38,
        "endSec": 72.08,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "kar",
        "startSec": 72.08,
        "endSec": 72.3,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_65",
    "text": "na madbhul na.",
    "startSec": 72.3,
    "endSec": 72.86,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "na",
        "startSec": 72.3,
        "endSec": 72.4,
        "style": "default",
        "isHero": false
      },
      {
        "word": "madbhul",
        "startSec": 72.4,
        "endSec": 72.76,
        "style": "default",
        "isHero": true
      },
      {
        "word": "na.",
        "startSec": 72.76,
        "endSec": 72.86,
        "style": "default",
        "isHero": false
      }
    ]
  }
];
