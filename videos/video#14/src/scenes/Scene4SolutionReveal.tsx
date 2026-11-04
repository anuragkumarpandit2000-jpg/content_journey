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
        backgroundColor: '#0B141A',
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
          backgroundColor: '#005C4B',
          border: '1.5px solid #25D366',
          color: '#E9EDEF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: `scale(${spring({ frame, fps })})`,
        }}
      >
        ⚡ AUTONOMOUS CRM PIPELINE
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#25D366',
          maxWidth: 920,
        }}
      >
        PYTHON FASTAPI + BAILEYS WHATSAPP BOT
      </div>

      {/* Feature Pills */}
      <div style={{ marginTop: 40, width: 800, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ backgroundColor: '#111B21', padding: '18px 24px', borderRadius: 16, border: '1px solid #25D366', color: '#E9EDEF', fontSize: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>✅</span> <span><strong>Anti-Ban Delay:</strong> Simulates natural human typing pause (1.5s - 3s)</span>
        </div>
        <div style={{ backgroundColor: '#111B21', padding: '18px 24px', borderRadius: 16, border: '1px solid #25D366', color: '#E9EDEF', fontSize: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>📄</span> <span><strong>PDF Quotation Dispatch:</strong> Automatically sends catalog & price list</span>
        </div>
        <div style={{ backgroundColor: '#111B21', padding: '18px 24px', borderRadius: 16, border: '1px solid #25D366', color: '#E9EDEF', fontSize: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>📅</span> <span><strong>Google Calendar Sync:</strong> Automatically books client meeting slots</span>
        </div>
      </div>
    </div>
  );
};
