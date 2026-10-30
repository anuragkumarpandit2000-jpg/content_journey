import React from 'react';
import {
  Audio,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { DynamicBackground } from '../components/DynamicBackground';
// import { ThreeBackground } from '../components/ThreeBackground';
import { FilmGrain } from '../components/FilmGrain';

export const GeminiVoiceRoute: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sec = frame / fps;

  // Key animation sections
  // Section 1: 0 - 2.2s (frames 0 - 66)
  // Section 2: 2.2 - 5.8s (frames 66 - 174)
  // Section 3: 5.8 - 8.2s (frames 174 - 246)
  // Section 4: 8.2 - 10.5s (frames 246 - 315)

  let activeTheme = 'INTRO_CYBER';
  if (sec >= 2.2 && sec < 5.8) activeTheme = 'CYBER_SECURITY';
  else if (sec >= 5.8 && sec < 8.2) activeTheme = 'GOLD_MONETIZATION';
  else if (sec >= 8.2) activeTheme = 'CRAZY_SPEED_PURPLE';

  // Section 1 Springs
  const s1Spring = spring({ frame, fps, config: { damping: 12, stiffness: 220 } });
  
  // Section 2 Springs
  const s2Spring = spring({ frame: frame - 66, fps, config: { damping: 12, stiffness: 220 } });
  
  // Section 3 Springs
  const s3Spring = spring({ frame: frame - 174, fps, config: { damping: 12, stiffness: 220 } });
  
  // Section 4 Springs
  const s4Spring = spring({ frame: frame - 246, fps, config: { damping: 12, stiffness: 240 } });

  // Camera subtle breathing & beat shake
  const shake = Math.sin(frame * 0.8) * (frame % 66 < 8 ? 6 : 1);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#030712',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Master Audio: Gemini 3.8 Flash TTS */}
      <Audio src={staticFile('gemini_audio.mp3')} volume={1.0} />

      {/* 2. Synchronized SFX */}
      <Sequence from={0} durationInFrames={35}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.4} />
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.45} />
      </Sequence>
      <Sequence from={66} durationInFrames={35}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.35} />
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.3} />
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={174} durationInFrames={35}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.3} />
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={246} durationInFrames={40}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.35} />
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.5} />
      </Sequence>

      {/* 3. Dynamic Background and Visualizer */}
      <DynamicBackground theme={activeTheme} />
      {/* <ThreeBackground theme={activeTheme} intensity={0.9} /> */}

      {/* 4. Cyber HUD Top Bar */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 60,
          right: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 16px #10B981',
              animation: 'pulse 1s infinite',
            }}
          />
          <span
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            GEMINI 3.8 FLASH TTS
          </span>
        </div>
        <div
          style={{
            padding: '6px 16px',
            borderRadius: 999,
            background: 'rgba(14, 165, 233, 0.15)',
            border: '1px solid rgba(14, 165, 233, 0.4)',
            color: '#38BDF8',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '0.08em',
          }}
        >
          24kHz PCM • NATIVE
        </div>
      </div>

      {/* 5. Main Kinetic Visual Cards */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${shake}px, 0)`,
          width: '92%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 45,
          textAlign: 'center',
        }}
      >
        {/* CARD 1: 0 - 2.2s */}
        {sec < 2.2 && (
          <div
            style={{
              transform: `scale(${interpolate(s1Spring, [0, 1], [0.85, 1])})`,
              opacity: interpolate(frame, [0, 10, 58, 66], [0, 1, 1, 0]),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                padding: '8px 24px',
                borderRadius: 999,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#38BDF8',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ⚡ DIRECT AUDIO SYNTHESIS
            </div>

            <h1
              style={{
                fontSize: 104,
                fontWeight: 900,
                lineHeight: 1.05,
                margin: 0,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                textShadow: '0 0 40px rgba(56, 189, 248, 0.6)',
              }}
            >
              ARRE BHAI, <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SUNO!
              </span>
            </h1>

            <div
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: 32,
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              Official Google Gemini Voice Engine
            </div>
          </div>
        )}

        {/* CARD 2: 2.2 - 5.8s */}
        {sec >= 2.2 && sec < 5.8 && (
          <div
            style={{
              transform: `scale(${interpolate(s2Spring, [0, 1], [0.85, 1])})`,
              opacity: interpolate(frame, [66, 76, 166, 174], [0, 1, 1, 0]),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <div
              style={{
                padding: '8px 24px',
                borderRadius: 999,
                background: 'rgba(168, 85, 247, 0.15)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                color: '#C084FC',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              🔥 100% NATIVE API INFERENCE
            </div>

            <h1
              style={{
                fontSize: 88,
                fontWeight: 900,
                lineHeight: 1.1,
                margin: 0,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              ZERO THIRD-PARTY <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 50px rgba(168, 85, 247, 0.6)',
                }}
              >
                DIRECT GEMINI AI
              </span>
            </h1>

            <div
              style={{
                padding: '16px 36px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 20,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#E2E8F0',
                fontSize: 34,
                fontWeight: 600,
              }}
            >
              Model: <span style={{ color: '#38BDF8' }}>gemini-3.8-flash-tts</span>
            </div>
          </div>
        )}

        {/* CARD 3: 5.8 - 8.2s */}
        {sec >= 5.8 && sec < 8.2 && (
          <div
            style={{
              transform: `scale(${interpolate(s3Spring, [0, 1], [0.85, 1])})`,
              opacity: interpolate(frame, [174, 184, 238, 246], [0, 1, 1, 0]),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <div
              style={{
                padding: '8px 24px',
                borderRadius: 999,
                background: 'rgba(234, 179, 8, 0.15)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(234, 179, 8, 0.5)',
                color: '#FACC15',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              🎙️ NATURAL SPEECH CADENCE
            </div>

            <h1
              style={{
                fontSize: 92,
                fontWeight: 900,
                lineHeight: 1.1,
                margin: 0,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              PURE NATURAL <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #FACC15, #FB923C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 50px rgba(250, 204, 21, 0.6)',
                }}
              >
                HINGLISH ACCENT
              </span>
            </h1>

            {/* Audio Waveform Equalizer Bars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                height: 80,
                marginTop: 10,
              }}
            >
              {[35, 65, 95, 45, 80, 100, 60, 90, 40, 75, 95, 55, 85, 30].map(
                (h, i) => {
                  const animH =
                    h * (0.6 + 0.4 * Math.sin(frame * 0.4 + i * 0.8));
                  return (
                    <div
                      key={i}
                      style={{
                        width: 12,
                        height: animH,
                        borderRadius: 6,
                        background: 'linear-gradient(to top, #EAB308, #38BDF8)',
                        boxShadow: '0 0 12px rgba(234, 179, 8, 0.5)',
                      }}
                    />
                  );
                }
              )}
            </div>

            <div
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 32,
                fontWeight: 500,
              }}
            >
              Dynamic Intonation & Realistic Emotion
            </div>
          </div>
        )}

        {/* CARD 4: 8.2 - 10.5s */}
        {sec >= 8.2 && (
          <div
            style={{
              transform: `scale(${interpolate(s4Spring, [0, 1], [0.85, 1])})`,
              opacity: interpolate(frame, [246, 256, 308, 315], [0, 1, 1, 0.9]),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 22,
            }}
          >
            <div
              style={{
                padding: '8px 24px',
                borderRadius: 999,
                background: 'rgba(56, 189, 248, 0.15)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(56, 189, 248, 0.5)',
                color: '#38BDF8',
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              🚀 ULTRA LOW LATENCY
            </div>

            <h1
              style={{
                fontSize: 98,
                fontWeight: 900,
                lineHeight: 1.08,
                margin: 0,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
              }}
            >
              ZERO ROBOTIC <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8, #4ADE80)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 50px rgba(56, 189, 248, 0.6)',
                }}
              >
                DELAY!
              </span>
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 32px',
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <span
                style={{
                  color: '#4ADE80',
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                @CONSOLE.A1
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 28 }}>
                |
              </span>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                AI Factory Ready
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 6. Bottom Audio Progress Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 110,
          left: 60,
          right: 60,
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          zIndex: 50,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${(frame / 315) * 100}%`,
            background: 'linear-gradient(90deg, #38BDF8, #818CF8, #FACC15)',
            boxShadow: '0 0 16px rgba(56, 189, 248, 0.8)',
          }}
        />
      </div>

      {/* 7. Subtle Film Grain & Glow Texture */}
      <FilmGrain />
    </div>
  );
};
