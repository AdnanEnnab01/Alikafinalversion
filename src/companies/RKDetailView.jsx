import React from 'react';
import { getPublicUrl } from '../utils/pathUtils';

export default function RKDetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowRKLearnMore,
  setShowRKQRModal
}) {
  return (
    <>
      {/* RK Background (fallback image + Cloudinary video) */}
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
          src="https://res.cloudinary.com/dl2rqs0lo/video/upload/rk1-gif-ezgif.com-gif-to-mp4-converter_dvmfjg.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Company Logos Grid - Left Side */}
      <div
        style={{
          position: 'fixed',
          top: 'clamp(55%, 55vh, 60%)',
          left: 'clamp(80px, 7vw, 140px)',
          transform: 'translateY(-50%) translateZ(0)',
          zIndex: 11,
          animation: 'fadeIn 0.8s ease-in-out 0.4s both',
          opacity: 0.9,
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
            gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
            gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
            transform: 'rotate(45deg) translateZ(0)',
            position: 'relative',
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          {companies.map((company) => {
            const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
            const isRKLogo = company.id === 6;

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
                    background: isRKLogo ? '#ffffff' : '#E8E8E8',
                    border: isRKLogo
                      ? '2px solid #F4A460'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isRKLogo
                      ? '0 0 25px rgba(244, 164, 96, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isRKLogo ? 2 : 1,
                    transform: isRKLogo ? 'scale(1.12) translateY(-6px) translateZ(0)' : 'none',
                    transformOrigin: 'center center',
                    willChange: isRKLogo ? 'transform' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (isRKLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(244, 164, 96, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isRKLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(244, 164, 96, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* RK Logo - Top Left */}
      <div style={{
        position: 'fixed',
        top: 'clamp(20px, 2.5vh, 30px)',
        left: 'clamp(30px, 3vw, 50px)',
        zIndex: 11,
        animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        <img
          src={selectedCompany.logo}
          alt={selectedCompany.name}
          style={{
            maxWidth: 'clamp(200px, 20vw, 280px)',
            maxHeight: 'clamp(100px, 10vh, 140px)',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 20px rgba(244, 164, 96, 0.5))'
          }}
        />
      </div>

      {/* RK Content - Right Side */}
      <div
        className="rk-content"
        style={{
          position: 'fixed',
          top: '50%',
          right: 'clamp(20px, 2.5vw, 40px)',
          transform: 'translateY(-50%)',
          maxWidth: 'clamp(500px, 45vw, 700px)',
          maxHeight: '90vh',
          color: '#ffffff',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11,
          overflow: 'visible',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(28px, 3.5vw, 46px)',
            fontWeight: '900',
            marginBottom: 'clamp(12px, 1.5vh, 18px)',
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
            lineHeight: '1.2',
            textShadow: '0 0 30px rgba(244, 164, 96, 0.4), 0 4px 20px rgba(244, 164, 96, 0.3)',
            position: 'relative',
            display: 'inline-block',
            filter: 'drop-shadow(0 2px 8px rgba(244, 164, 96, 0.5))'
          }}
        >
          AL RAKAEZ CONSTRUCTION
        </h1>

        <p
          style={{
            fontSize: 'clamp(13px, 1.4vw, 19px)',
            lineHeight: '1.75',
            marginBottom: 'clamp(14px, 2vh, 20px)',
            color: '#ffffff',
            fontWeight: '500',
            letterSpacing: '0.3px',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 18px)',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(244, 164, 96, 0.2)',
            borderLeft: '3px solid #F4A460',
            backdropFilter: 'blur(8px)'
          }}
        >
          Al-Rakaez Technical Co. Ltd. (RK) is a Saudi based company that specializes in Civil, Finishing, Mechanical, Electrical and Plumbing (MEP) building services. RK strives to deliver the highest standards of Civil, Finishing and MEP installation, carefully paying attention to each of its client's requirements and ideas, collaborating in the development of the right scope of work in order to develop a unique approach towards each customer.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(20px, 3vw, 35px)',
            alignItems: 'flex-start',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
          }}
        >
          {/* Text info (Managers / Mobile / Email / Website) */}
          <div
            style={{
              fontSize: 'clamp(13px, 1.3vw, 18px)',
              lineHeight: '1.8',
              color: '#ffffff',
              flex: '1 1 auto',
              padding: 'clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 18px)',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.35) 100%)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(244, 164, 96, 0.2)',
              border: '1px solid rgba(244, 164, 96, 0.25)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'row',
              gap: 'clamp(15px, 2vw, 25px)',
              minWidth: 0
            }}
          >
            {/* Text content column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              flex: '1 1 auto'
            }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: 'clamp(6px, 0.8vh, 10px)',
                  paddingBottom: 'clamp(5px, 0.6vh, 8px)',
                  borderBottom: '1px solid rgba(244, 164, 96, 0.2)'
                }}
              >
                <strong style={{ 
                  minWidth: 'auto', 
                  fontWeight: 800, 
                  color: '#F4A460',
                  fontSize: 'clamp(13px, 1.3vw, 18px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(244, 164, 96, 0.3)',
                  flexShrink: 0
                }}>Managers:</strong>
                <span style={{ 
                  fontWeight: 600,
                  letterSpacing: '0.2px',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>Jaffar Al Sayori.</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: 'clamp(6px, 0.8vh, 10px)',
                  paddingBottom: 'clamp(5px, 0.6vh, 8px)',
                  borderBottom: '1px solid rgba(244, 164, 96, 0.2)'
                }}
              >
                <strong style={{ 
                  minWidth: 'auto', 
                  fontWeight: 800, 
                  color: '#F4A460',
                  fontSize: 'clamp(13px, 1.3vw, 18px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(244, 164, 96, 0.3)',
                  flexShrink: 0
                }}>Mobile:</strong>
                <span style={{ 
                  fontWeight: 600,
                  letterSpacing: '0.2px',
                  fontFamily: 'monospace',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>054 989 5927</span>
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
                  color: '#F4A460',
                  fontSize: 'clamp(13px, 1.3vw, 18px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(244, 164, 96, 0.3)',
                  flexShrink: 0
                }}>Email:</strong>
                <span
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.2px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  jafar.syouri@rk-arabia.com
                </span>
              </div>
              
              {/* Buttons and QR Code Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 'clamp(15px, 2vw, 25px)',
                marginTop: 'clamp(12px, 1.5vh, 18px)',
                animation: 'fadeInUp 0.8s ease-out 0.7s both',
                alignItems: 'flex-start'
              }}>
                {/* Buttons Column - Three buttons stacked vertically */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 1.2vh, 14px)'
                }}>
                  {/* Visit Website Button */}
                  <button
                    onClick={() => window.open('https://www.rk-arabia.com/', '_blank', 'noopener,noreferrer')}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 2.4vw, 32px)',
                      fontSize: 'clamp(12px, 1.2vw, 16px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                      border: '2px solid #F4A460',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.7px',
                      textTransform: 'uppercase',
                      minWidth: 'clamp(180px, 18vw, 260px)',
                      width: 'clamp(180px, 18vw, 260px)',
                      alignSelf: 'flex-start',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 164, 96, 0.6), 0 0 0 4px rgba(244, 164, 96, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ffb07a 0%, #F4A460 50%, #ffb07a 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)';
                    }}
                  >
                    Visit Website
                  </button>
                  
                  {/* Our Services Button - Opens website with hash to scroll to services */}
                  <button
                    onClick={() => window.open('https://www.rk-arabia.com/#services', '_blank', 'noopener,noreferrer')}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 2.4vw, 32px)',
                      fontSize: 'clamp(12px, 1.2vw, 16px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                      border: '2px solid #F4A460',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.7px',
                      textTransform: 'uppercase',
                      minWidth: 'clamp(180px, 18vw, 260px)',
                      width: 'clamp(180px, 18vw, 260px)',
                      alignSelf: 'flex-start',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 164, 96, 0.6), 0 0 0 4px rgba(244, 164, 96, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ffb07a 0%, #F4A460 50%, #ffb07a 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)';
                    }}
                  >
                    Our Services
                  </button>
                  
                  {/* Learn More Button */}
                  <button
                    onClick={() => setShowRKLearnMore(true)}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 2.4vw, 32px)',
                      fontSize: 'clamp(12px, 1.2vw, 16px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                      border: '2px solid #F4A460',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.7px',
                      textTransform: 'uppercase',
                      minWidth: 'clamp(180px, 18vw, 260px)',
                      width: 'clamp(180px, 18vw, 260px)',
                      alignSelf: 'flex-start',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 164, 96, 0.6), 0 0 0 4px rgba(244, 164, 96, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ffb07a 0%, #F4A460 50%, #ffb07a 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)';
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* RK Internal Image - Inside dark box, next to text */}
            <div
              style={{
                maxWidth: 'clamp(140px, 14vw, 180px)',
                width: 'fit-content',
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(10px, 1.2vw, 14px)',
                marginTop: '0',
                overflow: 'visible',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <img
                src={getPublicUrl("rk-internal.png")}
                alt="RK Internal"
                style={{
                  width: 'auto',
                  maxWidth: 'clamp(140px, 14vw, 180px)',
                  height: 'auto',
                  maxHeight: 'clamp(100px, 12vh, 140px)',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
              {/* QR Code - Below the image */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'transparent',
                  padding: '0',
                  borderRadius: '0',
                  boxShadow: 'none',
                  alignSelf: 'center',
                  marginTop: 'clamp(30px, 4vh, 60px)'
                }}
              >
                <img
                  src={getPublicUrl("rkqr.jpeg")}
                  alt="RK QR Code"
                  onClick={() => setShowRKQRModal(true)}
                  style={{
                    maxWidth: 'clamp(80px, 10vw, 120px)',
                    maxHeight: 'clamp(80px, 10vw, 120px)',
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
      </div>
    </>
  );
}
