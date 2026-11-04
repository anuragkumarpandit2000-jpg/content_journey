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
      {/* Red Glitch Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(239, 68, 68, 0) 50%, rgba(0, 0, 0, 0.7) 50%)',
          backgroundSize: '100% 6px',
          pointerEvents: 'none',
        }}
      />

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
          boxShadow: '0 0 30px #EF4444',
        }}
      >
        ⚠️ MASSIVE TELEPHONY MARKUPS
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
        TWILIO & CLOUD BILLS IN THOUSANDS
      </h1>

      {/* Invoice Receipt Mockup */}
      <div
        style={{
          marginTop: 35,
          width: 760,
          backgroundColor: '#0F172A',
          border: '2px solid #EF4444',
          borderRadius: 20,
          padding: '28px 36px',
          color: '#F8FAFC',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: 16 }}>
          <span style={{ fontSize: 24, fontWeight: 700 }}>Telephony Carrier Bill</span>
          <span style={{ fontSize: 24, color: '#EF4444', fontWeight: 900 }}>₹48,920.00 DUE</span>
        </div>
        <div style={{ marginTop: 18, fontSize: 20, color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Per-minute voice SIP markup</span>
            <span style={{ color: '#F87171' }}>+ ₹14.50 / min</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>STT & TTS API latency fees</span>
            <span style={{ color: '#F87171' }}>+ ₹22.00 / call</span>
          </div>
        </div>
      </div>
    </div>
  );
};
