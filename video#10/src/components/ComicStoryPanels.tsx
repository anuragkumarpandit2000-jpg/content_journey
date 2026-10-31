import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ComicStoryPanelsProps {
  currentSec: number;
}

export const ComicStoryPanels: React.FC<ComicStoryPanelsProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle comic jitter
  const jitter = Math.sin(frame * 0.4) * 2;

  return (
    <div
      style={{
        position: 'absolute',
        top: 450,
        left: 45,
        right: 45,
        height: 1030,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ===================================================================
          BEAT 1: 0.0s – 4.60s: "01 THE LEGEND / GOGGINS"
          =================================================================== */}
      {currentSec < 4.6 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 24,
            border: '6px solid #09090b',
            boxShadow: '14px 16px 0px #09090b',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Comic Top Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: '#ef4444',
                color: '#ffffff',
                padding: '6px 20px',
                border: '3px solid #09090b',
                fontWeight: 900,
                fontSize: 20,
                boxShadow: '4px 4px 0px #09090b',
                letterSpacing: '0.06em',
              }}
            >
              EPISODE #01 • MINDSET
            </div>
            <div style={{ fontSize: 26, fontWeight: 900, color: '#09090b' }}>
              PRICE: 25¢
            </div>
          </div>

          {/* Center Graphic: Comic Hero Goggins */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            {/* Comic Starburst behind hero */}
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: '50%',
                backgroundColor: '#facc15',
                border: '5px solid #09090b',
                boxShadow: '8px 8px 0px #09090b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 100 100" style={{ width: 150, height: 150 }}>
                {/* Heavy black ink hero silhouette */}
                <circle cx="50" cy="40" r="28" fill="#ffedd5" stroke="#09090b" strokeWidth="4" />
                {/* Red Headband */}
                <rect x="18" y="30" width="64" height="10" rx="3" fill="#dc2626" stroke="#09090b" strokeWidth="3" />
                {/* Determined Eyes */}
                <ellipse cx="40" cy="42" rx="4" ry="2" fill="#09090b" />
                <ellipse cx="60" cy="42" rx="4" ry="2" fill="#09090b" />
                {/* Jaw shadow */}
                <path d="M 30 52 L 50 64 L 70 52" fill="none" stroke="#09090b" strokeWidth="3.5" />
                <path d="M 22 76 C 22 58, 38 52, 50 52 C 62 52, 78 58, 78 76 Z" fill="#09090b" stroke="#09090b" strokeWidth="4" />
              </svg>
            </div>

            <div
              style={{
                fontSize: 68,
                fontWeight: 900,
                color: '#09090b',
                lineHeight: 1.05,
                textAlign: 'center',
                letterSpacing: '0.02em',
                fontFamily: 'Impact, "Arial Black", sans-serif',
                transform: `rotate(${jitter}deg)`,
              }}
            >
              DAVID GOGGINS!
            </div>
            <div
              style={{
                backgroundColor: '#fef08a',
                border: '3px solid #09090b',
                padding: '6px 20px',
                fontWeight: 900,
                fontSize: 22,
                color: '#dc2626',
              }}
            >
              THE TOUGHEST MAN ALIVE
            </div>
          </div>

          {/* Comic Speech Bubble */}
          <div
            style={{
              backgroundColor: '#fef9c3',
              border: '4px solid #09090b',
              borderRadius: 20,
              padding: '16px 24px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: 26,
              color: '#09090b',
              boxShadow: '6px 6px 0px #09090b',
            }}
          >
            "THERE'S ONE QUOTE I REALLY LOVE..."
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 2: 4.60s – 12.28s: "02 THE COMFORT TRAP"
          =================================================================== */}
      {currentSec >= 4.6 && currentSec < 12.28 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 24,
            border: '6px solid #09090b',
            boxShadow: '14px 16px 0px #09090b',
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Danger Pill */}
          <div
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              padding: '10px 24px',
              border: '4px solid #09090b',
              borderRadius: 16,
              textAlign: 'center',
              fontWeight: 900,
              fontSize: 28,
              boxShadow: '6px 6px 0px #09090b',
              letterSpacing: '0.04em',
            }}
          >
            💥 WARNING: THE COMFORT TRAP!! 💥
          </div>

          {/* Dual Comic Panels */}
          <div style={{ display: 'flex', gap: 20, height: 380 }}>
            {/* Panel 1: Soft Bed */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#fed7aa',
                border: '4px solid #09090b',
                borderRadius: 18,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '6px 6px 0px #09090b',
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 900, color: '#09090b' }}>PANEL A</span>
              <div style={{ fontSize: 70 }}>🛋️</div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #09090b',
                  padding: '6px 12px',
                  borderRadius: 10,
                  fontSize: 18,
                  fontWeight: 900,
                  textAlign: 'center',
                }}
              >
                TOO COMFORTABLE & SOFT!
              </div>
            </div>

            {/* Panel 2: Skull & Doom */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#fee2e2',
                border: '4px solid #09090b',
                borderRadius: 18,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '6px 6px 0px #09090b',
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 900, color: '#dc2626' }}>PANEL B</span>
              <div style={{ fontSize: 70 }}>💀</div>
              <div
                style={{
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: '2px solid #09090b',
                  padding: '6px 12px',
                  borderRadius: 10,
                  fontSize: 18,
                  fontWeight: 900,
                  textAlign: 'center',
                }}
              >
                YOU WILL DIE!
              </div>
            </div>
          </div>

          {/* Big Comic Dialogue */}
          <div
            style={{
              backgroundColor: '#facc15',
              border: '4px solid #09090b',
              borderRadius: 18,
              padding: '16px 20px',
              textAlign: 'center',
              fontWeight: 900,
              fontSize: 32,
              color: '#09090b',
              lineHeight: 1.15,
              boxShadow: '6px 6px 0px #09090b',
            }}
          >
            "WITHOUT EVER REALIZING YOUR POTENTIAL!"
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 3: 12.28s – 19.28s: "03 TRUE POTENTIAL / WHAM"
          =================================================================== */}
      {currentSec >= 12.28 && currentSec < 19.28 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 24,
            border: '6px solid #09090b',
            boxShadow: '14px 16px 0px #09090b',
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Manga Sound FX Burst Header */}
          <div
            style={{
              backgroundColor: '#facc15',
              border: '4px solid #09090b',
              padding: '12px 24px',
              borderRadius: 18,
              textAlign: 'center',
              fontWeight: 900,
              fontSize: 48,
              color: '#09090b',
              boxShadow: '8px 8px 0px #09090b',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              transform: `rotate(${jitter * 2}deg)`,
            }}
          >
            WHAM!! 💥 HIT ME SO HARD!
          </div>

          {/* Electric Gauge Breakdown */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36 }}>
            {/* Comic Vertical Gauge */}
            <div
              style={{
                width: 120,
                height: 380,
                backgroundColor: '#f4f4f5',
                border: '5px solid #09090b',
                borderRadius: 20,
                padding: 6,
                display: 'flex',
                flexDirection: 'column-reverse',
                boxShadow: '6px 6px 0px #09090b',
              }}
            >
              <div
                style={{
                  height: '40%',
                  backgroundColor: '#ef4444',
                  borderRadius: 14,
                  border: '3px solid #09090b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: 26,
                  color: '#ffffff',
                }}
              >
                40%
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#fef08a',
                  borderRadius: 14,
                  border: '3px dashed #09090b',
                  marginBottom: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: 22,
                  color: '#09090b',
                }}
              >
                60% LOCKED
              </div>
            </div>

            {/* Manga Dialogue Bubble */}
            <div
              style={{
                maxWidth: 440,
                backgroundColor: '#38bdf8',
                border: '4px solid #09090b',
                borderRadius: 20,
                padding: '24px 28px',
                boxShadow: '8px 8px 0px #09090b',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 900, color: '#09090b', lineHeight: 1.2 }}>
                "WHEN YOUR MIND SAYS STOP, YOU ARE ONLY AT 40%!"
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#09090b', marginTop: 12 }}>
                UNLOCK THE UNTOUCHABLE REALM ⚡
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div
            style={{
              backgroundColor: '#09090b',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: 14,
              textAlign: 'center',
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: '0.04em',
            }}
          >
            ★ THE 40% RULE OF DAVID GOGGINS ★
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 4: 19.28s – 24.74s: "04 THE HUSTLE ILLUSION"
          =================================================================== */}
      {currentSec >= 19.28 && currentSec < 24.74 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 24,
            border: '6px solid #09090b',
            boxShadow: '14px 16px 0px #09090b',
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Panel Title */}
          <div
            style={{
              backgroundColor: '#09090b',
              color: '#ffffff',
              padding: '10px 20px',
              fontWeight: 900,
              fontSize: 24,
              textAlign: 'center',
              letterSpacing: '0.06em',
            }}
          >
            CHAPTER IV: THE HUSTLE ILLUSION
          </div>

          {/* Three Vertical Panels */}
          <div style={{ display: 'flex', gap: 16, height: 420 }}>
            {[
              { num: 'I', title: '14 HRS WORK', icon: '💼', bg: '#fef08a' },
              { num: 'II', title: 'BUSY MIND', icon: '🧠', bg: '#bbf7d0' },
              { num: 'III', title: 'STILL SOFT', icon: '🛑', bg: '#fecaca' },
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  flex: 1,
                  backgroundColor: p.bg,
                  border: '4px solid #09090b',
                  borderRadius: 16,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '6px 6px 0px #09090b',
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 900, color: '#09090b' }}>{p.num}</span>
                <div style={{ fontSize: 60 }}>{p.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 900, textAlign: 'center', color: '#09090b' }}>
                  {p.title}
                </div>
              </div>
            ))}
          </div>

          {/* Slanted Comic Stamp */}
          <div
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              border: '4px solid #09090b',
              padding: '14px 20px',
              textAlign: 'center',
              fontWeight: 900,
              fontSize: 28,
              boxShadow: '6px 6px 0px #09090b',
            }}
          >
            "I THOUGHT I WAS THE GUY WORKING HARD..."
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 5: 24.74s – 29.63s: "05 SO BRUTAL / FINALE"
          =================================================================== */}
      {currentSec >= 24.74 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#09090b',
            borderRadius: 24,
            border: '6px solid #facc15',
            boxShadow: '16px 18px 0px #dc2626',
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Manga Burst */}
          <div
            style={{
              backgroundColor: '#dc2626',
              color: '#ffffff',
              border: '4px solid #ffffff',
              padding: '10px 24px',
              textAlign: 'center',
              fontWeight: 900,
              fontSize: 44,
              fontFamily: 'Impact, "Arial Black", sans-serif',
              boxShadow: '6px 6px 0px #ffffff',
              transform: `rotate(${jitter * 2}deg)`,
            }}
          >
            SO BRUTAL!! 🔥
          </div>

          {/* Comic Dialogue Bubble with Quote */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '5px solid #09090b',
              borderRadius: 24,
              padding: '28px 32px',
              textAlign: 'center',
              boxShadow: '10px 10px 0px #facc15',
            }}
          >
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: '#09090b',
                lineHeight: 1.25,
                fontFamily: 'Impact, "Arial Black", sans-serif',
              }}
            >
              "YOU ARE IN DANGER OF LIVING A LIFE SO COMFORTABLE AND SOFT THAT YOU WILL DIE WITHOUT EVER REALIZING YOUR TRUE POTENTIAL."
            </div>
          </div>

          {/* Author Badge */}
          <div
            style={{
              backgroundColor: '#facc15',
              border: '4px solid #ffffff',
              padding: '12px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 900,
              fontSize: 24,
              color: '#09090b',
            }}
          >
            <span>— DAVID GOGGINS</span>
            <span>FIGURING OUT</span>
          </div>
        </div>
      )}
    </div>
  );
};
