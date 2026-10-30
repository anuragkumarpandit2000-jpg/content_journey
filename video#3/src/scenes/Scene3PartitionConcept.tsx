import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3PartitionConcept: React.FC = () => {
  const frame = useCurrentFrame(); // 0 to 150 (duration: 150 frames, master 585 to 735)
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, mass: 0.8 },
  });

  const diskScale = spring({
    frame: frame - 45,
    fps,
    config: { damping: 12, mass: 0.9 },
  });

  // Laser cutter line animation (frame 50 to 90)
  const laserX = interpolate(frame, [50, 90], [10, 90], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0A0E1A',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Blueprint Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top Concept Header */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 24px',
          borderRadius: 999,
          backgroundColor: 'rgba(236, 72, 153, 0.15)',
          border: '1.5px solid #EC4899',
          color: '#EC4899',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: '0.15em',
        }}
      >
        <span>🔍 BASIC CONCEPT</span>
      </div>

      {/* Main Question Typography */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: `scale(${titleScale})`,
          textAlign: 'center',
          marginBottom: 50,
        }}
      >
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 34,
            fontWeight: 800,
            color: '#EC4899',
            letterSpacing: '0.1em',
            marginBottom: 6,
          }}
        >
          PEHLE YE SAMAJHO...
        </div>

        <div
          style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: 120,
            lineHeight: 0.95,
            color: '#FFFFFF',
            letterSpacing: '0.04em',
            textShadow: '0 0 50px rgba(56, 189, 248, 0.7)',
          }}
        >
          PARTITION
        </div>

        <div
          style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: 68,
            color: '#FACC15',
            letterSpacing: '0.03em',
          }}
        >
          ACTUALLY HOTA KYA HAI? 🤔
        </div>
      </div>

      {/* Schematic Physical SSD / Hard Drive Illustration */}
      <div
        style={{
          width: '88%',
          maxWidth: 920,
          padding: '36px 32px',
          borderRadius: 28,
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          border: '2px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          transform: `scale(${diskScale})`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            color: '#94A3B8',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '0.08em',
          }}
        >
          <span>PHYSICAL SSD (512 GB)</span>
          <span style={{ color: '#38BDF8' }}>LOGICAL PARTITIONS</span>
        </div>

        {/* 1 Big Bar Splitting into 3 Colors */}
        <div
          style={{
            width: '100%',
            height: 90,
            borderRadius: 20,
            backgroundColor: '#020617',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
          }}
        >
          {/* C: Drive Sector */}
          <div
            style={{
              flex: 1.2,
              backgroundColor: '#EF4444',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '3px solid #0A0E1A',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 28,
                color: '#FFFFFF',
              }}
            >
              C: (OS)
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              120 GB
            </span>
          </div>

          {/* D: Drive Sector */}
          <div
            style={{
              flex: 1.8,
              backgroundColor: '#2563EB',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '3px solid #0A0E1A',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 28,
                color: '#FFFFFF',
              }}
            >
              D: (DATA)
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              200 GB
            </span>
          </div>

          {/* E: Drive Sector */}
          <div
            style={{
              flex: 1.6,
              backgroundColor: '#10B981',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 28,
                color: '#FFFFFF',
              }}
            >
              E: (FILES)
            </span>
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                fontWeight: 900,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              192 GB
            </span>
          </div>

          {/* Animated Laser Split line */}
          {frame >= 50 && frame < 95 && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: `${laserX}%`,
                width: 4,
                height: '100%',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 0 20px #38BDF8, 0 0 40px #38BDF8',
              }}
            />
          )}
        </div>

        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 20,
            fontWeight: 700,
            color: '#CBD5E1',
            textAlign: 'center',
          }}
        >
          Ek hi Hard Disk ko alag-alag virtual kamron (Drives) mein baantna!
        </div>
      </div>
    </div>
  );
};
