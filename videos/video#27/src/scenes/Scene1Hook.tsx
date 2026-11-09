import React from "react";
import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

import React from "react";
import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle camera push zoom for immersion
  const scale = interpolate(frame, [0, 285], [1.0, 1.06]);

  return (
    <AbsoluteFill style={{ background: "#050811", overflow: "hidden" }}>
      {/* 3D Blender Master Render Video Layer */}
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        <Video
          src={staticFile("blender_3d_hook.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          startFrom={0}
        />
      </AbsoluteFill>

      {/* Neat & Clean Kinetic Typography (1st 10 Seconds) - No Clutter, No Boxes */}
      <div
        style={{
          position: "absolute",
          top: 1140,
          left: 40,
          right: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 40,
          pointerEvents: "none",
        }}
      >
        {/* PHASE 1 (0 to 55 frames | 0 - 1.8s): "Kya aapke sath bhi aisa hua hai?" */}
        {frame >= 0 && frame < 56 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontSize: 48,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: interpolate(frame, [0, 8], [0, 1]),
                transform: `translateY(${interpolate(frame, [0, 8], [24, 0])}px)`,
                textShadow: "0 4px 20px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              KYA AAPKE SATH BHI
            </span>

            {frame >= 18 && (
              <span
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontSize: 78,
                  fontWeight: 900,
                  color: "#FACC15",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  transform: `scale(${spring({
                    frame: frame - 18,
                    fps,
                    config: { damping: 11, stiffness: 150 },
                  })})`,
                  textShadow:
                    "0 0 35px rgba(250, 204, 21, 0.7), 0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)",
                }}
              >
                AISA HUA HAI?
              </span>
            )}
          </div>
        )}

        {/* PHASE 2 (56 to 192 frames | 1.9s - 6.4s): "Aap doston se kisi naye shoe ya sneaker ki baat karte ho" */}
        {frame >= 56 && frame < 105 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontSize: 52,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: interpolate(frame, [56, 64], [0, 1]),
                transform: `translateY(${interpolate(frame, [56, 64], [20, 0])}px)`,
                textShadow: "0 4px 20px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              DOSTON SE KISI
            </span>
          </div>
        )}

        {frame >= 105 && frame < 156 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontSize: 76,
                fontWeight: 900,
                color: "#38BDF8",
                letterSpacing: 2,
                textTransform: "uppercase",
                transform: `scale(${spring({
                  frame: frame - 105,
                  fps,
                  config: { damping: 11, stiffness: 160 },
                })})`,
                textShadow:
                  "0 0 35px rgba(56, 189, 248, 0.7), 0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)",
              }}
            >
              NAYE SHOE
            </span>

            {frame >= 125 && (
              <span
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontSize: 76,
                  fontWeight: 900,
                  color: "#F472B6",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  transform: `scale(${spring({
                    frame: frame - 125,
                    fps,
                    config: { damping: 11, stiffness: 160 },
                  })})`,
                  textShadow:
                    "0 0 35px rgba(244, 114, 182, 0.7), 0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)",
                }}
              >
                YA SNEAKER
              </span>
            )}
          </div>
        )}

        {frame >= 156 && frame < 193 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontSize: 54,
                fontWeight: 800,
                color: "#F8FAFC",
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: interpolate(frame, [156, 164], [0, 1]),
                transform: `translateY(${interpolate(frame, [156, 164], [18, 0])}px)`,
                textShadow: "0 4px 20px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              KI BAAT KARTE HO...
            </span>
          </div>
        )}

        {/* PHASE 3 (193 to 285 frames | 6.5s - 9.5s): "aur agle hi minute phone par same shoe ka ad aa jata hai!" */}
        {frame >= 193 && frame < 236 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontSize: 50,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: interpolate(frame, [193, 201], [0, 1]),
                transform: `translateY(${interpolate(frame, [193, 201], [18, 0])}px)`,
                textShadow: "0 4px 20px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              AUR AGLE HI MINUTE...
            </span>
          </div>
        )}

        {frame >= 236 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontSize: 44,
                fontWeight: 800,
                color: "#CBD5E1",
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: interpolate(frame, [236, 244], [0, 1]),
                textShadow: "0 4px 20px rgba(0,0,0,0.95)",
              }}
            >
              PHONE PAR
            </span>

            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              <span
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontSize: 78,
                  fontWeight: 900,
                  color: "#4ADE80",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  transform: `scale(${spring({
                    frame: frame - 236,
                    fps,
                    config: { damping: 11, stiffness: 160 },
                  })})`,
                  textShadow:
                    "0 0 35px rgba(74, 222, 128, 0.7), 0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)",
                }}
              >
                SAME SHOE
              </span>

              <span
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontSize: 82,
                  fontWeight: 900,
                  color: "#EF4444",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  transform: `scale(${spring({
                    frame: frame - 246,
                    fps,
                    config: { damping: 11, stiffness: 180 },
                  })})`,
                  textShadow:
                    "0 0 35px rgba(239, 68, 68, 0.8), 0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9)",
                }}
              >
                KA AD!
              </span>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
