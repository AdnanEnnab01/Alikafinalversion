import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function AMTDetailView({ selectedCompany, companies, setSelectedCompany, setShowAMTLearnMore, setShowAMTQRModal }) {
  const [amtVideoFullscreen, setAmtVideoFullscreen] = useState(false);
  const [amtVideoPlaying, setAmtVideoPlaying] = useState(false);
  const amtVideoContainerRef = useRef(null);

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

  // Handle fullscreen change for AMT
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setAmtVideoFullscreen(false);
        setAmtVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      {/* AMT Background Image */}
      <div style={{
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
      }} />
      
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
            const isAMTLogo = company.id === 8;

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
                    // AMT logo: keep same white panel but make it pop with glow and border
                    background: isAMTLogo ? '#ffffff' : '#E8E8E8',
                    border: isAMTLogo
                      ? '2px solid #ff4b4b'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isAMTLogo
                      ? '0 0 25px rgba(255, 75, 75, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isAMTLogo ? 2 : 1,
                    transform: isAMTLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isAMTLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(255, 75, 75, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isAMTLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(255, 75, 75, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* AMT Video - Hidden for fullscreen */}
      <div
        ref={amtVideoContainerRef}
        style={{
          position: 'fixed',
          right: amtVideoFullscreen ? '0' : '-9999px',
          top: amtVideoFullscreen ? '0' : '-9999px',
          width: amtVideoFullscreen ? '100vw' : '0',
          height: amtVideoFullscreen ? '100vh' : '0',
          zIndex: amtVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {amtVideoFullscreen && (
          <video
            key={`amt-video-${amtVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/AMT_Company_Profile_Transformation___From_Static_PDF_to_CEO_Video_by_Zuccess_zykzgl.mp4"
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
              closeVideo(setAmtVideoFullscreen, setAmtVideoPlaying);
            }}
          />
        )}
        {amtVideoFullscreen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              // إغلاق fullscreen يدوياً
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
              setAmtVideoFullscreen(false);
              setAmtVideoPlaying(false);
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

      {/* AMT Text Content - Right Side */}
      <div
        className="amt-content"
        style={{
          position: 'fixed',
          top: '48%',
          right: 'clamp(40px, 4vw, 80px)',
          transform: 'translateY(-50%)',
          maxWidth: 'var(--amt-content-max-width, clamp(600px, 50vw, 900px))',
          color: '#1a1a1a',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11
        }}
      >
        <h1
          style={{
            // تصغير حجم عنوان AMT أكثر ليكون خفيفاً ومتناسقاً
            fontSize: 'var(--amt-title-size, clamp(18px, 2.2vw, 28px))',
            fontWeight: '800',
            marginBottom: 'clamp(8px, 1.2vh, 14px)',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
            // تصميم جديد لعنوان AMT مشابه لـ IDC لكن باللون الأحمر
            color: '#ff4b4b',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            padding: 'clamp(4px, 0.6vh, 8px) clamp(10px, 1.2vw, 16px)',
            borderRadius: '999px',
            border: '2px solid rgba(255, 75, 75, 0.85)',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.18)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'normal',
            textAlign: 'center',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            position: 'relative',
            zIndex: 30
          }}
        >
          ADVANCED MICRO TECHNOLOGIES (AMT)
        </h1>

        <p
          style={{
            fontSize: 'var(--amt-text-size, clamp(16px, 1.9vw, 26px))',
            lineHeight: '1.85',
            marginBottom: 'clamp(24px, 3.5vh, 36px)',
            color: '#1a1a1a',
            fontWeight: '500',
            letterSpacing: '0.3px',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 75, 75, 0.1)',
            borderLeft: '4px solid #ff4b4b'
          }}
        >
          is a Saudi company providing IT and telecommunications services, including data center design, cybersecurity, and low current systems such as surveillance and alarms.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(26px, 4.2vw, 60px)',
            alignItems: 'center',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
            marginBottom: 'clamp(10px, 1.8vh, 18px)'
          }}
        >
          {/* Text info (Managers / Mobile / Email / Website) */}
          <div
            style={{
              fontSize: 'var(--amt-info-size, clamp(14px, 1.5vw, 21px))',
              lineHeight: '1.9',
              color: '#1a1a1a',
              flex: 0.9,
              padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 250, 0.95) 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 75, 75, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 75, 75, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: 'clamp(10px, 1.4vh, 14px)',
                paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                borderBottom: '1px solid rgba(255, 75, 75, 0.15)'
              }}
            >
              <strong style={{ 
                minWidth: 'auto', 
                fontWeight: 800, 
                color: '#ff4b4b',
                fontSize: 'clamp(14px, 1.5vw, 21px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(255, 75, 75, 0.2)'
              }}>CEO:</strong>
              <span style={{ 
                fontWeight: 600,
                color: '#2d2d2d',
                letterSpacing: '0.2px'
              }}>Eng. Eyad Matar</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: 'clamp(10px, 1.4vh, 14px)',
                paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                borderBottom: '1px solid rgba(255, 75, 75, 0.15)'
              }}
            >
              <strong style={{ 
                minWidth: 'auto', 
                fontWeight: 800, 
                color: '#ff4b4b',
                fontSize: 'clamp(14px, 1.5vw, 21px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(255, 75, 75, 0.2)'
              }}>Mobile:</strong>
              <span style={{ 
                fontWeight: 600,
                color: '#2d2d2d',
                letterSpacing: '0.2px',
                fontFamily: 'monospace'
              }}>050 582 7033</span>
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
                color: '#ff4b4b',
                fontSize: 'clamp(14px, 1.5vw, 21px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(255, 75, 75, 0.2)'
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
                eyad.matar@amt-arabia.net
              </span>
            </div>
          </div>

          {/* AMT Internal Image with Play Video overlay - aligned to the right of the text */}
          <div
            style={{
              position: 'relative',
              maxWidth: 'min(1040px, 55vw)', // make video image significantly larger
              width: '100%',
              flex: 1.15
            }}
          >
            <video
              src="https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ecx4u7.mp4"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '16px',
                boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
              muted
              playsInline
              preload="auto"
              title="AMT Video Thumbnail"
            />
            {/* Play Video Button on top of image */}
            <button
              onClick={async () => {
                if (amtVideoContainerRef.current) {
                  try {
                    setAmtVideoFullscreen(true);
                    setAmtVideoPlaying(true);

                    let fullscreenPromise;
                    if (amtVideoContainerRef.current.requestFullscreen) {
                      fullscreenPromise = amtVideoContainerRef.current.requestFullscreen();
                    } else if (amtVideoContainerRef.current.webkitRequestFullscreen) {
                      fullscreenPromise = amtVideoContainerRef.current.webkitRequestFullscreen();
                    } else if (amtVideoContainerRef.current.msRequestFullscreen) {
                      fullscreenPromise = amtVideoContainerRef.current.msRequestFullscreen();
                    }

                    if (fullscreenPromise) {
                      await fullscreenPromise;
                    }
                  } catch (error) {
                    console.error('Error opening AMT video from button:', error);
                  }
                }
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'var(--amt-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                fontSize: 'var(--amt-button-font, clamp(16px, 1.8vw, 22px))',
                fontWeight: '700',
                color: '#ff4b4b',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '2px solid #ff4b4b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
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
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#ff4b4b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg
                  width="14"
                  height="14"
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
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'clamp(20px, 3vw, 35px)',
            marginTop: 'clamp(8px, 1.6vh, 16px)',
            paddingBottom: 'clamp(10px, 2vh, 20px)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
          }}
        >
          {/* Buttons Container - Visit Website, Our Services, and Learn More */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(12px, 1.5vh, 18px)',
            animation: 'fadeInUp 0.8s ease-out 0.7s both'
          }}>
            {/* Visit Website Button */}
            <button
              onClick={() => window.open('https://amt-arabia.net/en', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#0b0b0b',
                background: '#ffeded',
                border: '1px solid #ff4b4b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255, 75, 75, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                minWidth: 'clamp(200px, 20vw, 280px)',
                width: 'clamp(200px, 20vw, 280px)',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 75, 75, 0.55)';
                e.currentTarget.style.background = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 75, 75, 0.4)';
                e.currentTarget.style.background = '#ffeded';
              }}
            >
              Visit Website
            </button>
            
            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://amt-arabia.net/en/solution-details', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#0b0b0b',
                background: '#ffeded',
                border: '1px solid #ff4b4b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255, 75, 75, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                minWidth: 'clamp(200px, 20vw, 280px)',
                width: 'clamp(200px, 20vw, 280px)',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 75, 75, 0.55)';
                e.currentTarget.style.background = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 75, 75, 0.4)';
                e.currentTarget.style.background = '#ffeded';
              }}
            >
              Our Services
            </button>
            
            {/* Learn More Button */}
            <button
              onClick={() => setShowAMTLearnMore(true)}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#0b0b0b',
                background: '#ffeded',
                border: '1px solid #ff4b4b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255, 75, 75, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                minWidth: 'clamp(200px, 20vw, 280px)',
                width: 'clamp(200px, 20vw, 280px)',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 75, 75, 0.55)';
                e.currentTarget.style.background = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 75, 75, 0.4)';
                e.currentTarget.style.background = '#ffeded';
              }}
            >
              Learn More
            </button>
          </div>
          
          {/* QR Code at bottom, next to buttons */}
          <div
            style={{
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
              flexShrink: 0
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/amtqr.jpeg"}
              alt="AMT QR Code"
              onClick={() => setShowAMTQRModal(true)}
              style={{
                maxWidth: 'var(--amt-qr-size, clamp(140px, 16vw, 220px))',
                maxHeight: 'var(--amt-qr-size, clamp(140px, 16vw, 220px))',
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
