import React from 'react';
import {
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from 'remotion';

export const MotionBrollLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  // 1. Frustrated Laptop user & C Drive Full Bar (8.4s - 13.8s)
  const isStorageAlertPhase = currentSec >= 8.2 && currentSec <= 13.8;
  const storageAlertSpring = spring({
    frame: Math.max(0, frame - 8.2 * fps),
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  // 2. Food / Plate Analogy Video (25.0s - 32.5s)
  const isFoodPhase = currentSec >= 25.0 && currentSec <= 32.5;
  const foodSpring = spring({
    frame: Math.max(0, frame - 25.0 * fps),
    fps,
    config: { damping: 11, mass: 0.7 },
  });

  // 3. Technical Partition Screen Demo (46.0s - 55.5s)
  const isPartitionDemoPhase = currentSec >= 46.0 && currentSec <= 55.5;
  const partitionSpring = spring({
    frame: Math.max(0, frame - 46.0 * fps),
    fps,
    config: { damping: 12, mass: 0.8 },
  });

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
      {/* SECTION 1: Frustrated Person + C Drive Overflowing Bar */}
      {isStorageAlertPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            transform: `scale(${interpolate(
              storageAlertSpring,
              [0, 1],
              [0.85, 1.0]
            )})`,
            opacity: interpolate(
              currentSec,
              [8.2, 8.6, 13.2, 13.8],
              [0, 1, 1, 0],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          {/* Frustrated User Video Card */}
          <div
            style={{
              width: 580,
              height: 340,
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid rgba(239, 68, 68, 0.65)',
              boxShadow:
                '0 20px 50px rgba(239, 68, 68, 0.35), 0 0 30px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              backgroundColor: '#000',
            }}
          >
            <Video
              src={staticFile('Person_striking_full_laptop_7bfdd750.mp4')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />
            {/* Warning Overlay Badge */}
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                backgroundColor: 'rgba(239, 68, 68, 0.88)',
                color: '#fff',
                fontFamily: "'Courier New', monospace",
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: '0.12em',
              }}
            >
              <span>⚠</span>
              <span>C: DRIVE CRITICAL (99%)</span>
            </div>
          </div>

          {/* Animated Storage Bar Filling */}
          <div
            style={{
              width: 580,
              height: 100,
              borderRadius: 20,
              overflow: 'hidden',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)',
              backgroundColor: '#0c0a0c',
            }}
          >
            <Video
              src={staticFile('C_drive_storage_bar_filling_ea579a97.mp4')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />
          </div>
        </div>
      )}

      {/* SECTION 2: Food Plate Analogy Video Card */}
      {isFoodPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 220,
            transform: `scale(${interpolate(
              foodSpring,
              [0, 1],
              [0.85, 1.0]
            )})`,
            opacity: interpolate(
              currentSec,
              [25.0, 25.5, 31.8, 32.5],
              [0, 1, 1, 0],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          <div
            style={{
              width: 560,
              height: 380,
              borderRadius: 28,
              overflow: 'hidden',
              border: '2px solid rgba(245, 158, 11, 0.65)',
              boxShadow:
                '0 24px 60px rgba(245, 158, 11, 0.35), 0 0 35px rgba(0, 0, 0, 0.85)',
              position: 'relative',
              backgroundColor: '#000',
            }}
          >
            <Video
              src={staticFile('food example.mp4')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                backgroundColor: 'rgba(245, 158, 11, 0.9)',
                color: '#000',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: '0.08em',
              }}
            >
              <span>🍽</span>
              <span>PLATE ANALOGY</span>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: Technical Partition Demo Video */}
      {isPartitionDemoPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 200,
            transform: `scale(${interpolate(
              partitionSpring,
              [0, 1],
              [0.85, 1.0]
            )})`,
            opacity: interpolate(
              currentSec,
              [46.0, 46.5, 54.8, 55.5],
              [0, 1, 1, 0],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          <div
            style={{
              width: 620,
              height: 380,
              borderRadius: 28,
              overflow: 'hidden',
              border: '2px solid rgba(56, 189, 248, 0.75)',
              boxShadow:
                '0 25px 60px rgba(56, 189, 248, 0.35), 0 0 40px rgba(0, 0, 0, 0.9)',
              position: 'relative',
              backgroundColor: '#000',
            }}
          >
            <Video
              src={staticFile('partition.mp4')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                backgroundColor: 'rgba(56, 189, 248, 0.9)',
                color: '#000',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: '0.08em',
              }}
            >
              <span>⚡</span>
              <span>LIVE PC EXPANSION</span>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: High-Conversion CTA Overlay (66.5s - 73.2s) */}
      {currentSec >= 66.0 && (
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
              [66.0, 66.8],
              [0, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
          }}
        >
          {/* Comment "DRIVE" glowing button */}
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
            <span>COMMENT "DRIVE"</span>
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
            INSTANT DM TUTORIAL + SOFTWARE LINK
          </div>
        </div>
      )}
    </div>
  );
};
