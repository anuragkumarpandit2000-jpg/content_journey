import React from 'react';
import { useCurrentFrame } from 'remotion';

export const FilmGrain: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle procedural noise jitter
  const noiseX = (frame % 4) * -20;
  const noiseY = (frame % 3) * -20;

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

      {/* 2. Micro Scanline Texture */}
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

      {/* 3. Subtle Film Grain Layer */}
      <div
        style={{
          position: 'absolute',
          inset: '-50px',
          opacity: 0.045,
          pointerEvents: 'none',
          zIndex: 82,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: `translate(${noiseX}px, ${noiseY}px)`,
        }}
      />

      {/* 4. Cinematic Frame Accents (Top & Bottom subtle borders) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 12,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 85,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 16,
          background:
            'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 85,
        }}
      />
    </>
  );
};
