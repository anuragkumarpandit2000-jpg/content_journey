import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene4SolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F0FDF4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Emerald Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #34D399 2px, transparent 2px)',
          backgroundSize: '44px 44px',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          padding: '14px 34px',
          borderRadius: 999,
          backgroundColor: '#059669',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.14em',
          marginBottom: 36,
          transform: `scale(${spring({ frame, fps })})`,
          boxShadow: '0 10px 25px rgba(5, 150, 105, 0.3)',
        }}
      >
        ✦ 100% OFFLINE FIX ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, Montserrat, sans-serif',
          fontSize: 110,
          lineHeight: 1.05,
          color: '#065F46',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          transform: `translateY(${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [50, 0])}px)`,
        }}
      >
        OLLAMA + 4-BIT GGUF
      </div>

      <div
        style={{
          display: 'flex',
          gap: 20,
          marginTop: 40,
        }}
      >
        <div style={{ background: '#059669', color: '#fff', padding: '16px 28px', borderRadius: 18, fontSize: 26, fontWeight: 800 }}>
          ✓ 100% FREE
        </div>
        <div style={{ background: '#065F46', color: '#fff', padding: '16px 28px', borderRadius: 18, fontSize: 26, fontWeight: 800 }}>
          ✓ ZERO LATENCY
        </div>
        <div style={{ background: '#047857', color: '#fff', padding: '16px 28px', borderRadius: 18, fontSize: 26, fontWeight: 800 }}>
          ✓ PRODUCTION READY
        </div>
      </div>
    </div>
  );
};
