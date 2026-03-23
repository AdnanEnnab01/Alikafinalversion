import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getPublicUrl } from '../utils/pathUtils';

export default function IDCDetailView({ selectedCompany, companies, setSelectedCompany, setShowIDCLearnMore, setShowIDCQRModal }) {
  const [idcVideoFullscreen, setIdcVideoFullscreen] = useState(false);
  const [idcVideoPlaying, setIdcVideoPlaying] = useState(false);
  const idcVideoContainerRef = useRef(null);

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

  // Handle fullscreen change for IDC video
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setIdcVideoFullscreen(false);
        setIdcVideoPlaying(false);
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
      {/* Company Logos Grid - Left Side (same style as AMT) */}
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
            const isIDCLogo = company.id === 1;

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
                    background: isIDCLogo ? '#ffffff' : '#E8E8E8',
                    border: isIDCLogo
                      ? '2px solid #0b6fbf'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isIDCLogo
                      ? '0 0 25px rgba(11, 111, 191, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isIDCLogo ? 2 : 1,
                    transform: isIDCLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isIDCLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(11, 111, 191, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isIDCLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(11, 111, 191, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* IDC Logo - Top Left */}
      <div style={{
        position: 'fixed',
        top: 'var(--idc-logo-top, clamp(10px, 1.5vh, 30px))',
        left: 'var(--idc-logo-left, clamp(30px, 3vw, 60px))',
        zIndex: 11,
        animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        <img
          src={selectedCompany.modalLogo || selectedCompany.logo}
          alt={selectedCompany.name}
          style={{
            maxWidth: 'var(--idc-logo-size, clamp(200px, 18vw, 300px))',
            maxHeight: 'var(--idc-logo-size, clamp(200px, 18vw, 300px))',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
          }}
        />
      </div>

      {/* IDC Text Content - Right Side (similar layout to AMT) */}
      <div
        className="idc-content"
        style={{
          maxWidth: 'var(--idc-content-max-width, 720px)',
          color: '#0b2239',
          direction: 'ltr',
          textAlign: 'left'
        }}
      >
        <h1 style={{
          fontSize: 'var(--idc-title-size, clamp(30px, 3.8vw, 46px))',
          fontWeight: '900',
          marginBottom: 'clamp(16px, 2.5vh, 24px)',
          letterSpacing: '2.2px',
          textTransform: 'uppercase',
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
          // تصميم جديد: شريط عنوان داخل مستطيل أبيض مع حدود زرقاء
          color: '#0b6fbf',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          padding: 'clamp(8px, 1vh, 12px) clamp(18px, 2vw, 26px)',
          borderRadius: '999px',
          border: '2px solid rgba(11, 111, 191, 0.85)',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.18)',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          // Make sure the IDC title itself is always the topmost text layer
          position: 'relative',
          zIndex: 30
        }}>
          IDC CONTRACTING COMPANY
        </h1>

        <p
          style={{
            fontSize: 'var(--idc-text-size, clamp(14px, 1.5vw, 20px))',
            lineHeight: '1.85',
            marginBottom: 'clamp(24px, 3.5vh, 36px)',
            color: '#0b2239',
            fontWeight: '500',
            letterSpacing: '0.3px',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(11, 111, 191, 0.1)',
            borderLeft: '4px solid #0b6fbf'
          }}
        >
          IDC Contracting Company is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). IDC specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
        </p>

        {/* Info + Video row (aligned like AMT) */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(20px, 4vw, 40px)',
            alignItems: 'flex-start',
            marginTop: 'clamp(12px, 1.8vh, 20px)',
            animation: 'fadeInUp 0.8s ease-out 0.6s both'
          }}
        >
          {/* Info block (Managers / Mobile / Email / Website) - All in one line */}
          <div
            style={{
              fontSize: 'var(--idc-info-size, clamp(14px, 1.5vw, 20px))',
              lineHeight: '1.9',
              color: '#0b2239',
              flex: 1,
              padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 248, 255, 0.95) 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(11, 111, 191, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(11, 111, 191, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(10px, 1.4vh, 14px)'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              paddingBottom: 'clamp(8px, 1.2vh, 12px)',
              borderBottom: '1px solid rgba(11, 111, 191, 0.15)'
            }}>
              <strong style={{ 
                fontWeight: 800, 
                color: '#0b6fbf',
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(11, 111, 191, 0.2)',
                minWidth: 'auto'
              }}>Managers:</strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px'
              }}>Bassam Al Masri.</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              paddingBottom: 'clamp(8px, 1.2vh, 12px)',
              borderBottom: '1px solid rgba(11, 111, 191, 0.15)'
            }}>
              <strong style={{ 
                fontWeight: 800, 
                color: '#0b6fbf',
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(11, 111, 191, 0.2)',
                minWidth: 'auto'
              }}>Mobile:</strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                fontFamily: 'monospace'
              }}>050 833 8830</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0'
            }}>
              <strong style={{ 
                fontWeight: 800, 
                color: '#0b6fbf',
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(11, 111, 191, 0.2)',
                minWidth: 'auto'
              }}>Email:</strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>bassam.almasri@idc-arabia.com</span>
            </div>
          </div>

          {/* IDC Internal Image with Play Video overlay (next to info, height matches contact info) */}
          <div
            style={{
              position: 'relative',
              flex: '0 0 var(--idc-video-width, clamp(220px, 22vw, 340px))',
              alignSelf: 'flex-start'
            }}
          >
            <img
              src={getPublicUrl("idc-internal.jpg")}
              alt="IDC Contracting"
              style={{
                width: '100%',
                height: 'var(--idc-video-height, clamp(180px, 22vh, 260px))',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '16px',
                boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
              }}
            />

            <button
              onClick={async () => {
                if (idcVideoContainerRef.current) {
                  try {
                    setIdcVideoFullscreen(true);
                    setIdcVideoPlaying(true);

                    let fullscreenPromise;
                    if (idcVideoContainerRef.current.requestFullscreen) {
                      fullscreenPromise = idcVideoContainerRef.current.requestFullscreen();
                    } else if (idcVideoContainerRef.current.webkitRequestFullscreen) {
                      fullscreenPromise = idcVideoContainerRef.current.webkitRequestFullscreen();
                    } else if (idcVideoContainerRef.current.msRequestFullscreen) {
                      fullscreenPromise = idcVideoContainerRef.current.msRequestFullscreen();
                    }

                    if (fullscreenPromise) {
                      await fullscreenPromise;
                    }
                  } catch (error) {
                    console.error('Error opening IDC video from button:', error);
                  }
                }
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'var(--idc-button-padding, clamp(12px, 1.4vw, 18px) clamp(28px, 2.6vw, 40px))',
                fontSize: 'var(--idc-button-font, clamp(14px, 1.4vw, 20px))',
                fontWeight: 700,
                color: '#0b6fbf',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '2px solid #0b6fbf',
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
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#0b6fbf',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg
                  width="12"
                  height="12"
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

        {/* Bottom row: All three buttons + QR Code */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'clamp(16px, 2vw, 28px)',
            marginTop: 'clamp(24px, 3vh, 36px)',
            flexWrap: 'wrap'
          }}
        >
          {/* Buttons Container - All three buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(12px, 1.5vh, 18px)',
            animation: 'fadeInUp 0.8s ease-out 0.7s both',
            flex: 1
          }}>
            {/* Visit Website Button */}
            <button
              onClick={() => window.open('https://idc-arabia.com/ar/', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                border: '2px solid #0b6fbf',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                minWidth: 'clamp(200px, 20vw, 280px)',
                width: 'clamp(200px, 20vw, 280px)',
                alignSelf: 'flex-start',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 111, 191, 0.6), 0 0 0 4px rgba(11, 111, 191, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0d7fd4 0%, #0b6fbf 50%, #0d7fd4 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)';
              }}
            >
              Visit Website
            </button>
            
            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://idc-arabia.com/ar/%d8%a7%d9%84%d8%b1%d8%a6%d9%8a%d8%b3%d9%8a%d8%a9/#SERVICES', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                border: '2px solid #0b6fbf',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                minWidth: 'clamp(200px, 20vw, 280px)',
                width: 'clamp(200px, 20vw, 280px)',
                alignSelf: 'flex-start',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 111, 191, 0.6), 0 0 0 4px rgba(11, 111, 191, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0d7fd4 0%, #0b6fbf 50%, #0d7fd4 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)';
              }}
            >
              Our Services
            </button>
            
            {/* Learn More Button */}
            <button
              onClick={() => setShowIDCLearnMore(true)}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                border: '2px solid #0b6fbf',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                minWidth: 'clamp(200px, 20vw, 280px)',
                width: 'clamp(200px, 20vw, 280px)',
                alignSelf: 'flex-start',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 111, 191, 0.6), 0 0 0 4px rgba(11, 111, 191, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0d7fd4 0%, #0b6fbf 50%, #0d7fd4 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)';
              }}
            >
              Learn More
            </button>
          </div>

          <div
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.8s both',
              flexShrink: 0
            }}
          >
            <img
              src={getPublicUrl("idcqr.jpeg")}
              alt="IDC QR Code"
              onClick={() => setShowIDCQRModal(true)}
              style={{
                maxWidth: 'var(--idc-qr-size, clamp(150px, 20vw, 200px))',
                maxHeight: 'var(--idc-qr-size, clamp(150px, 20vw, 200px))',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#ffffff',
                padding: '8px',
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

      {/* IDC Video - Hidden for fullscreen (Cloudinary iframe) */}
      <div
        ref={idcVideoContainerRef}
        style={{
          position: 'fixed',
          right: idcVideoFullscreen ? '0' : '-9999px',
          top: idcVideoFullscreen ? '0' : '-9999px',
          width: idcVideoFullscreen ? '100vw' : '0',
          height: idcVideoFullscreen ? '100vh' : '0',
          zIndex: idcVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {idcVideoFullscreen && (
          <video
            key={`idc-video-${idcVideoFullscreen}`}
            src={getPublicUrl("videosinthemainpages/IDC_Shaping_the_Future_of_Engineering_Industrial_Innovation__نصنع_مستقبل_الهندسة_والابتكار_الصناعي_vprpcf.mp4")}
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
              closeVideo(setIdcVideoFullscreen, setIdcVideoPlaying);
            }}
          />
        )}
        {idcVideoFullscreen && (
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
              setIdcVideoFullscreen(false);
              setIdcVideoPlaying(false);
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
