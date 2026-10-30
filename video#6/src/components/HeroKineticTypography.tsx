import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { MASTER_PHRASES, PhraseItem, WordDetail } from '../data/typographyData';

export const HeroKineticTypography: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  // 1. Locate active phrase with graceful holdover
  const activePhraseIndex = MASTER_PHRASES.findIndex((p, idx) => {
    const nextPhrase = MASTER_PHRASES[idx + 1];
    const holdEnd = nextPhrase
      ? Math.min(p.endSec + 0.35, nextPhrase.startSec)
      : p.endSec + 0.5;
    return currentSec >= p.startSec && currentSec <= holdEnd;
  });

  const activePhrase =
    activePhraseIndex !== -1
      ? MASTER_PHRASES[activePhraseIndex]
      : MASTER_PHRASES.find(
          (p) => currentSec >= p.startSec - 0.15 && currentSec <= p.endSec + 0.45
        ) || null;

  if (!activePhrase) return null;

  const phraseStartFrame = activePhrase.startSec * fps;
  const timeIntoPhrase = Math.max(0, currentSec - activePhrase.startSec);

  // Phrase entrance spring
  const containerSpring = spring({
    frame: frame - phraseStartFrame,
    fps,
    config: { damping: 12, mass: 0.55, stiffness: 200 },
  });

  // Filter to words that have started so far, or show all with progressive appearance
  const visibleWords = activePhrase.words;
  const wordCount = visibleWords.length;

  // Dynamic font size calculation based on word count
  const baseFontSize =
    wordCount <= 2 ? 115 : wordCount <= 4 ? 82 : wordCount <= 6 ? 64 : 52;

  // Subtle tilt for high-tension themes
  const containerRotate =
    activePhrase.theme === 'RED_ALERT'
      ? -2.5
      : activePhrase.theme === 'CRAZY_SPEED_PURPLE'
      ? 2.0
      : 0;

  return (
    <div
      style={{
        position: 'absolute',
        top: '42%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${interpolate(
          containerSpring,
          [0, 1],
          [0.88, 1.0]
        )}) rotate(${containerRotate}deg)`,
        width: '94%',
        maxWidth: 1040,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 40,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      {/* Category Tag Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '6px 20px',
          marginBottom: 24,
          borderRadius: 999,
          backgroundColor:
            activePhrase.theme === 'RED_ALERT'
              ? 'rgba(239, 68, 68, 0.22)'
              : activePhrase.theme === 'LUXURY_GOLD_CTA'
              ? 'rgba(250, 204, 21, 0.2)'
              : 'rgba(56, 189, 248, 0.16)',
          backdropFilter: 'blur(16px)',
          border:
            activePhrase.theme === 'RED_ALERT'
              ? '1.5px solid rgba(239, 68, 68, 0.5)'
              : activePhrase.theme === 'LUXURY_GOLD_CTA'
              ? '1.5px solid rgba(250, 204, 21, 0.5)'
              : '1.5px solid rgba(56, 189, 248, 0.45)',
          fontFamily: "'Courier New', monospace",
          fontSize: 16,
          fontWeight: 900,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color:
            activePhrase.theme === 'RED_ALERT'
              ? '#EF4444'
              : activePhrase.theme === 'LUXURY_GOLD_CTA'
              ? '#FACC15'
              : activePhrase.theme === 'EQUAL_BALANCE_GREEN'
              ? '#10B981'
              : '#38BDF8',
          boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
        }}
      >
        <span>⚡</span>
        <span>
          {activePhrase.theme === 'RED_ALERT'
            ? 'STORAGE OVERFLOW WARNING'
            : activePhrase.theme === 'LUXURY_GOLD_CTA'
            ? 'EXCLUSIVE PC HACK'
            : activePhrase.theme === 'EDITORIAL_BW'
            ? 'PARTITION PRINCIPLE'
            : activePhrase.theme === 'FOOD_PLATE_AMBER'
            ? 'REAL WORLD ANALOGY'
            : 'PC PERFORMANCE BOOST'}
        </span>
        <span>⚡</span>
      </div>

      {/* Kinetic Word Cluster (No awkward static box!) */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: wordCount <= 2 ? '20px 28px' : '14px 20px',
          maxWidth: '100%',
          textAlign: 'center',
          perspective: 1000,
        }}
      >
        {visibleWords.map((wordItem, idx) => {
          const wordStartFrame = wordItem.startSec * fps;
          const wordEndFrame = wordItem.endSec * fps;

          const hasStarted = frame >= wordStartFrame;
          const isCurrentlyActive =
            frame >= wordStartFrame && frame < wordEndFrame;

          // Word entrance spring
          const wordSpring = spring({
            frame: Math.max(0, frame - wordStartFrame),
            fps,
            config: { damping: 9, mass: 0.45, stiffness: 240 },
          });

          // Kinetic Transforms
          const scale = !hasStarted
            ? 0.65
            : isCurrentlyActive
            ? interpolate(wordSpring, [0, 1], [0.8, 1.22])
            : 1.0;

          const rotateX = !hasStarted
            ? 40
            : isCurrentlyActive
            ? interpolate(wordSpring, [0, 1], [25, 0])
            : 0;

          const translateY = !hasStarted
            ? 35
            : interpolate(wordSpring, [0, 1], [25, 0]);

          const opacity = !hasStarted ? 0.0 : isCurrentlyActive ? 1.0 : 0.72;

          // Glitch RGB offset when active on heavy words
          const isGlitchy =
            isCurrentlyActive &&
            (wordItem.style === 'red_danger' || wordItem.style === 'cyan_neon');

          // Text Shadows & Glow
          const textShadow = isGlitchy
            ? '-4px 0 #00ffff, 4px 0 #ff0055, 0 0 45px rgba(255, 255, 255, 0.9)'
            : isCurrentlyActive
            ? wordItem.style === 'red_danger'
              ? '0 0 45px rgba(239, 68, 68, 1.0), 0 0 90px rgba(220, 38, 38, 0.7)'
              : wordItem.style === 'cyan_neon'
              ? '0 0 40px rgba(56, 189, 248, 1.0), 0 0 80px rgba(14, 165, 233, 0.6)'
              : wordItem.style === 'gold_luxury'
              ? '0 0 40px rgba(250, 204, 21, 1.0), 0 0 80px rgba(217, 119, 6, 0.6)'
              : wordItem.style === 'green_emerald'
              ? '0 0 40px rgba(16, 185, 129, 1.0)'
              : '0 0 30px rgba(255, 255, 255, 0.8)'
            : '0 4px 15px rgba(0, 0, 0, 0.8)';

          // Color & Gradients
          let color = '#FFFFFF';
          let backgroundGradient: string | undefined = undefined;

          if (wordItem.style === 'red_danger') {
            color = '#EF4444';
          } else if (wordItem.style === 'cyan_neon') {
            backgroundGradient =
              'linear-gradient(135deg, #FFFFFF 0%, #38BDF8 55%, #0284C7 100%)';
          } else if (wordItem.style === 'gold_luxury') {
            backgroundGradient =
              'linear-gradient(135deg, #FFFBEB 0%, #FBBF24 50%, #B45309 100%)';
          } else if (wordItem.style === 'green_emerald') {
            backgroundGradient =
              'linear-gradient(135deg, #ECFDF5 0%, #10B981 50%, #047857 100%)';
          } else if (wordItem.style === 'purple_violet') {
            backgroundGradient =
              'linear-gradient(135deg, #FAF5FF 0%, #C084FC 50%, #7E22CE 100%)';
          }

          const fontSize = wordItem.isHero
            ? Math.round(baseFontSize * 1.18)
            : baseFontSize;

          return (
            <div
              key={`${wordItem.word}-${wordStartFrame}-${idx}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `scale(${scale}) translateY(${translateY}px) perspective(900px) rotateX(${rotateX}deg)`,
                opacity,
                transition: 'opacity 0.12s ease',
                willChange: 'transform, opacity',
              }}
            >
              <span
                style={{
                  fontFamily:
                    wordItem.style === 'italic_serif'
                      ? "'Playfair Display', Georgia, serif"
                      : "'Montserrat', -apple-system, sans-serif",
                  fontStyle:
                    wordItem.style === 'italic_serif' ? 'italic' : 'normal',
                  fontSize,
                  fontWeight: 900,
                  textTransform:
                    wordItem.style === 'italic_serif' ? 'none' : 'uppercase',
                  letterSpacing:
                    wordItem.style === 'italic_serif' ? '0.02em' : '-0.04em',
                  color: backgroundGradient ? 'transparent' : color,
                  backgroundImage: backgroundGradient,
                  WebkitBackgroundClip: backgroundGradient ? 'text' : undefined,
                  textShadow,
                  padding: isCurrentlyActive ? '4px 12px' : '2px 4px',
                  borderRadius: 16,
                  backgroundColor: isCurrentlyActive
                    ? wordItem.style === 'red_danger'
                      ? 'rgba(239, 68, 68, 0.22)'
                      : wordItem.style === 'gold_luxury'
                      ? 'rgba(250, 204, 21, 0.18)'
                      : wordItem.style === 'cyan_neon'
                      ? 'rgba(56, 189, 248, 0.2)'
                      : 'rgba(255, 255, 255, 0.08)'
                    : 'transparent',
                  border: isCurrentlyActive && wordItem.isHero
                    ? '1.5px solid rgba(255, 255, 255, 0.3)'
                    : '1.5px solid transparent',
                  boxShadow: isCurrentlyActive && wordItem.isHero
                    ? '0 8px 30px rgba(0, 0, 0, 0.6)'
                    : 'none',
                }}
              >
                {wordItem.word}
              </span>
            </div>
          );
        })}
      </div>

      {/* Kinetic Audio Timeline Bar */}
      <div
        style={{
          width: '65%',
          height: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderRadius: 3,
          marginTop: 24,
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${interpolate(
              currentSec,
              [activePhrase.startSec, activePhrase.endSec],
              [0, 100],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            )}%`,
            background:
              activePhrase.theme === 'RED_ALERT'
                ? 'linear-gradient(90deg, #ef4444, #f87171)'
                : activePhrase.theme === 'LUXURY_GOLD_CTA'
                ? 'linear-gradient(90deg, #f59e0b, #fde047)'
                : 'linear-gradient(90deg, #0284c7, #38bdf8)',
            boxShadow: '0 0 12px rgba(56, 189, 248, 0.9)',
          }}
        />
      </div>
    </div>
  );
};
