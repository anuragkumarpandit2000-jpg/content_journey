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
    "start": 0.5,
    "end": 0.855
  },
  {
    "word": "bro,",
    "start": 0.855,
    "end": 1.21
  },
  {
    "word": "kya",
    "start": 1.21,
    "end": 1.477
  },
  {
    "word": "tumhe",
    "start": 1.477,
    "end": 1.921
  },
  {
    "word": "pata",
    "start": 1.921,
    "end": 2.276
  },
  {
    "word": "hai",
    "start": 2.276,
    "end": 2.542
  },
  {
    "word": "ye",
    "start": 2.542,
    "end": 2.72
  },
  {
    "word": "video",
    "start": 2.72,
    "end": 3.164
  },
  {
    "word": "jo",
    "start": 3.164,
    "end": 3.342
  },
  {
    "word": "tum",
    "start": 3.342,
    "end": 3.608
  },
  {
    "word": "screen",
    "start": 3.608,
    "end": 4.141
  },
  {
    "word": "pe",
    "start": 4.141,
    "end": 4.318
  },
  {
    "word": "dekh",
    "start": 4.318,
    "end": 4.674
  },
  {
    "word": "rahe",
    "start": 4.674,
    "end": 5.029
  },
  {
    "word": "ho,",
    "start": 5.029,
    "end": 5.295
  },
  {
    "word": "isse",
    "start": 5.295,
    "end": 5.65
  },
  {
    "word": "kisi",
    "start": 5.65,
    "end": 6.006
  },
  {
    "word": "human",
    "start": 6.006,
    "end": 6.45
  },
  {
    "word": "ne",
    "start": 6.45,
    "end": 6.627
  },
  {
    "word": "record",
    "start": 6.627,
    "end": 7.16
  },
  {
    "word": "ya",
    "start": 7.16,
    "end": 7.338
  },
  {
    "word": "edit",
    "start": 7.338,
    "end": 7.693
  },
  {
    "word": "nahi",
    "start": 7.693,
    "end": 8.048
  },
  {
    "word": "kiya?",
    "start": 8.048,
    "end": 8.492
  },
  {
    "word": "Ye",
    "start": 8.842,
    "end": 9.044
  },
  {
    "word": "script",
    "start": 9.044,
    "end": 9.65
  },
  {
    "word": "AI",
    "start": 9.65,
    "end": 9.852
  },
  {
    "word": "ne",
    "start": 9.852,
    "end": 10.054
  },
  {
    "word": "likhi",
    "start": 10.054,
    "end": 10.558
  },
  {
    "word": "hai,",
    "start": 10.558,
    "end": 10.962
  },
  {
    "word": "ye",
    "start": 10.962,
    "end": 11.164
  },
  {
    "word": "voice",
    "start": 11.164,
    "end": 11.669
  },
  {
    "word": "neural",
    "start": 11.669,
    "end": 12.275
  },
  {
    "word": "network",
    "start": 12.275,
    "end": 12.982
  },
  {
    "word": "se",
    "start": 12.982,
    "end": 13.184
  },
  {
    "word": "generate",
    "start": 13.184,
    "end": 13.991
  },
  {
    "word": "hui",
    "start": 13.991,
    "end": 14.294
  },
  {
    "word": "hai,",
    "start": 14.294,
    "end": 14.698
  },
  {
    "word": "ye",
    "start": 15.048,
    "end": 15.288
  },
  {
    "word": "3D",
    "start": 15.288,
    "end": 15.528
  },
  {
    "word": "Three.js",
    "start": 15.528,
    "end": 16.488
  },
  {
    "word": "kinetic",
    "start": 16.488,
    "end": 17.328
  },
  {
    "word": "typography",
    "start": 17.328,
    "end": 18.528
  },
  {
    "word": "code",
    "start": 18.528,
    "end": 19.008
  },
  {
    "word": "se",
    "start": 19.008,
    "end": 19.248
  },
  {
    "word": "render",
    "start": 19.248,
    "end": 19.968
  },
  {
    "word": "hui",
    "start": 19.968,
    "end": 20.328
  },
  {
    "word": "hai,",
    "start": 20.328,
    "end": 20.808
  },
  {
    "word": "aur",
    "start": 21.158,
    "end": 21.455
  },
  {
    "word": "ye",
    "start": 21.455,
    "end": 21.654
  },
  {
    "word": "video",
    "start": 21.654,
    "end": 22.149
  },
  {
    "word": "mere",
    "start": 22.149,
    "end": 22.546
  },
  {
    "word": "laptop",
    "start": 22.546,
    "end": 23.141
  },
  {
    "word": "band",
    "start": 23.141,
    "end": 23.538
  },
  {
    "word": "hone",
    "start": 23.538,
    "end": 23.934
  },
  {
    "word": "ke",
    "start": 23.934,
    "end": 24.132
  },
  {
    "word": "baad",
    "start": 24.132,
    "end": 24.529
  },
  {
    "word": "cloud",
    "start": 24.529,
    "end": 25.025
  },
  {
    "word": "se",
    "start": 25.025,
    "end": 25.223
  },
  {
    "word": "khud",
    "start": 25.223,
    "end": 25.62
  },
  {
    "word": "upload",
    "start": 25.62,
    "end": 26.215
  },
  {
    "word": "ho",
    "start": 26.215,
    "end": 26.413
  },
  {
    "word": "rahi",
    "start": 26.413,
    "end": 26.809
  },
  {
    "word": "hai!",
    "start": 26.809,
    "end": 27.206
  },
  {
    "word": "Crazy",
    "start": 27.556,
    "end": 28.121
  },
  {
    "word": "lag",
    "start": 28.121,
    "end": 28.46
  },
  {
    "word": "raha",
    "start": 28.46,
    "end": 28.912
  },
  {
    "word": "hai",
    "start": 28.912,
    "end": 29.251
  },
  {
    "word": "na",
    "start": 29.251,
    "end": 29.477
  },
  {
    "word": "bro?",
    "start": 29.477,
    "end": 29.929
  },
  {
    "word": "Ab",
    "start": 29.929,
    "end": 30.155
  },
  {
    "word": "se",
    "start": 30.155,
    "end": 30.381
  },
  {
    "word": "roz",
    "start": 30.381,
    "end": 30.72
  },
  {
    "word": "ek",
    "start": 30.72,
    "end": 30.946
  },
  {
    "word": "aisi",
    "start": 30.946,
    "end": 31.397
  },
  {
    "word": "hi",
    "start": 31.397,
    "end": 31.623
  },
  {
    "word": "video",
    "start": 31.623,
    "end": 32.188
  },
  {
    "word": "bina",
    "start": 32.188,
    "end": 32.64
  },
  {
    "word": "ungli",
    "start": 32.64,
    "end": 33.205
  },
  {
    "word": "hilaye",
    "start": 33.205,
    "end": 33.883
  },
  {
    "word": "post",
    "start": 33.883,
    "end": 34.335
  },
  {
    "word": "hogi!",
    "start": 34.335,
    "end": 34.9
  },
  {
    "word": "Agar",
    "start": 35.25,
    "end": 35.603
  },
  {
    "word": "tum",
    "start": 35.603,
    "end": 35.868
  },
  {
    "word": "bhi",
    "start": 35.868,
    "end": 36.133
  },
  {
    "word": "apna",
    "start": 36.133,
    "end": 36.486
  },
  {
    "word": "pura",
    "start": 36.486,
    "end": 36.839
  },
  {
    "word": "content",
    "start": 36.839,
    "end": 37.457
  },
  {
    "word": "creation",
    "start": 37.457,
    "end": 38.163
  },
  {
    "word": "autopilot",
    "start": 38.163,
    "end": 38.957
  },
  {
    "word": "pe",
    "start": 38.957,
    "end": 39.134
  },
  {
    "word": "daalna",
    "start": 39.134,
    "end": 39.664
  },
  {
    "word": "chahte",
    "start": 39.664,
    "end": 40.193
  },
  {
    "word": "ho,",
    "start": 40.193,
    "end": 40.458
  },
  {
    "word": "to",
    "start": 40.808,
    "end": 41.003
  },
  {
    "word": "mujhe",
    "start": 41.003,
    "end": 41.492
  },
  {
    "word": "follow",
    "start": 41.492,
    "end": 42.078
  },
  {
    "word": "karke",
    "start": 42.078,
    "end": 42.567
  },
  {
    "word": "comment",
    "start": 42.567,
    "end": 43.251
  },
  {
    "word": "me",
    "start": 43.251,
    "end": 43.446
  },
  {
    "word": "'AI",
    "start": 43.446,
    "end": 43.739
  },
  {
    "word": "CODE'",
    "start": 43.739,
    "end": 44.228
  },
  {
    "word": "likh",
    "start": 44.228,
    "end": 44.619
  },
  {
    "word": "do,",
    "start": 44.619,
    "end": 44.912
  },
  {
    "word": "main",
    "start": 45.262,
    "end": 45.646
  },
  {
    "word": "is",
    "start": 45.646,
    "end": 45.838
  },
  {
    "word": "pure",
    "start": 45.838,
    "end": 46.222
  },
  {
    "word": "zero-cost",
    "start": 46.222,
    "end": 47.086
  },
  {
    "word": "pipeline",
    "start": 47.086,
    "end": 47.854
  },
  {
    "word": "ka",
    "start": 47.854,
    "end": 48.046
  },
  {
    "word": "source",
    "start": 48.046,
    "end": 48.622
  },
  {
    "word": "code",
    "start": 48.622,
    "end": 49.006
  },
  {
    "word": "aur",
    "start": 49.006,
    "end": 49.294
  },
  {
    "word": "tutorial",
    "start": 49.294,
    "end": 50.062
  },
  {
    "word": "DM",
    "start": 50.062,
    "end": 50.254
  },
  {
    "word": "me",
    "start": 50.254,
    "end": 50.446
  },
  {
    "word": "bhej",
    "start": 50.446,
    "end": 50.83
  },
  {
    "word": "doonga!",
    "start": 50.83,
    "end": 51.502
  },
  {
    "word": "Aur",
    "start": 51.502,
    "end": 51.79
  },
  {
    "word": "haan,",
    "start": 51.79,
    "end": 52.27
  },
  {
    "word": "follow",
    "start": 52.27,
    "end": 52.846
  },
  {
    "word": "karna",
    "start": 52.846,
    "end": 53.326
  },
  {
    "word": "mat",
    "start": 53.326,
    "end": 53.614
  },
  {
    "word": "bhoolna.",
    "start": 53.614,
    "end": 54.382
  }
];

