import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { num: "01", text: "Install Cline extension from VS Code Marketplace", tag: "FREE" },
    { num: "02", text: "Select DeepSeek API Provider & paste your $2 key", tag: "SETUP" },
    { num: "03", text: "Add custom .clinerules template for zero hallucinations", tag: "RULES" },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0D1117',
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
          color: '#10B981',
          letterSpacing: '0.15em',
          marginBottom: 20,
        }}
      >
        ✦ 2-MINUTE CONFIGURATION ✦
      </div>

      <h2
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 94,
          color: '#F8FAFC',
          marginBottom: 35,
          textAlign: 'center',
        }}
      >
        SETUP CLINE LIKE A 10X ENGINEER
      </h2>

      <div style={{ width: 840, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {steps.map((step, idx) => {
          const s = spring({ frame: frame - idx * 12, fps });
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#161B22',
                border: '1.5px solid #30363D',
                borderRadius: 20,
                padding: '22px 30px',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: '#059669',
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
                  backgroundColor: '#0D1117',
                  color: '#34D399',
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
