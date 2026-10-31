import React from 'react';
import { useCurrentFrame } from 'remotion';

export const CinematicBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const leakX = Math.sin(frame * 0.03) * 150 + 200;
  const leakY = Math.cos(frame * 0.02) * 100 + 300;
  const leak2X = Math.cos(frame * 0.025) * 180 + 800;
  const leak2Y = Math.sin(frame * 0.035) * 140 + 1200;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#050508',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* 1. Deep Radial Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, #111118 0%, #050508 80%, #000000 100%)',
        }}
      />

      {/* 2. Amber / Fiery Ambient Light Leak (Pure Radial Gradient - Zero GPU Blur) */}
      <div
        style={{
          position: 'absolute',
          top: leakY - 250,
          left: leakX - 250,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.22) 0%, rgba(234, 88, 12, 0.05) 45%, transparent 70%)',
        }}
      />

      {/* 3. Cyan / Electric Accent Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: leak2Y - 250,
          left: leak2X - 250,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, rgba(2, 132, 199, 0.05) 45%, transparent 70%)',
        }}
      />

      {/* 4. Subtle Architectural Tech Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* 5. Floating Dust / Fire Embers */}
      {Array.from({ length: 15 }).map((_, i) => {
        const py = ((frame * 1.5 + i * 130) % 1920);
        const px = (i * 72 + Math.sin(frame * 0.05 + i) * 30) % 1080;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 1920 - py,
              left: px,
              width: (i % 3) + 2,
              height: (i % 3) + 2,
              borderRadius: '50%',
              backgroundColor: i % 2 === 0 ? '#facc15' : '#f97316',
              opacity: 0.3 + 0.4 * Math.sin(frame * 0.1 + i),
              boxShadow: '0 0 6px rgba(250, 204, 21, 0.6)',
            }}
          />
        );
      })}
    </div>
  );
};
