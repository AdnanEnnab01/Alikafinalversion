import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useVideoFullscreen } from '../hooks/useVideoFullscreen';
import { getPublicUrl } from '../utils/pathUtils';

export default function CentralMedicalcareDetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowCentralMedicalcareLearnMore, 
  setShowCentralMedicalcareQRModal 
}) {
  const [centralMedicalcareVideoPlaying, setCentralMedicalcareVideoPlaying] = useState(false);
  const [centralMedicalcareVideoFullscreen, setCentralMedicalcareVideoFullscreen] = useState(false);
  const centralMedicalcareVideoContainerRef = useRef(null);
  
  // Track viewport size for layout adjustments
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to close video and exit fullscreen
  const closeVideo = useCallback((setVideoFullscreen, setVideoPlaying) => {
    setTimeout(() => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setVideoFullscreen(false);
      setVideoPlaying(false);
    }, 300);
  }, []);

  // Handle fullscreen change
  useVideoFullscreen(setCentralMedicalcareVideoPlaying, setCentralMedicalcareVideoFullscreen);

  return (
    <>
      {/* Central Medicalcare Background (fallback image + Cloudinary video) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${selectedCompany.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          zIndex: 1
        }}
      />

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.95,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        <source
          src="https://res.cloudinary.com/dl2rqs0lo/video/upload/rk-gif-ezgif.com-gif-to-mp4-converter_rtyfac.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Company Logos Grid - Left Side */}
      <div
        style={{
          position: 'fixed',
          top: 'clamp(55%, 55vh, 60%)',
          left: 'clamp(80px, 7vw, 140px)',
          transform: 'translateY(-50%)',
          zIndex: 11,
          animation: 'fadeIn 0.8s ease-in-out 0.4s both',
          opacity: 0.9
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
            gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
            gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
            transform: 'rotate(45deg)',
            position: 'relative'
          }}
        >
          {companies.map((company) => {
            const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
            const isCentralCareLogo = company.id === 3;

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
                    minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                    minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                    background: isCentralCareLogo ? '#ffffff' : '#E8E8E8',
                    border: isCentralCareLogo
                      ? '2px solid #bfa874'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isCentralCareLogo
                      ? '0 0 25px rgba(191, 168, 116, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isCentralCareLogo ? 2 : 1,
                    transform: isCentralCareLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isCentralCareLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(191, 168, 116, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isCentralCareLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(191, 168, 116, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* Central Medicalcare Video - Hidden for fullscreen */}
      <div
        ref={centralMedicalcareVideoContainerRef}
        style={{
          position: 'fixed',
          right: centralMedicalcareVideoFullscreen ? '0' : '-9999px',
          top: centralMedicalcareVideoFullscreen ? '0' : '-9999px',
          width: centralMedicalcareVideoFullscreen ? '100vw' : '0',
          height: centralMedicalcareVideoFullscreen ? '100vh' : '0',
          zIndex: centralMedicalcareVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {centralMedicalcareVideoFullscreen && (
          <video
            key={`central-video-${centralMedicalcareVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-03_at_4.02.50_PM_wo8g32.mp4"
            poster={getPublicUrl('central-thmb.jpg')}
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
              closeVideo(setCentralMedicalcareVideoFullscreen, setCentralMedicalcareVideoPlaying);
            }}
          />
        )}
        {centralMedicalcareVideoFullscreen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
              setCentralMedicalcareVideoFullscreen(false);
              setCentralMedicalcareVideoPlaying(false);
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
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
        )}
      </div>

      {/* Central Medicalcare Text Content - Right Side */}
      <div
        className="central-medicalcare-content"
        style={{
          position: 'fixed',
          top: '48%',
          right: 'clamp(40px, 4vw, 80px)',
          transform: 'translateY(-50%)',
          maxWidth: 'var(--central-content-max-width, clamp(600px, 50vw, 900px))',
          color: '#ffffff',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11,
          padding: 'clamp(22px, 2.8vw, 40px) clamp(22px, 2.8vw, 40px) clamp(26px, 3.2vw, 44px)',
          borderRadius: '20px',
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(191, 168, 116, 0.1)',
          border: '1px solid rgba(191, 168, 116, 0.15)'
        }}
      >
        {/* Central Care Logo */}
        <img
          src={getPublicUrl("cc.png")}
          alt="Central Care Logo"
          style={{
            width: 'var(--central-logo-size, clamp(120px, 15vw, 200px))',
            height: 'auto',
            marginBottom: 'clamp(16px, 2vh, 24px)',
            display: 'block',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 60ms both'
          }}
        />
        <h1
          style={{
            fontSize: 'var(--central-title-size, clamp(30px, 4vw, 56px))',
            fontWeight: '900',
            marginBottom: 'clamp(14px, 2.2vh, 26px)',
            letterSpacing: '2.2px',
            background: 'linear-gradient(135deg, #bfa874 0%, #e3d1a3 50%, #bfa874 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase',
            textShadow: '0 0 30px rgba(191, 168, 116, 0.4), 0 4px 20px rgba(191, 168, 116, 0.3)',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
            display: 'inline-block',
            filter: 'drop-shadow(0 2px 8px rgba(191, 168, 116, 0.45))'
          }}
        >
          CENTRAL MEDICALCARE
        </h1>

        <p
          style={{
            fontSize: 'var(--central-text-size, clamp(14px, 1.6vw, 22px))',
            lineHeight: '1.85',
            marginBottom: 'clamp(18px, 2.6vh, 28px)',
            color: '#111827',
            fontWeight: 500,
            letterSpacing: '0.25px',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.10), 0 0 0 1px rgba(191, 168, 116, 0.14)',
            borderLeft: '4px solid #bfa874'
          }}
        >
          CENTRAL MEDICALCARE is a comprehensive medical and aesthetic center located in Al-Khobar, Saudi Arabia. The center provides high-quality medical services including dermatology, laser treatments, and aesthetic care.
        </p>

        {/* Info + Video side-by-side */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(18px, 2.5vw, 34px)',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            marginBottom: 'clamp(24px, 3vh, 36px)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
          }}
        >
          {/* Text info (Managers / Mobile / Email / Website) */}
          <div
            style={{
              fontSize: 'var(--central-info-size, clamp(14px, 1.5vw, 20px))',
              lineHeight: '1.9',
              color: '#111827',
              flex: '1 1 auto',
              minWidth: '280px',
              padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 240, 0.95) 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(191, 168, 116, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(191, 168, 116, 0.22)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: 'clamp(10px, 1.4vh, 14px)',
                paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                borderBottom: '1px solid rgba(191, 168, 116, 0.18)'
              }}
            >
              <strong style={{ minWidth: '110px', fontWeight: 800, color: '#bfa874', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(191, 168, 116, 0.2)' }}>Managers:</strong>
              <span style={{ fontWeight: 600, letterSpacing: '0.2px' }}>Dr. Atif Idress.</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: 'clamp(10px, 1.4vh, 14px)',
                paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                borderBottom: '1px solid rgba(191, 168, 116, 0.18)'
              }}
            >
              <strong style={{ minWidth: '110px', fontWeight: 800, color: '#bfa874', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(191, 168, 116, 0.2)' }}>Mobile:</strong>
              <span style={{ fontWeight: 600, letterSpacing: '0.2px', fontFamily: 'monospace' }}>050 471 5053</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: 'clamp(10px, 1.4vh, 14px)'
              }}
            >
              <strong style={{ minWidth: '110px', fontWeight: 800, flexShrink: 0, color: '#bfa874', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(191, 168, 116, 0.2)' }}>Email:</strong>
              <span
                style={{
                  whiteSpace: 'nowrap',
                  flex: '1 1 auto',
                  minWidth: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: 600,
                  letterSpacing: '0.2px'
                }}
              >
                hshash@centralmedicalcare.com
              </span>
            </div>
          </div>

          {/* Video image (same row) - Smaller size */}
          <div
            style={{
              position: 'relative',
              flex: '0 0 auto',
              maxWidth: 'var(--central-internal-image-size, min(170px, 18vw))',
              minWidth: '150px',
              width: 'clamp(150px, 18vw, 190px)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
            }}
          >
            <img
              src={getPublicUrl('central-thmb.jpg')}
              alt="Central Medicalcare internal"
              onError={(e) => {
                const fallback = selectedCompany?.bgImage;
                if (fallback && e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
              style={{
                width: '100%',
                height: 'auto',
                minHeight: 'clamp(120px, 15vh, 160px)',
                maxHeight: 'clamp(120px, 15vh, 160px)',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Play Video Button on top of image */}
            <button
              onClick={async () => {
                if (centralMedicalcareVideoContainerRef.current) {
                  try {
                    setCentralMedicalcareVideoFullscreen(true);
                    setCentralMedicalcareVideoPlaying(true);

                    let fullscreenPromise;
                    if (centralMedicalcareVideoContainerRef.current.requestFullscreen) {
                      fullscreenPromise = centralMedicalcareVideoContainerRef.current.requestFullscreen();
                    } else if (centralMedicalcareVideoContainerRef.current.webkitRequestFullscreen) {
                      fullscreenPromise = centralMedicalcareVideoContainerRef.current.webkitRequestFullscreen();
                    } else if (centralMedicalcareVideoContainerRef.current.msRequestFullscreen) {
                      fullscreenPromise = centralMedicalcareVideoContainerRef.current.msRequestFullscreen();
                    }

                    if (fullscreenPromise) {
                      await fullscreenPromise;
                    }
                  } catch (error) {
                    console.error('Error opening Central Medicalcare video from button:', error);
                  }
                }
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'clamp(8px, 1vw, 12px) clamp(20px, 2.5vw, 28px)',
                fontSize: 'clamp(11px, 1.2vw, 14px)',
                fontWeight: '700',
                color: '#bfa874',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '2px solid #bfa874',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backdropFilter: 'blur(6px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -52%)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
              }}
            >
              <span>Play Video</span>
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#bfa874',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ marginLeft: '2px' }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Bottom row: Buttons + QR Code */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(20px, 2.5vw, 40px)',
            marginTop: 'clamp(8px, 1.6vh, 16px)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both',
            flexWrap: 'wrap'
          }}
        >
          {/* Buttons Container - Visit Website, Our Services, and Learn More */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: viewportSize.width === 1536 && viewportSize.height === 864 ? '2px' : 'clamp(3px, 0.4vh, 5px)',
              flexShrink: 0
            }}
          >
            {/* Visit Website Button */}
            <button
              onClick={() => window.open('https://www.centralmedicalcare.com/', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                background: '#bfa874',
                border: '1px solid #bfa874',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(191, 168, 116, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(191, 168, 116, 0.55)';
                e.currentTarget.style.background = '#c9b584';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(191, 168, 116, 0.4)';
                e.currentTarget.style.background = '#bfa874';
              }}
            >
              Visit Website
            </button>

            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://www.centralmedicalcare.com/', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                background: '#bfa874',
                border: '1px solid #bfa874',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(191, 168, 116, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(191, 168, 116, 0.55)';
                e.currentTarget.style.background = '#c9b584';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(191, 168, 116, 0.4)';
                e.currentTarget.style.background = '#bfa874';
              }}
            >
              Our Services
            </button>

            {/* Learn More Button */}
            <button
              onClick={() => {
                setShowCentralMedicalcareLearnMore(true);
              }}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                background: '#bfa874',
                border: '1px solid #bfa874',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(191, 168, 116, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(191, 168, 116, 0.55)';
                e.currentTarget.style.background = '#c9b584';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(191, 168, 116, 0.4)';
                e.currentTarget.style.background = '#bfa874';
              }}
            >
              Learn More
            </button>
          </div>

          {/* QR Code - Same level as buttons */}
          <div
            style={{
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
              flexShrink: 0,
              alignSelf: 'flex-start',
              marginTop: viewportSize.width === 1536 && viewportSize.height === 864 ? '0px' : 'clamp(8px, 1.6vh, 16px)',
              marginLeft: viewportSize.width === 1536 && viewportSize.height === 864 ? 'auto' : '0px'
            }}
          >
            <img
              src={getPublicUrl("centralcareqr.jpeg")}
              alt="Central Medicalcare QR Code"
              onClick={() => setShowCentralMedicalcareQRModal(true)}
              style={{
                maxWidth: 'var(--central-qr-size, clamp(140px, 16vw, 220px))',
                maxHeight: 'var(--central-qr-size, clamp(140px, 16vw, 220px))',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#ffffff',
                padding: 'clamp(6px, 0.8vw, 12px)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, boxShadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
