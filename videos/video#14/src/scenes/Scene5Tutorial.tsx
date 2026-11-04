import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { num: "01", text: "Run local Baileys QR auth bridge to connect WhatsApp", tag: "BRIDGE" },
    { num: "02", text: "Configure FastAPI webhook with Google Gemini 2.5", tag: "AI LOGIC" },
    { num: "03", text: "Deploy on free Render/Railway server for 24/7 uptime", tag: "DEPLOY" },
  ];

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
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          color: '#25D366',
          letterSpacing: '0.15em',
          marginBottom: 20,
        }}
      >
        ✦ 3-STEP INTEGRATION ✦
      </div>

      <h2
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 94,
          color: '#E9EDEF',
          marginBottom: 35,
          textAlign: 'center',
        }}
      >
        SETUP YOUR WHATSAPP BOT TODAY
      </h2>

      <div style={{ width: 840, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {steps.map((step, idx) => {
          const s = spring({ frame: frame - idx * 12, fps });
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#111B21',
                border: '1.5px solid #222E35',
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
                  backgroundColor: '#00A884',
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
              <div style={{ flex: 1, fontFamily: 'Montserrat, sans-serif', fontSize: 24, color: '#E9EDEF', fontWeight: 600 }}>
                {step.text}
              </div>
              <div
                style={{
                  padding: '6px 16px',
                  borderRadius: 8,
                  backgroundColor: '#202C33',
                  color: '#25D366',
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
