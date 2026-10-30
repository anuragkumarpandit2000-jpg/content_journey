import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { ThreeTest } from '../components/ThreeTest';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 0 - 90: "ARRE BRO!"
  // 90 - 180: "KYA CHEEZ DHOONDHI HAI MAINE!"
  // 180 - 234: "RUKO BATATA HOON!"

  const scaleArre = spring({
    frame: frame - 25,
    fps,
    config: { damping: 9, mass: 0.7, stiffness: 140 },
  });

  const scaleCheez = spring({
    frame: frame - 95,
    fps,
    config: { damping: 10, mass: 0.8 },
  });

  const scaleRuko = spring({
    frame: frame - 180,
    fps,
    config: { damping: 12, mass: 0.9 },
  });

  // Glitch jitter effect for the hook
  const jitterX = frame >= 25 && frame < 50 && frame % 4 === 0 ? 8 : 0;
  const jitterY = frame >= 25 && frame < 50 && frame % 3 === 0 ? -6 : 0;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#090D16',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Animated Radial Glow */}
      <ThreeTest />
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          background:
            frame < 120
              ? 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(250, 204, 21, 0.25) 0%, transparent 70%)',
          transform: `scale(${interpolate(Math.sin(frame * 0.1), [-1, 1], [0.9, 1.2])})`,
        }}
      />

      {/* Cyber Grid Lines Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.7,
        }}
      />

      {/* Top Tech Category Badge */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 24px',
          borderRadius: 999,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1.5px solid rgba(56, 189, 248, 0.4)',
          color: '#38BDF8',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: '0.15em',
        }}
      >
        <span>⚡</span>
        <span>PC STORAGE HACK</span>
        <span>⚡</span>
      </div>

      {/* PART 1: ARRE BRO! (Frames 20 - 95) */}
      {frame >= 20 && frame < 95 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: `translate(${jitterX}px, ${jitterY}px) scale(${scaleArre})`,
          }}
        >
          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 140,
              lineHeight: 0.9,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              textShadow:
                '0 0 40px rgba(56, 189, 248, 0.8), 0 10px 30px rgba(0,0,0,0.9)',
              textAlign: 'center',
            }}
          >
            ARRE BRO!
          </div>

          <div
            style={{
              marginTop: 20,
              padding: '10px 32px',
              borderRadius: 16,
              backgroundColor: '#38BDF8',
              color: '#090D16',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: '0.1em',
              boxShadow: '0 10px 30px rgba(56, 189, 248, 0.6)',
            }}
          >
            SECRET REVEAL 🔓
          </div>
        </div>
      )}

      {/* PART 2: KYA CHEEZ DHOONDHI HAI MAINE! (Frames 95 - 180) */}
      {frame >= 95 && frame < 180 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: `scale(${scaleCheez})`,
            padding: '0 40px',
          }}
        >
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 48,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.1em',
              textAlign: 'center',
              marginBottom: 10,
            }}
          >
            MAINE EK
          </div>

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 110,
              lineHeight: 1.0,
              color: '#FACC15',
              letterSpacing: '0.02em',
              textAlign: 'center',
              textShadow:
                '0 0 50px rgba(250, 204, 21, 0.85), 0 15px 35px rgba(0,0,0,0.9)',
            }}
          >
            CRAZY CHEEZ
          </div>

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 88,
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              textAlign: 'center',
            }}
          >
            DHOONDHI HAI! 🔥
          </div>
        </div>
      )}

      {/* PART 3: RUKO BATATA HOON! (Frames 180 - 234) */}
      {frame >= 180 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            transform: `scale(${scaleRuko})`,
          }}
        >
          {/* Pulsing Loading Spinner Icon */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '6px solid rgba(56, 189, 248, 0.2)',
              borderTop: '6px solid #38BDF8',
              transform: `rotate(${frame * 12}deg)`,
              boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)',
            }}
          />

          <div
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: 105,
              color: '#FFFFFF',
              letterSpacing: '0.05em',
              textAlign: 'center',
              textShadow: '0 10px 30px rgba(0,0,0,0.9)',
            }}
          >
            RUKO... BATATA HOON!
          </div>

          <div
            style={{
              padding: '10px 28px',
              borderRadius: 999,
              backgroundColor: '#EF4444',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: '0.08em',
              boxShadow: '0 10px 30px rgba(239, 68, 68, 0.6)',
            }}
          >
            🚨 WATCH TILL END
          </div>
        </div>
      )}
    </div>
  );
};
