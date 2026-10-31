import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import timeline from '../data/timeline.json';

interface ComicCaptionsProps {
  currentSec: number;
}

export const ComicCaptions: React.FC<ComicCaptionsProps> = ({ currentSec }) => {
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
          config: { damping: 12, stiffness: 280 },
        });

        return (
          <div
            key={chunkStart + idx}
            style={{
              transform: `scale(${isCurrentWord ? interpolate(pop, [0, 1], [0.88, 1.15]) : 1.0})`,
              padding: '12px 26px',
              borderRadius: 18,
              backgroundColor: isCurrentWord ? '#ef4444' : '#facc15',
              border: '4px solid #09090b',
              boxShadow: isCurrentWord
                ? '8px 8px 0px #09090b'
                : '5px 5px 0px #09090b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: isCurrentWord ? '#ffffff' : '#09090b',
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
