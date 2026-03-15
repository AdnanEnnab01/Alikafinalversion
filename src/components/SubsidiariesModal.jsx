import React from 'react';

const SubsidiariesModal = ({ isOpen, onClose, viewportSize }) => {
  if (!isOpen) return null;

  const subsidiaries = [
    {
      name: 'AH Environmental',
      logo: '/AH-ENVIRONMENTAL.png',
      description: [
        'AH Environmental is committed to protecting and preserving our natural environment through sustainable practices.',
        'We provide comprehensive environmental solutions and consulting services to ensure a greener future.'
      ]
    },
    {
      name: 'Gulf Consult',
      logo: '/GULF-CONSULT.png',
      description: [
        'Gulf Consult is a premier consulting firm offering strategic advisory and professional services.',
        'We deliver expert guidance and innovative solutions to help businesses achieve their strategic objectives.'
      ]
    },
    {
      name: 'Antique',
      logo: '/antique.png',
      description: [
        'Antique is a distinguished company known for its excellence in heritage preservation and cultural services.',
        'We combine traditional craftsmanship with modern expertise to deliver exceptional quality and timeless value.'
      ]
    },
    {
      name: 'AMT',
      logo: '/AMT.png',
      description: [
        'AMT is a leading company specializing in advanced technology solutions and innovative services.',
        'We provide cutting-edge technological expertise to drive business growth and digital transformation.'
      ]
    },
    {
      name: 'Central Care',
      logo: '/cc.png',
      description: [
        'Central Care is a leading healthcare provider dedicated to delivering exceptional medical services.',
        'We offer comprehensive healthcare solutions with a focus on patient care, innovation, and medical excellence.'
      ]
    },
    {
      name: 'Al Dorrah',
      logo: '/dorrah.png',
      description: [
        'Al Dorrah is a prominent company specializing in premium services and innovative business solutions.',
        'We excel in delivering high-quality services that meet the diverse needs of our clients and partners.'
      ]
    },
    {
      name: 'GTA',
      logo: '/GTA.png',
      description: [
        'GTA is a dynamic company focused on providing advanced technology and automation solutions.',
        'We leverage cutting-edge technology to optimize operations and drive efficiency across various industries.'
      ]
    },
    {
      name: 'RK',
      logo: '/RK.png',
      description: [
        'RK is a trusted company delivering reliable services and innovative solutions across multiple sectors.',
        'We are committed to excellence and building long-term partnerships with our clients and stakeholders.'
      ]
    },
    {
      name: 'IDC',
      logo: '/IDC.png',
      description: [
        'IDC is a leading company in infrastructure development and construction management services.',
        'We deliver world-class infrastructure projects with a focus on quality, safety, and sustainable development.'
      ]
    },
    {
      name: 'Gulf Logo',
      logo: '/gulf-logo.png',
      description: [
        'Gulf Logo represents our commitment to excellence and innovation in the Gulf region.',
        'We provide strategic services and solutions that contribute to regional growth and development.'
      ]
    },
    {
      name: 'TLCO',
      logo: '/tico.png',
      description: [
        'TLCO is a specialized company offering comprehensive solutions in transportation and logistics.',
        'We provide efficient and reliable transportation services to support business operations and connectivity.'
      ]
    },
    {
      name: 'GSG',
      logo: '/gsg.png',
      description: [
        'GSG is a forward-thinking company dedicated to providing innovative solutions and strategic services.',
        'We combine expertise and innovation to deliver exceptional value and drive sustainable business growth.'
      ]
    }
  ];

  const isSmallViewport = viewportSize.width >= 1536 && viewportSize.height >= 864;

  return (
    <div 
      className="subsidiaries-modal"
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
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 2000,
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
      {/* Content Container */}
      <div style={{
        width: '100%',
        height: '100vh',
        padding: isSmallViewport ? '15px 25px' : 'clamp(40px, 4vw, 60px) clamp(20px, 3vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: isSmallViewport ? '26px' : 'clamp(32px, 4vw, 48px)',
          fontWeight: '900',
          color: '#2d8659',
          marginBottom: isSmallViewport ? '12px' : 'clamp(30px, 4vh, 50px)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginTop: '0'
        }}>
          Our Subsidiaries
        </h1>

        {/* Companies Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmallViewport ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isSmallViewport ? '12px' : 'clamp(25px, 3vw, 40px)',
          width: '100%',
          maxWidth: isSmallViewport ? '100%' : '1400px',
          padding: isSmallViewport ? '0 15px' : '0 clamp(20px, 3vw, 40px)',
          justifyContent: 'center',
          flex: '1',
          alignContent: 'center'
        }}>
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: isSmallViewport ? '8px' : '20px',
                padding: isSmallViewport ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: isSmallViewport ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: isSmallViewport ? '100%' : 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(45, 134, 89, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 134, 89, 0.15)';
              }}
            >
              <img 
                src={process.env.PUBLIC_URL + subsidiary.logo} 
                alt={subsidiary.name} 
                style={{
                  width: isSmallViewport ? '80px' : 'clamp(120px, 15vw, 180px)',
                  height: 'auto',
                  objectFit: 'contain',
                  maxHeight: isSmallViewport ? '60px' : '100px'
                }}
              />
              <div style={{
                textAlign: 'center',
                color: '#2d8659',
                fontSize: isSmallViewport ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                lineHeight: isSmallViewport ? '1.4' : '1.6',
                fontWeight: '500',
                direction: 'ltr'
              }}>
                <p style={{ margin: isSmallViewport ? '0 0 6px 0' : '0 0 10px 0' }}>
                  {subsidiary.description[0]}
                </p>
                <p style={{ margin: '0' }}>
                  {subsidiary.description[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
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

export default SubsidiariesModal;
