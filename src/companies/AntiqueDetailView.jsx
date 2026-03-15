import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function AntiqueDetailView({ selectedCompany, companies, setSelectedCompany, setShowAntiqueLearnMore, setShowAntiqueQRModal, viewportSize }) {
  const [antiqueVideoFullscreen, setAntiqueVideoFullscreen] = useState(false);
  const [antiqueVideoPlaying, setAntiqueVideoPlaying] = useState(false);
  const antiqueVideoContainerRef = useRef(null);

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

  // Handle fullscreen change for Antique video
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setAntiqueVideoFullscreen(false);
        setAntiqueVideoPlaying(false);
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
      {/* Antique Background Image */}
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
        opacity: 0.3,
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
            const isAntiqueLogo = company.id === 2;

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
                    background: isAntiqueLogo ? '#ffffff' : '#E8E8E8',
                    border: isAntiqueLogo
                      ? '2px solid #f3c06b'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isAntiqueLogo
                      ? '0 0 25px rgba(243, 192, 107, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isAntiqueLogo ? 2 : 1,
                    transform: isAntiqueLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isAntiqueLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(243, 192, 107, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isAntiqueLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(243, 192, 107, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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


      {/* Antique Content - Right Side */}
      <div
        className="antique-content"
        style={{
          position: 'fixed',
          top: '48%',
          right: 'clamp(40px, 4vw, 80px)',
          transform: 'translateY(-50%)',
          maxWidth: 'var(--antique-content-max-width, clamp(600px, 50vw, 900px))',
          color: '#ffffff',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11
        }}
      >
        <h1
          style={{
            fontSize: 'var(--antique-title-size, clamp(28px, 3.8vw, 52px))',
            fontWeight: '900',
            marginTop: 'clamp(20px, 3vh, 40px)',
            marginBottom: 'clamp(12px, 2vh, 24px)',
            letterSpacing: '1.6px',
            color: '#f3c06b',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
          }}
        >
          ANTIQUE CREATIONS
        </h1>

        <p
          style={{
            fontSize: 'var(--antique-text-size, clamp(15px, 1.7vw, 24px))',
            lineHeight: '1.75',
            marginBottom: 'clamp(20px, 3vh, 32px)',
            color: '#f9fafb',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(0, 0, 0, 0.45)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(243, 192, 107, 0.1), -4px 0 16px rgba(243, 192, 107, 0.4)',
            borderLeft: '5px solid #f3c06b',
            position: 'relative'
          }}
        >
          Antique Creations (ACWM) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Antique Creations specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
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
              fontSize: 'var(--antique-info-size, clamp(13px, 1.4vw, 20px))',
              lineHeight: '1.8',
              color: '#f9fafb',
              flex: 0.9,
              padding: 'clamp(8px, 1.2vh, 12px) clamp(12px, 1.6vw, 16px)',
              borderRadius: '10px',
              background: 'rgba(0, 0, 0, 0.45)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: 'clamp(6px, 1vh, 10px)'
              }}
            >
              <strong style={{ minWidth: '110px', fontWeight: 800 }}>Managers:</strong>
              <span>Mohammed Ghanem.</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: 'clamp(6px, 1vh, 10px)'
              }}
            >
              <strong style={{ minWidth: '110px', fontWeight: 800 }}>Mobile:</strong>
              <span>056 952 6806</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: 'clamp(6px, 1vh, 10px)'
              }}
            >
              <strong style={{ minWidth: '110px', fontWeight: 800 }}>Email:</strong>
              <span
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                info@acwm-sa.com
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
             
            </div>
          </div>

          {/* Antique Internal Image with Play Video overlay */}
          <div
            style={{
              position: 'relative',
              maxWidth: 'var(--antique-internal-image-size, min(1040px, 55vw))',
              width: '100%',
              flex: 1.15
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/ant-git.gif"}
              alt="Antique internal"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '16px',
                boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
              }}
            />
            {/* Play Video Button on top of image */}
            <button
              onClick={async () => {
                if (antiqueVideoContainerRef.current) {
                  try {
                    setAntiqueVideoFullscreen(true);
                    setAntiqueVideoPlaying(true);

                    let fullscreenPromise;
                    if (antiqueVideoContainerRef.current.requestFullscreen) {
                      fullscreenPromise = antiqueVideoContainerRef.current.requestFullscreen();
                    } else if (antiqueVideoContainerRef.current.webkitRequestFullscreen) {
                      fullscreenPromise = antiqueVideoContainerRef.current.webkitRequestFullscreen();
                    } else if (antiqueVideoContainerRef.current.msRequestFullscreen) {
                      fullscreenPromise = antiqueVideoContainerRef.current.msRequestFullscreen();
                    }

                    if (fullscreenPromise) {
                      await fullscreenPromise;
                    }
                  } catch (error) {
                    console.error('Error opening Antique video from button:', error);
                  }
                }
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'var(--antique-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                fontSize: 'var(--antique-button-font, clamp(16px, 1.8vw, 22px))',
                fontWeight: '700',
                color: '#f3c06b',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '2px solid #f3c06b',
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
                  background: '#f3c06b',
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
              gap: viewportSize && viewportSize.width === 1536 && viewportSize.height === 864 ? '2px' : 'clamp(3px, 0.4vh, 5px)',
              flexShrink: 0
            }}
          >
            {/* Visit Website Button */}
            <button
              onClick={() => window.open('https://acwm-sa.com', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#000000',
                background: '#f3c06b',
                border: '1px solid #f3c06b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(243, 192, 107, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(243, 192, 107, 0.55)';
                e.currentTarget.style.background = '#f5c97a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(243, 192, 107, 0.4)';
                e.currentTarget.style.background = '#f3c06b';
              }}
            >
              Visit Website
            </button>

            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://acwm-sa.com', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#000000',
                background: '#f3c06b',
                border: '1px solid #f3c06b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(243, 192, 107, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(243, 192, 107, 0.55)';
                e.currentTarget.style.background = '#f5c97a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(243, 192, 107, 0.4)';
                e.currentTarget.style.background = '#f3c06b';
              }}
            >
              Our Services
            </button>

            {/* Learn More Button */}
            <button
              onClick={() => setShowAntiqueLearnMore(true)}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#000000',
                background: '#f3c06b',
                border: '1px solid #f3c06b',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(243, 192, 107, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(243, 192, 107, 0.55)';
                e.currentTarget.style.background = '#f5c97a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(243, 192, 107, 0.4)';
                e.currentTarget.style.background = '#f3c06b';
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
              marginTop: viewportSize && viewportSize.width === 1536 && viewportSize.height === 864 ? '0px' : 'clamp(8px, 1.6vh, 16px)',
              marginLeft: viewportSize && viewportSize.width === 1536 && viewportSize.height === 864 ? 'auto' : '0px'
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/antiqueqr.jpeg"}
              alt="Antique QR Code"
              onClick={() => setShowAntiqueQRModal(true)}
              style={{
                maxWidth: 'var(--antique-qr-size, clamp(140px, 16vw, 220px))',
                maxHeight: 'var(--antique-qr-size, clamp(140px, 16vw, 220px))',
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

      {/* Antique Video - Hidden for fullscreen */}
      <div
        ref={antiqueVideoContainerRef}
        style={{
          position: 'fixed',
          right: antiqueVideoFullscreen ? '0' : '-9999px',
          top: antiqueVideoFullscreen ? '0' : '-9999px',
          width: antiqueVideoFullscreen ? '100vw' : '0',
          height: antiqueVideoFullscreen ? '100vh' : '0',
          zIndex: antiqueVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {antiqueVideoFullscreen && (
          <video
            key={`antique-video-${antiqueVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-04_at_11.38.28_AM_mhpll7.mp4"
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
              closeVideo(setAntiqueVideoFullscreen, setAntiqueVideoPlaying);
            }}
          />
        )}
        {antiqueVideoFullscreen && (
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
              setAntiqueVideoFullscreen(false);
              setAntiqueVideoPlaying(false);
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
    </>
  );
}
