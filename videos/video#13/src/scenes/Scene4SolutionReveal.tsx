import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene4SolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#06101E',
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
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#065F46',
          border: '1.5px solid #10B981',
          color: '#D1FAE5',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        ✦ 99% COST REDUCTION ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#10B981',
          maxWidth: 920,
        }}
      >
        CLINE + DEEPSEEK-V3 IN VS CODE
      </div>

      {/* Comparison Grid */}
      <div style={{ marginTop: 40, display: 'flex', gap: 24, width: 840 }}>
        <div
          style={{
            flex: 1,
            backgroundColor: '#1E293B',
            borderRadius: 24,
            padding: '30px 32px',
            border: '1px solid #475569',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: '#94A3B8' }}>Cursor Pro</div>
          <div style={{ fontSize: 52, fontWeight: 900, color: '#EF4444', margin: '16px 0' }}>$20/mo</div>
          <div style={{ fontSize: 18, color: '#64748B' }}>500 fast requests limit</div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: '#064E3B',
            borderRadius: 24,
            padding: '30px 32px',
            border: '2px solid #10B981',
            textAlign: 'center',
            boxShadow: '0 0 35px rgba(16, 185, 129, 0.3)',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: '#A7F3D0' }}>Cline + DeepSeek</div>
          <div style={{ fontSize: 52, fontWeight: 900, color: '#34D399', margin: '16px 0' }}>$0.14</div>
          <div style={{ fontSize: 18, color: '#A7F3D0' }}>Per 1,000,000 tokens (No limits!)</div>
        </div>
      </div>
    </div>
  );
};
