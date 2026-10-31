import React from 'react';
import { Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { ChapterChip } from '../components/ChapterChip';
import { PodcastHostWindow } from '../components/PodcastHostWindow';
import { ExplainerCanvas } from '../components/ExplainerCanvas';
import { WordCaptions } from '../components/WordCaptions';
import timeline from '../data/timeline.json';

export const PodcastExplainerRoute: React.FC = () => {
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
        backgroundColor: '#faf5ee',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      {/* 1. Voice Track Audio */}
      <Audio src={staticFile('voice.mp3')} />

      {/* 2. Warm Paper Texture & Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #fbf4e8 0%, #f3ebe0 50%, #eae0d0 100%)',
        }}
      />
      {/* Subtle dotted graph paper grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'radial-gradient(#18181b 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 3. Top-Left Chapter Pill */}
      <ChapterChip currentSec={currentSec} />

      {/* 4. Top-Right Live Host Broadcast Window (Raj Shamani with Lip-Sync) */}
      <PodcastHostWindow />

      {/* 5. Center Visual Metaphors Canvas (The Core Story Cards) */}
      <ExplainerCanvas currentSec={currentSec} />

      {/* 6. Lower Kinetic Word-By-Word Captions */}
      <WordCaptions currentSec={currentSec} />

      {/* 7. Bottom Podcast Progress Scrubber Bar */}
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
            fontSize: 20,
            fontWeight: 800,
            color: '#71717a',
          }}
        >
          <span>FIGURING OUT PODCAST</span>
          <span>{currentSec.toFixed(1)}s / {timeline.duration.toFixed(1)}s</span>
        </div>
        <div
          style={{
            width: '100%',
            height: 10,
            backgroundColor: 'rgba(24, 24, 27, 0.1)',
            borderRadius: 999,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: '100%',
              backgroundColor: '#facc15',
              borderRadius: 999,
              boxShadow: '0 0 10px #facc15',
            }}
          />
        </div>
      </div>
    </div>
  );
};
