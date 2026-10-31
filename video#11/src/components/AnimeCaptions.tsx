import React from 'react';
import timeline from '../data/timeline.json';

interface AnimeCaptionsProps {
  currentSec: number;
}

export const AnimeCaptions: React.FC<AnimeCaptionsProps> = ({ currentSec }) => {
  const words = timeline.words;

  // Find active word index
  const activeIndex = words.findIndex(
    (w) => currentSec >= w.s && currentSec <= w.e + 0.15
  );

  if (activeIndex === -1) {
    const lastPast = words.reduce((last, w, i) => (w.s <= currentSec ? i : last), -1);
    if (lastPast === -1) return null;
  }

  const currentIdx = activeIndex !== -1 ? activeIndex : Math.max(0, words.findIndex(w => w.s > currentSec) - 1);

  // Group into sliding window of 3 words centered around currentIdx
  const startIdx = Math.max(0, currentIdx - 1);
  const endIdx = Math.min(words.length, startIdx + 3);
  const visibleWords = words.slice(startIdx, endIdx);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        left: 40,
        right: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
          padding: '16px 36px',
          background: 'rgba(10, 9, 18, 0.85)',
          backdropFilter: 'blur(16px)',
          borderRadius: 24,
          border: '2px solid rgba(255, 230, 0, 0.6)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 230, 0, 0.25)',
        }}
      >
        {visibleWords.map((word, i) => {
          const globalIdx = startIdx + i;
          const isActive = globalIdx === currentIdx;
          const isPassed = globalIdx < currentIdx;

          return (
            <span
              key={`${word.w}-${globalIdx}`}
              style={{
                fontFamily: '"Montserrat", "Arial Black", Impact, sans-serif',
                fontSize: isActive ? 52 : 44,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 2,
                margin: '0 8px',
                color: isActive ? '#FFE600' : isPassed ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                textShadow: isActive
                  ? '0 0 24px rgba(255, 230, 0, 0.9), 0 4px 8px #000'
                  : '0 2px 4px #000',
                transform: isActive ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.08s ease-out',
                display: 'inline-block',
              }}
            >
              {word.w}
            </span>
          );
        })}
      </div>
    </div>
  );
};
