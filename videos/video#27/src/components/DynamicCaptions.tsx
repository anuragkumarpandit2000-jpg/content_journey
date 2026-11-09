import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { CAPTIONS, CaptionWord } from "../data/timelineData";

export const DynamicCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // In the first 10 seconds (Scene 1: frames 0 to 285), dedicated kinetic hook typography handles the visuals
  if (frame < 285) {
    return null;
  }

  // Find active words in a sliding window (show current word + 2 previous + 1 next for natural reading flow)
  const activeWordIndex = CAPTIONS.findIndex(
    (c) => frame >= c.startFrame && frame <= c.endFrame
  );

  // If no word is currently active, find the closest upcoming or recent word
  let displayIndex = activeWordIndex;
  if (displayIndex === -1) {
    displayIndex = CAPTIONS.findIndex((c) => c.startFrame > frame);
    if (displayIndex === -1) displayIndex = CAPTIONS.length - 1;
    else displayIndex = Math.max(0, displayIndex - 1);
  }

  // 3-word phrase window centered on active word
  const startIndex = Math.max(0, displayIndex - 1);
  const endIndex = Math.min(CAPTIONS.length, displayIndex + 2);
  const currentWords = CAPTIONS.slice(startIndex, endIndex);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 220,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {/* Clean Floating Kinetic Typography - No Clunky Container Box */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          maxWidth: "88%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {currentWords.map((word, idx) => {
          const isCurrent = frame >= word.startFrame && frame <= word.endFrame;
          const wordAge = frame - word.startFrame;

          // Smooth spring scale pop when word becomes active
          const popSpring = isCurrent
            ? spring({
                fps,
                frame: wordAge,
                config: { damping: 12, mass: 0.5, stiffness: 180 },
              })
            : 1;

          const scale = isCurrent ? interpolate(popSpring, [0, 1], [0.85, 1.15]) : 0.95;
          const opacity = isCurrent ? 1 : 0.45;
          const highlightColor = word.color || "#FACC15";

          return (
            <span
              key={`${word.text}_${word.startFrame}_${idx}`}
              style={{
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: word.highlight ? 52 : 44,
                fontWeight: 900,
                color: isCurrent ? (word.highlight ? highlightColor : "#FFFFFF") : "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: "2px",
                transform: `scale(${scale})`,
                opacity,
                transition: "color 0.12s ease",
                textShadow:
                  isCurrent && word.highlight
                    ? `0 0 30px ${highlightColor}AA, 0 4px 18px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)`
                    : "0 4px 18px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
                display: "inline-block",
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
