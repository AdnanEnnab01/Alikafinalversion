import React, { useState, useRef, useCallback } from 'react';
import { useVideoFullscreen } from '../hooks/useVideoFullscreen';
import { getPublicUrl } from '../utils/pathUtils';

export default function GulfDorrahDetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowGulfDorrahLearnMore, 
  setShowGulfDorrahQRModal,
  viewportSize
}) {
  const [, setDorrahVideoPlaying] = useState(false);
  const [dorrahVideoFullscreen, setDorrahVideoFullscreen] = useState(false);
  const dorrahVideoContainerRef = useRef(null);

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
  useVideoFullscreen(setDorrahVideoPlaying, setDorrahVideoFullscreen);

  return (
    <>
      {/* Al Dorrah Background (Cloudinary video) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
          backgroundColor: '#0b1220',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={selectedCompany.bgImage}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35,
            transform: 'translateZ(0)'
          }}
        >
          <source
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/dorrah-gif-ezgif.com-gif-to-mp4-converter_inb3qq.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay to keep text readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.55)'
          }}
        />
      </div>
      
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
            const isDorrahLogo = company.id === 7;

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
                    background: isDorrahLogo ? '#ffffff' : '#E8E8E8',
                    border: isDorrahLogo
                      ? '2px solid #33d18f'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isDorrahLogo
                      ? '0 0 25px rgba(51, 209, 143, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isDorrahLogo ? 2 : 1,
                    transform: isDorrahLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isDorrahLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(51, 209, 143, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDorrahLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(51, 209, 143, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* Al Dorrah Video - Hidden for fullscreen */}
      <div
        ref={dorrahVideoContainerRef}
        style={{
          position: 'fixed',
          right: dorrahVideoFullscreen ? '0' : '-9999px',
          top: dorrahVideoFullscreen ? '0' : '-9999px',
          width: dorrahVideoFullscreen ? '100vw' : '0',
          height: dorrahVideoFullscreen ? '100vh' : '0',
          zIndex: dorrahVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {dorrahVideoFullscreen && (
          <video
            key={`dorrah-video-${dorrahVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/dorrah_ei9ijx.mp4"
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
              closeVideo(setDorrahVideoFullscreen, setDorrahVideoPlaying);
            }}
          />
        )}
        {dorrahVideoFullscreen && (
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
              setDorrahVideoFullscreen(false);
              setDorrahVideoPlaying(false);
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

      {/* Al Dorrah Content - Right Side */}
      <div
        className="dorrah-content"
        style={{
          position: 'fixed',
          top: '48%',
          right: 'clamp(40px, 4vw, 80px)',
          transform: 'translateY(-50%)',
          maxWidth: 'var(--dorrah-content-max-width, clamp(600px, 50vw, 900px))',
          maxHeight: 'calc(100vh - clamp(60px, 6vh, 100px))',
          color: '#ffffff',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11,
          overflowY: 'visible',
          overflowX: 'visible'
        }}
      >
        <h1
          style={{
            fontSize: 'var(--dorrah-title-size, clamp(28px, 3.8vw, 52px))',
            fontWeight: '900',
            marginBottom: 'clamp(6px, 1vh, 12px)',
            letterSpacing: '1.6px',
            color: '#33d18f',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
          }}
        >
          GULF DORRAH REAL
        </h1>
        <h1
          style={{
            fontSize: 'var(--dorrah-title-size, clamp(28px, 3.8vw, 52px))',
            fontWeight: '900',
            marginBottom: 'clamp(12px, 2vh, 24px)',
            letterSpacing: '1.6px',
            color: '#29a4ff',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both'
          }}
        >
          ESTATE DEVELOPMENT
        </h1>

        <p
          style={{
            fontSize: 'var(--dorrah-text-size, clamp(15px, 1.7vw, 24px))',
            lineHeight: '1.75',
            marginBottom: 'clamp(20px, 3vh, 32px)',
            color: '#e5f8ff',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(0, 0, 0, 0.45)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(51, 209, 143, 0.1), -4px 0 16px rgba(51, 209, 143, 0.4)',
            borderLeft: '5px solid #33d18f',
            position: 'relative'
          }}
        >
          Gulf Dorrah Real Estate Development is a Saudi-based company specializing in luxury residential properties with modern designs and high-quality construction. The company focuses on creating community apartments that offer comfort, privacy, and contemporary design, ensuring long-term value for families and residents. Each project is carefully developed with attention to detail, quality materials, and practical layouts that support a modern lifestyle.
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
              fontSize: 'var(--dorrah-info-size, clamp(13px, 1.4vw, 20px))',
              lineHeight: '1.8',
              color: '#ffffff',
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
              <span>Fadel Muhialdeen.</span>
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
              <span>050 084 0440</span>
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
                fadel@gulfdorrah.com
              </span>
            </div>
          </div>

          {/* Dorrah Internal Video Poster with Play overlay */}
          <div
            style={{
              position: 'relative',
              maxWidth: 'min(1040px, 55vw)',
              width: '100%',
              flex: 1.15
            }}
          >
            <img
              src={getPublicUrl('dorrah-thmb.jpeg')}
              alt="Dorrah internal"
              onError={(e) => {
                const fallback = selectedCompany?.bgImage;
                if (fallback && e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
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
                if (dorrahVideoContainerRef.current) {
                  try {
                    setDorrahVideoFullscreen(true);
                    setDorrahVideoPlaying(true);

                    let fullscreenPromise;
                    if (dorrahVideoContainerRef.current.requestFullscreen) {
                      fullscreenPromise = dorrahVideoContainerRef.current.requestFullscreen();
                    } else if (dorrahVideoContainerRef.current.webkitRequestFullscreen) {
                      fullscreenPromise = dorrahVideoContainerRef.current.webkitRequestFullscreen();
                    } else if (dorrahVideoContainerRef.current.msRequestFullscreen) {
                      fullscreenPromise = dorrahVideoContainerRef.current.msRequestFullscreen();
                    }

                    if (fullscreenPromise) {
                      await fullscreenPromise;
                    }
                  } catch (error) {
                    console.error('Error opening Dorrah video from button:', error);
                  }
                }
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'var(--dorrah-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                fontSize: 'var(--dorrah-button-font, clamp(16px, 1.8vw, 22px))',
                fontWeight: '700',
                color: '#33d18f',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '2px solid #33d18f',
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
                  background: '#33d18f',
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

        {/* Buttons and QR Code Container - Horizontal layout */}
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
              onClick={() => window.open('https://dorrah.topacademy.website/#', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                border: '1px solid #33d18f',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(51, 209, 143, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(51, 209, 143, 0.55)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(51, 209, 143, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
              }}
            >
              Visit Website
            </button>

            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://dorrah.topacademy.website/#', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                border: '1px solid #33d18f',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(51, 209, 143, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(51, 209, 143, 0.55)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(51, 209, 143, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
              }}
            >
              Our Services
            </button>

            {/* Learn More Button */}
            <button
              onClick={() => setShowGulfDorrahLearnMore(true)}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                fontSize: 'clamp(13px, 1.3vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                border: '1px solid #33d18f',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(51, 209, 143, 0.4)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(51, 209, 143, 0.55)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(51, 209, 143, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
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
              marginLeft: viewportSize.width === 1536 && viewportSize.height === 864 ? 'auto' : 
                          (viewportSize.width === 1436 && viewportSize.height === 864 ? 'clamp(160px, 20vw, 280px)' : '0px')
            }}
          >
            <img
              src={getPublicUrl("dorrahqr1.jpeg")}
              alt="Gulf Dorrah QR Code"
              onClick={() => setShowGulfDorrahQRModal(true)}
              style={{
                maxWidth: 'var(--dorrah-qr-size, clamp(140px, 16vw, 220px))',
                maxHeight: 'var(--dorrah-qr-size, clamp(140px, 16vw, 220px))',
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
