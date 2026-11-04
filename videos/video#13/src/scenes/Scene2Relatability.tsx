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
        backgroundColor: '#161B22',
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
        ✦ SUBSCRIPTION TRAP ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#C4B5FD',
          maxWidth: 920,
        }}
      >
        WHY PAY $20/MONTH FOR SUBSCRIPTION LIMITS?
      </div>

      {/* Paywall Warning Card */}
      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#0D1117',
          border: '2px solid #8B5CF6',
          borderRadius: 24,
          padding: '32px 40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          transform: `scale(${spring({ frame: frame - 15, fps })})`,
        }}
      >
        <div style={{ color: '#F87171', fontSize: 26, fontWeight: 800 }}>
          ⚠️ You have reached your monthly fast request quota (500/500).
        </div>
        <div style={{ color: '#94A3B8', fontSize: 22, marginTop: 14, lineHeight: 1.5 }}>
          Your requests are now queued in slow mode. Upgrade to Pro Tier 2 for additional $20/month.
        </div>
      </div>
    </div>
  );
};
