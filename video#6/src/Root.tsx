import React from 'react';
import { Composition } from 'remotion';
import { OxygenRoute } from './routes/OxygenRoute';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Oxygen-WhatIf"
        component={OxygenRoute}
        durationInFrames={1614}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
