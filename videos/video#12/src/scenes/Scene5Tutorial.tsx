import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { num: "01", text: "pip install livekit-agents deepgram-sdk groq", tag: "INSTALL" },
    { num: "02", text: "agent = VoicePipelineAgent(vad=silero.VAD.load())", tag: "NATURAL VAD" },
    { num: "03", text: "agent.start(room, participant)", tag: "INSTANT CONNECT" },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#090D16',
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
          fontSize: 22,
          fontWeight: 800,
          color: '#38BDF8',
          letterSpacing: '0.15em',
          marginBottom: 20,
        }}
      >
        ✦ 3-STEP IMPLEMENTATION ✦
      </div>

      <h2
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 92,
          color: '#F8FAFC',
          marginBottom: 35,
          textAlign: 'center',
        }}
      >
        BUILD YOUR VOICE AGENT IN PYTHON
      </h2>

      <div style={{ width: 840, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {steps.map((step, idx) => {
          const s = spring({ frame: frame - idx * 12, fps });
          const translateY = interpolate(s, [0, 1], [40, 0]);
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#1E293B',
                border: '1.5px solid #334155',
                borderRadius: 20,
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                transform: `translateY(${translateY}px)`,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: '#0284C7',
                  color: '#FFFFFF',
                  fontWeight: 900,
                  fontSize: 24,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {step.num}
              </div>
              <div style={{ flex: 1, fontFamily: 'JetBrains Mono, monospace', fontSize: 24, color: '#E2E8F0' }}>
                {step.text}
              </div>
              <div
                style={{
                  padding: '6px 16px',
                  borderRadius: 8,
                  backgroundColor: '#0F172A',
                  color: '#38BDF8',
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {step.tag}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
