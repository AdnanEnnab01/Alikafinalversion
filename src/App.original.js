import React, { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPartners, setShowPartners] = useState(false);
  const [activeTab, setActiveTab] = useState('partners'); // 'partners', 'team', 'project'
  const [showGulfConsultLearnMore, setShowGulfConsultLearnMore] = useState(false);
  const [gulfConsultActiveTab, setGulfConsultActiveTab] = useState('tab1'); // 'tab1', 'tab2', 'tab3'
  const [showAntiqueLearnMore, setShowAntiqueLearnMore] = useState(false);
  const [antiqueActiveTab, setAntiqueActiveTab] = useState('tab3'); // 'tab1', 'tab2', 'tab3'
  const [showAMTLearnMore, setShowAMTLearnMore] = useState(false);
  const [amtActiveTab, setAmtActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfConsult2LearnMore, setShowGulfConsult2LearnMore] = useState(false);
  const [gulfConsult2ActiveTab, setGulfConsult2ActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGSGLearnMore, setShowGSGLearnMore] = useState(false);
  const [gsgActiveTab, setGsgActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfDorrahLearnMore, setShowGulfDorrahLearnMore] = useState(false);
  const [showCentralMedicalcareLearnMore, setShowCentralMedicalcareLearnMore] = useState(false);
  const [showRKLearnMore, setShowRKLearnMore] = useState(false);
  const [showAHEnvironmentalLearnMore, setShowAHEnvironmentalLearnMore] = useState(false);
  const [ahEnvironmentalActiveTab, setAhEnvironmentalActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Team, 'tab3' = Projects
  const [showIDCLearnMore, setShowIDCLearnMore] = useState(false);
  const [showGTALearnMore, setShowGTALearnMore] = useState(false);
  const [dorrahVideoPlaying, setDorrahVideoPlaying] = useState(false);
  const [dorrahVideoFullscreen, setDorrahVideoFullscreen] = useState(false);
  const dorrahVideoContainerRef = useRef(null);
  const [amtVideoPlaying, setAmtVideoPlaying] = useState(false);
  const [amtVideoFullscreen, setAmtVideoFullscreen] = useState(false);
  const amtVideoContainerRef = useRef(null);
  const [tlcoVideoPlaying, setTlcoVideoPlaying] = useState(false);
  const [tlcoVideoFullscreen, setTlcoVideoFullscreen] = useState(false);
  const tlcoVideoContainerRef = useRef(null);
  const [gulfConsultVideoPlaying, setGulfConsultVideoPlaying] = useState(false);
  const [gulfConsultVideoFullscreen, setGulfConsultVideoFullscreen] = useState(false);
  const gulfConsultVideoContainerRef = useRef(null);
  const [gulfLogoVideoPlaying, setGulfLogoVideoPlaying] = useState(false);
  const [gulfLogoVideoFullscreen, setGulfLogoVideoFullscreen] = useState(false);
  const gulfLogoVideoContainerRef = useRef(null);
  const [antiqueVideoPlaying, setAntiqueVideoPlaying] = useState(false);
  const [antiqueVideoFullscreen, setAntiqueVideoFullscreen] = useState(false);
  const antiqueVideoContainerRef = useRef(null);
  const [idcVideoPlaying, setIdcVideoPlaying] = useState(false);
  const [idcVideoFullscreen, setIdcVideoFullscreen] = useState(false);
  const idcVideoContainerRef = useRef(null);
  const [gulfConsultArchVideoPlaying, setGulfConsultArchVideoPlaying] = useState(false);
  const [gulfConsultArchVideoFullscreen, setGulfConsultArchVideoFullscreen] = useState(false);
  const gulfConsultArchVideoContainerRef = useRef(null);
  const [centralMedicalcareVideoPlaying, setCentralMedicalcareVideoPlaying] = useState(false);
  const [centralMedicalcareVideoFullscreen, setCentralMedicalcareVideoFullscreen] = useState(false);
  const centralMedicalcareVideoContainerRef = useRef(null);

  // Handle fullscreen change for Dorrah
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setDorrahVideoFullscreen(false);
        setDorrahVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for AMT
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setAmtVideoFullscreen(false);
        setAmtVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for TLCO
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setTlcoVideoFullscreen(false);
        setTlcoVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Gulf Consult
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setGulfConsultVideoFullscreen(false);
        setGulfConsultVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Gulf Logo (id === 12)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setGulfLogoVideoFullscreen(false);
        setGulfLogoVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Antique video (id === 2)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setAntiqueVideoFullscreen(false);
        setAntiqueVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for IDC video
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setIdcVideoFullscreen(false);
        setIdcVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Gulf Consult Architects video (id === 9)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setGulfConsultArchVideoFullscreen(false);
        setGulfConsultArchVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Central Medicalcare video (id === 3)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setCentralMedicalcareVideoFullscreen(false);
        setCentralMedicalcareVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Company logos data
  const companies = [
    { id: 1, logo: '/IDC.png', row: 1, col: 2, name: 'IDC', bgImage: '/idc-gif.gif' },
    { id: 2, logo: '/antiqqe.png', row: 1, col: 3, name: 'Antique', bgImage: '/ant-git.gif' },
    { id: 3,  logo: '/cc.png', row: 1, col: 4, name: 'Central Care', bgImage: '/rk-gif.gif' },
    { id: 4,  logo: '/GTA.png', row: 2, col: 1, name: 'GTA', bgImage: '/GTA-bg.jpeg' },
    { id: 5,  logo: '/ah-white.png', row: 2, col: 2, name: 'AH Environmental', bgImage: '/ah-gif.gif' },
    { id: 6,  logo: '/RK.png', row: 2, col: 3, name: 'RK', bgImage: '/rk1-gif.gif' },
    { id: 7,  logo: '/dorrah.png', row: 2, col: 4, name: 'Al Dorrah', bgImage: '/dorrah-gif.gif' },
    { id: 8,  logo: '/AMT.png', row: 2, col: 5, name: 'AMT', bgImage: '/amt-bg.JPEG', modalLogo: '/amt-internal.png' },
    { id: 9,  logo: '/GULF-CONSULT.png', row: 3, col: 2, name: 'Gulf Consult', bgImage: '/GC-bg.jpeg', modalLogo: '/GULF-CONSULT.png' },
    { id: 10, logo: '/tico.png', row: 3, col: 3, name: 'TLCO', bgImage: '/elco-gif.gif' },
    { id: 11, logo: '/gsg.png', row: 3, col: 4, name: 'GSG', bgImage: '/gcg-gif.gif' },
    { id: 12, logo: '/gulf-logo.png', row: 3, col: 5, name: 'Gulf Logo', bgImage: '/gulf-internal.jpeg', modalLogo: '/Gulf-white.png' },
  ];







  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#9FB2BC',
      display: 'flex',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.3
        }}
      >
        <source src="/alika.mp4" type="video/mp4" />
      </video>

      {/* Left side - Company info */}
      <div style={{
        flex: '0 0 35%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Logo */}
        <div>
          <img
            src="/alika.png"
            alt="Alika Logo"
            className="left-hero-item left-hero-item--alika"
          />
        </div>
      </div>

      {/* Right side - Diamond grid */}
      <div style={{
        flex: '0 0 65%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '60px',
        overflow: 'hidden'
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 130px)',
          gridTemplateRows: 'repeat(4, 130px)',
          gap: '25px',
          transform: 'rotate(45deg)',
          position: 'relative'
        }}>
          {companies.map((company) => {
            const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');

            return (
              <div
                key={company.id}
                style={{
                  gridColumn: company.col,
                  gridRow: company.row,
                  position: 'relative'
                }}
              >
              {/* Backlighting glow effect - REMOVED */}
                  <div
                    style={{
                      cursor: company.id === 10 || company.id === 3 || company.id === 11 || company.id === 1 || company.id === 6 || company.id === 5 || company.id === 2 || company.id === 7 || company.id === 8 || company.id === 9 || company.id === 12 || company.id === 4 ? 'pointer' : 'default',
                      width: '130px',
                      height: '130px',
                      background: '#E8E8E8',
                      border: '1px solid rgba(200, 200, 200, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '4px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      zIndex: 1
                    }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                }}
                onClick={(e) => {
                  if (company.id === 10 || company.id === 3 || company.id === 11 || company.id === 1 || company.id === 6 || company.id === 5 || company.id === 2 || company.id === 7 || company.id === 8 || company.id === 9 || company.id === 12 || company.id === 4) {
                    // احصل على موضع العنصر الحالي
                    const rect = e.currentTarget.getBoundingClientRect();
                    sessionStorage.setItem('logoStartX', rect.left);
                    sessionStorage.setItem('logoStartY', rect.top);
                    setSelectedCompany(company);
                  }
                }}
              >
              <div style={{
                transform: 'rotate(-45deg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                padding: '10px'
              }}>
                <img 
                  src={company.logo} 
                  alt={isGulfConsult ? 'Gulf Consult' : 'Company logo'}
                  style={{
                    maxWidth: isGulfConsult ? '98%' : '90%',
                    maxHeight: isGulfConsult ? '90%' : '75%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    marginBottom: '0px',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Background */}
      {selectedCompany && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: selectedCompany.id === 8 ? 'none' : `url(${selectedCompany.bgImage || selectedCompany.logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: selectedCompany.id === 8 ? '#0a0a0a' : 'transparent',
          zIndex: 1000,
          animation: 'fadeIn 0.6s ease-in-out'
        }}>
          {/* Special layout for AMT */}
          {selectedCompany.id === 8 ? (
            <>
              {/* AMT Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${selectedCompany.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.3,
                zIndex: 1
              }} />
              
              {/* AMT Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '40px',
                left: '60px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '400px',
                    maxHeight: '200px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(255, 0, 0, 0.5))'
                  }}
                />
              </div>

              {/* AMT Internal Image - Top Right */}
              <div style={{
                position: 'fixed',
                top: '150px',
                right: '80px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both'
              }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={selectedCompany.modalLogo}
                  alt="AMT Internal"
                  style={{
                    maxWidth: 'clamp(450px, 50vw, 600px)',
                    maxHeight: 'clamp(450px, 60vh, 600px)',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
                
                {/* Play Button on AMT Image */}
                {!amtVideoFullscreen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 12,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={async (e) => {
                      e.stopPropagation();
                      if (amtVideoContainerRef.current) {
                        try {
                          // فتح fullscreen
                          setAmtVideoFullscreen(true);
                          setAmtVideoPlaying(true);
                          
                          let fullscreenPromise;
                          if (amtVideoContainerRef.current.requestFullscreen) {
                            fullscreenPromise = amtVideoContainerRef.current.requestFullscreen();
                          } else if (amtVideoContainerRef.current.webkitRequestFullscreen) {
                            fullscreenPromise = amtVideoContainerRef.current.webkitRequestFullscreen();
                          } else if (amtVideoContainerRef.current.msRequestFullscreen) {
                            fullscreenPromise = amtVideoContainerRef.current.msRequestFullscreen();
                          }
                          
                          // انتظار fullscreen
                          if (fullscreenPromise) {
                            await fullscreenPromise;
                          }
                        } catch (error) {
                          console.error('Error opening fullscreen:', error);
                        }
                      }
                    }}
                  >
                    {/* Animation Text */}
                    <div
                      style={{
                        color: '#ffffff',
                        fontSize: 'clamp(14px, 1.5vw, 18px)',
                        fontWeight: '600',
                        marginBottom: '20px',
                        textAlign: 'center',
                        animation: 'pulse 2s ease-in-out infinite',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      Click to play video
                    </div>
                    
                    {/* Play Button */}
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'rgba(255, 75, 75, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(255, 75, 75, 0.4)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 75, 75, 1)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 75, 75, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 75, 75, 0.9)';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 75, 75, 0.4)';
                      }}
                    >
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{ marginLeft: '6px' }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                </div>
              </div>

              {/* AMT Video - Hidden for fullscreen */}
              <div
                ref={amtVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: amtVideoFullscreen ? '0' : '-9999px',
                  top: amtVideoFullscreen ? '0' : '-9999px',
                  width: amtVideoFullscreen ? '100vw' : '0',
                  height: amtVideoFullscreen ? '100vh' : '0',
                  zIndex: amtVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {amtVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=amt_ecx4u7&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {amtVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setAmtVideoFullscreen(false);
                      setAmtVideoPlaying(false);
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

              {/* AMT Text Content - Bottom Left */}
              <div
                className="amt-content"
                style={{
                  maxWidth: '650px',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(26px, 3.5vw, 42px)',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 20px)',
                    letterSpacing: '1.6px',
                    color: '#ff4b4b',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  ADVANCED MICRO TECHNOLOGIES
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 19px)',
                    lineHeight: 'clamp(1.6, 1.8vh, 1.8)',
                    marginBottom: 'clamp(20px, 3vh, 28px)',
                    color: '#f9fafb',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Advanced Micro Technologies (AMT) is a Saudi company providing IT and telecommunications services, including data center design, cybersecurity, and low current systems such as surveillance and alarms.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(20px, 4vw, 40px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: '8px'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(14px, 1.5vw, 19px)',
                    lineHeight: 'clamp(1.8, 2vh, 2)',
                    color: '#f9fafb',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: 'clamp(10px, 1.5vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Managers:</strong>
                      <span>Eyad Matar</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(10px, 1.5vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Mobile:</strong>
                      <span>050 582 7033</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(10px, 1.5vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Email:</strong>
                      <span>eyad.matar@amt-arabia.net</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Website:</strong>
                      <span>www.amt-arabia.net</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/amtqr.jpeg"
                      alt="AMT QR Code"
                      style={{
                        maxWidth: 'clamp(150px, 20vw, 200px)',
                        maxHeight: 'clamp(150px, 20vw, 200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowAMTLearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 32px)',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#ff4b4b',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 75, 75, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 75, 75, 0.5)';
                    e.currentTarget.style.background = '#ff6666';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 75, 75, 0.4)';
                    e.currentTarget.style.background = '#ff4b4b';
                  }}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : selectedCompany.id === 1 ? (
            <>
              {/* IDC Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '260px',
                    maxHeight: '260px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* IDC Content - Left */}
              <div className="idc-content" style={{
                maxWidth: '720px',
                color: '#0b2239',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  fontWeight: '900',
                  marginBottom: '16px',
                  letterSpacing: '1.5px',
                  color: '#0b6fbf',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  IDC CONTRACTING COMPANY
                </h1>

                <p style={{
                  fontSize: 'clamp(13px, 1.35vw, 17px)',
                  lineHeight: '1.9',
                  marginBottom: '22px',
                  color: '#0b2239',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  IDC Contracting Company is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). IDC specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                    fontSize: 'clamp(13px, 1.35vw, 17px)',
                    lineHeight: '2',
                    color: '#0b2239',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Managers:</strong>
                      <span>Bassam Al Masri.</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Mobile:</strong>
                      <span>050 833 8830</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Email:</strong>
                      <span>bassam.almasri@idc-arabia.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Website:</strong>
                      <span>www.idc-arabia.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/idcqr.jpeg"
                      alt="IDC QR Code"
                      style={{
                        maxWidth: 'clamp(150px, 20vw, 200px)',
                        maxHeight: 'clamp(150px, 20vw, 200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowIDCLearnMore(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#0b6fbf',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(11, 111, 191, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5)';
                    e.currentTarget.style.background = '#0d7fd4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(11, 111, 191, 0.4)';
                    e.currentTarget.style.background = '#0b6fbf';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* IDC Play Button - Right Side (on image) */}
              {!idcVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '20%',
                    top: '30%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (idcVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setIdcVideoFullscreen(true);
                        setIdcVideoPlaying(true);

                        let fullscreenPromise;
                        if (idcVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = idcVideoContainerRef.current.requestFullscreen();
                        } else if (idcVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = idcVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (idcVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = idcVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(11, 111, 191, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(11, 111, 191, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(11, 111, 191, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(11, 111, 191, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(11, 111, 191, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(11, 111, 191, 0.4)';
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* IDC Video - Hidden for fullscreen (Cloudinary iframe) */}
              <div
                ref={idcVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: idcVideoFullscreen ? '0' : '-9999px',
                  top: idcVideoFullscreen ? '0' : '-9999px',
                  width: idcVideoFullscreen ? '100vw' : '0',
                  height: idcVideoFullscreen ? '100vh' : '0',
                  zIndex: idcVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {idcVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=idc_egyila&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {idcVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setIdcVideoFullscreen(false);
                      setIdcVideoPlaying(false);
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
            </>
          ) : selectedCompany.id === 2 ? (
            <>
              {/* Antique overlay to hide text embedded in the background image */}
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 10,
                  pointerEvents: 'none',
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.58) 46%, rgba(0,0,0,0) 76%)'
                }}
              />
              {/* Antique Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '40px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '260px',
                    maxHeight: '260px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 26px rgba(0, 0, 0, 0.5))'
                  }}
                />
              </div>

              {/* Antique Content - Left */}
              <div style={{
                position: 'fixed',
                top: '200px',
                left: '40px',
                width: 'min(620px, 48vw)',
                maxWidth: '620px',
                zIndex: 12,
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left',
                textShadow: '0 2px 10px rgba(0,0,0,0.45)'
              }}>
                <h1 style={{
                  fontSize: 'clamp(22px, 2.6vw, 36px)',
                  fontWeight: '900',
                  marginBottom: '14px',
                  letterSpacing: '1.6px',
                  color: '#f3c06b',
                  textTransform: 'uppercase',
                  animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                  whiteSpace: 'nowrap'
                }}>
                  ANTIQUE CREATIONS
                </h1>

                <p style={{
                  fontSize: 'clamp(12px, 1.15vw, 15px)',
                  lineHeight: '1.75',
                  marginBottom: '18px',
                  color: '#ffffff',
                  animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                }}>
                  Antique Creations (ACWM) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Antique Creations specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div style={{
                  animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                  fontSize: 'clamp(12px, 1.1vw, 15px)',
                  lineHeight: '2',
                  color: '#ffffff'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Managers:</strong>
                    <span>Mohammed Ghanem.</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Mobile:</strong>
                    <span>056 952 6806</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Email:</strong>
                    <span>info@acwm-sa.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Website:</strong>
                    <a
                      href="https://acwm-sa.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#ffffff', textDecoration: 'underline' }}
                    >
                      acwm-sa.com
                    </a>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowAntiqueLearnMore(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#000000',
                    background: '#f3c06b',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(243, 192, 107, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(243, 192, 107, 0.4)';
                    e.currentTarget.style.background = '#f5c97a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(243, 192, 107, 0.3)';
                    e.currentTarget.style.background = '#f3c06b';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Antique Play Button - Right Side (on craftsman image) */}
              {!antiqueVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '20%',
                    top: '45%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (antiqueVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setAntiqueVideoFullscreen(true);
                        setAntiqueVideoPlaying(true);

                        let fullscreenPromise;
                        if (antiqueVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = antiqueVideoContainerRef.current.requestFullscreen();
                        } else if (antiqueVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = antiqueVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (antiqueVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = antiqueVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(243, 192, 107, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(243, 192, 107, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(243, 192, 107, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(243, 192, 107, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(243, 192, 107, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(243, 192, 107, 0.4)';
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Antique Video - Hidden for fullscreen (Cloudinary iframe) */}
              <div
                ref={antiqueVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: antiqueVideoFullscreen ? '0' : '-9999px',
                  top: antiqueVideoFullscreen ? '0' : '-9999px',
                  width: antiqueVideoFullscreen ? '100vw' : '0',
                  height: antiqueVideoFullscreen ? '100vh' : '0',
                  zIndex: antiqueVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {antiqueVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=WhatsApp_Video_2026-02-04_at_11.38.28_AM_mhpll7&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {antiqueVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setAntiqueVideoFullscreen(false);
                      setAntiqueVideoPlaying(false);
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
            </>
          ) : selectedCompany.id === 3 ? (
            <>
              {/* Central Medicalcare Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '210px',
                    maxHeight: '210px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Central Medicalcare Content - Left */}
              <div className="central-medicalcare-content" style={{
                maxWidth: '720px',
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 3vw, 36px)',
                  fontWeight: '900',
                  marginBottom: 'clamp(12px, 2vh, 16px)',
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                  whiteSpace: 'nowrap'
                }}>
                  CENTRAL MEDICALCARE
                </h1>

                <p style={{
                  fontSize: 'clamp(12px, 1.35vw, 17px)',
                  lineHeight: 'clamp(1.6, 1.9vh, 1.9)',
                  marginBottom: 'clamp(16px, 2.5vh, 22px)',
                  color: '#ffffff',
                  animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                }}>
                  CENTRAL MEDICALCARE is a comprehensive medical and aesthetic center located in Al-Khobar, Saudi Arabia. The center provides high-quality medical services including dermatology, laser treatments, and aesthetic care.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                }}>
                  <div style={{
                    fontSize: 'clamp(12px, 1.35vw, 17px)',
                    lineHeight: 'clamp(1.8, 2vh, 2)',
                    color: '#ffffff',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 10px)' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Managers:</strong>
                      <span>Dr. Atif Idress.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 10px)' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Mobile:</strong>
                      <span>050 471 5053</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 10px)' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Email:</strong>
                      <span>hshash@centralmedicalcare.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Website:</strong>
                      <span>www.centralmedicalcare.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/centralcareqr.jpeg"
                      alt="Central Medicalcare QR Code"
                      style={{
                        maxWidth: 'clamp(150px, 20vw, 200px)',
                        maxHeight: 'clamp(150px, 20vw, 200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowCentralMedicalcareLearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 24px)',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#bfa874',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(191, 168, 116, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(191, 168, 116, 0.5)';
                    e.currentTarget.style.background = '#c9b584';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(191, 168, 116, 0.4)';
                    e.currentTarget.style.background = '#bfa874';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Central Medicalcare Play Button - Right Side (on dental image) */}
              {!centralMedicalcareVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '20%',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (centralMedicalcareVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setCentralMedicalcareVideoFullscreen(true);
                        setCentralMedicalcareVideoPlaying(true);

                        let fullscreenPromise;
                        if (centralMedicalcareVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = centralMedicalcareVideoContainerRef.current.requestFullscreen();
                        } else if (centralMedicalcareVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = centralMedicalcareVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (centralMedicalcareVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = centralMedicalcareVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(191, 168, 116, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(191, 168, 116, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(191, 168, 116, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(191, 168, 116, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(191, 168, 116, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(191, 168, 116, 0.4)';
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Central Medicalcare Video - Hidden for fullscreen */}
              <div
                ref={centralMedicalcareVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: centralMedicalcareVideoFullscreen ? '0' : '-9999px',
                  top: centralMedicalcareVideoFullscreen ? '0' : '-9999px',
                  width: centralMedicalcareVideoFullscreen ? '100vw' : '0',
                  height: centralMedicalcareVideoFullscreen ? '100vh' : '0',
                  zIndex: centralMedicalcareVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {centralMedicalcareVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=WhatsApp_Video_2026-02-03_at_4.02.50_PM_wo8g32&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {centralMedicalcareVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setCentralMedicalcareVideoFullscreen(false);
                      setCentralMedicalcareVideoPlaying(false);
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
            </>
          ) : selectedCompany.id === 9 ? (
            <>
              {/* Gulf Consult Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '210px',
                    maxHeight: '210px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Gulf Consult Content - Left */}
              <div style={{
                position: 'fixed',
                bottom: '60px',
                left: '40px',
                width: 'min(620px, 48vw)',
                maxWidth: '620px',
                zIndex: 12,
                color: '#16348a',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'clamp(30px, 3.6vw, 46px)',
                  fontWeight: '900',
                  marginBottom: '6px',
                  letterSpacing: '1.5px',
                  color: '#16348a',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GULF CONSULT
                </h1>

                <div style={{
                  fontSize: 'clamp(13px, 1.3vw, 16px)',
                  fontWeight: '800',
                  marginBottom: '14px',
                  color: '#16348a',
                  letterSpacing: '0.4px',
                  animation: 'fadeInUp 0.8s ease-out 0.3s both'
                }}>
                  (Architects and Engineers)
                </div>

                <p style={{
                  fontSize: 'clamp(12px, 1.15vw, 15px)',
                  lineHeight: '1.75',
                  marginBottom: '22px',
                  color: '#16348a',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  Gulf Consult (Architects and Engineers) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Gulf Consult specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                    fontSize: 'clamp(13px, 1.35vw, 17px)',
                    lineHeight: '2',
                    color: '#16348a',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Managers:</strong>
                      <span>Eng. Abdullah Maqboul.</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Mobile:</strong>
                      <span>055 518 7280</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Email:</strong>
                      <span>abdullah@gc-eng.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Website:</strong>
                      <a
                        href="https://www.gc-eng.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#16348a', textDecoration: 'underline', fontWeight: 700 }}
                      >
                        gc-eng.com
                      </a>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/gcqr.jpeg"
                      alt="Gulf Consult QR Code"
                      style={{
                        maxWidth: 'clamp(150px, 20vw, 200px)',
                        maxHeight: 'clamp(150px, 20vw, 200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGulfConsultLearnMore(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#16348a',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(22, 52, 138, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.4)';
                    e.currentTarget.style.background = '#1e42a5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(22, 52, 138, 0.3)';
                    e.currentTarget.style.background = '#16348a';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Gulf Consult Architects Play Button - Right Side (on architectural sketch) */}
              {!gulfConsultArchVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '20%',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (gulfConsultArchVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setGulfConsultArchVideoFullscreen(true);
                        setGulfConsultArchVideoPlaying(true);

                        let fullscreenPromise;
                        if (gulfConsultArchVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = gulfConsultArchVideoContainerRef.current.requestFullscreen();
                        } else if (gulfConsultArchVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = gulfConsultArchVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (gulfConsultArchVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = gulfConsultArchVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(22, 52, 138, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(22, 52, 138, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(22, 52, 138, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(22, 52, 138, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(22, 52, 138, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(22, 52, 138, 0.4)';
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Gulf Consult Architects Video - Hidden for fullscreen */}
              <div
                ref={gulfConsultArchVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: gulfConsultArchVideoFullscreen ? '0' : '-9999px',
                  top: gulfConsultArchVideoFullscreen ? '0' : '-9999px',
                  width: gulfConsultArchVideoFullscreen ? '100vw' : '0',
                  height: gulfConsultArchVideoFullscreen ? '100vh' : '0',
                  zIndex: gulfConsultArchVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {gulfConsultArchVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=WhatsApp_Video_2026-02-03_at_4.03.03_PM_h59upq&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {gulfConsultArchVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setGulfConsultArchVideoFullscreen(false);
                      setGulfConsultArchVideoPlaying(false);
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
            </>
          ) : selectedCompany.id === 7 ? (
            <>
              {/* Al Dorrah Left Block: logo + title + text */}
              <div
                style={{
                  position: 'fixed',
                  top: '30px',
                  left: '40px',
                  maxWidth: '680px',
                  zIndex: 12,
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    marginBottom: '20px',
                    animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <img
                    src={selectedCompany.modalLogo || selectedCompany.logo}
                    alt={selectedCompany.name}
                    style={{
                      maxWidth: '260px',
                      maxHeight: '260px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.45))'
                    }}
                  />
                </div>

                {/* Title under logo */}
                <h1 style={{
                  fontSize: 'clamp(22px, 2.6vw, 32px)',
                  fontWeight: '900',
                  marginBottom: '6px',
                  letterSpacing: '1.5px',
                  color: '#33d18f',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both'
                }}>
                  GULF DORRAH REAL
                </h1>
                <h1 style={{
                  fontSize: 'clamp(22px, 2.6vw, 32px)',
                  fontWeight: '900',
                  marginBottom: '14px',
                  letterSpacing: '1.5px',
                  color: '#29a4ff',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.25s both'
                }}>
                  ESTATE DEVELOPMENT
                </h1>

                <p style={{
                  fontSize: 'clamp(12px, 1.2vw, 15px)',
                  lineHeight: '1.6',
                  marginBottom: '14px',
                  color: '#e5f8ff',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  Gulf Dorrah Real Estate Development is a Saudi-based company specializing in luxury residential properties with modern designs and high-quality construction. The company focuses on creating community apartments that offer comfort, privacy, and contemporary design, ensuring long-term value for families and residents. Each project is carefully developed with attention to detail, quality materials, and practical layouts that support a modern lifestyle.
                </p>

                <div style={{
                  animation: 'fadeInUp 0.8s ease-out 0.6s both',
                  fontSize: 'clamp(12px, 1.2vw, 15px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Managers:</strong>
                    <span>Fadel Muhialdeen.</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Mobile:</strong>
                    <span>050 084 0440</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Email:</strong>
                    <span>adel@gulfdorrah.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Website:</strong>
                    <span>https://dorrah.topacademy.website/#</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGulfDorrahLearnMore(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(51, 209, 143, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(51, 209, 143, 0.5)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(51, 209, 143, 0.4)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Al Dorrah Video - Right Side */}
              {/* Hidden video element for fullscreen */}
              <div
                ref={dorrahVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: dorrahVideoFullscreen ? '0' : '-9999px',
                  top: dorrahVideoFullscreen ? '0' : '-9999px',
                  width: dorrahVideoFullscreen ? '100vw' : '0',
                  height: dorrahVideoFullscreen ? '100vh' : '0',
                  zIndex: dorrahVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {dorrahVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=dorrah_ei9ijx&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {dorrahVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setDorrahVideoFullscreen(false);
                      setDorrahVideoPlaying(false);
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

              {/* Play Button - Right Side (Center of 3D Building Image) */}
              {!dorrahVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '24%',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (dorrahVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setDorrahVideoFullscreen(true);
                        setDorrahVideoPlaying(true);
                        
                        let fullscreenPromise;
                        if (dorrahVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = dorrahVideoContainerRef.current.requestFullscreen();
                        } else if (dorrahVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = dorrahVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (dorrahVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = dorrahVideoContainerRef.current.msRequestFullscreen();
                        }
                        
                        // انتظار fullscreen
                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(51, 209, 143, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(51, 209, 143, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(51, 209, 143, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(51, 209, 143, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(51, 209, 143, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(51, 209, 143, 0.4)';
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          ) : selectedCompany.id === 4 ? (
            <>
              {/* Logo - Top Left with fly-in animation */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '250px',
                    maxHeight: '250px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Red Curve - Bottom */}
              <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '180px',
                zIndex: 10,
                overflow: 'hidden',
                pointerEvents: 'none'
              }}>
                <svg
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                  viewBox="0 0 1200 180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 180 L 0 130 Q 200 90 400 100 Q 600 110 800 105 Q 1000 100 1200 115 L 1200 180 Z"
                    fill="#dc2626"
                  />
                </svg>
              </div>

              {/* GTA Content - Bottom Left */}
              <div className="gta-content" style={{
                maxWidth: '650px',
                color: '#000000',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                {/* Title */}
                <h1 style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: '900',
                  marginBottom: '15px',
                  letterSpacing: '2px',
                  color: '#dc2626',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GERMAN TECHNOLOGY AUTO
                </h1>

                {/* Description */}
                <p style={{
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  lineHeight: '1.8',
                  marginBottom: '18px',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  German Technology Auto Services Company is one of the leading maintenance companies in the Eastern Region, which includes German car services under one roof.
                </p>
                <p style={{
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  lineHeight: '1.8',
                  marginBottom: '25px',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.5s both'
                }}>
                  We promise to give you the best service at competitive prices. We warranty all our work. Our company strives on the best customer service we can offer.
                </p>

                {/* Contact Info */}
                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    lineHeight: '2',
                    color: '#000000',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Managers:</strong>
                      <span>Mr. Tamam Hussain.</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Mobile:</strong>
                      <span>053 240 4666</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Email:</strong>
                      <span>tammam.hussein@yahoo.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Website:</strong>
                      <span>https://www.gtaksa.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/gtaqr.jpeg"
                      alt="GTA QR Code"
                      style={{
                        maxWidth: 'clamp(150px, 20vw, 200px)',
                        maxHeight: 'clamp(150px, 20vw, 200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGTALearnMore(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#dc2626',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                    e.currentTarget.style.background = '#ef4444';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.4)';
                    e.currentTarget.style.background = '#dc2626';
                  }}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : selectedCompany.id === 10 ? (
            <>
              {/* TLCO Logo - Top Left */}
              <div
                style={{
                  position: 'fixed',
                  top: '40px',
                  left: '40px',
                  zIndex: 11,
                  animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '260px',
                    maxHeight: '160px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </div>

              {/* TLCO Text Content - Bottom Left */}
              <div
                style={{
                  position: 'fixed',  
                  bottom: '60px',
                  left: '40px',
                  maxWidth: '650px',
                  zIndex: 12,
                  color: '#0b3b25',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: '900',
                    marginBottom: '16px',
                    letterSpacing: '1.4px',
                    color: '#008c4a',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  ENVIRONMENTAL TESTING AND LABORATORIES
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(12px, 1.2vw, 15px)',
                    lineHeight: '1.7',
                    marginBottom: '16px',
                    color: '#0b3b25',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Environmental Testing and Laboratory Company (ETLCO) is a leading provider of comprehensive environmental
                  solutions, offering cutting-edge testing, analysis, and consultancy services. With a commitment to
                  sustainability and regulatory compliance, we help industries and organizations minimize their environmental
                  impact while ensuring the highest standards of quality and safety.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(12px, 2.5vw, 24px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(12px, 1.2vw, 15px)',
                    lineHeight: '1.9',
                    color: '#0b3b25',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Managers:</strong>
                      <span>Mr.elyas Othman.</span>
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Mobile:</strong>
                      <span>053 927 5739</span>
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Email:</strong>
                      <span>G.M@etlco.com.sa</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Website:</strong>
                      <span>https://www.etlco.com.sa</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0,
                      marginLeft: '-6px'
                    }}
                  >
                    <img
                      src="/tlcoqr.jpeg"
                      alt="ETLCO QR Code"
                      style={{
                        maxWidth: 'clamp(150px, 20vw, 200px)',
                        maxHeight: 'clamp(150px, 20vw, 200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowPartners(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#008c4a',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 140, 74, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.4)';
                    e.currentTarget.style.background = '#00a055';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 140, 74, 0.3)';
                    e.currentTarget.style.background = '#008c4a';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* TLCO Internal Image on the Right */}
              <div
                style={{
                  position: 'fixed',
                  right: '7%',
                  top: '25%',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  width: 'min(540px, 46vw)',
                  height: 'auto',
                  overflow: 'visible',
                  boxShadow: 'none',
                  borderRadius: '0',
                  border: 'none',
                  background: 'transparent',
                  animation: 'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both'
                }}
              >
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src="/tlco-internal1.png"
                    alt="TLCO Internal"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      animation:
                        'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both, tlcoFloat 4s ease-in-out 1200ms infinite'
                    }}
                  />
                  
                  {/* Play Button on TLCO Image */}
                  {!tlcoVideoFullscreen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      onClick={async (e) => {
                        e.stopPropagation();
                        if (tlcoVideoContainerRef.current) {
                          try {
                            // فتح fullscreen
                            setTlcoVideoFullscreen(true);
                            setTlcoVideoPlaying(true);
                            
                            let fullscreenPromise;
                            if (tlcoVideoContainerRef.current.requestFullscreen) {
                              fullscreenPromise = tlcoVideoContainerRef.current.requestFullscreen();
                            } else if (tlcoVideoContainerRef.current.webkitRequestFullscreen) {
                              fullscreenPromise = tlcoVideoContainerRef.current.webkitRequestFullscreen();
                            } else if (tlcoVideoContainerRef.current.msRequestFullscreen) {
                              fullscreenPromise = tlcoVideoContainerRef.current.msRequestFullscreen();
                            }
                            
                            // انتظار fullscreen
                            if (fullscreenPromise) {
                              await fullscreenPromise;
                            }
                          } catch (error) {
                            console.error('Error opening fullscreen:', error);
                          }
                        }
                      }}
                    >
                      {/* Animation Text */}
                      <div
                        style={{
                          color: '#ffffff',
                          fontSize: 'clamp(14px, 1.5vw, 18px)',
                          fontWeight: '600',
                          marginBottom: '20px',
                          textAlign: 'center',
                          animation: 'pulse 2s ease-in-out infinite',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        Click to play video
                      </div>
                      
                      {/* Play Button */}
                      <div
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          background: 'rgba(0, 140, 74, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 20px rgba(0, 140, 74, 0.4)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 140, 74, 1)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 140, 74, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 140, 74, 0.9)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 140, 74, 0.4)';
                        }}
                      >
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '6px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* TLCO Video - Hidden for fullscreen */}
              <div
                ref={tlcoVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: tlcoVideoFullscreen ? '0' : '-9999px',
                  top: tlcoVideoFullscreen ? '0' : '-9999px',
                  width: tlcoVideoFullscreen ? '100vw' : '0',
                  height: tlcoVideoFullscreen ? '100vh' : '0',
                  zIndex: tlcoVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {tlcoVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=tlco_onczo4&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {tlcoVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setTlcoVideoFullscreen(false);
                      setTlcoVideoPlaying(false);
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
            </>
          ) : selectedCompany.id === 11 ? (
            <>
              {/* GSG Logo - Top Left (keep as current) */}
              <div
                style={{
                  position: 'fixed',
                  top: '10px',
                  left: '40px',
                  zIndex: 11,
                  animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '250px',
                    maxHeight: '250px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* GSG Text Content - Left */}
              <div
                className="gsg-content"
                style={{
                  maxWidth: '650px',
                  color: '#07373c',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3.2vw, 40px)',
                    fontWeight: '900',
                    marginBottom: 'clamp(6px, 1vh, 8px)',
                    letterSpacing: '1.4px',
                    color: '#07373c',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.1'
                  }}
                >
                  GROUND SYSTEMS
                </h1>
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3.2vw, 40px)',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 16px)',
                    letterSpacing: '1.4px',
                    color: '#07373c',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both',
                    lineHeight: '1.1'
                  }}
                >
                  GEOPHYSICAL (GSG)
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    lineHeight: 'clamp(1.6, 1.8vh, 1.8)',
                    marginBottom: 'clamp(14px, 2vh, 18px)',
                    color: '#07373c',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Is a leading provider of geophysical, geological, environmental, and engineering solutions across Saudi Arabia and the GCC region. With a dedicated team of scientists, engineers, and experts, we specialize in delivering advanced, reliable, and innovative services that support site assessments, resource exploration, and real-time monitoring across various industries.
                </p>
                <p
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    lineHeight: 'clamp(1.6, 1.8vh, 1.8)',
                    marginBottom: 'clamp(18px, 2.5vh, 22px)',
                    color: '#07373c',
                    fontWeight: '600',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 380ms both'
                  }}
                >
                  Integrated Solutions for Your Projects, Backed by Decades of Expertise
                </p>

                <div
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    lineHeight: 'clamp(1.8, 2vh, 2)',
                    color: '#07373c',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both'
                  }}
                >
                  <div style={{ marginBottom: 'clamp(6px, 1vh, 8px)' }}>
                    <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Managers:</strong>
                    <span>Eng. Rabah Yehya.</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(6px, 1vh, 8px)' }}>
                    <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Mobile:</strong>
                    <span>055 584 6667</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(6px, 1vh, 8px)' }}>
                    <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Email:</strong>
                    <span>faisal@gulfconsult.com &amp; rabah@gulfconsult.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: '120px', fontWeight: 800 }}>Website:</strong>
                    <span>https://www.gulfconsult.com</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGSGLearnMore(true)}
                  style={{
                    marginTop: 'clamp(16px, 2.5vh, 24px)',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#00bcd4',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 620ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 188, 212, 0.5)';
                    e.currentTarget.style.background = '#00d4e6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 188, 212, 0.4)';
                    e.currentTarget.style.background = '#00bcd4';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* GSG composite image (big + small circles) on the right */}
              <div
                style={{
                  position: 'fixed',
                  right: '6%',
                  top: '15%',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  width: 'min(520px, 45vw)',
                  height: 'auto',
                  overflow: 'visible',
                  background: 'transparent',
                  animation: 'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both'
                }}
              >
                <img
                  src="/gsg-internal.png"
                  alt="GSG Internal"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            </>
          ) : selectedCompany.id === 6 ? (
            <>
              {/* Logo - Top Left with fly-in animation */}
              <div style={{
                position: 'fixed',
                top: '-20px',
                left: '-30px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'clamp(250px, 40vw, 400px)',
                    maxHeight: 'clamp(350px, 40vh, 500px)',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* RK Content - Bottom Left */}
              <div className="rk-content" style={{
                maxWidth: '650px',
                color: '#000000',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                {/* Description */}
                <p style={{
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  lineHeight: '1.8',
                  marginBottom: '18px',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  Al-Rakaez Technical Co. Ltd. (RK) is a Saudi based company that specializes in Civil, Finishing, Mechanical, Electrical and Plumbing (MEP) building services.
                </p>
                <p style={{
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  lineHeight: '1.8',
                  marginBottom: '25px',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.5s both'
                }}>
                  RK strives to deliver the highest standards of Civil, Finishing and MEP installation, carefully paying attention to each of its client's requirements and ideas, collaborating in the development of the right scope of work in order to develop a unique approach towards each customer.
                </p>

                {/* Contact Info */}
                <div style={{
                  animation: 'fadeInUp 0.8s ease-out 0.6s both',
                  fontSize: 'clamp(13px, 1.4vw, 17px)',
                  lineHeight: '2',
                  color: '#000000'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Managers:</strong>
                    <span>Jaffar Al Sayori.</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Mobile:</strong>
                    <span>054 989 5927</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Email:</strong>
                    <span>jafar.syouri@rk-arabia.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '700' }}>Website:</strong>
                    <span>https://www.rk-arabia.com</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowRKLearnMore(true)}
                  style={{
                    marginTop: '24px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(244, 164, 96, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5)';
                    e.currentTarget.style.background = '#f5b575';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(244, 164, 96, 0.4)';
                    e.currentTarget.style.background = '#F4A460';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* RK Internal Image - Right Side */}
              <div style={{
                position: 'fixed',
                top: '14%',
                right: '60px',
                transform: 'translateY(-50%)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both'
              }}>
                <img
                  src="/rk-internal.png"
                  alt="RK Internal"
                  style={{
                    maxWidth: '500px',
                    maxHeight: '600px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </>
          ) : selectedCompany.id === 5 ? (
            <>
              {/* AH Environmental Logo - Top Left */}
              <div
                style={{
                  position: 'fixed',
                  top: '30px',
                  left: '40px',
                  zIndex: 11,
                  animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '260px',
                    maxHeight: '200px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </div>

              {/* AH Environmental Text Content - Left */}
              <div
                className="ah-environmental-content"
                style={{
                  maxWidth: '580px',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: '900',
                    marginBottom: '4px',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.1'
                  }}
                >
                  AH ENVIRONMENTAL
                </h1>
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: '900',
                    marginBottom: '10px',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both',
                    lineHeight: '1.1'
                  }}
                >
                  CONSULTING
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    lineHeight: '1.6',
                    marginBottom: '14px',
                    color: '#ffffff',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  AHEC is a leading environmental engineering and consulting firm established in 2010, providing sustainable and compliant solutions across multiple industries Certified Category A by NCEC and accredited by the Royal Commission for Jubail and Yanbu, AHEC delivers integrated environmental services to government and industrial clients, supporting sustainability, safety, and regulatory compliance
                </p>

                <div
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 17px)',
                    lineHeight: '1.8',
                    color: '#ffffff',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: 800 }}>Managers:</strong>
                    <span>Ennacer Besghaier.</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: 800 }}>Mobile:</strong>
                    <span>054 292 9702</span>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: 800 }}>Email:</strong>
                    <span>g.m@ahenviro.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: 800 }}>Website:</strong>
                    <span>https://www.ahenviro.com</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowAHEnvironmentalLearnMore(true)}
                  style={{
                    marginTop: '20px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#040075',
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.background = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : selectedCompany.id === 12 ? (
            <>
              {/* Gulf Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '210px',
                    maxHeight: '210px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Gulf Consult Content - Left */}
              <div className="gulf-consult-content" style={{
                maxWidth: '720px',
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'clamp(26px, 3.5vw, 48px)',
                  fontWeight: '900',
                  marginBottom: 'clamp(12px, 2vh, 20px)',
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GULF CONSULT
                </h1>

                <p style={{
                  fontSize: 'clamp(14px, 1.5vw, 20px)',
                  lineHeight: 'clamp(1.7, 2vh, 2)',
                  marginBottom: 'clamp(20px, 3vh, 32px)',
                  color: '#ffffff',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  is an independent multidisciplinary consultancy firm established in 1981 with over 42 years of experience providing high-quality engineering and environmental services across the Gulf region, particularly in the Kingdom of Saudi Arabia.
                </p>

                <div style={{
                  animation: 'fadeInUp 0.8s ease-out 0.6s both',
                  fontSize: 'clamp(14px, 1.5vw, 20px)',
                  lineHeight: 'clamp(1.9, 2.1vh, 2.1)',
                  color: '#ffffff',
                  marginBottom: '8px'
                }}>
                  <div style={{ marginBottom: 'clamp(10px, 1.5vh, 16px)' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Managers:</strong>
                    <span>Eng. Faisal Sir AlHarbi - CEO, and Eng. Rabah Yehya - GM.</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(10px, 1.5vh, 16px)' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Mobile:</strong>
                    <span>055 584 6667</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(10px, 1.5vh, 16px)' }}>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Email:</strong>
                    <span>faisal@gulfconsult.com &amp; rabah@gulfconsult.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: '130px', fontWeight: '800' }}>Website:</strong>
                    <a
                      href="https://www.gulfconsult.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 700 }}
                    >
                      www.gulfconsult.com
                    </a>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGulfConsult2LearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 32px)',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#16348a',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(22, 52, 138, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5)';
                    e.currentTarget.style.background = '#1e42a5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(22, 52, 138, 0.4)';
                    e.currentTarget.style.background = '#16348a';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Gulf Logo Play Button - Right Side (on diamond images) */}
              {!gulfLogoVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '15%',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (gulfLogoVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setGulfLogoVideoFullscreen(true);
                        setGulfLogoVideoPlaying(true);

                        let fullscreenPromise;
                        if (gulfLogoVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = gulfLogoVideoContainerRef.current.requestFullscreen();
                        } else if (gulfLogoVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = gulfLogoVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (gulfLogoVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = gulfLogoVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(22, 52, 138, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(22, 52, 138, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(22, 52, 138, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(22, 52, 138, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(22, 52, 138, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(22, 52, 138, 0.4)';
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Gulf Logo Video - Hidden for fullscreen (Cloudinary iframe) */}
              <div
                ref={gulfLogoVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: gulfLogoVideoFullscreen ? '0' : '-9999px',
                  top: gulfLogoVideoFullscreen ? '0' : '-9999px',
                  width: gulfLogoVideoFullscreen ? '100vw' : '0',
                  height: gulfLogoVideoFullscreen ? '100vh' : '0',
                  zIndex: gulfLogoVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {gulfLogoVideoFullscreen && (
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=gulfconsult_pjinhc&profile=cld-default"
                    width="100%"
                    height="100%"
                    style={{
                      height: '100%',
                      width: '100%',
                      aspectRatio: '640 / 360',
                      border: 'none'
                    }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                )}
                {gulfLogoVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setGulfLogoVideoFullscreen(false);
                      setGulfLogoVideoPlaying(false);
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
            </>
          ) : (
            <>
              {/* Logo - Top Left with fly-in animation */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '250px',
                    maxHeight: '250px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </>
          )}

          {/* Close button - Top Right */}
          <button
            onClick={() => setSelectedCompany(null)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: selectedCompany.id === 8 ? '#fff' : '#333',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = selectedCompany.id === 8 ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Our Partners Modal */}
      {showPartners && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'hidden'
        }}>
          {/* Content Container */}
          <div style={{
            width: '100%',
            height: '100vh',
            padding: '20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '30px',
              zIndex: 10
            }}>
              <button
                onClick={() => setActiveTab('partners')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
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
              <button
                onClick={() => setActiveTab('team')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
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
                onClick={() => setActiveTab('project')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
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
                Our Project
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'partners' && (
              <>
                {/* Title */}
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#2d8659',
                  marginBottom: '10px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>

                {/* Partners Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
              gap: '0px',
              maxWidth: '500px',
              width: '100%',
              height: 'calc(100vh - 80px)',
              padding: '0'
            }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <div
                  key={num}
                  style={{
                    background: 'transparent',
                    borderRadius: '0',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '0',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src={`/${num}.png`}
                    alt={`Partner ${num}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transform: 'scale(1)'
                    }}
                  />
                </div>
              ))}
            </div>
              </>
            )}

            {activeTab === 'team' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#2d8659'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#2d8659',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  OUR TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
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
                textAlign: 'center',
                color: '#2d8659'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#2d8659',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  OUR PROJECT
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#2d8659'
                }}>
                  Explore our portfolio of successful environmental projects and initiatives.
                </p>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={() => setShowPartners(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Gulf Consult Learn More Modal */}
      {showGulfConsultLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gc-engineer-learnmore-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'hidden'
        }}>
          {/* Content Container */}
          <div style={{
            width: '100%',
            height: '100vh',
            padding: '10px 40px 20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '50px',
            overflow: 'auto'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '10px',
              zIndex: 10
            }}>
              <button
                onClick={() => setGulfConsultActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab3' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab3' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setGulfConsultActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab2' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab2' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setGulfConsultActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab1' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab1' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our PROJECT
              </button>
            </div>

            {/* Tab Content */}
            {gulfConsultActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#6a1b9a',
                  marginBottom: '60px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>

                {/* Partners Logos Grid */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  marginTop: '20px'
                }}>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner4.png"
                      alt="Partner 4"
                      onError={(e) => {
                        e.target.src = '/elco-gif.gif';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner3.png"
                      alt="Partner 3"
                      onError={(e) => {
                        e.target.src = '/dorrah-gif.gif';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner2.png"
                      alt="Partner 2"
                      onError={(e) => {
                        e.target.src = '/dorrah.png';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner1.png"
                      alt="Partner 1"
                      onError={(e) => {
                        e.target.src = '/cc.png';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {gulfConsultActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#6a1b9a',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#6a1b9a',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#6a1b9a'
                }}>
                  Our dedicated team of professionals is committed to delivering excellence.
                </p>
              </div>
            )}

            {gulfConsultActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '5px 20px 20px 20px',
                color: '#6a1b9a',
                minHeight: 'calc(100vh - 180px)',
                overflow: 'visible'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: '1000',
                  color: '#6a1b9a',
                  marginBottom: '10px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PROJECTS
                </h1>

                {/* Projects Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  width: '100%',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'flex-start'
                }}>
                  {/* First Row - 3 images */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <img
                      src="/gc-project1.png"
                      alt="Project 1"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <img
                      src="/gc-project2.png"
                      alt="Project 2"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <img
                      src="/gc-project3.png"
                      alt="Project 3"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                  </div>

                  {/* Second Row - 2 images */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <img
                      src="/gc-project4.png"
                      alt="Project 4"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <img
                      src="/gc-project5.png"
                      alt="Project 5"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  marginBottom: '0px',
                  paddingBottom: '10px'
                }}>
                  <h2 style={{
                    fontSize: 'clamp(18px, 1.8vw, 24px)',
                    fontWeight: '900',
                    color: '#6a1b9a',
                    marginBottom: '8px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    LAND RIG
                  </h2>
                  <p style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#000000',
                    fontWeight: '400',
                    margin: '0'
                  }}>
                    Ras Al Khair
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={() => setShowGulfConsultLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Antique Learn More Modal */}
      {showAntiqueLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/antiquelearnmore.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          {/* Content Container */}
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '50px 40px 20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            zIndex: 1,
            overflow: 'auto'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '10px',
              zIndex: 10
            }}>
              <button
                onClick={() => setAntiqueActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab3' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab3' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setAntiqueActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab2' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab2' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setAntiqueActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab1' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab1' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our PROJECT
              </button>
            </div>

            {/* Tab Content */}
            {antiqueActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#f3c06b',
                  marginBottom: '40px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                {/* Partners content will be added here */}
              </div>
            )}

            {antiqueActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#f3c06b',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#f3c06b',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#f3c06b'
                }}>
                  Our dedicated team of professionals is committed to delivering excellence.
                </p>
              </div>
            )}

            {antiqueActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '5px 20px 20px 20px',
                color: '#f3c06b',
                minHeight: 'calc(100vh - 180px)',
                overflow: 'visible'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: '900',
                  color: '#f3c06b',
                  marginBottom: '5px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PROJECTS
                </h1>

                {/* Projects Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: '70px'
                }}>
                  <img
                    src="/antique-project1.png"
                    alt="Project 1"
                    style={{
                      width: 'clamp(280px, 28vw, 400px)',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                  <img
                    src="/antique-project2.png"
                    alt="Project 2"
                    style={{
                      width: 'clamp(280px, 28vw, 400px)',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                  <img
                    src="/antique-project3.png"
                    alt="Project 3"
                    style={{
                      width: 'clamp(280px, 28vw, 400px)',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                </div>

                {/* Project Info */}
                <div style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  marginBottom: '0px',
                  paddingBottom: '10px'
                }}>
                  <p style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#ffffff',
                    fontWeight: '400',
                    margin: '0'
                  }}>
                    supply and installation of furniture at dialysis center
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={() => setShowAntiqueLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* AMT Learn More Modal */}
      {showAMTLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'url(/amt-bg.JPEG)',
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
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setAmtActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab3' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab3' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setAmtActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab2' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab2' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setAmtActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab1' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab1' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our PROJECTS
              </button>
            </div>

            {/* Tab Content */}
            {amtActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our PROJECTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  Our projects showcase our expertise in advanced micro technologies and innovative solutions.
                </p>
              </div>
            )}

            {amtActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  Our dedicated team of experts brings years of experience in advanced micro technologies and innovation.
                </p>
              </div>
            )}

            {amtActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(15px, 2vh, 20px)',
                  width: '100%',
                  maxWidth: '1000px',
                  alignItems: 'center',
                  marginLeft: 'clamp(20px, 3vw, 40px)'
                }}>
                  {/* Row 1: 5 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 82.png"
                      alt="Kingdom of Saudi Arabia"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 83.png"
                      alt="Imam Abdulrahman Bin Faisal University"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 84.png"
                      alt="Ma'aden"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 85.png"
                      alt="King Faisal University"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 86.png"
                      alt="Marafiq"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                  
                  {/* Row 2: 5 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 87.png"
                      alt="Saudi Arabia"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 90.png"
                      alt="Ministry of Health"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 91.png"
                      alt="Ministry of Finance"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 92.png"
                      alt="King Saud University"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 95.png"
                      alt="Aramco"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowAMTLearnMore(false)}
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
            ✕
          </button>
        </div>
      )}

      {/* Gulf Consult 2 Learn More Modal */}
      {showGulfConsult2LearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gulfconsultbg.png)',
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
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab3' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab3' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab2' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab2' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab1' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab1' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our PROJECTS
              </button>
            </div>

            {/* Tab Content */}
            {gulfConsult2ActiveTab === 'tab1' && (
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
                  OUR PROJECTS
                </h1>
                
                {/* Project Image */}
                <div style={{
                  width: '100%',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/image 65.png"
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

            {gulfConsult2ActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '20px'
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
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  Our dedicated team brings over 42 years of combined experience in providing high-quality engineering and environmental services.
                </p>
              </div>
            )}

            {gulfConsult2ActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 2vh, 20px)'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(15px, 2vh, 20px)',
                  width: '100%',
                  maxWidth: '1000px',
                  alignItems: 'center'
                }}>
                  {/* Row 1: 4 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 61.png"
                      alt="Al-Watania Poultry"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 60.png"
                      alt="United Global Contractors"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 59.png"
                      alt="HUTA HEGERFELD"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 58.png"
                      alt="Saudi Aramco"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                  
                  {/* Row 2: 5 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 53.png"
                      alt="Saudi Electricity Company"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 54.png"
                      alt="Samsung Engineering"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 55.png"
                      alt="KBR"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 56.png"
                      alt="C.A.T. GROUP"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
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
                      src="/Group 57.png"
                      alt="ARCHIRODON"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowGulfConsult2LearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* GSG Learn More Modal */}
      {showGSGLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#e0f7fa',
          backgroundImage: 'url(/gsg-ourpartnersbg.jpeg)',
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
            color: '#07373c',
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setGsgActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab1' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab1' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our PROJECTS
              </button>
              <button
                onClick={() => setGsgActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab2' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab2' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setGsgActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab3' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab3' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {gsgActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#07373c',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our PROJECTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#07373c'
                }}>
                  Our projects showcase our expertise in geophysical, geological, environmental, and engineering solutions across various industries.
                </p>
              </div>
            )}

            {gsgActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#07373c',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#07373c'
                }}>
                  Our dedicated team of scientists, engineers, and experts brings decades of combined experience to deliver innovative solutions for your projects.
                </p>
              </div>
            )}

            {gsgActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '60px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partner Logos */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 'clamp(30px, 5vw, 60px)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: '20px',
                  marginBottom: '40px'
                }}>
                  <img
                    src="/gcgpartner3 (3).png"
                    alt="GCG Partner"
                    style={{
                      width: 'clamp(200px, 20vw, 280px)',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                  <img
                    src="/gcgpartner3 (2).png"
                    alt="GeoPRO Partner"
                    style={{
                      width: 'clamp(200px, 20vw, 280px)',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                  <img
                    src="/gcgpartner3 (1).png"
                    alt="DMT Partner"
                    style={{
                      width: 'clamp(200px, 20vw, 280px)',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowGSGLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(7, 55, 60, 0.8)',
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
              e.currentTarget.style.background = 'rgba(7, 55, 60, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(7, 55, 60, 0.8)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Gulf Dorrah Learn More Modal */}
      {showGulfDorrahLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#061826',
          backgroundImage: 'url(/dorrah-gif.gif)',
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
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#33d18f',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              GULF DORRAH REAL
            </h1>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#29a4ff',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              ESTATE DEVELOPMENT
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#ffffff'
            }}>
              More information about Gulf Dorrah will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowGulfDorrahLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Central Medicalcare Learn More Modal */}
      {showCentralMedicalcareLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#bfa874',
          backgroundImage: 'url(/bg.png)',
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
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              CENTRAL MEDICALCARE
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#ffffff'
            }}>
              More information about Central Medicalcare will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowCentralMedicalcareLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* RK Learn More Modal */}
      {showRKLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f5f5f5',
          backgroundImage: 'url(/rk1-gif.gif)',
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
            justifyContent: 'center',
            color: '#000000'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#F4A460',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              AL RAKAEZ CONSTRUCTION
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#000000'
            }}>
              More information about Al Rakaez Construction will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowRKLearnMore(false)}
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
            ✕
          </button>
        </div>
      )}

      {/* AH Environmental Learn More Modal */}
      {showAHEnvironmentalLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          backgroundColor: ahEnvironmentalActiveTab === 'tab1' ? '#ffffff' : '#283152',
          backgroundImage: ahEnvironmentalActiveTab === 'tab1' ? 'none' : (ahEnvironmentalActiveTab === 'tab3' ? 'url(/bgourproject.png)' : 'url(/bgforah.png)'),
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto',
          boxSizing: 'border-box'
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
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab1' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab1' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(40, 60, 100, 0.8)',
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
                  if (ahEnvironmentalActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab1') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab2' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab2' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(40, 60, 100, 0.8)',
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
                  if (ahEnvironmentalActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab2') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab3' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab3' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(40, 60, 100, 0.8)',
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
                  if (ahEnvironmentalActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab3') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                Our PROJECTS
              </button>
            </div>

            {/* Tab Content */}
            {ahEnvironmentalActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '600px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#283152',
                  marginBottom: 'clamp(30px, 4vh, 50px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid - 12 logos in 2 rows of 6 */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(20px, 3vh, 30px)',
                  width: '100%',
                  alignItems: 'center'
                }}>
                  {/* Row 1: 6 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%',
                    maxWidth: '1200px'
                  }}>
                  {[67, 70, 71, 72, 73, 74].map((num) => (
                    <div key={num} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '15px',
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
                        src={`/Group ${num}.png`}
                        alt={`Partner ${num}`}
                        style={{
                          width: 'clamp(100px, 12vw, 150px)',
                          height: 'auto',
                          maxHeight: 'clamp(100px, 12vw, 150px)',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  ))}
                  </div>
                  
                  {/* Row 2: 6 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%',
                    maxWidth: '1200px'
                  }}>
                  {[75, 76, 77, 78, 79, 80].map((num) => (
                    <div key={num} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '15px',
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
                        src={`/Group ${num}.png`}
                        alt={`Partner ${num}`}
                        style={{
                          width: 'clamp(100px, 12vw, 150px)',
                          height: 'auto',
                          maxHeight: 'clamp(100px, 12vw, 150px)',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            )}

            {ahEnvironmentalActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  Our TEAM
                </h1>
                <img
                  src="/ahourteam.png"
                  alt="Our Team"
                  style={{
                    width: '100%',
                    maxWidth: 'clamp(800px, 80vw, 1000px)',
                    maxHeight: 'clamp(400px, 50vh, 500px)',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '12px'
                  }}
                />
              </div>
            )}

            {ahEnvironmentalActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '500px'
              }}>
                 {/* Title at Top Center */}
                 <h1 style={{
                   fontSize: 'clamp(24px, 2.5vw, 36px)',
                   fontWeight: '900',
                   color: '#7b1fa2',
                   marginBottom: '30px',
                   letterSpacing: '1.5px',
                   textTransform: 'uppercase',
                   textAlign: 'center',
                   textShadow: '0 2px 8px rgba(123, 31, 162, 0.4)'
                 }}>
                   Our PROJECTS
                 </h1>
                
                {/* Content Row: Text and Image */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: 'clamp(30px, 4vw, 50px)'
                }}>
                  {/* Left Side - Text Content */}
                  <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    paddingTop: '20px'
                  }}>
                  <p style={{
                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                    lineHeight: '1.8',
                    color: '#ffffff',
                    textAlign: 'left',
                    marginBottom: '0',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                  }}>
                    finovate offerings for industries at finovate, we go beyond one-size-fits-all solutions by offering customized bpm services designed to meet the unique needs of diverse industries. our digital business process management services, combined with expert consulting, seamless technology integration, and proven customer experience strategies, drive significant productivity and cost-efficiency gains. we don't just optimize processes—we transform them to elevate your industry.
                  </p>
                  </div>
                  
                  {/* Right Side - Image */}
                  <div style={{
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src="/photo66.png"
                      alt="Projects Chart"
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowAHEnvironmentalLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* IDC Learn More Modal */}
      {showIDCLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f5f5f5',
          backgroundImage: 'url(/idc-gif.gif)',
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
            justifyContent: 'center',
            color: '#0b2239'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#0b6fbf',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              IDC CONTRACTING COMPANY
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#0b2239'
            }}>
              More information about IDC Contracting Company will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowIDCLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(11, 34, 57, 0.8)',
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
              e.currentTarget.style.background = 'rgba(11, 34, 57, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(11, 34, 57, 0.8)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* GTA Learn More Modal */}
      {showGTALearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#ffffff',
          backgroundImage: 'url(/GTA-bg.jpeg)',
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
            justifyContent: 'center',
            color: '#000000'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#dc2626',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              GERMAN TECHNOLOGY AUTO
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#000000'
            }}>
              More information about German Technology Auto will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowGTALearnMore(false)}
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
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
