import React, { useState, useRef, useEffect } from 'react';
import { closeVideo as closeVideoUtil } from '../utils/videoUtils';

const AMTLearnMoreModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners, 'tab4' = Gallery
  const [galleryVideoIndex, setGalleryVideoIndex] = useState(0);
  const [galleryFullscreenVideo, setGalleryFullscreenVideo] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const galleryVideoRefs = useRef([]);

  // Reset gallery video index when opening gallery tab
  useEffect(() => {
    if (activeTab === 'tab4') {
      setGalleryVideoIndex(0);
      setGalleryFullscreenVideo(null);
    }
  }, [activeTab]);

  // Helper function to close video
  const closeVideo = React.useCallback((setVideoFullscreen, setVideoPlaying) => {
    closeVideoUtil(setVideoFullscreen, setVideoPlaying);
  }, []);

  if (!isOpen) return null;

  const galleryVideos = [
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ecx4u7.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/Meet_Karim_Alma___AMT_Brand_Ambassadors_by_Zuccess_qhlkb7.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/YTDown.com_YouTube_AMT-Professional-Video-Showcasing-Innova_Media_xjcmXF3MkWQ_001_1080p_wjihjd.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/AMT_1_ydbfwn.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/AMT_2_hsdy7c.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/AMT_3_ythysq.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_access_control_frnjfd.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ictv_s6njml.mp4',
    'https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_fire_alarm_2_fmcgfm.mp4'
  ];

  // Initialize refs array if needed
  if (!galleryVideoRefs.current || galleryVideoRefs.current.length !== galleryVideos.length) {
    galleryVideoRefs.current = galleryVideos.map(() => ({ current: null }));
  }

  const partnerLogos = [
    'aharthurhoml', 'ahuatechnolgy', 'apc', 'aruba', 'atlasied',
    'avaya', 'avigilon', 'biamp', 'chkistie', 'cisco',
    'clearone', 'commscope', 'edward', 'estronelectronics', 'fortinet',
    'hp', 'huawei', 'jbl', 'juniper', 'lenels2',
    'leviton', 'lg', 'nedap', 'orestron', 'pelco',
    'samsung', 'sapling', 'shure', 'televic', 'tripleplay'
  ];

  const teamMembers = [
    { name: 'Eyad Matar', role: 'CEO', image: '/mreyad.jpeg' },
    { name: 'Mohammed Abdul Quddus', role: 'Sales Manager', image: '/mohammadsalesmanager.jpeg' },
    { name: 'Amr Abu Hashem', role: 'Finance Manager', image: '/financemanager.jpeg' },
    { name: 'IMRAN KHAN YAR', role: 'Implementation Manager', image: '/Implementationmanager.jpeg' },
    { name: 'Mike Campbell', role: 'Engineering Manager', image: '/engineeringmanager.jpeg', fallback: 'MC' },
    { name: 'Shadi Jayousi', role: 'IT Manager', image: '/itmanager.jpeg', fallback: 'SJ' },
    { name: 'Mohammad Al Dossary', role: 'Store Manager', image: '/storemanager.jpeg' }
  ];

  const majorClients = [
    { image: '/Group 82.png', alt: "Kingdom of Saudi Arabia" },
    { image: '/Group 83.png', alt: "Imam Abdulrahman Bin Faisal University" },
    { image: '/Group 84.png', alt: "Ma'aden" },
    { image: '/Group 85.png', alt: "King Faisal University" },
    { image: '/Group 86.png', alt: "Marafiq" },
    { image: '/Group 87.png', alt: "Saudi Arabia" },
    { image: '/Group 90.png', alt: "Ministry of Health" },
    { image: '/Group 91.png', alt: "Ministry of Finance" },
    { image: '/Group 92.png', alt: "King Saud University" },
    { image: '/Group 95.png', alt: "Aramco" }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'transparent',
      backgroundImage: `url(${process.env.PUBLIC_URL}/amt-bg.png)`,
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
        padding: 'clamp(15px, 2vh, 25px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#ffffff',
        paddingTop: 'clamp(20px, 3vh, 35px)',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: 'clamp(10px, 1.5vh, 15px)',
          zIndex: 10,
          flexShrink: 0
        }}>
          <button
            onClick={() => setActiveTab('tab4')}
            style={{
              padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'tab4' ? '#ffffff' : '#ff4b4b',
              background: activeTab === 'tab4' 
                ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                : 'rgba(255, 255, 255, 0.15)',
              border: '2px solid #ff4b4b',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              textShadow: activeTab === 'tab4' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
              boxShadow: activeTab === 'tab4' 
                ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                : '0 2px 8px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab4') {
                e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'tab4') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
              }
            }}
          >
            GALLERY
          </button>
          <button
            onClick={() => setActiveTab('tab3')}
            style={{
              padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'tab3' ? '#ffffff' : '#ff4b4b',
              background: activeTab === 'tab3' 
                ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                : 'rgba(255, 255, 255, 0.15)',
              border: '2px solid #ff4b4b',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              textShadow: activeTab === 'tab3' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
              boxShadow: activeTab === 'tab3' 
                ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                : '0 2px 8px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab3') {
                e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'tab3') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
              }
            }}
          >
            MAJOR CLIENTS
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            style={{
              padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'tab2' ? '#ffffff' : '#ff4b4b',
              background: activeTab === 'tab2' 
                ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                : 'rgba(255, 255, 255, 0.15)',
              border: '2px solid #ff4b4b',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              textShadow: activeTab === 'tab2' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
              boxShadow: activeTab === 'tab2' 
                ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                : '0 2px 8px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab2') {
                e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'tab2') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
              }
            }}
          >
            OUR TEAM
          </button>
          <button
            onClick={() => setActiveTab('tab1')}
            style={{
              padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'tab1' ? '#ffffff' : '#ff4b4b',
              background: activeTab === 'tab1' 
                ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                : 'rgba(255, 255, 255, 0.15)',
              border: '2px solid #ff4b4b',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              textShadow: activeTab === 'tab1' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
              boxShadow: activeTab === 'tab1' 
                ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                : '0 2px 8px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'tab1') {
                e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'tab1') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
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
            maxWidth: '1536px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(10px, 1.2vh, 15px)',
            height: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}>
            {/* Partners Logos Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 'clamp(12px, 1.5vw, 16px)',
              width: '100%',
              maxWidth: '1536px',
              padding: 'clamp(8px, 1vh, 12px)',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}>
              {partnerLogos.map((logoName, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(10px, 1.2vw, 14px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: 'clamp(130px, calc((100vh - 100px) / 5 - 16px), 140px)',
                    minHeight: '130px',
                    maxHeight: '140px',
                    width: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    aspectRatio: '1',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/amtpartners/${logoName}.png`}
                    alt={logoName}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      filter: 'brightness(1.1) contrast(1.05)',
                      imageRendering: 'auto'
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

        {activeTab === 'tab2' && (
          <div style={{
            width: '100%',
            maxWidth: '100%',
            textAlign: 'center',
            padding: 'clamp(20px, 2.5vh, 40px) clamp(20px, 2vw, 40px)',
            minHeight: 'calc(100vh - 200px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h1 style={{
              fontSize: 'clamp(32px, 3.2vw, 48px)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'clamp(24px, 3vh, 40px)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textShadow: '0 0 30px rgba(255, 75, 75, 0.4), 0 4px 20px rgba(255, 75, 75, 0.3)',
              filter: 'drop-shadow(0 2px 8px rgba(255, 75, 75, 0.5))'
            }}>
              Our TEAM
            </h1>
            
            {/* Team Members Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 'clamp(12px, 1.5vw, 25px)',
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 clamp(10px, 1.5vw, 30px)',
              width: '100%',
              direction: 'ltr',
              justifyItems: 'center',
              placeItems: 'center'
            }}>
              {teamMembers.map((member, index) => (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'clamp(12px, 1.5vh, 18px)'
                }}>
                  <div style={{
                    width: 'clamp(130px, 12vw, 200px)',
                    height: 'clamp(130px, 12vw, 200px)',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '3px solid #ff4b4b',
                    boxShadow: '0 4px 15px rgba(255, 75, 75, 0.3)'
                  }}>
                    <img
                      src={process.env.PUBLIC_URL + member.image}
                      alt={member.role}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (member.fallback) {
                          e.target.parentElement.innerHTML = `<div style="font-size: 48px; color: #ff4b4b;">${member.fallback}</div>`;
                        } else {
                          e.target.parentElement.innerHTML = '<div style="font-size: 48px; color: #ff4b4b;">👤</div>';
                        }
                      }}
                    />
                  </div>
                  <div style={{
                    fontSize: 'clamp(17px, 1.6vw, 24px)',
                    fontWeight: '800',
                    color: '#1a1a1a',
                    textAlign: 'center',
                    lineHeight: '1.5',
                    textShadow: '0 2px 8px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(255, 255, 255, 0.6)',
                    letterSpacing: '0.5px'
                  }}>
                    {member.name}<br />
                    <span style={{ 
                      fontSize: 'clamp(14px, 1.3vw, 18px)', 
                      fontWeight: '700',
                      color: '#ff4b4b',
                      textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.8px'
                    }}>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
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
            padding: 'clamp(15px, 2vh, 25px)',
            height: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}>
            <h1 style={{
              fontSize: 'clamp(24px, 2.5vw, 36px)',
              fontWeight: '900',
              color: '#ff4b4b',
              marginBottom: 'clamp(15px, 2vh, 25px)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              flexShrink: 0
            }}>
              OUR MAJOR CLIENTS
            </h1>
            
            {/* Partners Grid */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(20px, 2.5vh, 30px)',
              width: '100%',
              maxWidth: '1400px',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}>
              {/* Row 1: 5 logos */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 'clamp(20px, 2.5vw, 35px)',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {majorClients.slice(0, 5).map((client, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'clamp(12px, 1.5vw, 18px)',
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
                      src={process.env.PUBLIC_URL + client.image}
                      alt={client.alt}
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Row 2: 5 logos */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 'clamp(20px, 2.5vw, 35px)',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {majorClients.slice(5, 10).map((client, index) => (
                  <div
                    key={index + 5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 'clamp(12px, 1.5vw, 18px)',
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
                      src={process.env.PUBLIC_URL + client.image}
                      alt={client.alt}
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
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
            maxWidth: '1536px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 'clamp(8px, 1vh, 12px)',
            flex: '1 1 0',
            minHeight: 0,
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}>
            <h1 style={{
              fontSize: 'clamp(18px, 1.8vw, 24px)',
              fontWeight: '900',
              color: '#ff4b4b',
              marginBottom: 'clamp(5px, 0.8vh, 10px)',
              marginTop: '0',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              flexShrink: 0,
              lineHeight: '1.2'
            }}>
              GALLERY
            </h1>
            
            {/* Gallery Videos Grid */}
            <>
              {/* Videos Grid */}
              <div style={{
                width: '100%',
                flex: '1 1 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: 'clamp(8px, 1vw, 15px)',
                padding: 'clamp(3px, 0.3vh, 6px)',
                overflow: 'hidden',
                boxSizing: 'border-box',
                minHeight: 0,
                height: '100%'
              }}>
                {galleryVideos.map((videoUrl, index) => (
                  <div
                    key={index}
                    onClick={async () => {
                      setGalleryFullscreenVideo(videoUrl);
                      setVideoPlaying(true);
                      // Request fullscreen after a small delay to ensure container is rendered
                      setTimeout(async () => {
                        try {
                          const container = galleryVideoRefs.current[index]?.current;
                          if (container) {
                            let fullscreenPromise;
                            if (container.requestFullscreen) {
                              fullscreenPromise = container.requestFullscreen();
                            } else if (container.webkitRequestFullscreen) {
                              fullscreenPromise = container.webkitRequestFullscreen();
                            } else if (container.msRequestFullscreen) {
                              fullscreenPromise = container.msRequestFullscreen();
                            }
                            if (fullscreenPromise) {
                              await fullscreenPromise;
                            }
                          }
                        } catch (error) {
                          console.error('Error opening gallery video fullscreen:', error);
                        }
                      }, 100);
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      background: '#000',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minHeight: 0,
                      minWidth: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    <video
                      src={videoUrl}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                        display: 'block',
                        filter: index === 1 ? 'brightness(0)' : 'none'
                      }}
                      muted
                      playsInline
                      preload="metadata"
                      title={`Gallery Video ${index + 1}`}
                    />
                    {/* Play Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(255, 75, 75, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10
                    }}>
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
                ))}
              </div>
              
              {/* Fullscreen Video Containers - Hidden until activated */}
              {galleryVideos.map((videoUrl, index) => (
                <div
                  key={`fullscreen-${index}`}
                  ref={el => {
                    if (galleryVideoRefs.current[index]) {
                      galleryVideoRefs.current[index].current = el;
                    }
                  }}
                  style={{
                    position: 'fixed',
                    right: galleryFullscreenVideo === videoUrl ? '0' : '-9999px',
                    top: galleryFullscreenVideo === videoUrl ? '0' : '-9999px',
                    width: galleryFullscreenVideo === videoUrl ? '100vw' : '0',
                    height: galleryFullscreenVideo === videoUrl ? '100vh' : '0',
                    zIndex: galleryFullscreenVideo === videoUrl ? 9999 : -1,
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {galleryFullscreenVideo === videoUrl && (
                    <video
                      key={`gallery-video-${index}-${galleryFullscreenVideo}`}
                      src={videoUrl}
                      autoPlay
                      controls
                      style={{
                        height: '100%',
                        width: '100%',
                        maxHeight: '100vh',
                        maxWidth: '100vw',
                        objectFit: 'contain'
                      }}
                      onEnded={() => {
                        closeVideo(() => setGalleryFullscreenVideo(null), setVideoPlaying);
                      }}
                      title={`Gallery Video ${index + 1}`}
                    />
                  )}
                  {galleryFullscreenVideo === videoUrl && (
                    <button
                      onClick={() => {
                        closeVideo(() => setGalleryFullscreenVideo(null), setVideoPlaying);
                      }}
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: 'none',
                        color: '#fff',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        fontSize: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 75, 75, 0.9)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </>
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '40px',
          right: '40px',
          background: 'rgba(0, 0, 0, 0.8)',
          border: 'none',
          color: '#fff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          fontSize: '28px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 2001,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          fontWeight: 'bold'
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
        Back
      </button>
    </div>
  );
};

export default AMTLearnMoreModal;
