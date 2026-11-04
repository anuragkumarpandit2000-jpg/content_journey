import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene6OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = interpolate(Math.sin(frame * 0.2), [-1, 1], [0.96, 1.04]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 60px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background Cyber Glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #8B5CF633 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 800,
          color: '#94A3B8',
          marginBottom: 28,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          zIndex: 10,
        }}
      >
        Want the Complete Source Code?
      </div>

      {/* Massive Gradient CTA Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
          borderRadius: 36,
          padding: '40px 72px',
          boxShadow: '0 25px 70px #8B5CF677',
          zIndex: 10,
          transform: `scale(${pulse})`,
          marginBottom: 36,
        }}
      >
        <div
          style={{
            fontFamily: 'Anton, Montserrat, sans-serif',
            fontSize: 82,
            color: '#FFFFFF',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}
        >
          COMMENT 'LOCAL'
        </div>
      </div>

      <div
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 32,
          fontWeight: 600,
          color: '#CBD5E1',
          maxWidth: 820,
          lineHeight: 1.4,
          marginBottom: 44,
          zIndex: 10,
        }}
      >
        Get the complete Local LLM setup guide & hardware sizing cheat sheet!
      </div>

      {/* Deliverable Badge */}
      <div
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          border: '1.5px solid #334155',
          borderRadius: 22,
          padding: '18px 40px',
          fontSize: 26,
          color: '#38BDF8',
          fontFamily: 'JetBrains Mono, monospace',
          zIndex: 10,
        }}
      >
        🔗 parker-render.netlify.app/local
      </div>
    </div>
  );
};
