import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { WORDS_TIMELINE, WordTiming } from '../data/timelineData';

export const DynamicCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find the word currently being spoken
  // Group words into phrases (2-4 words around current word)
  const currentWordIndex = WORDS_TIMELINE.findIndex(
    (w) => frame >= w.startFrame && frame <= w.endFrame
  );

  if (currentWordIndex === -1) {
    // If between words, check if recent word just finished
    const prevWord = [...WORDS_TIMELINE]
      .reverse()
      .find((w) => frame >= w.endFrame && frame <= w.endFrame + 12);
    if (!prevWord) return null;
  }

  const activeIndex =
    currentWordIndex !== -1
      ? currentWordIndex
      : WORDS_TIMELINE.findIndex(
          (w) => frame >= w.endFrame && frame <= w.endFrame + 12
        );

  if (activeIndex === -1) return null;

  // Window of words: 1 before, active, up to 2 after
  const startIndex = Math.max(0, activeIndex - 1);
  const endIndex = Math.min(WORDS_TIMELINE.length, activeIndex + 3);
  const displayWords = WORDS_TIMELINE.slice(startIndex, endIndex);

  // Keyword highlighting
  const getHighlightColor = (word: string): string => {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (['c', 'cdrive', 'full', 'pareshan', 'khatam'].includes(clean)) return '#EF4444'; // Red
    if (['bro', 'solution', 'dhoondha', 'crazy', 'expand'].includes(clean)) return '#38BDF8'; // Cyan
    if (['partition', 'plate', 'khana', 'drive'].includes(clean)) return '#FACC15'; // Gold
    if (['equal', 'available', 'free', 'dm', 'details'].includes(clean)) return '#10B981'; // Green
    if (['d', 'e', 'ddrive', 'edrive', 'follow'].includes(clean)) return '#EC4899'; // Pink
    return '#FFFFFF';
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 120,
        left: 0,
        width: '100%',
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
          padding: '12px 28px',
          maxWidth: '92%',
          backgroundColor: 'rgba(11, 15, 25, 0.88)',
          backdropFilter: 'blur(16px)',
          borderRadius: 24,
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)',
        }}
      >
        {displayWords.map((item, idx) => {
          const isCurrent =
            frame >= item.startFrame && frame <= item.endFrame;
          const wordColor = getHighlightColor(item.word);
          const scale = isCurrent
            ? spring({
                frame: frame - item.startFrame,
                fps,
                config: { damping: 10, mass: 0.6 },
              })
            : 1;

          return (
            <span
              key={`${item.word}-${item.startFrame}-${idx}`}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: isCurrent ? 44 : 36,
                fontWeight: 900,
                color: isCurrent ? wordColor : 'rgba(255, 255, 255, 0.65)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                transform: `scale(${scale})`,
                textShadow: isCurrent
                  ? `0 0 25px ${wordColor}88, 0 4px 10px rgba(0,0,0,0.8)`
                  : '0 2px 6px rgba(0,0,0,0.8)',
                transition: 'all 0.1s ease',
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
