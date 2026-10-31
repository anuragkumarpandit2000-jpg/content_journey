import React from 'react';
import { Composition } from 'remotion';
import { CinematicRoute } from './routes/CinematicRoute';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Cinematic-Motion"
        component={CinematicRoute}
        durationInFrames={889}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
