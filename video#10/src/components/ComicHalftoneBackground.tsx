import React from 'react';
import { useCurrentFrame } from 'remotion';

interface ComicHalftoneBackgroundProps {
  currentSec: number;
}

export const ComicHalftoneBackground: React.FC<ComicHalftoneBackgroundProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();

  // Speed lines intensity during dramatic moments
  const isDramatic = (currentSec >= 12.28 && currentSec <= 16.5) || (currentSec >= 24.5 && currentSec <= 29.6);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#fffdf5',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* 1. Ben-Day Halftone Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          backgroundImage: 'radial-gradient(#09090b 2px, transparent 2px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* 2. Manga Speed Lines / Sunburst Rays (During High Drama) */}
      {isDramatic && (
        <svg
          style={{
            position: 'absolute',
            inset: -200,
            width: 'calc(100% + 400px)',
            height: 'calc(100% + 400px)',
            opacity: 0.18,
            transform: `rotate(${frame * 0.8}deg)`,
            transformOrigin: 'center center',
          }}
          viewBox="0 0 1000 1000"
        >
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const x2 = 500 + Math.cos(angle) * 700;
            const y2 = 500 + Math.sin(angle) * 700;
            return (
              <polygon
                key={i}
                points={`500,500 ${x2 - 15},${y2} ${x2 + 15},${y2}`}
                fill="#dc2626"
              />
            );
          })}
        </svg>
      )}

      {/* 3. Outer Comic Page Border */}
      <div
        style={{
          position: 'absolute',
          inset: 16,
          border: '4px solid #09090b',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
    </div>
  );
};
