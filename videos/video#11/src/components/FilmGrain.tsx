import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <>
      {/* 1. Cinematic Vignette (Darkened Edges) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(0, 0, 0, 0.75) 100%)',
          pointerEvents: 'none',
          zIndex: 80,
        }}
      />

      {/* 2. Micro Scanline Texture (Ultra Lightweight 0% RAM) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 3px)',
          pointerEvents: 'none',
          zIndex: 81,
          opacity: 0.8,
        }}
      />
    </>
  );
};
