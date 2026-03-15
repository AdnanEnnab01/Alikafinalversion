import React from 'react';

export default function AHEnvironmentalDetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowAHEnvironmentalLearnMore,
  setShowAHEnvironmentalQRModal
}) {
  return (
    <>
      {/* Company Logos Grid - Left Side (same 12-company shape, highlighting AH Environmental) */}
      <div
        style={{
          position: 'fixed',
          top: 'clamp(55%, 55vh, 60%)',
          left: 'clamp(80px, 7vw, 200px)',
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
            const isAHLogo = company.id === 5;

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
                    background: isAHLogo ? '#ffffff' : '#E8E8E8',
                    border: isAHLogo
                      ? '2px solid #ffffff'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isAHLogo
                      ? '0 0 25px rgba(59, 130, 246, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isAHLogo ? 2 : 1,
                    transform: isAHLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isAHLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(59, 130, 246, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isAHLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(59, 130, 246, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* AH Environmental Text Content - Right */}
      <div
        className="ah-environmental-content"
        style={{
          position: 'fixed',
          top: '50%',
          right: 'clamp(40px, 4vw, 120px)',
          transform: 'translateY(-50%)',
          maxWidth: "var(--ah-content-max-width, clamp(520px, 46vw, 1000px))",
          maxHeight: '95vh',
          zIndex: 12,
          color: '#0f172a',
          direction: 'ltr',
          textAlign: 'left',
          padding: 'clamp(20px, 3vw, 48px)',
          overflow: 'visible',
          boxSizing: 'border-box',
          borderRadius: 'clamp(12px, 1.2vw, 20px)',
          background: 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.0) 100%)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* AH Environmental Logo above the title */}
        <div
          style={{
            marginBottom: 'clamp(10px, 1.5vh, 18px)',
            animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <img
            src={selectedCompany.logo}
            alt={selectedCompany.name}
            style={{
              maxWidth: 'var(--ah-logo-size, clamp(200px, 18vw, 300px))',
              maxHeight: 'var(--ah-logo-height, clamp(150px, 14vw, 220px))',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.25))'
            }}
          />
        </div>

        <h1
          style={{
            fontSize: 'var(--ah-title-size, clamp(30px, 4vw, 50px))',
            fontWeight: '900',
            marginBottom: 'clamp(16px, 2.5vh, 28px)',
            letterSpacing: '2.2px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase',
            animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
            lineHeight: '1.2',
            textShadow: '0 0 30px rgba(15, 23, 42, 0.4), 0 4px 20px rgba(15, 23, 42, 0.3)',
            position: 'relative',
            display: 'inline-block',
            filter: 'drop-shadow(0 2px 8px rgba(15, 23, 42, 0.5))'
          }}
        >
          AH ENVIRONMENTAL CONSULTING
        </h1>

        <p
          style={{
            fontSize: 'var(--ah-text-size, clamp(14px, 1.6vw, 22px))',
            lineHeight: '1.85',
            marginBottom: 'clamp(24px, 3.5vh, 36px)',
            color: '#1e293b',
            fontWeight: '500',
            letterSpacing: '0.3px',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.1)',
            borderLeft: '4px solid #0f172a'
          }}
        >
          AHEC is a leading environmental engineering and consulting firm established in 2010, providing sustainable and compliant solutions across multiple industries Certified Category A by NCEC and accredited by the Royal Commission for Jubail and Yanbu, AHEC delivers integrated environmental services to government and industrial clients, supporting sustainability, safety, and regulatory compliance
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(16px, 3vw, 40px)',
            alignItems: 'flex-start',
            animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
            marginBottom: 'clamp(8px, 1vh, 12px)'
          }}
        >
          {/* Contact Info (Left Column) */}
          <div
            style={{
              fontSize: 'var(--ah-info-size, clamp(14px, 1.5vw, 21px))',
              lineHeight: '1.9',
              color: '#1e293b',
              flex: '1',
              padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(15, 23, 42, 0.2)',
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
              borderBottom: '1px solid rgba(15, 23, 42, 0.15)'
            }}>
              <strong
                style={{
                  fontWeight: 800,
                  color: '#0f172a',
                  fontSize: 'clamp(14px, 1.5vw, 21px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
                  minWidth: 'auto'
                }}
              >
                Managers:
              </strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px'
              }}>Ennacer Besghaier.</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginBottom: 'clamp(10px, 1.4vh, 14px)',
              paddingBottom: 'clamp(8px, 1.2vh, 12px)',
              borderBottom: '1px solid rgba(15, 23, 42, 0.15)'
            }}>
              <strong
                style={{
                  fontWeight: 800,
                  color: '#0f172a',
                  fontSize: 'clamp(14px, 1.5vw, 21px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
                  minWidth: 'auto'
                }}
              >
                Mobile:
              </strong>
              <span style={{ 
                fontWeight: 600,
                letterSpacing: '0.2px',
                fontFamily: 'monospace'
              }}>054 292 9702</span>
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
                  color: '#0f172a',
                  fontSize: 'clamp(14px, 1.5vw, 21px)',
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
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
              }}>g.m@ahenviro.com</span>
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
              onClick={() => window.open('https://ahenviro.com/', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                border: '2px solid #0f172a',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)',
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
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.6), 0 0 0 4px rgba(15, 23, 42, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
              }}
            >
              Visit Website
            </button>
            
            {/* Our Services Button */}
            <button
              onClick={() => window.open('https://ahenviro.com/services/', '_blank', 'noopener,noreferrer')}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                border: '2px solid #0f172a',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)',
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
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.6), 0 0 0 4px rgba(15, 23, 42, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
              }}
            >
              Our Services
            </button>
            
            {/* Learn More Button */}
            <button
              onClick={() => setShowAHEnvironmentalLearnMore(true)}
              style={{
                padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 700,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                border: '2px solid #0f172a',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)',
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
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.6), 0 0 0 4px rgba(15, 23, 42, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
              }}
            >
              Learn More
            </button>
          </div>

          {/* QR Code */}
          <div
            style={{
              animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
              flexShrink: 0,
              marginTop: '0',
              alignSelf: 'flex-start',
              zIndex: 13,
              position: 'relative',
              minWidth: 'clamp(110px, 13vw, 240px)',
              maxWidth: 'clamp(110px, 13vw, 240px)'
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/ahqr.jpeg"}
              alt="AH Environmental QR Code"
              onClick={() => setShowAHEnvironmentalQRModal(true)}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: 'clamp(110px, 13vw, 240px)',
                maxHeight: 'clamp(110px, 13vw, 240px)',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#ffffff',
                padding: '8px',
                display: 'block',
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
