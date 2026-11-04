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
          transform: `scale(${spring({ frame, fps })})`,
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
