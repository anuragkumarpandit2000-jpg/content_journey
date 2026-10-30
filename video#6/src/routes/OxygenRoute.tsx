import React from 'react';
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { ThreeOxygenWorld } from '../components/ThreeOxygenWorld';

export const OxygenRoute: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sec = frame / fps;

  // Timeline stage mappings based on exact audio timestamps
  // Hook: 0s - 7.5s (frames 0 - 225)
  // 1 sec: 7.5s - 14.8s (frames 225 - 444)
  // 2 sec: 14.8s - 22.1s (frames 444 - 663)
  // 3 sec: 22.1s - 31.5s (frames 663 - 945)
  // 4 sec: 31.5s - 39.6s (frames 945 - 1188)
  // 5 sec: 39.6s - 48.8s (frames 1188 - 1464)
  // Outro: 48.8s - 53.8s (frames 1464 - 1614)

  let stage = 'Hook';
  let stageIdx = 0;
  let stageHeadline = 'NO OXYGEN';
  let stageBadge = 'WHAT IF';
  let stageSentence = 'What if Earth lost all oxygen for just 5 seconds?';
  let stageHighlight = '5 SECONDS';
  let badgeColor = '#38bdf8';

  if (sec >= 7.5 && sec < 14.8) {
    stage = '1 sec';
    stageIdx = 1;
    stageHeadline = '1 SECOND';
    stageBadge = 'ATMOSPHERE COLLAPSE';
    stageSentence = 'The daytime sky turns completely pitch black. No oxygen to scatter blue light.';
    stageHighlight = 'PITCH BLACK';
    badgeColor = '#94a3b8';
  } else if (sec >= 14.8 && sec < 22.1) {
    stage = '2 sec';
    stageIdx = 2;
    stageHeadline = '2 SECONDS';
    stageBadge = 'PRESSURE DROP';
    stageSentence = 'Your inner ears explode from instant 21% pressure drop. Raw UV light cooks your skin.';
    stageHighlight = 'EARDRUMS BURST';
    badgeColor = '#ef4444';
  } else if (sec >= 22.1 && sec < 31.5) {
    stage = '3 sec';
    stageIdx = 3;
    stageHeadline = '3 SECONDS';
    stageBadge = 'STRUCTURAL CRUMBLE';
    stageSentence = 'Every concrete skyscraper and bridge collapses into dust. Oxygen is the chemical binder.';
    stageHighlight = 'CONCRETE TO DUST';
    badgeColor = '#f59e0b';
  } else if (sec >= 31.5 && sec < 39.6) {
    stage = '4 sec';
    stageIdx = 4;
    stageHeadline = '4 SECONDS';
    stageBadge = 'ZERO COMBUSTION';
    stageSentence = 'Every engine dies. Billions of cars stall, and airplanes plunge out of the sky.';
    stageHighlight = 'PLANES FALL';
    badgeColor = '#f97316';
  } else if (sec >= 39.6 && sec < 48.8) {
    stage = '5 sec';
    stageIdx = 5;
    stageHeadline = '5 SECONDS';
    stageBadge = 'CRUSTAL SHATTER';
    stageSentence = "The ground vanishes beneath your feet. Earth's crust is 45% oxygen.";
    stageHighlight = 'WORLD CRUMBLES';
    badgeColor = '#dc2626';
  } else if (sec >= 48.8) {
    stage = 'Outro';
    stageIdx = 6;
    stageHeadline = 'BREATHE IN';
    stageBadge = 'OXYGEN RETURNS';
    stageSentence = 'You will never take 5 seconds for granted again.';
    stageHighlight = 'DEEP BREATH';
    badgeColor = '#10b981';
  }

  // Springs for smooth transitions
  const textSpring = spring({
    frame: frame % 225,
    fps,
    config: { damping: 14, stiffness: 180 },
  });

  const timelineNodes = ['0s', '1s', '2s', '3s', '4s', '5s', 'BREATHE'];

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#0c1222',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Master Audio: Gemini 3.8 Flash TTS Voiceover */}
      <Audio src={staticFile('oxygen_voice.mp3')} volume={1.0} />

      {/* 2. Interactive Three.js Clay Character & World */}
      <ThreeOxygenWorld stage={stage} progress={sec / 53.8} />

      {/* 3. Top Timeline Scrubber HUD (Reference Video 1:1 Match) */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 60,
          right: 60,
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            paddingBottom: 16,
          }}
        >
          {/* Base Track Line */}
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 20,
              right: 20,
              height: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              zIndex: 1,
            }}
          />

          {/* Active Fill Track Line */}
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 20,
              width: `${(stageIdx / (timelineNodes.length - 1)) * 100}%`,
              maxWidth: 'calc(100% - 40px)',
              height: 3,
              backgroundColor: '#ffffff',
              boxShadow: '0 0 10px rgba(255,255,255,0.8)',
              zIndex: 2,
              transition: 'width 0.4s ease',
            }}
          />

          {/* Timeline Nodes */}
          {timelineNodes.map((node, i) => {
            const isPassed = i <= stageIdx;
            const isCurrent = i === stageIdx;

            return (
              <div
                key={node}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    width: isCurrent ? 20 : 12,
                    height: isCurrent ? 20 : 12,
                    borderRadius: '50%',
                    backgroundColor: isPassed ? '#ffffff' : 'rgba(255, 255, 255, 0.35)',
                    boxShadow: isCurrent ? '0 0 16px rgba(255,255,255,0.9)' : 'none',
                    transition: 'all 0.3s ease',
                    marginBottom: 8,
                  }}
                />
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: isCurrent ? 800 : 500,
                    color: isPassed ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {node}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Elegant Top/Center Typography Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 190,
          left: 60,
          right: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 40,
          pointerEvents: 'none',
        }}
      >
        {/* Category Tag Badge */}
        <div
          style={{
            padding: '6px 20px',
            borderRadius: 999,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: badgeColor,
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          {stageBadge}
        </div>

        {/* Large Stage Headline */}
        <h1
          style={{
            fontSize: 82,
            fontWeight: 900,
            lineHeight: 1.05,
            margin: '0 0 14px 0',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            textShadow: '0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
          {stageHeadline}
        </h1>

        {/* Clean 2-Line Narrative Subtext */}
        <p
          style={{
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.35,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: 880,
            margin: 0,
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}
        >
          {stageSentence}
        </p>

        {/* Keyword Accent Pill */}
        <div
          style={{
            marginTop: 18,
            padding: '4px 16px',
            borderRadius: 8,
            background: 'rgba(0, 0, 0, 0.35)',
            border: `1px solid ${badgeColor}`,
            color: badgeColor,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.06em',
          }}
        >
          {stageHighlight}
        </div>
      </div>

      {/* 5. Subtle Soft Lens Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 55%, rgba(0, 0, 0, 0.45) 100%)',
          pointerEvents: 'none',
          zIndex: 35,
        }}
      />
    </div>
  );
};
