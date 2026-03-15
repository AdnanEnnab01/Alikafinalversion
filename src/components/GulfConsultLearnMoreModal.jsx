import React, { useState } from 'react';
import { getPublicUrl } from '../utils/pathUtils';

const GulfConsultLearnMoreModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners, 'tab4' = Gallery

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      backgroundImage: `url(${getPublicUrl}/gc-engineer-learnmore-bg.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 2000,
      animation: 'fadeIn 0.6s ease-in-out',
      overflow: 'hidden',
      overflowY: 'hidden',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      {/* Content Container */}
      <div style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        padding: 'clamp(10px, 2vh, 20px) clamp(20px, 3vw, 40px)',
        paddingTop: 'clamp(40px, 5vh, 50px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        overflowY: 'hidden',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          gap: 'clamp(8px, 1vw, 10px)',
          marginBottom: 'clamp(8px, 1vh, 10px)',
          zIndex: 10,
          flexShrink: 0,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setActiveTab('tab4')}
            style={{
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: '700',
              color: activeTab === 'tab4' ? '#ffffff' : '#6a1b9a',
              background: activeTab === 'tab4' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #6a1b9a',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              letterSpacing: '1px',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab4') {
                e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
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
              color: activeTab === 'tab3' ? '#ffffff' : '#6a1b9a',
              background: activeTab === 'tab3' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #6a1b9a',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              letterSpacing: '1px',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab3') {
                e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
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
              color: activeTab === 'tab2' ? '#ffffff' : '#6a1b9a',
              background: activeTab === 'tab2' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #6a1b9a',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              letterSpacing: '1px',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab2') {
                e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
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
              color: activeTab === 'tab1' ? '#ffffff' : '#6a1b9a',
              background: activeTab === 'tab1' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #6a1b9a',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              letterSpacing: '1px',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab1') {
                e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
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
        {activeTab === 'tab3' && (
          <div style={{
            width: '100%',
            maxWidth: '1536px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 'clamp(3px, 0.5vh, 8px) clamp(8px, 0.8vw, 12px)',
            overflow: 'visible',
            overflowY: 'visible',
            overflowX: 'visible',
            flex: 1,
            minHeight: 0,
            height: '100%',
            boxSizing: 'border-box'
          }}>
            <h1 style={{
              fontSize: 'clamp(16px, 1.6vw, 24px)',
              fontWeight: '900',
              color: '#6a1b9a',
              marginBottom: 'clamp(5px, 0.6vh, 8px)',
              marginTop: '0',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              flexShrink: 0,
              lineHeight: '1.1'
            }}>
              MAJOR CLIENTS
            </h1>

            {/* Partners Logos Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
              gap: 'clamp(3px, 0.4vw, 6px)',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '0',
              overflow: 'hidden',
              width: '100%',
              flex: 1,
              minHeight: 0,
              height: '100%',
              padding: '0',
              boxSizing: 'border-box',
              alignContent: 'center',
              gridAutoFlow: 'row'
            }}>
              {(() => {
                const logos = [
                  getPublicUrl + '/gcpartner4.png',
                  getPublicUrl + '/gcpartner3.png',
                  getPublicUrl + '/gcpartner2.png',
                  getPublicUrl + '/gcpartner1.png',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 092851.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 092924.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 092942.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 092959.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093016.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093029.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093053.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093107.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093123.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093137.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093151.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093204.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093219.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093233.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093250.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093303.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093332.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093343.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093356.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093411.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093424.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093436.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093447.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093501.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093522.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093533.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093548.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093600.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093614.jpg',
                  getPublicUrl + '/gcmajorclients/Screenshot 2026-02-28 093626.jpg'
                ];
                return logos.map((logoPath, index) => (
                <div
                  key={`logo-${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(3px, 0.4vw, 6px)',
                    flexShrink: 0,
                    boxSizing: 'border-box',
                    minWidth: 0,
                    minHeight: 0
                  }}
                >
                  <img
                    src={logoPath}
                    alt={`Client ${index + 1}`}
                    onError={(e) => {
                      e.target.src = getPublicUrl + '/elco-gif.gif';
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '50%',
                      display: 'block'
                    }}
                  />
                </div>
                ));
              })()}
            </div>
          </div>
        )}

        {activeTab === 'tab2' && (
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            textAlign: 'center',
            color: '#6a1b9a',
            padding: '20px'
          }}>
            <h1 style={{
              fontSize: 'clamp(24px, 2.5vw, 36px)',
              fontWeight: '900',
              color: '#6a1b9a',
              marginBottom: '30px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Our TEAM
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              color: '#6a1b9a'
            }}>
              Our dedicated team of professionals is committed to delivering excellence.
            </p>
          </div>
        )}

        {activeTab === 'tab1' && (
          <div style={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '5px 20px 20px 20px',
            color: '#6a1b9a',
            minHeight: 'calc(100vh - 180px)',
            overflow: 'visible'
          }}>
            <h1 style={{
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: '1000',
              color: '#6a1b9a',
              marginBottom: '10px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              OUR PARTNERS
            </h1>

            {/* Projects Grid */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '100%',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-start'
            }}>
              {/* First Row - 3 images */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <img
                  src={getPublicUrl + "/gc-project1.png"}
                  alt="Project 1"
                  style={{
                    width: 'clamp(200px, 22vw, 320px)',
                    height: 'auto',
                    maxHeight: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <img
                  src={getPublicUrl + "/gc-project2.png"}
                  alt="Project 2"
                  style={{
                    width: 'clamp(200px, 22vw, 320px)',
                    height: 'auto',
                    maxHeight: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <img
                  src={getPublicUrl + "/gc-project3.png"}
                  alt="Project 3"
                  style={{
                    width: 'clamp(200px, 22vw, 320px)',
                    height: 'auto',
                    maxHeight: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                  }}
                />
              </div>

              {/* Second Row - 2 images */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <img
                  src={getPublicUrl + "/gc-project4.png"}
                  alt="Project 4"
                  style={{
                    width: 'clamp(200px, 22vw, 320px)',
                    height: 'auto',
                    maxHeight: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <img
                  src={getPublicUrl + "/gc-project5.png"}
                  alt="Project 5"
                  style={{
                    width: 'clamp(200px, 22vw, 320px)',
                    height: 'auto',
                    maxHeight: '180px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                  }}
                />
              </div>
            </div>

            {/* Project Info */}
            <div style={{
              marginTop: '12px',
              textAlign: 'center',
              marginBottom: '0px',
              paddingBottom: '10px'
            }}>
              <h2 style={{
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                fontWeight: '900',
                color: '#6a1b9a',
                marginBottom: '8px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                LAND RIG
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                color: '#000000',
                fontWeight: '400',
                margin: '0'
              }}>
                Ras Al Khair
              </p>
            </div>
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
            padding: 'clamp(10px, 1.5vh, 20px)',
            overflow: 'hidden',
            overflowY: 'hidden',
            overflowX: 'hidden',
            flex: 1,
            minHeight: 0,
            maxHeight: 'calc(100vh - 180px)',
            boxSizing: 'border-box'
          }}>
            <h1 style={{
              fontSize: 'clamp(20px, 2.2vw, 32px)',
              fontWeight: '900',
              color: '#6a1b9a',
              marginBottom: 'clamp(15px, 2vh, 30px)',
              marginTop: '0',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              flexShrink: 0
            }}>
              GALLERY
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              color: '#6a1b9a',
              textAlign: 'center'
            }}>
              Gallery content will be displayed here.
            </p>
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
          color: '#4a148c',
          padding: '0',
          fontSize: 'clamp(14px, 1.3vw, 18px)',
          fontWeight: '800',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          zIndex: 2001,
          whiteSpace: 'nowrap',
          textDecoration: 'none',
          transition: 'opacity 0.3s ease',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8';
          e.currentTarget.style.color = '#3d0f6f';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.color = '#4a148c';
        }}
      >
        Back
      </button>
    </div>
  );
};

export default GulfConsultLearnMoreModal;
