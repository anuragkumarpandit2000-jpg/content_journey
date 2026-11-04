import React from 'react';
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
          transform: `scale(${spring({ frame, fps })})`,
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
                transform: `translateY(${interpolate(s, [0, 1], [50, 0])}px) scale(${interpolate(s, [0, 1], [0.4, 1])})`,
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
          transform: `translateY(${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [40, 0])}px)`,
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
