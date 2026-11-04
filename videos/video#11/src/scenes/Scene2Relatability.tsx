import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FDF2F8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Pink Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #F472B6 2px, transparent 2px)',
          backgroundSize: '44px 44px',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          padding: '14px 34px',
          borderRadius: 999,
          backgroundColor: '#BE185D',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.14em',
          marginBottom: 36,
          transform: `scale(${spring({ frame, fps })})`,
          boxShadow: '0 10px 25px rgba(190, 24, 93, 0.3)',
        }}
      >
        ✦ CRITICAL REALITY CHECK ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, Montserrat, sans-serif',
          fontSize: 108,
          lineHeight: 1.05,
          color: '#0F172A',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          transform: `translateY(${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [50, 0])}px)`,
        }}
      >
        CLOUD LLMs ARE DRAINING YOUR WALLET
      </div>

      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 34,
          fontWeight: 700,
          color: '#BE185D',
          marginTop: 32,
          textAlign: 'center',
          maxWidth: 820,
          lineHeight: 1.4,
          transform: `scale(${spring({ frame: frame - 20, fps })})`,
        }}
      >
        OpenAI & Anthropic bills keep piling up every month
      </div>
    </div>
  );
};
