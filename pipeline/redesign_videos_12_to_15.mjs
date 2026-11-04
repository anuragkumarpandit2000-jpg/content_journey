import fs from 'fs';
import path from 'path';

// =========================================================================
// 1. VIDEO #12: Midnight Cyber Telephony & Live Voice Waveform UI
// =========================================================================
function buildVideo12() {
  const vDir = 'D:/anurag/content_journey/videos/video#12';
  const scenesDir = `${vDir}/src/scenes`;
  if (!fs.existsSync(scenesDir)) fs.mkdirSync(scenesDir, { recursive: true });

  // Scene 1: Hook - Incoming AI Call with Live Audio Waveform Ring
  fs.writeFileSync(`${scenesDir}/Scene1Hook.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title = "REAL-TIME AI VOICE CALLS";
  const letters = title.split("");

  const pulse = Math.sin(frame * 0.15) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#050B14',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Cyan Tech Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Cyan Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 70%)',
        }}
      />

      {/* Live Call Telephony Badge */}
      <div
        style={{
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#0E7490',
          border: '1.5px solid #22D3EE',
          color: '#E0F2FE',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 35,
          boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)',
          transform: \`scale(\${spring({ frame, fps })})\`,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#22D3EE', boxShadow: '0 0 10px #22D3EE' }} />
        <span>INCOMING AI TELEPHONY CALL</span>
      </div>

      {/* Letter-by-Letter Kinetic Spring Title */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 960,
          fontFamily: 'Anton, sans-serif',
          fontSize: 106,
          lineHeight: 1.05,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          textShadow: '0 10px 40px rgba(6, 182, 212, 0.5)',
        }}
      >
        {letters.map((char, index) => {
          const s = spring({
            frame: frame - index * 1.5,
            fps,
            config: { damping: 10, mass: 0.5, stiffness: 180 },
          });
          const translateY = interpolate(s, [0, 1], [60, 0]);
          const scale = interpolate(s, [0, 1], [0.3, 1]);
          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: \`translateY(\${translateY}px) scale(\${scale})\`,
                marginRight: char === " " ? 24 : 1,
                color: index >= 9 ? '#22D3EE' : '#FFFFFF',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Interactive Phone Call Card Mockup */}
      <div
        style={{
          marginTop: 45,
          width: 780,
          backgroundColor: '#0F172A',
          borderRadius: 28,
          border: '1.5px solid #38BDF8',
          padding: '28px 36px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.25)',
          transform: \`translateY(\${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [40, 0])}px)\`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                backgroundColor: '#0369A1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 32,
                border: '2px solid #38BDF8',
                transform: \`scale(\${1 + pulse * 0.015})\`,
              }}
            >
              📞
            </div>
            <div>
              <div style={{ color: '#F8FAFC', fontSize: 28, fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>
                AI Customer Concierge
              </div>
              <div style={{ color: '#38BDF8', fontSize: 20, fontWeight: 600 }}>
                LiveKit WebRTC · Latency: 280ms
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: 999,
              backgroundColor: '#16A34A',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 18,
              boxShadow: '0 0 15px #16A34A',
            }}
          >
            ACTIVE CALL
          </div>
        </div>

        {/* Audio Waveform Bars Reacting */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 50, marginTop: 24 }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const h = 12 + Math.abs(Math.sin((frame + i * 8) * 0.2)) * 36;
            return (
              <div
                key={i}
                style={{
                  width: 8,
                  height: h,
                  borderRadius: 4,
                  backgroundColor: i % 2 === 0 ? '#38BDF8' : '#818CF8',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 2: Relatability - Old Robotic IVR Stutters
  fs.writeFileSync(`${scenesDir}/Scene2Relatability.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Broken Telephone Wire Visual */}
      <div
        style={{
          position: 'absolute',
          top: 140,
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#7F1D1D',
          border: '1.5px solid #EF4444',
          color: '#FEE2E2',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ✦ THE AWKWARD 3-SECOND SILENCE ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#F87171',
          textTransform: 'uppercase',
          maxWidth: 920,
          transform: \`translateY(\${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [40, 0])}px)\`,
        }}
      >
        OLD VOICE BOTS TALK LIKE BROKEN ROBOTS
      </div>

      {/* Frustrated Customer Card Mockup */}
      <div
        style={{
          marginTop: 40,
          backgroundColor: '#1E293B',
          border: '1px solid #475569',
          borderRadius: 24,
          padding: '30px 45px',
          maxWidth: 820,
          textAlign: 'center',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
          transform: \`scale(\${spring({ frame: frame - 20, fps })})\`,
        }}
      >
        <div style={{ fontSize: 26, color: '#94A3B8', fontWeight: 600, lineHeight: 1.5 }}>
          User: "Mujhe appointment book karni hai..."
        </div>
        <div style={{ color: '#EF4444', fontSize: 32, fontWeight: 800, marginTop: 16 }}>
          ⏳ 3.4 seconds awkward delay...
        </div>
        <div style={{ color: '#F1F5F9', fontSize: 24, fontStyle: 'italic', marginTop: 12 }}>
          Bot: "I... did... not... understand... please repeat."
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 3: Problem Glitch - Twilio Billing Red Alert
  fs.writeFileSync(`${scenesDir}/Scene3ProblemGlitch.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shakeX = Math.sin(frame * 2.8) * 8;
  const shakeY = Math.cos(frame * 3.1) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#020617',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
        transform: \`translate(\${shakeX}px, \${shakeY}px)\`,
      }}
    >
      {/* Red Glitch Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(239, 68, 68, 0) 50%, rgba(0, 0, 0, 0.7) 50%)',
          backgroundSize: '100% 6px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          backgroundColor: '#991B1B',
          color: '#FFFFFF',
          padding: '12px 32px',
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '0.15em',
          marginBottom: 30,
          boxShadow: '0 0 30px #EF4444',
        }}
      >
        ⚠️ MASSIVE TELEPHONY MARKUPS
      </div>

      <h1
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#EF4444',
          textAlign: 'center',
          maxWidth: 900,
          textShadow: '0 0 35px rgba(239, 68, 68, 0.6)',
        }}
      >
        TWILIO & CLOUD BILLS IN THOUSANDS
      </h1>

      {/* Invoice Receipt Mockup */}
      <div
        style={{
          marginTop: 35,
          width: 760,
          backgroundColor: '#0F172A',
          border: '2px solid #EF4444',
          borderRadius: 20,
          padding: '28px 36px',
          color: '#F8FAFC',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: 16 }}>
          <span style={{ fontSize: 24, fontWeight: 700 }}>Telephony Carrier Bill</span>
          <span style={{ fontSize: 24, color: '#EF4444', fontWeight: 900 }}>₹48,920.00 DUE</span>
        </div>
        <div style={{ marginTop: 18, fontSize: 20, color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Per-minute voice SIP markup</span>
            <span style={{ color: '#F87171' }}>+ ₹14.50 / min</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>STT & TTS API latency fees</span>
            <span style={{ color: '#F87171' }}>+ ₹22.00 / call</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 4: Solution Reveal - LiveKit WebRTC Architecture
  fs.writeFileSync(`${scenesDir}/Scene4SolutionReveal.tsx`, `import React from 'react';
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
          transform: \`scale(\${spring({ frame, fps })})\`,
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
`);

  // Scene 5: Tutorial - Python Agent Code & Live Interruption
  fs.writeFileSync(`${scenesDir}/Scene5Tutorial.tsx`, `import React from 'react';
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
                transform: \`translateY(\${translateY}px)\`,
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
`);

  // Scene 6: Outro CTA
  fs.writeFileSync(`${scenesDir}/Scene6OutroCTA.tsx`, `import React from 'react';
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
        backgroundColor: '#050B14',
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
          color: '#38BDF8',
          letterSpacing: '0.15em',
          marginBottom: 25,
        }}
      >
        ✦ FREE ARCHITECTURE & CODE ✦
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
        WANT THE FULL LIVEKIT PYTHON REPO?
      </div>

      <div
        style={{
          marginTop: 45,
          backgroundColor: '#0284C7',
          color: '#FFFFFF',
          padding: '24px 60px',
          borderRadius: 999,
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 900,
          letterSpacing: '0.05em',
          boxShadow: '0 0 50px rgba(2, 132, 199, 0.6)',
          transform: \`scale(\${1 + pulse * 0.015})\`,
        }}
      >
        COMMENT "CALL" BELOW
      </div>

      <div
        style={{
          marginTop: 35,
          color: '#94A3B8',
          fontSize: 26,
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Direct GitHub repo & Python template delivered to your DM 🚀
      </div>
    </div>
  );
};
`);
}

// =========================================================================
// 2. VIDEO #13: Futuristic Code Matrix & Cyber IDE Editor (Cline + DeepSeek)
// =========================================================================
function buildVideo13() {
  const vDir = 'D:/anurag/content_journey/videos/video#13';
  const scenesDir = `${vDir}/src/scenes`;
  if (!fs.existsSync(scenesDir)) fs.mkdirSync(scenesDir, { recursive: true });

  // Scene 1: Hook - Realistic Dark VS Code Editor Mockup
  fs.writeFileSync(`${scenesDir}/Scene1Hook.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title = "FIRE YOUR $20/MO CURSOR";
  const letters = title.split("");

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
      {/* Code Matrix Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, #22C55E 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          opacity: 0.15,
        }}
      />

      {/* Emerald Code Badge */}
      <div
        style={{
          padding: '12px 32px',
          borderRadius: 999,
          backgroundColor: '#064E3B',
          border: '1.5px solid #10B981',
          color: '#A7F3D0',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 35,
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ✦ 100% FREE AUTONOMOUS VS CODE AGENT ✦
      </div>

      {/* Kinetic Letter Spring Title */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 960,
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#FFFFFF',
        }}
      >
        {letters.map((char, index) => {
          const s = spring({
            frame: frame - index * 1.5,
            fps,
            config: { damping: 10, mass: 0.5, stiffness: 180 },
          });
          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: \`translateY(\${interpolate(s, [0, 1], [50, 0])}px) scale(\${interpolate(s, [0, 1], [0.4, 1])})\`,
                marginRight: char === " " ? 22 : 1,
                color: index >= 10 ? '#22C55E' : '#FFFFFF',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Hyper-Realistic VS Code Editor Window */}
      <div
        style={{
          marginTop: 40,
          width: 820,
          backgroundColor: '#161B22',
          borderRadius: 20,
          border: '1.5px solid #30363D',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(34, 197, 94, 0.2)',
          transform: \`translateY(\${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [40, 0])}px)\`,
        }}
      >
        {/* Top Window Bar */}
        <div style={{ backgroundColor: '#0D1117', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
          <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          <div style={{ marginLeft: 20, color: '#8B949E', fontSize: 16, fontFamily: 'JetBrains Mono, monospace' }}>
            agent.ts — content_journey (Cline Autonomous IDE)
          </div>
        </div>

        {/* Code Content */}
        <div style={{ padding: '24px 28px', fontFamily: 'JetBrains Mono, monospace', fontSize: 22, lineHeight: 1.6 }}>
          <div><span style={{ color: '#FF7B72' }}>import</span> {'{'} <span style={{ color: '#79C0FF' }}>Cline</span>, <span style={{ color: '#79C0FF' }}>DeepSeekV3</span> {'}'} <span style={{ color: '#FF7B72' }}>from</span> <span style={{ color: '#A5D6FF' }}>"cline-ai"</span>;</div>
          <div style={{ marginTop: 10 }}><span style={{ color: '#FFA657' }}>const</span> agent = <span style={{ color: '#FF7B72' }}>new</span> <span style={{ color: '#79C0FF' }}>Cline</span>({'{'}</div>
          <div style={{ marginLeft: 30 }}><span style={{ color: '#79C0FF' }}>model</span>: <span style={{ color: '#A5D6FF' }}>"deepseek-chat-v3"</span>,</div>
          <div style={{ marginLeft: 30 }}><span style={{ color: '#79C0FF' }}>costPerMillion</span>: <span style={{ color: '#7EE787' }}>"$0.14"</span>, <span style={{ color: '#8B949E' }}>// 99% cheaper than Cursor</span></div>
          <div style={{ marginLeft: 30 }}><span style={{ color: '#79C0FF' }}>autoRunTerminal</span>: <span style={{ color: '#79C0FF' }}>true</span>,</div>
          <div>{'}'});</div>
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 2: Relatability - Cursor Paywall Modal
  fs.writeFileSync(`${scenesDir}/Scene2Relatability.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#161B22',
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
          backgroundColor: '#4C1D95',
          border: '1.5px solid #8B5CF6',
          color: '#EDE9FE',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ✦ SUBSCRIPTION TRAP ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#C4B5FD',
          maxWidth: 920,
        }}
      >
        WHY PAY $20/MONTH FOR SUBSCRIPTION LIMITS?
      </div>

      {/* Paywall Warning Card */}
      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#0D1117',
          border: '2px solid #8B5CF6',
          borderRadius: 24,
          padding: '32px 40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          transform: \`scale(\${spring({ frame: frame - 15, fps })})\`,
        }}
      >
        <div style={{ color: '#F87171', fontSize: 26, fontWeight: 800 }}>
          ⚠️ You have reached your monthly fast request quota (500/500).
        </div>
        <div style={{ color: '#94A3B8', fontSize: 22, marginTop: 14, lineHeight: 1.5 }}>
          Your requests are now queued in slow mode. Upgrade to Pro Tier 2 for additional $20/month.
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 3: Problem Glitch - Broken Builds & Terminal Errors
  fs.writeFileSync(`${scenesDir}/Scene3ProblemGlitch.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shakeX = Math.sin(frame * 2.8) * 8;
  const shakeY = Math.cos(frame * 3.1) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0B0F19',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
        transform: \`translate(\${shakeX}px, \${shakeY}px)\`,
      }}
    >
      <div
        style={{
          backgroundColor: '#991B1B',
          color: '#FFFFFF',
          padding: '12px 32px',
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '0.15em',
          marginBottom: 30,
        }}
      >
        🛑 CODEBASE HALLUCINATION
      </div>

      <h1
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#EF4444',
          textAlign: 'center',
          maxWidth: 900,
          textShadow: '0 0 35px rgba(239, 68, 68, 0.6)',
        }}
      >
        COPY-PASTING BROKEN CODE IN CIRCLES
      </h1>

      <div
        style={{
          marginTop: 35,
          width: 780,
          backgroundColor: '#1E293B',
          border: '1.5px solid #EF4444',
          borderRadius: 20,
          padding: '24px 32px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 22,
          color: '#F87171',
          lineHeight: 1.6,
        }}
      >
        <div>❌ TypeError: Cannot read property 'execute' of undefined</div>
        <div style={{ color: '#94A3B8', marginTop: 10 }}>Standard chat AI can't read your terminal, can't run tests, and can't self-heal errors!</div>
      </div>
    </div>
  );
};
`);

  // Scene 4: Solution Reveal - Cline + DeepSeek Cost Comparison
  fs.writeFileSync(`${scenesDir}/Scene4SolutionReveal.tsx`, `import React from 'react';
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
          transform: \`scale(\${spring({ frame, fps })})\`,
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
`);

  // Scene 5: Tutorial - Autonomous Self-Healing Terminal
  fs.writeFileSync(`${scenesDir}/Scene5Tutorial.tsx`, `import React from 'react';
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
                transform: \`translateY(\${interpolate(s, [0, 1], [40, 0])}px)\`,
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
`);

  // Scene 6: Outro CTA
  fs.writeFileSync(`${scenesDir}/Scene6OutroCTA.tsx`, `import React from 'react';
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
          fontSize: 24,
          fontWeight: 800,
          color: '#10B981',
          letterSpacing: '0.15em',
          marginBottom: 25,
        }}
      >
        ✦ FREE DEVELOPER ASSETS ✦
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
        WANT MY PROVEN .clinerules TEMPLATE?
      </div>

      <div
        style={{
          marginTop: 45,
          backgroundColor: '#059669',
          color: '#FFFFFF',
          padding: '24px 60px',
          borderRadius: 999,
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 900,
          letterSpacing: '0.05em',
          boxShadow: '0 0 50px rgba(5, 150, 105, 0.6)',
          transform: \`scale(\${1 + pulse * 0.015})\`,
        }}
      >
        COMMENT "CLINE" BELOW
      </div>

      <div
        style={{
          marginTop: 35,
          color: '#94A3B8',
          fontSize: 26,
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Tested system prompt & VS Code settings sent to your DM 🚀
      </div>
    </div>
  );
};
`);
}

