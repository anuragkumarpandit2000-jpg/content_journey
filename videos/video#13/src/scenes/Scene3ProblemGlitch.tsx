import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shakeX = Math.sin(frame * 2.8) * 8;
  const shakeY = Math.cos(frame * 3.1) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0B0F19',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      <div
        style={{
          backgroundColor: '#991B1B',
          color: '#FFFFFF',
          padding: '12px 32px',
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '0.15em',
          marginBottom: 30,
        }}
      >
        🛑 CODEBASE HALLUCINATION
      </div>

      <h1
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#EF4444',
          textAlign: 'center',
          maxWidth: 900,
          textShadow: '0 0 35px rgba(239, 68, 68, 0.6)',
        }}
      >
        COPY-PASTING BROKEN CODE IN CIRCLES
      </h1>

      <div
        style={{
          marginTop: 35,
          width: 780,
          backgroundColor: '#1E293B',
          border: '1.5px solid #EF4444',
          borderRadius: 20,
          padding: '24px 32px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 22,
          color: '#F87171',
          lineHeight: 1.6,
        }}
      >
        <div>❌ TypeError: Cannot read property 'execute' of undefined</div>
        <div style={{ color: '#94A3B8', marginTop: 10 }}>Standard chat AI can't read your terminal, can't run tests, and can't self-heal errors!</div>
      </div>
    </div>
  );
};
