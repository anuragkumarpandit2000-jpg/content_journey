import React from 'react';
import { Img, staticFile } from 'remotion';
import timeline from '../data/timeline.json';

interface AnimeHostCharacterProps {
  frame: number;
  fps: number;
}

export const AnimeHostCharacter: React.FC<AnimeHostCharacterProps> = ({ frame, fps }) => {
  const currentSec = frame / fps;

  // 1. Audio-driven Lip Sync from timeline.json
  const mouthFrames = timeline.mouth || [];
  const mouthVal = mouthFrames[Math.min(mouthFrames.length - 1, frame)] || 0;

  // 2. Natural Conversational Breathing & Head Motion
  const breathY = Math.sin(frame * 0.08) * 3;
  const headTilt = Math.sin(frame * 0.035) * 0.6;
  const headNod = Math.cos(frame * 0.07) * (mouthVal > 0.3 ? 2.5 : 0.8);

  // Determine which mouth state PNG to show based on audio volume
  let mouthSrc = '';
  if (mouthVal > 0.68) {
    mouthSrc = 'mouth_wide.png';
  } else if (mouthVal > 0.38) {
    mouthSrc = 'mouth_med.png';
  } else if (mouthVal > 0.15) {
    mouthSrc = 'mouth_small.png';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: 'hidden',
      }}
    >
      {/* Animated Character Rig Container with subtle natural movement */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          transform: `translateY(${breathY + headNod}px) rotate(${headTilt}deg)`,
          transformOrigin: '540px 1400px',
        }}
      >
        {/* Base Studio Anime Master Artwork */}
        <Img
          src={staticFile('raj_shamani_anime_base.jpg')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1080,
            height: 1920,
            objectFit: 'cover',
          }}
        />

        {/* Audio-driven Lip Sync Mouth Overlay */}
        {mouthSrc && (
          <Img
            src={staticFile(mouthSrc)}
            style={{
              position: 'absolute',
              top: 744,
              left: 505,
              width: 165,
              height: 48,
              pointerEvents: 'none',
              zIndex: 15,
            }}
          />
        )}
      </div>
    </div>
  );
};
