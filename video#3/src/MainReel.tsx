import React from 'react';
import { Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { CameraRig } from './components/CameraRig';
import { DynamicBackground } from './components/DynamicBackground';
import { ThreeBackground } from './components/ThreeBackground';
import { MotionBrollLayer } from './components/MotionBrollLayer';
import { HeroKineticTypography } from './components/HeroKineticTypography';
import { FilmGrain } from './components/FilmGrain';
import { MASTER_PHRASES } from './data/typographyData';

export const MainReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  // Determine current active phrase & theme
  const activePhrase =
    MASTER_PHRASES.find(
      (p) => currentSec >= p.startSec && currentSec <= p.endSec + 0.4
    ) || MASTER_PHRASES[0];

  const currentTheme = activePhrase.theme;
  const phraseStartFrame = Math.round(activePhrase.startSec * fps);

  // Key bass hit frames for camera shockwaves
  const bassHitFrames = [25, 234, 400, 535, 750, 1120, 1263, 1390, 1619, 1834, 2008];
  const isBassHit = bassHitFrames.some((bf) => Math.abs(frame - bf) <= 3);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#04070D',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 1. Master Audio Track (73.20 seconds voiceover) */}
      <Audio src={staticFile('partition.mp3')} volume={1.0} />

      {/* 2. Synchronized SFX Sound Design */}
      {/* Bass Hits on Major Drops */}
      <Sequence from={25} durationInFrames={30}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={234} durationInFrames={35}>
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.35} />
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.3} />
      </Sequence>
      <Sequence from={400} durationInFrames={30}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.25} />
      </Sequence>
      <Sequence from={535} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.35} />
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.3} />
      </Sequence>
      <Sequence from={750} durationInFrames={25}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.25} />
      </Sequence>
      <Sequence from={1120} durationInFrames={35}>
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.35} />
        <Audio src={staticFile('sfx/pop.wav')} volume={0.25} />
      </Sequence>
      <Sequence from={1263} durationInFrames={30}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.35} />
      </Sequence>
      <Sequence from={1390} durationInFrames={35}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.3} />
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.25} />
      </Sequence>
      <Sequence from={1619} durationInFrames={30}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.3} />
      </Sequence>
      <Sequence from={1834} durationInFrames={35}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={2008} durationInFrames={30}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.3} />
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.25} />
      </Sequence>

      {/* 3. Dynamic Camera Rig with Beat Punches & Shake */}
      <CameraRig
        activePhraseStartFrame={phraseStartFrame}
        isBassHit={isBassHit}
      >
        {/* Layer 1: Evolving Dynamic Background */}
        <DynamicBackground theme={currentTheme} />

        {/* Layer 2: Three.js Interactive 3D Environments */}
        <ThreeBackground theme={currentTheme} intensity={0.85} />

        {/* Layer 3: Synchronized Motion B-Roll Video Cards */}
        <MotionBrollLayer />

        {/* Layer 4: Master Hero Kinetic Typography Engine */}
        <HeroKineticTypography />

        {/* Layer 5: Film Grain, Vignette & Editorial Framing */}
        <FilmGrain />
      </CameraRig>
    </div>
  );
};
