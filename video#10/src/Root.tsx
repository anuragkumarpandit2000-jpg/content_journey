import React from 'react';
import { Composition } from 'remotion';
import { ComicRoute } from './routes/ComicRoute';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Comic-Reel"
        component={ComicRoute}
        durationInFrames={889}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
