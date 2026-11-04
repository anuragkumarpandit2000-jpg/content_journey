import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [{"num":"01","title":"Install Ollama","code":"curl -fsSL https://ollama.com/install.sh | sh","color":"#FACC15"},{"num":"02","title":"Pull DeepSeek-R1","code":"ollama run deepseek-r1:8b","color":"#38BDF8"},{"num":"03","title":"Launch Open WebUI","code":"docker run -p 3000:8080 ghcr.io/open-webui","color":"#A855F7"},{"num":"04","title":"45 Tokens/Sec Ready","code":"⚡ Zero Cloud Bills • 100% Private","color":"#10B981"}];
  const stepIndex = Math.min(steps.length - 1, Math.floor(interpolate(frame, [0, 328], [0, steps.length])));
  const activeStep = steps[stepIndex];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#070A11',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px 50px',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${activeStep.color}22 0%, transparent 70%)`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Fixed Step Header Banner */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 40,
          zIndex: 10,
        }}
      >
        <div
          style={{
            padding: '10px 24px',
            borderRadius: 999,
            backgroundColor: activeStep.color,
            color: '#000000',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '0.1em',
            marginBottom: 12,
            boxShadow: `0 0 20px ${activeStep.color}88`,
          }}
        >
          STEP ${activeStep.num} OF 04
        </div>
        <div
          style={{
            fontFamily: 'Anton, Montserrat, sans-serif',
            fontSize: 54,
            color: '#FFFFFF',
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}
        >
          ${activeStep.title}
        </div>
      </div>

      {/* Interactive Terminal / Code Box */}
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          backgroundColor: '#0F172A',
          border: `2px solid ${activeStep.color}88`,
          borderRadius: 24,
          padding: 36,
          boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#EF4444' }} />
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#F59E0B' }} />
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#10B981' }} />
        </div>
        <pre
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 28,
            color: '#38BDF8',
            whiteSpace: 'pre-wrap',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          ${activeStep.code}
        </pre>
      </div>

      {/* Step Indicators List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          width: '100%',
          maxWidth: 920,
          marginTop: 40,
          zIndex: 10,
        }}
      >
        {steps.map((st, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              padding: '16px 24px',
              borderRadius: 16,
              backgroundColor: i === stepIndex ? 'rgba(30, 41, 59, 0.9)' : 'rgba(15, 23, 42, 0.5)',
              border: i === stepIndex ? `1.5px solid ${st.color}` : '1px solid rgba(255, 255, 255, 0.08)',
              color: i === stepIndex ? '#FFFFFF' : '#64748B',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            <span style={{ color: st.color, fontWeight: 900 }}>✓ STEP {st.num}:</span>
            <span>{st.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
