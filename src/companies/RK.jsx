import React, { useState } from 'react';

export default function RK({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners

  if (!isOpen) return null;

  return (
    <>
      {/* RK Learn More Modal */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        backgroundImage: `url(${process.env.PUBLIC_URL}/rk1-gif.gif)`,
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
          color: '#000000',
          paddingTop: '40px'
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
                padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: '700',
                color: activeTab === 'tab1' ? '#ffffff' : '#F4A460',
                background: activeTab === 'tab1' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #F4A460',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab1') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: '700',
                color: activeTab === 'tab2' ? '#ffffff' : '#F4A460',
                background: activeTab === 'tab2' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #F4A460',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab2') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              Major Clients
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: '700',
                color: activeTab === 'tab3' ? '#ffffff' : '#F4A460',
                background: activeTab === 'tab3' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #F4A460',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab3') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              Our Team
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              style={{
                padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: '700',
                color: activeTab === 'tab4' ? '#ffffff' : '#F4A460',
                background: activeTab === 'tab4' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #F4A460',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tab4') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              Our Partners
            </button>
          </div>
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
    </>
  );
}

