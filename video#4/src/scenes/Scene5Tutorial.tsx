import React from 'react';
import {
  interpolate,
  OffthreadVideo,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const Scene5Tutorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene duration: 505 frames (frame 835 to 1340 in master reel)
  // 6 Verified Synchronized Steps:
  // Step 1 (frame 0 - 68): Home screen -> Settings Icon at (84, 857)
  // Step 2 (frame 68 - 135): Settings menu -> Connection & sharing at y=852
  // Step 3 (frame 135 - 246): Connection menu -> Private DNS at y=762
  // Step 4 (frame 246 - 335): Private DNS menu -> Designated private DNS at y=435, radio at (522, 434)
  // Step 5 (frame 335 - 455): Modal -> Hostname input at y=755, paste family.cloudflare-dns.com
  // Step 6 (frame 455 - 505): Modal checkmark save at (527, 571) -> Connected status

  let activeStep = 'STEP 01';
  let stepTitle = 'Open Phone Settings';
  let stepColor = '#FACC15'; // Vibrant Gold
  let stepIcon = '⚙️';
  let stepNumber = 1;

  if (frame < 68) {
    activeStep = 'STEP 01';
    stepTitle = 'Open Phone Settings';
    stepColor = '#FACC15';
    stepIcon = '⚙️';
    stepNumber = 1;
  } else if (frame < 135) {
    activeStep = 'STEP 02';
    stepTitle = 'Tap Connection & Sharing';
    stepColor = '#38BDF8'; // Electric Cyan
    stepIcon = '🔗';
    stepNumber = 2;
  } else if (frame < 246) {
    activeStep = 'STEP 03';
    stepTitle = 'Select Private DNS';
    stepColor = '#A855F7'; // Neon Purple
    stepIcon = '🛡️';
    stepNumber = 3;
  } else if (frame < 335) {
    activeStep = 'STEP 04';
    stepTitle = 'Choose Designated DNS';
    stepColor = '#EC4899'; // Vibrant Pink
    stepIcon = '🔘';
    stepNumber = 4;
  } else if (frame < 455) {
    activeStep = 'STEP 05';
    stepTitle = 'Paste DNS Hostname';
    stepColor = '#06B6D4'; // Bright Cyan
    stepIcon = '⌨️';
    stepNumber = 5;
  } else {
    activeStep = 'STEP 06';
    stepTitle = 'Save & Connect Protection';
    stepColor = '#10B981'; // Emerald Green
    stepIcon = '✓';
    stepNumber = 6;
  }

  // Blinking / Pulsing rhythm calculations
  const pulseScale = interpolate(Math.sin(frame * 0.35), [-1, 1], [0.96, 1.05]);
  const rippleScale = interpolate((frame * 0.08) % 1, [0, 1], [1, 1.8]);
  const rippleOpacity = interpolate((frame * 0.08) % 1, [0, 0.8, 1], [0.8, 0.3, 0]);
  const tapOffset = interpolate(Math.sin(frame * 0.4), [-1, 1], [0, -14]);

  // Hostname typewriter calculation
  const fullHostname = 'family.cloudflare-dns.com';
  const typeProgress = interpolate(frame, [345, 420], [0, fullHostname.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const typedString = fullHostname.slice(0, Math.floor(typeProgress));

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#070A11',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${stepColor}22 0%, transparent 70%)`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Top Fixed Step Header Banner */}
      <div
        style={{
          position: 'absolute',
          top: 50,
          zIndex: 35,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          width: '92%',
          maxWidth: 960,
          backgroundColor: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(20px)',
          padding: '16px 28px',
          borderRadius: 24,
          border: `1.5px solid ${stepColor}55`,
          boxShadow: `0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px ${stepColor}33`,
        }}
      >
        {/* Step dots & Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 18px',
              borderRadius: 999,
              backgroundColor: stepColor,
              color: '#070A11',
              fontSize: 17,
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            <span>{stepIcon}</span>
            <span>{activeStep}</span>
          </div>

          {/* 6 Step Progress Dots */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  width: i === stepNumber ? 24 : 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor:
                    i === stepNumber ? stepColor : i < stepNumber ? '#10B981' : '#334155',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 34,
            fontWeight: 900,
            color: '#FFFFFF',
            textAlign: 'center',
            letterSpacing: '-0.01em',
          }}
        >
          {stepTitle}
        </div>
      </div>

      {/* Phone Mockup Canvas (Exact 576 x 1296 Resolution = 1:1 Pixel Mapping) */}
      <div
        style={{
          position: 'absolute',
          top: 195,
          left: 242, // (1080 - 596) / 2 = 242 for perfect horizontal center
          width: 576,
          height: 1296,
          borderRadius: 44,
          border: '10px solid #1E293B',
          boxShadow:
            '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 0 2px rgba(255, 255, 255, 0.12)',
          overflow: 'hidden',
          backgroundColor: '#000000',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 576,
            height: 1296,
            position: 'relative',
          }}
        >
          {/* Synchronized Screen Recording Video */}
          <OffthreadVideo
            src={staticFile('mobile_synced.mp4')}
            volume={0}
            style={{
              width: 576,
              height: 1296,
              objectFit: 'fill',
            }}
          />

          {/* STEP 01 OVERLAY: Settings Icon on Home Screen (frame < 68) */}
          {frame < 68 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Radar Expanding Ring */}
              <div
                style={{
                  position: 'absolute',
                  top: 857 - 52,
                  left: 84 - 52,
                  width: 104,
                  height: 104,
                  borderRadius: '50%',
                  border: '3px solid #FACC15',
                  transform: `scale(${rippleScale})`,
                  opacity: rippleOpacity,
                  pointerEvents: 'none',
                }}
              />
              {/* Main Glowing Target Circle */}
              <div
                style={{
                  position: 'absolute',
                  top: 857 - 48,
                  left: 84 - 48,
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  border: '4px solid #FACC15',
                  boxShadow:
                    '0 0 25px rgba(250, 204, 21, 0.95), inset 0 0 15px rgba(250, 204, 21, 0.45)',
                  transform: `scale(${pulseScale})`,
                  pointerEvents: 'none',
                }}
              />
              {/* Floating Step Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 760,
                  left: 20,
                  padding: '6px 14px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid #FACC15',
                  color: '#FACC15',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 900,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>⚙️</span>
                <span>OPEN SETTINGS</span>
              </div>
              {/* Animated Finger Pointer */}
              <div
                style={{
                  position: 'absolute',
                  top: 857 - 10,
                  left: 84 + 18,
                  fontSize: 54,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.9))',
                  transform: `translateY(${tapOffset}px)`,
                  pointerEvents: 'none',
                }}
              >
                👆
              </div>
            </div>
          )}

          {/* STEP 02 OVERLAY: Connection & Sharing Menu Row (frame >= 68 && frame < 135) */}
          {frame >= 68 && frame < 135 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Glowing Highlight Box */}
              <div
                style={{
                  position: 'absolute',
                  top: 818,
                  left: 24,
                  width: 528,
                  height: 70,
                  borderRadius: 18,
                  border: '3.5px solid #38BDF8',
                  boxShadow:
                    '0 0 30px rgba(56, 189, 248, 0.85), inset 0 0 15px rgba(56, 189, 248, 0.3)',
                  transform: `scale(${pulseScale})`,
                  pointerEvents: 'none',
                }}
              />
              {/* Circular Target on the Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: 825,
                  left: 45,
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  border: '2.5px solid #38BDF8',
                  transform: `scale(${rippleScale})`,
                  opacity: rippleOpacity,
                  pointerEvents: 'none',
                }}
              />
              {/* Floating Step Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 765,
                  left: 24,
                  padding: '6px 16px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid #38BDF8',
                  color: '#38BDF8',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 900,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>🔗</span>
                <span>CONNECTION & SHARING</span>
              </div>
              {/* Animated Finger Pointer */}
              <div
                style={{
                  position: 'absolute',
                  top: 835,
                  left: 430,
                  fontSize: 54,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.9))',
                  transform: `translateY(${tapOffset}px)`,
                  pointerEvents: 'none',
                }}
              >
                👆
              </div>
            </div>
          )}

          {/* STEP 03 OVERLAY: Private DNS Menu Row (frame >= 135 && frame < 246) */}
          {frame >= 135 && frame < 246 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Glowing Highlight Box */}
              <div
                style={{
                  position: 'absolute',
                  top: 735,
                  left: 24,
                  width: 528,
                  height: 66,
                  borderRadius: 18,
                  border: '3.5px solid #A855F7',
                  boxShadow:
                    '0 0 30px rgba(168, 85, 247, 0.85), inset 0 0 15px rgba(168, 85, 247, 0.3)',
                  transform: `scale(${pulseScale})`,
                  pointerEvents: 'none',
                }}
              />
              {/* Radar expanding ring on text */}
              <div
                style={{
                  position: 'absolute',
                  top: 735,
                  left: 24,
                  width: 528,
                  height: 66,
                  borderRadius: 18,
                  border: '2px solid #A855F7',
                  transform: `scale(${rippleScale})`,
                  opacity: rippleOpacity,
                  pointerEvents: 'none',
                }}
              />
              {/* Floating Step Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 680,
                  left: 24,
                  padding: '6px 16px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid #A855F7',
                  color: '#C084FC',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 900,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>🛡️</span>
                <span>SELECT PRIVATE DNS</span>
              </div>
              {/* Animated Finger Pointer */}
              <div
                style={{
                  position: 'absolute',
                  top: 745,
                  left: 380,
                  fontSize: 54,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.9))',
                  transform: `translateY(${tapOffset}px)`,
                  pointerEvents: 'none',
                }}
              >
                👆
              </div>
            </div>
          )}

          {/* STEP 04 OVERLAY: Designated Private DNS Radio Button (frame >= 246 && frame < 335) */}
          {frame >= 246 && frame < 335 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Full Row Highlight Box */}
              <div
                style={{
                  position: 'absolute',
                  top: 408,
                  left: 24,
                  width: 528,
                  height: 80,
                  borderRadius: 18,
                  border: '3.5px solid #EC4899',
                  boxShadow:
                    '0 0 30px rgba(236, 72, 153, 0.85), inset 0 0 15px rgba(236, 72, 153, 0.3)',
                  pointerEvents: 'none',
                }}
              />
              {/* Radar Circle on the Radio Button Dot */}
              <div
                style={{
                  position: 'absolute',
                  top: 434 - 30,
                  left: 522 - 30,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  border: '3px solid #EC4899',
                  transform: `scale(${rippleScale})`,
                  opacity: rippleOpacity,
                  pointerEvents: 'none',
                }}
              />
              {/* Target Circle on Radio Button */}
              <div
                style={{
                  position: 'absolute',
                  top: 434 - 24,
                  left: 522 - 24,
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '3.5px solid #F472B6',
                  boxShadow: '0 0 20px rgba(236, 72, 153, 1)',
                  transform: `scale(${pulseScale})`,
                  pointerEvents: 'none',
                }}
              />
              {/* Floating Step Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 355,
                  left: 24,
                  padding: '6px 16px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid #EC4899',
                  color: '#F472B6',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 900,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>🔘</span>
                <span>DESIGNATED PRIVATE DNS</span>
              </div>
              {/* Animated Finger Pointer */}
              <div
                style={{
                  position: 'absolute',
                  top: 425,
                  left: 450,
                  fontSize: 54,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.9))',
                  transform: `translateY(${tapOffset}px)`,
                  pointerEvents: 'none',
                }}
              >
                👆
              </div>
            </div>
          )}

          {/* STEP 05 OVERLAY: Input Box Highlight (frame >= 335 && frame < 455) */}
          {frame >= 335 && frame < 455 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Hostname Input Box Highlight */}
              <div
                style={{
                  position: 'absolute',
                  top: 728,
                  left: 24,
                  width: 528,
                  height: 64,
                  borderRadius: 14,
                  border: '3.5px solid #06B6D4',
                  boxShadow:
                    '0 0 30px rgba(6, 182, 212, 0.85), inset 0 0 15px rgba(6, 182, 212, 0.3)',
                  transform: `scale(${pulseScale})`,
                  pointerEvents: 'none',
                }}
              />
              {/* Floating Step Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 672,
                  left: 24,
                  padding: '6px 16px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid #06B6D4',
                  color: '#38BDF8',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 900,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>⌨️</span>
                <span>ENTER HOSTNAME HERE</span>
              </div>
            </div>
          )}

          {/* STEP 06 OVERLAY: Save Checkmark Tap & Connected (frame >= 455) */}
          {frame >= 455 && frame < 480 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Radar Circle on Checkmark */}
              <div
                style={{
                  position: 'absolute',
                  top: 571 - 32,
                  left: 527 - 32,
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  border: '3px solid #10B981',
                  transform: `scale(${rippleScale})`,
                  opacity: rippleOpacity,
                  pointerEvents: 'none',
                }}
              />
              {/* Target Circle on Checkmark Button */}
              <div
                style={{
                  position: 'absolute',
                  top: 571 - 25,
                  left: 527 - 25,
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  border: '3.5px solid #10B981',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 1)',
                  transform: `scale(${pulseScale})`,
                  pointerEvents: 'none',
                }}
              />
              {/* Floating Save Label */}
              <div
                style={{
                  position: 'absolute',
                  top: 510,
                  left: 360,
                  padding: '6px 16px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid #10B981',
                  color: '#34D399',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 900,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>✓</span>
                <span>TAP SAVE</span>
              </div>
              {/* Animated Finger Pointer */}
              <div
                style={{
                  position: 'absolute',
                  top: 565,
                  left: 450,
                  fontSize: 54,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.9))',
                  transform: `translateY(${tapOffset}px)`,
                  pointerEvents: 'none',
                }}
              >
                👆
              </div>
            </div>
          )}

          {/* STEP 06 COMPLETED: Status Highlight (frame >= 480) */}
          {frame >= 480 && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: 576, height: 1296 }}>
              {/* Green Target on Connected Option */}
              <div
                style={{
                  position: 'absolute',
                  top: 408,
                  left: 24,
                  width: 528,
                  height: 80,
                  borderRadius: 18,
                  border: '3.5px solid #10B981',
                  boxShadow: '0 0 35px rgba(16, 185, 129, 0.9)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 434 - 24,
                  left: 522 - 24,
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '3.5px solid #10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Prominent Code Box Overlay for DNS Hostname (frames 335 - 480) */}
      {frame >= 335 && frame < 480 && (
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            zIndex: 40,
            width: '92%',
            maxWidth: 960,
            padding: '24px 30px',
            borderRadius: 26,
            backgroundColor: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(16px)',
            border: '3px solid #06B6D4',
            boxShadow:
              '0 25px 60px rgba(6, 182, 212, 0.45), 0 0 35px rgba(6, 182, 212, 0.3)',
            transform: `scale(${spring({ frame: frame - 335, fps, config: { damping: 12 } })})`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: '#38BDF8',
                fontSize: 19,
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span>🌐</span> PRIVATE DNS HOSTNAME
            </div>
            <div
              style={{
                padding: '6px 18px',
                borderRadius: 8,
                backgroundColor: '#06B6D4',
                color: '#070A11',
                fontSize: 15,
                fontWeight: 900,
                letterSpacing: '0.05em',
              }}
            >
              TYPE OR PASTE EXACTLY
            </div>
          </div>

          {/* Typing Hostname Code Display */}
          <div
            style={{
              backgroundColor: '#020617',
              borderRadius: 16,
              padding: '18px 24px',
              border: '1.5px solid #1E293B',
              fontFamily: '"JetBrains Mono", monospace, Courier',
              fontSize: 34,
              fontWeight: 800,
              color: '#38BDF8',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.6)',
              overflow: 'hidden',
            }}
          >
            <span>{typedString}</span>
            <span
              style={{
                display: 'inline-block',
                width: 14,
                height: 36,
                backgroundColor: '#38BDF8',
                marginLeft: 4,
                opacity: frame % 10 < 5 ? 1 : 0,
              }}
            />
          </div>

          <div
            style={{
              fontSize: 17,
              color: '#94A3B8',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Cloudflare Family Safe DNS — Adult Content Blocked
          </div>
        </div>
      )}

      {/* Connected Confirmation Badge (frames 480+) */}
      {frame >= 480 && (
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            zIndex: 40,
            padding: '20px 40px',
            borderRadius: 999,
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: '0.08em',
            boxShadow: '0 20px 50px rgba(16, 185, 129, 0.6)',
            transform: `scale(${spring({ frame: frame - 480, fps })})`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span>✓</span> CONNECTED & PROTECTED!
        </div>
      )}
    </div>
  );
};
