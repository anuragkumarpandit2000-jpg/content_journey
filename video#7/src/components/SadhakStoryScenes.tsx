import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface SadhakStoryScenesProps {
  currentSec: number;
}

export const SadhakStoryScenes: React.FC<SadhakStoryScenesProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();

  // Walk cycle
  const walkBob = Math.abs(Math.sin(frame * 0.25)) * 12;
  const legSwing = Math.sin(frame * 0.25) * 25;
  const armSwing = Math.sin(frame * 0.25) * 30;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1200,
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      {/* ========================================================
          SCENE 1: (0s - 7.24s) "साधना का मार्ग / चलना"
          ======================================================== */}
      {currentSec < 7.24 && (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #fef08a 0%, #fed7aa 50%, #86efac 100%)' }}>
          {/* Temple in the distance */}
          <svg style={{ position: 'absolute', top: 180, right: 120, width: 220, height: 260 }} viewBox="0 0 100 120">
            {/* Shikhara / Dome */}
            <path d="M50 10 Q30 70 20 100 L80 100 Q70 70 50 10 Z" fill="#d97706" />
            <path d="M50 20 Q35 70 28 100 L72 100 Q65 70 50 20 Z" fill="#f59e0b" />
            <circle cx="50" cy="10" r="4" fill="#fbbf24" />
            {/* Saffron Flag fluttering */}
            <path d="M50 6 L50 -10 L70 -3 L50 2 Z" fill="#ea580c" />
            {/* Temple Base */}
            <rect x="15" y="100" width="70" height="20" fill="#b45309" />
          </svg>

          {/* Sun on horizon */}
          <div
            style={{
              position: 'absolute',
              top: 240,
              right: 170,
              width: 130,
              height: 130,
              borderRadius: '50%',
              backgroundColor: '#fef08a',
              boxShadow: '0 0 60px #fde047',
              zIndex: 1,
            }}
          />

          {/* Distant Trees */}
          <div style={{ position: 'absolute', top: 320, left: 60, width: 140, height: 180 }}>
            <circle cx="70" cy="70" r="60" fill="#15803d" />
            <circle cx="50" cy="50" r="45" fill="#16a34a" />
            <rect x="62" y="110" width="16" height="70" fill="#78350f" />
          </div>

          {/* Straight Perspective Path */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}>
            <polygon points="540,360 560,360 840,1200 240,1200" fill="#d4c3b3" />
            <polygon points="545,360 555,360 620,1200 460,1200" fill="#c4b09e" />
          </svg>

          {/* 2D Animated Sadhak Walking forward */}
          <svg
            viewBox="0 0 200 300"
            style={{
              position: 'absolute',
              bottom: 300 - walkBob,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 220,
              height: 330,
              zIndex: 5,
            }}
          >
            {/* Legs with walk cycle */}
            <g transform={`rotate(${legSwing}, 85, 190)`}>
              <rect x="80" y="190" width="16" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
              <ellipse cx="88" cy="265" rx="10" ry="6" fill="#e2e8f0" />
            </g>
            <g transform={`rotate(${-legSwing}, 115, 190)`}>
              <rect x="108" y="190" width="16" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
              <ellipse cx="116" cy="265" rx="10" ry="6" fill="#e2e8f0" />
            </g>

            {/* Dhoti */}
            <path d="M70 145 C65 190, 75 205, 95 205 C115 205, 125 190, 130 145 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />

            {/* Torso & Saffron Angavastra */}
            <rect x="74" y="90" width="52" height="65" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            <path d="M72 90 L126 155 L116 155 L68 95 Z" fill="#ea580c" />
            <path d="M74 125 L126 90 L126 102 L78 135 Z" fill="#f97316" />

            {/* Japa Mala in Right Hand */}
            <circle cx="140" cy="160" r="14" fill="none" stroke="#78350f" strokeWidth="4" strokeDasharray="3 3" />

            {/* Arms swinging */}
            <g transform={`rotate(${armSwing}, 74, 95)`}>
              <rect x="66" y="95" width="14" height="60" rx="7" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            </g>
            <g transform={`rotate(${-armSwing}, 126, 95)`}>
              <rect x="120" y="95" width="14" height="60" rx="7" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            </g>

            {/* Head */}
            <circle cx="100" cy="62" r="28" fill="#f0b884" stroke="#d97706" strokeWidth="2.5" />
            {/* Shikha / Topknot */}
            <ellipse cx="100" cy="32" rx="12" ry="10" fill="#18181b" />
            <circle cx="100" cy="22" r="6" fill="#18181b" />
            {/* Tilak */}
            <line x1="97" y1="48" x2="103" y2="48" stroke="#ffffff" strokeWidth="2" />
            <circle cx="100" cy="54" r="2.5" fill="#dc2626" />
            {/* Determined Eyes */}
            <circle cx="92" cy="62" r="3" fill="#18181b" />
            <circle cx="108" cy="62" r="3" fill="#18181b" />
            {/* Mouth */}
            <path d="M96 74 Q100 78 104 74" fill="none" stroke="#78350f" strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* ========================================================
          SCENE 2: (7.24s - 13.92s) "यदि गिर जाओ तो भी / सीढ़ियां"
          ======================================================== */}
      {currentSec >= 7.24 && currentSec < 13.92 && (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #e5e5e5 0%, #d4d4d4 50%, #a3a3a3 100%)' }}>
          {/* Temple Steps */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: 280 + i * 85,
                left: 0,
                right: 0,
                height: 85,
                backgroundColor: i % 2 === 0 ? '#d4d4d8' : '#e4e4e7',
                borderBottom: '3px solid #71717a',
              }}
            />
          ))}

          {/* Flickering Diya in alcove */}
          <div style={{ position: 'absolute', top: 180, left: '50%', transform: 'translateX(-50%)' }}>
            <ellipse cx="50" cy="50" rx="36" ry="16" fill="#b45309" stroke="#78350f" strokeWidth="3" />
            <polygon points="40,50 60,50 50,15" fill="#facc15" />
            <polygon points="44,50 56,50 50,25" fill="#ea580c" />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 36,
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: 'rgba(250, 204, 21, 0.4)',
                filter: 'blur(6px)',
                opacity: 0.7 + 0.3 * Math.sin(frame * 0.4),
              }}
            />
          </div>

          {/* Sadhak Fallen on Stairs, but looking up with resilience */}
          <svg
            viewBox="0 0 300 200"
            style={{
              position: 'absolute',
              top: 540,
              left: '50%',
              transform: 'translateX(-50%) rotate(15deg)',
              width: 320,
              height: 220,
            }}
          >
            {/* Lying Body */}
            <rect x="80" y="90" width="90" height="40" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            <rect x="75" y="85" width="45" height="45" rx="6" fill="#ea580c" />
            <rect x="165" y="95" width="80" height="30" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

            {/* Arm pushing off ground */}
            <rect x="110" y="125" width="16" height="45" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            {/* Japa Mala */}
            <circle cx="70" cy="140" r="12" fill="none" stroke="#78350f" strokeWidth="4" strokeDasharray="3 3" />

            {/* Head tilted with strong determination */}
            <circle cx="55" cy="100" r="28" fill="#f0b884" stroke="#d97706" strokeWidth="2.5" />
            <ellipse cx="30" cy="100" rx="10" ry="12" fill="#18181b" />
            <circle cx="50" cy="95" r="3" fill="#18181b" />
            <path d="M48 108 Q54 112 60 108" fill="none" stroke="#78350f" strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* ========================================================
          SCENE 3: (13.92s - 20.48s) "हम प्रयास नहीं छोड़ेंगे / जीत जायेंगे"
          ======================================================== */}
      {currentSec >= 13.92 && currentSec < 20.48 && (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #fdba74 0%, #fed7aa 40%, #15803d 100%)' }}>
          {/* Giant Rising Sunburst */}
          <div
            style={{
              position: 'absolute',
              top: 160,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #fde047 0%, #ea580c 80%, transparent 100%)',
              filter: 'blur(10px)',
              opacity: 0.85,
            }}
          />
          {/* Radiating Sun Rays */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i / 16) * Math.PI * 2;
              const x2 = 540 + Math.cos(angle) * 800;
              const y2 = 320 + Math.sin(angle) * 800;
              return <line key={i} x1="540" y1="320" x2={x2} y2={y2} stroke="#fef08a" strokeWidth="8" opacity="0.4" />;
            })}
          </svg>

          {/* Green hilltop */}
          <ellipse cx="540" cy="980" rx="580" ry="240" fill="#16a34a" />

          {/* Sadhak Standing Tall with Both Arms / Fist Raised in Victory */}
          <svg
            viewBox="0 0 200 300"
            style={{
              position: 'absolute',
              bottom: 280,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 260,
              height: 360,
              zIndex: 10,
            }}
          >
            {/* Legs standing firm */}
            <rect x="75" y="180" width="18" height="85" rx="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.5" />
            <rect x="107" y="180" width="18" height="85" rx="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.5" />

            {/* Dhoti */}
            <path d="M68 135 C60 180, 75 195, 100 195 C125 195, 140 180, 132 135 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />

            {/* Torso with Saffron Angavastra */}
            <rect x="72" y="80" width="56" height="65" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            <path d="M70 80 L128 145 L116 145 L66 85 Z" fill="#ea580c" />

            {/* Both Arms Raised High in Triump */}
            <g transform="rotate(-35, 70, 85)">
              <rect x="62" y="25" width="16" height="70" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
              <circle cx="70" cy="20" r="10" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            </g>
            <g transform="rotate(35, 130, 85)">
              <rect x="122" y="25" width="16" height="70" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
              <circle cx="130" cy="20" r="10" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            </g>

            {/* Head looking up in ecstasy */}
            <circle cx="100" cy="55" r="30" fill="#f0b884" stroke="#d97706" strokeWidth="2.5" />
            <ellipse cx="100" cy="22" rx="12" ry="10" fill="#18181b" />
            <circle cx="100" cy="12" r="6" fill="#18181b" />
            <circle cx="92" cy="52" r="3" fill="#18181b" />
            <circle cx="108" cy="52" r="3" fill="#18181b" />
            <path d="M94 65 Q100 74 106 65" fill="#b91c1c" stroke="#78350f" strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* ========================================================
          SCENE 4: (20.48s - 27.0s) "नाम जप / कमल पर ध्यान"
          ======================================================== */}
      {currentSec >= 20.48 && currentSec < 27.0 && (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #090d16 0%, #1e1b4b 60%, #312e81 100%)' }}>
          {/* Falling Divine Coins / Gems */}
          {Array.from({ length: 12 }).map((_, i) => {
            const dropY = ((frame * 3 + i * 90) % 700) + 120;
            const dropX = 160 + ((i * 73) % 760);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: dropY,
                  left: dropX,
                  width: 22,
                  height: 22,
                  borderRadius: i % 2 === 0 ? '50%' : '4px',
                  backgroundColor: i % 2 === 0 ? '#facc15' : '#38bdf8',
                  boxShadow: '0 0 16px rgba(250, 204, 21, 0.8)',
                  transform: `rotate(${frame * 2 + i * 30}deg)`,
                }}
              />
            );
          })}

          {/* Spiritual Aura / Halo */}
          <div
            style={{
              position: 'absolute',
              top: 260,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 380,
              height: 380,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(234, 88, 12, 0.1) 60%, transparent 100%)',
              filter: 'blur(16px)',
            }}
          />

          {/* Glowing Pink Lotus Throne */}
          <svg style={{ position: 'absolute', bottom: 330, left: '50%', transform: 'translateX(-50%)', width: 340, height: 160 }} viewBox="0 0 200 100">
            {/* Center & Side Lotus Petals */}
            <path d="M100 20 Q120 70 100 90 Q80 70 100 20 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2" />
            <path d="M70 35 Q100 70 85 90 Q60 70 70 35 Z" fill="#f9a8d4" stroke="#db2777" strokeWidth="2" />
            <path d="M130 35 Q100 70 115 90 Q140 70 130 35 Z" fill="#f9a8d4" stroke="#db2777" strokeWidth="2" />
            <path d="M45 50 Q80 75 70 95 Q35 75 45 50 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
            <path d="M155 50 Q120 75 130 95 Q165 75 155 50 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          </svg>

          {/* Sadhak in Padmasana (Lotus Pose) Meditating with Japa Mala */}
          <svg
            viewBox="0 0 200 240"
            style={{
              position: 'absolute',
              bottom: 380,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 220,
              height: 260,
              zIndex: 10,
            }}
          >
            {/* Crossed Legs (Padmasana) */}
            <ellipse cx="100" cy="180" rx="65" ry="24" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
            {/* Feet resting on thighs */}
            <circle cx="50" cy="175" r="10" fill="#f0b884" />
            <circle cx="150" cy="175" r="10" fill="#f0b884" />

            {/* Torso & Angavastra */}
            <rect x="74" y="90" width="52" height="70" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            <path d="M72 90 L126 155 L116 155 L68 95 Z" fill="#ea580c" />

            {/* Hands holding glowing Japa Mala */}
            <ellipse cx="100" cy="150" rx="20" ry="14" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            <circle cx="100" cy="158" r="18" fill="none" stroke="#facc15" strokeWidth="4" strokeDasharray="3 3" />

            {/* Peaceful Meditative Face */}
            <circle cx="100" cy="62" r="28" fill="#f0b884" stroke="#d97706" strokeWidth="2.5" />
            <ellipse cx="100" cy="32" rx="12" ry="10" fill="#18181b" />
            <circle cx="100" cy="22" r="6" fill="#18181b" />
            {/* Closed Serene Eyes */}
            <path d="M90 62 Q95 68 100 62" fill="none" stroke="#18181b" strokeWidth="2.5" />
            <path d="M100 62 Q105 68 110 62" fill="none" stroke="#18181b" strokeWidth="2.5" />
            <path d="M96 74 Q100 78 104 74" fill="none" stroke="#78350f" strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* ========================================================
          SCENE 5: (27.0s - 37.2s) "रुकना नहीं / प्रयास करते रहना"
          ======================================================== */}
      {currentSec >= 27.0 && (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #fef08a 0%, #fed7aa 40%, #86efac 100%)' }}>
          {/* Sunbeams and Clear Horizon */}
          <div
            style={{
              position: 'absolute',
              top: 220,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 180,
              height: 180,
              borderRadius: '50%',
              backgroundColor: '#fef08a',
              boxShadow: '0 0 80px #fde047',
            }}
          />

          {/* Long golden pathway to temple */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <polygon points="540,340 560,340 860,1200 220,1200" fill="#fde047" opacity="0.6" />
            <polygon points="545,340 555,340 640,1200 440,1200" fill="#ca8a04" opacity="0.3" />
          </svg>

          {/* Sadhak Walking forward bravely towards the sun */}
          <svg
            viewBox="0 0 200 300"
            style={{
              position: 'absolute',
              bottom: 300 - walkBob,
              left: '50%',
              transform: 'translateX(-50%) scale(1.1)',
              width: 230,
              height: 340,
              zIndex: 10,
            }}
          >
            {/* Legs walking */}
            <g transform={`rotate(${legSwing}, 85, 190)`}>
              <rect x="80" y="190" width="16" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            </g>
            <g transform={`rotate(${-legSwing}, 115, 190)`}>
              <rect x="108" y="190" width="16" height="75" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            </g>

            <path d="M70 145 C65 190, 75 205, 95 205 C115 205, 125 190, 130 145 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
            <rect x="74" y="90" width="52" height="65" rx="8" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            <path d="M72 90 L126 155 L116 155 L68 95 Z" fill="#ea580c" />

            {/* Arms swinging with purpose */}
            <g transform={`rotate(${armSwing}, 74, 95)`}>
              <rect x="66" y="95" width="14" height="60" rx="7" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
            </g>
            <g transform={`rotate(${-armSwing}, 126, 95)`}>
              <rect x="120" y="95" width="14" height="60" rx="7" fill="#f0b884" stroke="#d97706" strokeWidth="2" />
              <circle cx="127" cy="155" r="12" fill="none" stroke="#78350f" strokeWidth="4" strokeDasharray="3 3" />
            </g>

            {/* Confident Head */}
            <circle cx="100" cy="62" r="28" fill="#f0b884" stroke="#d97706" strokeWidth="2.5" />
            <ellipse cx="100" cy="32" rx="12" ry="10" fill="#18181b" />
            <circle cx="100" cy="22" r="6" fill="#18181b" />
            <circle cx="92" cy="62" r="3" fill="#18181b" />
            <circle cx="108" cy="62" r="3" fill="#18181b" />
            <path d="M95 73 Q100 78 105 73" fill="none" stroke="#78350f" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
};
