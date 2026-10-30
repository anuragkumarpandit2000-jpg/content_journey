import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface MaharajMedallionProps {
  isSpeaking?: boolean;
}

export const MaharajMedallion: React.FC<MaharajMedallionProps> = ({ isSpeaking = true }) => {
  const frame = useCurrentFrame();

  // Subtle breathing / blessing sway
  const sway = Math.sin(frame * 0.08) * 3;
  const mouthOpen = isSpeaking ? (Math.sin(frame * 0.5) > 0.2 ? 6 : 2) : 2;
  const handSway = Math.sin(frame * 0.06) * 4;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 720,
        background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 30,
      }}
    >
      {/* Decorative Starry Background */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6 }}
      >
        {[
          [80, 60], [220, 140], [350, 80], [700, 100], [840, 50], [960, 130],
          [120, 260], [260, 320], [800, 240], [920, 310], [60, 480], [980, 490]
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={(i % 3) + 2}
            fill="#fef08a"
            opacity={0.4 + 0.6 * Math.sin(frame * 0.1 + i)}
          />
        ))}
      </svg>

      {/* Marigold Flower Garland Border on Top Edge */}
      <div
        style={{
          position: 'absolute',
          top: -14,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 40,
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 48,
              height: 28,
              borderRadius: '50%',
              backgroundColor: i % 2 === 0 ? '#f59e0b' : '#ea580c',
              border: '2px solid #fbbf24',
              boxShadow: '0 2px 8px rgba(245, 158, 11, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Golden Radiating Sunburst Halo Behind Maharaj */}
      <div
        style={{
          position: 'relative',
          width: 580,
          height: 580,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fde047 0%, #ca8a04 70%, #854d0e 100%)',
          padding: 16,
          boxShadow: '0 0 50px rgba(250, 204, 21, 0.45), inset 0 0 20px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -40,
        }}
      >
        {/* Scalloped Gold Medallion Rim */}
        <svg
          style={{
            position: 'absolute',
            inset: -12,
            width: 'calc(100% + 24px)',
            height: 'calc(100% + 24px)',
            transform: `rotate(${frame * 0.05}deg)`,
          }}
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i / 36) * Math.PI * 2;
            const cx = 50 + Math.cos(angle) * 48;
            const cy = 50 + Math.sin(angle) * 48;
            return <circle key={i} cx={cx} cy={cy} r="2.8" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />;
          })}
        </svg>

        {/* Inner Circle: Peaceful Ivory/Cream Temple Setting */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(180deg, #fef9c3 0%, #fde047 100%)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Flat 2D Illustrated Premanand Maharaj Character */}
          <svg
            viewBox="0 0 400 400"
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: `translateX(-50%) translateY(${sway}px)`,
              width: 380,
              height: 380,
            }}
          >
            {/* Golden Asana Base (Throne) */}
            <rect x="70" y="340" width="260" height="60" rx="10" fill="#dc2626" stroke="#fbbf24" strokeWidth="4" />
            <rect x="90" y="352" width="220" height="20" rx="4" fill="#b91c1c" />

            {/* Saffron Robe / Kurta (Yellow-Gold) */}
            <path
              d="M100 360 C100 280, 130 250, 200 250 C270 250, 300 280, 300 360 Z"
              fill="#eab308"
              stroke="#ca8a04"
              strokeWidth="4"
            />
            {/* Shawl Drape across shoulders */}
            <path
              d="M120 270 C160 300, 240 300, 280 270 L265 350 C230 330, 170 330, 135 350 Z"
              fill="#facc15"
              stroke="#ca8a04"
              strokeWidth="3"
            />

            {/* Neck Rudraksha Beads */}
            {Array.from({ length: 9 }).map((_, i) => {
              const cx = 160 + i * 10;
              const cy = 250 + Math.sin((i / 8) * Math.PI) * 12;
              return <circle key={i} cx={cx} cy={cy} r="4.5" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />;
            })}

            {/* Face / Head */}
            <ellipse cx="200" cy="180" rx="60" ry="68" fill="#fde68a" stroke="#d97706" strokeWidth="3" />

            {/* Long Flowing White Beard */}
            <path
              d="M150 200 C150 310, 180 340, 200 340 C220 340, 250 310, 250 200 C230 230, 170 230, 150 200 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="3"
            />

            {/* Peaceful Eyes */}
            <path d="M165 170 Q175 162 185 170" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M215 170 Q225 162 235 170" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />

            {/* Holy Tilak (Chandan Tripundra with Red Tilak) */}
            <path d="M192 135 L208 135 M190 142 L210 142" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="200" cy="148" rx="3.5" ry="8" fill="#dc2626" />
            <circle cx="200" cy="158" r="3" fill="#f59e0b" />

            {/* Nose */}
            <path d="M200 166 L196 182 L204 182" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Animated Mouth (Lip sync to speech) */}
            <ellipse cx="200" cy="208" rx="7" ry={mouthOpen} fill="#b91c1c" />

            {/* White Hair on Sides */}
            <path d="M142 160 C130 180, 135 220, 150 240 L146 170 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M258 160 C270 180, 265 220, 250 240 L254 170 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

            {/* Blessing Hand (Abhaya Mudra) on the Right */}
            <g transform={`translate(${handSway}, 0)`}>
              {/* Hand Palm */}
              <ellipse cx="305" cy="245" rx="18" ry="24" fill="#fde68a" stroke="#d97706" strokeWidth="3" />
              {/* Fingers */}
              <rect x="290" y="210" width="7" height="24" rx="3.5" fill="#fde68a" stroke="#d97706" strokeWidth="2.5" />
              <rect x="299" y="204" width="7" height="28" rx="3.5" fill="#fde68a" stroke="#d97706" strokeWidth="2.5" />
              <rect x="308" y="208" width="7" height="26" rx="3.5" fill="#fde68a" stroke="#d97706" strokeWidth="2.5" />
              <rect x="317" y="216" width="7" height="20" rx="3.5" fill="#fde68a" stroke="#d97706" strokeWidth="2.5" />
              {/* Wrist Mala */}
              <circle cx="300" cy="268" r="4" fill="#78350f" />
              <circle cx="308" cy="270" r="4" fill="#78350f" />
              <circle cx="316" cy="268" r="4" fill="#78350f" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
