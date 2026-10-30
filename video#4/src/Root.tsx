import React from 'react';
import { Composition } from 'remotion';
import { MainReel } from './MainReel';
import './styles/fonts.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Reel"
        component={MainReel}
        durationInFrames={2224}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
