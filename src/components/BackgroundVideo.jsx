import React from 'react';
import { getPublicUrl } from '../utils/pathUtils';

export default function BackgroundVideo({ homeSoundEnabled }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: homeSoundEnabled ? 1 : 0.3,
        overflow: 'hidden'
      }}
    >
      <video
        key={homeSoundEnabled ? 'bg-sound-on' : 'bg-sound-off'}
        src={getPublicUrl('alika_final_2_pttcrz.mp4')}
        title="Alika Background Video"
        autoPlay
        loop
        muted={!homeSoundEnabled}
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%) scale(1.2)',
          transformOrigin: 'center',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
