import React, { useState } from 'react';

export default function CentralMedicalcare({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Major Clients, 'tab3' = Team, 'tab4' = Gallery

  if (!isOpen) return null;

  return (
    <>
      {/* Central Medicalcare Learn More Modal */}
      <div 
        className="central-medicalcare-modal"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#bfa874',
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'hidden'
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
          paddingTop: '80px'
        }}>
          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '40px',
            zIndex: 10
          }}>
            <button
              onClick={() => setActiveTab('tab4')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab4' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab4' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
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
                color: activeTab === 'tab2' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab2' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
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
                color: activeTab === 'tab3' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab3' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                }
              }}
            >
              OUR TEAM
            </button>
            <button
              onClick={() => setActiveTab('tab1')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab1' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab1' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
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
              backgroundColor: 'transparent',
              minHeight: '600px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                marginBottom: '30px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                OUR PARTNERS
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                maxWidth: '800px',
                textAlign: 'center',
                color: '#ffffff'
              }}>
                Information about Central Medicalcare partners will be available here.
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
              minHeight: '600px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                marginBottom: '30px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                MAJOR CLIENTS
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                maxWidth: '800px',
                textAlign: 'center',
                color: '#ffffff'
              }}>
                Information about Central Medicalcare major clients will be available here.
              </p>
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
              backgroundColor: 'transparent',
              minHeight: '600px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                marginBottom: '30px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                OUR TEAM
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                maxWidth: '800px',
                textAlign: 'center',
                color: '#ffffff'
              }}>
                Information about Central Medicalcare team will be available here.
              </p>
            </div>
          )}

          {activeTab === 'tab4' && (
            <div style={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'transparent',
              minHeight: '600px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                marginBottom: '30px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                GALLERY
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                maxWidth: '800px',
                textAlign: 'center',
                color: '#ffffff'
              }}>
                Gallery content for Central Medicalcare will be available here.
              </p>
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '40px',
            right: '40px',
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            color: '#bfa874',
            padding: '12px 24px',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: '700',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            zIndex: 2001,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(191, 168, 116, 0.2)';
            e.currentTarget.style.color = '#bfa874';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#bfa874';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Back"
        >
          Back
        </button>
      </div>
    </>
  );
}

