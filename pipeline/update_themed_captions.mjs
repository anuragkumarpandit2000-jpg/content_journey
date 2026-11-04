import fs from 'fs';

const THEMES = [
  { num: 12, glow: '#22D3EE', pillBg: 'rgba(15, 23, 42, 0.92)', border: 'rgba(56, 189, 248, 0.4)' },
  { num: 13, glow: '#22C55E', pillBg: 'rgba(13, 17, 23, 0.92)', border: 'rgba(34, 197, 94, 0.4)' },
  { num: 14, glow: '#25D366', pillBg: 'rgba(11, 20, 26, 0.92)', border: 'rgba(37, 211, 102, 0.4)' },
  { num: 15, glow: '#C084FC', pillBg: 'rgba(9, 9, 11, 0.92)', border: 'rgba(168, 85, 247, 0.4)' },
];

for (const t of THEMES) {
  const p = `D:/anurag/content_journey/videos/video#${t.num}/src/components/DynamicCaptions.tsx`;
  const code = `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TIMELINE_SEGMENTS } from '../data/timelineData';

export const DynamicCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find active segment
  const currentSegment = TIMELINE_SEGMENTS.find(
    (seg) => frame >= seg.startFrame && frame < seg.endFrame
  );

  if (!currentSegment) return null;

  const segDuration = currentSegment.endFrame - currentSegment.startFrame;
  const segProgress = (frame - currentSegment.startFrame) / Math.max(1, segDuration);
  const words = currentSegment.hinglish.split(' ');
  const activeWordIdx = Math.min(
    words.length - 1,
    Math.floor(segProgress * words.length * 1.05)
  );

  const pop = spring({
    frame: frame % 12,
    fps,
    config: { damping: 12, mass: 0.4, stiffness: 220 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 240,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 40px',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          backgroundColor: '${t.pillBg}',
          border: '2px solid ${t.border}',
          borderRadius: 32,
          padding: '24px 38px',
          maxWidth: 960,
          textAlign: 'center',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.75), 0 0 35px ${t.border}',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 34,
            fontWeight: 800,
            lineHeight: 1.35,
          }}
        >
          {words.map((w, i) => {
            const isHighlight = currentSegment.keywords.some((kw) =>
              kw.toLowerCase().includes(w.toLowerCase().replace(/[^a-z0-9]/gi, ''))
            );
            const isActive = i === activeWordIdx;

            return (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  color: isActive ? '${t.glow}' : isHighlight ? '#FACC15' : '#FFFFFF',
                  textShadow: isActive
                    ? '0 0 25px ${t.glow}, 0 0 10px ${t.glow}'
                    : isHighlight
                    ? '0 0 15px rgba(250, 204, 21, 0.6)'
                    : 'none',
                  transform: isActive ? \`scale(\${1 + pop * 0.12}) translateY(-2px)\` : 'none',
                  transition: 'all 0.1s ease',
                  letterSpacing: '0.02em',
                }}
              >
                {w}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
`;

  fs.writeFileSync(p, code);
  console.log(`✅ Themed DynamicCaptions.tsx updated for Video #${t.num}`);
}
