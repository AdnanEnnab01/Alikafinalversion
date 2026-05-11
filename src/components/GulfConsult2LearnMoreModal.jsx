import React, { useState } from 'react';
import { getPublicUrl } from '../utils/pathUtils';

export default function GulfConsult2LearnMoreModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners, 'tab4' = Gallery
  const [galleryPlaying, setGalleryPlaying] = useState(false); // Fullscreen gallery video

  if (!isOpen) return null;

  const gulfConsultClients = [
    'WhatsApp Image 2026-04-13 at 11.40.03 AM.jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (1).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (2).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (3).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (4).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (5).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (6).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (7).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (8).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (9).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (10).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (11).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (12).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (13).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (14).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (15).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (16).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (17).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (18).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (19).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (20).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (21).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (22).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (23).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (24).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (25).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (26).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (27).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (28).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (29).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (30).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (31).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (32).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (33).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (34).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (35).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (36).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (37).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (38).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (39).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (40).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (41).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (42).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (43).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (44).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (45).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (46).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (47).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (48).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (49).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (50).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (51).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (52).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (53).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (54).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (55).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (56).jpeg',
    'WhatsApp Image 2026-04-13 at 11.40.03 AM (57).jpeg',
  ];

  const teamMembers = [
    {
      key: 'ceo',
      name: 'Faisal Al-Harbi',
      role: 'CEO',
      image: getPublicUrl('gulfteam/gulfCeo.jpg'),
    },
    {
      key: 'gm',
      name: 'Rabah Yehya',
      role: 'General Manager',
      image: getPublicUrl('gulfteam/generalmanageer.jpg'),
    },
    {
      key: 'geotech',
      name: 'Roshan N. S.',
      role: 'Geotechnical Division Manager',
      image: getPublicUrl('gulfteam/geotechmanager.jpg'),
    },
    {
      key: 'survey',
      name: 'Dave Pongasi',
      role: 'Survey Division Manager',
      image: getPublicUrl('gulfteam/surveymanager.jpg'),
    },
    {
      key: 'contracts',
      name: 'Furqan Siddiqui',
      role: 'Contracts Manager',
      image: getPublicUrl('gulfteam/contactsmanager.jpg'),
    },
    {
      key: 'riyadh',
      name: 'Jiju John',
      role: 'Riyadh Branch Manager',
      image: getPublicUrl('gulfteam/riyadbranchmanager.jpg'),
    },
    {
      key: 'finance',
      name: 'Salem Moribot',
      role: 'Finance Manager',
      image: getPublicUrl('gulfteam/financemanager.jpg'),
    },
    {
      key: 'quality',
      name: 'Erick Serioza',
      role: 'Quality Manager',
      image: getPublicUrl('gulfteam/qualitymanager.jpg'),
    },
    {
      key: 'material',
      name: 'Peter Calmerin',
      role: 'Material Testing Division Manager',
      image: getPublicUrl('gulfteam/materialtesting.jpg'),
    },
  ];

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
              padding: '20px',
              overflow: 'hidden'
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

              <div
                style={{
                  marginTop: 'clamp(18px, 2.5vh, 28px)',
                  width: 'min(94vw, 1200px)',
                  maxHeight: 'calc(100vh - 260px)',
                  overflowY: 'auto',
                  padding: 'clamp(8px, 1.2vw, 14px)',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 'clamp(12px, 1.4vw, 18px)',
                    alignItems: 'stretch',
                    direction: 'ltr'
                  }}
                >
                  {teamMembers.map((m) => (
                    <div
                      key={m.key}
                      style={{
                        background: 'rgba(0, 0, 0, 0.18)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '14px',
                        padding: '14px',
                        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.28)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 14px 34px rgba(0, 0, 0, 0.36)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.28)';
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '4 / 3',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          background: 'rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img
                          src={m.image}
                          alt={`${m.name} - ${m.role}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: m.key === 'finance' ? 'contain' : 'cover',
                            objectPosition: m.key === 'finance' ? 'center top' : 'center',
                            display: 'block'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div style={{ marginTop: '12px' }}>
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: 800,
                            color: '#ffffff',
                            letterSpacing: '0.2px'
                          }}
                        >
                          {m.name}
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            opacity: 0.92,
                            color: 'rgba(255, 255, 255, 0.92)',
                            marginTop: '4px'
                          }}
                        >
                          {m.role}
                        </div>
                      </div>
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
              justifyContent: 'flex-start',
              padding: 'clamp(6px, 1.5vh, 12px)',
              boxSizing: 'border-box',
              flex: 1,
              minHeight: 0,
              overflow: 'hidden'
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
              
              {/* Major Clients Grid (fit all in viewport; no scroll) */}
              <div
                style={{
                  width: 'min(96vw, 1420px)',
                  padding: 'clamp(6px, 0.9vw, 12px)',
                  marginBottom: 'clamp(6px, 1.2vh, 10px)',
                  overflow: 'hidden',
                  flex: 1,
                  minHeight: 0,
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(126px, 1fr))',
                    gap: 'clamp(8px, 0.95vw, 12px)',
                    width: '100%',
                    height: '100%',
                    justifyItems: 'center',
                    alignItems: 'center',
                    alignContent: 'center'
                  }}
                >
                  {gulfConsultClients.map((fileName, index) => (
                    <div
                      key={fileName}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 'clamp(6px, 0.7vw, 10px)',
                        background: 'rgba(0, 0, 0, 0.15)',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        width: '100%',
                        height: 'clamp(62px, 8.2vh, 92px)',
                        boxSizing: 'border-box'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.15)';
                      }}
                    >
                      <img
                        src={getPublicUrl(`gulfconsultCients/${encodeURIComponent(fileName)}`)}
                        alt={`Gulf Consult client ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          filter: 'brightness(1.05) contrast(1.05)',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
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
                  src={getPublicUrl("gulfconsultgalleryvideos/Gulf_Consult_luuscu.webm")}
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
              src={getPublicUrl("gulfconsultgalleryvideos/Gulf_Consult_luuscu.webm")}
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
