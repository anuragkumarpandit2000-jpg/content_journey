import React from 'react';
import { Composition } from 'remotion';
import { MainReel } from './MainReel';
import { MetaCyberRoute } from './routes/MetaCyberRoute';

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
    </>
  );
};
