import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TIMELINE_SEGMENTS } from '../data/timelineData';

export const DynamicCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeSegment = TIMELINE_SEGMENTS.find(
    (seg) => frame >= seg.startFrame && frame < seg.endFrame
  );

  if (!activeSegment) return null;

  const words = activeSegment.hinglish.split(' ');

  const pillSpring = spring({
    frame: frame - activeSegment.startFrame,
    fps,
    config: { damping: 14, stiffness: 160 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 120,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        pointerEvents: 'none',
        padding: '0 40px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(16px)',
          borderRadius: 24,
          padding: '18px 36px',
          border: '1.5px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
          transform: `scale(${interpolate(pillSpring, [0, 1], [0.88, 1])})`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 980,
        }}
      >
        {words.map((word, i) => {
          const upper = word.toUpperCase();
          const isKeyword = activeSegment.keywords.some((k) => upper.includes(k));

          return (
            <span
              key={i}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 32,
                fontWeight: isKeyword ? 900 : 700,
                color: isKeyword ? '#FACC15' : '#FFFFFF',
                textShadow: isKeyword
                  ? '0 0 20px rgba(250, 204, 21, 0.75)'
                  : 'none',
                letterSpacing: '0.02em',
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
