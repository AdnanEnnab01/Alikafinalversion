import React from 'react';

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
      <iframe
        key={homeSoundEnabled ? 'bg-sound-on' : 'bg-sound-off'}
        src={`https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=alika_final_2_pttcrz&profile=cld-default&autoplay=true&muted=${homeSoundEnabled ? 'false' : 'true'}&loop=true&controls=false&playsinline=true`}
        title="Alika Background Video"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%) scale(1.2)',
          transformOrigin: 'center',
          border: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
