import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6OutroCTA: React.FC = () => {
  const frame = useCurrentFrame(); // 0 to 366 (master 1830 to 2196)
  const { fps } = useVideoConfig();

  // Sub-stages:
  // 0 - 65: "CRAZY HAI NA BRO?!"
  // 65 - 200: "Comment 'DRIVE' in comments!"
  // 200 - 366: "Follow for more PC hacks!"

  const scaleCrazy = spring({
    frame: frame - 5,
    fps,
    config: { damping: 9, mass: 0.7 },
  });

  const commentSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 11, mass: 0.8 },
  });

  const followSpring = spring({
    frame: frame - 210,
    fps,
    config: { damping: 10, mass: 0.8 },
  });

  // Typewriter effect for 'DRIVE' comment
  const commentText = 'DRIVE';
  const typeLen = Math.floor(
    interpolate(frame, [85, 125], [0, commentText.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );
  const typedWord = commentText.slice(0, typeLen);

  const pulse = interpolate(Math.sin(frame * 0.25), [-1, 1], [0.96, 1.04]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#090814',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          width: 850,
          height: 850,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
        }}
      />

      {/* STAGE 1: CRAZY HAI NA BRO?! (0 - 65 frames) */}
      {frame < 65 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: `scale(${scaleCrazy})`,
            textAlign: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 80,
              filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.8))',
            }}
          >
            🤯
          </div>

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 120,
              lineHeight: 0.95,
              color: '#FACC15',
              letterSpacing: '0.04em',
              textShadow:
                '0 0 50px rgba(250, 204, 21, 0.8), 0 10px 30px rgba(0,0,0,0.9)',
            }}
          >
            CRAZY HAI NA BRO?!
          </div>

          <div
            style={{
              padding: '10px 30px',
              borderRadius: 999,
              backgroundColor: '#A855F7',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            ZERO COST • 100% FREE
          </div>
        </div>
      )}

      {/* STAGE 2: COMMENT 'DRIVE' (65 - 200 frames) */}
      {frame >= 65 && frame < 200 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            maxWidth: 960,
            transform: `scale(${commentSpring})`,
            gap: 28,
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 34,
              fontWeight: 800,
              color: '#38BDF8',
              letterSpacing: '0.08em',
              textAlign: 'center',
            }}
          >
            COMPLETE STEP-BY-STEP GUIDE CHAHIYE?
          </div>

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 90,
              lineHeight: 1.0,
              color: '#FFFFFF',
              letterSpacing: '0.03em',
              textAlign: 'center',
              textShadow: '0 0 45px rgba(56, 189, 248, 0.75)',
            }}
          >
            COMMENT MEIN LIKHO:
          </div>

          {/* Interactive Instagram Comment Pill */}
          <div
            style={{
              width: '100%',
              padding: '24px 34px',
              borderRadius: 28,
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '3px solid #FACC15',
              boxShadow:
                '0 20px 60px rgba(250, 204, 21, 0.35), 0 0 35px rgba(250, 204, 21, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transform: `scale(${pulse})`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <span style={{ fontSize: 44 }}>💬</span>
              <span
                style={{
                  fontFamily: 'Anton, Impact, sans-serif',
                  fontSize: 54,
                  color: '#FACC15',
                  letterSpacing: '0.08em',
                }}
              >
                "{typedWord}"
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: 14,
                  height: 44,
                  backgroundColor: '#FACC15',
                  opacity: frame % 10 < 5 ? 1 : 0,
                }}
              />
            </div>

            <div
              style={{
                padding: '12px 28px',
                borderRadius: 16,
                backgroundColor: '#38BDF8',
                color: '#090814',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: '0.05em',
              }}
            >
              SEND ✈️
            </div>
          </div>

          {/* DM Notification Badge */}
          <div
            style={{
              padding: '16px 36px',
              borderRadius: 999,
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 24,
              fontWeight: 900,
              boxShadow: '0 15px 40px rgba(16, 185, 129, 0.55)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span>📬</span>
            <span>INSTANT DM MEIN LINK BHEJ DUNGA!</span>
          </div>
        </div>
      )}

      {/* STAGE 3: FOLLOW KARNA MAT BHOOLNA! (200 - 366 frames) */}
      {frame >= 200 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            maxWidth: 960,
            transform: `scale(${followSpring})`,
            gap: 28,
          }}
        >
          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 105,
              lineHeight: 1.0,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              textAlign: 'center',
              textShadow: '0 0 50px rgba(168, 85, 247, 0.85)',
            }}
          >
            AUR HAAN...
          </div>

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 88,
              lineHeight: 1.05,
              color: '#EC4899',
              letterSpacing: '0.03em',
              textAlign: 'center',
            }}
          >
            FOLLOW KARNA MAT BHOOLNA! ❤️
          </div>

          {/* Glowing Follow Button */}
          <div
            style={{
              padding: '22px 60px',
              borderRadius: 24,
              backgroundColor: frame >= 260 ? '#FFFFFF' : '#2563EB',
              color: frame >= 260 ? '#090814' : '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: '0.08em',
              boxShadow:
                '0 20px 60px rgba(37, 99, 235, 0.6), 0 0 35px rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              transform: `scale(${pulse})`,
              transition: 'all 0.3s ease',
            }}
          >
            <span>{frame >= 260 ? '✓' : '+'}</span>
            <span>{frame >= 260 ? 'FOLLOWING' : 'FOLLOW NOW'}</span>
          </div>

          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 22,
              fontWeight: 700,
              color: '#94A3B8',
              textAlign: 'center',
            }}
          >
            Daily PC, Windows & Tech Hacks 💻✨
          </div>
        </div>
      )}
    </div>
  );
};
