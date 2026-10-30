import fs from 'fs';
import path from 'path';

export function buildTypographyData(targetDir, totalDurationSec = 35) {
  const wordsPath = path.join(targetDir, 'words.json');
  const words = JSON.parse(fs.readFileSync(wordsPath, 'utf8'));

  function getTheme(time) {
    if (time < 6.0) return 'INTRO_CYBER';
    if (time < 11.5) return 'SOLUTION_NEON';
    if (time < 16.5) return 'EDITORIAL_BW';
    if (time < 22.0) return 'RED_ALERT';
    if (time < 27.5) return 'CRAZY_SPEED_PURPLE';
    if (time < 33.0) return 'TECH_EXPAND_CYAN';
    return 'LUXURY_GOLD_CTA';
  }

  function getWordStyle(rawWord) {
    const clean = rawWord.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (['laptop', 'band', 'khatam', 'full', 'alert'].includes(clean)) return 'red_danger';
    if (['bro', 'video', 'human', 'ai', 'code', 'autopilot', 'expand'].includes(clean)) return 'cyan_neon';
    if (['script', 'voice', 'neural', 'threejs', '3d', 'kinetic', 'typography'].includes(clean)) return 'gold_luxury';
    if (['zerocost', 'pipeline', 'source', 'tutorial', 'dm', 'free', 'equal'].includes(clean)) return 'green_emerald';
    if (['crazy', 'roz', 'comment', 'follow', 'ungli', 'cloud'].includes(clean)) return 'purple_violet';
    if (['kya', 'pata', 'dekh', 'actually', 'already', 'almost', 'obviously'].includes(clean)) return 'italic_serif';
    return 'default';
  }

  let phrases = [];
  let current = [];

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    current.push(w);
    const next = words[i + 1];
    const hasPause = next ? (next.start - w.end > 0.35) : true;
    const hasPunct = /[.,?!]$/.test(w.word);
    
    if (current.length >= 4 || hasPause || hasPunct || !next) {
      const startSec = current[0].start;
      const endSec = current[current.length - 1].end;
      const theme = getTheme(startSec);
      
      const phraseWords = current.map((item) => {
        const style = getWordStyle(item.word);
        const isHero = style !== 'default' || item.word.length >= 6;
        return {
          word: item.word,
          startSec: item.start,
          endSec: item.end,
          style,
          isHero,
        };
      });

      let layout = 'HERO_STACK';
      if (phraseWords.length <= 2) layout = 'SINGLE_SLAM';
      else if (theme === 'EDITORIAL_BW') layout = 'EDITORIAL_BLOCK';
      else if (theme === 'RED_ALERT') layout = 'DIAGONAL_CUT';
      else if (theme === 'TECH_EXPAND_CYAN') layout = 'SPLIT_ROW';

      phrases.push({
        id: `phrase_${phrases.length}`,
        text: current.map((x) => x.word).join(' '),
        startSec,
        endSec,
        theme,
        layout,
        words: phraseWords,
      });
      current = [];
    }
  }

  const fileContent = `export interface WordDetail {
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

export const ALL_WORDS = ${JSON.stringify(words, null, 2)};

export const MASTER_PHRASES: PhraseItem[] = ${JSON.stringify(phrases, null, 2)};
`;

  const outputPath = path.join(targetDir, 'src/data/typographyData.ts');
  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log(`[PIPELINE] Built typographyData.ts with ${phrases.length} phrases at ${outputPath}`);

  // Update Root.tsx with totalDuration in frames
  const fps = 30;
  const durationInFrames = Math.ceil((words[words.length - 1].end + 1.2) * fps);
  const rootPath = path.join(targetDir, 'src/Root.tsx');
  const rootContent = `import React from 'react';
import { Composition } from 'remotion';
import { MainReel } from './MainReel';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Reel"
        component={MainReel}
        durationInFrames={${durationInFrames}}
        fps={${fps}}
        width={1080}
        height={1920}
      />
    </>
  );
};
`;
  fs.writeFileSync(rootPath, rootContent, 'utf8');
  console.log(`[PIPELINE] Updated Root.tsx with durationInFrames=${durationInFrames} (${(durationInFrames/fps).toFixed(1)}s)`);

  // Update MainReel.tsx to point to staticFile('audio.mp3')
  const mainReelPath = path.join(targetDir, 'src/MainReel.tsx');
  if (fs.existsSync(mainReelPath)) {
    let mainReelCode = fs.readFileSync(mainReelPath, 'utf8');
    mainReelCode = mainReelCode.replace(/staticFile\('partition\.mp3'\)/g, "staticFile('audio.mp3')");
    fs.writeFileSync(mainReelPath, mainReelCode, 'utf8');
    console.log(`[PIPELINE] Updated MainReel.tsx audio src to staticFile('audio.mp3')`);
  }
}

if (process.argv[1] && process.argv[1].endsWith('3_build_typography_data.mjs')) {
  const target = process.argv[2] || 'D:/anurag/content_journey/video#5';
  buildTypographyData(target);
}
