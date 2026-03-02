import React, { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPartners, setShowPartners] = useState(false);
  const [activeTab, setActiveTab] = useState('partners'); // 'partners', 'team', 'project', 'gallery'
  const [showGulfConsultLearnMore, setShowGulfConsultLearnMore] = useState(false);
  const [showGulfConsultArchQRModal, setShowGulfConsultArchQRModal] = useState(false);
  const [gulfConsultActiveTab, setGulfConsultActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners, 'tab4' = Gallery
  const [showAntiqueLearnMore, setShowAntiqueLearnMore] = useState(false);
  const [showAntiqueQRModal, setShowAntiqueQRModal] = useState(false);
  const [antiqueActiveTab, setAntiqueActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners
  const [showAMTLearnMore, setShowAMTLearnMore] = useState(false);
  const [amtActiveTab, setAmtActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [amtGalleryVideoIndex, setAmtGalleryVideoIndex] = useState(0); // Index for gallery videos
  const [amtGalleryFullscreenVideo, setAmtGalleryFullscreenVideo] = useState(null); // Fullscreen video URL
  const [showAMTQRModal, setShowAMTQRModal] = useState(false);
  const [showAlikaQRModal, setShowAlikaQRModal] = useState(false);
  const [showGulfConsult2LearnMore, setShowGulfConsult2LearnMore] = useState(false);
  const [gulfConsult2ActiveTab, setGulfConsult2ActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners, 'tab4' = Gallery
  const [gulfConsult2GalleryPlaying, setGulfConsult2GalleryPlaying] = useState(false); // Fullscreen gallery video in Gulf Consult 2 Learn More
  const [showGulfConsultQRModal, setShowGulfConsultQRModal] = useState(false);
  const [showGSGLearnMore, setShowGSGLearnMore] = useState(false);
  const [showGSGQRModal, setShowGSGQRModal] = useState(false);
  const [gsgActiveTab, setGsgActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfDorrahLearnMore, setShowGulfDorrahLearnMore] = useState(false);
  const [gulfDorrahActiveTab, setGulfDorrahActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners
  const [showGulfDorrahQRModal, setShowGulfDorrahQRModal] = useState(false);
  const [showCentralMedicalcareLearnMore, setShowCentralMedicalcareLearnMore] = useState(false);
  const [showCentralMedicalcareQRModal, setShowCentralMedicalcareQRModal] = useState(false);
  const [centralMedicalcareActiveTab, setCentralMedicalcareActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Major Clients, 'tab3' = Team, 'tab4' = Gallery
  const [showRKLearnMore, setShowRKLearnMore] = useState(false);
  const [rkActiveTab, setRkActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners
  const [showRKQRModal, setShowRKQRModal] = useState(false);
  const [showAHEnvironmentalLearnMore, setShowAHEnvironmentalLearnMore] = useState(false);
  const [showAHEnvironmentalQRModal, setShowAHEnvironmentalQRModal] = useState(false);
  const [ahEnvironmentalActiveTab, setAhEnvironmentalActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Team, 'tab3' = Projects, 'tab4' = Gallery
  const [showIDCLearnMore, setShowIDCLearnMore] = useState(false);
  const [idcActiveTab, setIdcActiveTab] = useState('tab1'); // 'tab1', 'tab2', 'tab3', 'tab4'
  const [showIDCQRModal, setShowIDCQRModal] = useState(false);
  const [showGTALearnMore, setShowGTALearnMore] = useState(false);
  const [gtaActiveTab, setGtaActiveTab] = useState('tab1'); // 'tab1' = Gallery, 'tab2' = Major Clients, 'tab3' = Our Team, 'tab4' = Our Partners
  const [showGTAQRModal, setShowGTAQRModal] = useState(false);
  const [dorrahVideoPlaying, setDorrahVideoPlaying] = useState(false);
  const [dorrahVideoFullscreen, setDorrahVideoFullscreen] = useState(false);
  const dorrahVideoContainerRef = useRef(null);
  const [amtVideoPlaying, setAmtVideoPlaying] = useState(false);
  const [amtVideoFullscreen, setAmtVideoFullscreen] = useState(false);
  const amtVideoContainerRef = useRef(null);
  const amtGalleryVideoRefs = useRef([]);
  const [tlcoVideoPlaying, setTlcoVideoPlaying] = useState(false);
  const [tlcoVideoFullscreen, setTlcoVideoFullscreen] = useState(false);
  const [showTLCOQRModal, setShowTLCOQRModal] = useState(false);
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

  // Home background sound + reveal animation (main page only)
  const [homeSoundEnabled, setHomeSoundEnabled] = useState(false);
  const [homeReveal, setHomeReveal] = useState(false);
  const [homeReturning, setHomeReturning] = useState(false);
  const [showChairmanMessage, setShowChairmanMessage] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [aboutUsTab, setAboutUsTab] = useState('who'); // 'who' | 'values' | 'vision'
  const [showSubsidiaries, setShowSubsidiaries] = useState(false);
  
  // Track viewport size for Dorrah page layout adjustments
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent zoom in/out (zoom in and zoom out)
  useEffect(() => {
    // Prevent zoom with keyboard shortcuts (Ctrl + Plus, Ctrl + Minus, Ctrl + 0, Ctrl + Scroll)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0' || e.keyCode === 187 || e.keyCode === 189 || e.keyCode === 48)) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent zoom with mouse wheel + Ctrl
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent pinch zoom on touch devices
    let lastTouchEnd = 0;
    const handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Prevent gesture zoom
    const handleGestureStart = (e) => {
      e.preventDefault();
    };

    // Prevent double-tap zoom
    const handleDoubleClick = (e) => {
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('gesturestart', handleGestureStart, { passive: false });
    document.addEventListener('gesturechange', handleGestureStart, { passive: false });
    document.addEventListener('gestureend', handleGestureStart, { passive: false });
    document.addEventListener('dblclick', handleDoubleClick, { passive: false });

    // Force zoom level to 1
    const setZoom = () => {
      if (document.body.style.zoom !== '1') {
        document.body.style.zoom = '1';
      }
      if (document.documentElement.style.zoom !== '1') {
        document.documentElement.style.zoom = '1';
      }
    };

    setZoom();
    const zoomInterval = setInterval(setZoom, 100);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('gesturestart', handleGestureStart);
      document.removeEventListener('gesturechange', handleGestureStart);
      document.removeEventListener('gestureend', handleGestureStart);
      document.removeEventListener('dblclick', handleDoubleClick);
      clearInterval(zoomInterval);
    };
  }, []);

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

  // Reset gallery video index when opening gallery tab
  useEffect(() => {
    if (amtActiveTab === 'tab4') {
      setAmtGalleryVideoIndex(0);
      setAmtGalleryFullscreenVideo(null);
    }
  }, [amtActiveTab]);

  // Listen for video end event from Cloudinary player
  useEffect(() => {
    const handleMessage = (event) => {
      // Cloudinary player sends 'videoend' event
      if (event.data && typeof event.data === 'object') {
        if (event.data.event === 'videoend' || event.data.event === 'ended') {
          if (amtGalleryFullscreenVideo) {
            // Exit fullscreen
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            }
            setAmtGalleryFullscreenVideo(null);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [amtGalleryFullscreenVideo]);

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

  // Prevent body scroll when Gulf Consult modal is open
  useEffect(() => {
    if (showGulfConsultLearnMore) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on body and html
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        // Restore scrolling when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showGulfConsultLearnMore]);

  // Prevent body scroll when Subsidiaries modal is open
  useEffect(() => {
    if (showSubsidiaries) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on body and html
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        // Restore scrolling when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showSubsidiaries]);

  // Handle Escape key to close AMT QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showAMTQRModal) {
        setShowAMTQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showAMTQRModal]);

  // Handle Escape key to close Alika QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showAlikaQRModal) {
        setShowAlikaQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showAlikaQRModal]);

  // Handle Escape key to close Gulf Dorrah QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGulfDorrahQRModal) {
        setShowGulfDorrahQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGulfDorrahQRModal]);

  // Auto-close AMT QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showAMTQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowAMTQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showAMTQRModal]);

  // Auto-close Alika QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showAlikaQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowAlikaQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showAlikaQRModal]);

  // Auto-close Gulf Dorrah QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGulfDorrahQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGulfDorrahQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGulfDorrahQRModal]);

  // Handle Escape key to close GTA QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGTAQRModal) {
        setShowGTAQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGTAQRModal]);

  // Handle Escape key to close AH Environmental QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showAHEnvironmentalQRModal) {
        setShowAHEnvironmentalQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showAHEnvironmentalQRModal]);

  // Handle Escape key to close Central Medicalcare QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showCentralMedicalcareQRModal) {
        setShowCentralMedicalcareQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showCentralMedicalcareQRModal]);

  // Handle Escape key to close RK QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showRKQRModal) {
        setShowRKQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showRKQRModal]);

  // Handle Escape key to close Antique QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showAntiqueQRModal) {
        setShowAntiqueQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showAntiqueQRModal]);

  // Handle Escape key to close TLCO QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showTLCOQRModal) {
        setShowTLCOQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showTLCOQRModal]);

  // Handle Escape key to close GSG QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGSGQRModal) {
        setShowGSGQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGSGQRModal]);

  // Handle Escape key to close IDC QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showIDCQRModal) {
        setShowIDCQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showIDCQRModal]);

  // Auto-close GTA QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGTAQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGTAQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGTAQRModal]);

  // Auto-close AH Environmental QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showAHEnvironmentalQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowAHEnvironmentalQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showAHEnvironmentalQRModal]);

  // Auto-close Central Medicalcare QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showCentralMedicalcareQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowCentralMedicalcareQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showCentralMedicalcareQRModal]);

  // Auto-close RK QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showRKQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowRKQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showRKQRModal]);

  // Auto-close Antique QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showAntiqueQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowAntiqueQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showAntiqueQRModal]);

  // Auto-close TLCO QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showTLCOQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowTLCOQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showTLCOQRModal]);

  // Auto-close GSG QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGSGQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGSGQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGSGQRModal]);

  // Auto-close IDC QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showIDCQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowIDCQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showIDCQRModal]);

  // Handle Escape key to close Gulf Consult QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGulfConsultQRModal) {
        setShowGulfConsultQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGulfConsultQRModal]);

  // Auto-close Gulf Consult QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGulfConsultQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGulfConsultQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGulfConsultQRModal]);

  // Handle Escape key to close Gulf Consult Arch QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGulfConsultArchQRModal) {
        setShowGulfConsultArchQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGulfConsultArchQRModal]);

  // Auto-close Gulf Consult Arch QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGulfConsultArchQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGulfConsultArchQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGulfConsultArchQRModal]);

  // Auto-close About Us modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showAboutUs) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowAboutUs(false);
      }, 90000); // 90 seconds
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showAboutUs]);

  // Auto-close Chairman Message modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showChairmanMessage) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowChairmanMessage(false);
      }, 90000); // 90 seconds
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showChairmanMessage]);

  // Auto-redirect to homepage after 90 seconds of inactivity on company/Learn More pages
  useEffect(() => {
    // Check if we're on a company page or Learn More page
    const isOnCompanyOrLearnMorePage = () => {
      return selectedCompany !== null || 
             showGulfConsultLearnMore || 
             showAntiqueLearnMore || 
             showAMTLearnMore || 
             showGulfConsult2LearnMore || 
             showGSGLearnMore || 
             showGulfDorrahLearnMore || 
             showCentralMedicalcareLearnMore || 
             showRKLearnMore || 
             showAHEnvironmentalLearnMore || 
             showIDCLearnMore || 
             showGTALearnMore;
    };

    // Check if any video is playing or modal/overlay is open
    const isVideoOrModalOpen = () => {
      return amtVideoFullscreen || 
             idcVideoFullscreen || 
             antiqueVideoFullscreen || 
             centralMedicalcareVideoFullscreen || 
             gulfConsultArchVideoFullscreen || 
             dorrahVideoFullscreen || 
             tlcoVideoFullscreen || 
             gulfConsultVideoFullscreen || 
             gulfLogoVideoFullscreen ||
             showChairmanMessage ||
             showAboutUs;
    };

    // Function to navigate back to homepage
    const navigateToHomepage = () => {
      // Close all company pages and Learn More modals
      setSelectedCompany(null);
      setShowGulfConsultLearnMore(false);
      setShowAntiqueLearnMore(false);
      setShowAMTLearnMore(false);
      setShowGulfConsult2LearnMore(false);
      setShowGSGLearnMore(false);
      setShowGulfDorrahLearnMore(false);
      setShowCentralMedicalcareLearnMore(false);
      setShowRKLearnMore(false);
      setShowAHEnvironmentalLearnMore(false);
      setShowIDCLearnMore(false);
      setShowGTALearnMore(false);
      setShowPartners(false);
      setActiveTab('partners');
      
      // Reset home state
      setHomeReturning(true);
      setTimeout(() => setHomeReturning(false), 600);
    };

    // Only run if we're on a company or Learn More page
    if (!isOnCompanyOrLearnMorePage()) {
      return;
    }

    let inactivityTimer = null;
    const INACTIVITY_TIMEOUT = 90000; // 90 seconds in milliseconds

    // Function to reset the inactivity timer
    const resetInactivityTimer = () => {
      // Clear existing timer
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }

      // Don't start timer if video or modal is open
      if (isVideoOrModalOpen()) {
        return;
      }

      // Set new timer
      inactivityTimer = setTimeout(() => {
        // Double-check we're still on a company/Learn More page and no video/modal is open
        if (isOnCompanyOrLearnMorePage() && !isVideoOrModalOpen()) {
          navigateToHomepage();
        }
      }, INACTIVITY_TIMEOUT);
    };

    // Activity event handlers
    const handleActivity = () => {
      resetInactivityTimer();
    };

    // Track mouse movement
    const handleMouseMove = () => {
      handleActivity();
    };

    // Track clicks
    const handleClick = () => {
      handleActivity();
    };

    // Track scrolling
    const handleScroll = () => {
      handleActivity();
    };

    // Track keyboard input
    const handleKeyDown = () => {
      handleActivity();
    };

    // Track touch events (for mobile)
    const handleTouchStart = () => {
      handleActivity();
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll, true); // Use capture for scroll
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, true);

    // Start the timer initially
    resetInactivityTimer();

    // Cleanup
    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [
    selectedCompany,
    showGulfConsultLearnMore,
    showAntiqueLearnMore,
    showAMTLearnMore,
    showGulfConsult2LearnMore,
    showGSGLearnMore,
    showGulfDorrahLearnMore,
    showCentralMedicalcareLearnMore,
    showRKLearnMore,
    showAHEnvironmentalLearnMore,
    showIDCLearnMore,
    showGTALearnMore,
    amtVideoFullscreen,
    idcVideoFullscreen,
    antiqueVideoFullscreen,
    centralMedicalcareVideoFullscreen,
    gulfConsultArchVideoFullscreen,
    dorrahVideoFullscreen,
    tlcoVideoFullscreen,
    gulfConsultVideoFullscreen,
    gulfLogoVideoFullscreen,
    showChairmanMessage,
    showAboutUs
  ]);

  // Disable right-click context menu globally across the entire website
  useEffect(() => {
    // Prevent context menu on right-click (works globally via event capture)
    const handleContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable common developer tools shortcuts
    const handleKeyDown = (e) => {
      // F12 - Developer Tools
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I - Developer Tools
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+J - Console
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+U - View Source
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+C - Element Inspector
      if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+S - Save Page (can be used to save images)
      if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        return false;
      }
    };

    // Use capture phase to catch events before they reach target elements
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('keydown', handleKeyDown, true);
    
    // Also add to window for additional coverage
    window.addEventListener('contextmenu', handleContextMenu, true);
    window.addEventListener('keydown', handleKeyDown, true);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('contextmenu', handleContextMenu, true);
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  // Helper function to close video and exit fullscreen - use useCallback to ensure it's stable
  const closeVideo = React.useCallback((setVideoFullscreen, setVideoPlaying) => {
    // Small delay for smooth transition
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
    }, 300);
  }, []);

  // Handle video end events for all videos - auto-close when finished
  useEffect(() => {
    const handleMessage = (event) => {
      // Listen for Cloudinary player events from their domain
      if (!event.origin || !event.origin.includes('cloudinary.com')) {
        // Also check for events from the same origin (for local testing)
        if (event.origin && !event.origin.includes('localhost') && !event.origin.includes('127.0.0.1')) {
          return;
        }
      }
      
      // Cloudinary sends events in various formats
      if (event.data) {
        let eventType = null;
        let eventData = event.data;
        
        // Handle object format
        if (typeof eventData === 'object') {
          eventType = eventData.event || eventData.eventName || eventData.type || eventData.name || eventData.eventType;
          // Also check nested properties
          if (!eventType && eventData.data) {
            eventType = eventData.data.event || eventData.data.eventName || eventData.data.type;
          }
        }
        // Handle string format (JSON stringified)
        else if (typeof eventData === 'string') {
          try {
            const parsed = JSON.parse(eventData);
            eventType = parsed.event || parsed.eventName || parsed.type || parsed.name || parsed.eventType;
            if (!eventType && parsed.data) {
              eventType = parsed.data.event || parsed.data.eventName || parsed.data.type;
            }
          } catch (e) {
            // Not JSON, check if it's a direct string event
            const lowerData = eventData.toLowerCase();
            if (lowerData.includes('ended') || lowerData.includes('complete') || 
                lowerData.includes('videoend') || lowerData.includes('playback-ended')) {
              eventType = 'ended';
            }
          }
        }
        
        // Check for video end events - comprehensive list
        if (eventType === 'ended' || eventType === 'video-ended' || eventType === 'complete' || 
            eventType === 'playback-ended' || eventType === 'videoend' || eventType === 'end' ||
            eventType === 'video_complete' || eventType === 'playback_complete') {
          // Auto-close all videos when they end
          if (amtVideoFullscreen) {
            closeVideo(setAmtVideoFullscreen, setAmtVideoPlaying);
          }
          if (amtGalleryFullscreenVideo) {
            closeVideo(() => setAmtGalleryFullscreenVideo(null), setAmtVideoPlaying);
          }
          if (idcVideoFullscreen) {
            closeVideo(setIdcVideoFullscreen, setIdcVideoPlaying);
          }
          if (antiqueVideoFullscreen) {
            closeVideo(setAntiqueVideoFullscreen, setAntiqueVideoPlaying);
          }
          if (centralMedicalcareVideoFullscreen) {
            closeVideo(setCentralMedicalcareVideoFullscreen, setCentralMedicalcareVideoPlaying);
          }
          if (gulfConsultArchVideoFullscreen) {
            closeVideo(setGulfConsultArchVideoFullscreen, setGulfConsultArchVideoPlaying);
          }
          if (dorrahVideoFullscreen) {
            closeVideo(setDorrahVideoFullscreen, setDorrahVideoPlaying);
          }
          if (tlcoVideoFullscreen) {
            closeVideo(setTlcoVideoFullscreen, setTlcoVideoPlaying);
          }
          if (gulfConsultVideoFullscreen) {
            closeVideo(setGulfConsultVideoFullscreen, setGulfConsultVideoPlaying);
          }
          if (gulfLogoVideoFullscreen) {
            closeVideo(setGulfLogoVideoFullscreen, setGulfLogoVideoPlaying);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [amtVideoFullscreen, idcVideoFullscreen, antiqueVideoFullscreen, centralMedicalcareVideoFullscreen, gulfConsultArchVideoFullscreen, dorrahVideoFullscreen, tlcoVideoFullscreen, gulfConsultVideoFullscreen, gulfLogoVideoFullscreen]);

  // Hide scrollbars when Partners modal is open - ABSOLUTE FIX
  useEffect(() => {
    if (showPartners) {
      // Add classes immediately
      document.body.classList.add('partners-modal-open');
      document.documentElement.classList.add('partners-modal-open');
      
      // Force body styles - NO SCROLL
      const bodyStyles = {
        overflow: 'hidden',
        overflowY: 'hidden',
        overflowX: 'hidden',
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        margin: '0',
        padding: '0',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        boxSizing: 'border-box'
      };
      
      Object.assign(document.body.style, bodyStyles);
      
      // Force html styles - NO SCROLL
      const htmlStyles = {
        overflow: 'hidden',
        overflowY: 'hidden',
        overflowX: 'hidden',
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
      };
      
      Object.assign(document.documentElement.style, htmlStyles);
      
      // Prevent any scrolling
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Hide scrollbars on body and html using inline styles
      document.body.style.scrollbarWidth = 'none';
      document.body.style.msOverflowStyle = 'none';
      document.documentElement.style.scrollbarWidth = 'none';
      document.documentElement.style.msOverflowStyle = 'none';
      
      // Add CSS to hide scrollbars for all elements
      const style = document.createElement('style');
      style.id = 'partners-modal-scrollbar-hide';
      style.textContent = `
        * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        body, html {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        body::-webkit-scrollbar, html::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .partners-modal > div:first-child {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow-y: auto !important;
        }
        .partners-modal > div:first-child::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `;
      document.head.appendChild(style);
      
      // Disable scroll on window - but allow scrolling inside modal content
      const preventScroll = (e) => {
        // Allow scrolling inside the modal content container
        const modalContent = document.querySelector('.partners-modal > div:first-child');
        if (modalContent) {
          // Check if the event is from inside the modal content
          const isInsideModal = modalContent.contains(e.target) || 
                               e.target === modalContent ||
                               e.target.closest('.partners-modal > div:first-child');
          
          if (isInsideModal) {
            // Allow scrolling inside modal
            return true;
          }
        }
        
        // Prevent scrolling everywhere else
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      
      return () => {
        // Remove the style element
        const styleElement = document.getElementById('partners-modal-scrollbar-hide');
        if (styleElement) {
          styleElement.remove();
        }
        
        // Cleanup
        document.body.classList.remove('partners-modal-open');
        document.documentElement.classList.remove('partners-modal-open');
        
        // Reset scrollbar styles
        document.body.style.scrollbarWidth = '';
        document.body.style.msOverflowStyle = '';
        document.documentElement.style.scrollbarWidth = '';
        document.documentElement.style.msOverflowStyle = '';
        
        // Reset styles
        Object.keys(bodyStyles).forEach(key => {
          document.body.style[key] = '';
        });
        Object.keys(htmlStyles).forEach(key => {
          document.documentElement.style[key] = '';
        });
        
        // Remove scroll prevention
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('scroll', preventScroll);
      };
    } else {
      // Remove the style element
      const styleElement = document.getElementById('partners-modal-scrollbar-hide');
      if (styleElement) {
        styleElement.remove();
      }
      
      // Remove classes
      document.body.classList.remove('partners-modal-open');
      document.documentElement.classList.remove('partners-modal-open');
      
      // Reset scrollbar styles
      document.body.style.scrollbarWidth = '';
      document.body.style.msOverflowStyle = '';
      document.documentElement.style.scrollbarWidth = '';
      document.documentElement.style.msOverflowStyle = '';
      
      // Reset all styles
      document.body.style.overflow = '';
      document.body.style.overflowY = '';
      document.body.style.overflowX = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.maxWidth = '';
      document.body.style.maxHeight = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      document.body.style.boxSizing = '';
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowY = '';
      document.documentElement.style.overflowX = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
      document.documentElement.style.maxWidth = '';
      document.documentElement.style.maxHeight = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.boxSizing = '';
    }
  }, [showPartners]);

  // Additional detection: Listen for iframe visibility changes that might indicate video end
  useEffect(() => {
    const handleVisibilityChange = () => {
      // If page becomes visible and video is playing, check if it ended
      if (!document.hidden) {
        // This is a fallback - the postMessage handler should catch it first
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Company logos data - AMT أسفل Central Care (بين AH و GC)
  // GTA next to AMT, Antique next to AH Environmental
  const companies = [
    // Right side - pattern (1-2-2-1) moving southeast
    // Row 1: 2 squares - Gulf Logo between IDC and GSG (at top of TLCO)
    { id: 1, logo: '/IDC.png', row: 1, col: 4, name: 'IDC', bgImage: '/idcbg.png' },
    { id: 12, logo: '/gulf-logo.png', row: 1, col: 5, name: 'Gulf Logo', bgImage: '/gulfconsultbg.png', modalLogo: '/Gulf-white.png' },
    // Row 2: 2 squares
    { id: 10, logo: '/tico.png', row: 2, col: 4, name: 'TLCO', bgImage: '/elco-gif.gif' },
    { id: 11, logo: '/gsg.png', row: 2, col: 5, name: 'GSG', bgImage: '/gcg-gif.gif' },
    // Row 3: 4 squares - Gulf Consult next to Antique
    { id: 9,  logo: '/GULF-CONSULT.png', row: 3, col: 2, name: 'Gulf Consult', bgImage: '/GC-bg.jpeg', modalLogo: '/GULF-CONSULT.png' },
    { id: 2, logo: '/antique.png', row: 3, col: 3, name: 'Antique', bgImage: '/ant-git.gif', modalLogo: '/antiqqe.png' },
    { id: 5,  logo: '/AH-ENVIRONMENTAL.png', row: 3, col: 4, name: 'AH Environmental', bgImage: '/ah-gif.gif', modalLogo: '/ah-white.png' },
    { id: 3,  logo: '/cc.png', row: 3, col: 5, name: 'Central Care', bgImage: '/rk-gif.gif' },
    // Row 4: 4 squares - RK between Central Care and AMT (at left of AH Environmental)
    { id: 7,  logo: '/dorrah.png', row: 4, col: 2, name: 'Al Dorrah', bgImage: '/dorrah-gif.gif' },
    { id: 4,  logo: '/GTA.png', row: 4, col: 3, name: 'GTA', bgImage: '/GTA-bg4.png' },
    { id: 8,  logo: '/AMT.png', row: 4, col: 4, name: 'AMT', bgImage: '/amt-bg.png', modalLogo: '/amt-internal.jpg' },
    { id: 6,  logo: '/RK.png', row: 4, col: 5, name: 'RK', bgImage: '/rk1-gif.gif' },
  ];







  return (
    <div
      className={`home-root${homeReveal ? ' is-reveal' : ''}${homeReturning ? ' is-return' : ''}`}
      style={{
      width: '100vw',
      height: '100vh',
      background: '#9FB2BC',
      display: 'flex',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      aspectRatio: '16/9',
      minHeight: '100vh',
      minWidth: '100vw'
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: homeSoundEnabled ? 1 : 0.3,
          overflow: 'hidden'
        }}
      >
        <iframe
          key={homeSoundEnabled ? 'bg-sound-on' : 'bg-sound-off'}
          src={`https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=alika_final_2_pttcrz&profile=cld-default&autoplay=true&muted=${homeSoundEnabled ? 'false' : 'true'}&loop=true&controls=false&playsinline=true`}
          title="Alika Background Video"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%) scale(1.2)',
            transformOrigin: 'center',
            border: 0,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Home action button (enable sound + reveal animation) */}
      {!homeSoundEnabled && selectedCompany === null && !showAboutUs && (
        <button
          type="button"
          className="home-sound-btn"
          onClick={() => {
            setHomeSoundEnabled(true);
            setHomeReveal(true);
            setHomeReturning(false);
            setShowChairmanMessage(false);
            setShowAboutUs(false);
          }}
          aria-label="Enable background video sound"
        >
          Vice President's speech
        </button>
      )}

      {/* Back button (return to main UI) */}
      {homeSoundEnabled && (
        <button
          type="button"
          className="home-back-btn"
          onClick={() => {
            setHomeSoundEnabled(false);
            setHomeReveal(false);
            setHomeReturning(true);
            window.setTimeout(() => setHomeReturning(false), 720);
            setShowChairmanMessage(false);
          }}
          aria-label="Back to Alika"
        >
          Back to Alika
        </button>
      )}

      {/* Chairman message button (home only) - always visible when not on sound screen */}
      {!homeSoundEnabled && selectedCompany === null && !showAboutUs && (
        <button
          type="button"
          className={`home-chairman-btn ${showChairmanMessage ? 'active' : ''}`}
          onClick={() => {
            if (showChairmanMessage) {
              setShowChairmanMessage(false);
            } else {
              setShowChairmanMessage(true);
              setShowAboutUs(false);
            }
            setHomeReveal(false);
            setHomeReturning(false);
          }}
          aria-label="Message from the Chairman"
        >
          Message from the Chairman
        </button>
      )}

      {/* About us button (home only) - always visible when not on sound screen */}
      {!homeSoundEnabled && selectedCompany === null && !showAboutUs && (
        <button
          type="button"
          className="home-about-btn"
          onClick={() => {
            setShowAboutUs(true);
            setAboutUsTab('who');
            setShowChairmanMessage(false);
            setHomeReveal(false);
            setHomeReturning(false);
          }}
          aria-label="About us"
        >
          About us
        </button>
      )}

      {/* About us full-screen page */}
      {showAboutUs && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#061826',
          zIndex: 1000,
          animation: 'fadeIn 0.6s ease-in-out'
        }}>
          {/* Back button */}
          <button
            type="button"
            onClick={() => setShowAboutUs(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2vh, 40px)',
              right: 'clamp(20px, 2vw, 40px)',
              zIndex: 1002,
              padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.5vw, 32px)',
              fontSize: 'clamp(14px, 1.2vw, 18px)',
              fontWeight: '600',
              color: '#ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            aria-label="Back to Alika"
          >
            Back to Alika
          </button>

          {/* Company Logos Grid - Left Side */}
          <div
            style={{
              position: 'fixed',
              top: 'clamp(55%, 55vh, 60%)',
              left: 'clamp(80px, 7vw, 140px)',
              transform: 'translateY(-50%)',
              zIndex: 1001,
              animation: 'fadeIn 0.8s ease-in-out 0.4s both',
              opacity: 0.9
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                transform: 'rotate(45deg)',
                position: 'relative'
              }}
            >
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
                    <div
                      style={{
                        cursor:
                          company.id === 10 ||
                          company.id === 3 ||
                          company.id === 11 ||
                          company.id === 1 ||
                          company.id === 6 ||
                          company.id === 5 ||
                          company.id === 2 ||
                          company.id === 7 ||
                          company.id === 9 ||
                          company.id === 12 ||
                          company.id === 4 ||
                          company.id === 8
                            ? 'pointer'
                            : 'default',
                        width: '100%',
                        height: '100%',
                        minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                        minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
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
                        if (
                          company.id === 10 ||
                          company.id === 3 ||
                          company.id === 11 ||
                          company.id === 1 ||
                          company.id === 6 ||
                          company.id === 5 ||
                          company.id === 2 ||
                          company.id === 7 ||
                          company.id === 9 ||
                          company.id === 12 ||
                          company.id === 4 ||
                          company.id === 8
                        ) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          sessionStorage.setItem('logoStartX', rect.left);
                          sessionStorage.setItem('logoStartY', rect.top);
                          setShowAboutUs(false);
                          setSelectedCompany(company);
                        }
                      }}
                    >
                      <div
                        style={{
                          transform: 'rotate(-45deg)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          padding: '10px'
                        }}
                      >
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

          {/* About us content - Right Side */}
          <div style={{
            position: 'fixed',
            top: '50%',
            right: 'clamp(100px, 15vw, 200px)',
            transform: 'translateY(-50%)',
            zIndex: 1001,
            width: 'auto',
            maxHeight: '100vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '40px',
            padding: 0,
            animation: 'fadeIn 0.8s ease-in-out 0.2s both',
            direction: 'ltr',
            overflow: 'visible'
          }}>
            {/* Left Column - Content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '500px',
              gap: '14px'
            }}>
              {/* Alika Logo - Top Left */}
              <div style={{
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '100%',
                marginLeft: 0,
                paddingLeft: 0
              }}>
                <img
                  src="/alikalogo-removebg-preview.png"
                  alt="Alika Logo"
                  style={{
                    maxWidth: '250px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))',
                    marginLeft: 0
                  }}
                />
              </div>

              {/* Company Description */}
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#ffffff',
                textAlign: 'left',
                margin: 0,
                marginBottom: '14px',
                fontWeight: '400',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                direction: 'ltr',
                unicodeBidi: 'embed',
                padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                background: 'rgba(0, 0, 0, 0.45)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(243, 192, 107, 0.1), -4px 0 16px rgba(243, 192, 107, 0.4)',
                borderLeft: '5px solid #ffffff',
                position: 'relative'
              }}>
                We at ALIKA Holding Group, a leading Saudi investment group, we manage and grow our assets through a diversified portfolio that spans strategic sectors such as professional services, technology and communications, healthcare, and real estate development. We believe that smart investment is the true driver of sustainable growth; therefore, we rely on our innovative vision to seize promising opportunities and build long-term investments that enhance our operational efficiency and increase the value of our subsidiaries. Through this approach, we continue to strengthen our competitive position and create lasting value for our shareholders and partners.
              </p>

              {/* Management */}
              <div style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#ffffff',
                textAlign: 'left',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                direction: 'ltr',
                unicodeBidi: 'embed'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '6px' }}>
                  Management:
                </div>
                <div style={{ marginLeft: '15px' }}>
                  Chairman Eng. Ali Khudair Al Harbi<br />
                  Vice President Faisal Ali Alharbi
                </div>
              </div>

              {/* Phone Number */}
              <div style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#ffffff',
                textAlign: 'left',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                direction: 'ltr',
                unicodeBidi: 'embed'
              }}>
                <span style={{ fontWeight: '600' }}>Phone number:</span> 920017259
              </div>

              {/* Email */}
              <div style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#ffffff',
                textAlign: 'left',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                direction: 'ltr',
                unicodeBidi: 'embed',
                marginBottom: '15px'
              }}>
                <span style={{ fontWeight: '600' }}>Email:</span> info@alikaholding.com
              </div>

              {/* Buttons and QR Code Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 'clamp(40px, 5vw, 60px)',
                width: '100%'
              }}>
                {/* Buttons */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  flex: '0 0 auto'
                }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSubsidiaries(true);
                    }}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.2vw, 32px)',
                      fontSize: 'clamp(12px, 1.3vw, 18px)',
                      fontWeight: '600',
                      color: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      width: 'fit-content',
                      maxWidth: 'clamp(200px, 50vw, 350px)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      direction: 'ltr'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    Our Subsidiaries
                  </button>

                  <button
                    type="button"
                    onClick={() => window.open('https://alikaholding.com/', '_blank', 'noopener,noreferrer')}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.2vw, 32px)',
                      fontSize: 'clamp(12px, 1.3vw, 18px)',
                      fontWeight: '600',
                      color: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      width: 'fit-content',
                      maxWidth: 'clamp(200px, 50vw, 350px)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      direction: 'ltr'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    Our Website
                  </button>

                  <button
                    type="button"
                    onClick={() => window.open('https://alikaholding.com/investments/', '_blank', 'noopener,noreferrer')}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2.2vw, 32px)',
                      fontSize: 'clamp(12px, 1.3vw, 18px)',
                      fontWeight: '600',
                      color: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      width: 'fit-content',
                      maxWidth: 'clamp(200px, 50vw, 350px)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      direction: 'ltr'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                  >
                    Our Investments
                  </button>
                </div>

                {/* QR Code - Next to buttons */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginLeft: 'clamp(60px, 7vw, 80px)'
                }}>
                  <img
                    src="/alikaqr.jpeg"
                    alt="Alika QR Code"
                    onClick={() => setShowAlikaQRModal(true)}
                    style={{
                      maxWidth: 'clamp(140px, 16vw, 220px)',
                      maxHeight: 'clamp(140px, 16vw, 220px)',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      backgroundColor: '#ffffff',
                      padding: 'clamp(6px, 0.8vw, 12px)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exit chairman message (button is rendered inside the chairman card for better proximity) */}

      {/* Foreground UI (logos / Alika / grid) */}
      <div className="home-foreground" style={{ display: 'flex', width: '100%', height: '100%' }}>
        {/* Left side - Company info */}
        <div className="home-left" style={{
          flex: '0 0 var(--left-panel-width, 35%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--main-padding, clamp(20px, 3vw, 60px)) clamp(20px, 2.5vw, 40px)',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Logo or Chairman Message */}
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: showChairmanMessage ? 'auto' : 'clamp(300px, 40vh, 600px)',
            maxHeight: showChairmanMessage ? '90vh' : 'none',
            overflowY: showChairmanMessage ? 'auto' : 'visible'
          }}>
            {!showChairmanMessage ? (
              <img
                src="/alika.png"
                alt="Alika Logo"
                className="left-hero-item left-hero-item--alika"
                style={{
                  width: 'var(--main-logo-size, clamp(200px, 30vw, 700px))',
                  height: 'auto',
                  maxWidth: '100%',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              />
            ) : (
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
                      src="/chairman.png" 
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
            )}
          </div>
        </div>

        {/* Right side - Diamond grid */}
        <div className="home-right" style={{
          flex: '0 0 var(--right-panel-width, 65%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: 'var(--main-padding, clamp(20px, 3vw, 60px)) clamp(20px, 2.5vw, 40px) clamp(20px, 3vw, 60px) clamp(20px, 4vw, 80px)',
          overflow: 'hidden'
        }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
          gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
          gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
          transform: 'rotate(45deg) translate(clamp(20px, 4vw, 60px), clamp(30px, 5vh, 90px))',
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
                      width: '100%',
                      height: '100%',
                      minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                      minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
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
          backgroundImage: selectedCompany.id === 8 || selectedCompany.id === 6 || selectedCompany.id === 9 || selectedCompany.id === 7 || selectedCompany.id === 2 ? 'none' : `url(${selectedCompany.bgImage || selectedCompany.logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: selectedCompany.id === 8 ? 'transparent' : selectedCompany.id === 6 ? '#0a0a0a' : selectedCompany.id === 9 ? '#f0f4f8' : selectedCompany.id === 7 ? '#061826' : selectedCompany.id === 2 ? '#1a1a1a' : 'transparent',
          zIndex: 1000,
          animation: 'fadeIn 0.6s ease-in-out'
        }}>
          {/* Special layout for AMT and RK */}
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
                opacity: 1,
                zIndex: 1
              }} />
              
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isAMTLogo = company.id === 8;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            // AMT logo: keep same white panel but make it pop with glow and border
                            background: isAMTLogo ? '#ffffff' : '#E8E8E8',
                            border: isAMTLogo
                              ? '2px solid #ff4b4b'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isAMTLogo
                              ? '0 0 25px rgba(255, 75, 75, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isAMTLogo ? 2 : 1,
                            transform: isAMTLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isAMTLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(255, 75, 75, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isAMTLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(255, 75, 75, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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
                  <video
                    key={`amt-video-${amtVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/AMT_Company_Profile_Transformation___From_Static_PDF_to_CEO_Video_by_Zuccess_zykzgl.mp4"
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
                      closeVideo(setAmtVideoFullscreen, setAmtVideoPlaying);
                    }}
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

              {/* AMT Text Content - Right Side */}
              <div
                className="amt-content"
                style={{
                  position: 'fixed',
                  top: '48%',
                  right: 'clamp(40px, 4vw, 80px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'var(--amt-content-max-width, clamp(600px, 50vw, 900px))',
                  color: '#1a1a1a',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--amt-title-size, clamp(32px, 4.2vw, 58px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(16px, 2.5vh, 28px)',
                    letterSpacing: '2.2px',
                    background: 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textTransform: 'uppercase',
                    textShadow: '0 0 30px rgba(255, 75, 75, 0.4), 0 4px 20px rgba(255, 75, 75, 0.3)',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    position: 'relative',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 8px rgba(255, 75, 75, 0.5))'
                  }}
                >
                  ADVANCED MICRO TECHNOLOGIES (AMT)
                </h1>

                <p
                  style={{
                    fontSize: 'var(--amt-text-size, clamp(16px, 1.9vw, 26px))',
                    lineHeight: '1.85',
                    marginBottom: 'clamp(24px, 3.5vh, 36px)',
                    color: '#1a1a1a',
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 75, 75, 0.1)',
                    borderLeft: '4px solid #ff4b4b'
                  }}
                >
                  is a Saudi company providing IT and telecommunications services, including data center design, cybersecurity, and low current systems such as surveillance and alarms.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(26px, 4.2vw, 60px)',
                    alignItems: 'center',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: 'clamp(10px, 1.8vh, 18px)'
                  }}
                >
                  {/* Text info (Managers / Mobile / Email / Website) */}
                  <div
                    style={{
                      fontSize: 'var(--amt-info-size, clamp(14px, 1.5vw, 21px))',
                      lineHeight: '1.9',
                      color: '#1a1a1a',
                      flex: 0.9,
                      padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 250, 0.95) 100%)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 75, 75, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(255, 75, 75, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: 'clamp(10px, 1.4vh, 14px)',
                        paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                        borderBottom: '1px solid rgba(255, 75, 75, 0.15)'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#ff4b4b',
                        fontSize: 'clamp(14px, 1.5vw, 21px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(255, 75, 75, 0.2)'
                      }}>CEO:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        color: '#2d2d2d',
                        letterSpacing: '0.2px'
                      }}>Eng. Eyad Matar</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: 'clamp(10px, 1.4vh, 14px)',
                        paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                        borderBottom: '1px solid rgba(255, 75, 75, 0.15)'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#ff4b4b',
                        fontSize: 'clamp(14px, 1.5vw, 21px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(255, 75, 75, 0.2)'
                      }}>Mobile:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        color: '#2d2d2d',
                        letterSpacing: '0.2px',
                        fontFamily: 'monospace'
                      }}>050 582 7033</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '0'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#ff4b4b',
                        fontSize: 'clamp(14px, 1.5vw, 21px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(255, 75, 75, 0.2)'
                      }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontWeight: 600,
                          color: '#2d2d2d',
                          letterSpacing: '0.2px'
                        }}
                      >
                        eyad.matar@amt-arabia.net
                      </span>
                    </div>
                </div>

                  {/* AMT Internal Image with Play Video overlay - aligned to the right of the text */}
                <div
                  style={{
                      position: 'relative',
                      maxWidth: 'min(1040px, 55vw)', // make video image significantly larger
                      width: '100%',
                      flex: 1.15
                    }}
                  >
                    <video
                      src="https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ecx4u7.mp4"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '16px',
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        pointerEvents: 'none'
                      }}
                      muted
                      playsInline
                      preload="auto"
                      title="AMT Video Thumbnail"
                    />
                    {/* Play Video Button on top of image */}
                  <button
                    onClick={async () => {
                      if (amtVideoContainerRef.current) {
                        try {
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

                          if (fullscreenPromise) {
                            await fullscreenPromise;
                          }
                        } catch (error) {
                          console.error('Error opening AMT video from button:', error);
                        }
                      }
                    }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      padding: 'var(--amt-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                      fontSize: 'var(--amt-button-font, clamp(16px, 1.8vw, 22px))',
                      fontWeight: '700',
                      color: '#ff4b4b',
                        background: 'rgba(0, 0, 0, 0.65)',
                      border: '2px solid #ff4b4b',
                        borderRadius: '999px',
                      cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                        gap: '10px',
                        backdropFilter: 'blur(6px)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -52%)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%)';
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
                        background: '#ff4b4b',
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
                </div>

                {/* Bottom row: Buttons + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 'clamp(20px, 3vw, 35px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
                  {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 1.5vh, 18px)',
                    animation: 'fadeInUp 0.8s ease-out 0.7s both'
                  }}>
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://amt-arabia.net/en', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#0b0b0b',
                        background: '#ffeded',
                        border: '1px solid #ff4b4b',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(255, 75, 75, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 75, 75, 0.55)';
                        e.currentTarget.style.background = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 75, 75, 0.4)';
                        e.currentTarget.style.background = '#ffeded';
                      }}
                    >
                      Visit Website
                    </button>
                    
                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://amt-arabia.net/en/solution-details', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#0b0b0b',
                        background: '#ffeded',
                        border: '1px solid #ff4b4b',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(255, 75, 75, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 75, 75, 0.55)';
                        e.currentTarget.style.background = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 75, 75, 0.4)';
                        e.currentTarget.style.background = '#ffeded';
                      }}
                    >
                      Our Services
                    </button>
                    
                  {/* Learn More Button */}
                  <button
                    onClick={() => setShowAMTLearnMore(true)}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                      fontSize: 'clamp(13px, 1.3vw, 17px)',
                      fontWeight: 700,
                      color: '#0b0b0b',
                      background: '#ffeded',
                      border: '1px solid #ff4b4b',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(255, 75, 75, 0.4)',
                      transition: 'all 0.25s ease',
                      letterSpacing: '0.6px',
                      textTransform: 'uppercase',
                      minWidth: 'clamp(200px, 20vw, 280px)',
                      width: 'clamp(200px, 20vw, 280px)',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 75, 75, 0.55)';
                      e.currentTarget.style.background = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 75, 75, 0.4)';
                      e.currentTarget.style.background = '#ffeded';
                    }}
                  >
                    Learn More
                  </button>
                  </div>
                  
                  {/* QR Code at bottom, next to buttons */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/amtqr.jpeg"
                      alt="AMT QR Code"
                      onClick={() => setShowAMTQRModal(true)}
                      style={{
                        maxWidth: 'var(--amt-qr-size, clamp(140px, 16vw, 220px))',
                        maxHeight: 'var(--amt-qr-size, clamp(140px, 16vw, 220px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>
              </div>

            </>
          ) : selectedCompany.id === 1 ? (
            <>
              {/* Company Logos Grid - Left Side (same style as AMT) */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isIDCLogo = company.id === 1;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isIDCLogo ? '#ffffff' : '#E8E8E8',
                            border: isIDCLogo
                              ? '2px solid #0b6fbf'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isIDCLogo
                              ? '0 0 25px rgba(11, 111, 191, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isIDCLogo ? 2 : 1,
                            transform: isIDCLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isIDCLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(11, 111, 191, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isIDCLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(11, 111, 191, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
                            <img
                              src={company.logo}
                              alt={isGulfConsult ? 'Gulf Consult' : 'Company logo'}
                              style={{
                                maxWidth: isGulfConsult ? '98%' : '90%',
                                maxHeight: isGulfConsult ? '90%' : '75%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
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

              {/* IDC Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'var(--idc-logo-top, clamp(10px, 1.5vh, 30px))',
                left: 'var(--idc-logo-left, clamp(30px, 3vw, 60px))',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--idc-logo-size, clamp(200px, 18vw, 300px))',
                    maxHeight: 'var(--idc-logo-size, clamp(200px, 18vw, 300px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* IDC Text Content - Right Side (similar layout to AMT) */}
              <div
                className="idc-content"
                style={{
                maxWidth: 'var(--idc-content-max-width, 720px)',
                color: '#0b2239',
                direction: 'ltr',
                textAlign: 'left'
                }}
              >
                <h1 style={{
                  fontSize: 'var(--idc-title-size, clamp(30px, 3.8vw, 46px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(16px, 2.5vh, 28px)',
                  letterSpacing: '2.2px',
                  background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap',
                  textShadow: '0 0 30px rgba(11, 111, 191, 0.4), 0 4px 20px rgba(11, 111, 191, 0.3)',
                  position: 'relative',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 2px 8px rgba(11, 111, 191, 0.5))',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none'
                }}>
                  IDC CONTRACTING COMPANY
                </h1>

                <p
                  style={{
                    fontSize: 'var(--idc-text-size, clamp(14px, 1.5vw, 20px))',
                    lineHeight: '1.85',
                    marginBottom: 'clamp(24px, 3.5vh, 36px)',
                    color: '#0b2239',
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    animation: 'fadeInUp 0.8s ease-out 0.4s both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(11, 111, 191, 0.1)',
                    borderLeft: '4px solid #0b6fbf'
                  }}
                >
                  IDC Contracting Company is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). IDC specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                {/* Info + Video row (aligned like AMT) */}
                <div
                  style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                    marginTop: 'clamp(12px, 1.8vh, 20px)',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                  }}
                >
                  {/* Info block (Managers / Mobile / Email / Website) - All in one line */}
                  <div
                    style={{
                      fontSize: 'var(--idc-info-size, clamp(14px, 1.5vw, 20px))',
                      lineHeight: '1.9',
                      color: '#0b2239',
                      flex: 1,
                      padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 248, 255, 0.95) 100%)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(11, 111, 191, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(11, 111, 191, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(10px, 1.4vh, 14px)'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                      borderBottom: '1px solid rgba(11, 111, 191, 0.15)'
                    }}>
                      <strong style={{ 
                        fontWeight: 800, 
                        color: '#0b6fbf',
                        fontSize: 'clamp(14px, 1.5vw, 20px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(11, 111, 191, 0.2)',
                        minWidth: 'auto'
                      }}>Managers:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px'
                      }}>Bassam Al Masri.</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                      borderBottom: '1px solid rgba(11, 111, 191, 0.15)'
                    }}>
                      <strong style={{ 
                        fontWeight: 800, 
                        color: '#0b6fbf',
                        fontSize: 'clamp(14px, 1.5vw, 20px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(11, 111, 191, 0.2)',
                        minWidth: 'auto'
                      }}>Mobile:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        fontFamily: 'monospace'
                      }}>050 833 8830</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '0'
                    }}>
                      <strong style={{ 
                        fontWeight: 800, 
                        color: '#0b6fbf',
                        fontSize: 'clamp(14px, 1.5vw, 20px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(11, 111, 191, 0.2)',
                        minWidth: 'auto'
                      }}>Email:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>bassam.almasri@idc-arabia.com</span>
                    </div>
                  </div>

                  {/* IDC Internal Image with Play Video overlay (next to info, height matches contact info) */}
                  <div
                    style={{
                      position: 'relative',
                      flex: '0 0 var(--idc-video-width, clamp(220px, 22vw, 340px))',
                      alignSelf: 'flex-start'
                    }}
                  >
                    <img
                      src="/idc-internal.jpg"
                      alt="IDC Contracting"
                      style={{
                        width: '100%',
                        height: 'var(--idc-video-height, clamp(180px, 22vh, 260px))',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '16px',
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                      }}
                    />

                    <button
                      onClick={async () => {
                        if (idcVideoContainerRef.current) {
                          try {
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
                            console.error('Error opening IDC video from button:', error);
                          }
                        }
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding:
                          'var(--idc-button-padding, clamp(12px, 1.4vw, 18px) clamp(28px, 2.6vw, 40px))',
                        fontSize: 'var(--idc-button-font, clamp(14px, 1.4vw, 20px))',
                        fontWeight: 700,
                        color: '#0b6fbf',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '2px solid #0b6fbf',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        backdropFilter: 'blur(6px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -52%)';
                        e.currentTarget.style.boxShadow =
                          '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%)';
                        e.currentTarget.style.boxShadow =
                          '0 8px 25px rgba(0, 0, 0, 0.6)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                      }}
                    >
                      <span>Play Video</span>
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#0b6fbf',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '2px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bottom row: All three buttons + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(24px, 3vh, 36px)',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Buttons Container - All three buttons */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 1.5vh, 18px)',
                    animation: 'fadeInUp 0.8s ease-out 0.7s both',
                    flex: 1
                  }}>
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://idc-arabia.com/ar/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                        fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                        border: '2px solid #0b6fbf',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 111, 191, 0.6), 0 0 0 4px rgba(11, 111, 191, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0d7fd4 0%, #0b6fbf 50%, #0d7fd4 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)';
                  }}
                >
                      Visit Website
                    </button>
                    
                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://idc-arabia.com/ar/%d8%a7%d9%84%d8%b1%d8%a6%d9%8a%d8%b3%d9%8a%d8%a9/#SERVICES', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                        fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                        border: '2px solid #0b6fbf',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 111, 191, 0.6), 0 0 0 4px rgba(11, 111, 191, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0d7fd4 0%, #0b6fbf 50%, #0d7fd4 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)';
                      }}
                    >
                      Our Services
                    </button>
                    
                  {/* Learn More Button */}
                 <button
                   onClick={() => setShowIDCLearnMore(true)}
                   style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                     fontSize: 'clamp(14px, 1.4vw, 18px)',
                       fontWeight: 700,
                     color: '#ffffff',
                     background: 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)',
                     border: '2px solid #0b6fbf',
                       borderRadius: '999px',
                     cursor: 'pointer',
                     boxShadow: '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)',
                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                     letterSpacing: '0.8px',
                     textTransform: 'uppercase',
                         minWidth: 'clamp(200px, 20vw, 280px)',
                         width: 'clamp(200px, 20vw, 280px)',
                         alignSelf: 'flex-start',
                         textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                         position: 'relative',
                         overflow: 'hidden'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                         e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 111, 191, 0.6), 0 0 0 4px rgba(11, 111, 191, 0.2)';
                     e.currentTarget.style.background = 'linear-gradient(135deg, #0d7fd4 0%, #0b6fbf 50%, #0d7fd4 100%)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0) scale(1)';
                         e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5), 0 0 0 0 rgba(11, 111, 191, 0.4)';
                     e.currentTarget.style.background = 'linear-gradient(135deg, #0b6fbf 0%, #0d7fd4 50%, #0b6fbf 100%)';
                   }}
                 >
                   Learn More
                 </button>
                  </div>

                <div
                  style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/idcqr.jpeg"
                      alt="IDC QR Code"
                      onClick={() => setShowIDCQRModal(true)}
                      style={{
                        maxWidth: 'var(--idc-qr-size, clamp(150px, 20vw, 200px))',
                        maxHeight: 'var(--idc-qr-size, clamp(150px, 20vw, 200px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px',
                          cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow =
                          '0 6px 20px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow =
                          '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                      </div>
                    </div>
                  </div>

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
                  <video
                    key={`idc-video-${idcVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/IDC_Shaping_the_Future_of_Engineering_Industrial_Innovation__نصنع_مستقبل_الهندسة_والابتكار_الصناعي_vprpcf.mp4"
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
                      closeVideo(setIdcVideoFullscreen, setIdcVideoPlaying);
                    }}
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
              {/* Antique Background Image */}
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
              
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isAntiqueLogo = company.id === 2;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isAntiqueLogo ? '#ffffff' : '#E8E8E8',
                            border: isAntiqueLogo
                              ? '2px solid #f3c06b'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isAntiqueLogo
                              ? '0 0 25px rgba(243, 192, 107, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isAntiqueLogo ? 2 : 1,
                            transform: isAntiqueLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isAntiqueLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(243, 192, 107, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isAntiqueLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(243, 192, 107, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* Antique Video - Hidden for fullscreen */}
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
                  <video
                    key={`antique-video-${antiqueVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-04_at_11.38.28_AM_mhpll7.mp4"
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
                      closeVideo(setAntiqueVideoFullscreen, setAntiqueVideoPlaying);
                    }}
                  />
                )}
                {antiqueVideoFullscreen && (
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

              {/* Antique Content - Right Side */}
              <div
                className="antique-content"
                style={{
                  position: 'fixed',
                  top: '48%',
                  right: 'clamp(40px, 4vw, 80px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'var(--antique-content-max-width, clamp(600px, 50vw, 900px))',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--antique-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginTop: 'clamp(20px, 3vh, 40px)',
                    marginBottom: 'clamp(12px, 2vh, 24px)',
                    letterSpacing: '1.6px',
                    color: '#f3c06b',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  ANTIQUE CREATIONS
                </h1>

                <p
                  style={{
                    fontSize: 'var(--antique-text-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(20px, 3vh, 32px)',
                    color: '#f9fafb',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(0, 0, 0, 0.45)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(243, 192, 107, 0.1), -4px 0 16px rgba(243, 192, 107, 0.4)',
                    borderLeft: '5px solid #f3c06b',
                    position: 'relative'
                  }}
                >
                  Antique Creations (ACWM) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Antique Creations specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(26px, 4.2vw, 60px)',
                    alignItems: 'center',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: 'clamp(10px, 1.8vh, 18px)'
                  }}
                >
                  {/* Text info (Managers / Mobile / Email / Website) */}
                  <div
                    style={{
                      fontSize: 'var(--antique-info-size, clamp(13px, 1.4vw, 20px))',
                      lineHeight: '1.8',
                      color: '#f9fafb',
                      flex: 0.9,
                      padding: 'clamp(8px, 1.2vh, 12px) clamp(12px, 1.6vw, 16px)',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.45)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Managers:</strong>
                      <span>Mohammed Ghanem.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Mobile:</strong>
                      <span>056 952 6806</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        info@acwm-sa.com
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                     
                    </div>
                  </div>

                  {/* Antique Internal Image with Play Video overlay */}
                  <div
                    style={{
                      position: 'relative',
                      maxWidth: 'var(--antique-internal-image-size, min(1040px, 55vw))',
                      width: '100%',
                      flex: 1.15
                    }}
                  >
                    <img
                      src="/ant-git.gif"
                      alt="Antique internal"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '16px',
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                      }}
                    />
                    {/* Play Video Button on top of image */}
                    <button
                      onClick={async () => {
                        if (antiqueVideoContainerRef.current) {
                          try {
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
                            console.error('Error opening Antique video from button:', error);
                          }
                        }
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 'var(--antique-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                        fontSize: 'var(--antique-button-font, clamp(16px, 1.8vw, 22px))',
                        fontWeight: '700',
                        color: '#f3c06b',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '2px solid #f3c06b',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        backdropFilter: 'blur(6px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -52%)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%)';
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
                          background: '#f3c06b',
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
                </div>

                {/* Bottom row: Buttons + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(20px, 2.5vw, 40px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: viewportSize.width === 1536 && viewportSize.height === 864 ? '2px' : 'clamp(3px, 0.4vh, 5px)',
                      flexShrink: 0
                    }}
                  >
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://acwm-sa.com', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#000000',
                        background: '#f3c06b',
                        border: '1px solid #f3c06b',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(243, 192, 107, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(243, 192, 107, 0.55)';
                        e.currentTarget.style.background = '#f5c97a';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(243, 192, 107, 0.4)';
                        e.currentTarget.style.background = '#f3c06b';
                      }}
                    >
                      Visit Website
                    </button>

                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://acwm-sa.com', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#000000',
                        background: '#f3c06b',
                        border: '1px solid #f3c06b',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(243, 192, 107, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(243, 192, 107, 0.55)';
                        e.currentTarget.style.background = '#f5c97a';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(243, 192, 107, 0.4)';
                        e.currentTarget.style.background = '#f3c06b';
                      }}
                    >
                      Our Services
                    </button>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowAntiqueLearnMore(true)}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#000000',
                        background: '#f3c06b',
                        border: '1px solid #f3c06b',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(243, 192, 107, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(243, 192, 107, 0.55)';
                        e.currentTarget.style.background = '#f5c97a';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(243, 192, 107, 0.4)';
                        e.currentTarget.style.background = '#f3c06b';
                      }}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* QR Code - Same level as buttons */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0,
                      alignSelf: 'flex-start',
                      marginTop: viewportSize.width === 1536 && viewportSize.height === 864 ? '0px' : 'clamp(8px, 1.6vh, 16px)',
                      marginLeft: viewportSize.width === 1536 && viewportSize.height === 864 ? 'auto' : '0px'
                    }}
                  >
                    <img
                      src="/antiqueqr.jpeg"
                      alt="Antique QR Code"
                      onClick={() => setShowAntiqueQRModal(true)}
                      style={{
                        maxWidth: 'var(--antique-qr-size, clamp(140px, 16vw, 220px))',
                        maxHeight: 'var(--antique-qr-size, clamp(140px, 16vw, 220px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 3 ? (
            <>
              {/* Central Medicalcare Background Image */}
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
              
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isCentralCareLogo = company.id === 3;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            // Central Care logo: keep same white panel but make it pop with glow and border
                            background: isCentralCareLogo ? '#ffffff' : '#E8E8E8',
                            border: isCentralCareLogo
                              ? '2px solid #bfa874'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isCentralCareLogo
                              ? '0 0 25px rgba(191, 168, 116, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isCentralCareLogo ? 2 : 1,
                            transform: isCentralCareLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isCentralCareLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(191, 168, 116, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isCentralCareLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(191, 168, 116, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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
                  <video
                    key={`central-video-${centralMedicalcareVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-03_at_4.02.50_PM_wo8g32.mp4"
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
                      closeVideo(setCentralMedicalcareVideoFullscreen, setCentralMedicalcareVideoPlaying);
                    }}
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

              {/* Central Medicalcare Text Content - Right Side */}
              <div
                className="central-medicalcare-content"
                style={{
                  position: 'fixed',
                  top: '48%',
                  right: 'clamp(40px, 4vw, 80px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'var(--central-content-max-width, clamp(600px, 50vw, 900px))',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11,
                  padding: 'clamp(22px, 2.8vw, 40px) clamp(22px, 2.8vw, 40px) clamp(26px, 3.2vw, 44px)',
                  borderRadius: '20px',
                  background: 'rgba(0, 0, 0, 0.55)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(191, 168, 116, 0.1)',
                  border: '1px solid rgba(191, 168, 116, 0.15)'
                }}
              >
                {/* Central Care Logo */}
                <img
                  src="/cc.png"
                  alt="Central Care Logo"
                  style={{
                    width: 'var(--central-logo-size, clamp(120px, 15vw, 200px))',
                    height: 'auto',
                    marginBottom: 'clamp(16px, 2vh, 24px)',
                    display: 'block',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 60ms both'
                  }}
                />
                <h1
                  style={{
                    fontSize: 'var(--central-title-size, clamp(30px, 4vw, 56px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(14px, 2.2vh, 26px)',
                    letterSpacing: '2.2px',
                    background: 'linear-gradient(135deg, #bfa874 0%, #e3d1a3 50%, #bfa874 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textTransform: 'uppercase',
                    textShadow: '0 0 30px rgba(191, 168, 116, 0.4), 0 4px 20px rgba(191, 168, 116, 0.3)',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 8px rgba(191, 168, 116, 0.45))'
                  }}
                >
                  CENTRAL MEDICALCARE
                </h1>

                <p
                  style={{
                    fontSize: 'var(--central-text-size, clamp(14px, 1.6vw, 22px))',
                    lineHeight: '1.85',
                    marginBottom: 'clamp(18px, 2.6vh, 28px)',
                    color: '#111827',
                    fontWeight: 500,
                    letterSpacing: '0.25px',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.10), 0 0 0 1px rgba(191, 168, 116, 0.14)',
                    borderLeft: '4px solid #bfa874'
                  }}
                >
                  CENTRAL MEDICALCARE is a comprehensive medical and aesthetic center located in Al-Khobar, Saudi Arabia. The center provides high-quality medical services including dermatology, laser treatments, and aesthetic care.
                </p>

                {/* Info + Video side-by-side */}
                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(18px, 2.5vw, 34px)',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexWrap: 'nowrap',
                    marginBottom: 'clamp(24px, 3vh, 36px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  {/* Text info (Managers / Mobile / Email / Website) */}
                  <div
                    style={{
                      fontSize: 'var(--central-info-size, clamp(14px, 1.5vw, 20px))',
                      lineHeight: '1.9',
                      color: '#111827',
                      flex: '1 1 auto',
                      minWidth: '280px',
                      padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 240, 0.95) 100%)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(191, 168, 116, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(191, 168, 116, 0.22)',
                      backdropFilter: 'blur(10px)',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(10px, 1.4vh, 14px)',
                        paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                        borderBottom: '1px solid rgba(191, 168, 116, 0.18)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800, color: '#bfa874', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(191, 168, 116, 0.2)' }}>Managers:</strong>
                      <span style={{ fontWeight: 600, letterSpacing: '0.2px' }}>Dr. Atif Idress.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(10px, 1.4vh, 14px)',
                        paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                        borderBottom: '1px solid rgba(191, 168, 116, 0.18)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800, color: '#bfa874', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(191, 168, 116, 0.2)' }}>Mobile:</strong>
                      <span style={{ fontWeight: 600, letterSpacing: '0.2px', fontFamily: 'monospace' }}>050 471 5053</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(10px, 1.4vh, 14px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800, flexShrink: 0, color: '#bfa874', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(191, 168, 116, 0.2)' }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          flex: '1 1 auto',
                          minWidth: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontWeight: 600,
                          letterSpacing: '0.2px'
                        }}
                      >
                        hshash@centralmedicalcare.com
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                    
                    </div>
                  </div>

                  {/* Video image (same row) - Smaller size */}
                  <div
                    style={{
                      position: 'relative',
                      flex: '0 0 auto',
                      maxWidth: 'var(--central-internal-image-size, min(170px, 18vw))',
                      minWidth: '150px',
                      width: 'clamp(150px, 18vw, 190px)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                    }}
                  >
                    <img
                      src="/rk-gif.gif"
                      alt="Central Medicalcare internal"
                      style={{
                        width: '100%',
                        height: 'auto',
                        minHeight: 'clamp(120px, 15vh, 160px)',
                        maxHeight: 'clamp(120px, 15vh, 160px)',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    {/* Play Video Button on top of image */}
                    <button
                      onClick={async () => {
                        if (centralMedicalcareVideoContainerRef.current) {
                          try {
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
                            console.error('Error opening Central Medicalcare video from button:', error);
                          }
                        }
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 'clamp(8px, 1vw, 12px) clamp(20px, 2.5vw, 28px)',
                        fontSize: 'clamp(11px, 1.2vw, 14px)',
                        fontWeight: '700',
                        color: '#bfa874',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '2px solid #bfa874',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        backdropFilter: 'blur(6px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -52%)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                      }}
                    >
                      <span>Play Video</span>
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#bfa874',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '2px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bottom row: Buttons + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(20px, 2.5vw, 40px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: viewportSize.width === 1536 && viewportSize.height === 864 ? '2px' : 'clamp(3px, 0.4vh, 5px)',
                      flexShrink: 0
                    }}
                  >
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://www.centralmedicalcare.com/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: '#bfa874',
                        border: '1px solid #bfa874',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(191, 168, 116, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(191, 168, 116, 0.55)';
                        e.currentTarget.style.background = '#c9b584';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(191, 168, 116, 0.4)';
                        e.currentTarget.style.background = '#bfa874';
                      }}
                    >
                      Visit Website
                    </button>

                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://www.centralmedicalcare.com/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: '#bfa874',
                        border: '1px solid #bfa874',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(191, 168, 116, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(191, 168, 116, 0.55)';
                        e.currentTarget.style.background = '#c9b584';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(191, 168, 116, 0.4)';
                        e.currentTarget.style.background = '#bfa874';
                      }}
                    >
                      Our Services
                    </button>

                    {/* Learn More Button */}
                    <button
                      onClick={() => {
                        setShowCentralMedicalcareLearnMore(true);
                        setCentralMedicalcareActiveTab('tab1');
                      }}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: '#bfa874',
                        border: '1px solid #bfa874',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(191, 168, 116, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(191, 168, 116, 0.55)';
                        e.currentTarget.style.background = '#c9b584';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(191, 168, 116, 0.4)';
                        e.currentTarget.style.background = '#bfa874';
                      }}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* QR Code - Same level as buttons */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0,
                      alignSelf: 'flex-start',
                      marginTop: viewportSize.width === 1536 && viewportSize.height === 864 ? '0px' : 'clamp(8px, 1.6vh, 16px)',
                      marginLeft: viewportSize.width === 1536 && viewportSize.height === 864 ? 'auto' : '0px'
                    }}
                  >
                    <img
                      src="/centralcareqr.jpeg"
                      alt="Central Medicalcare QR Code"
                      onClick={() => setShowCentralMedicalcareQRModal(true)}
                      style={{
                        maxWidth: 'var(--central-qr-size, clamp(140px, 16vw, 220px))',
                        maxHeight: 'var(--central-qr-size, clamp(140px, 16vw, 220px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>
              </div>

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
                  <video
                    key={`central-video-${centralMedicalcareVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-03_at_4.02.50_PM_wo8g32.mp4"
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
                      closeVideo(setCentralMedicalcareVideoFullscreen, setCentralMedicalcareVideoPlaying);
                    }}
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
              {/* Gulf Consult Background Image */}
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
              
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isGulfConsultArchLogo = company.id === 9;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isGulfConsultArchLogo ? '#ffffff' : '#E8E8E8',
                            border: isGulfConsultArchLogo
                              ? '2px solid #16348a'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isGulfConsultArchLogo
                              ? '0 0 25px rgba(22, 52, 138, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isGulfConsultArchLogo ? 2 : 1,
                            transform: isGulfConsultArchLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isGulfConsultArchLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(22, 52, 138, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isGulfConsultArchLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(22, 52, 138, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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
                  <video
                    key={`gulf-arch-video-${gulfConsultArchVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-03_at_4.03.03_PM_h59upq.mp4"
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
                      closeVideo(setGulfConsultArchVideoFullscreen, setGulfConsultArchVideoPlaying);
                    }}
                  />
                )}
                {gulfConsultArchVideoFullscreen && (
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

              {/* Gulf Consult Content - Right Side */}
              <div
                className="gulf-content"
                style={{
                  position: 'fixed',
                  top: '48%',
                  right: 'clamp(40px, 4vw, 80px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'var(--gulf-content-max-width, clamp(600px, 50vw, 900px))',
                  color: '#16348a',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--gulf-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(6px, 1vh, 12px)',
                    letterSpacing: '1.6px',
                    color: '#16348a',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  GULF CONSULT
                </h1>
                <div
                  style={{
                    fontSize: 'var(--gulf-subtitle-size, clamp(13px, 1.3vw, 20px))',
                    fontWeight: '800',
                    marginBottom: 'clamp(12px, 2vh, 24px)',
                    color: '#16348a',
                    letterSpacing: '0.4px',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both'
                  }}
                >
                  (Architects and Engineers)
                </div>

                <p
                  style={{
                    fontSize: 'var(--gulf-text-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(20px, 3vh, 32px)',
                    color: '#16348a',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(22, 52, 138, 0.1), -4px 0 16px rgba(22, 52, 138, 0.4)',
                    borderLeft: '5px solid #16348a',
                    position: 'relative'
                  }}
                >
                  Gulf Consult (Architects and Engineers) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Gulf Consult specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(26px, 4.2vw, 60px)',
                    alignItems: 'center',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: 'clamp(10px, 1.8vh, 18px)'
                  }}
                >
                  {/* Text info (Managers / Mobile / Email / Website) */}
                  <div
                    style={{
                      fontSize: 'var(--gulf-info-size, clamp(13px, 1.4vw, 20px))',
                      lineHeight: '1.8',
                      color: '#16348a',
                      flex: 0.9,
                      padding: 'clamp(8px, 1.2vh, 12px) clamp(12px, 1.6vw, 16px)',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Managers:</strong>
                      <span>Eng. Abdullah Maqboul.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Mobile:</strong>
                      <span>055 518 7280</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        abdullah@gc-eng.com
                      </span>
                    </div>
                  </div>

                  {/* Gulf Consult Internal Image with Play Video overlay */}
                  <div
                    style={{
                      position: 'relative',
                      maxWidth: 'min(1040px, 55vw)',
                      width: '100%',
                      flex: 1.15
                    }}
                  >
                    <img
                      src="/GC-bg.jpeg"
                      alt="Gulf Consult internal"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '16px',
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                      }}
                    />
                    {/* Play Video Button on top of image */}
                    <button
                      onClick={async () => {
                        if (gulfConsultArchVideoContainerRef.current) {
                          try {
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
                            console.error('Error opening Gulf Consult video from button:', error);
                          }
                        }
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 'var(--gulf-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                        fontSize: 'var(--gulf-button-font, clamp(16px, 1.8vw, 22px))',
                        fontWeight: '700',
                        color: '#16348a',
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: '2px solid #16348a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        backdropFilter: 'blur(6px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -52%)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                      }}
                    >
                      <span>Play Video</span>
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#16348a',
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
                </div>

                {/* Bottom row: Buttons + QR Code */}
                <div
                  className="gulf-consult-learn-more-container"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 'clamp(20px, 3vw, 35px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
                  {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(8px, 1vh, 12px)',
                    animation: 'fadeInUp 0.8s ease-out 0.7s both'
                  }}>
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://www.gc-eng.com', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: '#16348a',
                        border: '1px solid #16348a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(22, 52, 138, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(22, 52, 138, 0.55)';
                        e.currentTarget.style.background = '#1e42a5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(22, 52, 138, 0.4)';
                        e.currentTarget.style.background = '#16348a';
                      }}
                    >
                      Visit Website
                    </button>
                    
                    {/* Our Services Button - Opens services page */}
                    <button
                      onClick={() => window.open('https://gc-eng.com/civil.aspx', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: '#16348a',
                        border: '1px solid #16348a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(22, 52, 138, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(22, 52, 138, 0.55)';
                        e.currentTarget.style.background = '#1e42a5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(22, 52, 138, 0.4)';
                        e.currentTarget.style.background = '#16348a';
                      }}
                    >
                      Our Services
                    </button>
                    
                  {/* Learn More Button */}
                  <button
                    onClick={() => setShowGulfConsultLearnMore(true)}
                    style={{
                      padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                      fontSize: 'clamp(13px, 1.3vw, 17px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: '#16348a',
                      border: '1px solid #16348a',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(22, 52, 138, 0.4)',
                      transition: 'all 0.25s ease',
                      letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(22, 52, 138, 0.55)';
                      e.currentTarget.style.background = '#1e42a5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(22, 52, 138, 0.4)';
                      e.currentTarget.style.background = '#16348a';
                    }}
                  >
                    Learn More
                  </button>
                  </div>
                  
                  {/* QR Code at bottom, next to buttons */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/gcqr.jpeg"
                      alt="Gulf Consult QR Code"
                      onClick={() => setShowGulfConsultArchQRModal(true)}
                      style={{
                        maxWidth: 'var(--gulf-qr-size, clamp(140px, 16vw, 220px))',
                        maxHeight: 'var(--gulf-qr-size, clamp(140px, 16vw, 220px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 7 ? (
            <>
              {/* Al Dorrah Background Image */}
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
              
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isDorrahLogo = company.id === 7;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isDorrahLogo ? '#ffffff' : '#E8E8E8',
                            border: isDorrahLogo
                              ? '2px solid #33d18f'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isDorrahLogo
                              ? '0 0 25px rgba(51, 209, 143, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isDorrahLogo ? 2 : 1,
                            transform: isDorrahLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isDorrahLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(51, 209, 143, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isDorrahLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(51, 209, 143, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* Al Dorrah Video - Hidden for fullscreen */}
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
                  <video
                    key={`dorrah-video-${dorrahVideoFullscreen}`}
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
                      closeVideo(setDorrahVideoFullscreen, setDorrahVideoPlaying);
                    }}
                  />
                )}
                {dorrahVideoFullscreen && (
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

              {/* Al Dorrah Content - Right Side */}
              <div
                className="dorrah-content"
                style={{
                  position: 'fixed',
                  top: '48%',
                  right: 'clamp(40px, 4vw, 80px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'var(--dorrah-content-max-width, clamp(600px, 50vw, 900px))',
                  maxHeight: 'calc(100vh - clamp(60px, 6vh, 100px))',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11,
                  overflowY: 'visible',
                  overflowX: 'visible'
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--dorrah-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(6px, 1vh, 12px)',
                    letterSpacing: '1.6px',
                    color: '#33d18f',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  GULF DORRAH REAL
                </h1>
                <h1
                  style={{
                    fontSize: 'var(--dorrah-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 24px)',
                    letterSpacing: '1.6px',
                    color: '#29a4ff',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both'
                  }}
                >
                  ESTATE DEVELOPMENT
                </h1>

                <p
                  style={{
                    fontSize: 'var(--dorrah-text-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(20px, 3vh, 32px)',
                    color: '#e5f8ff',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(0, 0, 0, 0.45)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(51, 209, 143, 0.1), -4px 0 16px rgba(51, 209, 143, 0.4)',
                    borderLeft: '5px solid #33d18f',
                    position: 'relative'
                  }}
                >
                  Gulf Dorrah Real Estate Development is a Saudi-based company specializing in luxury residential properties with modern designs and high-quality construction. The company focuses on creating community apartments that offer comfort, privacy, and contemporary design, ensuring long-term value for families and residents. Each project is carefully developed with attention to detail, quality materials, and practical layouts that support a modern lifestyle.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(26px, 4.2vw, 60px)',
                    alignItems: 'center',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: 'clamp(10px, 1.8vh, 18px)'
                  }}
                >
                  {/* Text info (Managers / Mobile / Email / Website) */}
                  <div
                    style={{
                      fontSize: 'var(--dorrah-info-size, clamp(13px, 1.4vw, 20px))',
                      lineHeight: '1.8',
                      color: '#ffffff',
                      flex: 0.9,
                      padding: 'clamp(8px, 1.2vh, 12px) clamp(12px, 1.6vw, 16px)',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.45)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Managers:</strong>
                      <span>Fadel Muhialdeen.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Mobile:</strong>
                      <span>050 084 0440</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        adel@gulfdorrah.com
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      
                    </div>
                  </div>

                  {/* Dorrah Internal Image with Play Video overlay */}
                  <div
                    style={{
                      position: 'relative',
                      maxWidth: 'min(1040px, 55vw)',
                      width: '100%',
                      flex: 1.15
                    }}
                  >
                    <img
                      src="/dorrah-gif.gif"
                      alt="Dorrah internal"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '16px',
                        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                      }}
                    />
                    {/* Play Video Button on top of image */}
                    <button
                      onClick={async () => {
                        if (dorrahVideoContainerRef.current) {
                          try {
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

                            if (fullscreenPromise) {
                              await fullscreenPromise;
                            }
                          } catch (error) {
                            console.error('Error opening Dorrah video from button:', error);
                          }
                        }
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 'var(--dorrah-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                        fontSize: 'var(--dorrah-button-font, clamp(16px, 1.8vw, 22px))',
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
                        backdropFilter: 'blur(6px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -52%)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(-50%, -50%)';
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
                </div>

                {/* Buttons and QR Code Container - Horizontal layout */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(20px, 2.5vw, 40px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: viewportSize.width === 1536 && viewportSize.height === 864 ? '2px' : 'clamp(3px, 0.4vh, 5px)',
                      flexShrink: 0
                    }}
                  >
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://dorrah.topacademy.website/#', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                        border: '1px solid #33d18f',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(51, 209, 143, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(51, 209, 143, 0.55)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(51, 209, 143, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
                      }}
                    >
                      Visit Website
                    </button>

                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://dorrah.topacademy.website/#', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                        border: '1px solid #33d18f',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(51, 209, 143, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(51, 209, 143, 0.55)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(51, 209, 143, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
                      }}
                    >
                      Our Services
                    </button>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowGulfDorrahLearnMore(true)}
                      style={{
                        padding: 'clamp(10px, 1.2vw, 14px) clamp(26px, 2.6vw, 34px)',
                        fontSize: 'clamp(13px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                        border: '1px solid #33d18f',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(51, 209, 143, 0.4)',
                        transition: 'all 0.25s ease',
                        letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(51, 209, 143, 0.55)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(51, 209, 143, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
                      }}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* QR Code - Same level as buttons */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0,
                      alignSelf: 'flex-start',
                      marginTop: viewportSize.width === 1536 && viewportSize.height === 864 ? '0px' : 'clamp(8px, 1.6vh, 16px)',
                      marginLeft: viewportSize.width === 1536 && viewportSize.height === 864 ? 'auto' : '0px'
                    }}
                  >
                    <img
                      src="/dorrahqr1.jpeg"
                      alt="Gulf Dorrah QR Code"
                      onClick={() => setShowGulfDorrahQRModal(true)}
                      style={{
                        maxWidth: 'var(--dorrah-qr-size, clamp(140px, 16vw, 220px))',
                        maxHeight: 'var(--dorrah-qr-size, clamp(140px, 16vw, 220px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 4 ? (
            <>
              {/* Company Logos Grid - Left Side (same 12-company shape, highlighting GTA) */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(100px, 10vw, 220px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(80px, 8.5vw, 135px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(80px, 8.5vw, 135px)))`,
                    gap: 'var(--grid-gap, clamp(14px, 1.4vw, 24px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isGTALogo = company.id === 4;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(80px, 8.5vw, 135px))',
                            minHeight: 'var(--grid-item-size, clamp(80px, 8.5vw, 135px))',
                            background: isGTALogo ? '#ffffff' : '#E8E8E8',
                            border: isGTALogo
                              ? '2px solid #dc2626'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isGTALogo
                              ? '0 0 25px rgba(220, 38, 38, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isGTALogo ? 2 : 1,
                            transform: isGTALogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isGTALogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(220, 38, 38, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isGTALogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(220, 38, 38, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* GTA Content - Right Side - Optimized for 1536x864 */}
              <div
                className="gta-content"
                style={{
                  position: 'fixed',
                  top: 'clamp(80px, 8vh, 120px)',
                  right: 'clamp(40px, 4vw, 80px)',
                  maxWidth: 'var(--amt-content-max-width, clamp(600px, 50vw, 900px))',
                  maxHeight: 'calc(100vh - clamp(60px, 6vh, 100px))',
                  height: 'auto',
                  width: 'auto',
                  color: '#000000',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11,
                  overflowY: 'visible',
                  overflowX: 'visible',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
              >
                {/* White Content Box with Red Borders */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: 'clamp(12px, 1.5vw, 20px) clamp(14px, 1.8vw, 24px) clamp(32px, 4vh, 50px)',
                    borderLeft: '4px solid #dc2626',
                    borderBottom: '4px solid #dc2626',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                    animation: 'fadeIn 0.8s ease-in-out 0.2s both',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box'
                  }}
                >
                  {/* GTA Logo inside the box */}
                  <div style={{
                    marginBottom: 'clamp(6px, 0.8vh, 12px)',
                    animation: 'fadeIn 0.8s ease-in-out 0.1s both',
                    flexShrink: 0
                  }}>
                    <img
                      src={selectedCompany.logo}
                      alt={selectedCompany.name}
                      style={{
                        maxWidth: 'clamp(90px, 9vw, 140px)',
                        maxHeight: 'clamp(45px, 4.5vh, 70px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 15px rgba(220, 38, 38, 0.4))'
                      }}
                    />
                  </div>

                  <h1
                    style={{
                      fontSize: 'var(--amt-title-size, clamp(32px, 4.2vw, 58px))',
                      fontWeight: '900',
                      marginBottom: 'clamp(6px, 0.8vh, 12px)',
                      letterSpacing: '1.8px',
                      background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textTransform: 'uppercase',
                      textShadow: '0 0 30px rgba(220, 38, 38, 0.4), 0 4px 20px rgba(220, 38, 38, 0.3)',
                      animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                      position: 'relative',
                      display: 'inline-block',
                      filter: 'drop-shadow(0 2px 8px rgba(220, 38, 38, 0.5))',
                      flexShrink: 0,
                      lineHeight: '1.2'
                    }}
                  >
                    GERMAN TECHNOLOGY AUTO
                  </h1>

                  <p
                    style={{
                      fontSize: 'var(--amt-text-size, clamp(16px, 1.9vw, 26px))',
                      lineHeight: '1.5',
                      marginBottom: 'clamp(8px, 1vh, 12px)',
                      color: '#1a1a1a',
                      fontWeight: '500',
                      letterSpacing: '0.2px',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                      padding: 'clamp(6px, 0.8vh, 10px) clamp(12px, 1.5vw, 18px)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(220, 38, 38, 0.1)',
                      borderLeft: '4px solid #dc2626',
                      flexShrink: 0
                    }}
                  >
                    German Technology Auto Services Company is one of the leading maintenance companies in the Eastern Region, which includes German car services under one roof. We promise to give you the best service at competitive prices. We warranty all our work. Our company strives on the best customer service we can offer.
                  </p>

                  <div
                    style={{
                      fontSize: 'var(--amt-info-size, clamp(14px, 1.5vw, 21px))',
                      lineHeight: '1.5',
                      color: '#1a1a1a',
                      flex: '0 0 auto',
                      padding: 'clamp(8px, 1vh, 12px) clamp(14px, 1.6vw, 20px)',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 250, 0.95) 100%)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(220, 38, 38, 0.2)',
                      backdropFilter: 'blur(10px)',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                      marginBottom: 'clamp(4px, 0.6vh, 8px)',
                      flexShrink: 0
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        paddingBottom: 'clamp(4px, 0.6vh, 8px)',
                        borderBottom: '1px solid rgba(220, 38, 38, 0.15)'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#dc2626',
                        fontSize: 'clamp(14px, 1.5vw, 21px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)'
                      }}>Managers:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        color: '#2d2d2d',
                        letterSpacing: '0.2px'
                      }}>Mr. Tamam Hussain.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: 'clamp(4px, 0.6vh, 8px)',
                        paddingBottom: 'clamp(4px, 0.6vh, 8px)',
                        borderBottom: '1px solid rgba(220, 38, 38, 0.15)'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#dc2626',
                        fontSize: 'clamp(14px, 1.5vw, 21px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)'
                      }}>Mobile:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        color: '#2d2d2d',
                        letterSpacing: '0.2px',
                        fontFamily: 'monospace'
                      }}>053 240 4666</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '0'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#dc2626',
                        fontSize: 'clamp(14px, 1.5vw, 21px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(220, 38, 38, 0.2)'
                      }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontWeight: 600,
                          color: '#2d2d2d',
                          letterSpacing: '0.2px'
                        }}
                      >
                        tammam.hussein@yahoo.com
                      </span>
                    </div>
                  </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 'clamp(12px, 2vw, 24px)',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
                      flexShrink: 0,
                      marginTop: 'clamp(6px, 0.8vh, 12px)',
                      paddingBottom: 'clamp(8px, 1vh, 12px)',
                      marginBottom: 'clamp(12px, 1.5vh, 20px)'
                      }}
                    >
                    {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(5px, 0.7vh, 8px)',
                      animation: 'fadeInUp 0.8s ease-out 0.7s both',
                      flexShrink: 0
                    }}>
                      {/* Visit Website Button */}
                      <button
                        onClick={() => window.open('https://gtaksa.com/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(8px, 1vw, 12px) clamp(16px, 1.8vw, 24px)',
                        fontSize: 'clamp(11px, 1.15vw, 15px)',
                        fontWeight: '700',
                        color: '#ffffff',
                        background: '#1f2937',
                        border: '2px solid #dc2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.4px',
                        textTransform: 'uppercase',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        minWidth: 'clamp(180px, 18vw, 260px)',
                        width: 'clamp(180px, 18vw, 260px)',
                        alignSelf: 'flex-start'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                          e.currentTarget.style.background = '#374151';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                          e.currentTarget.style.background = '#1f2937';
                        }}
                      >
                        Visit Website
                      </button>
                      
                      {/* Our Services Button */}
                      <button
                        onClick={() => window.open('https://gtaksa.com/our-services/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(8px, 1vw, 12px) clamp(16px, 1.8vw, 24px)',
                        fontSize: 'clamp(11px, 1.15vw, 15px)',
                        fontWeight: '700',
                        color: '#ffffff',
                        background: '#1f2937',
                        border: '2px solid #dc2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.4px',
                        textTransform: 'uppercase',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        minWidth: 'clamp(180px, 18vw, 260px)',
                        width: 'clamp(180px, 18vw, 260px)',
                        alignSelf: 'flex-start'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                          e.currentTarget.style.background = '#374151';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                          e.currentTarget.style.background = '#1f2937';
                    }}
                  >
                        Our Services
                      </button>
                      
                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowGTALearnMore(true)}
                      style={{
                        padding: 'clamp(8px, 1vw, 12px) clamp(16px, 1.8vw, 24px)',
                        fontSize: 'clamp(11px, 1.15vw, 15px)',
                        fontWeight: '700',
                        color: '#ffffff',
                        background: '#1f2937',
                        border: '2px solid #dc2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.4px',
                        textTransform: 'uppercase',
                        display: 'block',
                        whiteSpace: 'nowrap',
                        minWidth: 'clamp(180px, 18vw, 260px)',
                        width: 'clamp(180px, 18vw, 260px)',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                        e.currentTarget.style.background = '#374151';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
                        e.currentTarget.style.background = '#1f2937';
                      }}
                    >
                      Learn More
                    </button>
                    </div>

                    {/* QR Code */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        background: 'transparent',
                        padding: '0',
                        borderRadius: '0',
                        boxShadow: 'none',
                        flexShrink: 0
                      }}
                    >
                      <img
                        src="/gtaqr.jpeg"
                        alt="GTA QR Code"
                        onClick={() => setShowGTAQRModal(true)}
                        style={{
                          maxWidth: 'clamp(80px, 9vw, 120px)',
                          maxHeight: 'clamp(80px, 9vw, 120px)',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 10 ? (
            <>
              {/* Company Logos Grid - Left Side (same style as IDC / AMT / GSG) */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isTLCOLogo = company.id === 10;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isTLCOLogo ? '#ffffff' : '#E8E8E8',
                            border: isTLCOLogo
                              ? '2px solid #22c55e'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isTLCOLogo
                              ? '0 0 25px rgba(34, 197, 94, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isTLCOLogo ? 2 : 1,
                            transform: isTLCOLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isTLCOLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(34, 197, 94, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isTLCOLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(34, 197, 94, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                }}
              >
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

              {/* TLCO Text Content + Image/QR - Right Side */}
              <div
                className="tlco-content-container"
                style={{
                  position: 'fixed',
                  top: '48%',
                  right: 'clamp(40px, 6vw, 120px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'var(--tlco-content-max-width, clamp(520px, 46vw, 760px))',
                  zIndex: 12,
                  color: '#0b3b25',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                {/* Big TLCO Logo above the title */}
                <div
                  style={{
                    marginBottom: 'clamp(10px, 1.5vh, 18px)',
                    animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <img
                    src={selectedCompany.modalLogo || selectedCompany.logo}
                    alt={selectedCompany.name}
                    style={{
                      maxWidth: 'var(--tlco-logo-size, clamp(180px, 22vw, 260px))',
                      maxHeight: 'var(--tlco-logo-size, clamp(180px, 22vw, 260px))',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </div>

                <h1
                  style={{
                    fontSize: 'var(--tlco-title-size, clamp(30px, 4vw, 50px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(16px, 2.5vh, 28px)',
                    letterSpacing: '2.2px',
                    background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    textShadow: '0 0 30px rgba(0, 140, 74, 0.4), 0 4px 20px rgba(0, 140, 74, 0.3)',
                    position: 'relative',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 140, 74, 0.5))'
                  }}
                >
                  ENVIRONMENTAL TESTING AND LABORATORIES
                </h1>

                <p
                  style={{
                    fontSize: 'var(--tlco-text-size, clamp(14px, 1.6vw, 22px))',
                    lineHeight: '1.85',
                    marginBottom: 'clamp(24px, 3.5vh, 36px)',
                    color: '#0b3b25',
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 140, 74, 0.1)',
                    borderLeft: '4px solid #008c4a'
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
                    gap: 'clamp(20px, 4vw, 36px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  {/* Contact Info (Left Column) */}
                  <div
                    style={{
                      fontSize: 'var(--tlco-info-size, clamp(14px, 1.5vw, 21px))',
                      lineHeight: '1.9',
                      color: '#0b3b25',
                      flex: '1',
                      padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 255, 248, 0.95) 100%)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 140, 74, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(0, 140, 74, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: 'clamp(10px, 1.4vh, 14px)',
                      paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                      borderBottom: '1px solid rgba(0, 140, 74, 0.15)'
                    }}>
                      <strong
                        style={{
                          fontWeight: 800,
                          color: '#008c4a',
                          fontSize: 'clamp(14px, 1.5vw, 21px)',
                          letterSpacing: '0.5px',
                          textShadow: '0 1px 2px rgba(0, 140, 74, 0.2)',
                          minWidth: 'auto'
                        }}
                      >
                        Managers:
                      </strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px'
                      }}>Mr.Elyas Othman.</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: 'clamp(10px, 1.4vh, 14px)',
                      paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                      borderBottom: '1px solid rgba(0, 140, 74, 0.15)'
                    }}>
                      <strong
                        style={{
                          fontWeight: 800,
                          color: '#008c4a',
                          fontSize: 'clamp(14px, 1.5vw, 21px)',
                          letterSpacing: '0.5px',
                          textShadow: '0 1px 2px rgba(0, 140, 74, 0.2)',
                          minWidth: 'auto'
                        }}
                      >
                        Mobile:
                      </strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        fontFamily: 'monospace'
                      }}>053 927 5739</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '0'
                    }}>
                      <strong
                        style={{
                          fontWeight: 800,
                          color: '#008c4a',
                          fontSize: 'clamp(14px, 1.5vw, 21px)',
                          letterSpacing: '0.5px',
                          textShadow: '0 1px 2px rgba(0, 140, 74, 0.2)',
                          minWidth: 'auto'
                        }}
                      >
                        Email:
                      </strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>G.M@etlco.com.sa</span>
                    </div>
                  </div>

                  {/* TLCO Internal Image + QR (Right Column) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'clamp(10px, 1.8vh, 16px)',
                      flexShrink: 0
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 'clamp(190px, 21vw, 260px)'
                      }}
                    >
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

                      {/* Play Button on TLCO Image - styled like PLAY VIDEO pill button */}
                      {!tlcoVideoFullscreen && (
                        <button
                          onClick={async (e) => {
                            e.stopPropagation();
                            if (tlcoVideoContainerRef.current) {
                              try {
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

                                if (fullscreenPromise) {
                                  await fullscreenPromise;
                                }
                              } catch (error) {
                                console.error('Error opening fullscreen:', error);
                              }
                            }
                          }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding:
                              'clamp(10px, 1.2vw, 16px) clamp(26px, 2.4vw, 40px)',
                            fontSize: 'clamp(14px, 1.4vw, 20px)',
                            fontWeight: 700,
                            color: '#ffffff',
                            background: 'rgba(0, 140, 74, 0.95)',
                            border: 'none',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            boxShadow: '0 8px 24px rgba(0, 140, 74, 0.6)',
                            transition: 'all 0.3s ease',
                            letterSpacing: '0.6px',
                            textTransform: 'uppercase',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'clamp(8px, 0.9vw, 12px)',
                            backdropFilter: 'blur(4px)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translate(-50%, -52%)';
                            e.currentTarget.style.boxShadow =
                              '0 10px 30px rgba(0, 140, 74, 0.75)';
                            e.currentTarget.style.background = 'rgba(0, 160, 90, 0.98)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translate(-50%, -50%)';
                            e.currentTarget.style.boxShadow =
                              '0 8px 24px rgba(0, 140, 74, 0.6)';
                            e.currentTarget.style.background = 'rgba(0, 140, 74, 0.95)';
                          }}
                        >
                          <span>PLAY VIDEO</span>
                          <span
                            style={{
                              width: 'clamp(30px, 2.8vw, 40px)',
                              height: 'clamp(30px, 2.8vw, 40px)',
                              borderRadius: '50%',
                              background: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <svg
                              width="clamp(16px, 1.5vw, 22px)"
                              height="clamp(16px, 1.5vw, 22px)"
                              viewBox="0 0 24 24"
                              fill="#008c4a"
                              style={{ marginLeft: '3px' }}
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>

                  </div>
                </div>

                {/* Bottom row: All three buttons + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(24px, 3vh, 36px)',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Buttons Container - All three buttons */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 1.5vh, 18px)',
                    flex: 1,
                    animation: 'fadeInUp 0.8s ease-out 0.7s both'
                  }}>
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://etlco.com.sa/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                        fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                        border: '2px solid #008c4a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 140, 74, 0.6), 0 0 0 4px rgba(0, 140, 74, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #00a055 0%, #008c4a 50%, #00a055 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)';
                      }}
                    >
                      Visit Website
                    </button>
                    
                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://etlco.com.sa/services', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                        fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                        border: '2px solid #008c4a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 140, 74, 0.6), 0 0 0 4px rgba(0, 140, 74, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #00a055 0%, #008c4a 50%, #00a055 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)';
                      }}
                    >
                      Our Services
                    </button>
                    
                    {/* Learn More Button */}
                  <button
                    onClick={() => setShowPartners(true)}
                    style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                      fontSize: 'clamp(14px, 1.4vw, 18px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)',
                      border: '2px solid #008c4a',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 140, 74, 0.6), 0 0 0 4px rgba(0, 140, 74, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #00a055 0%, #008c4a 50%, #00a055 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.5), 0 0 0 0 rgba(0, 140, 74, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #008c4a 0%, #00a055 50%, #008c4a 100%)';
                    }}
                  >
                    Learn More
                  </button>
                  </div>

                  {/* QR Code - Right Side */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/tlcoqr.jpeg"
                      alt="ETLCO QR Code"
                      onClick={() => setShowTLCOQRModal(true)}
                      style={{
                        maxWidth: 'var(--tlco-qr-size, clamp(120px, 16vw, 190px))',
                        maxHeight: 'var(--tlco-qr-size, clamp(120px, 16vw, 190px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 10px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
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
                  <video
                    key={`tlco-video-${tlcoVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/tlco_onczo4.mp4"
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
                      closeVideo(setTlcoVideoFullscreen, setTlcoVideoPlaying);
                    }}
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
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isGSGLogo = company.id === 11;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(50px, 5vw, 75px))',
                            minHeight: 'var(--grid-item-size, clamp(50px, 5vw, 75px))',
                            background: isGSGLogo ? '#ffffff' : '#E8E8E8',
                            border: isGSGLogo
                              ? '2px solid #00bcd4'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isGSGLogo
                              ? '0 0 25px rgba(0, 188, 212, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isGSGLogo ? 2 : 1,
                            transform: isGSGLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isGSGLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(0, 188, 212, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isGSGLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(0, 188, 212, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* GSG Content Container - Right Side - Optimized for 1536x864 */}
              <div
                className="gsg-content-container"
                style={{
                  position: 'fixed',
                  top: '50%',
                  right: 'clamp(40px, 4vw, 80px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'clamp(450px, 38vw, 580px)',
                  maxHeight: '90vh',
                  color: '#07373c',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11,
                  overflowY: 'auto',
                  overflowX: 'visible',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  gap: 'clamp(16px, 2vh, 24px)',
                  padding: 'clamp(20px, 2vw, 30px)'
                }}
              >
                {/* GSG Title */}
                <div>
                  <h1
                    style={{
                      fontSize: 'clamp(32px, 3.2vw, 42px)',
                      fontWeight: '900',
                      marginBottom: 'clamp(4px, 0.8vh, 8px)',
                      letterSpacing: '1.2px',
                      color: '#07373c',
                      textTransform: 'uppercase',
                      animation: 'fadeInUp 0.8s ease-out 0.2s both',
                      lineHeight: '1.1'
                    }}
                  >
                    GROUND SYSTEMS
                  </h1>
                  <h1
                    style={{
                      fontSize: 'clamp(32px, 3.2vw, 42px)',
                      fontWeight: '900',
                      marginBottom: 'clamp(10px, 1.5vh, 16px)',
                      letterSpacing: '1.2px',
                      color: '#07373c',
                      textTransform: 'uppercase',
                      animation: 'fadeInUp 0.8s ease-out 0.3s both',
                      lineHeight: '1.1'
                    }}
                  >
                    GEOPHYSICAL (GSG)
                  </h1>
                </div>

                {/* GSG Description */}
                <div>
                  <p
                    style={{
                      fontSize: 'clamp(15px, 1.5vw, 19px)',
                      lineHeight: '1.7',
                      marginBottom: 'clamp(14px, 2vh, 20px)',
                      color: '#07373c',
                      animation: 'fadeInUp 0.8s ease-out 0.4s both',
                      padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(7, 55, 60, 0.1), -4px 0 16px rgba(7, 55, 60, 0.4)',
                      borderLeft: '5px solid #07373c',
                      position: 'relative'
                    }}
                  >
                    Is a leading provider of geophysical, geological, environmental, and engineering solutions across Saudi Arabia and the GCC region. With a dedicated team of scientists, engineers, and experts, we specialize in delivering advanced, reliable, and innovative services that support site assessments, resource exploration, and real-time monitoring across various industries. Integrated Solutions for Your Projects, Backed by Decades of Expertise
                  </p>
                </div>

                {/* GSG Contact Information and Images Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 'clamp(24px, 3vw, 36px)',
                    animation: 'fadeInUp 0.8s ease-out 0.6s both',
                    marginBottom: 'clamp(8px, 1vh, 12px)',
                    flexWrap: 'nowrap',
                    width: '100%'
                  }}
                >
                  {/* Contact Information */}
                  <div
                    style={{
                      fontSize: 'clamp(15px, 1.5vw, 19px)',
                      lineHeight: '1.9',
                      color: '#07373c',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(8px, 1.2vh, 14px)',
                      flex: '1',
                      minWidth: 'clamp(280px, 25vw, 360px)'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '4px'
                    }}>
                      <strong style={{ fontWeight: '800', flexShrink: 0 }}>Managers:</strong>
                      <span>Eng. Rabah Yehya.</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '4px'
                    }}>
                      <strong style={{ fontWeight: '800', flexShrink: 0 }}>Mobile:</strong>
                      <span>055 584 6667</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: 'clamp(4px, 0.5vh, 6px)'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '4px'
                      }}>
                        <strong style={{ fontWeight: '800', flexShrink: 0 }}>Email:</strong>
                        <span>faisal@gulfconsult.com</span>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '4px',
                        marginLeft: 'clamp(85px, 8.5vw, 110px)'
                      }}>
                        <span>rabah@gulfconsult.com</span>
                      </div>
                    </div>
                    {/* Buttons Container - Visit Website, Our Services, and Learn More */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: 'clamp(12px, 1.5vh, 18px)',
                      marginTop: 'clamp(16px, 2vh, 24px)',
                      animation: 'fadeInUp 0.8s ease-out 0.7s both'
                    }}>
                      {/* Visit Website Button */}
                      <button
                        onClick={() => window.open('https://gs-geo.com/', '_blank', 'noopener,noreferrer')}
                        style={{
                          padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                          fontSize: 'clamp(11px, 1.2vw, 15px)',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: '#00bcd4',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                          transition: 'all 0.3s ease',
                          letterSpacing: '0.3px',
                          textTransform: 'uppercase',
                          minWidth: 'clamp(140px, 15vw, 200px)',
                          width: 'clamp(140px, 15vw, 200px)',
                          alignSelf: 'flex-start'
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
                        Visit Website
                      </button>
                      
                      {/* Our Services Button */}
                      <button
                        onClick={() => window.open('https://gs-geo.com/services/', '_blank', 'noopener,noreferrer')}
                        style={{
                          padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                          fontSize: 'clamp(11px, 1.2vw, 15px)',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: '#00bcd4',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                          transition: 'all 0.3s ease',
                          letterSpacing: '0.3px',
                          textTransform: 'uppercase',
                          minWidth: 'clamp(140px, 15vw, 200px)',
                          width: 'clamp(140px, 15vw, 200px)',
                          alignSelf: 'flex-start'
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
                        Our Services
                      </button>
                      
                      {/* Learn More Button */}
                    <button
                      onClick={() => setShowGSGLearnMore(true)}
                      style={{
                          padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                          fontSize: 'clamp(11px, 1.2vw, 15px)',
                          fontWeight: 700,
                        color: '#ffffff',
                        background: '#00bcd4',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                        transition: 'all 0.3s ease',
                          letterSpacing: '0.3px',
                        textTransform: 'uppercase',
                        animation: 'fadeInUp 0.8s ease-out 0.8s both',
                          minWidth: 'clamp(140px, 15vw, 200px)',
                          width: 'clamp(140px, 15vw, 200px)',
                        alignSelf: 'flex-start'
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
                  </div>

                  {/* GSG Images and QR Code Container */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      gap: 'clamp(16px, 2vw, 24px)',
                      animation: 'fadeInUp 0.8s ease-out 0.7s both',
                      flexWrap: 'nowrap',
                      flexShrink: 0,
                      marginTop: '0'
                    }}
                  >
                    {/* Circular Images and QR Code Container */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 'clamp(12px, 1.5vw, 18px)'
                      }}
                    >
                      <img
                        src="/gsg-internal.png"
                        alt="GSG Internal"
                        style={{
                          width: 'clamp(100px, 10vw, 130px)',
                          height: 'clamp(100px, 10vw, 130px)',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          border: '3px solid #00bcd4',
                          boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)',
                          display: 'block',
                          flexShrink: 0
                        }}
                      />
                      <img
                        src="/gsgqr.jpeg"
                        alt="GSG QR Code"
                        onClick={() => setShowGSGQRModal(true)}
                        style={{
                          width: 'clamp(100px, 10vw, 130px)',
                          height: 'clamp(100px, 10vw, 130px)',
                          objectFit: 'contain',
                          borderRadius: '8px',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                          backgroundColor: '#ffffff',
                          padding: '8px',
                          display: 'block',
                          flexShrink: 0,
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 6 ? (
            <>
              {/* RK Background Image */}
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
                opacity: 1,
                zIndex: 1
              }} />
              
              {/* Company Logos Grid - Left Side */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%) translateZ(0)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg) translateZ(0)',
                    position: 'relative',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isRKLogo = company.id === 6;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isRKLogo ? '#ffffff' : '#E8E8E8',
                            border: isRKLogo
                              ? '2px solid #F4A460'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isRKLogo
                              ? '0 0 25px rgba(244, 164, 96, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isRKLogo ? 2 : 1,
                            transform: isRKLogo ? 'scale(1.12) translateY(-6px) translateZ(0)' : 'none',
                            transformOrigin: 'center center',
                            willChange: isRKLogo ? 'transform' : 'auto'
                          }}
                          onMouseEnter={(e) => {
                            if (isRKLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(244, 164, 96, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isRKLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(244, 164, 96, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* RK Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'clamp(20px, 2.5vh, 30px)',
                left: 'clamp(30px, 3vw, 50px)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'clamp(200px, 20vw, 280px)',
                    maxHeight: 'clamp(100px, 10vh, 140px)',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(244, 164, 96, 0.5))'
                  }}
                />
              </div>

              {/* RK Content - Right Side */}
              <div
                className="rk-content"
                style={{
                  position: 'fixed',
                  top: '50%',
                  right: 'clamp(20px, 2.5vw, 40px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'clamp(500px, 45vw, 700px)',
                  maxHeight: '90vh',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11,
                  overflow: 'visible',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 46px)',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 1.5vh, 18px)',
                    letterSpacing: '2px',
                    background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.2',
                    textShadow: '0 0 30px rgba(244, 164, 96, 0.4), 0 4px 20px rgba(244, 164, 96, 0.3)',
                    position: 'relative',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 8px rgba(244, 164, 96, 0.5))'
                  }}
                >
                  AL RAKAEZ CONSTRUCTION
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(13px, 1.4vw, 19px)',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(14px, 2vh, 20px)',
                    color: '#ffffff',
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 18px)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(244, 164, 96, 0.2)',
                    borderLeft: '3px solid #F4A460',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  Al-Rakaez Technical Co. Ltd. (RK) is a Saudi based company that specializes in Civil, Finishing, Mechanical, Electrical and Plumbing (MEP) building services. RK strives to deliver the highest standards of Civil, Finishing and MEP installation, carefully paying attention to each of its client's requirements and ideas, collaborating in the development of the right scope of work in order to develop a unique approach towards each customer.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(20px, 3vw, 35px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  {/* Text info (Managers / Mobile / Email / Website) */}
                  <div
                    style={{
                      fontSize: 'clamp(13px, 1.3vw, 18px)',
                      lineHeight: '1.8',
                      color: '#ffffff',
                      flex: '1 1 auto',
                      padding: 'clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 18px)',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.35) 100%)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(244, 164, 96, 0.2)',
                      border: '1px solid rgba(244, 164, 96, 0.25)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 'clamp(15px, 2vw, 25px)',
                      minWidth: 0
                    }}
                  >
                    {/* Text content column */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0',
                      flex: '1 1 auto'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: 'clamp(6px, 0.8vh, 10px)',
                        paddingBottom: 'clamp(5px, 0.6vh, 8px)',
                        borderBottom: '1px solid rgba(244, 164, 96, 0.2)'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#F4A460',
                        fontSize: 'clamp(13px, 1.3vw, 18px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(244, 164, 96, 0.3)',
                        flexShrink: 0
                      }}>Managers:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                      }}>Jaffar Al Sayori.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: 'clamp(6px, 0.8vh, 10px)',
                        paddingBottom: 'clamp(5px, 0.6vh, 8px)',
                        borderBottom: '1px solid rgba(244, 164, 96, 0.2)'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#F4A460',
                        fontSize: 'clamp(13px, 1.3vw, 18px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(244, 164, 96, 0.3)',
                        flexShrink: 0
                      }}>Mobile:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        fontFamily: 'monospace',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                      }}>054 989 5927</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '0'
                      }}
                    >
                      <strong style={{ 
                        minWidth: 'auto', 
                        fontWeight: 800, 
                        color: '#F4A460',
                        fontSize: 'clamp(13px, 1.3vw, 18px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(244, 164, 96, 0.3)',
                        flexShrink: 0
                      }}>Email:</strong>
                      <span
                        style={{
                          fontWeight: 600,
                          letterSpacing: '0.2px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        jafar.syouri@rk-arabia.com
                      </span>
                    </div>
                    
                    {/* Buttons and QR Code Container */}
                    <div style={{
                        display: 'flex',
                      flexDirection: 'row',
                      gap: 'clamp(15px, 2vw, 25px)',
                      marginTop: 'clamp(12px, 1.5vh, 18px)',
                      animation: 'fadeInUp 0.8s ease-out 0.7s both',
                      alignItems: 'flex-start'
                    }}>
                      {/* Buttons Column - Three buttons stacked vertically */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(10px, 1.2vh, 14px)'
                      }}>
                        {/* Visit Website Button */}
                        <button
                          onClick={() => window.open('https://www.rk-arabia.com/', '_blank', 'noopener,noreferrer')}
                          style={{
                            padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 2.4vw, 32px)',
                            fontSize: 'clamp(12px, 1.2vw, 16px)',
                            fontWeight: 700,
                            color: '#ffffff',
                            background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                            border: '2px solid #F4A460',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            boxShadow: '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            letterSpacing: '0.7px',
                            textTransform: 'uppercase',
                            minWidth: 'clamp(180px, 18vw, 260px)',
                            width: 'clamp(180px, 18vw, 260px)',
                            alignSelf: 'flex-start',
                            textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 164, 96, 0.6), 0 0 0 4px rgba(244, 164, 96, 0.2)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffb07a 0%, #F4A460 50%, #ffb07a 100%)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)';
                          }}
                        >
                          Visit Website
                        </button>
                        
                        {/* Our Services Button - Opens website with hash to scroll to services */}
                        <button
                          onClick={() => window.open('https://www.rk-arabia.com/#services', '_blank', 'noopener,noreferrer')}
                          style={{
                            padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 2.4vw, 32px)',
                            fontSize: 'clamp(12px, 1.2vw, 16px)',
                            fontWeight: 700,
                            color: '#ffffff',
                            background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                            border: '2px solid #F4A460',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            boxShadow: '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            letterSpacing: '0.7px',
                            textTransform: 'uppercase',
                            minWidth: 'clamp(180px, 18vw, 260px)',
                            width: 'clamp(180px, 18vw, 260px)',
                            alignSelf: 'flex-start',
                            textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 164, 96, 0.6), 0 0 0 4px rgba(244, 164, 96, 0.2)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffb07a 0%, #F4A460 50%, #ffb07a 100%)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)';
                          }}
                        >
                          Our Services
                        </button>
                        
                        {/* Learn More Button */}
                        <button
                          onClick={() => setShowRKLearnMore(true)}
                          style={{
                            padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 2.4vw, 32px)',
                            fontSize: 'clamp(12px, 1.2vw, 16px)',
                            fontWeight: 700,
                            color: '#ffffff',
                            background: 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)',
                            border: '2px solid #F4A460',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            boxShadow: '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            letterSpacing: '0.7px',
                            textTransform: 'uppercase',
                            minWidth: 'clamp(180px, 18vw, 260px)',
                            width: 'clamp(180px, 18vw, 260px)',
                            alignSelf: 'flex-start',
                            textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 164, 96, 0.6), 0 0 0 4px rgba(244, 164, 96, 0.2)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffb07a 0%, #F4A460 50%, #ffb07a 100%)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5), 0 0 0 0 rgba(244, 164, 96, 0.4)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #F4A460 0%, #ffb07a 50%, #F4A460 100%)';
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                    </div>

                    {/* RK Internal Image - Inside dark box, next to text */}
                    <div
                      style={{
                        maxWidth: 'clamp(140px, 14vw, 180px)',
                        width: 'fit-content',
                        flex: '0 0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(10px, 1.2vw, 14px)',
                        marginTop: '0',
                        overflow: 'visible',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                      }}
                    >
                      <img
                        src="/rk-internal.png"
                        alt="RK Internal"
                        style={{
                          width: 'auto',
                          maxWidth: 'clamp(140px, 14vw, 180px)',
                          height: 'auto',
                          maxHeight: 'clamp(100px, 12vh, 140px)',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                      {/* QR Code - Below the image */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          background: 'transparent',
                          padding: '0',
                          borderRadius: '0',
                          boxShadow: 'none',
                          alignSelf: 'center',
                          marginTop: 'clamp(30px, 4vh, 60px)'
                        }}
                      >
                        <img
                          src="/rkqr.jpeg"
                          alt="RK QR Code"
                          onClick={() => setShowRKQRModal(true)}
                          style={{
                            maxWidth: 'clamp(80px, 10vw, 120px)',
                            maxHeight: 'clamp(80px, 10vw, 120px)',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 5 ? (
            <>
              {/* Company Logos Grid - Left Side (same 12-company shape, highlighting AH Environmental) */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 200px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isAHLogo = company.id === 5;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isAHLogo ? '#ffffff' : '#E8E8E8',
                            border: isAHLogo
                              ? '2px solid #ffffff'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isAHLogo
                              ? '0 0 25px rgba(59, 130, 246, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isAHLogo ? 2 : 1,
                            transform: isAHLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isAHLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(59, 130, 246, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isAHLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(59, 130, 246, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* AH Environmental Text Content - Right */}
              <div
                className="ah-environmental-content"
                style={{
                  position: 'fixed',
                  top: '50%',
                  right: 'clamp(40px, 4vw, 120px)',
                  transform: 'translateY(-50%)',
                  maxWidth: "var(--ah-content-max-width, clamp(520px, 46vw, 1000px))",
                  maxHeight: '95vh',
                  zIndex: 12,
                  color: '#0f172a',
                  direction: 'ltr',
                  textAlign: 'left',
                  padding: 'clamp(20px, 3vw, 48px)',
                  overflow: 'visible',
                  boxSizing: 'border-box',
                  borderRadius: 'clamp(12px, 1.2vw, 20px)',
                  background: 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.0) 100%)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
                }}
              >
                {/* AH Environmental Logo above the title */}
                <div
                  style={{
                    marginBottom: 'clamp(10px, 1.5vh, 18px)',
                    animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <img
                    src={selectedCompany.logo}
                    alt={selectedCompany.name}
                    style={{
                      maxWidth: 'var(--ah-logo-size, clamp(200px, 18vw, 300px))',
                      maxHeight: 'var(--ah-logo-height, clamp(150px, 14vw, 220px))',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.25))'
                    }}
                  />
                </div>

                <h1
                  style={{
                    fontSize: 'var(--ah-title-size, clamp(30px, 4vw, 50px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(16px, 2.5vh, 28px)',
                    letterSpacing: '2.2px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.2',
                    textShadow: '0 0 30px rgba(15, 23, 42, 0.4), 0 4px 20px rgba(15, 23, 42, 0.3)',
                    position: 'relative',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 8px rgba(15, 23, 42, 0.5))'
                  }}
                >
                  AH ENVIRONMENTAL CONSULTING
                </h1>

                <p
                  style={{
                    fontSize: 'var(--ah-text-size, clamp(14px, 1.6vw, 22px))',
                    lineHeight: '1.85',
                    marginBottom: 'clamp(24px, 3.5vh, 36px)',
                    color: '#1e293b',
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.1)',
                    borderLeft: '4px solid #0f172a'
                  }}
                >
                  AHEC is a leading environmental engineering and consulting firm established in 2010, providing sustainable and compliant solutions across multiple industries Certified Category A by NCEC and accredited by the Royal Commission for Jubail and Yanbu, AHEC delivers integrated environmental services to government and industrial clients, supporting sustainability, safety, and regulatory compliance
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(16px, 3vw, 40px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: 'clamp(8px, 1vh, 12px)'
                  }}
                >
                  {/* Contact Info (Left Column) */}
                  <div
                    style={{
                      fontSize: 'var(--ah-info-size, clamp(14px, 1.5vw, 21px))',
                      lineHeight: '1.9',
                      color: '#1e293b',
                      flex: '1',
                      padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(15, 23, 42, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: 'clamp(10px, 1.4vh, 14px)',
                      paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                      borderBottom: '1px solid rgba(15, 23, 42, 0.15)'
                    }}>
                      <strong
                        style={{
                          fontWeight: 800,
                          color: '#0f172a',
                          fontSize: 'clamp(14px, 1.5vw, 21px)',
                          letterSpacing: '0.5px',
                          textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
                          minWidth: 'auto'
                        }}
                      >
                        Managers:
                      </strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px'
                      }}>Ennacer Besghaier.</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: 'clamp(10px, 1.4vh, 14px)',
                      paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                      borderBottom: '1px solid rgba(15, 23, 42, 0.15)'
                    }}>
                      <strong
                        style={{
                          fontWeight: 800,
                          color: '#0f172a',
                          fontSize: 'clamp(14px, 1.5vw, 21px)',
                          letterSpacing: '0.5px',
                          textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
                          minWidth: 'auto'
                        }}
                      >
                        Mobile:
                      </strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        fontFamily: 'monospace'
                      }}>054 292 9702</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '0'
                    }}>
                      <strong
                        style={{
                          fontWeight: 800,
                          color: '#0f172a',
                          fontSize: 'clamp(14px, 1.5vw, 21px)',
                          letterSpacing: '0.5px',
                          textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
                          minWidth: 'auto'
                        }}
                      >
                        Email:
                      </strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>g.m@ahenviro.com</span>
                    </div>
                  </div>
                </div>

                {/* Bottom row: All three buttons + QR Code */}
                <div
                        style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(24px, 3vh, 36px)',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Buttons Container - All three buttons */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 1.5vh, 18px)',
                    flex: 1,
                    animation: 'fadeInUp 0.8s ease-out 0.7s both'
                  }}>
                    {/* Visit Website Button */}
                    <button
                      onClick={() => window.open('https://ahenviro.com/', '_blank', 'noopener,noreferrer')}
                        style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                        fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                        border: '2px solid #0f172a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.6), 0 0 0 4px rgba(15, 23, 42, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)';
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
                        }}
                      >
                      Visit Website
                    </button>
                    
                    {/* Our Services Button */}
                    <button
                      onClick={() => window.open('https://ahenviro.com/services/', '_blank', 'noopener,noreferrer')}
                      style={{
                        padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                        fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                        border: '2px solid #0f172a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.6), 0 0 0 4px rgba(15, 23, 42, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
                      }}
                    >
                      Our Services
                    </button>
                    
                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowAHEnvironmentalLearnMore(true)}
                    style={{
                      padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                      fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                        border: '2px solid #0f172a',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        minWidth: 'clamp(200px, 20vw, 280px)',
                        width: 'clamp(200px, 20vw, 280px)',
                        alignSelf: 'flex-start',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.6), 0 0 0 4px rgba(15, 23, 42, 0.2)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.5), 0 0 0 0 rgba(15, 23, 42, 0.4)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
                      }}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
                      flexShrink: 0,
                      marginTop: '0',
                      alignSelf: 'flex-start',
                      zIndex: 13,
                      position: 'relative',
                      minWidth: 'clamp(110px, 13vw, 240px)',
                      maxWidth: 'clamp(110px, 13vw, 240px)'
                    }}
                  >
                    <img
                      src="/ahqr.jpeg"
                      alt="AH Environmental QR Code"
                      onClick={() => setShowAHEnvironmentalQRModal(true)}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: 'clamp(110px, 13vw, 240px)',
                        maxHeight: 'clamp(110px, 13vw, 240px)',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px',
                        display: 'block',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany.id === 12 ? (
            <>
              {/* Company Logos Grid - Left Side (same as home page) */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  left: 'clamp(80px, 7vw, 140px)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  animation: 'fadeIn 0.8s ease-in-out 0.4s both',
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
                    gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
                    transform: 'rotate(45deg)',
                    position: 'relative'
                  }}
                >
                  {companies.map((company) => {
                    const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');
                    const isGulfConsultLogo = company.id === 12;

                    return (
                      <div
                        key={company.id}
                        style={{
                          gridColumn: company.col,
                          gridRow: company.row,
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            cursor:
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                                ? 'pointer'
                                : 'default',
                            width: '100%',
                            height: '100%',
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            background: isGulfConsultLogo ? '#ffffff' : '#E8E8E8',
                            border: isGulfConsultLogo
                              ? '2px solid #16348a'
                              : '1px solid rgba(200, 200, 200, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderRadius: '4px',
                            boxShadow: isGulfConsultLogo
                              ? '0 0 25px rgba(22, 52, 138, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)'
                              : '0 2px 10px rgba(0, 0, 0, 0.08)',
                            position: 'relative',
                            zIndex: isGulfConsultLogo ? 2 : 1,
                            transform: isGulfConsultLogo ? 'scale(1.12) translateY(-6px)' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (isGulfConsultLogo) {
                              e.currentTarget.style.transform = 'scale(1.22) translateY(-10px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 35px rgba(22, 52, 138, 1), 0 16px 35px rgba(0, 0, 0, 0.45)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1.08)';
                              e.currentTarget.style.boxShadow =
                                '0 4px 20px rgba(0, 0, 0, 0.12)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isGulfConsultLogo) {
                              e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                              e.currentTarget.style.boxShadow =
                                '0 0 25px rgba(22, 52, 138, 0.9), 0 10px 25px rgba(0, 0, 0, 0.35)';
                            } else {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow =
                                '0 2px 10px rgba(0, 0, 0, 0.08)';
                            }
                          }}
                          onClick={(e) => {
                            if (
                              company.id === 10 ||
                              company.id === 3 ||
                              company.id === 11 ||
                              company.id === 1 ||
                              company.id === 6 ||
                              company.id === 5 ||
                              company.id === 2 ||
                              company.id === 7 ||
                              company.id === 9 ||
                              company.id === 12 ||
                              company.id === 4 ||
                              company.id === 8
                            ) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              sessionStorage.setItem('logoStartX', rect.left);
                              sessionStorage.setItem('logoStartY', rect.top);
                              setSelectedCompany(company);
                            }
                          }}
                        >
                          <div
                            style={{
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '10px'
                            }}
                          >
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

              {/* Gulf Consult Content - Right Side (like AMT) */}
              <div className="gulf-consult-content" style={{
                position: 'fixed',
                top: '50%',
                right: 'clamp(40px, 4vw, 80px)',
                transform: 'translateY(-50%)',
                maxWidth: 'var(--gulf-content-max-width, clamp(600px, 50vw, 900px))',
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left',
                zIndex: 11
              }}>
                <h1 style={{
                  fontSize: 'var(--gulf-title-size, clamp(36px, 4.5vw, 62px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(16px, 2.5vh, 28px)',
                  letterSpacing: '2.2px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e8f0ff 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 4px 20px rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  display: 'inline-block',
                  filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.5))'
                }}>
                  GULF CONSULT
                </h1>

                <p style={{
                  fontSize: 'var(--gulf-text-size, clamp(15px, 1.7vw, 24px))',
                  lineHeight: '1.85',
                  marginBottom: 'clamp(24px, 3.5vh, 36px)',
                  color: '#ffffff',
                  fontWeight: '500',
                  letterSpacing: '0.3px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both',
                  padding: 'clamp(12px, 1.5vh, 18px) clamp(16px, 2vw, 24px)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.15)',
                  borderLeft: '4px solid #16348a',
                  backdropFilter: 'blur(10px)'
                }}>
                  is an independent multidisciplinary consultancy firm established in 1981 with over 42 years of experience providing high-quality engineering and environmental services across the Gulf region, particularly in the Kingdom of Saudi Arabia.
                </p>

                {/* Contact Information - Lowered down */}
                <div style={{
                  fontSize: 'var(--gulf-info-size, clamp(15px, 1.7vw, 24px))',
                  lineHeight: '1.9',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  marginTop: 'clamp(40px, 5vh, 60px)',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both',
                  padding: 'clamp(16px, 2vh, 20px) clamp(20px, 2.2vw, 28px)',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: 'clamp(10px, 1.4vh, 14px)',
                    paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <strong style={{ 
                      fontWeight: '800', 
                      flexShrink: 0,
                      color: '#e8f0ff',
                      fontSize: 'clamp(15px, 1.7vw, 24px)',
                      letterSpacing: '0.5px',
                      textShadow: '0 1px 2px rgba(22, 52, 138, 0.3)'
                    }}>Management:</strong>
                    <span style={{ 
                      fontWeight: 600,
                      letterSpacing: '0.2px',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}>CEO: Eng. Faisal Ali AlHarbi, GM: Eng. Rabah Yehya.</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: 'clamp(10px, 1.4vh, 14px)',
                    paddingBottom: 'clamp(8px, 1.2vh, 12px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <strong style={{ 
                      fontWeight: '800', 
                      flexShrink: 0,
                      color: '#e8f0ff',
                      fontSize: 'clamp(15px, 1.7vw, 24px)',
                      letterSpacing: '0.5px',
                      textShadow: '0 1px 2px rgba(22, 52, 138, 0.3)'
                    }}>Mobile:</strong>
                    <span style={{ 
                      fontWeight: 600,
                      letterSpacing: '0.2px',
                      fontFamily: 'monospace',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}>055 584 6667</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: 'clamp(6px, 0.8vh, 10px)',
                    marginBottom: '0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <strong style={{ 
                        fontWeight: '800', 
                        flexShrink: 0,
                        color: '#e8f0ff',
                        fontSize: 'clamp(15px, 1.7vw, 24px)',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(22, 52, 138, 0.3)'
                      }}>Email:</strong>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                      }}>faisal@gulfconsult.com</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '8px',
                      marginLeft: 'clamp(80px, 8vw, 120px)'
                    }}>
                      <span style={{ 
                        fontWeight: 600,
                        letterSpacing: '0.2px',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                      }}>rabah@gulfconsult.com</span>
                    </div>
                  </div>
                </div>

                {/* Buttons Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(6px, 0.8vh, 10px)',
                  animation: 'fadeInUp 0.8s ease-out 0.7s both',
                  marginTop: 'clamp(28px, 3.5vh, 40px)'
                }}>
                  {/* Website Button */}
                  <button
                    onClick={() => window.open('https://www.gulfconsult.com', '_blank', 'noopener,noreferrer')}
                      style={{ 
                      padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                      fontSize: 'clamp(14px, 1.4vw, 18px)',
                        fontWeight: 700,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)',
                      border: '2px solid #16348a',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                      minWidth: 'clamp(200px, 20vw, 280px)',
                      width: 'clamp(200px, 20vw, 280px)',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 52, 138, 0.6), 0 0 0 4px rgba(22, 52, 138, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1e42a5 0%, #16348a 50%, #1e42a5 100%)';
                      }}
                      onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)';
                    }}
                  >
                    Visit Website
                  </button>
                  {/* Our Services Button */}
                  <button
                    onClick={() => window.open('https://www.gulfconsult.com/our-services', '_blank', 'noopener,noreferrer')}
                    style={{
                      padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                      fontSize: 'clamp(14px, 1.4vw, 18px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)',
                      border: '2px solid #16348a',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                      minWidth: 'clamp(200px, 20vw, 280px)',
                      width: 'clamp(200px, 20vw, 280px)',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 52, 138, 0.6), 0 0 0 4px rgba(22, 52, 138, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1e42a5 0%, #16348a 50%, #1e42a5 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)';
                    }}
                  >
                    Our Services
                  </button>
                  
                  {/* Learn More Button */}
                  <button
                  className="gulf-consult-learn-more-button"
                  onClick={() => setShowGulfConsult2LearnMore(true)}
                  style={{
                    padding: 'clamp(12px, 1.4vw, 16px) clamp(28px, 2.8vw, 38px)',
                    fontSize: 'clamp(14px, 1.4vw, 18px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)',
                    border: '2px solid #16348a',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    minWidth: 'clamp(200px, 20vw, 280px)',
                    width: 'clamp(200px, 20vw, 280px)',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginTop: 'clamp(-4px, -0.5vh, -2px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 52, 138, 0.6), 0 0 0 4px rgba(22, 52, 138, 0.2)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1e42a5 0%, #16348a 50%, #1e42a5 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5), 0 0 0 0 rgba(22, 52, 138, 0.4)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #16348a 0%, #1e42a5 50%, #16348a 100%)';
                  }}
                >
                  Learn More
                </button>
                </div>

                {/* Gulf Video Image with Play Video overlay - Far Right */}
                {!gulfLogoVideoFullscreen && (
                  <div
                    style={{
                      position: 'fixed',
                      right: 'clamp(16px, 2.5vw, 32px)',
                      top: 'clamp(38%, 38vh, 42%)',
                      transform: 'translateY(-50%)',
                      zIndex: 11,
                      width: 'clamp(220px, 22vw, 320px)',
                      animation: 'fadeInUp 0.8s ease-out 0.5s both'
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src="/gulfphoto.jpg"
                        alt="Gulf Consult"
                        style={{
                          width: '100%',
                          height: 'clamp(160px, 20vh, 240px)',
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '16px',
                          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.55)'
                        }}
                      />
                      <button
                        onClick={async () => {
                          if (gulfLogoVideoContainerRef.current) {
                            try {
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
                              console.error('Error opening Gulf video from button:', error);
                            }
                          }
                        }}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          padding: 'var(--gulf-button-padding, clamp(12px, 1.4vw, 18px) clamp(28px, 2.6vw, 40px))',
                          fontSize: 'var(--gulf-button-font, clamp(14px, 1.4vw, 20px))',
                          fontWeight: 700,
                          color: '#16348a',
                          background: 'rgba(0, 0, 0, 0.65)',
                          border: '2px solid #16348a',
                          borderRadius: '999px',
                          cursor: 'pointer',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                          transition: 'all 0.3s ease',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          backdropFilter: 'blur(6px)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translate(-50%, -52%)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translate(-50%, -50%)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
                          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                        }}
                      >
                        <span>Play Video</span>
                        <span
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: '#16348a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="white"
                            style={{ marginLeft: '2px' }}
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* QR Code - Below Video */}
                {!gulfLogoVideoFullscreen && (
                  <div
                    className="gulf-consult-qr-container"
                    style={{
                      position: 'fixed',
                      right: 'clamp(16px, 2.5vw, 32px)',
                      top: 'calc(38% + clamp(100px, 12vh, 140px))',
                      zIndex: 11,
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      animation: 'fadeInUp 0.8s ease-out 0.7s both',
                      width: 'clamp(220px, 22vw, 320px)'
                    }}
                  >
                    {/* QR Code - Smaller size */}
                    <div
                      style={{
                        flexShrink: 0,
                        zIndex: 13,
                        position: 'relative',
                        minWidth: 'clamp(80px, 10vw, 120px)',
                        maxWidth: 'clamp(80px, 10vw, 120px)'
                      }}
                    >
                      <img
                        src="/gulfconsultrectangleqr.jpeg"
                        alt="Gulf Consult QR Code"
                        onClick={() => setShowGulfConsultQRModal(true)}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxWidth: 'clamp(80px, 10vw, 120px)',
                          maxHeight: 'clamp(80px, 10vw, 120px)',
                          objectFit: 'contain',
                          borderRadius: '8px',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                          backgroundColor: '#ffffff',
                          padding: '6px',
                          cursor: 'pointer',
                          display: 'block',
                          transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Gulf Logo Play Button - Right Side (REMOVED - video is now next to contact info) */}
              {false && !gulfLogoVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '5%',
                    top: '30%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                >
                  {/* Video Thumbnail Container - Relative positioning */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      animation: 'fadeInUp 0.8s ease-out 0.5s both'
                    }}
                  >
                    {/* Gulf Photo - Increased size for better visual impact */}
                    <img
                      src="/gulfphoto.jpg"
                      alt="Gulf Consult"
                      style={{
                        maxWidth: 'clamp(600px, 55vw, 1600px)',
                        maxHeight: 'clamp(400px, 45vh, 1000px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        display: 'block'
                      }}
                    />
                    
                    {/* Overlay Group - Text and Play Button centered together */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        gap: 'clamp(16px, 2vh, 24px)'
                      }}
                    >
                      {/* Click to play video text */}
                      <div
                        style={{
                          color: '#ffffff',
                          fontSize: 'clamp(14px, 1.8vw, 32px)',
                          fontWeight: '600',
                          textAlign: 'center',
                          animation: 'pulse 2s ease-in-out infinite',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Click to play video
                      </div>
                      
                      {/* Play Button - Centered within the text */}
                      <div
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
                        style={{
                          width: 'var(--gulf-play-button-size, clamp(90px, 9vw, 220px))',
                          height: 'var(--gulf-play-button-size, clamp(90px, 9vw, 220px))',
                          borderRadius: '50%',
                          background: 'rgba(22, 52, 138, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 20px rgba(22, 52, 138, 0.4)',
                          flexShrink: 0
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
                          width="clamp(40px, 4.5vw, 110px)"
                          height="clamp(40px, 4.5vw, 110px)"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '6px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
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
                  <video
                    key={`gulf-logo-video-${gulfLogoVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/gulfconsult_pjinhc.mp4"
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
                      closeVideo(setGulfLogoVideoFullscreen, setGulfLogoVideoPlaying);
                    }}
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

          {/* Back to Alika button - Top Right */}
          <button
            onClick={() => setSelectedCompany(null)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 60px)',
              right: 'clamp(20px, 2.5vw, 60px)',
              background: selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.35)',
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
              e.currentTarget.style.background = selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.45)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 18px 50px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.35)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 16px 45px rgba(0, 0, 0, 0.35)';
            }}
          >
            Back to Alika
          </button>
        </div>
      )}

      {/* Our Partners Modal */}
      {showPartners && (
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
            backgroundImage: 'url(/bg.png)',
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
                        src={`/tlcomajorclients/${logoName}`}
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
            onClick={() => setShowPartners(false)}
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
      )}

      {/* Our Subsidiaries Modal */}
      {showSubsidiaries && (
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
            backgroundImage: 'url(/bg.png)',
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
            padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '15px 25px' : 'clamp(40px, 4vw, 60px) clamp(20px, 3vw, 40px)',
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
              fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '26px' : 'clamp(32px, 4vw, 48px)',
              fontWeight: '900',
              color: '#2d8659',
              marginBottom: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(30px, 4vh, 50px)',
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
              gridTemplateColumns: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(25px, 3vw, 40px)',
              width: '100%',
              maxWidth: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : '1400px',
              padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 15px' : '0 clamp(20px, 3vw, 40px)',
              justifyContent: 'center',
              flex: '1',
              alignContent: 'center'
            }}>
              {/* AH Environmental */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/AH-ENVIRONMENTAL.png" 
                  alt="AH Environmental" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    AH Environmental is committed to protecting and preserving our natural environment through sustainable practices.
                  </p>
                  <p style={{ margin: '0' }}>
                    We provide comprehensive environmental solutions and consulting services to ensure a greener future.
                  </p>
                </div>
              </div>

              {/* Gulf Consult */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/GULF-CONSULT.png" 
                  alt="Gulf Consult" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    Gulf Consult is a premier consulting firm offering strategic advisory and professional services.
                  </p>
                  <p style={{ margin: '0' }}>
                    We deliver expert guidance and innovative solutions to help businesses achieve their strategic objectives.
                  </p>
                </div>
              </div>

              {/* Antique */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/antique.png" 
                  alt="Antique" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    Antique is a distinguished company known for its excellence in heritage preservation and cultural services.
                  </p>
                  <p style={{ margin: '0' }}>
                    We combine traditional craftsmanship with modern expertise to deliver exceptional quality and timeless value.
                  </p>
                </div>
              </div>

              {/* AMT */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/AMT.png" 
                  alt="AMT" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    AMT is a leading company specializing in advanced technology solutions and innovative services.
                  </p>
                  <p style={{ margin: '0' }}>
                    We provide cutting-edge technological expertise to drive business growth and digital transformation.
                  </p>
                </div>
              </div>

              {/* Central Care */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/cc.png" 
                  alt="Central Care" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    Central Care is a leading healthcare provider dedicated to delivering exceptional medical services.
                  </p>
                  <p style={{ margin: '0' }}>
                    We offer comprehensive healthcare solutions with a focus on patient care, innovation, and medical excellence.
                  </p>
                </div>
              </div>

              {/* Al Dorrah */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/dorrah.png" 
                  alt="Al Dorrah" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    Al Dorrah is a prominent company specializing in premium services and innovative business solutions.
                  </p>
                  <p style={{ margin: '0' }}>
                    We excel in delivering high-quality services that meet the diverse needs of our clients and partners.
                  </p>
                </div>
              </div>

              {/* GTA */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/GTA.png" 
                  alt="GTA" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    GTA is a dynamic company focused on providing advanced technology and automation solutions.
                  </p>
                  <p style={{ margin: '0' }}>
                    We leverage cutting-edge technology to optimize operations and drive efficiency across various industries.
                  </p>
                </div>
              </div>

              {/* RK */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/RK.png" 
                  alt="RK" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    RK is a trusted company delivering reliable services and innovative solutions across multiple sectors.
                  </p>
                  <p style={{ margin: '0' }}>
                    We are committed to excellence and building long-term partnerships with our clients and stakeholders.
                  </p>
                </div>
              </div>

              {/* IDC */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/IDC.png" 
                  alt="IDC" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    IDC is a leading company in infrastructure development and construction management services.
                  </p>
                  <p style={{ margin: '0' }}>
                    We deliver world-class infrastructure projects with a focus on quality, safety, and sustainable development.
                  </p>
                </div>
              </div>

              {/* Gulf Logo */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/gulf-logo.png" 
                  alt="Gulf Logo" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    Gulf Logo represents our commitment to excellence and innovation in the Gulf region.
                  </p>
                  <p style={{ margin: '0' }}>
                    We provide strategic services and solutions that contribute to regional growth and development.
                  </p>
                </div>
              </div>

              {/* TLCO */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/tico.png" 
                  alt="TLCO" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    TLCO is a specialized company offering comprehensive solutions in transportation and logistics.
                  </p>
                  <p style={{ margin: '0' }}>
                    We provide efficient and reliable transportation services to support business operations and connectivity.
                  </p>
                </div>
              </div>

              {/* GSG */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '8px' : '20px',
                padding: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '12px' : 'clamp(20px, 2.5vw, 30px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(45, 134, 89, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? 'auto' : '280px',
                justifyContent: 'flex-start',
                height: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '100%' : 'auto'
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
                  src="/gsg.png" 
                  alt="GSG" 
                  style={{
                    width: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '80px' : 'clamp(120px, 15vw, 180px)',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '60px' : '100px'
                  }}
                />
                <div style={{
                  textAlign: 'center',
                  color: '#2d8659',
                  fontSize: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '11px' : 'clamp(14px, 1.5vw, 18px)',
                  lineHeight: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '1.4' : '1.6',
                  fontWeight: '500',
                  direction: 'ltr'
                }}>
                  <p style={{ margin: viewportSize.width >= 1536 && viewportSize.height >= 864 ? '0 0 6px 0' : '0 0 10px 0' }}>
                    GSG is a forward-thinking company dedicated to providing innovative solutions and strategic services.
                  </p>
                  <p style={{ margin: '0' }}>
                    We combine expertise and innovation to deliver exceptional value and drive sustainable business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back button */}
          <button
            onClick={() => setShowSubsidiaries(false)}
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
          maxWidth: '100vw',
          maxHeight: '100vh',
          backgroundImage: 'url(/gc-engineer-learnmore-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
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
            height: '100vh',
            maxHeight: '100vh',
            padding: 'clamp(10px, 2vh, 20px) clamp(20px, 3vw, 40px)',
            paddingTop: 'clamp(40px, 5vh, 50px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflow: 'hidden',
            overflowY: 'hidden',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            position: 'relative'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: 'clamp(8px, 1vw, 10px)',
              marginBottom: 'clamp(8px, 1vh, 10px)',
              zIndex: 10,
              flexShrink: 0,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => setGulfConsultActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab4' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab4' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                GALLERY
              </button>
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
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
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
                MAJOR CLIENTS
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
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
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
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
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
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {gulfConsultActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1536px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 'clamp(3px, 0.5vh, 8px) clamp(8px, 0.8vw, 12px)',
                overflow: 'visible',
                overflowY: 'visible',
                overflowX: 'visible',
                flex: 1,
                minHeight: 0,
                height: '100%',
                boxSizing: 'border-box'
              }}>
                <h1 style={{
                  fontSize: 'clamp(16px, 1.6vw, 24px)',
                  fontWeight: '900',
                  color: '#6a1b9a',
                  marginBottom: 'clamp(5px, 0.6vh, 8px)',
                  marginTop: '0',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  flexShrink: 0,
                  lineHeight: '1.1'
                }}>
                  MAJOR CLIENTS
                </h1>

                {/* Partners Logos Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                  gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
                  gap: 'clamp(3px, 0.4vw, 6px)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '0',
                  overflow: 'hidden',
                  width: '100%',
                  flex: 1,
                  minHeight: 0,
                  height: '100%',
                  padding: '0',
                  boxSizing: 'border-box',
                  alignContent: 'center',
                  gridAutoFlow: 'row'
                }}>
                  {(() => {
                    const logos = [
                      '/gcpartner4.png',
                      '/gcpartner3.png',
                      '/gcpartner2.png',
                      '/gcpartner1.png',
                      '/gcmajorclients/Screenshot 2026-02-28 092851.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 092924.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 092942.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 092959.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093016.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093029.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093053.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093107.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093123.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093137.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093151.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093204.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093219.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093233.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093250.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093303.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093332.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093343.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093356.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093411.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093424.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093436.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093447.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093501.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093522.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093533.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093548.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093600.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093614.jpg',
                      '/gcmajorclients/Screenshot 2026-02-28 093626.jpg'
                    ];
                    return logos.map((logoPath, index) => (
                    <div
                      key={`logo-${index}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        borderRadius: '50%',
                        background: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 'clamp(3px, 0.4vw, 6px)',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        minWidth: 0,
                        minHeight: 0
                      }}
                    >
                      <img
                        src={logoPath}
                        alt={`Client ${index + 1}`}
                        onError={(e) => {
                          e.target.src = '/elco-gif.gif';
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '50%',
                          display: 'block'
                        }}
                      />
                    </div>
                    ));
                  })()}
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
                  OUR PARTNERS
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

            {gulfConsultActiveTab === 'tab4' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 1.5vh, 20px)',
                overflow: 'hidden',
                overflowY: 'hidden',
                overflowX: 'hidden',
                flex: 1,
                minHeight: 0,
                maxHeight: 'calc(100vh - 180px)',
                boxSizing: 'border-box'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2.2vw, 32px)',
                  fontWeight: '900',
                  color: '#6a1b9a',
                  marginBottom: 'clamp(15px, 2vh, 30px)',
                  marginTop: '0',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  flexShrink: 0
                }}>
                  GALLERY
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#6a1b9a',
                  textAlign: 'center'
                }}>
                  Gallery content will be displayed here.
                </p>
              </div>
            )}
          </div>


          {/* Back button - text only */}
          <button
            onClick={() => setShowGulfConsultLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#4a148c',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.color = '#3d0f6f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = '#4a148c';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Gulf Consult Arch QR Code Modal */}
      {showGulfConsultArchQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGulfConsultArchQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGulfConsultArchQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page3"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Gulf Consult Arch QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
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
              zIndex: 10,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
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
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
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
                GALLERY
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
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
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
                MAJOR CLIENTS
              </button>
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
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
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
                OUR TEAM
              </button>
              <button
                onClick={() => setAntiqueActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab4' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab4' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {antiqueActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
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
                  GALLERY
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#f3c06b',
                  textAlign: 'center'
                }}>
                  Gallery content will be displayed here.
                </p>
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
                  MAJOR CLIENTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#f3c06b'
                }}>
                  Major clients information will be displayed here.
                </p>
              </div>
            )}

            {antiqueActiveTab === 'tab3' && (
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
                  OUR TEAM
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

            {antiqueActiveTab === 'tab4' && (
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
          </div>

          {/* Back to Alika button */}
          <button
            onClick={() => setShowAntiqueLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
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
          backgroundColor: 'transparent',
          backgroundImage: 'url(/amt-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: 'clamp(15px, 2vh, 25px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            paddingTop: 'clamp(20px, 3vh, 35px)'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: 'clamp(10px, 1.5vh, 15px)',
              zIndex: 10
            }}>
              <button
                onClick={() => setAmtActiveTab('tab4')}
                style={{
                  padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
                  fontSize: 'clamp(15px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab4' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab4' 
                    ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                    : 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  textShadow: amtActiveTab === 'tab4' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
                  boxShadow: amtActiveTab === 'tab4' 
                    ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                GALLERY
              </button>
              <button
                onClick={() => setAmtActiveTab('tab3')}
                style={{
                  padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
                  fontSize: 'clamp(15px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab3' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab3' 
                    ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                    : 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  textShadow: amtActiveTab === 'tab3' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
                  boxShadow: amtActiveTab === 'tab3' 
                    ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                MAJOR CLIENTS
              </button>
              <button
                onClick={() => setAmtActiveTab('tab2')}
                style={{
                  padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
                  fontSize: 'clamp(15px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab2' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab2' 
                    ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                    : 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  textShadow: amtActiveTab === 'tab2' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
                  boxShadow: amtActiveTab === 'tab2' 
                    ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                OUR TEAM
              </button>
              <button
                onClick={() => setAmtActiveTab('tab1')}
                style={{
                  padding: 'clamp(12px, 1.2vh, 14px) clamp(24px, 2.5vw, 32px)',
                  fontSize: 'clamp(15px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab1' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab1' 
                    ? 'linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 50%, #ff4b4b 100%)' 
                    : 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  textShadow: amtActiveTab === 'tab1' ? '0 1px 3px rgba(0, 0, 0, 0.3)' : 'none',
                  boxShadow: amtActiveTab === 'tab1' 
                    ? '0 4px 15px rgba(255, 75, 75, 0.5), 0 0 0 0 rgba(255, 75, 75, 0.4)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 75, 75, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab1') {
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
            {amtActiveTab === 'tab1' && (
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
                  {[
                    'aharthurhoml', 'ahuatechnolgy', 'apc', 'aruba', 'atlasied',
                    'avaya', 'avigilon', 'biamp', 'chkistie', 'cisco',
                    'clearone', 'commscope', 'edward', 'estronelectronics', 'fortinet',
                    'hp', 'huawei', 'jbl', 'juniper', 'lenels2',
                    'leviton', 'lg', 'nedap', 'orestron', 'pelco',
                    'samsung', 'sapling', 'shure', 'televic', 'tripleplay'
                  ].map((logoName, index) => (
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
                        src={`/amtpartners/${logoName}.png`}
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

            {amtActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                textAlign: 'center',
                padding: 'clamp(20px, 2.5vh, 40px) clamp(20px, 2vw, 40px)',
                minHeight: 'calc(100vh - 200px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
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
                <p style={{
                  fontSize: 'clamp(17px, 1.7vw, 24px)',
                  lineHeight: '1.9',
                  color: '#ffffff',
                  marginBottom: 'clamp(40px, 5vh, 60px)',
                  maxWidth: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontWeight: '500',
                  letterSpacing: '0.4px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
                  padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2.5vw, 32px)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '14px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 75, 75, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 75, 75, 0.25)'
                }}>
                  Our dedicated team of experts brings years of experience in advanced micro technologies and innovation.
                </p>
                
                {/* Team Members Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: 'clamp(12px, 1.5vw, 25px)',
                  maxWidth: '1400px',
                  margin: '0 auto',
                  padding: '0 clamp(10px, 1.5vw, 30px)',
                  width: '100%',
                  direction: 'ltr'
                }}>
                  {/* CEO */}
                  <div style={{
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
                        src="/mreyad.jpeg"
                        alt="CEO"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="font-size: 48px; color: #ff4b4b;">👤</div>';
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: 'clamp(17px, 1.6vw, 24px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      Eyad Matar<br />
                      <span style={{ 
                        fontSize: 'clamp(14px, 1.3vw, 18px)', 
                        fontWeight: '700',
                        color: '#ff4b4b',
                        textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '0.8px'
                      }}>CEO</span>
                    </div>
                  </div>

                  {/* Sales Manager */}
                  <div style={{
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
                        src="/mohammadsalesmanager.jpeg"
                        alt="Sales Manager"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="font-size: 48px; color: #ff4b4b;">👤</div>';
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: 'clamp(17px, 1.6vw, 24px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      Mohammed Abdul Quddus<br />
                      <span style={{ 
                        fontSize: 'clamp(14px, 1.3vw, 18px)', 
                        fontWeight: '700',
                        color: '#ff4b4b',
                        textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '0.8px'
                      }}>Sales Manager</span>
                    </div>
                  </div>

                  {/* Finance Manager */}
                  <div style={{
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
                        src="/financemanager.jpeg"
                        alt="Finance Manager"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="font-size: 48px; color: #ff4b4b;">👤</div>';
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: 'clamp(17px, 1.6vw, 24px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      Amr Abu Hashem<br />
                      <span style={{ 
                        fontSize: 'clamp(14px, 1.3vw, 18px)', 
                        fontWeight: '700',
                        color: '#ff4b4b',
                        textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '0.8px'
                      }}>Finance Manager</span>
                    </div>
                  </div>

                  {/* Implementation Manager */}
                  <div style={{
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
                        src="/Implementationmanager.jpeg"
                        alt="Implementation Manager"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="font-size: 48px; color: #ff4b4b;">👤</div>';
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: 'clamp(17px, 1.6vw, 24px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      IMRAN KHAN YAR<br />
                      <span style={{ 
                        fontSize: 'clamp(14px, 1.3vw, 18px)', 
                        fontWeight: '700',
                        color: '#ff4b4b',
                        textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '0.8px'
                      }}>Implementation Manager</span>
                    </div>
                  </div>

                  {/* Engineering Manager */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'clamp(12px, 1.5vh, 18px)'
                  }}>
                    <div style={{
                      width: 'clamp(130px, 12vw, 200px)',
                      height: 'clamp(130px, 12vw, 200px)',
                      borderRadius: '50%',
                      backgroundColor: '#ff6b9d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #ff4b4b',
                      boxShadow: '0 8px 25px rgba(255, 75, 75, 0.35)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: 'clamp(32px, 3vw, 40px)',
                      letterSpacing: '1px'
                    }}>
                      EM
                    </div>
                    <div style={{
                      fontSize: 'clamp(17px, 1.6vw, 24px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      <span style={{ 
                        fontSize: 'clamp(14px, 1.3vw, 18px)', 
                        fontWeight: '700',
                        color: '#ff4b4b',
                        textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '0.8px'
                      }}>Engineering Manager</span>
                    </div>
                  </div>

                  {/* Store Manager */}
                  <div style={{
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
                        src="/storemanager.jpeg"
                        alt="Store Manager"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="font-size: 48px; color: #ff4b4b;">👤</div>';
                        }}
                      />
                    </div>
                    <div style={{
                      fontSize: 'clamp(17px, 1.6vw, 24px)',
                      fontWeight: '800',
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      Mohammad Al Dossary<br />
                      <span style={{ 
                        fontSize: 'clamp(14px, 1.3vw, 18px)', 
                        fontWeight: '700',
                        color: '#ff4b4b',
                        textShadow: '0 0 15px rgba(255, 75, 75, 0.6), 0 1px 3px rgba(0, 0, 0, 0.3)',
                        letterSpacing: '0.8px'
                      }}>Store Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {amtActiveTab === 'tab3' && (
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
                  <div style={{
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
                      src="/Group 82.png"
                      alt="Kingdom of Saudi Arabia"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 83.png"
                      alt="Imam Abdulrahman Bin Faisal University"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 84.png"
                      alt="Ma'aden"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 85.png"
                      alt="King Faisal University"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 86.png"
                      alt="Marafiq"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
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
                  <div style={{
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
                      src="/Group 87.png"
                      alt="Saudi Arabia"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 90.png"
                      alt="Ministry of Health"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 91.png"
                      alt="Ministry of Finance"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 92.png"
                      alt="King Saud University"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
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
                      src="/Group 95.png"
                      alt="Aramco"
                      style={{
                        width: 'clamp(150px, 15vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(150px, 15vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                </div>
              </div>
            )}

            {amtActiveTab === 'tab4' && (
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
                  GALLERY
                </h1>
                
                {/* Gallery Videos Grid */}
                {(() => {
                  const galleryVideos = [
                    'https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ecx4u7.mp4',
                    'https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/Meet_Karim_Alma___AMT_Brand_Ambassadors_by_Zuccess_qhlkb7.mp4',
                    'https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/YTDown.com_YouTube_AMT-Professional-Video-Showcasing-Innova_Media_xjcmXF3MkWQ_001_1080p_wjihjd.mp4'
                  ];
                  
                  // Initialize refs array if needed
                  if (!amtGalleryVideoRefs.current || amtGalleryVideoRefs.current.length !== galleryVideos.length) {
                    amtGalleryVideoRefs.current = galleryVideos.map(() => ({ current: null }));
                  }
                  
                  return (
                    <>
                      {/* Videos Grid */}
                      <div style={{
                        width: '100%',
                        maxWidth: '1400px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: 'clamp(20px, 3vw, 30px)',
                        padding: 'clamp(10px, 2vh, 20px)',
                        flex: 1,
                        overflowY: 'auto',
                        boxSizing: 'border-box'
                      }}>
                        {galleryVideos.map((videoUrl, index) => (
                          <div
                            key={index}
                            onClick={async () => {
                              setAmtGalleryFullscreenVideo(videoUrl);
                              setAmtVideoPlaying(true);
                              // Request fullscreen after a small delay to ensure container is rendered
                              setTimeout(async () => {
                                try {
                                  const container = amtGalleryVideoRefs.current[index]?.current;
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
                              aspectRatio: '16/9',
                              position: 'relative',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                              background: '#000',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
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
                                height: 'auto',
                                width: '100%',
                                aspectRatio: '16 / 9',
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
                          ref={amtGalleryVideoRefs.current[index]}
                          style={{
                            position: 'fixed',
                            right: amtGalleryFullscreenVideo === videoUrl ? '0' : '-9999px',
                            top: amtGalleryFullscreenVideo === videoUrl ? '0' : '-9999px',
                            width: amtGalleryFullscreenVideo === videoUrl ? '100vw' : '0',
                            height: amtGalleryFullscreenVideo === videoUrl ? '100vh' : '0',
                            zIndex: amtGalleryFullscreenVideo === videoUrl ? 9999 : -1,
                            backgroundColor: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {amtGalleryFullscreenVideo === videoUrl && (
                            <video
                              key={`gallery-video-${index}-${amtGalleryFullscreenVideo}`}
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
                                closeVideo(() => setAmtGalleryFullscreenVideo(null), setAmtVideoPlaying);
                              }}
                              title={`Gallery Video ${index + 1}`}
                            />
                          )}
                          {amtGalleryFullscreenVideo === videoUrl && (
                            <button
                              onClick={() => {
                                closeVideo(() => setAmtGalleryFullscreenVideo(null), setAmtVideoPlaying);
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
                  );
                })()}
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
            Back
          </button>
        </div>
      )}

      {/* AMT QR Code Modal */}
      {showAMTQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAMTQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAMTQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page1"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="AMT QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* Alika QR Code Modal */}
      {showAlikaQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAlikaQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAlikaQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page13"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Alika QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* Gulf Dorrah QR Code Modal */}
      {showGulfDorrahQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGulfDorrahQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGulfDorrahQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page6"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Gulf Dorrah QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* GTA QR Code Modal */}
      {showGTAQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGTAQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGTAQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page7"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="GTA QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* AH Environmental QR Code Modal */}
      {showAHEnvironmentalQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAHEnvironmentalQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAHEnvironmentalQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page9"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="AH Environmental QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* Central Medicalcare QR Code Modal */}
      {showCentralMedicalcareQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowCentralMedicalcareQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCentralMedicalcareQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page8"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Central Medicalcare QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* RK QR Code Modal */}
      {showRKQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowRKQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowRKQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page10"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="RK QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* Antique QR Code Modal */}
      {showAntiqueQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAntiqueQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAntiqueQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page11"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Antique QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* TLCO QR Code Modal */}
      {showTLCOQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTLCOQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTLCOQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page4"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="TLCO QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
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
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            height: '100vh',
            padding: 'clamp(20px, 3vh, 30px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            paddingTop: 'clamp(60px, 8vh, 80px)',
            boxSizing: 'border-box'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10,
              flexShrink: 0
            }}>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab4' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab4' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                GALLERY
              </button>
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
                MAJOR CLIENTS
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
                OUR PARTNERS
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
                  OUR PARTNERS
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
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 'clamp(6px, 1.5vh, 12px)',
                boxSizing: 'border-box'
              }}>
                <h1 style={{
                  fontSize: 'clamp(16px, 1.8vw, 24px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: 'clamp(6px, 1vh, 10px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  flexShrink: 0
                }}>
                  MAJOR CLIENTS
                </h1>
                
                {/* Major Clients Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: 'clamp(12px, 1.2vw, 18px)',
                  width: 'min(94vw, 1380px)',
                  marginBottom: 'clamp(8px, 2vh, 16px)',
                  padding: 'clamp(8px, 1.2vw, 16px)',
                  justifyItems: 'center',
                  alignItems: 'center'
                }}>
                  {[
                    'client-logo-011677925020-removebg-preview.png',
                    'client-logo-021677925040-removebg-preview.png',
                    'client-logo-031677925052-removebg-preview.png',
                    'client-logo-051677925080-removebg-preview.png',
                    'client-logo-061677925092-removebg-preview.png',
                    'client-logo-071677925107-removebg-preview.png',
                    'client-logo-081677925121-removebg-preview.png',
                    'client-logo-091677925161-removebg-preview.png',
                    'client-logo-101677925175-removebg-preview.png',
                    'client-logo-111677925191-removebg-preview.png',
                    'client-logo-121677925204-removebg-preview.png',
                    'client-logo-131677925217-removebg-preview.png',
                    'client-logo-141677925235-removebg-preview.png',
                    'client-logo-151677925253-removebg-preview.png',
                    'client-logo-161677925271-removebg-preview.png',
                    'client-logo-171677925301-removebg-preview.png',
                    'client-logo-181677925314-removebg-preview.png',
                    'client-logo-191677925326-removebg-preview.png',
                    'client-logo-201677925344-removebg-preview.png',
                    'client-logo-211677925363-removebg-preview.png',
                    'client-logo-221677925375-removebg-preview.png',
                    'client-logo-231677925395-removebg-preview.png',
                    'client-logo-241677925410-removebg-preview.png',
                    'client-logo-251677925424-removebg-preview.png',
                    'client-logo-261677925437-removebg-preview.png',
                    'client-logo-271677925451-removebg-preview.png'
                  ].map((logoName, index) => (
                    <div
                      key={logoName}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 'clamp(6px, 0.7vw, 10px)',
                        background: 'rgba(0, 0, 0, 0.15)',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        minHeight: '120px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.06)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.15)';
                      }}
                    >
                      <img
                        src={`/gulfconsultmajerclients/${logoName}`}
                        alt={`Major client ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          maxWidth: '190px',
                          maxHeight: '120px',
                          objectFit: 'contain',
                          filter: 'brightness(1.05) contrast(1.05)'
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

            {gulfConsult2ActiveTab === 'tab4' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(5px, 1vh, 10px)'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2.2vw, 32px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: 'clamp(15px, 2vh, 30px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  GALLERY
                </h1>

                {/* Gulf Consult 2 Gallery Video (thumbnail that opens fullscreen) */}
                <div
                  onClick={() => setGulfConsult2GalleryPlaying(true)}
                  style={{
                    width: '100%',
                    maxWidth: '900px',
                    aspectRatio: '16/9',
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                    background: '#000',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  <video
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/q_auto,f_auto/Gulf_Consult_luuscu.mp4"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                      display: 'block'
                    }}
                    muted
                    playsInline
                    preload="metadata"
                    title="Gulf Consult Gallery Video"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(33, 150, 243, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10
                    }}
                  >
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
              </div>
            )}
          </div>

          {/* Gulf Consult 2 Gallery fullscreen video overlay */}
          {gulfConsult2GalleryPlaying && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 2100,
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <video
                src="https://res.cloudinary.com/dl2rqs0lo/video/upload/q_auto,f_auto/Gulf_Consult_luuscu.mp4"
                autoPlay
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  objectFit: 'contain'
                }}
                onEnded={() => {
                  setGulfConsult2GalleryPlaying(false);
                  setShowGulfConsult2LearnMore(false);
                }}
                title="Gulf Consult Gallery Video"
              />
              <button
                onClick={() => setGulfConsult2GalleryPlaying(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(33, 150, 243, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                }}
              >
                ✕
              </button>
            </div>
          )}

          <button
            onClick={() => setShowGulfConsult2LearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
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

      {/* Gulf Consult QR Code Modal */}
      {showGulfConsultQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGulfConsultQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGulfConsultQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page12"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Gulf Consult QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* GSG QR Code Modal */}
      {showGSGQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGSGQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGSGQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page5"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="GSG QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
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
                onClick={() => setGsgActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab4' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab4' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                GALLERY
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
                MAJOR CLIENTS
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
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {gsgActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                color: '#07373c'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partner Logos (moved from Major Clients) */}
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
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  MAJOR CLIENTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#07373c',
                  textAlign: 'center',
                  maxWidth: '900px'
                }}>
                  Our major clients span government agencies, leading industrial companies, and international firms who rely on GSG for precise subsurface investigations and environmental assessments.
                </p>
              </div>
            )}

            {gsgActiveTab === 'tab4' && (
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
                  GALLERY
                </h1>
                {/* Empty gallery content */}
              </div>
            )}
          </div>
          {/* Back button - text only */}
          <button
            onClick={() => setShowGSGLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#07373c',
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
                onClick={() => setGulfDorrahActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfDorrahActiveTab === 'tab1' ? '#ffffff' : '#33d18f',
                  background: gulfDorrahActiveTab === 'tab1' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
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
                  if (gulfDorrahActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfDorrahActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                GALLERY
              </button>
              <button
                onClick={() => setGulfDorrahActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfDorrahActiveTab === 'tab2' ? '#ffffff' : '#33d18f',
                  background: gulfDorrahActiveTab === 'tab2' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
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
                  if (gulfDorrahActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfDorrahActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                MAJOR CLIENTS
              </button>
              <button
                onClick={() => setGulfDorrahActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfDorrahActiveTab === 'tab3' ? '#ffffff' : '#33d18f',
                  background: gulfDorrahActiveTab === 'tab3' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
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
                  if (gulfDorrahActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfDorrahActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR TEAM
              </button>
              <button
                onClick={() => setGulfDorrahActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfDorrahActiveTab === 'tab4' ? '#ffffff' : '#33d18f',
                  background: gulfDorrahActiveTab === 'tab4' ? 'rgba(51, 209, 143, 0.9)' : 'rgba(255, 255, 255, 0.2)',
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
                  if (gulfDorrahActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(51, 209, 143, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfDorrahActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {gulfDorrahActiveTab === 'tab1' && (
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
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff',
                  textAlign: 'center',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  Gallery content will be displayed here.
                </p>
              </div>
            )}

            {gulfDorrahActiveTab === 'tab2' && (
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

            {gulfDorrahActiveTab === 'tab3' && (
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

            {gulfDorrahActiveTab === 'tab4' && (
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
            onClick={() => setShowGulfDorrahLearnMore(false)}
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

      {/* Central Medicalcare Learn More Modal */}
      {showCentralMedicalcareLearnMore && (
        <div 
          className="central-medicalcare-modal"
          style={{
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
            overflow: 'hidden'
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
                onClick={() => setCentralMedicalcareActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab4' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab4' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  if (centralMedicalcareActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                GALLERY
              </button>
              <button
                onClick={() => setCentralMedicalcareActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab2' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab2' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  if (centralMedicalcareActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                MAJOR CLIENTS
              </button>
              <button
                onClick={() => setCentralMedicalcareActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab3' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab3' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  if (centralMedicalcareActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                OUR TEAM
              </button>
              <button
                onClick={() => setCentralMedicalcareActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab1' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab1' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
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
                  if (centralMedicalcareActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {centralMedicalcareActiveTab === 'tab1' && (
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
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  OUR PARTNERS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare partners will be available here.
                </p>
              </div>
            )}

            {centralMedicalcareActiveTab === 'tab2' && (
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
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  MAJOR CLIENTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare major clients will be available here.
                </p>
              </div>
            )}

            {centralMedicalcareActiveTab === 'tab3' && (
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
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  OUR TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare team will be available here.
                </p>
              </div>
            )}

            {centralMedicalcareActiveTab === 'tab4' && (
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
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  GALLERY
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Gallery content for Central Medicalcare will be available here.
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowCentralMedicalcareLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: '#bfa874',
              padding: '12px 24px',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(191, 168, 116, 0.2)';
              e.currentTarget.style.color = '#bfa874';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#bfa874';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-label="Back"
          >
            Back
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
                onClick={() => setRkActiveTab('tab1')}
                style={{
                  padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: rkActiveTab === 'tab1' ? '#ffffff' : '#F4A460',
                  background: rkActiveTab === 'tab1' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #F4A460',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (rkActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (rkActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Gallery
              </button>
              <button
                onClick={() => setRkActiveTab('tab2')}
                style={{
                  padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: rkActiveTab === 'tab2' ? '#ffffff' : '#F4A460',
                  background: rkActiveTab === 'tab2' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #F4A460',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (rkActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (rkActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Major Clients
              </button>
              <button
                onClick={() => setRkActiveTab('tab3')}
                style={{
                  padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: rkActiveTab === 'tab3' ? '#ffffff' : '#F4A460',
                  background: rkActiveTab === 'tab3' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #F4A460',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (rkActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (rkActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our Team
              </button>
              <button
                onClick={() => setRkActiveTab('tab4')}
                style={{
                  padding: 'clamp(10px, 1.2vw, 14px) clamp(24px, 3vw, 32px)',
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  fontWeight: '700',
                  color: rkActiveTab === 'tab4' ? '#ffffff' : '#F4A460',
                  background: rkActiveTab === 'tab4' ? '#F4A460' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #F4A460',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (rkActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(244, 164, 96, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (rkActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our Partners
              </button>
            </div>
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
            Back
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
          backgroundColor: ahEnvironmentalActiveTab === 'tab2' ? '#ffffff' : '#283152',
          backgroundImage: ahEnvironmentalActiveTab === 'tab2' ? 'none' : (ahEnvironmentalActiveTab === 'tab4' ? 'url(/bgourproject.png)' : 'url(/bgforah.png)'),
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: ahEnvironmentalActiveTab === 'tab2' ? 'hidden' : 'auto',
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
                GALLERY
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
                MAJOR CLIENTS
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
                Our TEAM
              </button>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab4' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab4' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
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
                  if (ahEnvironmentalActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab4') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                OUR PARTNERS
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
                  GALLERY
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff',
                  textAlign: 'center',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  Gallery content will be displayed here.
                </p>
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
                backgroundColor: 'transparent',
                minHeight: '600px',
                overflow: 'hidden'
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
                  MAJOR CLIENTS
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

            {ahEnvironmentalActiveTab === 'tab3' && (
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
              </div>
            )}

            {ahEnvironmentalActiveTab === 'tab4' && (
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
                   OUR PARTNERS
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
          {/* Back button - text only */}
          <button
            onClick={() => setShowAHEnvironmentalLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: ahEnvironmentalActiveTab === 'tab2' ? '#283152' : 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: ahEnvironmentalActiveTab === 'tab2' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'
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
          backgroundImage: 'url(/idcbg.png)',
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
            padding: 'clamp(15px, 2vh, 25px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#0b2239',
            paddingTop: 'clamp(20px, 3vh, 35px)'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: 'clamp(20px, 2vh, 30px)',
              color: '#0b6fbf',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              IDC CONTRACTING COMPANY
            </h1>
            
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: 'clamp(10px, 1.5vh, 15px)',
              zIndex: 10
            }}>
              <button
                onClick={() => setIdcActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: idcActiveTab === 'tab1' ? '#ffffff' : '#0b6fbf',
                  background: idcActiveTab === 'tab1' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #0b6fbf',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (idcActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (idcActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                GALLERY
              </button>
              <button
                onClick={() => setIdcActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: idcActiveTab === 'tab2' ? '#ffffff' : '#0b6fbf',
                  background: idcActiveTab === 'tab2' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #0b6fbf',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (idcActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (idcActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                MAJOR CLIENTS
              </button>
              <button
                onClick={() => setIdcActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: idcActiveTab === 'tab3' ? '#ffffff' : '#0b6fbf',
                  background: idcActiveTab === 'tab3' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #0b6fbf',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (idcActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (idcActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR TEAM
              </button>
              <button
                onClick={() => setIdcActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: idcActiveTab === 'tab4' ? '#ffffff' : '#0b6fbf',
                  background: idcActiveTab === 'tab4' ? '#0b6fbf' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #0b6fbf',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (idcActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(11, 111, 191, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (idcActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR PARNTERS
              </button>
            </div>

            {/* Tab Content */}
            {idcActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1536px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 1.2vh, 15px)',
                minHeight: '50vh'
              }}>
                {/* Empty tab content */}
              </div>
            )}

            {idcActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1536px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 1.2vh, 15px)',
                minHeight: '50vh'
              }}>
                {/* Empty tab content */}
              </div>
            )}

            {idcActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1536px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 1.2vh, 15px)',
                minHeight: '50vh'
              }}>
                {/* Empty tab content */}
              </div>
            )}

            {idcActiveTab === 'tab4' && (
              <div style={{
                width: '100%',
                maxWidth: '1536px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 1.2vh, 15px)',
                minHeight: '50vh'
              }}>
                {/* Empty tab content */}
              </div>
            )}
          </div>
          {/* IDC Back button - text only */}
          <button
            onClick={() => setShowIDCLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#0b2239',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
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

      {/* IDC QR Code Modal */}
      {showIDCQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowIDCQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowIDCQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
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
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page2"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="IDC QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
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
          backgroundImage: 'url(/GTA-bg4.png)',
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
                onClick={() => setGtaActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gtaActiveTab === 'tab1' ? '#ffffff' : '#dc2626',
                  background: gtaActiveTab === 'tab1' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(220, 38, 38, 0.8)',
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
                  if (gtaActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gtaActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                GALLERY
              </button>
              <button
                onClick={() => setGtaActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gtaActiveTab === 'tab2' ? '#ffffff' : '#dc2626',
                  background: gtaActiveTab === 'tab2' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(220, 38, 38, 0.8)',
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
                  if (gtaActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gtaActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                MAJOR CLIENTS
              </button>
              <button
                onClick={() => setGtaActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gtaActiveTab === 'tab3' ? '#ffffff' : '#dc2626',
                  background: gtaActiveTab === 'tab3' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(220, 38, 38, 0.8)',
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
                  if (gtaActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gtaActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR TEAM
              </button>
              <button
                onClick={() => setGtaActiveTab('tab4')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gtaActiveTab === 'tab4' ? '#ffffff' : '#dc2626',
                  background: gtaActiveTab === 'tab4' ? 'rgba(220, 38, 38, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(220, 38, 38, 0.8)',
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
                  if (gtaActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gtaActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {gtaActiveTab === 'tab1' && (
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
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  GALLERY
                </h2>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#000000',
                  textAlign: 'center'
                }}>
                  Gallery content will be displayed here.
                </p>
              </div>
            )}

            {gtaActiveTab === 'tab2' && (
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
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  MAJOR CLIENTS
                </h2>

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
                    'Audi-145x75-removebg-preview.png',
                    'Bentley-145x75-removebg-preview (1).png',
                    'BMW-145x75-removebg-preview.png',
                    'Ferrari-145x75-removebg-preview.png',
                    'Land-Rover-145x75-removebg-preview.png',
                    'Maserati-145x75-removebg-preview.png',
                    'Maybach-145x75-removebg-preview.png',
                    'Mercedes-145x75-removebg-preview.png',
                    'Mini-145x75__1_-removebg-preview.png',
                    'Porsche-145x75-removebg-preview.png',
                    'Rolls-Royce-1-145x75-removebg-preview.png',
                    'VW-145x75-removebg-preview.png'
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
                        src={`/gtamajorclients/${logoName}`}
                        alt={`GTA major client ${index + 1}`}
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

            {gtaActiveTab === 'tab3' && (
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
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR TEAM
                </h2>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#000000',
                  textAlign: 'center'
                }}>
                  Our team information will be displayed here.
                </p>
              </div>
            )}

            {gtaActiveTab === 'tab4' && (
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
                  color: '#dc2626',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h2>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#000000',
                  textAlign: 'center'
                }}>
                  Our partners information will be displayed here.
                </p>
              </div>
            )}
          </div>
          {/* GTA Back button - text only */}
          <button
            onClick={() => setShowGTALearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#b91c1c',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
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
    </div>
  );
}
