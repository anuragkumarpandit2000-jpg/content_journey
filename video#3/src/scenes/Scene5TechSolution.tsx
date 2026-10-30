import React from 'react';
import {
  interpolate,
  Video,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const Scene5TechSolution: React.FC = () => {
  const frame = useCurrentFrame(); // 0 to 510 (master 1320 to 1830)
  const { fps } = useVideoConfig();

  // Dynamic C Drive width expansion (frames 150 to 350)
  // 100 GB -> 250 GB
  const cDriveFlex = interpolate(frame, [150, 350], [1.2, 3.2], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cDriveGB = Math.round(
    interpolate(frame, [150, 350], [100, 250], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  const containerSpring = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.9 },
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#070C16',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Cyan Radial Ambience */}
      <div
        style={{
          position: 'absolute',
          width: 850,
          height: 850,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 70%)',
        }}
      />

      {/* Top Banner Tag */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 26px',
          borderRadius: 999,
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          border: '1.5px solid #38BDF8',
          color: '#38BDF8',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: '0.12em',
        }}
      >
        <span>⚡ WINDOWS DISK MANAGEMENT</span>
      </div>

      {/* Main Title Typography */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 26,
        }}
      >
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 32,
            fontWeight: 800,
            color: '#38BDF8',
            letterSpacing: '0.08em',
          }}
        >
          FREE SPACE TRANSFER KARO!
        </div>

        <div
          style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: 90,
            lineHeight: 1.0,
            color: '#FFFFFF',
            letterSpacing: '0.03em',
            textShadow: '0 0 40px rgba(56, 189, 248, 0.75)',
          }}
        >
          C: DRIVE KO EXTEND KARO! 🚀
        </div>
      </div>

      {/* Interactive Live Disk Expansion Graphic */}
      <div
        style={{
          width: '90%',
          maxWidth: 960,
          padding: '28px 30px',
          borderRadius: 26,
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          border: '2px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          transform: `scale(${containerSpring})`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 22,
              fontWeight: 900,
              color: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>💽</span>
            <span>Disk 0 (Basic 512 GB)</span>
          </div>

          <div
            style={{
              padding: '6px 16px',
              borderRadius: 8,
              backgroundColor: frame >= 250 ? '#10B981' : '#EF4444',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 16,
              fontWeight: 900,
            }}
          >
            {frame >= 250 ? 'EXPANDED SIZE' : 'ORIGINAL SIZE'}
          </div>
        </div>

        {/* Dynamic Drive Segments Bar */}
        <div
          style={{
            width: '100%',
            height: 96,
            borderRadius: 18,
            backgroundColor: '#020617',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.8)',
          }}
        >
          {/* C: Drive (Expands dynamically!) */}
          <div
            style={{
              flex: cDriveFlex,
              backgroundColor: frame >= 250 ? '#10B981' : '#3B82F6',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '3px solid #070C16',
              boxShadow:
                frame >= 250
                  ? '0 0 35px rgba(16, 185, 129, 0.8)'
                  : 'none',
              transition: 'background-color 0.4s ease',
            }}
          >
            <span
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 32,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
              }}
            >
              (C:) SYSTEM
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 18,
                fontWeight: 900,
                color: '#FFFFFF',
              }}
            >
              {cDriveGB} GB {frame >= 250 ? '(+150GB!)' : ''}
            </span>
          </div>

          {/* D: Drive */}
          <div
            style={{
              flex: 1.8,
              backgroundColor: '#475569',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '3px solid #070C16',
            }}
          >
            <span
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 26,
                color: '#CBD5E1',
              }}
            >
              (D:) DATA
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 800,
                color: '#94A3B8',
              }}
            >
              160 GB
            </span>
          </div>

          {/* E: Drive */}
          <div
            style={{
              flex: 1.4,
              backgroundColor: '#334155',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 26,
                color: '#CBD5E1',
              }}
            >
              (E:) GAMES
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 800,
                color: '#94A3B8',
              }}
            >
              102 GB
            </span>
          </div>
        </div>

        {/* Live Info Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 18,
            fontWeight: 800,
            color: '#38BDF8',
          }}
        >
          <span>Free Space from D/E Added to C:</span>
          <span style={{ color: '#10B981' }}>✓ NO DATA LOST</span>
        </div>
      </div>

      {/* Screen Recording PIP */}
      <div
        style={{
          marginTop: 24,
          width: '84%',
          height: 330,
          borderRadius: 22,
          overflow: 'hidden',
          border: '2px solid rgba(56, 189, 248, 0.35)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
          position: 'relative',
        }}
      >
        <Video
          src={staticFile('partition.mp4')}
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
            bottom: 12,
            left: 14,
            padding: '6px 16px',
            borderRadius: 8,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            color: '#38BDF8',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            fontWeight: 900,
          }}
        >
          STEP: EXTEND VOLUME WIZARD ⚙️
        </div>
      </div>
    </div>
  );
};
