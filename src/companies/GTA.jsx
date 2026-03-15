import React, { useEffect, useState } from 'react';

export default function GTA({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners
  const [showQRModal, setShowQRModal] = useState(false);

  // Handle Escape key to close GTA QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showQRModal) {
        setShowQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showQRModal]);

  // Auto-close GTA QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach((event) => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showQRModal]);

  if (!isOpen) return null;

  return (
    <>
      {/* GTA QR Code Modal */}
      {showQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page7"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0,
              }}
              title="GTA QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* GTA Learn More Modal */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#ffffff',
          backgroundImage: `url(${process.env.PUBLIC_URL}/GTA-bg4.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#000000',
            paddingTop: '20px',
          }}
        >
          {/* Tabs Navigation */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setActiveTab('tab1')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab1' ? '#ffffff' : '#dc2626',
                background:
                  activeTab === 'tab1' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(220, 38, 38, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
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
                color: activeTab === 'tab2' ? '#ffffff' : '#dc2626',
                background:
                  activeTab === 'tab2' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(220, 38, 38, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
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
                color: activeTab === 'tab3' ? '#ffffff' : '#dc2626',
                background:
                  activeTab === 'tab3' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(220, 38, 38, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              OUR TEAM
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab4' ? '#ffffff' : '#dc2626',
                background:
                  activeTab === 'tab4' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(220, 38, 38, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                textOverflow: 'clip',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
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
            <div
              style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                GALLERY
              </h2>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#000000',
                  textAlign: 'center',
                }}
              >
                Gallery content will be displayed here.
              </p>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div
              style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                MAJOR CLIENTS
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                  gap: 'clamp(18px, 2vw, 28px)',
                  width: '100%',
                  maxWidth: '1100px',
                  padding: 'clamp(16px, 2vw, 28px)',
                  justifyItems: 'center',
                }}
              >
                {[
                  'Audi-145x75-removebg-preview.png',
                  'Bentley-145x75-removebg-preview (1).png',
                  'BMW-145x75-removebg-preview.png',
                  'Ferrari-145x75-removebg-preview.png',
                  'Land-Rover-145x75-removebg-preview.png',
                  'Maserati-145x75-removebg-preview.png',
                  'Maybach-145x75-removebg-preview.png',
                  'Mercedes-145x75-removebg-preview.png',
                  'Mini-145x75__1_-removebg-preview.png',
                  'Porsche-145x75-removebg-preview.png',
                  'Rolls-Royce-1-145x75-removebg-preview.png',
                  'VW-145x75-removebg-preview.png',
                ].map((logoName, index) => (
                  <div
                    key={logoName + index}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      borderRadius: '8px',
                      padding: 'clamp(14px, 1.6vw, 20px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'none',
                    }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/gtamajorclients/${logoName}`}
                      alt={`GTA major client ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: 'clamp(130px, 18vh, 180px)',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tab3' && (
            <div
              style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                OUR TEAM
              </h2>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#000000',
                  textAlign: 'center',
                }}
              >
                Our team information will be displayed here.
              </p>
            </div>
          )}

          {activeTab === 'tab4' && (
            <div
              style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                OUR PARTNERS
              </h2>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#000000',
                  textAlign: 'center',
                }}
              >
                Our partners information will be displayed here.
              </p>
            </div>
          )}
        </div>
        {/* GTA Back button - text only */}
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 'clamp(20px, 2.5vw, 40px)',
            right: 'clamp(20px, 2.5vw, 40px)',
            background: 'transparent',
            border: 'none',
            color: '#b91c1c',
            padding: '0',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: '800',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            zIndex: 2001,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
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

