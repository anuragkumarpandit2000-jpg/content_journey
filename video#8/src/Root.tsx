import React from 'react';
import { Composition } from 'remotion';
import { PodcastExplainerRoute } from './routes/PodcastExplainerRoute';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Podcast-Explainer"
        component={PodcastExplainerRoute}
        durationInFrames={889}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
