import React from 'react';

export default function CompanyBackground({ selectedCompany, children }) {
  if (!selectedCompany) return null;

  const companyId = selectedCompany.id;
  const hasCustomBackground = [8, 6, 9, 7, 2].includes(companyId);
  
  const backgroundImage = hasCustomBackground 
    ? 'none' 
    : `url(${selectedCompany.bgImage || selectedCompany.logo})`;
  
  const backgroundColor = 
    companyId === 8 ? 'transparent' :
    companyId === 6 ? '#0a0a0a' :
    companyId === 9 ? '#f0f4f8' :
    companyId === 7 ? '#061826' :
    companyId === 2 ? '#1a1a1a' :
    'transparent';

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor,
      zIndex: 1000,
      animation: 'fadeIn 0.6s ease-in-out'
    }}>
      {children}
    </div>
  );
}
