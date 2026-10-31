import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import timeline from '../data/timeline.json';

export const ComicHostBubble: React.FC = () => {
  const frame = useCurrentFrame();

  const mouthFrames = timeline.mouth;
  const mouthOpen = mouthFrames[Math.min(frame, mouthFrames.length - 1)] || 0;

  const headBob = Math.sin(frame * 0.15) * 4;
  const isBlinking = frame % 95 < 6;
  const eyeScaleY = isBlinking ? 0.1 : 1;

  return (
    <div
      style={{
        position: 'absolute',
        top: 60,
        right: 45,
        width: 330,
        height: 360,
        borderRadius: 24,
        backgroundColor: '#fef08a',
        border: '5px solid #09090b',
        boxShadow: '10px 10px 0px #09090b',
        overflow: 'hidden',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Comic Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: '#ef4444',
          borderBottom: '4px solid #09090b',
        }}
      >
        <span style={{ color: '#ffffff', fontSize: 13, fontWeight: 900, letterSpacing: '0.08em' }}>
          ★ RAJ SHAMANI
        </span>
        <span style={{ color: '#fef08a', fontSize: 12, fontWeight: 900 }}>
          TALKING LIVE
        </span>
      </div>

      {/* Comic Host Portrait Area */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          backgroundColor: '#38bdf8',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Halftone dots in panel */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.2,
            backgroundImage: 'radial-gradient(#09090b 2px, transparent 2px)',
            backgroundSize: '12px 12px',
          }}
        />

        {/* Comic Character SVG */}
        <svg
          viewBox="0 0 200 240"
          style={{
            width: 240,
            height: 280,
            transform: `translateY(${headBob}px)`,
            transformOrigin: 'bottom center',
          }}
        >
          {/* Black Ink Body */}
          <path
            d="M 20 230 C 30 170, 70 150, 100 150 C 130 150, 170 170, 180 230 Z"
            fill="#09090b"
            stroke="#09090b"
            strokeWidth="4"
          />
          {/* Red Tie / Collar */}
          <polygon points="100,165 88,205 100,230 112,205" fill="#ef4444" stroke="#09090b" strokeWidth="3" />

          {/* Neck */}
          <rect x="86" y="115" width="28" height="42" rx="4" fill="#fed7aa" stroke="#09090b" strokeWidth="4" />

          {/* Head */}
          <ellipse cx="100" cy="85" rx="42" ry="48" fill="#ffedd5" stroke="#09090b" strokeWidth="4" />

          {/* Ears */}
          <ellipse cx="58" cy="85" rx="7" ry="12" fill="#fed7aa" stroke="#09090b" strokeWidth="3" />
          <ellipse cx="142" cy="85" rx="7" ry="12" fill="#fed7aa" stroke="#09090b" strokeWidth="3" />

          {/* Comic Ink Hair */}
          <path
            d="M 52 75 C 48 30, 75 18, 100 18 C 128 18, 152 30, 148 75 C 138 50, 118 38, 100 40 C 80 38, 62 50, 52 75 Z"
            fill="#09090b"
          />

          {/* Beard Line */}
          <path
            d="M 64 80 C 64 125, 78 135, 100 135 C 122 135, 136 125, 136 80"
            fill="none"
            stroke="#09090b"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Eyebrows */}
          <path d="M 75 58 Q 85 52 95 58" fill="none" stroke="#09090b" strokeWidth="5" strokeLinecap="round" />
          <path d="M 105 58 Q 115 52 125 58" fill="none" stroke="#09090b" strokeWidth="5" strokeLinecap="round" />

          {/* Manga Big Eyes */}
          <g transform={`scale(1, ${eyeScaleY})`} style={{ transformOrigin: '100px 72px' }}>
            <ellipse cx="84" cy="72" rx="8" ry="7" fill="#ffffff" stroke="#09090b" strokeWidth="3.5" />
            <ellipse cx="116" cy="72" rx="8" ry="7" fill="#ffffff" stroke="#09090b" strokeWidth="3.5" />
            <circle cx="85" cy="72" r="4" fill="#09090b" />
            <circle cx="117" cy="72" r="4" fill="#09090b" />
            <circle cx="87" cy="70" r="1.5" fill="#ffffff" />
            <circle cx="119" cy="70" r="1.5" fill="#ffffff" />
          </g>

          {/* Nose */}
          <path d="M 100 72 L 98 86 L 105 86" fill="none" stroke="#09090b" strokeWidth="3.5" strokeLinecap="round" />

          {/* Animated Comic Lip-Sync Mouth */}
          <g transform="translate(100, 105)">
            {mouthOpen < 0.1 ? (
              <path d="M -12 0 Q 0 4 12 0" fill="none" stroke="#09090b" strokeWidth="4" strokeLinecap="round" />
            ) : (
              <ellipse
                cx="0"
                cy="0"
                rx={12}
                ry={interpolate(mouthOpen, [0, 1], [4, 14])}
                fill="#dc2626"
                stroke="#09090b"
                strokeWidth="3.5"
              />
            )}
            {mouthOpen > 0.4 && (
              <rect x="-8" y={-interpolate(mouthOpen, [0, 1], [2, 9])} width="16" height="3" rx="1" fill="#ffffff" />
            )}
          </g>

          {/* Comic Mic */}
          <g transform="translate(135, 140) rotate(-25)">
            <rect x="-8" y="-30" width="16" height="40" rx="6" fill="#facc15" stroke="#09090b" strokeWidth="3" />
            <line x1="-6" y1="-8" x2="6" y2="-8" stroke="#09090b" strokeWidth="2" />
            <rect x="-2" y="10" width="4" height="35" fill="#09090b" />
          </g>
        </svg>
      </div>
    </div>
  );
};
