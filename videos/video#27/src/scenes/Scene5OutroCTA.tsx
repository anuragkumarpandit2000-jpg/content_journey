import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene5OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    fps,
    frame,
    config: { damping: 14, mass: 0.7 },
  });

  const pulse = Math.sin(frame * 0.18) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 40%, #0d1e3d 0%, #050812 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
      }}
    >
      {/* 3D Privacy Shield Icon */}
      <div
        style={{
          transform: `scale(${entrance})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 36,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #10b981, #059669)",
            border: "4px solid #4ADE80",
            boxShadow: `0 0 ${40 + pulse * 30}px rgba(74, 222, 128, 0.7), inset 0 0 30px rgba(255, 255, 255, 0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
          }}
        >
          🛡️
        </div>
        <div
          style={{
            color: "#4ADE80",
            fontWeight: 900,
            fontSize: 28,
            letterSpacing: 2,
            marginTop: 18,
            textShadow: "0 0 20px rgba(74, 222, 128, 0.6)",
          }}
        >
          100% PRIVATE & SAFE
        </div>
      </div>

      {/* Main High-Converting Lead Magnet Card */}
      <div
        style={{
          width: "92%",
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(20px)",
          border: "2px solid rgba(250, 204, 21, 0.5)",
          boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 ${30 + pulse * 20}px rgba(250, 204, 21, 0.3)`,
          borderRadius: 36,
          padding: "36px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 16,
        }}
      >
        <div style={{ color: "#94A3B8", fontSize: 16, fontWeight: 800, letterSpacing: 2 }}>
          FREE SECURITY BLUEPRINT
        </div>

        <div style={{ color: "#FFF", fontSize: 32, fontWeight: 900, lineHeight: 1.25 }}>
          GET THE COMPLETE <span style={{ color: "#38BDF8" }}>PHONE PRIVACY</span> CHEATSHEET
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #EF4444, #F97316)",
            color: "#FFF",
            fontSize: 34,
            fontWeight: 900,
            padding: "16px 36px",
            borderRadius: 24,
            letterSpacing: 2,
            boxShadow: "0 10px 30px rgba(239, 68, 68, 0.6)",
            transform: `scale(${1 + pulse * 0.06})`,
            marginTop: 10,
          }}
        >
          COMMENT "STOP" 👇
        </div>

        <div style={{ color: "#CBD5E1", fontSize: 18, fontWeight: 700, marginTop: 4 }}>
          I'll DM you the Direct VIP PDF Link Instantly! ⚡
        </div>

        <div
          style={{
            marginTop: 12,
            background: "rgba(255, 255, 255, 0.06)",
            padding: "8px 24px",
            borderRadius: 16,
            color: "#38BDF8",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 1,
            border: "1px dashed rgba(56, 189, 248, 0.4)",
          }}
        >
          🔗 parker-render.netlify.app/stop
        </div>
      </div>
    </AbsoluteFill>
  );
};
