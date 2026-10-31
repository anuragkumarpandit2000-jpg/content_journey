import React from 'react';
import timeline from '../data/timeline.json';

interface ChapterChipProps {
  currentSec: number;
}

export const ChapterChip: React.FC<ChapterChipProps> = ({ currentSec }) => {
  const beats = timeline.beats;
  const activeBeat =
    beats.find((b) => currentSec >= b.startSec && currentSec < b.endSec) || beats[0];

  return (
    <div
      style={{
        position: 'absolute',
        top: 70,
        left: 45,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 24px',
        borderRadius: 999,
        backgroundColor: '#09090b',
        border: '3px solid #facc15',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#facc15',
          boxShadow: '0 0 10px #facc15',
        }}
      />
      <span
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {activeBeat.chip}
      </span>
    </div>
  );
};
