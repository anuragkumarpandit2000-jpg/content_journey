import React from 'react';
import { Audio, Sequence, staticFile, useCurrentFrame } from 'remotion';
import './styles/fonts.css';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Relatability } from './scenes/Scene2Relatability';
import { Scene3ProblemGlitch } from './scenes/Scene3ProblemGlitch';
import { Scene4SolutionReveal } from './scenes/Scene4SolutionReveal';
import { Scene5Tutorial } from './scenes/Scene5Tutorial';
import { Scene6OutroCTA } from './scenes/Scene6OutroCTA';
import { DynamicCaptions } from './components/DynamicCaptions';

export const MainReel: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#0B141A',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Visual Scenes Sequence */}
      <Sequence from={0} durationInFrames={211}>
        <Scene1Hook />
      </Sequence>

      <Sequence from={211} durationInFrames={228}>
        <Scene2Relatability />
      </Sequence>

      <Sequence from={439} durationInFrames={129}>
        <Scene3ProblemGlitch />
      </Sequence>

      <Sequence from={568} durationInFrames={129}>
        <Scene4SolutionReveal />
      </Sequence>

      <Sequence from={697} durationInFrames={259}>
        <Scene5Tutorial />
      </Sequence>

      <Sequence from={956} durationInFrames={269}>
        <Scene6OutroCTA />
      </Sequence>

      {/* Synchronized Sound Effects */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.4} />
      </Sequence>

      <Sequence from={211} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.3} />
      </Sequence>

      <Sequence from={439} durationInFrames={45}>
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.4} />
      </Sequence>

      <Sequence from={568} durationInFrames={35}>
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.35} />
      </Sequence>

      <Sequence from={697} durationInFrames={25}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.25} />
      </Sequence>

      <Sequence from={777} durationInFrames={40}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.3} />
      </Sequence>

      <Sequence from={956} durationInFrames={50}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.35} />
      </Sequence>

      {/* Voiceover Scenes */}
      <Sequence from={0} durationInFrames={211}>
        <Audio src={staticFile('scene1.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={211} durationInFrames={228}>
        <Audio src={staticFile('scene2.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={439} durationInFrames={258}>
        <Audio src={staticFile('scene3.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={697} durationInFrames={259}>
        <Audio src={staticFile('scene4.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={956} durationInFrames={269}>
        <Audio src={staticFile('scene5.mp3')} volume={1.0} />
      </Sequence>

      {/* Background Music with Auto-Ducking */}
      <Audio src={staticFile('bg_music.mp3')} volume={frame >= 956 ? 0.12 : 0.07} loop />

      {/* Dynamic Word-by-Word Captions with Custom Color Glow */}
      <DynamicCaptions />
    </div>
  );
};