// =========================================================================
// 3. VIDEO #14: Authentic WhatsApp Dark Mode & Conversational CRM
// =========================================================================
function buildVideo14() {
  const vDir = 'D:/anurag/content_journey/videos/video#14';
  const scenesDir = `${vDir}/src/scenes`;
  if (!fs.existsSync(scenesDir)) fs.mkdirSync(scenesDir, { recursive: true });

  // Scene 1: Hook - WhatsApp Mobile Chat UI
  fs.writeFileSync(`${scenesDir}/Scene1Hook.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title = "AUTONOMOUS WHATSAPP AI AGENT";
  const letters = title.split("");

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
      {/* WhatsApp Emerald Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* WhatsApp Verified Badge */}
      <div
        style={{
          padding: '12px 32px',
          borderRadius: 999,
          backgroundColor: '#005C4B',
          border: '1.5px solid #25D366',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 35,
          boxShadow: '0 0 25px rgba(37, 211, 102, 0.4)',
          transform: \`scale(\${spring({ frame, fps })})\`,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{ fontSize: 24 }}>💬</span>
        <span>24/7 AUTONOMOUS CLIENT RECEPTIONIST</span>
      </div>

      {/* Kinetic Letter Spring Title */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 960,
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#FFFFFF',
        }}
      >
        {letters.map((char, index) => {
          const s = spring({
            frame: frame - index * 1.5,
            fps,
            config: { damping: 10, mass: 0.5, stiffness: 180 },
          });
          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: \`translateY(\${interpolate(s, [0, 1], [50, 0])}px) scale(\${interpolate(s, [0, 1], [0.4, 1])})\`,
                marginRight: char === " " ? 22 : 1,
                color: index >= 11 ? '#25D366' : '#FFFFFF',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Realistic WhatsApp Chat Conversation Mockup */}
      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#111B21',
          borderRadius: 24,
          border: '1.5px solid #222E35',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(37, 211, 102, 0.2)',
          transform: \`translateY(\${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [40, 0])}px)\`,
        }}
      >
        {/* WhatsApp Top Chat Bar */}
        <div style={{ backgroundColor: '#202C33', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#00A884', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24 }}>
            🤖
          </div>
          <div>
            <div style={{ color: '#E9EDEF', fontSize: 22, fontWeight: 700 }}>AI Client Assistant</div>
            <div style={{ color: '#25D366', fontSize: 16, fontWeight: 500 }}>online · replies instantly</div>
          </div>
        </div>

        {/* Chat Bubbles */}
        <div style={{ padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#202C33', color: '#E9EDEF', padding: '14px 20px', borderRadius: '16px 16px 16px 4px', fontSize: 22, maxWidth: 540 }}>
            "Hi, website development package kitne ka hai?"
            <div style={{ fontSize: 14, color: '#8696A0', textAlign: 'right', marginTop: 4 }}>02:14 AM</div>
          </div>

          <div style={{ alignSelf: 'flex-end', backgroundColor: '#005C4B', color: '#E9EDEF', padding: '14px 20px', borderRadius: '16px 16px 4px 16px', fontSize: 22, maxWidth: 580 }}>
            "Hello! 🚀 Hamare packages ₹15,000 se start hote hain. Maine aapke liye brochure aur calendar link attach kar diya hai!"
            <div style={{ fontSize: 14, color: '#53BDEB', textAlign: 'right', marginTop: 4 }}>02:14 AM ✓✓</div>
          </div>
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 2: Relatability - Late Night Leads Lost
  fs.writeFileSync(`${scenesDir}/Scene2Relatability.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0F172A',
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
          backgroundColor: '#831843',
          border: '1.5px solid #F43F5E',
          color: '#FFE4E6',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ✦ THE REVENUE LEAK ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#FDA4AF',
          maxWidth: 920,
        }}
      >
        CLIENTS BUY FROM WHOEVER REPLIES FIRST
      </div>

      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#1E293B',
          borderRadius: 24,
          padding: '32px 40px',
          border: '1.5px solid #F43F5E',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ fontSize: 26, color: '#F87171', fontWeight: 800 }}>
          🕒 6 Hours Average Response Delay = 78% Lead Loss
        </div>
        <div style={{ fontSize: 22, color: '#94A3B8', marginTop: 14, lineHeight: 1.5 }}>
          Agar aap so rahe ho aur client WhatsApp par msg karta hai, agle 10 minute me wo aapke competitor ke paas chala jaata hai!
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 3: Problem Glitch - Manual Chatting Overwhelm
  fs.writeFileSync(`${scenesDir}/Scene3ProblemGlitch.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shakeX = Math.sin(frame * 2.8) * 8;
  const shakeY = Math.cos(frame * 3.1) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#020617',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
        transform: \`translate(\${shakeX}px, \${shakeY}px)\`,
      }}
    >
      <div
        style={{
          backgroundColor: '#991B1B',
          color: '#FFFFFF',
          padding: '12px 32px',
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '0.15em',
          marginBottom: 30,
        }}
      >
        🛑 24/7 CHAT BURNOUT
      </div>

      <h1
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#EF4444',
          textAlign: 'center',
          maxWidth: 900,
          textShadow: '0 0 35px rgba(239, 68, 68, 0.6)',
        }}
      >
        TIRED OF MANUALLY TYPING SAME REPLIES?
      </h1>

      <div
        style={{
          marginTop: 35,
          width: 780,
          backgroundColor: '#0F172A',
          border: '1.5px solid #EF4444',
          borderRadius: 20,
          padding: '24px 32px',
          fontSize: 24,
          color: '#F87171',
          lineHeight: 1.6,
          textAlign: 'center',
        }}
      >
        "Price kitna hai?", "Sample dikhao?", "Address kya hai?" — Har din 50 baar same messages copy-paste karne se business scale nahi hota!
      </div>
    </div>
  );
};
`);

  // Scene 4: Solution Reveal - Python FastAPI + Baileys
  fs.writeFileSync(`${scenesDir}/Scene4SolutionReveal.tsx`, `import React from 'react';
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
          transform: \`scale(\${spring({ frame, fps })})\`,
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
`);

  // Scene 5: Tutorial - 3 Step Python Integration
  fs.writeFileSync(`${scenesDir}/Scene5Tutorial.tsx`, `import React from 'react';
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
                transform: \`translateY(\${interpolate(s, [0, 1], [40, 0])}px)\`,
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
`);

  // Scene 6: Outro CTA
  fs.writeFileSync(`${scenesDir}/Scene6OutroCTA.tsx`, `import React from 'react';
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
          fontSize: 24,
          fontWeight: 800,
          color: '#25D366',
          letterSpacing: '0.15em',
          marginBottom: 25,
        }}
      >
        ✦ 100% OPEN SOURCE ARCHITECTURE ✦
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
        WANT THE FULL PYTHON WHATSAPP BOT CODE?
      </div>

      <div
        style={{
          marginTop: 45,
          backgroundColor: '#25D366',
          color: '#0B141A',
          padding: '24px 60px',
          borderRadius: 999,
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 40,
          fontWeight: 900,
          letterSpacing: '0.05em',
          boxShadow: '0 0 50px rgba(37, 211, 102, 0.6)',
          transform: \`scale(\${1 + pulse * 0.015})\`,
        }}
      >
        COMMENT "WHATSAPP" BELOW
      </div>

      <div
        style={{
          marginTop: 35,
          color: '#8696A0',
          fontSize: 26,
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        FastAPI webhook + Baileys bridge sent directly to your DM 🚀
      </div>
    </div>
  );
};
`);
}

