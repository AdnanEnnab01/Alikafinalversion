import React, { useState, useRef, useEffect } from 'react';
import { useVideoFullscreen } from '../hooks/useVideoFullscreen';
import { getPublicUrl } from '../utils/pathUtils';

export default function GulfDorrah({ isOpen, onClose, viewportSize }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoFullscreen, setVideoFullscreen] = useState(false);
  const videoContainerRef = useRef(null);

  // Use shared hook for fullscreen handling
  useVideoFullscreen(setVideoPlaying, setVideoFullscreen);

  // Helper function to close video and exit fullscreen
  const closeVideo = () => {
    setTimeout(() => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setVideoFullscreen(false);
      setVideoPlaying(false);
    }, 100);
  };

  return (
    <>
      {/* Al Dorrah Video - Always rendered, hidden when not fullscreen */}
      <div
        ref={videoContainerRef}
        style={{
          position: 'fixed',
          right: videoFullscreen ? '0' : '-9999px',
          top: videoFullscreen ? '0' : '-9999px',
          width: videoFullscreen ? '100vw' : '0',
          height: videoFullscreen ? '100vh' : '0',
          zIndex: videoFullscreen ? 10000 : -1,
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {videoFullscreen && (
          <video
            key={`dorrah-video-${videoFullscreen}`}
            src="https://res.cloudinary.com/dl2rqs0lo/video/upload/dorrah_ei9ijx.mp4"
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
              closeVideo();
            }}
          />
        )}
        {videoFullscreen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
              setVideoFullscreen(false);
              setVideoPlaying(false);
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
        )}
      </div>

      {/* Gulf Dorrah Learn More Modal */}
      {isOpen && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#061826',
        backgroundImage: `url(${getPublicUrl('dorrah-gif.gif')})`,
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
          color: '#ffffff',
          paddingTop: '20px'
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
                color: activeTab === 'tab1' ? '#ffffff' : '#33d18f',
                background: activeTab === 'tab1' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(51, 209, 143, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
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
                color: activeTab === 'tab2' ? '#ffffff' : '#33d18f',
                background: activeTab === 'tab2' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(51, 209, 143, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
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
                color: activeTab === 'tab3' ? '#ffffff' : '#33d18f',
                background: activeTab === 'tab3' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(51, 209, 143, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
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
                color: activeTab === 'tab4' ? '#ffffff' : '#33d18f',
                background: activeTab === 'tab4' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(51, 209, 143, 0.8)',
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
                  e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab4') {
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
              padding: '40px'
            }}>
              <h2 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#33d18f',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                GALLERY
              </h2>
              {/* Play Video Button */}
              <button
                type="button"
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Play Video button clicked');
                  console.log('videoContainerRef.current:', videoContainerRef.current);
                  
                  if (!videoContainerRef.current) {
                    console.error('videoContainerRef.current is null!');
                    alert('Video container not found. Please refresh the page.');
                    return;
                  }
                  
                  try {
                    // Set state first
                    setVideoFullscreen(true);
                    setVideoPlaying(true);
                    
                    console.log('State set, requesting fullscreen...');
                    
                    // Wait a tiny bit for React to update DOM
                    await new Promise(resolve => setTimeout(resolve, 100));
                    
                    // Ensure container is visible before requesting fullscreen
                    if (videoContainerRef.current) {
                      videoContainerRef.current.style.width = '100vw';
                      videoContainerRef.current.style.height = '100vh';
                      videoContainerRef.current.style.right = '0';
                      videoContainerRef.current.style.top = '0';
                      videoContainerRef.current.style.zIndex = '10000';
                    }

                    let fullscreenPromise;
                    if (videoContainerRef.current?.requestFullscreen) {
                      fullscreenPromise = videoContainerRef.current.requestFullscreen();
                    } else if (videoContainerRef.current?.webkitRequestFullscreen) {
                      fullscreenPromise = videoContainerRef.current.webkitRequestFullscreen();
                    } else if (videoContainerRef.current?.msRequestFullscreen) {
                      fullscreenPromise = videoContainerRef.current.msRequestFullscreen();
                    }

                    if (fullscreenPromise) {
                      await fullscreenPromise;
                      console.log('Fullscreen granted');
                    } else {
                      console.log('Fullscreen API not available, video should still show');
                    }
                  } catch (error) {
                    console.error('Error opening Dorrah video from button:', error);
                    // Video should still show even if fullscreen fails
                    setVideoFullscreen(true);
                    setVideoPlaying(true);
                  }
                }}
                style={{
                  padding: 'clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px)',
                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                  fontWeight: '700',
                  color: '#33d18f',
                  background: 'rgba(0, 0, 0, 0.65)',
                  border: '2px solid #33d18f',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backdropFilter: 'blur(6px)',
                  marginTop: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(51, 209, 143, 0.8)';
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                }}
              >
                <span>Play Video</span>
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#33d18f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ marginLeft: '2px' }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
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
              padding: '40px'
            }}>
              <h2 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#33d18f',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                MAJOR CLIENTS
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#ffffff',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                Major clients information will be displayed here.
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
              padding: '40px'
            }}>
              <h2 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#33d18f',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                OUR TEAM
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#ffffff',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                Our team information will be displayed here.
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
              padding: '40px'
            }}>
              <h2 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                fontWeight: '900',
                color: '#33d18f',
                marginBottom: '30px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                OUR PARTNERS
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#ffffff',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                Our partners information will be displayed here.
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
      )}
    </>
  );
}
