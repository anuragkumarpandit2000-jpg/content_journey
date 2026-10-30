import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const KATHA_PHRASES = [
  { startSec: 0.0, endSec: 1.2, text: 'उबना नहीं', pill: 'उबना नहीं', chip: 'साधना का path' },
  { startSec: 1.2, endSec: 2.2, text: 'घबराना नहीं', pill: 'घबराना नहीं', chip: 'साधना का path' },
  { startSec: 2.2, endSec: 3.5, text: 'निराश नहीं होना', pill: 'निराश नहीं होना', chip: 'साधना का path' },
  { startSec: 3.5, endSec: 4.8, text: 'और हारना नहीं', pill: 'और हारना नहीं', chip: 'साधना का path' },
  { startSec: 4.8, endSec: 7.24, text: 'अपनी साधना में चलते रहना', pill: 'चलते रहना', chip: 'साधना का path' },
  { startSec: 7.24, endSec: 9.5, text: 'यदि भ्रष्ट हो जाओ तो भी', pill: 'जाओ तो भी', chip: 'गिरना भी पड़े' },
  { startSec: 9.5, endSec: 11.5, text: 'यदि गिर जाओ तो भी', pill: 'यदि गिर जाओ तो भी', chip: 'गिरना भी पड़े' },
  { startSec: 11.5, endSec: 13.0, text: 'नियम टूट जाए तो भी', pill: 'नियम टूट जाए तो भी', chip: 'गिरना भी पड़े' },
  { startSec: 13.0, endSec: 16.0, text: 'अगर गलत मार्ग में कदम चला गया तो भी', pill: 'चला गया तो भी', chip: 'गिरना भी पड़े' },
  { startSec: 16.0, endSec: 18.5, text: 'हम प्रयास नहीं छोड़ेंगे', pill: 'हम प्रयास नहीं छोड़ेंगे', chip: 'उठे' },
  { startSec: 18.5, endSec: 20.8, text: 'तो हम जीत जायेंगे', pill: 'तो हम जीत जायेंगे', chip: 'उठे' },
  { startSec: 20.8, endSec: 23.5, text: 'प्रयास छोड़ दिया तब तो फिर सब बेकार हो जाएगा', pill: 'सब बेकार हो जाएगा', chip: 'रुक गए तो' },
  { startSec: 23.5, endSec: 26.5, text: 'नाम जप करना, बार-बार भोगों से मन को हटा कर', pill: 'मन को हटा', chip: 'नाम जप' },
  { startSec: 26.5, endSec: 29.5, text: 'भगवान में लगाना', pill: 'भगवान में लगाना', chip: 'नाम जप' },
  { startSec: 29.5, endSec: 33.0, text: 'यदि हम हार भी जाते हैं तो भी हमको नहीं रुकना', pill: 'तो भी हमको नहीं रुकना', chip: 'रुकना नहीं' },
  { startSec: 33.0, endSec: 37.2, text: 'हमें प्रयास करते रहना है', pill: 'हमें प्रयास करते रहना है', chip: 'रुकना नहीं' },
];

export const KathaCaptions: React.FC<{ currentSec: number }> = ({ currentSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeItem =
    KATHA_PHRASES.find((p) => currentSec >= p.startSec && currentSec < p.endSec) ||
    KATHA_PHRASES[0];

  const phraseStartFrame = activeItem.startSec * fps;
  const pop = spring({
    frame: frame - phraseStartFrame,
    fps,
    config: { damping: 12, stiffness: 220 },
  });

  return (
    <>
      {/* 1. Top-Left Chapter Chip (Matching Reference Video) */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 45,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 22px',
          borderRadius: 999,
          backgroundColor: '#f59e0b',
          boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffffff' }} />
        <span
          style={{
            color: '#ffffff',
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: '0.04em',
          }}
        >
          {activeItem.chip}
        </span>
      </div>

      {/* 2. Middle Marigold Pill Captions (Active Spoken Word Pill) */}
      <div
        style={{
          position: 'absolute',
          top: 550,
          left: 40,
          right: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            transform: `scale(${interpolate(pop, [0, 1], [0.88, 1.0])})`,
            padding: '12px 32px',
            borderRadius: 16,
            backgroundColor: '#facc15',
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.45)',
            border: '3px solid #ffffff',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              color: '#0f172a',
              fontSize: 48,
              fontWeight: 900,
              letterSpacing: '0.02em',
              lineHeight: 1.2,
            }}
          >
            {activeItem.pill}
          </span>
        </div>
      </div>
    </>
  );
};
