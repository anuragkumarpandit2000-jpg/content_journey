import React from 'react';
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
                transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
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
