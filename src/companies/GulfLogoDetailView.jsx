import React, { useState, useRef, useCallback } from 'react';
import { useVideoFullscreen } from '../hooks/useVideoFullscreen';
import { getPublicUrl } from '../utils/pathUtils';

export default function GulfLogoDetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowGulfConsult2LearnMore,
  setShowGulfConsultQRModal,
  closeVideo
}) {
  const [gulfLogoVideoPlaying, setGulfLogoVideoPlaying] = useState(false);
  const [gulfLogoVideoFullscreen, setGulfLogoVideoFullscreen] = useState(false);
  const gulfLogoVideoContainerRef = useRef(null);
  const gulfVideoCardTop = 'clamp(44%, 44vh, 48%)';

  // Handle fullscreen change
  useVideoFullscreen(setGulfLogoVideoPlaying, setGulfLogoVideoFullscreen);

  return (
    <>
      {/* Company Logos Grid - Left Side (same as home page) */}
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
            const isGulfConsultLogo = company.id === 12;

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
                    background: isGulfConsultLogo ? '#ffffff' : '#E8E8E8',
                    border: isGulfConsultLogo
                      ? '2px solid #16348a'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isGulfConsultLogo
                      ? '0 0 25px rgba(22, 52, 138, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isGulfConsultLogo ? 2 : 1,
                    transform: isGulfConsultLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isGulfConsultLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(22, 52, 138, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isGulfConsultLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(22, 52, 138, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* Gulf Logo - Top Left */}
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '40px',
        zIndex: 11,
        animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        <img
          src={selectedCompany.modalLogo || selectedCompany.logo}
          alt={selectedCompany.name}
          style={{
            maxWidth: '210px',
            maxHeight: '210px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
          }}
        />
      </div>

      {/* Gulf Consult Content - Right Side (like AMT) */}
      <div className="gulf-consult-content" style={{
        position: 'fixed',
        top: '50%',
        // Leave space for the fixed video card on the far right
        right: 'calc(clamp(16px, 2.5vw, 32px) + var(--gulf-video-width, clamp(220px, 22vw, 320px)) + clamp(24px, 3vw, 48px))',
        transform: 'translateY(-50%)',
        maxWidth: 'var(--gulf-content-max-width, clamp(600px, 50vw, 900px))',
        color: '#ffffff',
        direction: 'ltr',
        textAlign: 'left',
        zIndex: 12
      }}>
        <h1 style={{
          fontSize: 'var(--gulf-title-size, clamp(36px, 4.5vw, 62px))',
          fontWeight: '900',
          marginBottom: 'clamp(16px, 2.5vh, 28px)',
          letterSpacing: '2.2px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e8f0ff 50%, #ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textTransform: 'uppercase',
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
          whiteSpace: 'nowrap',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 4px 20px rgba(255, 255, 255, 0.3)',
          position: 'relative',
          display: 'inline-block',
          filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.5))'
        }}>
          GULF CONSULT
        </h1>

        <p style={{
          fontSize: 'var(--gulf-text-size, clamp(15px, 1.7vw, 24px))',
          lineHeight: '1.85',
          marginBottom: 'clamp(24px, 3.5vh, 36px)',
          color: '#ffffff',
          fontWeight: '500',
          letterSpacing: '0.3px',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
          animation: 'fadeInUp 0.8s ease-out 0.4s both',
          padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.15)',
          borderLeft: '4px solid #16348a',
          backdropFilter: 'blur(10px)'
        }}>
          is an independent multidisciplinary consultancy firm established in 1981 with over 42 years of experience providing high-quality engineering and environmental services across the Gulf region, particularly in the Kingdom of Saudi Arabia.
        </p>

        {/* Contact Information - Lowered down */}
        <div style={{
          fontSize: 'var(--gulf-info-size, clamp(15px, 1.7vw, 24px))',
          lineHeight: '1.9',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          marginTop: 'clamp(40px, 5vh, 60px)',
          animation: 'fadeInUp 0.8s ease-out 0.6s both',
          padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '8px',
            marginBottom: 'clamp(10px, 1.4vh, 14px)',
            paddingBottom: 'clamp(8px, 1.2vh, 12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <strong style={{ 
              fontWeight: '800', 
              flexShrink: 0,
              color: '#e8f0ff',
              fontSize: 'clamp(15px, 1.7vw, 24px)',
              letterSpacing: '0.5px',
              textShadow: '0 1px 2px rgba(22, 52, 138, 0.3)'
            }}>Management:</strong>
            <span style={{ 
              fontWeight: 600,
              letterSpacing: '0.2px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}>CEO: Eng. Faisal Ali AlHarbi, GM: Eng. Rabah Yehya.</span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '8px',
            marginBottom: 'clamp(10px, 1.4vh, 14px)',
            paddingBottom: 'clamp(8px, 1.2vh, 12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <strong style={{ 
              fontWeight: '800', 
              flexShrink: 0,
              color: '#e8f0ff',
              fontSize: 'clamp(15px, 1.7vw, 24px)',
              letterSpacing: '0.5px',
              textShadow: '0 1px 2px rgba(22, 52, 138, 0.3)'
            }}>Mobile:</strong>
            <span style={{ 
              fontWeight: 600,
              letterSpacing: '0.2px',
              fontFamily: 'monospace',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}>055 584 6667</span>
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: 'clamp(6px, 0.8vh, 10px)',
            marginBottom: '0'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px'
            }}>
              <strong style={{ 
                fontWeight: '800', 
                flexShrink: 0,
                color: '#e8f0ff',
                fontSize: 'clamp(15px, 1.7vw, 24px)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(22, 52, 138, 0.3)'
              }}>Email:</strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}>faisal@gulfconsult.com</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginLeft: 'clamp(80px, 8vw, 120px)'
            }}>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}>rabah@gulfconsult.com</span>
            </div>
          </div>
        </div>

        {/* Buttons Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(6px, 0.8vh, 10px)',
          animation: 'fadeInUp 0.8s ease-out 0.7s both',
          marginTop: 'clamp(28px, 3.5vh, 40px)'
        }}>
          {/* Website Button */}
          <button
            onClick={() => window.open('https://www.gulfconsult.com', '_blank', 'noopener,noreferrer')}
            style={{ 
              padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)',
              border: '2px solid #16348a',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
              minWidth: 'clamp(200px, 20vw, 280px)',
              width: 'clamp(200px, 20vw, 280px)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 52, 138, 0.6), 0 0 0 4px rgba(22, 52, 138, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #1e42a5 0%, #16348a 50%, #1e42a5 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)';
            }}
          >
            Visit Website
          </button>
          {/* Our Services Button */}
          <button
            onClick={() => window.open('https://www.gulfconsult.com/our-services', '_blank', 'noopener,noreferrer')}
            style={{
              padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)',
              border: '2px solid #16348a',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
              minWidth: 'clamp(200px, 20vw, 280px)',
              width: 'clamp(200px, 20vw, 280px)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 52, 138, 0.6), 0 0 0 4px rgba(22, 52, 138, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #1e42a5 0%, #16348a 50%, #1e42a5 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)';
            }}
          >
            Our Services
          </button>
          
          {/* Learn More Button */}
          <button
            className="gulf-consult-learn-more-button"
            onClick={() => setShowGulfConsult2LearnMore(true)}
            style={{
              padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)',
              border: '2px solid #16348a',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              minWidth: 'clamp(200px, 20vw, 280px)',
              width: 'clamp(200px, 20vw, 280px)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              marginTop: 'clamp(-4px, -0.5vh, -2px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 52, 138, 0.6), 0 0 0 4px rgba(22, 52, 138, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #1e42a5 0%, #16348a 50%, #1e42a5 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)';
            }}
          >
            Learn More
          </button>
        </div>

        {/* Gulf Video Image with Play Video overlay - Far Right */}
        {!gulfLogoVideoFullscreen && (
          <div
            style={{
              position: 'fixed',
              right: 'clamp(16px, 2.5vw, 32px)',
              top: gulfVideoCardTop,
              transform: 'translateY(-50%)',
              zIndex: 11,
              width: 'var(--gulf-video-width, clamp(220px, 22vw, 320px))',
              animation: 'fadeInUp 0.8s ease-out 0.5s both'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={getPublicUrl("gulfphoto.jpg")}
                alt="Gulf Consult"
                style={{
                  width: '100%',
                  height: 'var(--gulf-video-height, clamp(160px, 20vh, 240px))',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '16px',
                  boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                }}
              />
              <button
                onClick={async () => {
                  if (gulfLogoVideoContainerRef.current) {
                    try {
                      setGulfLogoVideoFullscreen(true);
                      setGulfLogoVideoPlaying(true);

                      let fullscreenPromise;
                      if (gulfLogoVideoContainerRef.current.requestFullscreen) {
                        fullscreenPromise = gulfLogoVideoContainerRef.current.requestFullscreen();
                      } else if (gulfLogoVideoContainerRef.current.webkitRequestFullscreen) {
                        fullscreenPromise = gulfLogoVideoContainerRef.current.webkitRequestFullscreen();
                      } else if (gulfLogoVideoContainerRef.current.msRequestFullscreen) {
                        fullscreenPromise = gulfLogoVideoContainerRef.current.msRequestFullscreen();
                      }

                      if (fullscreenPromise) {
                        await fullscreenPromise;
                      }
                    } catch (error) {
                      console.error('Error opening Gulf video from button:', error);
                    }
                  }
                }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: 'var(--gulf-button-padding, clamp(12px, 1.4vw, 18px) clamp(28px, 2.6vw, 40px))',
                  fontSize: 'var(--gulf-button-font, clamp(14px, 1.4vw, 20px))',
                  fontWeight: 700,
                  color: '#16348a',
                  background: 'rgba(0, 0, 0, 0.65)',
                  border: '2px solid #16348a',
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
                    background: '#16348a',
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
        )}

        {/* QR Code - Below Video */}
        {!gulfLogoVideoFullscreen && (
          <div
            className="gulf-consult-qr-container"
            style={{
              position: 'fixed',
              right: 'clamp(16px, 2.5vw, 32px)',
              top: `calc(${gulfVideoCardTop} + var(--gulf-video-height, clamp(160px, 20vh, 240px)) + clamp(20px, 3vh, 40px))`,
              zIndex: 11,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              animation: 'fadeInUp 0.8s ease-out 0.7s both',
              width: 'clamp(220px, 22vw, 320px)'
            }}
          >
            {/* QR Code - Smaller size */}
            <div
              style={{
                flexShrink: 0,
                zIndex: 13,
                position: 'relative',
                minWidth: 'clamp(80px, 10vw, 120px)',
                maxWidth: 'clamp(80px, 10vw, 120px)'
              }}
            >
              <img
                src={getPublicUrl("gulfconsultrectangleqr.jpeg")}
                alt="Gulf Consult QR Code"
                onClick={() => setShowGulfConsultQRModal(true)}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: 'clamp(80px, 10vw, 120px)',
                  maxHeight: 'clamp(80px, 10vw, 120px)',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  backgroundColor: '#ffffff',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'block',
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
        )}
      </div>

      {/* Gulf Logo Video - Hidden for fullscreen (Cloudinary iframe) */}
      <div
        ref={gulfLogoVideoContainerRef}
        style={{
          position: 'fixed',
          right: gulfLogoVideoFullscreen ? '0' : '-9999px',
          top: gulfLogoVideoFullscreen ? '0' : '-9999px',
          width: gulfLogoVideoFullscreen ? '100vw' : '0',
          height: gulfLogoVideoFullscreen ? '100vh' : '0',
          zIndex: gulfLogoVideoFullscreen ? 9999 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {gulfLogoVideoFullscreen && (
          <video
            key={`gulf-logo-video-${gulfLogoVideoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/gulfconsult_pjinhc.mp4"
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
              closeVideo(setGulfLogoVideoFullscreen, setGulfLogoVideoPlaying);
            }}
          />
        )}
        {gulfLogoVideoFullscreen && (
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
              setGulfLogoVideoFullscreen(false);
              setGulfLogoVideoPlaying(false);
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
