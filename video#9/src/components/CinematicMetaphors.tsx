import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CinematicMetaphorsProps {
  currentSec: number;
}

export const CinematicMetaphors: React.FC<CinematicMetaphorsProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Screen shake on brutal impact
  const isHeavyImpact = (currentSec >= 13.0 && currentSec <= 15.5) || (currentSec >= 26.5 && currentSec <= 28.5);
  const shakeX = isHeavyImpact ? Math.sin(frame * 0.8) * 6 : 0;
  const shakeY = isHeavyImpact ? Math.cos(frame * 0.8) * 5 : 0;

  return (
    <div
      style={{
        position: 'absolute',
        top: 520,
        left: 45,
        right: 45,
        height: 980,
        zIndex: 40,
        transform: `translate(${shakeX}px, ${shakeY}px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ===================================================================
          BEAT 1: 0.0s – 4.60s: "01 DAVID GOGGINS / MINDSET"
          =================================================================== */}
      {currentSec < 4.6 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 32,
            background: 'linear-gradient(145deg, rgba(24, 24, 27, 0.95) 0%, rgba(9, 9, 11, 0.98) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.4)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.15)',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.35) 0%, transparent 70%)',
            }}
          />

          {/* Top Pill Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid #f59e0b',
                color: '#facc15',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 20,
                letterSpacing: '0.08em',
              }}
            >
              MILITARY GRADE MINDSET
            </div>
            <span style={{ color: '#f59e0b', fontSize: 32, fontWeight: 900 }}>⚡</span>
          </div>

          {/* Center Colossal Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, zIndex: 2 }}>
            <div
              style={{
                fontSize: 68,
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                textAlign: 'center',
                textTransform: 'uppercase',
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: '0 0 30px rgba(245, 158, 11, 0.5)',
              }}
            >
              DAVID GOGGINS
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: '#ea580c',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              "CAN'T HURT ME" • THE 40% RULE
            </div>
          </div>

          {/* Bottom Callout */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 20,
              padding: '18px 28px',
              textAlign: 'center',
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 700, color: '#e4e4e7', letterSpacing: '0.02em' }}>
              "The most brutal quote I heard years ago."
            </span>
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 2: 4.60s – 12.28s: "02 THE COMFORT TRAP / WARNING"
          =================================================================== */}
      {currentSec >= 4.6 && currentSec < 12.28 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 32,
            background: 'linear-gradient(145deg, rgba(20, 10, 10, 0.96) 0%, rgba(9, 9, 11, 0.98) 100%)',
            border: '2px solid rgba(239, 68, 68, 0.5)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(239, 68, 68, 0.25)',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Warning Banner */}
          <div
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.18)',
              border: '2px solid #ef4444',
              borderRadius: 16,
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              color: '#ef4444',
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: '0.06em',
              boxShadow: '0 0 24px rgba(239, 68, 68, 0.3)',
            }}
          >
            <span>🚨</span> SYSTEM ALERT: COMFORT TRAP <span>🚨</span>
          </div>

          {/* Center Graphic: Digital Hazard Radar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            {/* Holographic Radar */}
            <div
              style={{
                position: 'relative',
                width: 240,
                height: 240,
                borderRadius: '50%',
                border: '2px dashed rgba(239, 68, 68, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 20,
                  borderRadius: '50%',
                  border: '2px solid rgba(239, 68, 68, 0.6)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 50,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 50 }}>💀</span>
              </div>
              {/* Rotating Radar Sweep Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 110,
                  height: 3,
                  backgroundColor: '#ef4444',
                  transformOrigin: 'left center',
                  transform: `rotate(${frame * 4}deg)`,
                  boxShadow: '0 0 12px #ef4444',
                }}
              />
            </div>

            <div
              style={{
                fontSize: 42,
                fontWeight: 900,
                color: '#ffffff',
                textAlign: 'center',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                fontFamily: 'Impact, "Arial Black", sans-serif',
              }}
            >
              LIVING A LIFE SO COMFORTABLE & SOFT
            </div>
          </div>

          {/* Bottom Critical Stat */}
          <div
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 18,
              padding: '14px 24px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#fca5a5', fontSize: 22, fontWeight: 800 }}>
              "You will DIE without ever realizing your potential."
            </span>
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 3: 12.28s – 19.28s: "03 TRUE POTENTIAL / SURGE"
          =================================================================== */}
      {currentSec >= 12.28 && currentSec < 19.28 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 32,
            background: 'linear-gradient(145deg, rgba(8, 20, 35, 0.96) 0%, rgba(9, 9, 11, 0.98) 100%)',
            border: '2px solid rgba(6, 182, 212, 0.5)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(6, 182, 212, 0.25)',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid #06b6d4',
                color: '#38bdf8',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 20,
                letterSpacing: '0.08em',
              }}
            >
              POTENTIAL CAPACITOR
            </div>
            <span style={{ color: '#06b6d4', fontSize: 26, fontWeight: 900 }}>100% MAXIMUM</span>
          </div>

          {/* Center Electric Energy Surge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
            {/* Cyber Power Bar */}
            <div
              style={{
                width: 130,
                height: 380,
                borderRadius: 24,
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '3px solid #06b6d4',
                padding: 8,
                display: 'flex',
                flexDirection: 'column-reverse',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
              }}
            >
              {/* Electric 40% to 100% Surge */}
              <div
                style={{
                  height: '75%',
                  borderRadius: 16,
                  background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
                  boxShadow: '0 0 20px #06b6d4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: 28,
                  color: '#ffffff',
                }}
              >
                75%
              </div>
            </div>

            {/* Impact Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 440 }}>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: '#facc15',
                  lineHeight: 1.05,
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: '0 0 25px rgba(250, 204, 21, 0.5)',
                }}
              >
                HIT ME SO HARD!
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#94a3b8', lineHeight: 1.4 }}>
                Most human beings live at only 40% of their real capability. The rest remains undiscovered.
              </div>
            </div>
          </div>

          {/* Bottom Status */}
          <div
            style={{
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: 18,
              padding: '14px 24px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#38bdf8', fontSize: 22, fontWeight: 800 }}>
              ⚡ UNLOCK THE REMAINING 60%
            </span>
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 4: 19.28s – 24.74s: "04 THE ILLUSION / HARD WORK"
          =================================================================== */}
      {currentSec >= 19.28 && currentSec < 24.74 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 32,
            background: 'linear-gradient(145deg, rgba(20, 20, 25, 0.96) 0%, rgba(9, 9, 11, 0.98) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.5)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.2)',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid #f59e0b',
                color: '#facc15',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 20,
              }}
            >
              THE FALSE HUSTLE ILLUSION
            </div>
          </div>

          {/* Center Metric Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Long Work Hours', val: '14 HRS', sub: 'Easy compared to real mental war' },
              { label: 'Surface Busywork', val: 'HIGH', sub: 'Distraction disguised as progress' },
              { label: 'Mental Comfort', val: 'UNBROKEN', sub: 'Still never stepped outside safety' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 18,
                  padding: '16px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#f4f4f5' }}>{item.label}</div>
                  <div style={{ fontSize: 16, color: '#71717a', marginTop: 4 }}>{item.sub}</div>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#f59e0b' }}>{item.val}</div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid #f59e0b',
              borderRadius: 18,
              padding: '14px 24px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#fde047', fontSize: 22, fontWeight: 800 }}>
              "I thought I was working hard, until he challenged everything."
            </span>
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 5: 24.74s – 29.63s: "05 SO BRUTAL / MASTER QUOTE"
          =================================================================== */}
      {currentSec >= 24.74 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 32,
            background: 'linear-gradient(145deg, rgba(15, 10, 5, 0.98) 0%, rgba(5, 5, 8, 1) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.7)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 60px rgba(245, 158, 11, 0.35)',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Stamp */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <div
              style={{
                backgroundColor: '#dc2626',
                color: '#ffffff',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: '0.08em',
                boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
              }}
            >
              SO BRUTAL 🔥
            </div>
            <span style={{ fontSize: 50, color: '#facc15', fontWeight: 900 }}>❝</span>
          </div>

          {/* Master Typography Quote */}
          <div
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.35,
              textAlign: 'center',
              letterSpacing: '0.01em',
              textShadow: '0 0 35px rgba(250, 204, 21, 0.3)',
              zIndex: 2,
            }}
          >
            "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential."
          </div>

          {/* Quote Author */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 2 }}>
            <div
              style={{
                fontSize: 34,
                fontWeight: 900,
                color: '#facc15',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              — DAVID GOGGINS
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#a1a1aa', letterSpacing: '0.04em' }}>
              FIGURING OUT WITH RAJ SHAMANI
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
