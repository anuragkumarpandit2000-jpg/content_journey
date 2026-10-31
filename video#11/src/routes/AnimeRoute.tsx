import React from 'react';
import { Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { AnimeHostCharacter } from '../components/AnimeHostCharacter';
import { AnimeSpeedLines } from '../components/AnimeSpeedLines';
import { AnimeHUD } from '../components/AnimeHUD';
import { AnimeCaptions } from '../components/AnimeCaptions';
import { AnimeEffects } from '../components/AnimeEffects';
import timeline from '../data/timeline.json';

export const AnimeRoute: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  // Dynamic Camera Zoom & Impact Shake
  const words = timeline.words || [];
  const currentWord = words.find((w) => currentSec >= w.s && currentSec <= w.e);
  const wordText = (currentWord?.w || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const isPunchy = ['goggins', 'david', 'quote', '40', 'percent', 'rule', 'mind', 'brutal', 'stop'].includes(wordText);

  // Smooth camera zoom: 1.0 -> 1.05 slow push-in over time, plus 0.05 punch on keywords
  const slowPush = 1.0 + (currentSec / timeline.duration) * 0.04;
  const punchZoom = isPunchy ? 0.04 : 0.0;
  const cameraScale = slowPush + punchZoom;
  const cameraY = isPunchy ? -12 : 0;

  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1920,
        backgroundColor: '#090810',
        overflow: 'hidden',
        fontFamily: '"Montserrat", "Arial Black", sans-serif',
      }}
    >
      {/* 1. Voiceover Audio */}
      <Audio src={staticFile('podcast_sample.mp3')} />

      {/* Dynamic Camera Container */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          transform: `scale(${cameraScale}) translateY(${cameraY}px)`,
          transformOrigin: '540px 750px',
          transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {/* 2. Master Anime Character with Live Audio-Driven Lip-Sync & Eye Blinks */}
        <AnimeHostCharacter frame={frame} fps={fps} />

        {/* 3. Manga Impact Speed Lines on Key Moments */}
        <AnimeSpeedLines currentSec={currentSec} />
      </div>

      {/* 4. Cinematic Vignette & Letterbox Lines */}
      <AnimeEffects currentSec={currentSec} />

      {/* 5. Top Anime Episode HUD & Live Progress Bar */}
      <AnimeHUD currentSec={currentSec} totalDuration={timeline.duration} />

      {/* 6. Kinetic Anime Captions */}
      <AnimeCaptions currentSec={currentSec} />
    </div>
  );
};
