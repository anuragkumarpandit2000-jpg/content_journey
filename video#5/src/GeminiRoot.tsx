import React from 'react';
import { Composition } from 'remotion';
import { GeminiVoiceRoute } from './routes/GeminiVoiceRoute';

export const GeminiRoot: React.FC = () => {
  return (
    <Composition
      id="Gemini-TTS-10s"
      component={GeminiVoiceRoute}
      durationInFrames={315}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
