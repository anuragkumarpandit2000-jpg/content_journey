import React from 'react';
import { Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { CinematicBackground } from '../components/CinematicBackground';
import { CinematicChip } from '../components/CinematicChip';
import { HostFootageWindow } from '../components/HostFootageWindow';
import { CinematicMetaphors } from '../components/CinematicMetaphors';
import { CinematicCaptions } from '../components/CinematicCaptions';
import timeline from '../data/timeline.json';

export const CinematicRoute: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;
  const progress = Math.min(1, currentSec / timeline.duration);

  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1920,
        backgroundColor: '#050508',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      {/* 1. Voiceover Audio */}
      <Audio src={staticFile('voice.mp3')} />

      {/* 2. Cinematic Dark Background with Light Leaks & Embers */}
      <CinematicBackground />

      {/* 3. Top-Left Chapter Pill Chip */}
      <CinematicChip currentSec={currentSec} />

      {/* 4. Top-Right Real Host Video Footage Window */}
      <HostFootageWindow currentSec={currentSec} />

      {/* 5. Center Cinematic Visual Metaphors Canvas */}
      <CinematicMetaphors currentSec={currentSec} />

      {/* 6. Kinetic Captions Strip */}
      <CinematicCaptions currentSec={currentSec} />

      {/* 7. Bottom Cinematic HUD & Scrubber Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: 45,
          right: 45,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          zIndex: 50,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            fontWeight: 800,
            color: '#a1a1aa',
            letterSpacing: '0.06em',
          }}
        >
          <span style={{ color: '#06b6d4' }}>● FIGURING OUT // MASTER REEL</span>
          <span>{currentSec.toFixed(1)}s / {timeline.duration.toFixed(1)}s</span>
        </div>
        <div
          style={{
            width: '100%',
            height: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 999,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #06b6d4 0%, #facc15 100%)',
              borderRadius: 999,
              boxShadow: '0 0 12px rgba(6, 182, 212, 0.8)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
