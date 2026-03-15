import React from 'react';

export default function BackToAlikaButton({ onClick, selectedCompanyId }) {
  const isAMT = selectedCompanyId === 8;
  
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: 'clamp(20px, 2.5vw, 60px)',
        right: 'clamp(20px, 2.5vw, 60px)',
        background: isAMT ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.28)',
        color: 'rgba(255, 255, 255, 0.95)',
        padding: 'clamp(10px, 1.2vw, 20px) clamp(18px, 2vw, 32px)',
        borderRadius: 'clamp(12px, 1.2vw, 18px)',
        fontSize: 'clamp(13px, 1.2vw, 24px)',
        fontWeight: '800',
        letterSpacing: '0.35px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        zIndex: 20,
        boxShadow: '0 16px 45px rgba(0, 0, 0, 0.35)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        whiteSpace: 'nowrap'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isAMT ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.45)';
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 18px 50px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isAMT ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.35)';
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 16px 45px rgba(0, 0, 0, 0.35)';
      }}
    >
      Back to Alika
    </button>
  );
}
