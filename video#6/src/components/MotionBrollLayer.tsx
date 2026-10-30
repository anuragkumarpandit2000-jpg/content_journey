import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const MotionBrollLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  // 1. Terminal Code Execution Card (8s - 22s)
  const isTerminalPhase = currentSec >= 7.5 && currentSec <= 22.0;
  const terminalSpring = spring({
    frame: Math.max(0, frame - 7.5 * fps),
    fps,
    config: { damping: 12, mass: 0.7 },
  });

  // 2. Cloud Serverless Uploader Card (22s - 32s)
  const isCloudPhase = currentSec >= 22.0 && currentSec <= 32.5;
  const cloudSpring = spring({
    frame: Math.max(0, frame - 22.0 * fps),
    fps,
    config: { damping: 11, mass: 0.8 },
  });

  // 3. CTA Phase (35s onwards)
  const isCtaPhase = currentSec >= 34.0;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* SECTION 1: Live AI Terminal Card */}
      {isTerminalPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 220,
            transform: `scale(${interpolate(
              terminalSpring,
              [0, 1],
              [0.85, 1.0]
            )})`,
            opacity: interpolate(
              currentSec,
              [7.5, 8.0, 21.2, 22.0],
              [0, 1, 1, 0],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          <div
            style={{
              width: 620,
              padding: '24px 28px',
              borderRadius: 24,
              backgroundColor: 'rgba(8, 12, 22, 0.92)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(56, 189, 248, 0.65)',
              boxShadow:
                '0 25px 60px rgba(56, 189, 248, 0.3), 0 0 40px rgba(0, 0, 0, 0.9)',
              fontFamily: "'Courier New', monospace",
              color: '#38bdf8',
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
                paddingBottom: 12,
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#facc15' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', marginLeft: 8 }}>
                ai-agent@autonomous-pipeline:~
              </span>
            </div>

            <div style={{ fontSize: 18, lineHeight: 1.6, color: '#f8fafc' }}>
              <div><span style={{ color: '#10b981' }}>✔</span> [GEMINI_AI]: Script generated (viral Hinglish)</div>
              <div><span style={{ color: '#10b981' }}>✔</span> [NEURAL_TTS]: hi-IN-MadhurNeural audio synced</div>
              <div><span style={{ color: '#10b981' }}>✔</span> [THREE_JS]: 3D kinetic WebGL scenes active</div>
              <div><span style={{ color: '#38bdf8' }}>➜</span> [REMOTION]: 1080x1920 60FPS render in progress...</div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Cloud Workflow Card */}
      {isCloudPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 220,
            transform: `scale(${interpolate(
              cloudSpring,
              [0, 1],
              [0.85, 1.0]
            )})`,
            opacity: interpolate(
              currentSec,
              [22.0, 22.5, 31.8, 32.5],
              [0, 1, 1, 0],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          <div
            style={{
              width: 600,
              padding: '24px 28px',
              borderRadius: 24,
              backgroundColor: 'rgba(18, 5, 10, 0.92)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(239, 68, 68, 0.65)',
              boxShadow:
                '0 25px 60px rgba(239, 68, 68, 0.35), 0 0 40px rgba(0, 0, 0, 0.9)',
              fontFamily: 'Montserrat, sans-serif',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, letterSpacing: '0.2em', color: '#ef4444', fontWeight: 900 }}>
              ⚡ CLOUD AUTOPILOT DEPLOYMENT ⚡
            </div>
            <div style={{ fontSize: 26, fontWeight: 900, marginTop: 10, color: '#f8fafc' }}>
              LAPTOP OFF / CLOUD RUNNER ACTIVE
            </div>
            <div style={{ fontSize: 15, color: '#94a3b8', marginTop: 8, fontFamily: "'Courier New', monospace" }}>
              INSTAGRAM GRAPH API: STATUS 200 (PUBLISHED)
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: High Conversion Call-To-Action (34s onwards) */}
      {isCtaPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            opacity: interpolate(
              currentSec,
              [34.0, 34.8],
              [0, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          {/* Comment "AI CODE" Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '16px 36px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)',
              color: '#000',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: '0.06em',
              boxShadow: '0 15px 45px rgba(245, 158, 11, 0.5), 0 0 30px rgba(255, 255, 255, 0.4)',
              transform: `scale(${interpolate(
                Math.sin(frame * 0.25),
                [-1, 1],
                [0.97, 1.05]
              )})`,
            }}
          >
            <span>💬</span>
            <span>COMMENT "AI CODE"</span>
          </div>

          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            INSTANT DM: FREE PIPELINE CODE + BLUEPRINT
          </div>
        </div>
      )}
    </div>
  );
};
