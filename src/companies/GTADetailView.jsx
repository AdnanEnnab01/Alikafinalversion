import React, { useRef, useState } from 'react';
import { getPublicUrl } from '../utils/pathUtils';
import { useVideoFullscreen } from '../hooks/useVideoFullscreen';

export default function GTADetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowGTALearnMore,
  setShowGTAQRModal,
  closeVideo
}) {
  const [gtaVideoPlaying, setGtaVideoPlaying] = useState(false);
  const [gtaVideoFullscreen, setGtaVideoFullscreen] = useState(false);
  const gtaVideoContainerRef = useRef(null);

  // Handle fullscreen change for GTA video
  useVideoFullscreen(setGtaVideoPlaying, setGtaVideoFullscreen);

  return (
    <>
      {/* Company Logos Grid - Left Side (same 12-company shape, highlighting GTA) */}
      <div
        style={{
          position: 'fixed',
          top: 'clamp(55%, 55vh, 60%)',
          left: 'clamp(100px, 10vw, 220px)',
          transform: 'translateY(-50%)',
          zIndex: 11,
          animation: 'fadeIn 0.8s ease-in-out 0.4s both',
          opacity: 0.9
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(80px, 8.5vw, 135px)))`,
            gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(80px, 8.5vw, 135px)))`,
            gap: 'var(--grid-gap, clamp(14px, 1.4vw, 24px))',
            transform: 'rotate(45deg)',
            position: 'relative'
          }}
        >
          {companies.map((company) => {
            const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
            const isGTALogo = company.id === 4;

            return (
              <div
                key={company.id}
                style={{
                  gridColumn: company.col,
                  gridRow: company.row,
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    cursor:
                      company.id === 10 ||
                      company.id === 3 ||
                      company.id === 11 ||
                      company.id === 1 ||
                      company.id === 6 ||
                      company.id === 5 ||
                      company.id === 2 ||
                      company.id === 7 ||
                      company.id === 9 ||
                      company.id === 12 ||
                      company.id === 4 ||
                      company.id === 8
                        ? 'pointer'
                        : 'default',
                    width: '100%',
                    height: '100%',
                    minWidth: 'var(--grid-item-size, clamp(80px, 8.5vw, 135px))',
                    minHeight: 'var(--grid-item-size, clamp(80px, 8.5vw, 135px))',
                    background: isGTALogo ? '#ffffff' : '#E8E8E8',
                    border: isGTALogo
                      ? '2px solid #dc2626'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isGTALogo
                      ? '0 0 25px rgba(220, 38, 38, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isGTALogo ? 2 : 1,
                    transform: isGTALogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isGTALogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(220, 38, 38, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isGTALogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(220, 38, 38, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow =
                        '0 2px 10px rgba(0, 0, 0, 0.08)';
                    }
                  }}
                  onClick={(e) => {
                    if (
                      company.id === 10 ||
                      company.id === 3 ||
                      company.id === 11 ||
                      company.id === 1 ||
                      company.id === 6 ||
                      company.id === 5 ||
                      company.id === 2 ||
                      company.id === 7 ||
                      company.id === 9 ||
                      company.id === 12 ||
                      company.id === 4 ||
                      company.id === 8
                    ) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      sessionStorage.setItem('logoStartX', rect.left);
                      sessionStorage.setItem('logoStartY', rect.top);
                      setSelectedCompany(company);
                    }
                  }}
                >
                  <div
                    style={{
                      transform: 'rotate(-45deg)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      padding: '10px'
                    }}
                  >
                    <img
                      src={company.logo}
                      alt={isGulfConsult ? 'Gulf Consult' : 'Company logo'}
                      style={{
                        maxWidth: isGulfConsult ? '98%' : '90%',
                        maxHeight: isGulfConsult ? '90%' : '75%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        marginBottom: '0px',
                        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* GTA Content - Right Side - Optimized for 1536x864 */}
      <div
        className="gta-content"
        style={{
          position: 'fixed',
          top: 'clamp(80px, 8vh, 120px)',
          right: 'clamp(40px, 4vw, 80px)',
          maxWidth: 'var(--amt-content-max-width, clamp(600px, 50vw, 900px))',
          maxHeight: 'calc(100vh - clamp(60px, 6vh, 100px))',
          height: 'auto',
          width: 'auto',
          color: '#000000',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11,
          overflowY: 'visible',
          overflowX: 'visible',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        {/* White Content Box with Red Borders */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: 'clamp(12px, 1.5vw, 20px) clamp(14px, 1.8vw, 24px) clamp(32px, 4vh, 50px)',
            borderLeft: '4px solid #dc2626',
            borderBottom: '4px solid #dc2626',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            animation: 'fadeIn 0.8s ease-in-out 0.2s both',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
          }}
        >
          {/* GTA Logo inside the box */}
          <div style={{
            marginBottom: 'clamp(6px, 0.8vh, 12px)',
            animation: 'fadeIn 0.8s ease-in-out 0.1s both',
            flexShrink: 0
          }}>
            <img
              src={selectedCompany.logo}
              alt={selectedCompany.name}
              style={{
                maxWidth: 'clamp(90px, 9vw, 140px)',
                maxHeight: 'clamp(45px, 4.5vh, 70px)',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 15px rgba(220, 38, 38, 0.4))'
              }}
            />
          </div>

          <h1
            style={{
              fontSize: 'var(--amt-title-size, clamp(32px, 4.2vw, 58px))',
              fontWeight: '900',
              marginBottom: 'clamp(6px, 0.8vh, 12px)',
              letterSpacing: '1.8px',
              background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              textShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 4px 20px rgba(220, 38, 38, 0.3)',
              animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
              position: 'relative',
              display: 'inline-block',
              filter: 'drop-shadow(0 2px 8px rgba(220, 38, 38, 0.5))',
              flexShrink: 0,
              lineHeight: '1.2'
            }}
          >
            GERMAN TECHNOLOGY AUTO
          </h1>

          <p
            style={{
              fontSize: 'var(--amt-text-size, clamp(16px, 1.9vw, 26px))',
              lineHeight: '1.5',
              marginBottom: 'clamp(8px, 1vh, 12px)',
              color: '#1a1a1a',
              fontWeight: '500',
              letterSpacing: '0.2px',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
              padding: 'clamp(6px, 0.8vh, 10px) clamp(12px, 1.5vw, 18px)',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(220, 38, 38, 0.1)',
              borderLeft: '4px solid #dc2626',
              flexShrink: 0
            }}
          >
            German Technology Auto Services Company is one of the leading maintenance companies in the Eastern Region, which includes German car services under one roof. We promise to give you the best service at competitive prices. We warranty all our work. Our company strives on the best customer service we can offer.
          </p>

          <div
            style={{
              fontSize: 'var(--amt-info-size, clamp(14px, 1.5vw, 21px))',
              lineHeight: '1.5',
              color: '#1a1a1a',
              flex: '0 0 auto',
              padding: 'clamp(8px, 1vh, 12px) clamp(14px, 1.6vw, 20px)',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 250, 0.95) 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              backdropFilter: 'blur(10px)',
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
              marginBottom: 'clamp(4px, 0.6vh, 8px)',
              flexShrink: 0
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                gap: 'clamp(12px, 2vw, 20px)',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ flex: '1 1 320px', minWidth: 'min(320px, 100%)' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: 'clamp(4px, 0.6vh, 8px)',
                    paddingBottom: 'clamp(4px, 0.6vh, 8px)',
                    borderBottom: '1px solid rgba(220, 38, 38, 0.15)'
                  }}
                >
                  <strong style={{ 
                    minWidth: 'auto', 
                    fontWeight: 800, 
                    color: '#dc2626',
                    fontSize: 'clamp(14px, 1.5vw, 21px)',
                    letterSpacing: '0.5px',
                    textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)'
                  }}>Managers:</strong>
                  <span style={{ 
                    fontWeight: 600,
                    color: '#2d2d2d',
                    letterSpacing: '0.2px'
                  }}>Mr. Tamam Hussain.</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: 'clamp(4px, 0.6vh, 8px)',
                    paddingBottom: 'clamp(4px, 0.6vh, 8px)',
                    borderBottom: '1px solid rgba(220, 38, 38, 0.15)'
                  }}
                >
                  <strong style={{ 
                    minWidth: 'auto', 
                    fontWeight: 800, 
                    color: '#dc2626',
                    fontSize: 'clamp(14px, 1.5vw, 21px)',
                    letterSpacing: '0.5px',
                    textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)'
                  }}>Mobile:</strong>
                  <span style={{ 
                    fontWeight: 600,
                    color: '#2d2d2d',
                    letterSpacing: '0.2px',
                    fontFamily: 'monospace'
                  }}>053 240 4666</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '0'
                  }}
                >
                  <strong style={{ 
                    minWidth: 'auto', 
                    fontWeight: 800, 
                    color: '#dc2626',
                    fontSize: 'clamp(14px, 1.5vw, 21px)',
                    letterSpacing: '0.5px',
                    textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)'
                  }}>Email:</strong>
                  <span
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      fontWeight: 600,
                      color: '#2d2d2d',
                      letterSpacing: '0.2px'
                    }}
                  >
                    tammam.hussein@yahoo.com
                  </span>
                </div>
              </div>

              {/* GTA Video Card - placed beside contact info */}
              {!gtaVideoFullscreen && (
                <div
                  style={{
                    position: 'relative',
                    flex: '0 0 auto',
                    width: 'clamp(200px, 18vw, 260px)',
                    alignSelf: 'stretch',
                    marginLeft: 'auto'
                  }}
                >
                  <img
                    src={getPublicUrl('gta-thmbnail.jpg')}
                    alt="GTA video thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 'clamp(92px, 10vh, 120px)',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '14px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      border: '1px solid rgba(220, 38, 38, 0.25)'
                    }}
                  />

                  <button
                    className="gta-video-play-button"
                    onClick={async () => {
                      if (gtaVideoPlaying) return;
                      if (!gtaVideoContainerRef.current) return;
                      try {
                        setGtaVideoFullscreen(true);
                        setGtaVideoPlaying(true);

                        let fullscreenPromise;
                        if (gtaVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = gtaVideoContainerRef.current.requestFullscreen();
                        } else if (gtaVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = gtaVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (gtaVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = gtaVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        setGtaVideoFullscreen(true);
                        setGtaVideoPlaying(true);
                      }
                    }}
                    disabled={gtaVideoPlaying}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      padding: '4px 8px',
                      fontSize: '9px',
                      fontWeight: 800,
                      color: '#dc2626',
                      background: 'rgba(0, 0, 0, 0.65)',
                      border: '2px solid #dc2626',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 10px 26px rgba(0, 0, 0, 0.45)',
                      transition: 'all 0.25s ease',
                      letterSpacing: '0.45px',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backdropFilter: 'blur(6px)',
                      opacity: gtaVideoPlaying ? 0.7 : 1,
                      pointerEvents: gtaVideoPlaying ? 'none' : 'auto',
                      lineHeight: 1.1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -52%)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      e.currentTarget.style.boxShadow = '0 14px 34px rgba(0, 0, 0, 0.65)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                      e.currentTarget.style.boxShadow = '0 10px 26px rgba(0, 0, 0, 0.45)';
                    }}
                  >
                    <span>Play Video</span>
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#dc2626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{ marginLeft: '2px' }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 'clamp(12px, 2vw, 24px)',
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
              flexShrink: 0,
              marginTop: 'clamp(6px, 0.8vh, 12px)',
              paddingBottom: 'clamp(8px, 1vh, 12px)',
              marginBottom: 'clamp(12px, 1.5vh, 20px)'
            }}
          >
            {/* Buttons Container - Visit Website, Our Services, and Learn More */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(5px, 0.7vh, 8px)',
              animation: 'fadeInUp 0.8s ease-out 0.7s both',
              flexShrink: 0
            }}>
              {/* Visit Website Button */}
              <button
                onClick={() => window.open('https://gtaksa.com/', '_blank', 'noopener,noreferrer')}
                style={{
                  padding: 'clamp(8px, 1vw, 12px) clamp(16px, 1.8vw, 24px)',
                  fontSize: 'clamp(11px, 1.15vw, 15px)',
                  fontWeight: '700',
                  color: '#ffffff',
                  background: '#1f2937',
                  border: '2px solid #dc2626',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  minWidth: 'clamp(180px, 18vw, 260px)',
                  width: 'clamp(180px, 18vw, 260px)',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                  e.currentTarget.style.background = '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.background = '#1f2937';
                }}
              >
                Visit Website
              </button>
              
              {/* Our Services Button */}
              <button
                onClick={() => window.open('https://gtaksa.com/our-services/', '_blank', 'noopener,noreferrer')}
                style={{
                  padding: 'clamp(8px, 1vw, 12px) clamp(16px, 1.8vw, 24px)',
                  fontSize: 'clamp(11px, 1.15vw, 15px)',
                  fontWeight: '700',
                  color: '#ffffff',
                  background: '#1f2937',
                  border: '2px solid #dc2626',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  minWidth: 'clamp(180px, 18vw, 260px)',
                  width: 'clamp(180px, 18vw, 260px)',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                  e.currentTarget.style.background = '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.background = '#1f2937';
                }}
              >
                Our Services
              </button>
              
              {/* Learn More Button */}
              <button
                onClick={() => setShowGTALearnMore(true)}
                style={{
                  padding: 'clamp(8px, 1vw, 12px) clamp(16px, 1.8vw, 24px)',
                  fontSize: 'clamp(11px, 1.15vw, 15px)',
                  fontWeight: '700',
                  color: '#ffffff',
                  background: '#1f2937',
                  border: '2px solid #dc2626',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  minWidth: 'clamp(180px, 18vw, 260px)',
                  width: 'clamp(180px, 18vw, 260px)',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                  e.currentTarget.style.background = '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                  e.currentTarget.style.background = '#1f2937';
                }}
              >
                Learn More
              </button>
            </div>

            {/* QR Code */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                background: 'transparent',
                padding: '0',
                borderRadius: '0',
                boxShadow: 'none',
                flexShrink: 0
              }}
            >
              <img
                src={getPublicUrl("gtaqr.jpeg")}
                alt="GTA QR Code"
                onClick={() => setShowGTAQRModal(true)}
                style={{
                  maxWidth: 'clamp(80px, 9vw, 120px)',
                  maxHeight: 'clamp(80px, 9vw, 120px)',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* GTA Video - Fullscreen container */}
      <div
        ref={gtaVideoContainerRef}
        style={{
          position: 'fixed',
          right: gtaVideoFullscreen ? '0' : '-9999px',
          top: gtaVideoFullscreen ? '0' : '-9999px',
          width: gtaVideoFullscreen ? '100vw' : '0',
          height: gtaVideoFullscreen ? '100vh' : '0',
          zIndex: gtaVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {gtaVideoFullscreen && (
          <video
            key={`gta-video-${gtaVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/757210379_uvjzv7.mp4"
            autoPlay
            controls
            style={{
              height: '100%',
              width: '100%',
              maxHeight: '100vh',
              maxWidth: '100vw',
              objectFit: 'contain'
            }}
            onEnded={() => {
              if (closeVideo) {
                closeVideo(setGtaVideoFullscreen, setGtaVideoPlaying);
              } else {
                setGtaVideoFullscreen(false);
                setGtaVideoPlaying(false);
              }
            }}
          />
        )}

        {gtaVideoFullscreen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (closeVideo) {
                closeVideo(setGtaVideoFullscreen, setGtaVideoPlaying);
              } else {
                setGtaVideoFullscreen(false);
                setGtaVideoPlaying(false);
              }
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
