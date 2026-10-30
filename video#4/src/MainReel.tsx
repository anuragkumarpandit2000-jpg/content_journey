import React from 'react';
import { Audio, Sequence, staticFile } from 'remotion';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Relatability } from './scenes/Scene2Relatability';
import { Scene3ProblemGlitch } from './scenes/Scene3ProblemGlitch';
import { Scene4SolutionReveal } from './scenes/Scene4SolutionReveal';
import { Scene5Tutorial } from './scenes/Scene5Tutorial';
import { Scene6Cybersecurity } from './scenes/Scene6Cybersecurity';
import { Scene7MotivationalClimax } from './scenes/Scene7MotivationalClimax';
import { DynamicCaptions } from './components/DynamicCaptions';

export const MainReel: React.FC = () => {
  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 1. Master Original Voiceover Audio (Untouched & Intact) */}
      <Audio src={staticFile('mobile.mp3')} volume={1.0} />

      {/* 2. Sound Effects Sync */}
      {/* Opening Bass Hit */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.35} />
      </Sequence>

      {/* Transition to Relatability */}
      <Sequence from={74} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.25} />
      </Sequence>

      {/* Problem Glitch Hit */}
      <Sequence from={434} durationInFrames={45}>
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={580} durationInFrames={40}>
        <Audio src={staticFile('sfx/glitch.wav')} volume={0.35} />
      </Sequence>

      {/* Solution Reveal Whoosh */}
      <Sequence from={674} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.25} />
      </Sequence>

      {/* Tutorial Tap Click */}
      <Sequence from={835} durationInFrames={20}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.2} />
      </Sequence>

      {/* Hostname Digital Chime */}
      <Sequence from={1150} durationInFrames={40}>
        <Audio src={staticFile('sfx/digital_scan.wav')} volume={0.3} />
      </Sequence>

      {/* Cybersecurity Shield Activate */}
      <Sequence from={1340} durationInFrames={60}>
        <Audio src={staticFile('sfx/shield_up.wav')} volume={0.35} />
        <Audio src={staticFile('sfx/bass_hit.wav')} volume={0.3} />
      </Sequence>

      {/* Motivational Crescendo */}
      <Sequence from={1600} durationInFrames={30}>
        <Audio src={staticFile('sfx/whoosh.wav')} volume={0.25} />
      </Sequence>
      <Sequence from={1960} durationInFrames={30}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.25} />
      </Sequence>

      {/* 3. Visual Scenes Sequence */}
      <Sequence from={0} durationInFrames={75}>
        <Scene1Hook />
      </Sequence>

      <Sequence from={75} durationInFrames={360}>
        <Scene2Relatability />
      </Sequence>

      <Sequence from={435} durationInFrames={240}>
        <Scene3ProblemGlitch />
      </Sequence>

      <Sequence from={675} durationInFrames={160}>
        <Scene4SolutionReveal />
      </Sequence>

      <Sequence from={835} durationInFrames={505}>
        <Scene5Tutorial />
      </Sequence>

      <Sequence from={1340} durationInFrames={260}>
        <Scene6Cybersecurity />
      </Sequence>

      <Sequence from={1600} durationInFrames={624}>
        <Scene7MotivationalClimax />
      </Sequence>

      {/* 4. Word-by-Word Synchronized Captions Overlay */}
      <DynamicCaptions />
    </div>
  );
};
