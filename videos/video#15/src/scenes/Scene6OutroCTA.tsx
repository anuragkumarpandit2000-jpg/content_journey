import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = Math.sin(frame * 0.2) * 5;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#09090B',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 24,
          fontWeight: 800,
          color: '#A855F7',
          letterSpacing: '0.15em',
          marginBottom: 25,
        }}
      >
        ✦ FREE BLENDER AUTOMATION ASSETS ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 108,
          lineHeight: 1.05,
          color: '#FFFFFF',
          maxWidth: 900,
        }}
      >
        WANT MY BLENDER AUTO-IMPORT SCRIPT?
      </div>

      <div
        style={{
          marginTop: 45,
          backgroundColor: '#7C3AED',
          color: '#FFFFFF',
          padding: '24px 60px',
          borderRadius: 999,
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 900,
          letterSpacing: '0.05em',
          boxShadow: '0 0 50px rgba(124, 58, 237, 0.6)',
          transform: `scale(${1 + pulse * 0.015})`,
        }}
      >
        COMMENT "3D" BELOW
      </div>

      <div
        style={{
          marginTop: 35,
          color: '#A1A1AA',
          fontSize: 26,
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Python decimation script + Trellis prompt guide sent to your DM 🚀
      </div>
    </div>
  );
};
