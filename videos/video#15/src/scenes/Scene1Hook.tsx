import React from 'react';
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
          transform: `scale(${spring({ frame, fps })})`,
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
                transform: `translateY(${interpolate(s, [0, 1], [50, 0])}px) scale(${interpolate(s, [0, 1], [0.4, 1])})`,
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
          <div style={{ fontSize: 64, transform: `rotateY(${frame * 2}deg)` }}>🗿</div>
          <div style={{ color: '#C084FC', fontSize: 22, fontWeight: 800, marginTop: 12 }}>Game-Ready 3D GLB</div>
          <div style={{ color: '#22C55E', fontSize: 16, fontWeight: 600 }}>15k Tris · PBR Textures</div>
        </div>
      </div>
    </div>
  );
};