// =========================================================================
// 4. VIDEO #15: 3D Holographic Spatial Studio & Isometric Mesh Wireframe
// =========================================================================
function buildVideo15() {
  const vDir = 'D:/anurag/content_journey/videos/video#15';
  const scenesDir = `${vDir}/src/scenes`;
  if (!fs.existsSync(scenesDir)) fs.mkdirSync(scenesDir, { recursive: true });

  // Scene 1: Hook - Hologram Laser Scan from 2D Sketch to 3D Mesh
  fs.writeFileSync(`${scenesDir}/Scene1Hook.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const title = "2D SKETCH TO 3D MESH IN 60S";
  const letters = title.split("");

  const scanY = (frame * 6) % 360;

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
      {/* 3D Isometric Hologram Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
          backgroundSize: '45px 45px',
        }}
      />

      {/* Ultraviolet Radial Center Glow */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
        }}
      />

      {/* 3D Neural Studio Badge */}
      <div
        style={{
          padding: '12px 32px',
          borderRadius: 999,
          backgroundColor: '#581C87',
          border: '1.5px solid #A855F7',
          color: '#F3E8FF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 35,
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ✦ NEURAL 3D RECONSTRUCTION ✦
      </div>

      {/* Kinetic Letter Spring Title */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 960,
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#FFFFFF',
        }}
      >
        {letters.map((char, index) => {
          const s = spring({
            frame: frame - index * 1.5,
            fps,
            config: { damping: 10, mass: 0.5, stiffness: 180 },
          });
          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: \`translateY(\${interpolate(s, [0, 1], [50, 0])}px) scale(\${interpolate(s, [0, 1], [0.4, 1])})\`,
                marginRight: char === " " ? 22 : 1,
                color: index >= 13 ? '#A855F7' : '#FFFFFF',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Isometric 2D to 3D Hologram Transformation Viewport */}
      <div
        style={{
          marginTop: 40,
          width: 800,
          height: 380,
          backgroundColor: '#18181B',
          borderRadius: 24,
          border: '2px solid #7C3AED',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(168, 85, 247, 0.3)',
        }}
      >
        {/* Left Side: 2D Concept Sketch */}
        <div style={{ flex: 1, borderRight: '1px solid #3F3F46', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <div style={{ fontSize: 64 }}>✏️</div>
          <div style={{ color: '#E4E4E7', fontSize: 22, fontWeight: 700, marginTop: 12 }}>2D Concept Art</div>
          <div style={{ color: '#A1A1AA', fontSize: 16 }}>Single PNG/JPG Input</div>
        </div>

        {/* Laser Scanner Line Passing Across */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: scanY,
            height: 3,
            backgroundColor: '#06B6D4',
            boxShadow: '0 0 20px #06B6D4, 0 0 10px #06B6D4',
          }}
        />

        {/* Right Side: Game-Ready 3D Mesh */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#09090B' }}>
          <div style={{ fontSize: 64, transform: \`rotateY(\${frame * 2}deg)\` }}>🗿</div>
          <div style={{ color: '#C084FC', fontSize: 22, fontWeight: 800, marginTop: 12 }}>Game-Ready 3D GLB</div>
          <div style={{ color: '#22C55E', fontSize: 16, fontWeight: 600 }}>15k Tris · PBR Textures</div>
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 2: Relatability - 10 Hours Modeling in Blender
  fs.writeFileSync(`${scenesDir}/Scene2Relatability.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene2Relatability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#18181B',
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
          backgroundColor: '#4C1D95',
          border: '1.5px solid #8B5CF6',
          color: '#EDE9FE',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ✦ THE MANUAL MODELING GRIND ✦
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#E9D5FF',
          maxWidth: 920,
        }}
      >
        SPENDING 10+ HOURS EXTRUDING VERTICES?
      </div>

      <div
        style={{
          marginTop: 40,
          width: 780,
          backgroundColor: '#09090B',
          borderRadius: 24,
          padding: '32px 40px',
          border: '1.5px solid #6B21A8',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ fontSize: 26, color: '#C084FC', fontWeight: 800 }}>
          ⏳ Traditional 3D Asset Pipeline:
        </div>
        <div style={{ fontSize: 22, color: '#A1A1AA', marginTop: 14, lineHeight: 1.6 }}>
          Blocking (3h) ➔ High-Poly Sculpting (4h) ➔ Manual Retopology (2h) ➔ UV Unwrapping & Substance Painter texturing (3h)!
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 3: Problem Glitch - Broken Topology & Vertex Overload
  fs.writeFileSync(`${scenesDir}/Scene3ProblemGlitch.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3ProblemGlitch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shakeX = Math.sin(frame * 2.8) * 8;
  const shakeY = Math.cos(frame * 3.1) * 6;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        position: 'relative',
        overflow: 'hidden',
        transform: \`translate(\${shakeX}px, \${shakeY}px)\`,
      }}
    >
      <div
        style={{
          backgroundColor: '#991B1B',
          color: '#FFFFFF',
          padding: '12px 32px',
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '0.15em',
          marginBottom: 30,
        }}
      >
        🛑 PRODUCTION BLOCKER
      </div>

      <h1
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#EF4444',
          textAlign: 'center',
          maxWidth: 900,
          textShadow: '0 0 35px rgba(239, 68, 68, 0.6)',
        }}
      >
        BAD TOPOLOGY & MISSING PBR TEXTURES
      </h1>

      <div
        style={{
          marginTop: 35,
          width: 780,
          backgroundColor: '#18181B',
          border: '1.5px solid #EF4444',
          borderRadius: 20,
          padding: '24px 32px',
          fontSize: 24,
          color: '#F87171',
          lineHeight: 1.6,
          textAlign: 'center',
        }}
      >
        Old 3D AI models produce 2-million polygon bloated blobs jo Unreal Engine aur Unity games me lag karte hain!
      </div>
    </div>
  );
};
`);

  // Scene 4: Solution Reveal - Trellis + Blender Decimation
  fs.writeFileSync(`${scenesDir}/Scene4SolutionReveal.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene4SolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
          padding: '12px 30px',
          borderRadius: 999,
          backgroundColor: '#581C87',
          border: '1.5px solid #A855F7',
          color: '#F3E8FF',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.15em',
          marginBottom: 30,
          transform: \`scale(\${spring({ frame, fps })})\`,
        }}
      >
        ⚡ TRELLIS 3D NEURAL SUITE
      </div>

      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Anton, sans-serif',
          fontSize: 104,
          lineHeight: 1.05,
          color: '#C084FC',
          maxWidth: 920,
        }}
      >
        MICROSOFT TRELLIS + BLENDER PYTHON
      </div>

      {/* Feature Pills */}
      <div style={{ marginTop: 40, width: 800, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ backgroundColor: '#18181B', padding: '18px 24px', borderRadius: 16, border: '1.5px solid #A855F7', color: '#F4F4F5', fontSize: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>⚡</span> <span><strong>Instant Volumetric Gen:</strong> 2D sketch to textured 3D mesh in 45s</span>
        </div>
        <div style={{ backgroundColor: '#18181B', padding: '18px 24px', borderRadius: 16, border: '1.5px solid #A855F7', color: '#F4F4F5', fontSize: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>🎮</span> <span><strong>Smart Decimate Script:</strong> 1-click reduce to 15,000 game-ready tris</span>
        </div>
        <div style={{ backgroundColor: '#18181B', padding: '18px 24px', borderRadius: 16, border: '1.5px solid #A855F7', color: '#F4F4F5', fontSize: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span>🎨</span> <span><strong>PBR Material Maps:</strong> Albedo, Normal, Roughness exported to .GLB</span>
        </div>
      </div>
    </div>
  );
};
`);

  // Scene 5: Tutorial - 3 Step Blender Pipeline
  fs.writeFileSync(`${scenesDir}/Scene5Tutorial.tsx`, `import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { num: "01", text: "Upload 2D sketch to Trellis HuggingFace / Local API", tag: "GENERATE" },
    { num: "02", text: "Run 1-click Blender Python import & decimate script", tag: "CLEANUP" },
    { num: "03", text: "Export optimized .GLB ready for Unreal Engine & Web", tag: "EXPORT" },
  ];

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
          fontSize: 22,
          fontWeight: 800,
          color: '#A855F7',
          letterSpacing: '0.15em',
          marginBottom: 20,
        }}
      >
        ✦ 60-SECOND PIPELINE ✦
      </div>

      <h2
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 94,
          color: '#F4F4F5',
          marginBottom: 35,
          textAlign: 'center',
        }}
      >
        CREATE 3D ASSETS IN RECORD TIME
      </h2>

      <div style={{ width: 840, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {steps.map((step, idx) => {
          const s = spring({ frame: frame - idx * 12, fps });
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#18181B',
                border: '1.5px solid #27272A',
                borderRadius: 20,
                padding: '22px 30px',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                transform: \`translateY(\${interpolate(s, [0, 1], [40, 0])}px)\`,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: '#7C3AED',
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
              <div style={{ flex: 1, fontFamily: 'Montserrat, sans-serif', fontSize: 24, color: '#F4F4F5', fontWeight: 600 }}>
                {step.text}
              </div>
              <div
                style={{
                  padding: '6px 16px',
                  borderRadius: 8,
                  backgroundColor: '#27272A',
                  color: '#C084FC',
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
`);

  // Scene 6: Outro CTA
  fs.writeFileSync(`${scenesDir}/Scene6OutroCTA.tsx`, `import React from 'react';
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
          transform: \`scale(\${1 + pulse * 0.015})\`,
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
`);
}

console.log('Writing unique scene redesigns for Video #12, #13, #14, and #15...');
buildVideo12();
console.log('✅ Video #12 Redesigned: Cyber Telephony & Live Voice Waveform UI');

buildVideo13();
console.log('✅ Video #13 Redesigned: Futuristic IDE Matrix & Terminal Cyber-Editor');

buildVideo14();
console.log('✅ Video #14 Redesigned: Emerald WhatsApp Business OS & Instant CRM');

buildVideo15();
console.log('✅ Video #15 Redesigned: 3D Holographic Spatial Studio & Isometric Mesh Wireframe');
