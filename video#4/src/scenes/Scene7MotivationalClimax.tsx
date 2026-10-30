import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene7MotivationalClimax: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: 0 - 180 (54s - 60s) -> "Technology helps, but CONTROL YOURSELF"
  // Phase 2: 180 - 360 (60s - 66s) -> "Kill Distractions, Focus Goals, Build Future"
  // Phase 3: 360 - 624 (66s - 74s) -> "You Can Do It Bro! Warriors Love You!"

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ================= PHASE 1: CONTROL YOURSELF (0 - 185) ================= */}
      {frame < 190 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#FFF7ED',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 60,
            opacity: interpolate(frame, [175, 185], [1, 0]),
          }}
        >
          <div
            style={{
              padding: '12px 28px',
              borderRadius: 999,
              backgroundColor: '#EA580C',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: '0.15em',
              marginBottom: 36,
              transform: `scale(${spring({ frame, fps })})`,
            }}
          >
            THE HARD TRUTH
          </div>

          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Anton, Montserrat, sans-serif',
              fontSize: 104,
              lineHeight: 1.05,
              color: '#0F172A',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            TOOLS CAN HELP.
            <br />
            <span
              style={{
                color: '#EA580C',
                display: 'inline-block',
                transform: `scale(${spring({ frame: frame - 20, fps })})`,
              }}
            >
              CONTROL
            </span>
            <br />
            COMES FROM YOU.
          </div>

          <div
            style={{
              marginTop: 40,
              padding: '16px 36px',
              borderRadius: 20,
              backgroundColor: '#FFFFFF',
              boxShadow: '0 15px 35px rgba(234, 88, 12, 0.15)',
              fontSize: 24,
              fontWeight: 800,
              color: '#C2410C',
            }}
          >
            🧠 Mindset Over Environment
          </div>
        </div>
      )}

      {/* ================= PHASE 2: GOALS & FUTURE (180 - 370) ================= */}
      {frame >= 180 && frame < 370 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#FAF5FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
            opacity:
              frame < 190
                ? interpolate(frame, [180, 190], [0, 1])
                : interpolate(frame, [360, 370], [1, 0]),
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#7C3AED',
              letterSpacing: '0.15em',
              marginBottom: 40,
              textTransform: 'uppercase',
            }}
          >
            DAILY MANDATE
          </div>

          {/* Goal 1: Kill Distractions */}
          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: 28,
              padding: '28px 36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              border: '2px solid #F3E8FF',
              boxShadow: '0 12px 30px rgba(124, 58, 237, 0.08)',
              transform: `translateX(${interpolate(
                spring({ frame: frame - 185, fps }),
                [0, 1],
                [-80, 0]
              )}px)`,
            }}
          >
            <div
              style={{
                fontFamily: 'Montserrat, Anton, sans-serif',
                fontSize: 42,
                fontWeight: 900,
                color: '#EF4444',
              }}
            >
              1. KILL DISTRACTIONS
            </div>
            <span style={{ fontSize: 40 }}>⚔️</span>
          </div>

          {/* Goal 2: Focus On Goals */}
          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: 28,
              padding: '28px 36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              border: '2px solid #F3E8FF',
              boxShadow: '0 12px 30px rgba(124, 58, 237, 0.08)',
              transform: `translateX(${interpolate(
                spring({ frame: frame - 215, fps }),
                [0, 1],
                [80, 0]
              )}px)`,
            }}
          >
            <div
              style={{
                fontFamily: 'Montserrat, Anton, sans-serif',
                fontSize: 42,
                fontWeight: 900,
                color: '#3B82F6',
              }}
            >
              2. FOCUS ON GOALS
            </div>
            <span style={{ fontSize: 40 }}>🎯</span>
          </div>

          {/* Goal 3: Build Your Future */}
          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: 28,
              padding: '28px 36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '2px solid #F3E8FF',
              boxShadow: '0 12px 30px rgba(124, 58, 237, 0.08)',
              transform: `translateX(${interpolate(
                spring({ frame: frame - 245, fps }),
                [0, 1],
                [-80, 0]
              )}px)`,
            }}
          >
            <div
              style={{
                fontFamily: 'Montserrat, Anton, sans-serif',
                fontSize: 42,
                fontWeight: 900,
                color: '#10B981',
              }}
            >
              3. BUILD YOUR FUTURE
            </div>
            <span style={{ fontSize: 40 }}>🚀</span>
          </div>
        </div>
      )}

      {/* ================= PHASE 3: OUTRO CLIMAX & WARRIORS (360 - 624) ================= */}
      {frame >= 360 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#0F172A',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
            opacity: interpolate(frame, [360, 375], [0, 1]),
          }}
        >
          {/* Golden Crown Graphic */}
          <div
            style={{
              fontSize: 90,
              marginBottom: 20,
              filter: 'drop-shadow(0 0 25px rgba(250, 204, 21, 0.6))',
              transform: `scale(${spring({ frame: frame - 370, fps })})`,
            }}
          >
            👑
          </div>

          {/* "YOU CAN DO IT BRO" */}
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Anton, Montserrat, sans-serif',
              fontSize: 108,
              lineHeight: 1.0,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            YOU CAN
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #FACC15, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DO IT BRO!
            </span>
          </div>

          {/* Warriors Pill */}
          <div
            style={{
              padding: '18px 48px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)',
              transform: `scale(${spring({ frame: frame - 430, fps })})`,
              marginBottom: 40,
            }}
          >
            ⚔️ WARRIORS, LOVE YOU! ⚔️
          </div>

          {/* Next Episode Teaser */}
          <div
            style={{
              padding: '16px 32px',
              borderRadius: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#94A3B8',
              fontSize: 22,
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            💻 Next Video: PC & Laptop Setup Guide
          </div>
        </div>
      )}
    </div>
  );
};
