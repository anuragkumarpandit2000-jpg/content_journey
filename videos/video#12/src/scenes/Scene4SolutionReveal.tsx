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
        backgroundColor: '#030712',
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
        ⚡ ULTRA-LOW LATENCY WEBRTC
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 106,
          lineHeight: 1.05,
          color: '#34D399',
          maxWidth: 920,
        }}
      >
        LIVEKIT AGENTS + WEBRTC PIPELINE
      </div>

      {/* Architecture Flow Box */}
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          backgroundColor: '#111827',
          padding: '24px 32px',
          borderRadius: 24,
          border: '1.5px solid #10B981',
          boxShadow: '0 0 35px rgba(16, 185, 129, 0.25)',
        }}
      >
        <div style={{ textAlign: 'center', padding: '12px 20px', backgroundColor: '#1F2937', borderRadius: 16 }}>
          <div style={{ fontSize: 32 }}>📱</div>
          <div style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 18, marginTop: 6 }}>WebRTC Audio</div>
        </div>
        <div style={{ color: '#10B981', fontSize: 30, fontWeight: 900 }}>➔</div>
        <div style={{ textAlign: 'center', padding: '12px 20px', backgroundColor: '#1F2937', borderRadius: 16 }}>
          <div style={{ fontSize: 32 }}>🎙️</div>
          <div style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 18, marginTop: 6 }}>Deepgram STT</div>
        </div>
        <div style={{ color: '#10B981', fontSize: 30, fontWeight: 900 }}>➔</div>
        <div style={{ textAlign: 'center', padding: '12px 20px', backgroundColor: '#1F2937', borderRadius: 16 }}>
          <div style={{ fontSize: 32 }}>⚡</div>
          <div style={{ color: '#F9FAFB', fontWeight: 800, fontSize: 18, marginTop: 6 }}>Groq Llama-3</div>
        </div>
        <div style={{ color: '#10B981', fontSize: 30, fontWeight: 900 }}>➔</div>
        <div style={{ textAlign: 'center', padding: '12px 20px', backgroundColor: '#065F46', borderRadius: 16 }}>
          <div style={{ fontSize: 32 }}>🔊</div>
          <div style={{ color: '#A7F3D0', fontWeight: 800, fontSize: 18, marginTop: 6 }}>Cartesia TTS</div>
        </div>
      </div>
      <div style={{ marginTop: 24, color: '#6EE7B7', fontSize: 24, fontWeight: 700 }}>
        Total Round-Trip Latency: &lt; 300 Milliseconds!
      </div>
    </div>
  );
};
