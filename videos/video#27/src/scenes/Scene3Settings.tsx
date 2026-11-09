import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene3Settings: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Step 1: Scroll animation (frames 0 to 120)
  const scrollY = interpolate(frame, [0, 80], [0, -180], {
    extrapolateRight: "clamp",
  });

  // Step 2: Google tap highlight (at frame 90)
  const isGoogleTapped = frame >= 90;

  // Step 3: Screen transition to Google Account (from frame 140)
  const showAccountScreen = frame >= 140;

  return (
    <AbsoluteFill
      style={{
        background: "#080c16",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Step Indicator Header */}
      <div
        style={{
          position: "absolute",
          top: 80,
          background: "rgba(56, 189, 248, 0.15)",
          border: "2px solid #38BDF8",
          borderRadius: 24,
          padding: "10px 32px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            background: "#38BDF8",
            color: "#000",
            fontWeight: 900,
            borderRadius: "50%",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </div>
        <span style={{ color: "#FFF", fontWeight: 800, fontSize: 20, letterSpacing: 1.5 }}>
          STEP 1: OPEN GOOGLE ACCOUNT
        </span>
      </div>

      {/* Phone Screen Mockup Frame */}
      <div
        style={{
          width: 580,
          height: 980,
          background: "#0f172a",
          borderRadius: 48,
          border: "12px solid #1e293b",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(56, 189, 248, 0.2)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          marginTop: 60,
        }}
      >
        {/* Status Bar */}
        <div
          style={{
            height: 48,
            padding: "0 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#94A3B8",
            fontSize: 14,
            fontWeight: 700,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span>19:42</span>
          <div style={{ display: "flex", gap: 8 }}>
            <span>5G</span>
            <span>📶</span>
            <span>🔋 92%</span>
          </div>
        </div>

        {!showAccountScreen ? (
          /* View A: Settings List with Scroll & Tap */
          <div
            style={{
              padding: 28,
              transform: `translateY(${scrollY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h2 style={{ color: "#FFF", fontSize: 32, fontWeight: 800, marginBottom: 28 }}>
              Settings
            </h2>

            {[
              { icon: "📶", title: "Network & internet", desc: "Wi-Fi, Mobile data, Hotspot" },
              { icon: "📱", title: "Apps", desc: "Assistant, Default apps" },
              { icon: "🔋", title: "Battery", desc: "92% - 1 day remaining" },
              { icon: "💾", title: "Storage", desc: "45% used - 128 GB free" },
              { icon: "🎨", title: "Wallpaper & style", desc: "Dark theme, Colors" },
              {
                icon: "🌐",
                title: "Google",
                desc: "Services & preferences",
                isTarget: true,
              },
              { icon: "🛡️", title: "Privacy & security", desc: "Permissions, Location" },
            ].map((item, idx) => {
              const highlighted = item.isTarget && isGoogleTapped;
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "16px 20px",
                    borderRadius: 16,
                    background: highlighted ? "rgba(56, 189, 248, 0.25)" : "transparent",
                    border: highlighted ? "2px solid #38BDF8" : "1px solid transparent",
                    marginBottom: 10,
                    boxShadow: highlighted ? "0 0 25px rgba(56, 189, 248, 0.4)" : "none",
                  }}
                >
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <div>
                    <div style={{ color: highlighted ? "#38BDF8" : "#FFF", fontSize: 18, fontWeight: 800 }}>
                      {item.title}
                    </div>
                    <div style={{ color: "#64748B", fontSize: 14 }}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* View B: Google Account Overview */
          <div
            style={{
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #4285F4, #34A853)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                color: "#FFF",
                fontWeight: 900,
                boxShadow: "0 10px 25px rgba(66, 133, 244, 0.4)",
                marginBottom: 16,
              }}
            >
              A
            </div>
            <div style={{ color: "#FFF", fontSize: 22, fontWeight: 800 }}>Anurag Pandit</div>
            <div style={{ color: "#94A3B8", fontSize: 14, marginBottom: 32 }}>anurag@gmail.com</div>

            <div
              style={{
                background: "#1a73e8",
                color: "#FFF",
                fontWeight: 800,
                fontSize: 18,
                padding: "14px 28px",
                borderRadius: 24,
                boxShadow: "0 0 30px rgba(26, 115, 232, 0.8)",
                border: "2px solid #FFF",
                transform: `scale(${1 + Math.sin(frame * 0.2) * 0.05})`,
              }}
            >
              Manage your Google Account ➔
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
