import React from 'react';
import timeline from '../data/timeline.json';

interface CinematicChipProps {
  currentSec: number;
}

export const CinematicChip: React.FC<CinematicChipProps> = ({ currentSec }) => {
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
        padding: '12px 26px',
        borderRadius: 999,
        backgroundColor: 'rgba(9, 9, 11, 0.85)',
        border: '2px solid rgba(6, 182, 212, 0.6)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(6, 182, 212, 0.25)',
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#06b6d4',
          boxShadow: '0 0 10px #06b6d4',
        }}
      />
      <span
        style={{
          color: '#ffffff',
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {activeBeat.chip}
      </span>
    </div>
  );
};
