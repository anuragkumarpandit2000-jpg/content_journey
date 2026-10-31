import React from 'react';
import { Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { ComicHalftoneBackground } from '../components/ComicHalftoneBackground';
import { ComicChip } from '../components/ComicChip';
import { ComicHostBubble } from '../components/ComicHostBubble';
import { ComicStoryPanels } from '../components/ComicStoryPanels';
import { ComicCaptions } from '../components/ComicCaptions';
import timeline from '../data/timeline.json';

export const ComicRoute: React.FC = () => {
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
        backgroundColor: '#fffdf5',
        overflow: 'hidden',
        fontFamily: 'Impact, "Arial Black", -apple-system, sans-serif',
      }}
    >
      {/* 1. Voiceover Audio */}
      <Audio src={staticFile('voice.mp3')} />

      {/* 2. Comic Halftone Dots & Dynamic Speed Lines */}
      <ComicHalftoneBackground currentSec={currentSec} />

      {/* 3. Top-Left Comic Chapter Badge */}
      <ComicChip currentSec={currentSec} />

      {/* 4. Top-Right Comic Host Portrait with Lip-Sync */}
      <ComicHostBubble />

      {/* 5. Center Comic Book Story Panels */}
      <ComicStoryPanels currentSec={currentSec} />

      {/* 6. Comic Style Pop Art Subtitles */}
      <ComicCaptions currentSec={currentSec} />

      {/* 7. Bottom Comic Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 35,
          left: 45,
          right: 45,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 50,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            fontWeight: 900,
            color: '#09090b',
            letterSpacing: '0.08em',
          }}
        >
          <span>FIGURING OUT COMICS #01</span>
          <span>PAGE 01 • {currentSec.toFixed(1)}S</span>
        </div>
        <div
          style={{
            width: '100%',
            height: 10,
            backgroundColor: '#ffffff',
            border: '2px solid #09090b',
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: '100%',
              backgroundColor: '#ef4444',
            }}
          />
        </div>
      </div>
    </div>
  );
};
