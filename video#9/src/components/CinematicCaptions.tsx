import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import timeline from '../data/timeline.json';

interface CinematicCaptionsProps {
  currentSec: number;
}

export const CinematicCaptions: React.FC<CinematicCaptionsProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = timeline.words;
  let activeIndex = words.findIndex((w) => currentSec >= w.s && currentSec < w.e + 0.15);
  if (activeIndex < 0) {
    activeIndex = words.findIndex((w) => currentSec < w.s);
    activeIndex = activeIndex > 0 ? activeIndex - 1 : 0;
  }

  const chunkSize = 3;
  const chunkStart = Math.floor(activeIndex / chunkSize) * chunkSize;
  const currentChunk = words.slice(chunkStart, chunkStart + chunkSize);

  return (
    <div
      style={{
        position: 'absolute',
        top: 1540,
        left: 40,
        right: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        zIndex: 60,
      }}
    >
      {currentChunk.map((item, idx) => {
        const isCurrentWord = chunkStart + idx === activeIndex;
        const wordStartFrame = item.s * fps;
        const pop = spring({
          frame: frame - wordStartFrame,
          fps,
          config: { damping: 14, stiffness: 260 },
        });

        return (
          <div
            key={chunkStart + idx}
            style={{
              transform: `scale(${isCurrentWord ? interpolate(pop, [0, 1], [0.88, 1.1]) : 1.0})`,
              padding: '12px 26px',
              borderRadius: 18,
              background: isCurrentWord
                ? 'linear-gradient(135deg, #facc15 0%, #f97316 100%)'
                : 'rgba(9, 9, 11, 0.85)',
              border: isCurrentWord
                ? '3px solid #ffffff'
                : '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: isCurrentWord
                ? '0 10px 35px rgba(249, 115, 22, 0.55), 0 0 20px rgba(250, 204, 21, 0.4)'
                : '0 8px 24px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: isCurrentWord ? '#050508' : '#ffffff',
                fontSize: 50,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontFamily: 'Impact, "Arial Black", sans-serif',
              }}
            >
              {item.w}
            </span>
          </div>
        );
      })}
    </div>
  );
};
