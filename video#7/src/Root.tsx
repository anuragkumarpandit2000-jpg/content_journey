import React from 'react';
import { Composition } from 'remotion';
import { KathaRoute } from './routes/KathaRoute';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Katha-Premanand"
        component={KathaRoute}
        durationInFrames={1116}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
