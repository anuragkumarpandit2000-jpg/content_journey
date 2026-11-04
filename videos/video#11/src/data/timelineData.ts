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
    "endFrame": 206,
    "hinglish": "Bhai! OpenAI aur Anthropic ke monthly API bills se agar aapka wallet khali ho raha hai, toh ye suno!",
    "keywords": [
      "OPENAI",
      "API BILLS",
      "WALLET",
      "KHALI"
    ]
  },
  {
    "id": 1,
    "startFrame": 206,
    "endFrame": 495,
    "hinglish": "Cloud LLMs expensive hote hain, internet down hote hi kaam band, aur aapka sensitive client data kisi aur ke server par chala jaata hai!",
    "keywords": [
      "EXPENSIVE",
      "INTERNET DOWN",
      "SENSITIVE DATA",
      "SERVER"
    ]
  },
  {
    "id": 2,
    "startFrame": 495,
    "endFrame": 869,
    "hinglish": "Solution hai Ollama aur GGUF 4-bit quantization! Aap apne normal PC par DeepSeek aur LLaMA 70B bilkul FREE aur offline run kar sakte ho!",
    "keywords": [
      "OLLAMA",
      "GGUF",
      "DEEPSEEK",
      "70B",
      "FREE",
      "OFFLINE"
    ]
  },
  {
    "id": 3,
    "startFrame": 869,
    "endFrame": 1197,
    "hinglish": "Sirf terminal me likho: ollama run deepseek-r1 ya llama3.3, aur zero latency ke saath unlimited code generation enjoy karo!",
    "keywords": [
      "TERMINAL",
      "ZERO LATENCY",
      "UNLIMITED",
      "CODE GENERATION"
    ]
  },
  {
    "id": 4,
    "startFrame": 1197,
    "endFrame": 1508,
    "hinglish": "Ye complete Local LLM setup guide aur hardware sizing cheat sheet bilkul FREE chahiye? Abhi comment karo LOCAL aur main direct DM me bhej doonga!",
    "keywords": [
      "FREE",
      "COMMENT",
      "LOCAL",
      "DIRECT DM"
    ]
  }
];
