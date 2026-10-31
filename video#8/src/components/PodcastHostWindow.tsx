import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import timeline from '../data/timeline.json';

export const PodcastHostWindow: React.FC = () => {
  const frame = useCurrentFrame();

  // Get mouth openness from audio envelope
  const mouthFrames = timeline.mouth;
  const mouthOpen = mouthFrames[Math.min(frame, mouthFrames.length - 1)] || 0;

  // Natural head movement and blink
  const headBob = Math.sin(frame * 0.12) * 3;
  const headTilt = Math.sin(frame * 0.08) * 1.5;
  const isBlinking = frame % 110 < 5;
  const eyeScaleY = isBlinking ? 0.1 : 1;
  const eyebrowLift = mouthOpen > 0.4 ? -5 : 0;

  return (
    <div
      style={{
        position: 'absolute',
        top: 70,
        right: 45,
        width: 320,
        height: 340,
        borderRadius: 24,
        backgroundColor: '#18181b',
        border: '3px solid #facc15',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35)',
        overflow: 'hidden',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Header Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: '#09090b',
          borderBottom: '1px solid #27272a',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#ef4444',
              boxShadow: '0 0 8px #ef4444',
            }}
          />
          <span style={{ color: '#ef4444', fontSize: 13, fontWeight: 800, letterSpacing: '0.08em' }}>
            LIVE
          </span>
        </div>
        <span style={{ color: '#a1a1aa', fontSize: 12, fontWeight: 700 }}>
          RAJ SHAMANI
        </span>
      </div>

      {/* Host Canvas Area */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          backgroundColor: '#1e1b4b',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Studio Acoustic Panel Backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.15,
            backgroundImage: 'radial-gradient(#818cf8 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Studio Neon Accent Light */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: '#6366f1',
            filter: 'blur(40px)',
            opacity: 0.4,
          }}
        />

        {/* Vector Raj Shamani Host */}
        <svg
          viewBox="0 0 200 240"
          style={{
            width: 240,
            height: 280,
            transform: `translateY(${headBob}px) rotate(${headTilt}deg)`,
            transformOrigin: 'bottom center',
          }}
        >
          {/* Shoulders / Black Crewneck */}
          <path
            d="M 20 230 C 30 170, 70 150, 100 150 C 130 150, 170 170, 180 230 Z"
            fill="#09090b"
          />
          {/* Neck */}
          <rect x="86" y="115" width="28" height="42" rx="6" fill="#d49b6a" />

          {/* Head */}
          <ellipse cx="100" cy="85" rx="42" ry="48" fill="#e0a979" />

          {/* Ears */}
          <ellipse cx="58" cy="85" rx="7" ry="12" fill="#d49b6a" />
          <ellipse cx="142" cy="85" rx="7" ry="12" fill="#d49b6a" />

          {/* Dark Pompadour Hair */}
          <path
            d="M 54 75 C 50 35, 75 22, 100 22 C 128 22, 150 36, 146 75 C 138 52, 118 42, 100 44 C 80 42, 62 52, 54 75 Z"
            fill="#18181b"
          />

          {/* Groomed Beard & Stubble */}
          <path
            d="M 64 80 C 64 125, 78 135, 100 135 C 122 135, 136 125, 136 80 C 136 100, 126 126, 100 126 C 74 126, 64 100, 64 80 Z"
            fill="#27272a"
          />

          {/* Eyebrows */}
          <path
            d={`M 75 ${60 + eyebrowLift} Q 85 ${56 + eyebrowLift} 94 ${60 + eyebrowLift}`}
            fill="none"
            stroke="#18181b"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d={`M 106 ${60 + eyebrowLift} Q 115 ${56 + eyebrowLift} 125 ${60 + eyebrowLift}`}
            fill="none"
            stroke="#18181b"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Eyes (Blinking) */}
          <g transform={`scale(1, ${eyeScaleY})`} style={{ transformOrigin: '100px 72px' }}>
            {/* White */}
            <ellipse cx="84" cy="72" rx="7" ry="5.5" fill="#ffffff" />
            <ellipse cx="116" cy="72" rx="7" ry="5.5" fill="#ffffff" />
            {/* Pupil */}
            <circle cx="85" cy="72" r="3.5" fill="#18181b" />
            <circle cx="117" cy="72" r="3.5" fill="#18181b" />
            {/* Catchlight */}
            <circle cx="86" cy="71" r="1.2" fill="#ffffff" />
            <circle cx="118" cy="71" r="1.2" fill="#ffffff" />
          </g>

          {/* Nose */}
          <path d="M 100 70 L 100 88 L 106 88" fill="none" stroke="#b4784a" strokeWidth="2.5" strokeLinecap="round" />

          {/* Dynamic Lip-Sync Mouth */}
          <g transform={`translate(100, 104)`}>
            {mouthOpen < 0.1 ? (
              // Closed smile
              <path d="M -12 0 Q 0 4 12 0" fill="none" stroke="#7f1d1d" strokeWidth="3" strokeLinecap="round" />
            ) : (
              // Open talking mouth driven by audio envelope
              <ellipse
                cx="0"
                cy="0"
                rx={11}
                ry={interpolate(mouthOpen, [0, 1], [3, 13])}
                fill="#450a0a"
                stroke="#7f1d1d"
                strokeWidth="2.5"
              />
            )}
            {mouthOpen > 0.35 && (
              // Teeth line
              <rect x="-8" y={-interpolate(mouthOpen, [0, 1], [1, 9])} width="16" height="3" rx="1.5" fill="#ffffff" />
            )}
          </g>

          {/* Shure SM7B Podcast Microphone in foreground */}
          <g transform="translate(130, 135) rotate(-22)">
            <rect x="-10" y="-35" width="20" height="45" rx="8" fill="#27272a" stroke="#52525b" strokeWidth="2" />
            <line x1="-8" y1="-10" x2="8" y2="-10" stroke="#71717a" strokeWidth="1.5" />
            <rect x="-3" y="10" width="6" height="40" fill="#3f3f46" />
          </g>
        </svg>
      </div>

      {/* Audio Waveform Meter at bottom of window */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          height: 24,
          backgroundColor: '#09090b',
          borderTop: '1px solid #27272a',
          padding: '0 12px',
        }}
      >
        {Array.from({ length: 18 }).map((_, i) => {
          const barHeight = Math.max(4, Math.sin(frame * 0.3 + i * 0.8) * 14 * mouthOpen);
          return (
            <div
              key={i}
              style={{
                width: 3,
                height: barHeight,
                backgroundColor: i % 3 === 0 ? '#facc15' : '#38bdf8',
                borderRadius: 2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
