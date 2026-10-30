import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene duration: 360 frames (75 to 435 in master reel)
  // Master audio timestamps:
  // 2.78 - 5.60s (frames 83 - 168): "Aaj fir tumhare liye aisi trick lekar aaya hoon..."
  // 5.60 - 8.32s (frames 168 - 250): "...jo tumhari life mein genuinely helpful ho sakti hai"
  // 8.32 - 12.36s (frames 250 - 370): "Mujhe pata hai log chahte hain: body banayein, exams top karein..."
  // 12.36 - 14.44s (frames 370 - 433): "...aur apni life mein discipline laayein"

  // Local frame divisions:
  // Part 1: 0 to 170 (helpful trick)
  // Part 2: 170 to 290 (body & exams)
  // Part 3: 290 to 360 (discipline)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ================= PART 1: HELPFUL TRICK (0 - 175) ================= */}
      {frame < 180 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#FDF2F8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 60,
            opacity: interpolate(frame, [168, 178], [1, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          {/* Subtle Pink Dot Grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle, #F472B6 1.5px, transparent 1.5px)',
              backgroundSize: '44px 44px',
              opacity: 0.35,
            }}
          />

          <div
            style={{
              padding: '14px 32px',
              borderRadius: 999,
              backgroundColor: '#BE185D',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: '0.14em',
              marginBottom: 36,
              transform: `scale(${spring({ frame, fps })})`,
              boxShadow: '0 10px 25px rgba(190, 24, 93, 0.3)',
            }}
          >
            ✦ SECRET TECH TRICK ✦
          </div>

          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Anton, Montserrat, sans-serif',
              fontSize: 112,
              lineHeight: 1.05,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              transform: `translateY(${interpolate(
                spring({ frame: frame - 10, fps }),
                [0, 1],
                [50, 0]
              )}px)`,
            }}
          >
            GENUINELY
            <br />
            <span
              style={{
                color: '#EC4899',
                display: 'inline-block',
                transform: `scale(${spring({ frame: frame - 25, fps })})`,
              }}
            >
              HELPFUL
            </span>
            <br />
            FOR YOUR LIFE
          </div>

          <div
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                padding: '16px 32px',
                borderRadius: 20,
                backgroundColor: '#FFFFFF',
                boxShadow: '0 12px 30px rgba(244, 114, 182, 0.25)',
                fontSize: 24,
                fontWeight: 800,
                color: '#831843',
              }}
            >
              ⚡ NO APPS NEEDED
            </div>
            <div
              style={{
                padding: '16px 32px',
                borderRadius: 20,
                backgroundColor: '#FFFFFF',
                boxShadow: '0 12px 30px rgba(244, 114, 182, 0.25)',
                fontSize: 24,
                fontWeight: 800,
                color: '#831843',
              }}
            >
              🔒 100% PRIVATE
            </div>
          </div>
        </div>
      )}

      {/* ================= PART 2: BUILD BODY & TOP EXAMS (170 - 295) ================= */}
      {frame >= 170 && frame < 300 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#EFF6FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
            opacity:
              frame < 185
                ? interpolate(frame, [170, 185], [0, 1])
                : interpolate(frame, [290, 300], [1, 0]),
          }}
        >
          {/* Subtle Blue Dot Grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle, #60A5FA 1.5px, transparent 1.5px)',
              backgroundSize: '44px 44px',
              opacity: 0.35,
            }}
          />

          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#2563EB',
              letterSpacing: '0.15em',
              marginBottom: 44,
              textTransform: 'uppercase',
            }}
          >
            YOUR BIGGEST ASPIRATIONS
          </div>

          {/* Card 1: Build Body */}
          <div
            style={{
              width: '100%',
              maxWidth: 920,
              backgroundColor: '#FFFFFF',
              borderRadius: 36,
              padding: '36px 44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 30,
              boxShadow: '0 25px 50px rgba(37, 99, 235, 0.12)',
              border: '2.5px solid #DBEAFE',
              transform: `scale(${spring({ frame: frame - 175, fps })})`,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#3B82F6',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                PHYSICAL TRANSFORMATION
              </div>
              <div
                style={{
                  fontFamily: 'Anton, Montserrat, sans-serif',
                  fontSize: 68,
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                }}
              >
                BUILD YOUR <span style={{ color: '#2563EB' }}>BODY</span>
              </div>
            </div>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 28,
                backgroundColor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 52,
              }}
            >
              💪
            </div>
          </div>

          {/* Card 2: Top Exams */}
          <div
            style={{
              width: '100%',
              maxWidth: 920,
              backgroundColor: '#FFFFFF',
              borderRadius: 36,
              padding: '36px 44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 25px 50px rgba(124, 58, 237, 0.12)',
              border: '2.5px solid #EDE9FE',
              transform: `scale(${spring({ frame: frame - 195, fps })})`,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#7C3AED',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                ACADEMIC EXCELLENCE
              </div>
              <div
                style={{
                  fontFamily: 'Anton, Montserrat, sans-serif',
                  fontSize: 68,
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                }}
              >
                TOP YOUR <span style={{ color: '#7C3AED' }}>EXAMS</span>
              </div>
            </div>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 28,
                backgroundColor: '#F5F3FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 52,
              }}
            >
              🎯
            </div>
          </div>
        </div>
      )}

      {/* ================= PART 3: MASTER DISCIPLINE (290 - 360) ================= */}
      {frame >= 288 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 60,
            opacity: interpolate(frame, [288, 298], [0, 1]),
          }}
        >
          {/* Target Ring */}
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: '50%',
              border: '4px dashed #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 44,
              transform: `rotate(${frame * 0.5}deg)`,
            }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                backgroundColor: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: 72,
              }}
            >
              👑
            </div>
          </div>

          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Anton, Montserrat, sans-serif',
              fontSize: 104,
              lineHeight: 1.05,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              transform: `scale(${spring({ frame: frame - 295, fps })})`,
            }}
          >
            MASTER YOUR
            <br />
            <span
              style={{
                color: '#10B981',
                textDecoration: 'underline',
                textDecorationColor: '#10B981',
              }}
            >
              DISCIPLINE.
            </span>
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 26,
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            THE FOUNDATION OF SUCCESS
          </div>
        </div>
      )}
    </div>
  );
};
