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
        backgroundColor: '#020617',
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
        🛑 24/7 CHAT BURNOUT
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
        TIRED OF MANUALLY TYPING SAME REPLIES?
      </h1>

      <div
        style={{
          marginTop: 35,
          width: 780,
          backgroundColor: '#0F172A',
          border: '1.5px solid #EF4444',
          borderRadius: 20,
          padding: '24px 32px',
          fontSize: 24,
          color: '#F87171',
          lineHeight: 1.6,
          textAlign: 'center',
        }}
      >
        "Price kitna hai?", "Sample dikhao?", "Address kya hai?" — Har din 50 baar same messages copy-paste karne se business scale nahi hota!
      </div>
    </div>
  );
};
