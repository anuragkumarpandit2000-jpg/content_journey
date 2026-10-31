import React from 'react';
import { staticFile, Video } from 'remotion';

export const AnimeBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#030308',
        overflow: 'hidden',
      }}
    >
      <Video
        src={staticFile('podcast_2d_anime.mp4')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        muted
      />
    </div>
  );
};
