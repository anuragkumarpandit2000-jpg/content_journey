import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene2Secret: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    fps,
    frame,
    config: { damping: 14, mass: 0.8 },
  });

  const pulse = Math.sin(frame * 0.15) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 45%, #111a33 0%, #060913 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      {/* Top Threat Badge */}
      <div
        style={{
          position: "absolute",
          top: 100,
          background: "rgba(239, 68, 68, 0.15)",
          border: "2px solid #EF4444",
          borderRadius: 30,
          padding: "10px 32px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
        }}
      >
        <span style={{ fontSize: 24 }}>🚨</span>
        <span
          style={{
            color: "#EF4444",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          24/7 Background Telemetry
        </span>
      </div>

      {/* Central Visual: Google Server Wiretap Radar */}
      <div
        style={{
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: -60,
        }}
      >
        {/* Pulsing Concentric Radar Rings */}
        <div
          style={{
            position: "relative",
            width: 380,
            height: 380,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[1, 1.4, 1.8].map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 220 * s,
                height: 220 * s,
                borderRadius: "50%",
                border: "2px dashed rgba(56, 189, 248, 0.3)",
                transform: `scale(${1 + pulse * 0.15 * (i + 1)}) rotate(${frame * (i % 2 === 0 ? 1 : -1) * 0.5}deg)`,
              }}
            />
          ))}

          {/* Glowing Microphone Core */}
          <div
            style={{
              width: 170,
              height: 170,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1e293b, #0f172a)",
              border: "3px solid #38BDF8",
              boxShadow: `0 0 ${40 + pulse * 30}px rgba(56, 189, 248, 0.6), inset 0 0 30px rgba(56, 189, 248, 0.3)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 64 }}>🎙️</span>
            <span
              style={{
                color: "#38BDF8",
                fontWeight: 900,
                fontSize: 16,
                letterSpacing: 1.5,
                marginTop: 4,
              }}
            >
              RECORDING
            </span>
          </div>
        </div>

        {/* Live Decibel / Acoustic Meter */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 20,
            padding: "20px 40px",
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ color: "#94A3B8", fontSize: 16, fontWeight: 700, letterSpacing: 1 }}>
            ACOUSTIC TELEMETRY STREAM
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {[30, 65, 45, 90, 75, 40, 85, 100, 60, 80, 50, 70, 95].map((h, idx) => (
              <div
                key={idx}
                style={{
                  width: 8,
                  height: h * (0.6 + 0.5 * Math.sin(frame * 0.25 + idx)),
                  background: h > 80 ? "#EF4444" : h > 50 ? "#FACC15" : "#38BDF8",
                  borderRadius: 4,
                  boxShadow: `0 0 10px ${h > 80 ? "#EF4444" : "#38BDF8"}`,
                }}
              />
            ))}
          </div>
          <div style={{ color: "#FACC15", fontWeight: 800, fontSize: 18 }}>
            TARGETED KEYWORD MATCH: "SNEAKERS / SHOES"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
