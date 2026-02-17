import React, { useState, useEffect } from 'react';
import './AlikaHeader.css';
import CompanyGrid from './CompanyGrid';

const AlikaHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="alika-header">
      <div className="left-section">
        <div className="alika-logo-container">
          <div className="alika-logo">
            <img src="/alika.png" alt="Alika Logo" className="logo-image" />
          </div>
          <div className="company-name-english">
            Ali Khudair Al harbi Holding Group
          </div>
          <div className="company-name-arabic">
            مجموعة علي خضير الحربي القابضة
          </div>
          <div className="time-display">
            {currentTime.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
        </div>
      </div>
      <div className="right-section">
        <CompanyGrid />
      </div>
    </div>
  );
};

export default AlikaHeader;
