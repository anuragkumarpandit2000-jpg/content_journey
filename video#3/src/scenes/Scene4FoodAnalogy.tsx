import React from 'react';
import {
  interpolate,
  Video,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const Scene4FoodAnalogy: React.FC = () => {
  const frame = useCurrentFrame(); // 0 to 585 (master 735 to 1320)
  const { fps } = useVideoConfig();

  // Sub-phases:
  // Phase 1 (0 - 180): Small Plate problem & food almost khatam
  // Phase 2 (180 - 370): Brothers have excess food (D & E Drive)
  // Phase 3 (370 - 510): Badi plate lana & sharing unused food
  // Phase 4 (510 - 585): "Ab sab kuch equal! Bas!"

  const phase =
    frame < 180 ? 1 : frame < 370 ? 2 : frame < 510 ? 3 : 4;

  const cardSpring = spring({
    frame: frame % 180,
    fps,
    config: { damping: 11, mass: 0.8 },
  });

  // Animated food transfer progress in Phase 3
  const transferProgress = interpolate(frame, [370, 480], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0C0A09',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Warm Amber Glow */}
      <div
        style={{
          position: 'absolute',
          width: 850,
          height: 850,
          borderRadius: '50%',
          background:
            phase === 4
              ? 'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, transparent 70%)',
        }}
      />

      {/* Top Story Tag */}
      <div
        style={{
          position: 'absolute',
          top: 65,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 24px',
          borderRadius: 999,
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          border: '1.5px solid #F59E0B',
          color: '#FBBF24',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: '0.12em',
        }}
      >
        <span>🍽️ EASY FOOD ANALOGY</span>
      </div>

      {/* Dynamic Main Title */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 32,
            fontWeight: 800,
            color: '#F59E0B',
            letterSpacing: '0.08em',
          }}
        >
          {phase === 1 && 'MAAN LO TERE PAAS...'}
          {phase === 2 && 'LEKIN TERE BHAIYON KE PAAS...'}
          {phase === 3 && 'TU KYA KAREGA?'}
          {phase === 4 && 'BOOM! PROBLEM SOLVED!'}
        </div>

        <div
          style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: phase === 4 ? 100 : 88,
            lineHeight: 1.0,
            color: phase === 4 ? '#10B981' : '#FFFFFF',
            letterSpacing: '0.03em',
            textShadow:
              phase === 4
                ? '0 0 45px rgba(16, 185, 129, 0.8)'
                : '0 0 35px rgba(245, 158, 11, 0.6)',
          }}
        >
          {phase === 1 && 'EK CHHOTI PLATE HAI! 🍽️'}
          {phase === 2 && 'ZAROORAT SE ZYADA KHANA HAI! 🍗'}
          {phase === 3 && 'BADI PLATE + SHARING! 🤝'}
          {phase === 4 && 'AB SAB KUCH EQUAL! ⚖️'}
        </div>
      </div>

      {/* Visual Graphic: 3 Plates Diagram */}
      <div
        style={{
          width: '90%',
          maxWidth: 960,
          padding: '28px 24px',
          borderRadius: 30,
          backgroundColor: 'rgba(28, 25, 23, 0.95)',
          border: '2px solid rgba(245, 158, 11, 0.35)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 16,
          transform: `scale(${cardSpring})`,
        }}
      >
        {/* Plate 1: YOU (C: DRIVE) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            flex: 1,
          }}
        >
          <div
            style={{
              width: phase >= 3 ? 160 : 130,
              height: phase >= 3 ? 160 : 130,
              borderRadius: '50%',
              backgroundColor: '#292524',
              border: `4px solid ${phase === 4 ? '#10B981' : '#EF4444'}`,
              boxShadow:
                phase === 4
                  ? '0 0 30px rgba(16, 185, 129, 0.7)'
                  : '0 0 30px rgba(239, 68, 68, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: phase >= 3 ? 54 : 44 }}>
              {phase === 4 ? '🍲' : '🍚'}
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
                color: phase === 4 ? '#10B981' : '#EF4444',
              }}
            >
              {phase === 4 ? '+150GB FREE' : 'FULL (99%)'}
            </span>
          </div>

          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 20,
              fontWeight: 900,
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            C: DRIVE (YOU)
          </div>
        </div>

        {/* Plate 2: BROTHER 1 (D: DRIVE) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            flex: 1,
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: '#292524',
              border: '4px solid #38BDF8',
              boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 50 }}>🍕</span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
                color: '#38BDF8',
              }}
            >
              {phase === 4 ? 'BALANCED' : 'EXTRA FREE'}
            </span>
          </div>

          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 20,
              fontWeight: 900,
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            D: DRIVE (BRO 1)
          </div>
        </div>

        {/* Plate 3: BROTHER 2 (E: DRIVE) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            flex: 1,
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: '#292524',
              border: '4px solid #EC4899',
              boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 50 }}>🍔</span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
                color: '#EC4899',
              }}
            >
              {phase === 4 ? 'BALANCED' : 'EXTRA FREE'}
            </span>
          </div>

          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 20,
              fontWeight: 900,
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            E: DRIVE (BRO 2)
          </div>
        </div>
      </div>

      {/* Embedded Food Video Clip PIP */}
      <div
        style={{
          marginTop: 26,
          width: '84%',
          height: 320,
          borderRadius: 22,
          overflow: 'hidden',
          border: '2px solid rgba(245, 158, 11, 0.3)',
          boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
          position: 'relative',
        }}
      >
        <Video
          src={staticFile('food example.mp4')}
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
            right: 16,
            padding: '6px 14px',
            borderRadius: 8,
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: '#FBBF24',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          SHARING UNUSED CAPACITY ✨
        </div>
      </div>
    </div>
  );
};
