import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6Cybersecurity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Radar line rotation
  const radarRotation = frame * 4;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#020617',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
      }}
    >
      {/* Background Cyber Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(14, 165, 233, 0.08) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial Cyan Glow */}
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, transparent 65%)',
        }}
      />

      {/* Top Firewall Active Status */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 28px',
          borderRadius: 999,
          backgroundColor: '#0369A1',
          border: '1.5px solid #38BDF8',
          boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)',
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#38BDF8',
            boxShadow: '0 0 10px #38BDF8',
          }}
        />
        <span
          style={{
            color: '#F0F9FF',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          FIREWALL ACTIVATED
        </span>
      </div>

      {/* Center Cyber Shield & Radar Animation */}
      <div
        style={{
          position: 'relative',
          width: 440,
          height: 440,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
        }}
      >
        {/* Radar Rings */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px dashed rgba(56, 189, 248, 0.4)',
            transform: `rotate(${frame * 0.5}deg)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 40,
            borderRadius: '50%',
            border: '1.5px solid rgba(56, 189, 248, 0.2)',
          }}
        />

        {/* Rotating Radar Sweep */}
        <div
          style={{
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background:
              'conic-gradient(from 0deg, rgba(6, 182, 212, 0.4) 0deg, transparent 60deg)',
            transform: `rotate(${radarRotation}deg)`,
          }}
        />

        {/* Glowing Shield Icon Card */}
        <div
          style={{
            width: 220,
            height: 240,
            borderRadius: 36,
            background: 'linear-gradient(145deg, #0284C7, #0369A1)',
            border: '3px solid #38BDF8',
            boxShadow: '0 20px 60px rgba(14, 165, 233, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            zIndex: 10,
            transform: `scale(${spring({ frame: frame - 10, fps })})`,
          }}
        >
          <span style={{ fontSize: 72 }}>🛡️</span>
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            SAFEGUARD
          </span>
        </div>
      </div>

      {/* Massive Bold Headline */}
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, Montserrat, sans-serif',
          fontSize: 98,
          lineHeight: 1.05,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          zIndex: 10,
        }}
      >
        ADULT WEBSITES
        <br />
        <span
          style={{
            color: '#EF4444',
            textShadow: '0 0 35px rgba(239, 68, 68, 0.6)',
          }}
        >
          BLOCKED.
        </span>
      </div>

      {/* Floating Indicators */}
      <div
        style={{
          marginTop: 36,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          width: '100%',
          maxWidth: 640,
          zIndex: 10,
        }}
      >
        <div
          style={{
            padding: '16px 28px',
            borderRadius: 16,
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            border: '1.5px solid #EF4444',
            color: '#FCA5A5',
            fontSize: 22,
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '0.08em',
            transform: `translateX(${interpolate(
              spring({ frame: frame - 25, fps }),
              [0, 1],
              [-40, 0]
            )}px)`,
          }}
        >
          🚫 18+ DOMAIN QUERIES DROPPED
        </div>
        <div
          style={{
            padding: '16px 28px',
            borderRadius: 16,
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1.5px solid #10B981',
            color: '#6EE7B7',
            fontSize: 22,
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '0.08em',
            transform: `translateX(${interpolate(
              spring({ frame: frame - 35, fps }),
              [0, 1],
              [40, 0]
            )}px)`,
          }}
        >
          🔒 ZERO BROWSING SPEED LOSS
        </div>
      </div>
    </div>
  );
};
