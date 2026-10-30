import React from 'react';
import { Composition } from 'remotion';
import { MainReel } from './MainReel';
import { MetaCyberRoute } from './routes/MetaCyberRoute';
import { GeminiVoiceRoute } from './routes/GeminiVoiceRoute';

export const Root: React.FC = () => {
  return (
    <>
      {/* Primary Master Pipeline Composition (Renders the selected active route) */}
      <Composition
        id="Reel"
        component={MainReel}
        durationInFrames={1668}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          routeId: 'meta-cyber',
        }}
      />

      {/* Route 1: Meta Cyber AI Wireframe (Video #5 Original Concept) */}
      <Composition
        id="Route-MetaCyber"
        component={MetaCyberRoute}
        durationInFrames={1668}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Route: Gemini 3.8 Flash TTS 10s Showcase */}
      <Composition
        id="Gemini-TTS-10s"
        component={GeminiVoiceRoute}
        durationInFrames={315}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
