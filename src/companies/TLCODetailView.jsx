import React, { useState, useRef, useCallback } from 'react';
import { useVideoFullscreen } from '../hooks/useVideoFullscreen';

export default function TLCODetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowPartners,
  setShowTLCOQRModal,
  closeVideo
}) {
  const [tlcoVideoPlaying, setTlcoVideoPlaying] = useState(false);
  const [tlcoVideoFullscreen, setTlcoVideoFullscreen] = useState(false);
  const tlcoVideoContainerRef = useRef(null);

  // Handle fullscreen change
  useVideoFullscreen(setTlcoVideoPlaying, setTlcoVideoFullscreen);

  return (
    <>
      {/* Company Logos Grid - Left Side (same style as IDC / AMT / GSG) */}
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
            const isTLCOLogo = company.id === 10;

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
                    background: isTLCOLogo ? '#ffffff' : '#E8E8E8',
                    border: isTLCOLogo
                      ? '2px solid #22c55e'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isTLCOLogo
                      ? '0 0 25px rgba(34, 197, 94, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isTLCOLogo ? 2 : 1,
                    transform: isTLCOLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isTLCOLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(34, 197, 94, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isTLCOLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(34, 197, 94, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* TLCO Video - Hidden for fullscreen */}
      <div
        ref={tlcoVideoContainerRef}
        style={{
          position: 'fixed',
          right: tlcoVideoFullscreen ? '0' : '-9999px',
          top: tlcoVideoFullscreen ? '0' : '-9999px',
          width: tlcoVideoFullscreen ? '100vw' : '0',
          height: tlcoVideoFullscreen ? '100vh' : '0',
          zIndex: tlcoVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {tlcoVideoFullscreen && (
          <video
            key={`tlco-video-${tlcoVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/tlco_onczo4.mp4"
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
              closeVideo(setTlcoVideoFullscreen, setTlcoVideoPlaying);
            }}
          />
        )}
        {tlcoVideoFullscreen && (
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
              setTlcoVideoFullscreen(false);
              setTlcoVideoPlaying(false);
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

      {/* TLCO Text Content + Image/QR - Right Side */}
      <div
        className="tlco-content-container"
        style={{
          position: 'fixed',
          top: 'clamp(50%, 52vh, 55%)',
          right: 'clamp(40px, 6vw, 120px)',
          transform: 'translateY(-50%)',
          maxWidth: 'var(--tlco-content-max-width, clamp(520px, 46vw, 760px))',
          zIndex: 20,
          color: '#0b3b25',
          direction: 'ltr',
          textAlign: 'left'
        }}
      >
        {/* Big TLCO Logo above the title */}
        <div
          style={{
            marginBottom: 'clamp(10px, 1.5vh, 18px)',
            animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <img
            src={selectedCompany.modalLogo || selectedCompany.logo}
            alt={selectedCompany.name}
            style={{
              maxWidth: 'var(--tlco-logo-size, clamp(180px, 22vw, 260px))',
              maxHeight: 'var(--tlco-logo-size, clamp(180px, 22vw, 260px))',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.3))'
            }}
          />
        </div>

        <h1
          style={{
            fontSize: 'var(--tlco-title-size, clamp(18px, 2.2vw, 28px))',
            fontWeight: '800',
            marginBottom: 'clamp(8px, 1.2vh, 14px)',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
            color: '#008c4a',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            padding: 'clamp(4px, 0.6vh, 8px) clamp(10px, 1.2vw, 16px)',
            borderRadius: '999px',
            border: '2px solid rgba(0, 140, 74, 0.85)',
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
          ENVIRONMENTAL TESTING AND LABORATORIES
        </h1>

        <p
          style={{
            fontSize: 'var(--tlco-text-size, clamp(14px, 1.6vw, 22px))',
            lineHeight: '1.85',
            marginBottom: 'clamp(24px, 3.5vh, 36px)',
            color: '#0b3b25',
            fontWeight: '500',
            letterSpacing: '0.3px',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 140, 74, 0.1)',
            borderLeft: '4px solid #008c4a'
          }}
        >
          Environmental Testing and Laboratory Company (ETLCO) is a leading provider of comprehensive environmental
          solutions, offering cutting-edge testing, analysis, and consultancy services. With a commitment to
          sustainability and regulatory compliance, we help industries and organizations minimize their environmental
          impact while ensuring the highest standards of quality and safety.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(20px, 4vw, 36px)',
            alignItems: 'flex-start',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
          }}
        >
          {/* Contact Info (Left Column) */}
          <div
            style={{
              fontSize: 'var(--tlco-info-size, clamp(14px, 1.5vw, 21px))',
              lineHeight: '1.9',
              color: '#0b3b25',
              flex: '1',
              padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 255, 248, 0.95) 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 140, 74, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(0, 140, 74, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginBottom: 'clamp(10px, 1.4vh, 14px)',
              paddingBottom: 'clamp(8px, 1.2vh, 12px)',
              borderBottom: '1px solid rgba(0, 140, 74, 0.15)'
            }}>
              <strong
                style={{
                  fontWeight: 800,
                  color: '#008c4a',
                  fontSize: 'clamp(14px, 1.5vw, 21px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(0, 140, 74, 0.2)',
                  minWidth: 'auto'
                }}
              >
                Managers:
              </strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px'
              }}>Mr.Elyas Othman.</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginBottom: 'clamp(10px, 1.4vh, 14px)',
              paddingBottom: 'clamp(8px, 1.2vh, 12px)',
              borderBottom: '1px solid rgba(0, 140, 74, 0.15)'
            }}>
              <strong
                style={{
                  fontWeight: 800,
                  color: '#008c4a',
                  fontSize: 'clamp(14px, 1.5vw, 21px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(0, 140, 74, 0.2)',
                  minWidth: 'auto'
                }}
              >
                Mobile:
              </strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                fontFamily: 'monospace'
              }}>053 927 5739</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0'
            }}>
              <strong
                style={{
                  fontWeight: 800,
                  color: '#008c4a',
                  fontSize: 'clamp(14px, 1.5vw, 21px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(0, 140, 74, 0.2)',
                  minWidth: 'auto'
                }}
              >
                Email:
              </strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>G.M@etlco.com.sa</span>
            </div>
          </div>

          {/* TLCO Internal Image + QR (Right Column) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(10px, 1.8vh, 16px)',
              flexShrink: 0
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(190px, 21vw, 260px)'
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/tlco-internal1.png"}
                alt="TLCO Internal"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  animation:
                    'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both, tlcoFloat 4s ease-in-out 1200ms infinite'
                }}
              />

              {/* Play Button on TLCO Image - styled like PLAY VIDEO pill button */}
              {!tlcoVideoFullscreen && (
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    if (tlcoVideoContainerRef.current) {
                      try {
                        setTlcoVideoFullscreen(true);
                        setTlcoVideoPlaying(true);

                        let fullscreenPromise;
                        if (tlcoVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = tlcoVideoContainerRef.current.requestFullscreen();
                        } else if (tlcoVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = tlcoVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (tlcoVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = tlcoVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding:
                      'clamp(10px, 1.2vw, 16px) clamp(26px, 2.4vw, 40px)',
                    fontSize: 'clamp(14px, 1.4vw, 20px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: 'rgba(0, 140, 74, 0.95)',
                    border: 'none',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 140, 74, 0.6)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(8px, 0.9vw, 12px)',
                    backdropFilter: 'blur(4px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -52%)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 30px rgba(0, 140, 74, 0.75)';
                    e.currentTarget.style.background = 'rgba(0, 160, 90, 0.98)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 24px rgba(0, 140, 74, 0.6)';
                    e.currentTarget.style.background = 'rgba(0, 140, 74, 0.95)';
                  }}
                >
                  <span>PLAY VIDEO</span>
                  <span
                    style={{
                      width: 'clamp(30px, 2.8vw, 40px)',
                      height: 'clamp(30px, 2.8vw, 40px)',
                      borderRadius: '50%',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg
                      width="clamp(16px, 1.5vw, 22px)"
                      height="clamp(16px, 1.5vw, 22px)"
                      viewBox="0 0 24 24"
                      fill="#008c4a"
                      style={{ marginLeft: '3px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

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
            flex: 1,
            animation: 'fadeInUp 0.8s ease-out 0.7s both'
          }}>
            {/* Visit Website Button */}
            <button
              onClick={() => window.open('https://etlco.com.sa/', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                border: '2px solid #008c4a',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)',
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
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 140, 74, 0.6), 0 0 0 4px rgba(0, 140, 74, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #00a055 0%, #008c4a 50%, #00a055 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)';
              }}
            >
              Visit Website
            </button>
            
            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://etlco.com.sa/services', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                border: '2px solid #008c4a',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)',
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
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 140, 74, 0.6), 0 0 0 4px rgba(0, 140, 74, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #00a055 0%, #008c4a 50%, #00a055 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)';
              }}
            >
              Our Services
            </button>
            
            {/* Learn More Button */}
            <button
              onClick={() => setShowPartners(true)}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                border: '2px solid #008c4a',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)',
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
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 140, 74, 0.6), 0 0 0 4px rgba(0, 140, 74, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #00a055 0%, #008c4a 50%, #00a055 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)';
              }}
            >
              Learn More
            </button>
          </div>

          {/* QR Code - Right Side */}
          <div
            style={{
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
              flexShrink: 0
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/tlcoqr.jpeg"}
              alt="ETLCO QR Code"
              onClick={() => setShowTLCOQRModal(true)}
              style={{
                maxWidth: 'var(--tlco-qr-size, clamp(120px, 16vw, 190px))',
                maxHeight: 'var(--tlco-qr-size, clamp(120px, 16vw, 190px))',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#ffffff',
                padding: 'clamp(6px, 0.8vw, 10px)',
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