export const MASTER_PHRASES: PhraseItem[] = [
  {
    "id": "phrase_0",
    "text": "Arre bro,",
    "startSec": 0.5,
    "endSec": 1.21,
    "theme": "INTRO_CYBER",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "Arre",
        "startSec": 0.5,
        "endSec": 0.855,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bro,",
        "startSec": 0.855,
        "endSec": 1.21,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_1",
    "text": "kya tumhe pata hai",
    "startSec": 1.21,
    "endSec": 2.542,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "kya",
        "startSec": 1.21,
        "endSec": 1.477,
        "style": "italic_serif",
        "isHero": true
      },
      {
        "word": "tumhe",
        "startSec": 1.477,
        "endSec": 1.921,
        "style": "default",
        "isHero": false
      },
      {
        "word": "pata",
        "startSec": 1.921,
        "endSec": 2.276,
        "style": "italic_serif",
        "isHero": true
      },
      {
        "word": "hai",
        "startSec": 2.276,
        "endSec": 2.542,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_2",
    "text": "ye video jo tum",
    "startSec": 2.542,
    "endSec": 3.608,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ye",
        "startSec": 2.542,
        "endSec": 2.72,
        "style": "default",
        "isHero": false
      },
      {
        "word": "video",
        "startSec": 2.72,
        "endSec": 3.164,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "jo",
        "startSec": 3.164,
        "endSec": 3.342,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tum",
        "startSec": 3.342,
        "endSec": 3.608,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_3",
    "text": "screen pe dekh rahe",
    "startSec": 3.608,
    "endSec": 5.029,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "screen",
        "startSec": 3.608,
        "endSec": 4.141,
        "style": "default",
        "isHero": true
      },
      {
        "word": "pe",
        "startSec": 4.141,
        "endSec": 4.318,
        "style": "default",
        "isHero": false
      },
      {
        "word": "dekh",
        "startSec": 4.318,
        "endSec": 4.674,
        "style": "italic_serif",
        "isHero": true
      },
      {
        "word": "rahe",
        "startSec": 4.674,
        "endSec": 5.029,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_4",
    "text": "ho,",
    "startSec": 5.029,
    "endSec": 5.295,
    "theme": "INTRO_CYBER",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "ho,",
        "startSec": 5.029,
        "endSec": 5.295,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_5",
    "text": "isse kisi human ne",
    "startSec": 5.295,
    "endSec": 6.627,
    "theme": "INTRO_CYBER",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "isse",
        "startSec": 5.295,
        "endSec": 5.65,
        "style": "default",
        "isHero": false
      },
      {
        "word": "kisi",
        "startSec": 5.65,
        "endSec": 6.006,
        "style": "default",
        "isHero": false
      },
      {
        "word": "human",
        "startSec": 6.006,
        "endSec": 6.45,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "ne",
        "startSec": 6.45,
        "endSec": 6.627,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_6",
    "text": "record ya edit nahi",
    "startSec": 6.627,
    "endSec": 8.048,
    "theme": "SOLUTION_NEON",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "record",
        "startSec": 6.627,
        "endSec": 7.16,
        "style": "default",
        "isHero": true
      },
      {
        "word": "ya",
        "startSec": 7.16,
        "endSec": 7.338,
        "style": "default",
        "isHero": false
      },
      {
        "word": "edit",
        "startSec": 7.338,
        "endSec": 7.693,
        "style": "default",
        "isHero": false
      },
      {
        "word": "nahi",
        "startSec": 7.693,
        "endSec": 8.048,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_7",
    "text": "kiya?",
    "startSec": 8.048,
    "endSec": 8.492,
    "theme": "SOLUTION_NEON",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "kiya?",
        "startSec": 8.048,
        "endSec": 8.492,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_8",
    "text": "Ye script AI ne",
    "startSec": 8.842,
    "endSec": 10.054,
    "theme": "SOLUTION_NEON",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "Ye",
        "startSec": 8.842,
        "endSec": 9.044,
        "style": "default",
        "isHero": false
      },
      {
        "word": "script",
        "startSec": 9.044,
        "endSec": 9.65,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "AI",
        "startSec": 9.65,
        "endSec": 9.852,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "ne",
        "startSec": 9.852,
        "endSec": 10.054,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_9",
    "text": "likhi hai,",
    "startSec": 10.054,
    "endSec": 10.962,
    "theme": "SOLUTION_NEON",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "likhi",
        "startSec": 10.054,
        "endSec": 10.558,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai,",
        "startSec": 10.558,
        "endSec": 10.962,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_10",
    "text": "ye voice neural network",
    "startSec": 10.962,
    "endSec": 12.982,
    "theme": "SOLUTION_NEON",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "ye",
        "startSec": 10.962,
        "endSec": 11.164,
        "style": "default",
        "isHero": false
      },
      {
        "word": "voice",
        "startSec": 11.164,
        "endSec": 11.669,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "neural",
        "startSec": 11.669,
        "endSec": 12.275,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "network",
        "startSec": 12.275,
        "endSec": 12.982,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_11",
    "text": "se generate hui hai,",
    "startSec": 12.982,
    "endSec": 14.698,
    "theme": "EDITORIAL_BW",
    "layout": "EDITORIAL_BLOCK",
    "words": [
      {
        "word": "se",
        "startSec": 12.982,
        "endSec": 13.184,
        "style": "default",
        "isHero": false
      },
      {
        "word": "generate",
        "startSec": 13.184,
        "endSec": 13.991,
        "style": "default",
        "isHero": true
      },
      {
        "word": "hui",
        "startSec": 13.991,
        "endSec": 14.294,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai,",
        "startSec": 14.294,
        "endSec": 14.698,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_12",
    "text": "ye 3D Three.js kinetic",
    "startSec": 15.048,
    "endSec": 17.328,
    "theme": "EDITORIAL_BW",
    "layout": "EDITORIAL_BLOCK",
    "words": [
      {
        "word": "ye",
        "startSec": 15.048,
        "endSec": 15.288,
        "style": "default",
        "isHero": false
      },
      {
        "word": "3D",
        "startSec": 15.288,
        "endSec": 15.528,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "Three.js",
        "startSec": 15.528,
        "endSec": 16.488,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "kinetic",
        "startSec": 16.488,
        "endSec": 17.328,
        "style": "gold_luxury",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_13",
    "text": "typography code se render",
    "startSec": 17.328,
    "endSec": 19.968,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "typography",
        "startSec": 17.328,
        "endSec": 18.528,
        "style": "gold_luxury",
        "isHero": true
      },
      {
        "word": "code",
        "startSec": 18.528,
        "endSec": 19.008,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "se",
        "startSec": 19.008,
        "endSec": 19.248,
        "style": "default",
        "isHero": false
      },
      {
        "word": "render",
        "startSec": 19.248,
        "endSec": 19.968,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_14",
    "text": "hui hai,",
    "startSec": 19.968,
    "endSec": 20.808,
    "theme": "RED_ALERT",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "hui",
        "startSec": 19.968,
        "endSec": 20.328,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai,",
        "startSec": 20.328,
        "endSec": 20.808,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_15",
    "text": "aur ye video mere",
    "startSec": 21.158,
    "endSec": 22.546,
    "theme": "RED_ALERT",
    "layout": "DIAGONAL_CUT",
    "words": [
      {
        "word": "aur",
        "startSec": 21.158,
        "endSec": 21.455,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ye",
        "startSec": 21.455,
        "endSec": 21.654,
        "style": "default",
        "isHero": false
      },
      {
        "word": "video",
        "startSec": 21.654,
        "endSec": 22.149,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "mere",
        "startSec": 22.149,
        "endSec": 22.546,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_16",
    "text": "laptop band hone ke",
    "startSec": 22.546,
    "endSec": 24.132,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "laptop",
        "startSec": 22.546,
        "endSec": 23.141,
        "style": "red_danger",
        "isHero": true
      },
      {
        "word": "band",
        "startSec": 23.141,
        "endSec": 23.538,
        "style": "red_danger",
        "isHero": true
      },
      {
        "word": "hone",
        "startSec": 23.538,
        "endSec": 23.934,
        "style": "default",
        "isHero": false
      },
      {
        "word": "ke",
        "startSec": 23.934,
        "endSec": 24.132,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_17",
    "text": "baad cloud se khud",
    "startSec": 24.132,
    "endSec": 25.62,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "baad",
        "startSec": 24.132,
        "endSec": 24.529,
        "style": "default",
        "isHero": false
      },
      {
        "word": "cloud",
        "startSec": 24.529,
        "endSec": 25.025,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "se",
        "startSec": 25.025,
        "endSec": 25.223,
        "style": "default",
        "isHero": false
      },
      {
        "word": "khud",
        "startSec": 25.223,
        "endSec": 25.62,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_18",
    "text": "upload ho rahi hai!",
    "startSec": 25.62,
    "endSec": 27.206,
    "theme": "CRAZY_SPEED_PURPLE",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "upload",
        "startSec": 25.62,
        "endSec": 26.215,
        "style": "default",
        "isHero": true
      },
      {
        "word": "ho",
        "startSec": 26.215,
        "endSec": 26.413,
        "style": "default",
        "isHero": false
      },
      {
        "word": "rahi",
        "startSec": 26.413,
        "endSec": 26.809,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai!",
        "startSec": 26.809,
        "endSec": 27.206,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_19",
    "text": "Crazy lag raha hai",
    "startSec": 27.556,
    "endSec": 29.251,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "Crazy",
        "startSec": 27.556,
        "endSec": 28.121,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "lag",
        "startSec": 28.121,
        "endSec": 28.46,
        "style": "default",
        "isHero": false
      },
      {
        "word": "raha",
        "startSec": 28.46,
        "endSec": 28.912,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hai",
        "startSec": 28.912,
        "endSec": 29.251,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_20",
    "text": "na bro?",
    "startSec": 29.251,
    "endSec": 29.929,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "na",
        "startSec": 29.251,
        "endSec": 29.477,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bro?",
        "startSec": 29.477,
        "endSec": 29.929,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_21",
    "text": "Ab se roz ek",
    "startSec": 29.929,
    "endSec": 30.946,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "Ab",
        "startSec": 29.929,
        "endSec": 30.155,
        "style": "default",
        "isHero": false
      },
      {
        "word": "se",
        "startSec": 30.155,
        "endSec": 30.381,
        "style": "default",
        "isHero": false
      },
      {
        "word": "roz",
        "startSec": 30.381,
        "endSec": 30.72,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "ek",
        "startSec": 30.72,
        "endSec": 30.946,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_22",
    "text": "aisi hi video bina",
    "startSec": 30.946,
    "endSec": 32.64,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "aisi",
        "startSec": 30.946,
        "endSec": 31.397,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hi",
        "startSec": 31.397,
        "endSec": 31.623,
        "style": "default",
        "isHero": false
      },
      {
        "word": "video",
        "startSec": 31.623,
        "endSec": 32.188,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "bina",
        "startSec": 32.188,
        "endSec": 32.64,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_23",
    "text": "ungli hilaye post hogi!",
    "startSec": 32.64,
    "endSec": 34.9,
    "theme": "TECH_EXPAND_CYAN",
    "layout": "SPLIT_ROW",
    "words": [
      {
        "word": "ungli",
        "startSec": 32.64,
        "endSec": 33.205,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "hilaye",
        "startSec": 33.205,
        "endSec": 33.883,
        "style": "default",
        "isHero": true
      },
      {
        "word": "post",
        "startSec": 33.883,
        "endSec": 34.335,
        "style": "default",
        "isHero": false
      },
      {
        "word": "hogi!",
        "startSec": 34.335,
        "endSec": 34.9,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_24",
    "text": "Agar tum bhi apna",
    "startSec": 35.25,
    "endSec": 36.486,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "Agar",
        "startSec": 35.25,
        "endSec": 35.603,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tum",
        "startSec": 35.603,
        "endSec": 35.868,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhi",
        "startSec": 35.868,
        "endSec": 36.133,
        "style": "default",
        "isHero": false
      },
      {
        "word": "apna",
        "startSec": 36.133,
        "endSec": 36.486,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_25",
    "text": "pura content creation autopilot",
    "startSec": 36.486,
    "endSec": 38.957,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "pura",
        "startSec": 36.486,
        "endSec": 36.839,
        "style": "default",
        "isHero": false
      },
      {
        "word": "content",
        "startSec": 36.839,
        "endSec": 37.457,
        "style": "default",
        "isHero": true
      },
      {
        "word": "creation",
        "startSec": 37.457,
        "endSec": 38.163,
        "style": "default",
        "isHero": true
      },
      {
        "word": "autopilot",
        "startSec": 38.163,
        "endSec": 38.957,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_26",
    "text": "pe daalna chahte ho,",
    "startSec": 38.957,
    "endSec": 40.458,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "pe",
        "startSec": 38.957,
        "endSec": 39.134,
        "style": "default",
        "isHero": false
      },
      {
        "word": "daalna",
        "startSec": 39.134,
        "endSec": 39.664,
        "style": "default",
        "isHero": true
      },
      {
        "word": "chahte",
        "startSec": 39.664,
        "endSec": 40.193,
        "style": "default",
        "isHero": true
      },
      {
        "word": "ho,",
        "startSec": 40.193,
        "endSec": 40.458,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_27",
    "text": "to mujhe follow karke",
    "startSec": 40.808,
    "endSec": 42.567,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "to",
        "startSec": 40.808,
        "endSec": 41.003,
        "style": "default",
        "isHero": false
      },
      {
        "word": "mujhe",
        "startSec": 41.003,
        "endSec": 41.492,
        "style": "default",
        "isHero": false
      },
      {
        "word": "follow",
        "startSec": 41.492,
        "endSec": 42.078,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "karke",
        "startSec": 42.078,
        "endSec": 42.567,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_28",
    "text": "comment me 'AI CODE'",
    "startSec": 42.567,
    "endSec": 44.228,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "comment",
        "startSec": 42.567,
        "endSec": 43.251,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "me",
        "startSec": 43.251,
        "endSec": 43.446,
        "style": "default",
        "isHero": false
      },
      {
        "word": "'AI",
        "startSec": 43.446,
        "endSec": 43.739,
        "style": "cyan_neon",
        "isHero": true
      },
      {
        "word": "CODE'",
        "startSec": 43.739,
        "endSec": 44.228,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_29",
    "text": "likh do,",
    "startSec": 44.228,
    "endSec": 44.912,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "likh",
        "startSec": 44.228,
        "endSec": 44.619,
        "style": "default",
        "isHero": false
      },
      {
        "word": "do,",
        "startSec": 44.619,
        "endSec": 44.912,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_30",
    "text": "main is pure zero-cost",
    "startSec": 45.262,
    "endSec": 47.086,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "main",
        "startSec": 45.262,
        "endSec": 45.646,
        "style": "default",
        "isHero": false
      },
      {
        "word": "is",
        "startSec": 45.646,
        "endSec": 45.838,
        "style": "default",
        "isHero": false
      },
      {
        "word": "pure",
        "startSec": 45.838,
        "endSec": 46.222,
        "style": "default",
        "isHero": false
      },
      {
        "word": "zero-cost",
        "startSec": 46.222,
        "endSec": 47.086,
        "style": "green_emerald",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_31",
    "text": "pipeline ka source code",
    "startSec": 47.086,
    "endSec": 49.006,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "pipeline",
        "startSec": 47.086,
        "endSec": 47.854,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "ka",
        "startSec": 47.854,
        "endSec": 48.046,
        "style": "default",
        "isHero": false
      },
      {
        "word": "source",
        "startSec": 48.046,
        "endSec": 48.622,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "code",
        "startSec": 48.622,
        "endSec": 49.006,
        "style": "cyan_neon",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_32",
    "text": "aur tutorial DM me",
    "startSec": 49.006,
    "endSec": 50.446,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "aur",
        "startSec": 49.006,
        "endSec": 49.294,
        "style": "default",
        "isHero": false
      },
      {
        "word": "tutorial",
        "startSec": 49.294,
        "endSec": 50.062,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "DM",
        "startSec": 50.062,
        "endSec": 50.254,
        "style": "green_emerald",
        "isHero": true
      },
      {
        "word": "me",
        "startSec": 50.254,
        "endSec": 50.446,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_33",
    "text": "bhej doonga!",
    "startSec": 50.446,
    "endSec": 51.502,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "bhej",
        "startSec": 50.446,
        "endSec": 50.83,
        "style": "default",
        "isHero": false
      },
      {
        "word": "doonga!",
        "startSec": 50.83,
        "endSec": 51.502,
        "style": "default",
        "isHero": true
      }
    ]
  },
  {
    "id": "phrase_34",
    "text": "Aur haan,",
    "startSec": 51.502,
    "endSec": 52.27,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "SINGLE_SLAM",
    "words": [
      {
        "word": "Aur",
        "startSec": 51.502,
        "endSec": 51.79,
        "style": "default",
        "isHero": false
      },
      {
        "word": "haan,",
        "startSec": 51.79,
        "endSec": 52.27,
        "style": "default",
        "isHero": false
      }
    ]
  },
  {
    "id": "phrase_35",
    "text": "follow karna mat bhoolna.",
    "startSec": 52.27,
    "endSec": 54.382,
    "theme": "LUXURY_GOLD_CTA",
    "layout": "HERO_STACK",
    "words": [
      {
        "word": "follow",
        "startSec": 52.27,
        "endSec": 52.846,
        "style": "purple_violet",
        "isHero": true
      },
      {
        "word": "karna",
        "startSec": 52.846,
        "endSec": 53.326,
        "style": "default",
        "isHero": false
      },
      {
        "word": "mat",
        "startSec": 53.326,
        "endSec": 53.614,
        "style": "default",
        "isHero": false
      },
      {
        "word": "bhoolna.",
        "startSec": 53.614,
        "endSec": 54.382,
        "style": "default",
        "isHero": true
      }
    ]
  }
];
