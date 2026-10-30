import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CameraRigProps {
  children: React.ReactNode;
  activePhraseStartFrame?: number;
  isBassHit?: boolean;
}

export const CameraRig: React.FC<CameraRigProps> = ({
  children,
  activePhraseStartFrame = 0,
  isBassHit = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Continuous organic cinematic breathing motion
  const breathZoom = interpolate(
    Math.sin(frame * 0.04),
    [-1, 1],
    [1.0, 1.025]
  );
  const breathTilt = interpolate(
    Math.cos(frame * 0.03),
    [-1, 1],
    [-0.35, 0.35]
  );

  // 2. Phrase Impact Punch (snappy zoom on word phrase start)
  const framesSincePhrase = Math.max(0, frame - activePhraseStartFrame);
  const punchSpring = spring({
    frame: framesSincePhrase,
    fps,
    config: { damping: 12, mass: 0.6, stiffness: 180 },
  });
  const punchScale = interpolate(punchSpring, [0, 1], [1.045, 1.0]);

  // 3. Bass Hit Shockwave Shake
  const shakeX = isBassHit ? Math.sin(frame * 2.5) * 8 : 0;
  const shakeY = isBassHit ? Math.cos(frame * 3.0) * 8 : 0;

  const totalScale = breathZoom * punchScale;
  const totalRotate = breathTilt;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transformOrigin: 'center center',
        transform: `scale(${totalScale}) rotate(${totalRotate}deg) translate(${shakeX}px, ${shakeY}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
