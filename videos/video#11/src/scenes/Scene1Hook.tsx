import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const letters = ["S","T","O","P"," ","B","I","L","L","S","!"];

  const containerScale = interpolate(frame, [0, 60], [1, 1.05], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        transform: `scale(${containerScale})`,
      }}
    >
      {/* Background Graphic Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #E2E8F0 2px, transparent 2px)',
          backgroundSize: '48px 48px',
          opacity: 0.8,
        }}
      />

      {/* Top Geometric Badge */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 32px',
          borderRadius: 999,
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#10B981',
            display: 'inline-block',
            boxShadow: '0 0 12px #10B981',
          }}
        />
        LOCAL AI • ZERO CLOUD COST
      </div>

      {/* Massive Bold Hook Letter-by-Letter Typography */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {letters.map((char, index) => {
          if (char === ' ') {
            return <div key={index} style={{ width: 32 }} />;
          }

          const delay = index * 2.2;
          const letterSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 10, mass: 0.4, stiffness: 180 },
          });

          return (
            <span
              key={index}
              style={{
                fontFamily: 'Anton, Montserrat, sans-serif',
                fontSize: 116,
                fontWeight: 900,
                color: index % 3 === 0 ? '#8B5CF6' : '#0F172A',
                display: 'inline-block',
                transform: `scale(${interpolate(letterSpring, [0, 1], [0.1, 1])}) translateY(${interpolate(letterSpring, [0, 1], [40, 0])}px)`,
                opacity: interpolate(letterSpring, [0, 1], [0, 1]),
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Subtitle Punchline */}
      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 32,
          fontWeight: 800,
          color: '#64748B',
          marginTop: 28,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          zIndex: 10,
          transform: `scale(${spring({ frame: frame - 25, fps })})`,
        }}
      >
        RUN 70B & DEEPSEEK LOCALLY
      </div>
    </div>
  );
};
