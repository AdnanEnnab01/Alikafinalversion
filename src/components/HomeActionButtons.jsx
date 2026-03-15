import React from 'react';

export default function HomeActionButtons({
  homeSoundEnabled,
  selectedCompany,
  showAboutUs,
  showChairmanMessage,
  onEnableSound,
  onBackToAlika,
  onToggleChairmanMessage,
  onShowAboutUs
}) {
  return (
    <>
      {/* Home action button (enable sound + reveal animation) */}
      {!homeSoundEnabled && selectedCompany === null && !showAboutUs && (
        <button
          type="button"
          className="home-sound-btn"
          onClick={onEnableSound}
          aria-label="Enable background video sound"
        >
          Vice President's speech
        </button>
      )}

      {/* Back button (return to main UI) */}
      {homeSoundEnabled && (
        <button
          type="button"
          className="home-back-btn"
          onClick={onBackToAlika}
          aria-label="Back to Alika"
        >
          Back to Alika
        </button>
      )}

      {/* Chairman message button (home only) - always visible when not on sound screen */}
      {!homeSoundEnabled && selectedCompany === null && !showAboutUs && (
        <button
          type="button"
          className={`home-chairman-btn ${showChairmanMessage ? 'active' : ''}`}
          onClick={onToggleChairmanMessage}
          aria-label="Message from the Chairman"
        >
          Message from the Chairman
        </button>
      )}

      {/* About us button (home only) - always visible when not on sound screen */}
      {!homeSoundEnabled && selectedCompany === null && !showAboutUs && (
        <button
          type="button"
          className="home-about-btn"
          onClick={onShowAboutUs}
          aria-label="About us"
        >
          About us
        </button>
      )}
    </>
  );
}
