import React from 'react';

interface AnimeHUDProps {
  currentSec: number;
  totalDuration: number;
}

export const AnimeHUD: React.FC<AnimeHUDProps> = ({ currentSec, totalDuration }) => {
  const progress = Math.min(1, currentSec / totalDuration);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 40,
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          position: 'absolute',
          top: 45,
          left: 45,
          right: 45,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          background: 'rgba(8, 8, 16, 0.7)',
          backdropFilter: 'blur(16px)',
          borderRadius: 16,
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Glowing Red REC Dot */}
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: '#FF1744',
              boxShadow: '0 0 14px #FF1744',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: '"Montserrat", "Arial Black", sans-serif',
                fontSize: 22,
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: 2,
              }}
            >
              RAJ SHAMANI × GOGGINS
            </span>
            <span
              style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                fontSize: 14,
                color: '#FFE600',
                letterSpacing: 3,
                fontWeight: 700,
              }}
            >
              『鋼の精神』• 2D ANIME ROTOSCOPE
            </span>
          </div>
        </div>

        {/* Live Timestamp */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 22,
            fontWeight: 800,
            color: '#00E5FF',
            letterSpacing: 2,
            textShadow: '0 0 10px rgba(0, 229, 255, 0.6)',
          }}
        >
          {String(Math.floor(currentSec / 60)).padStart(2, '0')}:
          {String(Math.floor(currentSec % 60)).padStart(2, '0')}.
          {String(Math.floor((currentSec % 1) * 10)).padStart(1, '0')}
        </div>
      </div>

      {/* Bottom Glowing Progress Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 6,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF1744, #FFE600, #00E5FF)',
            boxShadow: '0 0 12px rgba(255, 230, 0, 0.8)',
            transition: 'width 0.05s linear',
          }}
        />
      </div>
    </div>
  );
};
