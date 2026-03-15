import React from 'react';
import { getPublicUrl } from '../utils/pathUtils';

export default function GSGDetailView({ 
  selectedCompany, 
  companies, 
  setSelectedCompany, 
  setShowGSGLearnMore,
  setShowGSGQRModal
}) {
  return (
    <>
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
            const isGSGLogo = company.id === 11;

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
                    minWidth: 'var(--grid-item-size, clamp(50px, 5vw, 75px))',
                    minHeight: 'var(--grid-item-size, clamp(50px, 5vw, 75px))',
                    background: isGSGLogo ? '#ffffff' : '#E8E8E8',
                    border: isGSGLogo
                      ? '2px solid #00bcd4'
                      : '1px solid rgba(200, 200, 200, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '4px',
                    boxShadow: isGSGLogo
                      ? '0 0 25px rgba(0, 188, 212, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                      : '0 2px 10px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: isGSGLogo ? 2 : 1,
                    transform: isGSGLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isGSGLogo) {
                      e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 35px rgba(0, 188, 212, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                    } else {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 20px rgba(0, 0, 0, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isGSGLogo) {
                      e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(0, 188, 212, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
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

      {/* GSG Content Container - Right Side - Optimized for 1536x864 */}
      <div
        className="gsg-content-container"
        style={{
          position: 'fixed',
          top: '50%',
          right: 'clamp(40px, 4vw, 80px)',
          transform: 'translateY(-50%)',
          maxWidth: 'clamp(450px, 38vw, 580px)',
          maxHeight: '90vh',
          color: '#07373c',
          direction: 'ltr',
          textAlign: 'left',
          zIndex: 11,
          overflowY: 'auto',
          overflowX: 'visible',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 'clamp(16px, 2vh, 24px)',
          padding: 'clamp(20px, 2vw, 30px)'
        }}
      >
        {/* GSG Title */}
        <div>
          <h1
            style={{
              fontSize: 'clamp(32px, 3.2vw, 42px)',
              fontWeight: '900',
              marginBottom: 'clamp(4px, 0.8vh, 8px)',
              letterSpacing: '1.2px',
              color: '#07373c',
              textTransform: 'uppercase',
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
              lineHeight: '1.1'
            }}
          >
            GROUND SYSTEMS
          </h1>
          <h1
            style={{
              fontSize: 'clamp(32px, 3.2vw, 42px)',
              fontWeight: '900',
              marginBottom: 'clamp(10px, 1.5vh, 16px)',
              letterSpacing: '1.2px',
              color: '#07373c',
              textTransform: 'uppercase',
              animation: 'fadeInUp 0.8s ease-out 0.3s both',
              lineHeight: '1.1'
            }}
          >
            GEOPHYSICAL (GSG)
          </h1>
        </div>

        {/* GSG Description */}
        <div>
          <p
            style={{
              fontSize: 'clamp(15px, 1.5vw, 19px)',
              lineHeight: '1.7',
              marginBottom: 'clamp(14px, 2vh, 20px)',
              color: '#07373c',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
              padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(7, 55, 60, 0.1), -4px 0 16px rgba(7, 55, 60, 0.4)',
              borderLeft: '5px solid #07373c',
              position: 'relative'
            }}
          >
            Is a leading provider of geophysical, geological, environmental, and engineering solutions across Saudi Arabia and the GCC region. With a dedicated team of scientists, engineers, and experts, we specialize in delivering advanced, reliable, and innovative services that support site assessments, resource exploration, and real-time monitoring across various industries. Integrated Solutions for Your Projects, Backed by Decades of Expertise
          </p>
        </div>

        {/* GSG Contact Information and Images Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 'clamp(24px, 3vw, 36px)',
            animation: 'fadeInUp 0.8s ease-out 0.6s both',
            marginBottom: 'clamp(8px, 1vh, 12px)',
            flexWrap: 'nowrap',
            width: '100%'
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              fontSize: 'clamp(15px, 1.5vw, 19px)',
              lineHeight: '1.9',
              color: '#07373c',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(8px, 1.2vh, 14px)',
              flex: '1',
              minWidth: 'clamp(280px, 25vw, 360px)'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '4px'
            }}>
              <strong style={{ fontWeight: '800', flexShrink: 0 }}>Managers:</strong>
              <span>Eng. Rabah Yehya.</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '4px'
            }}>
              <strong style={{ fontWeight: '800', flexShrink: 0 }}>Mobile:</strong>
              <span>055 584 6667</span>
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: 'clamp(4px, 0.5vh, 6px)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '4px'
              }}>
                <strong style={{ fontWeight: '800', flexShrink: 0 }}>Email:</strong>
                <span>faisal@gulfconsult.com</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '4px',
                marginLeft: 'clamp(85px, 8.5vw, 110px)'
              }}>
                <span>rabah@gulfconsult.com</span>
              </div>
            </div>
            {/* Buttons Container - Visit Website, Our Services, and Learn More */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: 'clamp(12px, 1.5vh, 18px)',
              marginTop: 'clamp(16px, 2vh, 24px)',
              animation: 'fadeInUp 0.8s ease-out 0.7s both'
            }}>
              {/* Visit Website Button */}
              <button
                onClick={() => window.open('https://gs-geo.com/', '_blank', 'noopener,noreferrer')}
                style={{
                  padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                  fontSize: 'clamp(11px, 1.2vw, 15px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: '#00bcd4',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  minWidth: 'clamp(140px, 15vw, 200px)',
                  width: 'clamp(140px, 15vw, 200px)',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 188, 212, 0.5)';
                  e.currentTarget.style.background = '#00d4e6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 188, 212, 0.4)';
                  e.currentTarget.style.background = '#00bcd4';
                }}
              >
                Visit Website
              </button>
              
              {/* Our Services Button */}
              <button
                onClick={() => window.open('https://gs-geo.com/services/', '_blank', 'noopener,noreferrer')}
                style={{
                  padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                  fontSize: 'clamp(11px, 1.2vw, 15px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: '#00bcd4',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  minWidth: 'clamp(140px, 15vw, 200px)',
                  width: 'clamp(140px, 15vw, 200px)',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 188, 212, 0.5)';
                  e.currentTarget.style.background = '#00d4e6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 188, 212, 0.4)';
                  e.currentTarget.style.background = '#00bcd4';
                }}
              >
                Our Services
              </button>
              
              {/* Learn More Button */}
              <button
                onClick={() => setShowGSGLearnMore(true)}
                style={{
                  padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                  fontSize: 'clamp(11px, 1.2vw, 15px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  background: '#00bcd4',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.8s both',
                  minWidth: 'clamp(140px, 15vw, 200px)',
                  width: 'clamp(140px, 15vw, 200px)',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 188, 212, 0.5)';
                  e.currentTarget.style.background = '#00d4e6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 188, 212, 0.4)';
                  e.currentTarget.style.background = '#00bcd4';
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* GSG Images and QR Code Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: 'clamp(16px, 2vw, 24px)',
              animation: 'fadeInUp 0.8s ease-out 0.7s both',
              flexWrap: 'nowrap',
              flexShrink: 0,
              marginTop: '0'
            }}
          >
            {/* Circular Images and QR Code Container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 'clamp(12px, 1.5vw, 18px)'
              }}
            >
              <img
                src={getPublicUrl("gsg-internal.png")}
                alt="GSG Internal"
                style={{
                  width: 'clamp(100px, 10vw, 130px)',
                  height: 'clamp(100px, 10vw, 130px)',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid #00bcd4',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)',
                  display: 'block',
                  flexShrink: 0
                }}
              />
              <img
                src={getPublicUrl("gsgqr.jpeg")}
                alt="GSG QR Code"
                onClick={() => setShowGSGQRModal(true)}
                style={{
                  width: 'clamp(100px, 10vw, 130px)',
                  height: 'clamp(100px, 10vw, 130px)',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                  display: 'block',
                  flexShrink: 0,
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
    </>
  );
}
