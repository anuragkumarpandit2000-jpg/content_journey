import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = Math.sin(frame * 0.2) * 5;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0B141A',
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
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 24,
          fontWeight: 800,
          color: '#25D366',
          letterSpacing: '0.15em',
          marginBottom: 25,
        }}
      >
        ✦ 100% OPEN SOURCE ARCHITECTURE ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 108,
          lineHeight: 1.05,
          color: '#FFFFFF',
          maxWidth: 900,
        }}
      >
        WANT THE FULL PYTHON WHATSAPP BOT CODE?
      </div>

      <div
        style={{
          marginTop: 45,
          backgroundColor: '#25D366',
          color: '#0B141A',
          padding: '24px 60px',
          borderRadius: 999,
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 900,
          letterSpacing: '0.05em',
          boxShadow: '0 0 50px rgba(37, 211, 102, 0.6)',
          transform: `scale(${1 + pulse * 0.015})`,
        }}
      >
        COMMENT "WHATSAPP" BELOW
      </div>

      <div
        style={{
          marginTop: 35,
          color: '#8696A0',
          fontSize: 26,
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        FastAPI webhook + Baileys bridge sent directly to your DM 🚀
      </div>
    </div>
  );
};
