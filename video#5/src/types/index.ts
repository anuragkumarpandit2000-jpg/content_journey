export type RouteId = 
  | 'meta-cyber'         // Route 1: Video #5 Meta AI / Neon Wireframe / Terminal B-Roll
  | 'brutalist-swiss'    // Route 2: Minimalist Monospace / High Contrast / Orange Accents
  | 'cinematic-dark'     // Route 3: 35mm Grain / Slate & Blood Red / Investigation
  | 'luxury-editorial'   // Route 4: Modern Serif / Obsidian & Champagne Gold / Dust Particles
  | 'retro-terminal'     // Route 5: Phosphor CRT / Scanlines / Green Terminal / Glitch
  | 'spatial-glass';     // Route 6: Apple Glassmorphism / Frosted Blur / Studio Lighting

export interface WordTiming {
  word: string;
  start: number;
  end: number;
}

export interface PhraseKeyword {
  word: string;
  colorType: 'cyan_neon' | 'red_danger' | 'gold_luxury' | 'green_emerald' | 'purple_violet' | 'italic_serif';
}

export interface MasterPhrase {
  id: string;
  text: string;
  startSec: number;
  endSec: number;
  theme: string;
  keywords: PhraseKeyword[];
}

export interface RouteProps {
  routeId?: RouteId;
  phrases?: MasterPhrase[];
  fps?: number;
}
