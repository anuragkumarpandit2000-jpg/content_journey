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
        backgroundColor: '#030712',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      {/* Glitch CRT Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 6px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Red Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Top Warning Bar */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 28px',
          borderRadius: 12,
          backgroundColor: '#7F1D1D',
          border: '1px solid #DC2626',
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: '#EF4444',
            boxShadow: '0 0 12px #EF4444',
            opacity: frame % 14 < 7 ? 1 : 0.3,
          }}
        />
        <span
          style={{
            color: '#FEE2E2',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          CRITICAL THREAT TO YOUR PIPELINE
        </span>
      </div>

      <div
        style={{
          zIndex: 10,
          textAlign: 'center',
          maxWidth: 880,
        }}
      >
        <h2
          style={{
            fontFamily: 'Anton, Montserrat, sans-serif',
            fontSize: 104,
            lineHeight: 1.05,
            color: '#EF4444',
            textTransform: 'uppercase',
            marginBottom: 28,
            textShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
          }}
        >
          CLOUD OUTAGES & PRIVACY LEAKS
        </h2>
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1.5px solid rgba(239, 68, 68, 0.5)',
            borderRadius: 24,
            padding: '28px 40px',
            fontSize: 32,
            color: '#F87171',
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          Sensitive client code sent to external servers + hard API rate limits.
        </div>
      </div>
    </div>
  );
};
