import React from 'react';
import { Composition } from 'remotion';
import { MainReel } from './MainReel';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Reel"
        component={MainReel}
        durationInFrames={2196}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
