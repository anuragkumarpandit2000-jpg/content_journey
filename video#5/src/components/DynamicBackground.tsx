import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface DynamicBackgroundProps {
  theme: string;
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  // Grid line scroll offset
  const gridOffsetY = (frame * 1.5) % 80;
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.85, 1.15]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'background 0.5s ease',
      }}
    >
      {/* 1. Base Layer Gradient / Solid Color depending on Theme */}
      {theme === 'INTRO_CYBER' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 40%, #0d1a33 0%, #060913 70%, #020408 100%)',
          }}
        >
          {/* Cyber Perspective Grid */}
          <div
            style={{
              position: 'absolute',
              inset: '-50%',
              backgroundImage:
                'linear-gradient(rgba(56, 189, 248, 0.08) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1.5px, transparent 1.5px)',
              backgroundSize: '70px 70px',
              transform: `translateY(${gridOffsetY}px) perspective(500px) rotateX(45deg)`,
              opacity: 0.8,
            }}
          />
          {/* Ambient Cyan Core Glow */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              width: 750,
              height: 750,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 65%)',
              transform: `scale(${pulse})`,
            }}
          />
        </div>
      )}

      {theme === 'RED_ALERT' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 35%, #2a080d 0%, #120306 65%, #050102 100%)',
          }}
        >
          {/* Flashing Hazard Stripes */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.035) 0px, rgba(239, 68, 68, 0.035) 20px, transparent 20px, transparent 40px)',
              opacity: interpolate(Math.sin(frame * 0.3), [-1, 1], [0.4, 0.9]),
            }}
          />
          {/* Deep Crimson Radial Danger Core */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 850,
              height: 850,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
              transform: `scale(${interpolate(Math.sin(frame * 0.25), [-1, 1], [0.95, 1.2])})`,
            }}
          />
          {/* Red Alert HUD Scanner Beam */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `${(frame * 6) % 1920}px`,
              height: 3,
              background:
                'linear-gradient(90deg, transparent 0%, #ef4444 50%, transparent 100%)',
              boxShadow: '0 0 15px #ef4444',
              opacity: 0.7,
            }}
          />
        </div>
      )}

      {theme === 'SOLUTION_NEON' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 50%, #07263b 0%, #03111c 65%, #01060a 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle, rgba(6, 182, 212, 0.12) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              width: 800,
              height: 800,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, transparent 70%)',
              transform: `scale(${pulse})`,
            }}
          />
        </div>
      )}

      {theme === 'EDITORIAL_BW' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#09090b',
          }}
        >
          {/* Editorial Architectural Crosshairs & Blueprint lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '120px 120px',
            }}
          />
          {/* Stark Center Spotlight */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '20%',
              width: 700,
              height: 700,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 65%)',
            }}
          />
        </div>
      )}

      {(theme === 'FOOD_PLATE_AMBER' || theme === 'BROTHERS_DUO') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 45%, #261609 0%, #110903 65%, #050201 100%)',
          }}
        >
          {/* Warm Amber Core */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              width: 800,
              height: 800,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(245, 158, 11, 0.24) 0%, transparent 70%)',
              transform: `scale(${pulse})`,
            }}
          />
          {/* Subtle concentric rings */}
          <div
            style={{
              position: 'absolute',
              top: '32%',
              left: '22%',
              width: 600,
              height: 600,
              borderRadius: '50%',
              border: '1.5px dashed rgba(245, 158, 11, 0.15)',
              transform: `rotate(${frame * 0.4}deg)`,
            }}
          />
        </div>
      )}

      {theme === 'EQUAL_BALANCE_GREEN' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 45%, #062b1b 0%, #02120b 65%, #010603 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              width: 800,
              height: 800,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
              transform: `scale(${pulse})`,
            }}
          />
        </div>
      )}

      {theme === 'TECH_EXPAND_CYAN' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 40%, #0a2540 0%, #04101e 65%, #01060d 100%)',
          }}
        >
          {/* Blueprint Circuitry Lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(14, 165, 233, 0.08) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1.5px, transparent 1.5px)',
              backgroundSize: '60px 60px',
              transform: `translateY(${gridOffsetY}px)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 850,
              height: 850,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)',
              transform: `scale(${pulse})`,
            }}
          />
        </div>
      )}

      {theme === 'CRAZY_SPEED_PURPLE' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 45%, #2a0a38 0%, #12031a 65%, #050108 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              width: 800,
              height: 800,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(192, 38, 211, 0.28) 0%, transparent 70%)',
              transform: `scale(${interpolate(Math.sin(frame * 0.2), [-1, 1], [0.9, 1.25])})`,
            }}
          />
        </div>
      )}

      {theme === 'LUXURY_GOLD_CTA' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 40%, #211a08 0%, #0d0a03 65%, #050401 100%)',
          }}
        >
          {/* Molten Gold Glow */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '12%',
              width: 850,
              height: 850,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(250, 204, 21, 0.22) 0%, transparent 70%)',
              transform: `scale(${pulse})`,
            }}
          />
        </div>
      )}

      {/* 2. Universal Tech Editorial Overlays (Top HUD, Status Tag, Coordinates) */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: "'Courier New', monospace",
          fontSize: 14,
          letterSpacing: '0.18em',
          color: 'rgba(255, 255, 255, 0.45)',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor:
                theme === 'RED_ALERT'
                  ? '#ef4444'
                  : theme === 'EQUAL_BALANCE_GREEN'
                  ? '#10b981'
                  : theme === 'LUXURY_GOLD_CTA'
                  ? '#facc15'
                  : '#38bdf8',
              boxShadow: `0 0 10px ${
                theme === 'RED_ALERT'
                  ? '#ef4444'
                  : theme === 'EQUAL_BALANCE_GREEN'
                  ? '#10b981'
                  : '#38bdf8'
              }`,
            }}
          />
          <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>
            {theme.replace(/_/g, ' ')}
          </span>
        </div>
        <div>
          <span>SEC: {currentSec.toFixed(2)}s</span>
          <span style={{ marginLeft: 16 }}>FRAME: {frame}</span>
        </div>
      </div>
    </div>
  );
};
