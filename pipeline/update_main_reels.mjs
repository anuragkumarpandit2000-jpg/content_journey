import fs from 'fs';

const CONFIGS = [
  {
    num: 12,
    total: 1418,
    s1: 274,
    s2: 254,
    s3_prob: 142,
    s3_sol: 140,
    s4: 304,
    s5: 304,
    accentColor: '#38BDF8',
    bg: '#050B14',
  },
  {
    num: 13,
    total: 1347,
    s1: 257,
    s2: 188,
    s3_prob: 155,
    s3_sol: 153,
    s4: 300,
    s5: 294,
    accentColor: '#22C55E',
    bg: '#0D1117',
  },
  {
    num: 14,
    total: 1225,
    s1: 211,
    s2: 228,
    s3_prob: 129,
    s3_sol: 129,
    s4: 259,
    s5: 269,
    accentColor: '#25D366',
    bg: '#0B141A',
  },
  {
    num: 15,
    total: 1419,
    s1: 256,
    s2: 252,
    s3_prob: 159,
    s3_sol: 160,
    s4: 298,
    s5: 294,
    accentColor: '#A855F7',
    bg: '#09090B',
  },
];

for (const cfg of CONFIGS) {
  const vDir = `D:/anurag/content_journey/videos/video#${cfg.num}`;
  const f1 = cfg.s1;
  const f2 = f1 + cfg.s2;
  const f3_prob = f2 + cfg.s3_prob;
  const f3_sol = f3_prob + cfg.s3_sol;
  const f4 = f3_sol + cfg.s4;
  const f5 = f4 + cfg.s5;

  const content = `import React from 'react';
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
        backgroundColor: '${cfg.bg}',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Visual Scenes Sequence */}
      <Sequence from={0} durationInFrames={${cfg.s1}}>
        <Scene1Hook />
      </Sequence>

      <Sequence from={${f1}} durationInFrames={${cfg.s2}}>
        <Scene2Relatability />
      </Sequence>

      <Sequence from={${f2}} durationInFrames={${cfg.s3_prob}}>
        <Scene3ProblemGlitch />
      </Sequence>

      <Sequence from={${f3_prob}} durationInFrames={${cfg.s3_sol}}>
        <Scene4SolutionReveal />
      </Sequence>

      <Sequence from={${f3_sol}} durationInFrames={${cfg.s4}}>
        <Scene5Tutorial />
      </Sequence>

      <Sequence from={${f4}} durationInFrames={${cfg.s5}}>
        <Scene6OutroCTA />
      </Sequence>

      {/* Synchronized Sound Effects */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.4} />
      </Sequence>

      <Sequence from={${f1}} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.3} />
      </Sequence>

      <Sequence from={${f2}} durationInFrames={45}>
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.4} />
      </Sequence>

      <Sequence from={${f3_prob}} durationInFrames={35}>
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.35} />
      </Sequence>

      <Sequence from={${f3_sol}} durationInFrames={25}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.25} />
      </Sequence>

      <Sequence from={${f3_sol + 80}} durationInFrames={40}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.3} />
      </Sequence>

      <Sequence from={${f4}} durationInFrames={50}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.35} />
      </Sequence>

      {/* Voiceover Scenes */}
      <Sequence from={0} durationInFrames={${cfg.s1}}>
        <Audio src={staticFile('scene1.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${f1}} durationInFrames={${cfg.s2}}>
        <Audio src={staticFile('scene2.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${f2}} durationInFrames={${cfg.s3_prob + cfg.s3_sol}}>
        <Audio src={staticFile('scene3.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${f3_sol}} durationInFrames={${cfg.s4}}>
        <Audio src={staticFile('scene4.mp3')} volume={1.0} />
      </Sequence>
      <Sequence from={${f4}} durationInFrames={${cfg.s5}}>
        <Audio src={staticFile('scene5.mp3')} volume={1.0} />
      </Sequence>

      {/* Background Music with Auto-Ducking */}
      <Audio src={staticFile('bg_music.mp3')} volume={frame >= ${f4} ? 0.12 : 0.07} loop />

      {/* Dynamic Word-by-Word Captions with Custom Color Glow */}
      <DynamicCaptions />
    </div>
  );
};
`;

  fs.writeFileSync(`${vDir}/src/MainReel.tsx`, content);
  console.log(`✅ MainReel.tsx synchronized for Video #${cfg.num}`);
}
