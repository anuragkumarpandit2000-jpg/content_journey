import React from 'react';
import timeline from '../data/timeline.json';

interface AnimeSpeedLinesProps {
  currentSec: number;
}

export const AnimeSpeedLines: React.FC<AnimeSpeedLinesProps> = ({ currentSec }) => {
  // Find current word
  const words = timeline.words || [];
  const currentWord = words.find((w) => currentSec >= w.s && currentSec <= w.e);
  const wordText = (currentWord?.w || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  // High intensity triggers
  const highImpactWords = ['goggins', 'david', 'quote', '40', 'percent', 'rule', 'mind', 'brutal', 'stop', 'quit'];
  const isImpact = highImpactWords.includes(wordText);

  if (!isImpact) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 15,
        mixBlendMode: 'screen',
        opacity: 0.55,
      }}
    >
      <svg viewBox="0 0 1080 1920" width="1080" height="1920">
        {/* Radial Manga Speed Lines centered around head (540, 850) */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const r1 = 340 + (i % 3) * 60;
          const r2 = 1200;
          const x1 = 540 + Math.cos(angle) * r1;
          const y1 = 850 + Math.sin(angle) * r1;
          const x2 = 540 + Math.cos(angle) * r2;
          const y2 = 850 + Math.sin(angle) * r2;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FFE600"
              strokeWidth={i % 2 === 0 ? 5 : 2}
              strokeOpacity={0.8}
            />
          );
        })}
      </svg>
    </div>
  );
};
