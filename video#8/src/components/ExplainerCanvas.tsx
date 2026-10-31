import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ExplainerCanvasProps {
  currentSec: number;
}

export const ExplainerCanvas: React.FC<ExplainerCanvasProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulse effect
  const pulse = Math.sin(frame * 0.1) * 0.05 + 1;

  return (
    <div
      style={{
        position: 'absolute',
        top: 440,
        left: 45,
        right: 45,
        height: 1040,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ===================================================================
          BEAT 1: 0.0s – 4.60s: "01 THE QUOTE - DAVID GOGGINS"
          =================================================================== */}
      {currentSec < 4.6 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 32,
            border: '4px solid #18181b',
            boxShadow: '12px 14px 0px #18181b',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Grid Pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.08,
              backgroundImage: 'linear-gradient(#18181b 1.5px, transparent 1.5px), linear-gradient(90deg, #18181b 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Top Pill Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <div
              style={{
                backgroundColor: '#facc15',
                color: '#09090b',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 22,
                border: '2px solid #09090b',
                letterSpacing: '0.04em',
              }}
            >
              MINDSET MASTERCLASS
            </div>
            <span style={{ fontSize: 44, fontWeight: 900, color: '#f59e0b' }}>❝</span>
          </div>

          {/* Center Graphic: Goggins Hero Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              zIndex: 2,
            }}
          >
            {/* Goggins Badge Icon */}
            <div
              style={{
                width: 170,
                height: 170,
                borderRadius: '50%',
                backgroundColor: '#18181b',
                border: '5px solid #facc15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
              }}
            >
              <svg viewBox="0 0 100 100" style={{ width: 110, height: 110 }}>
                {/* Silhouette of Tough Athlete with Headband */}
                <circle cx="50" cy="40" r="26" fill="#facc15" />
                <rect x="22" y="32" width="56" height="8" rx="3" fill="#ef4444" />
                <path d="M 24 72 C 24 55, 38 48, 50 48 C 62 48, 76 55, 76 72 Z" fill="#facc15" />
              </svg>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 900,
                  color: '#09090b',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                }}
              >
                DAVID GOGGINS
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#dc2626',
                  marginTop: 8,
                  letterSpacing: '0.08em',
                }}
              >
                THE UNFORGIVING MINDSET
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div
            style={{
              backgroundColor: '#f4f4f5',
              padding: '16px 28px',
              borderRadius: 20,
              border: '2px dashed #a1a1aa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: 26, fontWeight: 800, color: '#3f3f46' }}>
              "ONE QUOTE THAT CHANGED MY ENTIRE LIFE"
            </span>
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 2: 4.60s – 12.28s: "02 THE COMFORT TRAP - LIVING TOO SOFT"
          =================================================================== */}
      {currentSec >= 4.6 && currentSec < 12.28 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 32,
            border: '4px solid #18181b',
            boxShadow: '12px 14px 0px #18181b',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Danger Banner */}
          <div
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: 16,
              fontWeight: 900,
              fontSize: 26,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              letterSpacing: '0.06em',
              border: '2px solid #09090b',
              boxShadow: '0 6px 16px rgba(239, 68, 68, 0.4)',
            }}
          >
            <span>⚠️</span> DANGER: THE COMFORT TRAP <span>⚠️</span>
          </div>

          {/* Center Visual: The Soft Couch vs The Ticking Clock */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
            }}
          >
            {/* Illustrated Soft Couch / Bed with Warning Tape */}
            <div
              style={{
                position: 'relative',
                width: 440,
                height: 240,
                backgroundColor: '#fef3c7',
                borderRadius: 24,
                border: '3px solid #d97706',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <svg viewBox="0 0 200 120" style={{ width: 280, height: 160 }}>
                {/* Soft Pillows & Cushion */}
                <path d="M 20 80 Q 20 40 50 40 L 150 40 Q 180 40 180 80 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="4" />
                <rect x="25" y="75" width="150" height="30" rx="10" fill="#f59e0b" stroke="#d97706" strokeWidth="3" />
                <ellipse cx="65" cy="55" rx="25" ry="15" fill="#fef08a" />
                <ellipse cx="135" cy="55" rx="25" ry="15" fill="#fef08a" />
                {/* Zzz floating */}
                <text x="140" y="30" fontSize="20" fontWeight="bold" fill="#dc2626">Z z z</text>
              </svg>

              {/* Yellow & Black Caution Tape Across Cushion */}
              <div
                style={{
                  position: 'absolute',
                  width: '120%',
                  height: 36,
                  backgroundColor: '#facc15',
                  transform: 'rotate(-12deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  fontWeight: 900,
                  fontSize: 16,
                  color: '#09090b',
                  borderTop: '2px solid #09090b',
                  borderBottom: '2px solid #09090b',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <span>TOO COMFORTABLE</span>
                <span>•</span>
                <span>TOO SOFT</span>
                <span>•</span>
                <span>TRAP</span>
              </div>
            </div>

            {/* Giant Stamp Text */}
            <div
              style={{
                backgroundColor: '#fee2e2',
                border: '3px solid #dc2626',
                borderRadius: 18,
                padding: '14px 28px',
                textAlign: 'center',
                transform: `scale(${pulse})`,
              }}
            >
              <div style={{ fontSize: 38, fontWeight: 900, color: '#991b1b', letterSpacing: '0.02em' }}>
                YOU WILL DIE WITHOUT EVER REALIZING
              </div>
            </div>
          </div>

          {/* Bottom Life Meter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 800, color: '#4b5563' }}>
              <span>POTENTIAL UNLOCKED</span>
              <span style={{ color: '#dc2626' }}>ONLY 10% (CRITICAL)</span>
            </div>
            <div style={{ width: '100%', height: 26, backgroundColor: '#e5e7eb', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ width: '15%', height: '100%', backgroundColor: '#ef4444', borderRadius: 999 }} />
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 3: 12.28s – 19.28s: "03 TRUE POTENTIAL - HIT ME SO HARD"
          =================================================================== */}
      {currentSec >= 12.28 && currentSec < 19.28 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 32,
            border: '4px solid #18181b',
            boxShadow: '12px 14px 0px #18181b',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 22,
                border: '2px solid #09090b',
              }}
            >
              THE SHOCKING REALIZATION ⚡
            </div>
            <span style={{ fontSize: 26, fontWeight: 900, color: '#3b82f6' }}>40% RULE</span>
          </div>

          {/* Center Visual: The Giant Potential Battery */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 40,
            }}
          >
            {/* Vertical Battery */}
            <div
              style={{
                width: 140,
                height: 380,
                backgroundColor: '#f4f4f5',
                borderRadius: 28,
                border: '4px solid #09090b',
                padding: 8,
                display: 'flex',
                flexDirection: 'column-reverse',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
            >
              {/* Battery Terminal Cap */}
              <div
                style={{
                  position: 'absolute',
                  top: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 50,
                  height: 14,
                  backgroundColor: '#09090b',
                  borderRadius: '6px 6px 0 0',
                }}
              />

              {/* Lower 40% (Current Used) */}
              <div
                style={{
                  height: '40%',
                  backgroundColor: '#f59e0b',
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: 24,
                  color: '#09090b',
                  border: '2px solid #09090b',
                }}
              >
                40%
              </div>

              {/* Upper 60% (Unused Potential) */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#fee2e2',
                  borderRadius: 20,
                  marginBottom: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: 20,
                  color: '#dc2626',
                  border: '2px dashed #ef4444',
                }}
              >
                <span>60%</span>
                <span style={{ fontSize: 13, letterSpacing: '0.04em' }}>LOCKED</span>
              </div>
            </div>

            {/* Impact Text Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 440 }}>
              <div
                style={{
                  backgroundColor: '#facc15',
                  padding: '16px 24px',
                  borderRadius: 20,
                  border: '3px solid #09090b',
                  fontWeight: 900,
                  fontSize: 42,
                  color: '#09090b',
                  lineHeight: 1.1,
                  boxShadow: '6px 8px 0px #09090b',
                }}
              >
                HIT ME SO HARD!
              </div>

              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#374151',
                  lineHeight: 1.4,
                }}
              >
                When you think you're done, your mind has only reached <b>40%</b> of what you can actually endure.
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div
            style={{
              backgroundColor: '#eff6ff',
              padding: '14px 24px',
              borderRadius: 18,
              border: '2px solid #3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 22,
              color: '#1d4ed8',
            }}
          >
            🔓 UNLOCK YOUR TRUE POTENTIAL
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 4: 19.28s – 24.74s: "04 THE ILLUSION - I THOUGHT I WORKED HARD"
          =================================================================== */}
      {currentSec >= 19.28 && currentSec < 24.74 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 32,
            border: '4px solid #18181b',
            boxShadow: '12px 14px 0px #18181b',
            padding: 44,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 22,
                border: '2px solid #09090b',
              }}
            >
              THE DAILY HUSTLE ILLUSION 📋
            </div>
          </div>

          {/* Center Checklist Card */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#f8fafc',
              borderRadius: 24,
              border: '3px solid #cbd5e1',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {[
              { task: 'Working 12-14 hours every day', done: true },
              { task: 'Managing multiple businesses', done: true },
              { task: 'Pushing hard in gym & work', done: true },
              { task: 'Thinking: "I am doing a lot!"', done: true },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: 22,
                    border: '2px solid #047857',
                  }}
                >
                  ✓
                </div>
                <span style={{ fontSize: 28, fontWeight: 800, color: '#1e293b' }}>
                  {item.task}
                </span>
              </div>
            ))}

            {/* Giant Slanted Red Rubber Stamp */}
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '25%',
                transform: 'translate(-50%, -50%) rotate(-16deg)',
                border: '6px solid #dc2626',
                borderRadius: 18,
                padding: '12px 32px',
                color: '#dc2626',
                fontWeight: 900,
                fontSize: 48,
                letterSpacing: '0.06em',
                backgroundColor: 'rgba(254, 226, 226, 0.95)',
                boxShadow: '0 8px 28px rgba(220, 38, 38, 0.35)',
              }}
            >
              STILL COMFORTABLE!
            </div>
          </div>

          {/* Bottom Callout */}
          <div
            style={{
              backgroundColor: '#fef3c7',
              padding: '14px 24px',
              borderRadius: 18,
              border: '2px solid #f59e0b',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: 22,
              color: '#92400e',
            }}
          >
            "I THOUGHT I WAS WORKING HARD UNTIL I HEARD GOGGINS"
          </div>
        </div>
      )}

      {/* ===================================================================
          BEAT 5: 24.74s – 29.63s: "05 BRUTAL TRUTH - NO EXCUSES"
          =================================================================== */}
      {currentSec >= 24.74 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#09090b',
            borderRadius: 32,
            border: '4px solid #facc15',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              height: 500,
              borderRadius: '50%',
              backgroundColor: '#ca8a04',
              opacity: 0.15,
              filter: 'blur(70px)',
            }}
          />

          {/* Top Quote Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <div
              style={{
                backgroundColor: '#dc2626',
                color: '#ffffff',
                padding: '8px 24px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: '0.06em',
              }}
            >
              SO BRUTAL 🔥
            </div>
            <span style={{ fontSize: 60, fontWeight: 900, color: '#facc15' }}>❝</span>
          </div>

          {/* The Master Quote in Big Typography */}
          <div
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: '#f8fafc',
              lineHeight: 1.35,
              textAlign: 'center',
              letterSpacing: '0.01em',
              zIndex: 2,
            }}
          >
            "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential."
          </div>

          {/* Quote Author & Attribution Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: '#facc15',
                letterSpacing: '0.04em',
              }}
            >
              — DAVID GOGGINS
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#94a3b8',
                letterSpacing: '0.06em',
              }}
            >
              FIGURING OUT WITH RAJ SHAMANI
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
