import React, { useState } from 'react';

export default function AHEnvironmental({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Team, 'tab3' = Projects, 'tab4' = Gallery

  if (!isOpen) return null;

  return (
    <>
      {/* AH Environmental Learn More Modal */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        padding: 0,
        backgroundColor: activeTab === 'tab2' ? '#ffffff' : '#283152',
        backgroundImage: activeTab === 'tab2' ? 'none' : (activeTab === 'tab4' ? `url(${process.env.PUBLIC_URL}/bgourproject.png)` : `url(${process.env.PUBLIC_URL}/bgforah.png)`),
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 2000,
        animation: 'fadeIn 0.6s ease-in-out',
        overflow: activeTab === 'tab2' ? 'hidden' : 'auto',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '100%',
          minHeight: '100vh',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#ffffff',
          paddingTop: '20px',
          boxSizing: 'border-box'
        }}>
          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '40px',
            zIndex: 10,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveTab('tab1')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab1' ? '#ffffff' : '#283152',
                background: activeTab === 'tab1' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(40, 60, 100, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                  if (activeTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
              }}
            >
              GALLERY
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab2' ? '#ffffff' : '#283152',
                background: activeTab === 'tab2' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(40, 60, 100, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                  if (activeTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
              }}
            >
              MAJOR CLIENTS
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab3' ? '#ffffff' : '#283152',
                background: activeTab === 'tab3' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(40, 60, 100, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                  if (activeTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
              }}
            >
              Our TEAM
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab4' ? '#ffffff' : '#283152',
                background: activeTab === 'tab4' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(40, 60, 100, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                  if (activeTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
              }}
            >
              OUR PARTNERS
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div style={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'transparent'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                GALLERY
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#ffffff',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                Gallery content will be displayed here.
              </p>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div style={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'transparent',
              minHeight: '600px',
              overflow: 'hidden'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#283152',
                marginBottom: 'clamp(30px, 4vh, 50px)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                MAJOR CLIENTS
              </h1>
              
              {/* Partners Grid - 12 logos in 2 rows of 6 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(20px, 3vh, 30px)',
                width: '100%',
                alignItems: 'center'
              }}>
                {/* Row 1: 6 logos */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: 'clamp(15px, 2vw, 25px)',
                  width: '100%',
                  maxWidth: '1200px'
                }}>
                {[67, 70, 71, 72, 73, 74].map((num) => (
                  <div key={num} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/Group ${num}.png`}
                      alt={`Partner ${num}`}
                      style={{
                        width: 'clamp(100px, 12vw, 150px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 150px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
                </div>
                
                {/* Row 2: 6 logos */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: 'clamp(15px, 2vw, 25px)',
                  width: '100%',
                  maxWidth: '1200px'
                }}>
                {[75, 76, 77, 78, 79, 80].map((num) => (
                  <div key={num} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/Group ${num}.png`}
                      alt={`Partner ${num}`}
                      style={{
                        width: 'clamp(100px, 12vw, 150px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 150px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tab3' && (
            <div style={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'transparent'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                Our TEAM
              </h1>
            </div>
          )}

          {activeTab === 'tab4' && (
            <div style={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '40px',
              backgroundColor: 'transparent',
              minHeight: '500px'
            }}>
               {/* Title at Top Center */}
               <h1 style={{
                 fontSize: 'clamp(24px, 2.5vw, 36px)',
                 fontWeight: '900',
                 color: '#7b1fa2',
                 marginBottom: '30px',
                 letterSpacing: '1.5px',
                 textTransform: 'uppercase',
                 textAlign: 'center',
                 textShadow: '0 2px 8px rgba(123, 31, 162, 0.4)'
               }}>
                 OUR PARTNERS
               </h1>
              
              {/* Content Row: Text and Image */}
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: 'clamp(30px, 4vw, 50px)'
              }}>
                {/* Left Side - Text Content */}
                <div style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  paddingTop: '20px'
                }}>
                <p style={{
                  fontSize: 'clamp(14px, 1.3vw, 18px)',
                  lineHeight: '1.8',
                  color: '#ffffff',
                  textAlign: 'left',
                  marginBottom: '0',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  finovate offerings for industries at finovate, we go beyond one-size-fits-all solutions by offering customized bpm services designed to meet the unique needs of diverse industries. our digital business process management services, combined with expert consulting, seamless technology integration, and proven customer experience strategies, drive significant productivity and cost-efficiency gains. we don't just optimize processes—we transform them to elevate your industry.
                </p>
                </div>
                
                {/* Right Side - Image */}
                <div style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={process.env.PUBLIC_URL + "/photo66.png"}
                    alt="Projects Chart"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Back button - text only */}
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 'clamp(20px, 2.5vw, 40px)',
            right: 'clamp(20px, 2.5vw, 40px)',
            background: 'transparent',
            border: 'none',
            color: activeTab === 'tab2' ? '#283152' : 'rgba(255, 255, 255, 0.95)',
            padding: '0',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: '800',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            zIndex: 2001,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
            textShadow: activeTab === 'tab2' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}

