import React from 'react';
import { Img, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

interface HostFootageWindowProps {
  currentSec: number;
}

export const HostFootageWindow: React.FC<HostFootageWindowProps> = ({ currentSec }) => {
  const frame = useCurrentFrame();

  // Determine which real high-res studio frame to show
  let frameFile = 'host_frames/frame_1.jpg';
  if (currentSec >= 4.6 && currentSec < 12.28) frameFile = 'host_frames/frame_2.jpg';
  else if (currentSec >= 12.28 && currentSec < 19.28) frameFile = 'host_frames/frame_3.jpg';
  else if (currentSec >= 19.28 && currentSec < 24.74) frameFile = 'host_frames/frame_4.jpg';
  else if (currentSec >= 24.74) frameFile = 'host_frames/frame_5.jpg';

  // Subtle breathing / slow zoom effect
  const zoom = 1.0 + (frame % 150) * 0.0004;

  return (
    <div
      style={{
        position: 'absolute',
        top: 70,
        right: 45,
        width: 340,
        height: 420,
        borderRadius: 24,
        backgroundColor: '#09090b',
        border: '2px solid rgba(6, 182, 212, 0.6)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(6, 182, 212, 0.25)',
        overflow: 'hidden',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Studio Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: '#050508',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
          <span style={{ color: '#ef4444', fontSize: 12, fontWeight: 900, letterSpacing: '0.08em' }}>
            REC ● 4K
          </span>
        </div>
        <span style={{ color: '#06b6d4', fontSize: 11, fontWeight: 800, letterSpacing: '0.06em' }}>
          CAM 01 • RAJ SHAMANI
        </span>
      </div>

      {/* Real Host Frame Container */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          overflow: 'hidden',
          backgroundColor: '#000000',
        }}
      >
        <Img
          src={staticFile(frameFile)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${zoom})`,
            filter: 'contrast(1.15) brightness(1.05) saturate(1.1)',
          }}
        />

        {/* Subtle HUD crosshair in center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 30,
            height: 30,
            pointerEvents: 'none',
            opacity: 0.35,
          }}
        >
          <div style={{ position: 'absolute', top: 14, left: 0, width: 30, height: 2, backgroundColor: '#06b6d4' }} />
          <div style={{ position: 'absolute', top: 0, left: 14, width: 2, height: 30, backgroundColor: '#06b6d4' }} />
        </div>
      </div>

      {/* Bottom Audio Spectrum Bars */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          height: 22,
          backgroundColor: '#050508',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0 12px',
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const height = Math.max(3, Math.abs(Math.sin(frame * 0.25 + i * 0.7)) * 14);
          return (
            <div
              key={i}
              style={{
                width: 3,
                height,
                backgroundColor: i % 2 === 0 ? '#06b6d4' : '#38bdf8',
                borderRadius: 2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
