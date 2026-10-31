import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import timeline from '../data/timeline.json';

interface WordCaptionsProps {
  currentSec: number;
}

export const WordCaptions: React.FC<WordCaptionsProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = timeline.words;
  // Find current active word index
  let activeIndex = words.findIndex((w) => currentSec >= w.s && currentSec < w.e + 0.15);
  if (activeIndex < 0) {
    // If between words, keep the latest word
    activeIndex = words.findIndex((w) => currentSec < w.s);
    activeIndex = activeIndex > 0 ? activeIndex - 1 : 0;
  }

  // 3-word chunking window
  const chunkSize = 3;
  const chunkStart = Math.floor(activeIndex / chunkSize) * chunkSize;
  const currentChunk = words.slice(chunkStart, chunkStart + chunkSize);

  return (
    <div
      style={{
        position: 'absolute',
        top: 1530,
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
          config: { damping: 14, stiffness: 240 },
        });

        return (
          <div
            key={chunkStart + idx}
            style={{
              transform: `scale(${isCurrentWord ? interpolate(pop, [0, 1], [0.85, 1.08]) : 1.0})`,
              padding: '12px 24px',
              borderRadius: 16,
              backgroundColor: isCurrentWord ? '#FFC531' : 'rgba(24, 24, 27, 0.85)',
              border: isCurrentWord ? '3px solid #ffffff' : '2px solid rgba(255, 255, 255, 0.12)',
              boxShadow: isCurrentWord
                ? '0 10px 30px rgba(255, 197, 49, 0.45)'
                : '0 8px 24px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                color: isCurrentWord ? '#09090b' : '#f4f4f5',
                fontSize: 48,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontFamily: 'Impact, "Arial Black", -apple-system, sans-serif',
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
