import React, { useState } from 'react';
import { getPublicUrl } from '../utils/pathUtils';

export default function GulfConsult2LearnMoreModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners, 'tab4' = Gallery
  const [galleryPlaying, setGalleryPlaying] = useState(false); // Fullscreen gallery video

  if (!isOpen) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${getPublicUrl('gulfconsultbg.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 2000,
        animation: 'fadeIn 0.6s ease-in-out',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          height: '100vh',
          padding: 'clamp(20px, 3vh, 30px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#ffffff',
          paddingTop: 'clamp(60px, 8vh, 80px)',
          boxSizing: 'border-box'
        }}>
          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '40px',
            zIndex: 10,
            flexShrink: 0
          }}>
            <button
              onClick={() => setActiveTab('tab4')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '700',
                color: activeTab === 'tab4' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab4' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(33, 150, 243, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
                color: activeTab === 'tab3' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab3' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(33, 150, 243, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
                color: activeTab === 'tab2' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab2' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(33, 150, 243, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
                color: activeTab === 'tab1' ? '#ffffff' : '#ffffff',
                background: activeTab === 'tab1' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(33, 150, 243, 0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
              color: '#ffffff',
              padding: 'clamp(5px, 1vh, 10px)'
            }}>
              <h1 style={{
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: 'clamp(10px, 1.5vh, 15px)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                OUR PARTNERS
              </h1>
              
              {/* Project Image */}
              <div style={{
                width: '100%',
                marginBottom: 'clamp(20px, 3vh, 30px)',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img
                  src={getPublicUrl("image 65.png")}
                  alt="Our Projects - Geotechnical Investigation"
                  style={{
                    width: '100%',
                    maxWidth: 'clamp(450px, 55vw, 700px)',
                    maxHeight: 'clamp(250px, 30vh, 350px)',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: 'none',
                    background: 'transparent'
                  }}
                />
              </div>
              
              {/* Project Description */}
              <div style={{
                width: '100%',
                maxWidth: 'clamp(450px, 55vw, 700px)',
                textAlign: 'left',
                padding: '0 20px',
                marginTop: 'clamp(15px, 2vh, 25px)'
              }}>
                <p style={{
                  fontSize: 'clamp(12px, 1.1vw, 16px)',
                  lineHeight: '1.6',
                  color: '#ffffff',
                  marginBottom: '10px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'normal',
                  textTransform: 'lowercase'
                }}>
                  gulf consult has recently completed an extensive geotechnical investigation for amiral project pre-feed/feed - block 15 and other areas; at jubail
                </p>
                <p style={{
                  fontSize: 'clamp(12px, 1.1vw, 16px)',
                  lineHeight: '1.6',
                  color: '#ffffff',
                  marginBottom: '10px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'normal',
                  textTransform: 'lowercase'
                }}>
                  our scope of work includes drilling and sampling of over 900 boreholes and cross hole seismic test, soil electrical resistivity, plate load test, surface seismic refraction test
                </p>
                <p style={{
                  fontSize: 'clamp(12px, 1.1vw, 16px)',
                  lineHeight: '1.6',
                  color: '#ffffff',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'normal',
                  textTransform: 'lowercase'
                }}>
                  the client for this project is worley parsons
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tab2' && (
            <div style={{
              width: '100%',
              maxWidth: '1200px',
              textAlign: 'center',
              color: '#ffffff',
              padding: '20px'
            }}>
              <h1 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                Our TEAM
              </h1>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#ffffff'
              }}>
                Our dedicated team brings over 42 years of combined experience in providing high-quality engineering and environmental services.
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
              justifyContent: 'flex-start',
              padding: 'clamp(6px, 1.5vh, 12px)',
              boxSizing: 'border-box'
            }}>
              <h1 style={{
                fontSize: 'clamp(16px, 1.8vw, 24px)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: 'clamp(6px, 1vh, 10px)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                flexShrink: 0
              }}>
                MAJOR CLIENTS
              </h1>
              
              {/* Major Clients Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: 'clamp(12px, 1.2vw, 18px)',
                width: 'min(94vw, 1380px)',
                marginBottom: 'clamp(8px, 2vh, 16px)',
                padding: 'clamp(8px, 1.2vw, 16px)',
                justifyItems: 'center',
                alignItems: 'center'
              }}>
                {[
                  'client-logo-011677925020-removebg-preview.png',
                  'client-logo-021677925040-removebg-preview.png',
                  'client-logo-031677925052-removebg-preview.png',
                  'client-logo-051677925080-removebg-preview.png',
                  'client-logo-061677925092-removebg-preview.png',
                  'client-logo-071677925107-removebg-preview.png',
                  'client-logo-081677925121-removebg-preview.png',
                  'client-logo-091677925161-removebg-preview.png',
                  'client-logo-101677925175-removebg-preview.png',
                  'client-logo-111677925191-removebg-preview.png',
                  'client-logo-121677925204-removebg-preview.png',
                  'client-logo-131677925217-removebg-preview.png',
                  'client-logo-141677925235-removebg-preview.png',
                  'client-logo-151677925253-removebg-preview.png',
                  'client-logo-161677925271-removebg-preview.png',
                  'client-logo-171677925301-removebg-preview.png',
                  'client-logo-181677925314-removebg-preview.png',
                  'client-logo-191677925326-removebg-preview.png',
                  'client-logo-201677925344-removebg-preview.png',
                  'client-logo-211677925363-removebg-preview.png',
                  'client-logo-221677925375-removebg-preview.png',
                  'client-logo-231677925395-removebg-preview.png',
                  'client-logo-241677925410-removebg-preview.png',
                  'client-logo-251677925424-removebg-preview.png',
                  'client-logo-261677925437-removebg-preview.png',
                  'client-logo-271677925451-removebg-preview.png'
                ].map((logoName, index) => (
                  <div
                    key={logoName}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'clamp(6px, 0.7vw, 10px)',
                      background: 'rgba(0, 0, 0, 0.15)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      minHeight: '120px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.06)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.15)';
                    }}
                  >
                    <img
                      src={getPublicUrl(`gulfconsultmajerclients/${logoName}`)}
                      alt={`Major client ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '190px',
                        maxHeight: '120px',
                        objectFit: 'contain',
                        filter: 'brightness(1.05) contrast(1.05)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
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
              padding: 'clamp(5px, 1vh, 10px)'
            }}>
              <h1 style={{
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                fontWeight: '900',
                color: '#ffffff',
                marginBottom: 'clamp(15px, 2vh, 30px)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                GALLERY
              </h1>

              {/* Gulf Consult 2 Gallery Video (thumbnail that opens fullscreen) */}
              <div
                onClick={() => setGalleryPlaying(true)}
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  aspectRatio: '16/9',
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                  background: '#000',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.25)';
                }}
              >
                <video
                  src="https://res.cloudinary.com/dl2rqs0lo/video/upload/q_auto,f_auto/Gulf_Consult_luuscu.mp4"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    display: 'block'
                  }}
                  muted
                  playsInline
                  preload="metadata"
                  title="Gulf Consult Gallery Video"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(33, 150, 243, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ marginLeft: '4px' }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gulf Consult 2 Gallery fullscreen video overlay */}
        {galleryPlaying && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2100,
              backgroundColor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <video
              src="https://res.cloudinary.com/dl2rqs0lo/video/upload/q_auto,f_auto/Gulf_Consult_luuscu.mp4"
              autoPlay
              controls
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100vw',
                maxHeight: '100vh',
                objectFit: 'contain'
              }}
              onEnded={() => {
                setGalleryPlaying(false);
                onClose();
              }}
              title="Gulf Consult Gallery Video"
            />
            <button
              onClick={() => setGalleryPlaying(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                color: '#ffffff',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(33, 150, 243, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              }}
            >
              ✕
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '40px',
            right: '40px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.95)',
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
