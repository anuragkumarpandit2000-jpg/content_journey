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
        backgroundColor: '#18181B',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#4C1D95',
          border: '1.5px solid #8B5CF6',
          color: '#EDE9FE',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        ✦ THE MANUAL MODELING GRIND ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#E9D5FF',
          maxWidth: 920,
        }}
      >
        SPENDING 10+ HOURS EXTRUDING VERTICES?
      </div>

      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#09090B',
          borderRadius: 24,
          padding: '32px 40px',
          border: '1.5px solid #6B21A8',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ fontSize: 26, color: '#C084FC', fontWeight: 800 }}>
          ⏳ Traditional 3D Asset Pipeline:
        </div>
        <div style={{ fontSize: 22, color: '#A1A1AA', marginTop: 14, lineHeight: 1.6 }}>
          Blocking (3h) ➔ High-Poly Sculpting (4h) ➔ Manual Retopology (2h) ➔ UV Unwrapping & Substance Painter texturing (3h)!
        </div>
      </div>
    </div>
  );
};
