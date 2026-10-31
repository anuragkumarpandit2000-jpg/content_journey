import React from 'react';

interface AnimeBackgroundStageProps {
  currentSec: number;
}

export const AnimeBackgroundStage: React.FC<AnimeBackgroundStageProps> = ({ currentSec }) => {
  // Dynamic breathing pulse of the background neon
  const pulse = Math.sin(currentSec * 3) * 0.15 + 0.85;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#090810',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      {/* 1. Deep Studio Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: 900,
          height: 900,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(32, 28, 55, 0.85) 0%, rgba(9, 8, 16, 0) 70%)',
        }}
      />

      {/* 2. Left Electric Cyan Rim Light */}
      <div
        style={{
          position: 'absolute',
          top: 300,
          left: -150,
          width: 500,
          height: 900,
          background: 'radial-gradient(ellipse at center, rgba(0, 229, 255, 0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: pulse,
        }}
      />

      {/* 3. Right Magenta / Flame Accent Rim Light */}
      <div
        style={{
          position: 'absolute',
          top: 350,
          right: -150,
          width: 500,
          height: 900,
          background: 'radial-gradient(ellipse at center, rgba(255, 23, 68, 0.30) 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: pulse,
        }}
      />

      {/* 4. Subtle Acoustic Soundproofing Hexagon Grid Pattern */}
      <svg
        width="1080"
        height="1200"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.12,
        }}
      >
        <defs>
          <pattern id="hexGrid" width="60" height="104" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
            <path
              d="M 30 0 L 60 17.3 L 60 52 L 30 69.3 L 0 52 L 0 17.3 Z M 30 52 L 60 69.3 L 60 104 L 30 121.3 L 0 104 L 0 69.3 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
};
