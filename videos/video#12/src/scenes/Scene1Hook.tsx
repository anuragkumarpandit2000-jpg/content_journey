import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title = "REAL-TIME AI VOICE CALLS";
  const letters = title.split("");

  const pulse = Math.sin(frame * 0.15) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#050B14',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Cyan Tech Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Cyan Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 70%)',
        }}
      />

      {/* Live Call Telephony Badge */}
      <div
        style={{
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#0E7490',
          border: '1.5px solid #22D3EE',
          color: '#E0F2FE',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 35,
          boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)',
          transform: `scale(${spring({ frame, fps })})`,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#22D3EE', boxShadow: '0 0 10px #22D3EE' }} />
        <span>INCOMING AI TELEPHONY CALL</span>
      </div>

      {/* Letter-by-Letter Kinetic Spring Title */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 960,
          fontFamily: 'Anton, sans-serif',
          fontSize: 106,
          lineHeight: 1.05,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          textShadow: '0 10px 40px rgba(6, 182, 212, 0.5)',
        }}
      >
        {letters.map((char, index) => {
          const s = spring({
            frame: frame - index * 1.5,
            fps,
            config: { damping: 10, mass: 0.5, stiffness: 180 },
          });
          const translateY = interpolate(s, [0, 1], [60, 0]);
          const scale = interpolate(s, [0, 1], [0.3, 1]);
          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: `translateY(${translateY}px) scale(${scale})`,
                marginRight: char === " " ? 24 : 1,
                color: index >= 9 ? '#22D3EE' : '#FFFFFF',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Interactive Phone Call Card Mockup */}
      <div
        style={{
          marginTop: 45,
          width: 780,
          backgroundColor: '#0F172A',
          borderRadius: 28,
          border: '1.5px solid #38BDF8',
          padding: '28px 36px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.25)',
          transform: `translateY(${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [40, 0])}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                backgroundColor: '#0369A1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 32,
                border: '2px solid #38BDF8',
                transform: `scale(${1 + pulse * 0.015})`,
              }}
            >
              📞
            </div>
            <div>
              <div style={{ color: '#F8FAFC', fontSize: 28, fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>
                AI Customer Concierge
              </div>
              <div style={{ color: '#38BDF8', fontSize: 20, fontWeight: 600 }}>
                LiveKit WebRTC · Latency: 280ms
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: 999,
              backgroundColor: '#16A34A',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 18,
              boxShadow: '0 0 15px #16A34A',
            }}
          >
            ACTIVE CALL
          </div>
        </div>

        {/* Audio Waveform Bars Reacting */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 50, marginTop: 24 }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const h = 12 + Math.abs(Math.sin((frame + i * 8) * 0.2)) * 36;
            return (
              <div
                key={i}
                style={{
                  width: 8,
                  height: h,
                  borderRadius: 4,
                  backgroundColor: i % 2 === 0 ? '#38BDF8' : '#818CF8',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
