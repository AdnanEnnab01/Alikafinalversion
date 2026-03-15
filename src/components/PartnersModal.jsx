import React from 'react';
import { getPublicUrl } from '../utils/pathUtils';

const PartnersModal = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="partners-modal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        backgroundImage: `url(${getPublicUrl('bg.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 2000,
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
        minHeight: '100vh',
        padding: 'clamp(20px, 3vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        {/* Tabs Navigation */}
        <div style={{
          display: 'flex',
          gap: 'clamp(8px, 1vw, 12px)',
          marginBottom: 'clamp(20px, 3vh, 30px)',
          zIndex: 10
        }}>
          <button
            onClick={() => setActiveTab('gallery')}
            style={{
              padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'gallery' ? '#ffffff' : '#2d8659',
              background: activeTab === 'gallery' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #2d8659',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'gallery') {
                e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'gallery') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              }
            }}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('project')}
            style={{
              padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'project' ? '#ffffff' : '#2d8659',
              background: activeTab === 'project' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #2d8659',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'project') {
                e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'project') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              }
            }}
          >
            MAJOR CLIENTS
          </button>
          <button
            onClick={() => setActiveTab('team')}
            style={{
              padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'team' ? '#ffffff' : '#2d8659',
              background: activeTab === 'team' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #2d8659',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'team') {
                e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'team') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              }
            }}
          >
            Our Team
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            style={{
              padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: '700',
              color: activeTab === 'partners' ? '#ffffff' : '#2d8659',
              background: activeTab === 'partners' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #2d8659',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'partners') {
                e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'partners') {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              }
            }}
          >
            Our Partners
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'partners' && (
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '20px',
            paddingBottom: '40px'
          }}>
            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: '900',
              color: '#2d8659',
              marginBottom: 'clamp(20px, 3vh, 30px)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              OUR PARTNERS
            </h1>
          </div>
        )}

        {activeTab === 'team' && (
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            textAlign: 'center',
            color: '#2d8659',
            paddingTop: '20px',
            paddingBottom: '40px'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: '900',
              color: '#2d8659',
              marginBottom: 'clamp(20px, 3vh, 30px)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              OUR TEAM
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              lineHeight: '1.8',
              color: '#2d8659'
            }}>
              Our dedicated team of professionals is committed to delivering excellence in environmental testing and consulting services.
            </p>
          </div>
        )}

        {activeTab === 'project' && (
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '20px',
            paddingBottom: '40px',
            color: '#2d8659'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: '900',
              color: '#2d8659',
              marginBottom: 'clamp(20px, 3vh, 30px)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              MAJOR CLIENTS
            </h1>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 'clamp(18px, 2vw, 28px)',
              width: '100%',
              maxWidth: '1100px',
              padding: 'clamp(16px, 2vw, 28px)',
              justifyItems: 'center'
            }}>
              {[
                'client-logo-011677925020-removebg-preview.png',
                'Screenshot_2026-02-26_113432-removebg-preview.png',
                'Screenshot_2026-02-26_113503-removebg-preview.png',
                'Screenshot_2026-02-26_113525-removebg-preview.png',
                'Screenshot_2026-02-26_113541-removebg-preview.png',
                'Screenshot_2026-02-26_113554-removebg-preview.png',
                'Screenshot_2026-02-26_113618-removebg-preview.png',
                'Screenshot_2026-02-26_113629-removebg-preview.png',
                'Screenshot_2026-02-26_113641-removebg-preview.png',
                'Screenshot_2026-02-26_113655-removebg-preview.png',
                'Screenshot_2026-02-26_113706-removebg-preview.png',
                'Screenshot_2026-02-26_114242-removebg-preview.png'
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
                    boxShadow: 'none'
                  }}
                >
                  <img
                    src={getPublicUrl(`tlcomajorclients/${logoName}`)}
                    alt={`TLCO major client ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 'clamp(130px, 18vh, 180px)',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            textAlign: 'center',
            color: '#2d8659',
            paddingTop: '20px',
            paddingBottom: '40px'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: '900',
              color: '#2d8659',
              marginBottom: 'clamp(20px, 3vh, 30px)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Gallery
            </h1>
            {/* Empty gallery content */}
          </div>
        )}
      </div>

      {/* Back button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 'clamp(20px, 2.5vw, 40px)',
          right: 'clamp(20px, 2.5vw, 40px)',
          background: 'transparent',
          border: 'none',
          color: '#2d8659',
          padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
          fontSize: 'clamp(14px, 1.5vw, 18px)',
          fontWeight: '700',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          zIndex: 2001,
          whiteSpace: 'nowrap',
          textDecoration: 'none',
          borderRadius: '8px',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
          boxShadow: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#2d8659';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 134, 89, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#2d8659';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Back
      </button>
    </div>
  );
};

export default PartnersModal;
