import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "B H A I   L O G !"
  const letters = ['B', 'H', 'A', 'I', ' ', 'L', 'O', 'G', '!'];

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
          backgroundImage:
            'radial-gradient(circle, #E2E8F0 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px',
          opacity: 0.7,
        }}
      />

      {/* Decorative geometric badges */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 28px',
          borderRadius: 999,
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          transform: `translateY(${interpolate(frame, [0, 20], [-40, 0], { extrapolateRight: 'clamp' })}px)`,
          opacity: interpolate(frame, [0, 15], [0, 1]),
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#10B981',
            display: 'inline-block',
          }}
        />
        ATTENTION REEL
      </div>

      {/* Massive Bold Hook Typography */}
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
            return <div key={index} style={{ width: 36 }} />;
          }

          const delay = index * 2.2;
          const letterSpring = spring({
            frame: frame - delay,
            fps,
            config: {
              damping: 10,
              mass: 0.4,
              stiffness: 180,
            },
          });

          const scale = interpolate(letterSpring, [0, 1], [0.1, 1]);
          const opacity = interpolate(letterSpring, [0, 1], [0, 1]);
          const y = interpolate(letterSpring, [0, 1], [120, 0]);
          const rotate = interpolate(
            letterSpring,
            [0, 1],
            [(index % 2 === 0 ? -1 : 1) * 20, 0]
          );

          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                fontFamily: 'Anton, Montserrat, sans-serif',
                fontSize: 168,
                fontWeight: 900,
                color: index >= 4 ? '#3B82F6' : '#0F172A',
                transform: `scale(${scale}) translateY(${y}px) rotate(${rotate}deg)`,
                opacity,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                textShadow:
                  index >= 4
                    ? '0 20px 40px rgba(59, 130, 246, 0.25)'
                    : '0 20px 40px rgba(15, 23, 42, 0.12)',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Subtitle card */}
      <div
        style={{
          marginTop: 40,
          zIndex: 10,
          padding: '16px 36px',
          borderRadius: 20,
          background: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, Inter, sans-serif',
          fontSize: 36,
          fontWeight: 900,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transform: `scale(${spring({
            frame: frame - 22,
            fps,
            config: { damping: 12, stiffness: 120 },
          })})`,
          opacity: interpolate(frame, [22, 30], [0, 1], {
            extrapolateLeft: 'clamp',
          }),
          boxShadow: '0 15px 35px rgba(236, 72, 153, 0.35)',
        }}
      >
        KYA HAAL HAI?
      </div>

      {/* Corner editorial accents */}
      <div
        style={{
          position: 'absolute',
          bottom: 140,
          left: 60,
          fontSize: 18,
          fontWeight: 700,
          color: '#94A3B8',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        VOL. 04 / EXCLUSIVE GUIDE
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 140,
          right: 60,
          fontSize: 18,
          fontWeight: 700,
          color: '#94A3B8',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        100% WORKING TRICK
      </div>
    </div>
  );
};
