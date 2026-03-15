import React, { useState } from 'react';

export default function GSG({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners

  if (!isOpen) return null;

  return (
    <>
      {/* GSG Learn More Modal */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#e0f7fa',
        backgroundImage: `url(${process.env.PUBLIC_URL}/gsg-ourpartnersbg.jpeg)`,
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
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#07373c',
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
                color: activeTab === 'tab4' ? '#ffffff' : '#07373c',
                background: activeTab === 'tab4' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #07373c',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              GALLERY
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab3' ? '#ffffff' : '#07373c',
                background: activeTab === 'tab3' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #07373c',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              MAJOR CLIENTS
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab2' ? '#ffffff' : '#07373c',
                background: activeTab === 'tab2' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #07373c',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              Our TEAM
            </button>
            <button
              onClick={() => setActiveTab('tab1')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab1' ? '#ffffff' : '#07373c',
                background: activeTab === 'tab1' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #07373c',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab1') {
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
              maxWidth: '1200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              color: '#07373c'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#07373c',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                OUR PARTNERS
              </h1>
              
              {/* Partner Logos (moved from Major Clients) */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 'clamp(30px, 5vw, 60px)',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: '20px',
                marginBottom: '40px'
              }}>
                <img
                  src={process.env.PUBLIC_URL + "/gcgpartner3 (3).png"}
                  alt="GCG Partner"
                  style={{
                    width: 'clamp(200px, 20vw, 280px)',
                    height: 'auto',
                    maxHeight: '200px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/gcgpartner3 (2).png"}
                  alt="GeoPRO Partner"
                  style={{
                    width: 'clamp(200px, 20vw, 280px)',
                    height: 'auto',
                    maxHeight: '200px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/gcgpartner3 (1).png"}
                  alt="DMT Partner"
                  style={{
                    width: 'clamp(200px, 20vw, 280px)',
                    height: 'auto',
                    maxHeight: '200px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                  }}
                />
              </div>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div style={{
              width: '100%',
              maxWidth: '1200px',
              textAlign: 'center',
              color: '#07373c',
              padding: '20px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#07373c',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                Our TEAM
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#07373c'
              }}>
                Our dedicated team of scientists, engineers, and experts brings decades of combined experience to deliver innovative solutions for your projects.
              </p>
            </div>
          )}

          {activeTab === 'tab3' && (
            <div style={{
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#07373c',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                MAJOR CLIENTS
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#07373c',
                textAlign: 'center',
                maxWidth: '900px'
              }}>
                Our major clients span government agencies, leading industrial companies, and international firms who rely on GSG for precise subsurface investigations and environmental assessments.
              </p>
            </div>
          )}

          {activeTab === 'tab4' && (
            <div style={{
              width: '100%',
              maxWidth: '1200px',
              textAlign: 'center',
              color: '#07373c',
              padding: '20px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#07373c',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                GALLERY
              </h1>
              {/* Empty gallery content */}
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
            color: '#07373c',
            padding: '0',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: '700',
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

