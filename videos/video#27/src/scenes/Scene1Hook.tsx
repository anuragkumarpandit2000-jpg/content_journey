import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Floating bobbing motion for 3D phone
  const floatY = Math.sin(frame * 0.08) * 10;
  const floatRotate = Math.sin(frame * 0.05) * 2;

  // Wave pulse
  const pulse = Math.sin(frame * 0.2) * 0.5 + 0.5;

  // Ad card entrance spring at frame 180
  const adSpring = spring({
    frame: frame - 180,
    fps,
    config: { damping: 12, stiffness: 140 },
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 35%, #151d38 0%, #080c18 65%, #020409 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Cyber Ambient Lights */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 300,
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Cyber Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      {/* HERO VISUAL: 3D Perspective Floating Smartphone */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          perspective: 1200,
        }}
      >
        <div
          style={{
            width: 440,
            height: 680,
            borderRadius: 48,
            background: "#080D1A",
            border: "4px solid #334155",
            boxShadow:
              "0 35px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(56, 189, 248, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            transform: `rotateX(${10 + floatRotate}deg) rotateY(-5deg) translateY(${floatY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dynamic Island / Speaker */}
          <div
            style={{
              width: 120,
              height: 26,
              borderRadius: 13,
              background: "#000000",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 10,
              gap: 6,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: frame < 180 ? "#22C55E" : "#EF4444",
                boxShadow: `0 0 8px ${frame < 180 ? "#22C55E" : "#EF4444"}`,
              }}
            />
          </div>

          {/* SCREEN CONTENT: PHASE 1 (0 to 180 frames) - Audio Wiretap Telemetry */}
          {frame < 185 && (
            <div
              style={{
                flex: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                opacity: frame >= 175 ? interpolate(frame, [175, 185], [1, 0]) : 1,
              }}
            >
              {/* Concentric Audio Radar Wave Rings */}
              {[1, 2, 3].map((ring) => {
                const ringScale = ((frame * 0.05 + ring * 0.33) % 1) * 2.2 + 0.6;
                const ringOpacity = (1 - ringScale / 2.8) * 0.55;
                return (
                  <div
                    key={ring}
                    style={{
                      position: "absolute",
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      border: "2px solid #38BDF8",
                      transform: `scale(${ringScale})`,
                      opacity: Math.max(0, ringOpacity),
                    }}
                  />
                );
              })}

              {/* Pulsing Microphone Icon */}
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #38BDF8 0%, #0284C7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 ${25 + pulse * 20}px rgba(56, 189, 248, 0.8)`,
                  zIndex: 10,
                }}
              >
                <span style={{ fontSize: 44 }}>🎙️</span>
              </div>

              {/* Dynamic Sound Waveform Bars */}
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  height: 60,
                  marginTop: 36,
                  zIndex: 10,
                }}
              >
                {[18, 32, 54, 70, 42, 60, 26, 48, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 5,
                      height: h * (0.35 + 0.65 * Math.abs(Math.sin(frame * 0.28 + i * 0.75))),
                      background: i % 2 === 0 ? "#38BDF8" : "#818CF8",
                      borderRadius: 3,
                      boxShadow: "0 0 10px #38BDF8",
                    }}
                  />
                ))}
              </div>

              {/* Status Banner */}
              <div
                style={{
                  marginTop: 24,
                  background:
                    frame < 90
                      ? "rgba(34, 197, 94, 0.15)"
                      : "rgba(239, 68, 68, 0.2)",
                  border: `1px solid ${frame < 90 ? "#22C55E" : "#EF4444"}`,
                  borderRadius: 20,
                  padding: "6px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: frame < 90 ? "#22C55E" : "#EF4444",
                    boxShadow: `0 0 8px ${frame < 90 ? "#22C55E" : "#EF4444"}`,
                  }}
                />
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                  }}
                >
                  {frame < 90 ? "MIC ACTIVE • LISTENING" : "KEYWORD: SNEAKER / SHOE"}
                </span>
              </div>
            </div>
          )}

          {/* SCREEN CONTENT: PHASE 2 (180 to 285 frames) - Targeted Sneaker Ad Pop */}
          {frame >= 175 && (
            <div
              style={{
                flex: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                transform: `scale(${adSpring})`,
                opacity: interpolate(frame, [175, 185], [0, 1]),
              }}
            >
              {/* Sponsored Shopping Ad Card */}
              <div
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))",
                  border: "2px solid rgba(239, 68, 68, 0.6)",
                  borderRadius: 24,
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 20px 45px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {/* Header Tag */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      background: "#EF4444",
                      color: "#FFF",
                      fontSize: 11,
                      fontWeight: 900,
                      padding: "3px 10px",
                      borderRadius: 12,
                      letterSpacing: 1,
                    }}
                  >
                    SPONSORED AD
                  </span>
                  <span style={{ color: "#94A3B8", fontSize: 11, fontWeight: 700 }}>
                    Telemetry Match
                  </span>
                </div>

                {/* Sneaker Graphic Badge */}
                <div
                  style={{
                    width: 140,
                    height: 100,
                    borderRadius: 20,
                    background: "radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, rgba(0,0,0,0) 70%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 72,
                    filter: "drop-shadow(0 15px 25px rgba(239,68,68,0.5))",
                    transform: `scale(${1 + Math.sin(frame * 0.15) * 0.05}) rotate(-8deg)`,
                  }}
                >
                  👟
                </div>

                {/* Product Info */}
                <div style={{ textAlign: "center", marginTop: 8 }}>
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontSize: 20,
                      fontWeight: 900,
                      letterSpacing: 1,
                    }}
                  >
                    PUMA NITRO RUNNER
                  </div>
                  <div
                    style={{
                      color: "#4ADE80",
                      fontSize: 14,
                      fontWeight: 800,
                      marginTop: 2,
                    }}
                  >
                    40% OFF Flash Sale • In Stock
                  </div>
                </div>

                {/* CTA Button */}
                <div
                  style={{
                    marginTop: 14,
                    width: "100%",
                    background: "linear-gradient(90deg, #EF4444, #F97316)",
                    color: "#FFFFFF",
                    fontWeight: 900,
                    fontSize: 14,
                    padding: "10px 0",
                    borderRadius: 14,
                    textAlign: "center",
                    boxShadow: "0 8px 20px rgba(239, 68, 68, 0.5)",
                    letterSpacing: 1,
                  }}
                >
                  ORDER NOW →
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* NEAT & CLEAN KINETIC TYPOGRAPHY (First 10 Seconds) - Below Phone */}
      <div
        style={{
          position: "absolute",
          top: 1040,
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
