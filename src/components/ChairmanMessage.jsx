import React from 'react';

const ChairmanMessage = ({ onClose }) => {
  return (
    <div 
      className="chairman-message-container chairman-scrollable"
      style={{
        width: '100%',
        maxWidth: 'clamp(350px, 45vw, 600px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        animation: 'slideUpFromBottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        padding: 'clamp(25px, 3vw, 40px)',
        maxHeight: '90vh',
        overflowY: 'auto',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
      }}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 'clamp(12px, 1.5vw, 20px)',
          right: 'clamp(12px, 1.5vw, 20px)',
          width: 'clamp(32px, 3vw, 40px)',
          height: 'clamp(32px, 3vw, 40px)',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(0, 0, 0, 0.4)',
          color: '#ffffff',
          fontSize: 'clamp(18px, 2vw, 24px)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
        aria-label="Close"
      >
        ×
      </button>

      {/* Chairman Image */}
      <div style={{
        position: 'relative',
        width: 'clamp(120px, 12vw, 200px)',
        height: 'clamp(120px, 12vw, 200px)',
        marginBottom: 'clamp(15px, 2vw, 25px)'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '3px solid rgba(255, 255, 255, 0.4)',
          padding: '6px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
        }}>
          <img 
            src={process.env.PUBLIC_URL + "/chairman.png"} 
            alt="Eng. Ali Khudair Al Harbi"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div style={{
        textAlign: 'center',
        marginBottom: 'clamp(12px, 1.5vw, 20px)'
      }}>
        <div style={{
          fontSize: 'clamp(10px, 1vw, 14px)',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: 'clamp(8px, 1vw, 12px)',
          position: 'relative',
          display: 'inline-block'
        }}>
          <span style={{
            position: 'absolute',
            left: '-25px',
            top: '50%',
            width: '20px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.4)'
          }} />
          Message from the Chairman
          <span style={{
            position: 'absolute',
            right: '-25px',
            top: '50%',
            width: '20px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.4)'
          }} />
        </div>
        <h2 style={{
          fontSize: 'clamp(16px, 1.8vw, 28px)',
          fontWeight: '300',
          letterSpacing: '1px',
          color: '#ffffff',
          margin: 0,
          lineHeight: '1.3',
          fontFamily: 'inherit'
        }}>
          Eng. Ali Khudair Al Harbi
        </h2>
      </div>

      {/* Message Text */}
      <div style={{
        position: 'relative',
        padding: 'clamp(20px, 2.5vw, 35px) clamp(18px, 2vw, 28px)',
        marginBottom: 0,
        width: '100%'
      }}>
        <p 
          dir="ltr"
          style={{
            fontSize: 'clamp(12px, 1.2vw, 18px)',
            lineHeight: '1.7',
            color: '#ffffff',
            fontWeight: '400',
            letterSpacing: '0.3px',
            margin: 0,
            textAlign: 'center',
            fontStyle: 'italic',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4), 0 0 3px rgba(0, 0, 0, 0.3)'
          }}
        >
          A legacy of success, leadership, and development supports our promising long-term investment strategy and strengthens our ambitious vision for sustainable growth. We move forward toward a future that extends from one generation to the next.
        </p>
      </div>
    </div>
  );
};

export default ChairmanMessage;
