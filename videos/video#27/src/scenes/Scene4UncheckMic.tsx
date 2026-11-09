import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const Scene4UncheckMic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Checkbox toggle state at frame 70
  const isUnchecked = frame >= 70;
  // Modal pop state from frame 95 to 170
  const showModal = frame >= 95 && frame <= 180;
  // Final disabled confirmation from frame 190
  const showDisabledBadge = frame >= 190;

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
          background: "rgba(239, 68, 68, 0.15)",
          border: "2px solid #EF4444",
          borderRadius: 24,
          padding: "10px 32px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            background: "#EF4444",
            color: "#FFF",
            fontWeight: 900,
            borderRadius: "50%",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2
        </div>
        <span style={{ color: "#FFF", fontWeight: 800, fontSize: 20, letterSpacing: 1.5 }}>
          STEP 2: UNCHECK & PAUSE MIC
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
          boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(239, 68, 68, 0.2)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          marginTop: 60,
        }}
      >
        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            background: "#1e293b",
            padding: "14px 20px",
            gap: 16,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ color: "#64748B", fontSize: 15, fontWeight: 700 }}>Personal info</div>
          <div
            style={{
              color: "#38BDF8",
              fontSize: 15,
              fontWeight: 800,
              borderBottom: "3px solid #38BDF8",
              paddingBottom: 4,
            }}
          >
            Data & privacy
          </div>
          <div style={{ color: "#64748B", fontSize: 15, fontWeight: 700 }}>Security</div>
        </div>

        {/* Content Body */}
        <div style={{ padding: 24 }}>
          <div style={{ color: "#94A3B8", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
            History settings
          </div>
          <div
            style={{
              background: "#1e293b",
              borderRadius: 16,
              padding: 20,
              marginBottom: 20,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#FFF", fontSize: 18, fontWeight: 800 }}>Web & App Activity</div>
              <span
                style={{
                  background: isUnchecked ? "rgba(74, 222, 128, 0.2)" : "rgba(245, 158, 11, 0.2)",
                  color: isUnchecked ? "#4ADE80" : "#F59E0B",
                  padding: "4px 10px",
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                {isUnchecked ? "Customized" : "On"}
              </span>
            </div>
            <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 6 }}>
              Saves your searches, voice recordings, and app activity.
            </div>
          </div>

          <div style={{ color: "#94A3B8", fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
            Subsettings
          </div>

          {/* Subsetting 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 16px",
              background: "#131c2e",
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: "#38BDF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontSize: 14,
                fontWeight: 900,
              }}
            >
              ✓
            </div>
            <div style={{ color: "#CBD5E1", fontSize: 14 }}>
              Include Chrome history and activity from sites
            </div>
          </div>

          {/* Subsetting 2: THE TARGET MIC CHECKBOX */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "16px 18px",
              background: isUnchecked ? "rgba(74, 222, 128, 0.12)" : "rgba(239, 68, 68, 0.2)",
              borderRadius: 16,
              border: isUnchecked ? "2px solid #4ADE80" : "2px solid #EF4444",
              boxShadow: isUnchecked
                ? "0 0 25px rgba(74, 222, 128, 0.3)"
                : "0 0 35px rgba(239, 68, 68, 0.5)",
              transform: `scale(${isUnchecked ? 1.0 : 1.03 + Math.sin(frame * 0.2) * 0.02})`,
              transition: "all 0.15s ease",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: isUnchecked ? "transparent" : "#EF4444",
                border: isUnchecked ? "2px solid #64748B" : "2px solid #EF4444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              {!isUnchecked && "✓"}
            </div>
            <div>
              <div
                style={{
                  color: isUnchecked ? "#4ADE80" : "#FFF",
                  fontSize: 16,
                  fontWeight: 900,
                  letterSpacing: 0.5,
                }}
              >
                Include voice and audio recordings
              </div>
              <div style={{ color: isUnchecked ? "#94A3B8" : "#FCA5A5", fontSize: 12, marginTop: 2 }}>
                {isUnchecked ? "Disabled • Safe from eavesdropping" : "⚠️ Allows background telemetry collection"}
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Pause Audio Recordings */}
        {showModal && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "flex-end",
              padding: 20,
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#1e293b",
                borderRadius: 24,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 -20px 40px rgba(0,0,0,0.8)",
              }}
            >
              <div style={{ color: "#FFF", fontSize: 20, fontWeight: 900, marginBottom: 8 }}>
                Pause voice and audio recordings?
              </div>
              <div style={{ color: "#94A3B8", fontSize: 13, lineHeight: 1.5, marginBottom: 20 }}>
                This stops Google from saving audio recordings from Assistant, Maps, and Search.
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                <div style={{ color: "#94A3B8", padding: "10px 16px", fontWeight: 700 }}>Cancel</div>
                <div
                  style={{
                    background: "#38BDF8",
                    color: "#000",
                    fontWeight: 900,
                    padding: "10px 24px",
                    borderRadius: 16,
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                  }}
                >
                  Pause
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final Verified Shield Overlay */}
        {showDisabledBadge && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(5, 8, 17, 0.92)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "rgba(74, 222, 128, 0.2)",
                border: "3px solid #4ADE80",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 54,
                boxShadow: "0 0 40px rgba(74, 222, 128, 0.6)",
              }}
            >
              🛡️
            </div>
            <div style={{ color: "#FFF", fontSize: 26, fontWeight: 900 }}>
              SURVEILLANCE DISABLED
            </div>
            <div style={{ color: "#4ADE80", fontSize: 16, fontWeight: 800 }}>
              ✓ Ambient Audio Telemetry Paused
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
