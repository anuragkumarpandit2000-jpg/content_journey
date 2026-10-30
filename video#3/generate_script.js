const fs = require('fs');
const path = require('path');

const words = JSON.parse(fs.readFileSync('D:/anurag/content_journey/video#3/words.json', 'utf8'));

function getTheme(time) {
  if (time < 7.5) return 'INTRO_CYBER';
  if (time < 14.5) return 'RED_ALERT';
  if (time < 19.5) return 'SOLUTION_NEON';
  if (time < 25.0) return 'EDITORIAL_BW';
  if (time < 33.0) return 'FOOD_PLATE_AMBER';
  if (time < 38.0) return 'BROTHERS_DUO';
  if (time < 44.0) return 'EQUAL_BALANCE_GREEN';
  if (time < 53.5) return 'TECH_EXPAND_CYAN';
  if (time < 61.0) return 'CRAZY_SPEED_PURPLE';
  return 'LUXURY_GOLD_CTA';
}

function getWordStyle(rawWord) {
  const clean = rawWord.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (['full', 'pareshaan', 'khatam', 'bhar', 'pareshan'].includes(clean)) return 'red_danger';
  if (['bro', 'solution', 'dhoondhi', 'dhoondha', 'expand', 'crazy'].includes(clean)) return 'cyan_neon';
  if (['partition', 'plate', 'khaana', 'c', 'cdrive', 'd', 'e', 'length', 'size'].includes(clean)) return 'gold_luxury';
  if (['equal', 'available', 'free', 'space', 'details', 'dm', 'kval'].includes(clean)) return 'green_emerald';
  if (['bhai', 'bhaiyon', 'follow', 'comment', 'drive', 'lek'].includes(clean)) return 'purple_violet';
  if (['ruko', 'batata', 'actually', 'already', 'almost', 'obvious', 'obviously'].includes(clean)) return 'italic_serif';
  return 'default';
}

let phrases = [];
let current = [];

for (let i = 0; i < words.length; i++) {
  const w = words[i];
  current.push(w);
  const next = words[i+1];
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
        isHero
      };
    });

    let layout = 'HERO_STACK';
    if (phraseWords.length <= 2) layout = 'SINGLE_SLAM';
    else if (theme === 'EDITORIAL_BW') layout = 'EDITORIAL_BLOCK';
    else if (theme === 'RED_ALERT') layout = 'DIAGONAL_CUT';
    else if (theme === 'TECH_EXPAND_CYAN') layout = 'SPLIT_ROW';

    phrases.push({
      id: 'phrase_' + phrases.length,
      text: current.map(x => x.word).join(' '),
      startSec,
      endSec,
      theme,
      layout,
      words: phraseWords
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

fs.writeFileSync('D:/anurag/content_journey/video#3/src/data/typographyData.ts', fileContent, 'utf8');
console.log('Successfully wrote typographyData.ts with ' + phrases.length + ' phrases.');
