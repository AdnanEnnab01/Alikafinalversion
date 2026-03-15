import React, { useState } from 'react';

export default function IDC({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1', 'tab2', 'tab3', 'tab4'

  if (!isOpen) return null;

  return (
    <>
      {/* IDC Learn More Modal */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        backgroundImage: `url(${process.env.PUBLIC_URL}/idcbg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 2000,
        animation: 'fadeIn 0.6s ease-in-out',
        overflow: 'auto'
      }}>
        <div style={{
          width: '100%',
          minHeight: '100vh',
          padding: 'clamp(15px, 2vh, 25px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#0b2239',
          paddingTop: 'clamp(20px, 3vh, 35px)'
        }}>
          <h1 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: '900',
            marginBottom: 'clamp(20px, 2vh, 30px)',
            color: '#0b6fbf',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            // Ensure IDC Learn More title stays above any overlapping UI elements
            position: 'relative',
            zIndex: 30
          }}>
            IDC CONTRACTING COMPANY
          </h1>
          
          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: 'clamp(10px, 1.5vh, 15px)',
            zIndex: 10
          }}>
            <button
              onClick={() => setActiveTab('tab1')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab1' ? '#ffffff' : '#0b6fbf',
                background: activeTab === 'tab1' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid #0b6fbf',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
                color: activeTab === 'tab2' ? '#ffffff' : '#0b6fbf',
                background: activeTab === 'tab2' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid #0b6fbf',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
                color: activeTab === 'tab3' ? '#ffffff' : '#0b6fbf',
                background: activeTab === 'tab3' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid #0b6fbf',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
                color: activeTab === 'tab4' ? '#ffffff' : '#0b6fbf',
                background: activeTab === 'tab4' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid #0b6fbf',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }
              }}
            >
              OUR PARNTERS
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'tab1' && (
            <div style={{
              width: '100%',
              maxWidth: '1536px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(10px, 1.2vh, 15px)',
              minHeight: '50vh'
            }}>
              {/* Empty tab content */}
            </div>
          )}

          {activeTab === 'tab2' && (
            <div style={{
              width: '100%',
              maxWidth: '1536px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(10px, 1.2vh, 15px)',
              minHeight: '50vh'
            }}>
              {/* Empty tab content */}
            </div>
          )}

          {activeTab === 'tab3' && (
            <div style={{
              width: '100%',
              maxWidth: '1536px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(10px, 1.2vh, 15px)',
              minHeight: '50vh'
            }}>
              {/* Empty tab content */}
            </div>
          )}

          {activeTab === 'tab4' && (
            <div style={{
              width: '100%',
              maxWidth: '1536px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(10px, 1.2vh, 15px)',
              minHeight: '50vh'
            }}>
              {/* Empty tab content */}
            </div>
          )}
        </div>
        {/* IDC Back button - text only */}
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 'clamp(20px, 2.5vw, 40px)',
            right: 'clamp(20px, 2.5vw, 40px)',
            background: 'transparent',
            border: 'none',
            color: '#0b2239',
            padding: '0',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: '800',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            zIndex: 2001,
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease'
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

