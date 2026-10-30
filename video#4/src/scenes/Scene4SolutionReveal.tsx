import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene4SolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFlash = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        opacity: bgFlash,
      }}
    >
      {/* Background Animated Gradient Ring */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          transform: `scale(${interpolate(frame, [0, 80], [0.8, 1.3], { extrapolateRight: 'clamp' })})`,
        }}
      />

      {/* Top Badge: "DO NOT SKIP" */}
      <div
        style={{
          padding: '14px 32px',
          borderRadius: 999,
          backgroundColor: '#0284C7',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 36,
          boxShadow: '0 10px 25px rgba(2, 132, 199, 0.3)',
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        ✦ DO NOT SKIP THIS ✦
      </div>

      {/* Main Massive Headline */}
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, Montserrat, sans-serif',
          fontSize: 116,
          lineHeight: 1.0,
          color: '#0F172A',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
        }}
      >
        LET'S TAKE
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #0284C7, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            transform: `scale(${spring({ frame: frame - 15, fps })})`,
          }}
        >
          CONTROL.
        </span>
      </div>

      {/* Editorial Feature Badges */}
      <div
        style={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          width: '100%',
          maxWidth: 680,
        }}
      >
        <div
          style={{
            padding: '22px 32px',
            borderRadius: 24,
            backgroundColor: '#F8FAFC',
            border: '2px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            transform: `translateX(${interpolate(
              spring({ frame: frame - 25, fps }),
              [0, 1],
              [-80, 0]
            )}px)`,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: '#E0F2FE',
              color: '#0284C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            ✓
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#0F172A' }}>
              Built-in Android Settings
            </div>
            <div style={{ fontSize: 20, color: '#64748B', fontWeight: 600 }}>
              No third-party apps to drain battery
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '22px 32px',
            borderRadius: 24,
            backgroundColor: '#F8FAFC',
            border: '2px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            transform: `translateX(${interpolate(
              spring({ frame: frame - 35, fps }),
              [0, 1],
              [80, 0]
            )}px)`,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: '#DCFCE7',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            🛡️
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#0F172A' }}>
              Cloudflare Family Shield
            </div>
            <div style={{ fontSize: 20, color: '#64748B', fontWeight: 600 }}>
              Blocks adult domains at network level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
