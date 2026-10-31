import React from 'react';
import { Composition } from 'remotion';
import { AnimeRoute } from './routes/AnimeRoute';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Anime-Rotoscope-Reel"
        component={AnimeRoute}
        durationInFrames={710}
        fps={24}
        width={1080}
        height={1920}
      />
    </>
  );
};
