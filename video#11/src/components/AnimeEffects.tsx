import React from 'react';

interface AnimeEffectsProps {
  currentSec: number;
}

export const AnimeEffects: React.FC<AnimeEffectsProps> = ({ currentSec }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 35,
      }}
    >
      {/* 1. Cinematic Anime Edge Vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 65%, rgba(0, 0, 0, 0.45) 100%)',
        }}
      />

      {/* 2. Top & Bottom Cinematic Anime Letterbox Accent Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 18,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.8), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 18,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.8), transparent)',
        }}
      />
    </div>
  );
};
