import React from 'react';
import {
  interpolate,
  Video,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const Scene2StorageAlert: React.FC = () => {
  const frame = useCurrentFrame(); // 0 to 351 (duration: 351 frames, master 234 to 585)
  const { fps } = useVideoConfig();

  // Part 1: Red Storage Alarm (0 to 180)
  // Part 2: Dream of Clean Storage & Solution (180 to 351)

  const isPart1 = frame < 180;

  // Animated Drive Bar filling up in Part 1
  const barProgress = interpolate(frame, [10, 90], [55, 98], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cardScale = spring({
    frame: isPart1 ? frame : frame - 180,
    fps,
    config: { damping: 11, mass: 0.8 },
  });

  const alertPulse = interpolate(
    Math.sin(frame * 0.3),
    [-1, 1],
    [0.97, 1.03]
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: isPart1 ? '#0D080A' : '#070D18',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.4s ease',
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: isPart1
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.28) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
        }}
      />

      {/* Top Banner Tag */}
      <div
        style={{
          position: 'absolute',
          top: 70,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 24px',
          borderRadius: 999,
          backgroundColor: isPart1
            ? 'rgba(239, 68, 68, 0.15)'
            : 'rgba(56, 189, 248, 0.15)',
          border: `1.5px solid ${isPart1 ? '#EF4444' : '#38BDF8'}`,
          color: isPart1 ? '#EF4444' : '#38BDF8',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 19,
          fontWeight: 900,
          letterSpacing: '0.12em',
        }}
      >
        <span>{isPart1 ? '⚠️ SYSTEM ALERT' : '💡 THE SOLUTION'}</span>
      </div>

      {/* PART 1: C: DRIVE FULL NIGHTMARE (0 - 180 frames) */}
      {isPart1 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            maxWidth: 960,
            transform: `scale(${cardScale})`,
            gap: 36,
          }}
        >
          {/* Big Warning Typography */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 36,
                fontWeight: 900,
                color: '#F87171',
                letterSpacing: '0.1em',
              }}
            >
              IS YOUR PC LAGGING?
            </div>
            <div
              style={{
                fontFamily: 'Anton, Impact, sans-serif',
                fontSize: 105,
                lineHeight: 0.95,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                textShadow: '0 0 40px rgba(239, 68, 68, 0.8)',
              }}
            >
              C: DRIVE FULL?!
            </div>
          </div>

          {/* Realistic Windows 11 Drive Storage Card */}
          <div
            style={{
              width: '100%',
              padding: '34px 38px',
              borderRadius: 30,
              backgroundColor: 'rgba(23, 15, 20, 0.95)',
              border: '2px solid rgba(239, 68, 68, 0.5)',
              boxShadow:
                '0 25px 60px rgba(239, 68, 68, 0.35), 0 0 35px rgba(239, 68, 68, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              transform: `scale(${alertPulse})`,
            }}
          >
            {/* Header: Drive Icon + Name + Percentage */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    fontSize: 54,
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
                  }}
                >
                  💾
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 32,
                      fontWeight: 900,
                      color: '#FFFFFF',
                    }}
                  >
                    Local Disk (C:)
                  </div>
                  <div
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 20,
                      color: '#94A3B8',
                      fontWeight: 600,
                    }}
                  >
                    Windows OS & System Files
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '8px 18px',
                  borderRadius: 12,
                  backgroundColor: '#EF4444',
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 20,
                  fontWeight: 900,
                }}
              >
                {Math.round(barProgress)}% USED
              </div>
            </div>

            {/* Glowing Red Storage Progress Bar */}
            <div
              style={{
                width: '100%',
                height: 28,
                borderRadius: 14,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.7)',
              }}
            >
              <div
                style={{
                  width: `${barProgress}%`,
                  height: '100%',
                  borderRadius: 14,
                  backgroundColor: '#EF4444',
                  boxShadow: '0 0 25px #EF4444',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>

            {/* Storage Info Text */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              <span style={{ color: '#F87171' }}>
                ⚠️ 1.82 GB free of 118 GB
              </span>
              <span style={{ color: '#94A3B8' }}>CRITICAL SPACE</span>
            </div>
          </div>

          {/* Frustrated User Video Clip PIP */}
          <div
            style={{
              width: '85%',
              height: 380,
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
              position: 'relative',
            }}
          >
            <Video
              src={staticFile('Person_striking_full_laptop_7bfdd750.mp4')}
              volume={0}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                padding: '6px 16px',
                borderRadius: 8,
                backgroundColor: 'rgba(0,0,0,0.75)',
                color: '#EF4444',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              FRUSTRATING SYSTEM FREEZES ⚠️
            </div>
          </div>
        </div>
      )}

      {/* PART 2: DREAM OF FREE SPACE & SOLUTION (180 - 351 frames) */}
      {!isPart1 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '90%',
            maxWidth: 960,
            transform: `scale(${cardScale})`,
            gap: 30,
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
            SOCHTE HO NA YAAR...
          </div>

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 95,
              lineHeight: 1.0,
              color: '#FFFFFF',
              letterSpacing: '0.03em',
              textAlign: 'center',
              textShadow: '0 0 45px rgba(56, 189, 248, 0.75)',
            }}
          >
            C: DRIVE THODI KHALI HO JAYE?!
          </div>

          <div
            style={{
              padding: '18px 36px',
              borderRadius: 24,
              backgroundColor: '#10B981',
              color: '#070D18',
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 60,
              letterSpacing: '0.05em',
              boxShadow: '0 20px 50px rgba(16, 185, 129, 0.55)',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span>✅</span>
            <span>SOLUTION DHOONDH LIYA!</span>
          </div>

          {/* Clean C Drive Preview PIP */}
          <div
            style={{
              width: '85%',
              height: 380,
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid rgba(56, 189, 248, 0.4)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
              position: 'relative',
            }}
          >
            <Video
              src={staticFile('C_drive_storage_bar_filling_ea579a97.mp4')}
              volume={0}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                padding: '6px 16px',
                borderRadius: 8,
                backgroundColor: 'rgba(16, 185, 129, 0.85)',
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              100% WORKING METHOD ⚡
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
