import React from 'react';

const AboutUsPage = ({ 
  companies, 
  onClose, 
  onCompanyClick, 
  onSubsidiariesClick, 
  onQRCodeClick 
}) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#061826',
      zIndex: 1000,
      animation: 'fadeIn 0.6s ease-in-out'
    }}>
      {/* Back button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 'clamp(20px, 2vh, 40px)',
          right: 'clamp(20px, 2vw, 40px)',
          zIndex: 1002,
          padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.5vw, 32px)',
          fontSize: 'clamp(14px, 1.2vw, 18px)',
          fontWeight: '600',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
        aria-label="Back to Alika"
      >
        Back to Alika
      </button>

      {/* Company Logos Grid - Left Side */}
      <div
        style={{
          position: 'fixed',
          top: 'clamp(55%, 55vh, 60%)',
          left: 'clamp(80px, 7vw, 140px)',
          transform: 'translateY(-50%)',
          zIndex: 1001,
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
            const isClickable = [10, 3, 11, 1, 6, 5, 2, 7, 9, 12, 4, 8].includes(company.id);

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
                    cursor: isClickable ? 'pointer' : 'default',
                    width: '100%',
                    height: '100%',
                    minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                    minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                    background: '#E8E8E8',
                    border: '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                  }}
                  onClick={(e) => {
                    if (isClickable) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      sessionStorage.setItem('logoStartX', rect.left);
                      sessionStorage.setItem('logoStartY', rect.top);
                      onCompanyClick(company);
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

      {/* About us content - Right Side */}
      <div style={{
        position: 'fixed',
        top: '50%',
        right: 'clamp(100px, 15vw, 200px)',
        transform: 'translateY(-50%)',
        zIndex: 1001,
        width: 'auto',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '40px',
        padding: 0,
        animation: 'fadeIn 0.8s ease-in-out 0.2s both',
        direction: 'ltr',
        overflow: 'visible'
      }}>
        {/* Left Column - Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          gap: '14px'
        }}>
          {/* Alika Logo - Top Left */}
          <div style={{
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            marginLeft: 0,
            paddingLeft: 0
          }}>
            <img
              src={process.env.PUBLIC_URL + "/alikalogo-removebg-preview.png"}
              alt="Alika Logo"
              style={{
                maxWidth: '250px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))',
                marginLeft: 0
              }}
            />
          </div>

          {/* Company Description */}
          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#ffffff',
            textAlign: 'left',
            margin: 0,
            marginBottom: '14px',
            fontWeight: '400',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            direction: 'ltr',
            unicodeBidi: 'embed',
            padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
            background: 'rgba(0, 0, 0, 0.45)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(243, 192, 107, 0.1), -4px 0 16px rgba(243, 192, 107, 0.4)',
            borderLeft: '5px solid #ffffff',
            position: 'relative'
          }}>
            We at ALIKA Holding Group, a leading Saudi investment group, we manage and grow our assets through a diversified portfolio that spans strategic sectors such as professional services, technology and communications, healthcare, and real estate development. We believe that smart investment is the true driver of sustainable growth; therefore, we rely on our innovative vision to seize promising opportunities and build long-term investments that enhance our operational efficiency and increase the value of our subsidiaries. Through this approach, we continue to strengthen our competitive position and create lasting value for our shareholders and partners.
          </p>

          {/* Management */}
          <div style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#ffffff',
            textAlign: 'left',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            direction: 'ltr',
            unicodeBidi: 'embed'
          }}>
            <div style={{ fontWeight: '600', marginBottom: '6px' }}>
              Management:
            </div>
            <div style={{ marginLeft: '15px' }}>
              Chairman Eng. Ali Khudair Al Harbi<br />
              Vice President Faisal Ali Alharbi
            </div>
          </div>

          {/* Phone Number */}
          <div style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#ffffff',
            textAlign: 'left',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            direction: 'ltr',
            unicodeBidi: 'embed'
          }}>
            <span style={{ fontWeight: '600' }}>Phone number:</span> 920017259
          </div>

          {/* Email */}
          <div style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#ffffff',
            textAlign: 'left',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            direction: 'ltr',
            unicodeBidi: 'embed',
            marginBottom: '15px'
          }}>
            <span style={{ fontWeight: '600' }}>Email:</span> info@alikaholding.com
          </div>

          {/* Buttons and QR Code Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 'clamp(40px, 5vw, 60px)',
            width: '100%'
          }}>
            {/* Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              flex: '0 0 auto'
            }}>
              <button
                type="button"
                onClick={onSubsidiariesClick}
                style={{
                  padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.2vw, 32px)',
                  fontSize: 'clamp(12px, 1.3vw, 18px)',
                  fontWeight: '600',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  width: 'fit-content',
                  maxWidth: 'clamp(200px, 50vw, 350px)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  direction: 'ltr'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Our Subsidiaries
              </button>

              <button
                type="button"
                onClick={() => window.open('https://alikaholding.com/', '_blank', 'noopener,noreferrer')}
                style={{
                  padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.2vw, 32px)',
                  fontSize: 'clamp(12px, 1.3vw, 18px)',
                  fontWeight: '600',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  width: 'fit-content',
                  maxWidth: 'clamp(200px, 50vw, 350px)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  direction: 'ltr'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Our Website
              </button>

              <button
                type="button"
                onClick={() => window.open('https://alikaholding.com/investments/', '_blank', 'noopener,noreferrer')}
                style={{
                  padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.2vw, 32px)',
                  fontSize: 'clamp(12px, 1.3vw, 18px)',
                  fontWeight: '600',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  width: 'fit-content',
                  maxWidth: 'clamp(200px, 50vw, 350px)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  direction: 'ltr'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Our Investments
              </button>
            </div>

            {/* QR Code - Next to buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginLeft: 'clamp(60px, 7vw, 80px)'
            }}>
              <img
                src={process.env.PUBLIC_URL + "/alikaqr.jpeg"}
                alt="Alika QR Code"
                onClick={onQRCodeClick}
                style={{
                  maxWidth: 'clamp(140px, 16vw, 220px)',
                  maxHeight: 'clamp(140px, 16vw, 220px)',
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
      </div>
    </div>
  );
};

export default AboutUsPage;
