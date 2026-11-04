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
      <div
        style={{
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#831843',
          border: '1.5px solid #F43F5E',
          color: '#FFE4E6',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        ✦ THE REVENUE LEAK ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#FDA4AF',
          maxWidth: 920,
        }}
      >
        CLIENTS BUY FROM WHOEVER REPLIES FIRST
      </div>

      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#1E293B',
          borderRadius: 24,
          padding: '32px 40px',
          border: '1.5px solid #F43F5E',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ fontSize: 26, color: '#F87171', fontWeight: 800 }}>
          🕒 6 Hours Average Response Delay = 78% Lead Loss
        </div>
        <div style={{ fontSize: 22, color: '#94A3B8', marginTop: 14, lineHeight: 1.5 }}>
          Agar aap so rahe ho aur client WhatsApp par msg karta hai, agle 10 minute me wo aapke competitor ke paas chala jaata hai!
        </div>
      </div>
    </div>
  );
};
