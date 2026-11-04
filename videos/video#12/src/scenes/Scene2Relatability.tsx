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
        backgroundColor: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Broken Telephone Wire Visual */}
      <div
        style={{
          position: 'absolute',
          top: 140,
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#7F1D1D',
          border: '1.5px solid #EF4444',
          color: '#FEE2E2',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        ✦ THE AWKWARD 3-SECOND SILENCE ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#F87171',
          textTransform: 'uppercase',
          maxWidth: 920,
          transform: `translateY(${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [40, 0])}px)`,
        }}
      >
        OLD VOICE BOTS TALK LIKE BROKEN ROBOTS
      </div>

      {/* Frustrated Customer Card Mockup */}
      <div
        style={{
          marginTop: 40,
          backgroundColor: '#1E293B',
          border: '1px solid #475569',
          borderRadius: 24,
          padding: '30px 45px',
          maxWidth: 820,
          textAlign: 'center',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
          transform: `scale(${spring({ frame: frame - 20, fps })})`,
        }}
      >
        <div style={{ fontSize: 26, color: '#94A3B8', fontWeight: 600, lineHeight: 1.5 }}>
          User: "Mujhe appointment book karni hai..."
        </div>
        <div style={{ color: '#EF4444', fontSize: 32, fontWeight: 800, marginTop: 16 }}>
          ⏳ 3.4 seconds awkward delay...
        </div>
        <div style={{ color: '#F1F5F9', fontSize: 24, fontStyle: 'italic', marginTop: 12 }}>
          Bot: "I... did... not... understand... please repeat."
        </div>
      </div>
    </div>
  );
};
