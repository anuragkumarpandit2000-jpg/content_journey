import React from 'react';
import timeline from '../data/timeline.json';

interface ComicChipProps {
  currentSec: number;
}

export const ComicChip: React.FC<ComicChipProps> = ({ currentSec }) => {
  const beats = timeline.beats;
  const activeBeat =
    beats.find((b) => currentSec >= b.startSec && currentSec < b.endSec) || beats[0];

  return (
    <div
      style={{
        position: 'absolute',
        top: 60,
        left: 45,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 24px',
        borderRadius: 14,
        backgroundColor: '#facc15',
        border: '4px solid #09090b',
        boxShadow: '6px 6px 0px #09090b',
      }}
    >
      <span style={{ fontSize: 24, color: '#dc2626' }}>★</span>
      <span
        style={{
          color: '#09090b',
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontFamily: 'Impact, "Arial Black", sans-serif',
        }}
      >
        {activeBeat.chip}
      </span>
    </div>
  );
};
