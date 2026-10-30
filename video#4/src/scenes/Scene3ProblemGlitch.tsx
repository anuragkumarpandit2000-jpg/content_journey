import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Audio cues:
  // 0 - 120: "Lekin bhai in sab ke beech ek aisi aadat hai jo focus aur time chura leti hai..."
  // 150 - 240: Peak problem reveal -> "P*RN ADDICTION" (timestamp ~20.7s to 22.0s in master audio)

  const isPeakGlitch = frame >= 140 && frame <= 210;
  const shakeX = isPeakGlitch ? Math.sin(frame * 2.8) * 12 : 0;
  const shakeY = isPeakGlitch ? Math.cos(frame * 3.1) * 8 : 0;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#030712',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      {/* Glitch CRT Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 6px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Red Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Top Warning Bar */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 28px',
          borderRadius: 12,
          backgroundColor: '#7F1D1D',
          border: '1px solid #DC2626',
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: '#EF4444',
            boxShadow: '0 0 12px #EF4444',
            opacity: frame % 15 < 8 ? 1 : 0.3,
          }}
        />
        <span
          style={{
            color: '#FEE2E2',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          CRITICAL THREAT TO YOUR GOALS
        </span>
      </div>

      {/* Part 1 (0 - 140): "THE HIDDEN TRAP" */}
      {frame < 145 && (
        <div
          style={{
            zIndex: 10,
            textAlign: 'center',
            opacity: interpolate(frame, [130, 145], [1, 0]),
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 28,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.2em',
              marginBottom: 20,
              textTransform: 'uppercase',
            }}
          >
            THE TIME & FOCUS STEALER
          </div>

          <div
            style={{
              fontFamily: 'Anton, Montserrat, sans-serif',
              fontSize: 108,
              color: '#FFFFFF',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              textShadow:
                frame % 6 < 3
                  ? '3px 0 #EF4444, -3px 0 #06B6D4'
                  : 'none',
            }}
          >
            DRAINING
            <br />
            <span style={{ color: '#EF4444' }}>YOUR ENERGY.</span>
            <br />
            KILLING DRIVE.
          </div>

          <div
            style={{
              marginTop: 40,
              display: 'inline-flex',
              padding: '14px 32px',
              borderRadius: 999,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#E2E8F0',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            ⚠️ Brain Fog • Zero Motivation • Guilt Cycle
          </div>
        </div>
      )}

      {/* Part 2 (140 - 240): PEAK GLITCH "P*RN ADDICTION" */}
      {frame >= 140 && (
        <div
          style={{
            zIndex: 10,
            textAlign: 'center',
            opacity: interpolate(frame, [140, 150], [0, 1]),
            transform: `scale(${spring({ frame: frame - 140, fps, config: { damping: 9, mass: 0.5, stiffness: 220 } })})`,
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 26,
              fontWeight: 800,
              color: '#F87171',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            THE REAL PROBLEM
          </div>

          {/* Glitch Censored Typography */}
          <div
            style={{
              fontFamily: 'Anton, Montserrat, sans-serif',
              fontSize: 130,
              lineHeight: 0.95,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              textShadow:
                frame % 4 < 2
                  ? '-4px 0 #EF4444, 4px 0 #3B82F6'
                  : '4px 0 #EF4444, -4px 0 #3B82F6',
            }}
          >
            P*RN
            <br />
            <span
              style={{
                color: '#EF4444',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.8)',
              }}
            >
              ADDICTION
            </span>
          </div>

          {/* Warning Stamp */}
          <div
            style={{
              marginTop: 40,
              display: 'inline-block',
              padding: '16px 36px',
              borderRadius: 16,
              backgroundColor: '#DC2626',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transform: 'rotate(-3deg)',
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.5)',
            }}
          >
            TIME TO END THIS TODAY
          </div>
        </div>
      )}
    </div>
  );
};
