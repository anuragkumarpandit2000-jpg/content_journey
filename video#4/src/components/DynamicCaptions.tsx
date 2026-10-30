import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TIMELINE_SEGMENTS } from '../data/timelineData';

export const DynamicCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find the active segment
  const activeSegment = TIMELINE_SEGMENTS.find(
    (seg) => frame >= seg.startFrame && frame < seg.endFrame
  );

  if (!activeSegment) {
    return null;
  }

  // During Scene 5 (Mobile tutorial 835 - 1340) and Scene 1 (0 - 75), keep captions compact at bottom
  const isTutorial = frame >= 835 && frame < 1340;
  const bottomPosition = isTutorial ? 60 : 160;

  // Censor "porn" -> "p*rn" if present in text
  const cleanText = activeSegment.hinglish.replace(/porn/gi, 'p*rn');
  const words = cleanText.split(' ');

  // Animate the entire caption pill
  const pillSpring = spring({
    frame: frame - activeSegment.startFrame,
    fps,
    config: { damping: 14, stiffness: 160 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: bottomPosition,
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
          backgroundColor: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(12px)',
          borderRadius: 22,
          padding: '16px 32px',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
          transform: `scale(${interpolate(pillSpring, [0, 1], [0.85, 1])})`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 960,
        }}
      >
        {words.map((word, i) => {
          const upper = word.toUpperCase();
          const isKeyword = activeSegment.keywords.some((k) =>
            upper.includes(k.toUpperCase())
          );

          return (
            <span
              key={i}
              style={{
                fontFamily: 'Montserrat, Inter, sans-serif',
                fontSize: 30,
                fontWeight: isKeyword ? 900 : 700,
                color: isKeyword ? '#FACC15' : '#FFFFFF',
                textShadow: isKeyword
                  ? '0 0 16px rgba(250, 204, 21, 0.6)'
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
