import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title = "AUTONOMOUS WHATSAPP AI AGENT";
  const letters = title.split("");

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
      {/* WhatsApp Emerald Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* WhatsApp Verified Badge */}
      <div
        style={{
          padding: '12px 32px',
          borderRadius: 999,
          backgroundColor: '#005C4B',
          border: '1.5px solid #25D366',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 35,
          boxShadow: '0 0 25px rgba(37, 211, 102, 0.4)',
          transform: `scale(${spring({ frame, fps })})`,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{ fontSize: 24 }}>💬</span>
        <span>24/7 AUTONOMOUS CLIENT RECEPTIONIST</span>
      </div>

      {/* Kinetic Letter Spring Title */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 960,
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#FFFFFF',
        }}
      >
        {letters.map((char, index) => {
          const s = spring({
            frame: frame - index * 1.5,
            fps,
            config: { damping: 10, mass: 0.5, stiffness: 180 },
          });
          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: `translateY(${interpolate(s, [0, 1], [50, 0])}px) scale(${interpolate(s, [0, 1], [0.4, 1])})`,
                marginRight: char === " " ? 22 : 1,
                color: index >= 11 ? '#25D366' : '#FFFFFF',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Realistic WhatsApp Chat Conversation Mockup */}
      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#111B21',
          borderRadius: 24,
          border: '1.5px solid #222E35',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(37, 211, 102, 0.2)',
          transform: `translateY(${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [40, 0])}px)`,
        }}
      >
        {/* WhatsApp Top Chat Bar */}
        <div style={{ backgroundColor: '#202C33', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#00A884', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24 }}>
            🤖
          </div>
          <div>
            <div style={{ color: '#E9EDEF', fontSize: 22, fontWeight: 700 }}>AI Client Assistant</div>
            <div style={{ color: '#25D366', fontSize: 16, fontWeight: 500 }}>online · replies instantly</div>
          </div>
        </div>

        {/* Chat Bubbles */}
        <div style={{ padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#202C33', color: '#E9EDEF', padding: '14px 20px', borderRadius: '16px 16px 16px 4px', fontSize: 22, maxWidth: 540 }}>
            "Hi, website development package kitne ka hai?"
            <div style={{ fontSize: 14, color: '#8696A0', textAlign: 'right', marginTop: 4 }}>02:14 AM</div>
          </div>

          <div style={{ alignSelf: 'flex-end', backgroundColor: '#005C4B', color: '#E9EDEF', padding: '14px 20px', borderRadius: '16px 16px 4px 16px', fontSize: 22, maxWidth: 580 }}>
            "Hello! 🚀 Hamare packages ₹15,000 se start hote hain. Maine aapke liye brochure aur calendar link attach kar diya hai!"
            <div style={{ fontSize: 14, color: '#53BDEB', textAlign: 'right', marginTop: 4 }}>02:14 AM ✓✓</div>
          </div>
        </div>
      </div>
    </div>
  );
};
