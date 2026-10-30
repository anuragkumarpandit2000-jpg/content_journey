import React from 'react';
import { Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { SadhakStoryScenes } from '../components/SadhakStoryScenes';
import { KathaCaptions } from '../components/KathaCaptions';
import { MaharajMedallion } from '../components/MaharajMedallion';

export const KathaRoute: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1920,
        backgroundColor: '#0a0a0c',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Devanagari", sans-serif',
      }}
    >
      {/* 1. Voiceover Audio */}
      <Audio src={staticFile('voice.mp3')} />

      {/* 2. Top 60% Animated Sadhak Story Scenes */}
      <SadhakStoryScenes currentSec={currentSec} />

      {/* 3. Captions Overlay (Top-Left Chip & Dynamic Pill Subtitles) */}
      <KathaCaptions currentSec={currentSec} />

      {/* 4. Bottom 40% Premanand Maharaj Circular Medallion */}
      <MaharajMedallion isSpeaking={true} />
    </div>
  );
};
