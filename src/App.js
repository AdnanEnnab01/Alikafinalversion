import React, { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPartners, setShowPartners] = useState(false);
  const [activeTab, setActiveTab] = useState('partners'); // 'partners', 'team', 'project'
  const [showGulfConsultLearnMore, setShowGulfConsultLearnMore] = useState(false);
  const [showGulfConsultArchQRModal, setShowGulfConsultArchQRModal] = useState(false);
  const [gulfConsultActiveTab, setGulfConsultActiveTab] = useState('tab1'); // 'tab1', 'tab2', 'tab3'
  const [showAntiqueLearnMore, setShowAntiqueLearnMore] = useState(false);
  const [showAntiqueQRModal, setShowAntiqueQRModal] = useState(false);
  const [antiqueActiveTab, setAntiqueActiveTab] = useState('tab3'); // 'tab1', 'tab2', 'tab3'
  const [showAMTLearnMore, setShowAMTLearnMore] = useState(false);
  const [amtActiveTab, setAmtActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [amtGalleryVideoIndex, setAmtGalleryVideoIndex] = useState(0); // Index for gallery videos
  const [amtGalleryFullscreenVideo, setAmtGalleryFullscreenVideo] = useState(null); // Fullscreen video URL
  const [showAMTQRModal, setShowAMTQRModal] = useState(false);
  const [showGulfConsult2LearnMore, setShowGulfConsult2LearnMore] = useState(false);
  const [gulfConsult2ActiveTab, setGulfConsult2ActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfConsultQRModal, setShowGulfConsultQRModal] = useState(false);
  const [showGSGLearnMore, setShowGSGLearnMore] = useState(false);
  const [showGSGQRModal, setShowGSGQRModal] = useState(false);
  const [gsgActiveTab, setGsgActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfDorrahLearnMore, setShowGulfDorrahLearnMore] = useState(false);
  const [showGulfDorrahQRModal, setShowGulfDorrahQRModal] = useState(false);
  const [showCentralMedicalcareLearnMore, setShowCentralMedicalcareLearnMore] = useState(false);
  const [showCentralMedicalcareQRModal, setShowCentralMedicalcareQRModal] = useState(false);
  const [centralMedicalcareActiveTab, setCentralMedicalcareActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Partners, 'tab3' = Team
  const [showRKLearnMore, setShowRKLearnMore] = useState(false);
  const [showRKQRModal, setShowRKQRModal] = useState(false);
  const [showAHEnvironmentalLearnMore, setShowAHEnvironmentalLearnMore] = useState(false);
  const [showAHEnvironmentalQRModal, setShowAHEnvironmentalQRModal] = useState(false);
  const [ahEnvironmentalActiveTab, setAhEnvironmentalActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Team, 'tab3' = Projects
  const [showIDCLearnMore, setShowIDCLearnMore] = useState(false);
  const [showIDCQRModal, setShowIDCQRModal] = useState(false);
  const [showGTALearnMore, setShowGTALearnMore] = useState(false);
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
      {!homeSoundEnabled && selectedCompany === null && (
        <button
          type="button"
          className="home-sound-btn"
          onClick={() => {
            setHomeSoundEnabled(true);
            setHomeReveal(true);
            setHomeReturning(false);
            setShowChairmanMessage(false);
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
      {!homeSoundEnabled && selectedCompany === null && (
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
      {!homeSoundEnabled && selectedCompany === null && (
        <button
          type="button"
          className={`home-about-btn ${showAboutUs ? 'active' : ''}`}
          onClick={() => {
            if (showAboutUs) {
              setShowAboutUs(false);
            } else {
              setShowAboutUs(true);
              setAboutUsTab('who');
              setShowChairmanMessage(false);
            }
            setHomeReveal(false);
            setHomeReturning(false);
          }}
          aria-label="About us"
        >
          About us
        </button>
      )}

      {/* About us overlay */}
      {showAboutUs && (
        <div
          className="about-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="About us"
          onClick={() => setShowAboutUs(false)}
        >
          <div className="about-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="about-close"
              onClick={() => setShowAboutUs(false)}
              aria-label="Back to Alika"
            >
              Back to Alika
            </button>

            <div className="about-header">
              <div className="about-title">About us</div>
              <div className="about-tabs" role="tablist" aria-label="About us tabs">
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutUsTab === 'who'}
                  className={`about-tab${aboutUsTab === 'who' ? ' is-active' : ''}`}
                  onClick={() => setAboutUsTab('who')}
                >
                  Who We Are
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutUsTab === 'values'}
                  className={`about-tab${aboutUsTab === 'values' ? ' is-active' : ''}`}
                  onClick={() => setAboutUsTab('values')}
                >
                  Our Values
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutUsTab === 'vision'}
                  className={`about-tab${aboutUsTab === 'vision' ? ' is-active' : ''}`}
                  onClick={() => setAboutUsTab('vision')}
                >
                  Our Vision
                </button>
              </div>
            </div>

            <div className="about-body">
              {aboutUsTab === 'who' && (
                <div className="about-who">
                  <div className="about-hero-wrapper">
                    <img className="about-hero" src="/whoweare.jpg" alt="Who we are" />
                  </div>
                  <div className="about-copy">
                    <div className="about-h1">Who We Are</div>
                    <div className="about-text">
                      We at ALIKA Holding Group, a leading Saudi investment group, we manage and grow our assets through a diversified portfolio that spans strategic sectors such as professional services, technology and communications, healthcare, and real estate development. We believe that smart investment is the true driver of sustainable growth; therefore, we rely on our innovative vision to seize promising opportunities and build long-term investments that enhance our operational efficiency and increase the value of our subsidiaries. Through this approach, we continue to strengthen our competitive position and create lasting value for our shareholders and partners.
                    </div>
                  </div>
                </div>
              )}

              {aboutUsTab === 'values' && (
                <div className="about-who">
                  <div className="about-hero-wrapper">
                    <img className="about-hero" src="/ourvalues.jpg" alt="Our values" />
                  </div>
                  <div className="about-copy">
                    <div className="about-h1">Our Values</div>
                    <div className="about-text">
                      At ALIKA Holding Group, we believe that our success is built on a solid foundation of values that guide every aspect of our work. Integrity and transparency represent our unwavering commitment in all dealings, while the spirit of teamwork defines our professional and inspiring work environment, fostering performance, quality, and innovation. We place quality and continuous improvement at the heart of our operations, recognizing that development and innovation are the path to sustainable success. Equally, we prioritize sustainability in our environmental and social impact, alongside our commitment to empowering national talent as the true driver of growth and progress.
                    </div>
                  </div>
                </div>
              )}

              {aboutUsTab === 'vision' && (
                <div className="about-who">
                  <div className="about-hero-wrapper">
                    <img
                      className="about-hero"
                      src="/ourvission.jpg"
                      alt="Our vision"
                    />
                  </div>
                  <div className="about-copy">
                    <div className="about-h1">Our Vision</div>
                    <div className="about-text vision-heading">
                      Strategic Investments for Sustainable Growth
                    </div>
                    <div className="about-text">
                      We manage a diversified portfolio of investment assets guided by well-defined strategies
                      designed to ensure sustainable growth and continuity. Our approach focuses on creating
                      long-term value that strengthens the interests of our partners and supports their future
                      ambitions.
                    </div>
                  </div>
                </div>
              )}
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
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ecx4u7.mp4"
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
                    fontSize: 'var(--amt-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 24px)',
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
                    fontSize: 'var(--amt-text-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(20px, 3vh, 32px)',
                    color: '#2d2d2d',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Advanced Micro Technologies (AMT) is a Saudi company providing IT and telecommunications services, including data center design, cybersecurity, and low current systems such as surveillance and alarms.
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
                      fontSize: 'var(--amt-info-size, clamp(13px, 1.4vw, 20px))',
                      lineHeight: '1.8',
                    color: '#1a1a1a',
                      flex: 0.9,
                      padding: 'clamp(8px, 1.2vh, 12px) clamp(12px, 1.6vw, 16px)',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
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
                    <span>Eyad Matar</span>
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
                    <span>050 582 7033</span>
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
                        eyad.matar@amt-arabia.net
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Website:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        www.amt-arabia.net
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
                    <img
                      src="/amt-internal.jpg"
                      alt="AMT internal"
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

                {/* Bottom row: Learn More + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
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
                      textTransform: 'uppercase'
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
                  
                  {/* QR Code at bottom, opposite Learn More */}
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
                  fontSize: 'var(--idc-title-size, clamp(26px, 3.2vw, 40px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(10px, 1.5vh, 18px)',
                  letterSpacing: '1.5px',
                  color: '#0b6fbf',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  IDC CONTRACTING COMPANY
                </h1>

                <p
                  style={{
                    fontSize: 'var(--idc-text-size, clamp(13px, 1.35vw, 17px))',
                    lineHeight: '1.9',
                    marginBottom: 'clamp(12px, 1.8vh, 20px)',
                    color: '#0b2239',
                    animation: 'fadeInUp 0.8s ease-out 0.4s both'
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
                      fontSize: 'var(--idc-info-size, clamp(13px, 1.35vw, 17px))',
                      lineHeight: '1.8',
                      color: '#0b2239',
                      flex: 1,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'clamp(12px, 2vw, 20px)',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>
                      <strong style={{ fontWeight: 800 }}>Managers:</strong> Bassam Al Masri.
                    </span>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      <strong style={{ fontWeight: 800 }}>Mobile:</strong> 050 833 8830
                    </span>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      <strong style={{ fontWeight: 800 }}>Email:</strong> bassam.almasri@idc-arabia.com
                    </span>
                    <span style={{ whiteSpace: 'nowrap' }}>
                      <strong style={{ fontWeight: 800 }}>Website:</strong> www.idc-arabia.com
                    </span>
                  </div>

                  {/* IDC Internal Image with Play Video overlay (next to info, height matches contact info) */}
                  <div
                    style={{
                      position: 'relative',
                      flex: '0 0 var(--idc-video-width, clamp(260px, 26vw, 400px))',
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

                {/* Bottom row: Learn More + QR Code (mirrors AMT layout, video is above) */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(16px, 2.2vh, 24px)'
                  }}
                >
                <button
                  onClick={() => setShowIDCLearnMore(true)}
                  style={{
                      padding:
                        'var(--idc-button-padding, clamp(14px, 1.6vw, 22px) clamp(32px, 3.2vw, 48px))',
                    fontSize: 'var(--idc-button-font, clamp(15px, 1.6vw, 22px))',
                      fontWeight: 700,
                    color: '#ffffff',
                    background: '#0b6fbf',
                    border: 'none',
                      borderRadius: '999px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(11, 111, 191, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow =
                        '0 6px 20px rgba(11, 111, 191, 0.5)';
                    e.currentTarget.style.background = '#0d7fd4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 15px rgba(11, 111, 191, 0.4)';
                    e.currentTarget.style.background = '#0b6fbf';
                  }}
                >
                  Learn More
                </button>

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
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
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
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Website:</strong>
                      <a
                        href="https://acwm-sa.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: '#f9fafb',
                          textDecoration: 'underline',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        acwm-sa.com
                      </a>
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

                {/* Bottom row: Learn More + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
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
                      textTransform: 'uppercase'
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
                  
                  {/* QR Code at bottom, opposite Learn More */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
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
                  padding: 'clamp(32px, 4vw, 52px) clamp(32px, 4vw, 52px) clamp(40px, 5vw, 64px)',
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
                    fontSize: 'var(--central-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 24px)',
                    letterSpacing: '1.6px',
                    color: '#bfa874',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  CENTRAL MEDICALCARE
                </h1>

                <p
                  style={{
                    fontSize: 'var(--central-text-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(20px, 3vh, 32px)',
                    color: '#f9fafb',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
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
                      fontSize: 'var(--central-info-size, clamp(13px, 1.4vw, 20px))',
                      lineHeight: '1.8',
                      color: '#ffffff',
                      flex: '1 1 auto',
                      minWidth: '280px',
                      padding: 'clamp(12px, 1.6vh, 18px) clamp(16px, 2vw, 24px)',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.45)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
                      overflow: 'visible'
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
                      <span>Dr. Atif Idress.</span>
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
                      <span>050 471 5053</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(6px, 1vh, 10px)'
                      }}
                    >
                      <strong style={{ minWidth: '70px', fontWeight: 800, flexShrink: 0 }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          flex: '1 1 auto',
                          minWidth: 0,
                          overflow: 'visible'
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
                      <strong style={{ minWidth: '75px', fontWeight: 800, flexShrink: 0 }}>Website:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          flex: '1 1 auto',
                          minWidth: 0,
                          overflow: 'visible'
                        }}
                      >
                        www.centralmedicalcare.com
                      </span>
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

                {/* Bottom row: Learn More + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
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
                      textTransform: 'uppercase'
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
                  
                  {/* QR Code at bottom, opposite Learn More */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
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
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
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
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Website:</strong>
                      <a
                        href="https://www.gc-eng.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: '#16348a',
                          textDecoration: 'underline',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        gc-eng.com
                      </a>
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

                {/* Bottom row: Learn More + QR Code */}
                <div
                  className="gulf-consult-learn-more-container"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
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
                      textTransform: 'uppercase'
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
                  
                  {/* QR Code at bottom, opposite Learn More */}
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
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11
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
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
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
                      <strong style={{ minWidth: '110px', fontWeight: 800 }}>Website:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        https://dorrah.topacademy.website/#
                      </span>
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

                {/* Bottom row: Learn More + QR Code */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(8px, 1.6vh, 16px)',
                    paddingBottom: 'clamp(10px, 2vh, 20px)',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                >
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
                      textTransform: 'uppercase'
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
                  
                  {/* QR Code at bottom, opposite Learn More */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
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
                            minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                            minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
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

              {/* GTA Content - Right Side */}
              <div
                className="gta-content"
                style={{
                  position: 'fixed',
                  top: 'clamp(55%, 55vh, 60%)',
                  right: 'clamp(30px, 3vw, 60px)',
                  transform: 'translateY(-50%)',
                  maxWidth: 'clamp(400px, 42vw, 550px)',
                  height: 'auto',
                  width: 'clamp(400px, 42vw, 550px)',
                  color: '#000000',
                  direction: 'ltr',
                  textAlign: 'left',
                  zIndex: 11,
                  overflow: 'visible',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingTop: 'clamp(50px, 6vh, 100px)',
                  paddingBottom: 'clamp(50px, 6vh, 100px)'
                }}
              >
                {/* White Content Box with Red Borders */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: 'clamp(20px, 2.5vw, 35px)',
                    borderLeft: '4px solid #dc2626',
                    borderBottom: '4px solid #dc2626',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                    animation: 'fadeIn 0.8s ease-in-out 0.2s both',
                    minHeight: 'calc(100vh - clamp(100px, 12vh, 200px))',
                    width: '100%',
                    maxHeight: 'calc(100vh - clamp(100px, 12vh, 200px))',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* GTA Logo inside the box */}
                  <div style={{
                    marginBottom: 'clamp(8px, 0.8vh, 12px)',
                    animation: 'fadeIn 0.8s ease-in-out 0.1s both',
                    flexShrink: 0
                  }}>
                    <img
                      src={selectedCompany.logo}
                      alt={selectedCompany.name}
                      style={{
                        maxWidth: 'clamp(90px, 9vw, 130px)',
                        maxHeight: 'clamp(45px, 4.5vh, 65px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 15px rgba(220, 38, 38, 0.4))'
                      }}
                    />
                  </div>

                  <h1
                    style={{
                      fontSize: 'clamp(18px, 1.8vw, 26px)',
                      fontWeight: '900',
                      marginBottom: 'clamp(8px, 0.8vh, 12px)',
                      letterSpacing: '0.8px',
                      color: '#dc2626',
                      textTransform: 'uppercase',
                      animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 300ms both',
                      lineHeight: '1.2',
                      flexShrink: 0
                    }}
                  >
                    GERMAN TECHNOLOGY AUTO
                  </h1>

                  <p
                    style={{
                      fontSize: 'clamp(11px, 1.1vw, 15px)',
                      lineHeight: '1.5',
                      marginBottom: 'clamp(10px, 1vh, 14px)',
                      color: '#1e293b',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 400ms both',
                      flexShrink: 0
                    }}
                  >
                    German Technology Auto Services Company is one of the leading maintenance companies in the Eastern Region, which includes German car services under one roof. We promise to give you the best service at competitive prices. We warranty all our work. Our company strives on the best customer service we can offer.
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(6px, 0.6vh, 10px)',
                      marginBottom: 'clamp(10px, 1vh, 14px)',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both',
                      flexShrink: 0
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'clamp(10px, 1vw, 13px)',
                        color: '#1e293b'
                      }}
                    >
                      <strong style={{ minWidth: '65px', fontWeight: 800, color: '#000000' }}>Managers:</strong>
                      <span>Mr. Tamam Hussain.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'clamp(10px, 1vw, 13px)',
                        color: '#1e293b'
                      }}
                    >
                      <strong style={{ minWidth: '65px', fontWeight: 800, color: '#000000' }}>Mobile:</strong>
                      <span>053 240 4666</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'clamp(10px, 1vw, 13px)',
                        color: '#1e293b'
                      }}
                    >
                      <strong style={{ minWidth: '65px', fontWeight: 800, color: '#000000' }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        tammam.hussein@yahoo.com
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'clamp(10px, 1vw, 13px)',
                        color: '#1e293b',
                        marginBottom: 'clamp(4px, 0.4vh, 8px)'
                      }}
                    >
                      <strong style={{ minWidth: '65px', fontWeight: 800, color: '#000000' }}>Website:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        https://www.gtaksa.com
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 'clamp(12px, 1.5vw, 20px)',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
                      flexShrink: 0,
                      marginTop: 'clamp(20px, 2vh, 30px)'
                    }}
                  >
                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowGTALearnMore(true)}
                      style={{
                        padding: 'clamp(8px, 0.9vw, 12px) clamp(16px, 1.8vw, 24px)',
                        fontSize: 'clamp(11px, 1.1vw, 14px)',
                        fontWeight: '700',
                        color: '#ffffff',
                        background: '#1f2937',
                        border: '2px solid #dc2626',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'block',
                        whiteSpace: 'nowrap'
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
                          maxWidth: 'clamp(60px, 7vw, 90px)',
                          maxHeight: 'clamp(60px, 7vw, 90px)',
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
                    fontSize: 'var(--tlco-title-size, clamp(26px, 3.5vw, 44px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 20px)',
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
                    fontSize: 'var(--tlco-text-size, clamp(13px, 1.5vw, 20px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(14px, 2vh, 22px)',
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
                    gap: 'clamp(20px, 4vw, 36px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  {/* Contact Info (Left Column) */}
                  <div
                    style={{
                      fontSize: 'var(--tlco-info-size, clamp(13px, 1.5vw, 20px))',
                      lineHeight: '2',
                      color: '#0b3b25',
                      flex: '1'
                    }}
                  >
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800
                        }}
                      >
                        Managers:
                      </strong>
                      <span>Mr.elyas Othman.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800
                        }}
                      >
                        Mobile:
                      </strong>
                      <span>053 927 5739</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800
                        }}
                      >
                        Email:
                      </strong>
                      <span>G.M@etlco.com.sa</span>
                    </div>
                    <div>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800
                        }}
                      >
                        Website:
                      </strong>
                      <span>https://www.etlco.com.sa</span>
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

                {/* Bottom row: Learn More + QR Code (similar to IDC layout) */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2vw, 28px)',
                    marginTop: 'clamp(12px, 1.6vh, 20px)'
                  }}
                >
                  <button
                    onClick={() => setShowPartners(true)}
                    style={{
                      padding:
                        'var(--tlco-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                      fontSize: 'var(--tlco-button-font, clamp(16px, 1.8vw, 22px))',
                      fontWeight: 700,
                      color: '#ffffff',
                      background: '#008c4a',
                      border: 'none',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0, 140, 74, 0.3)',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow =
                        '0 6px 20px rgba(0, 140, 74, 0.4)';
                      e.currentTarget.style.background = '#00a055';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow =
                        '0 4px 15px rgba(0, 140, 74, 0.3)';
                      e.currentTarget.style.background = '#008c4a';
                    }}
                  >
                    Learn More
                  </button>

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
                  overflow: 'hidden',
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
                      marginBottom: 'clamp(12px, 1.5vh, 18px)',
                      color: '#07373c',
                      animation: 'fadeInUp 0.8s ease-out 0.4s both'
                    }}
                  >
                    Is a leading provider of geophysical, geological, environmental, and engineering solutions across Saudi Arabia and the GCC region. With a dedicated team of scientists, engineers, and experts, we specialize in delivering advanced, reliable, and innovative services that support site assessments, resource exploration, and real-time monitoring across various industries.
                  </p>
                  <p
                    style={{
                      fontSize: 'clamp(15px, 1.5vw, 19px)',
                      lineHeight: '1.7',
                      marginBottom: 'clamp(14px, 2vh, 20px)',
                      color: '#07373c',
                      fontWeight: '600',
                      animation: 'fadeInUp 0.8s ease-out 0.5s both'
                    }}
                  >
                    Integrated Solutions for Your Projects, Backed by Decades of Expertise
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
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '4px'
                    }}>
                      <strong style={{ fontWeight: '800', flexShrink: 0 }}>Website:</strong>
                      <a
                        href="https://www.gulfconsult.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: '#07373c', 
                          textDecoration: 'underline', 
                          fontWeight: 700
                        }}
                      >
                        www.gulfconsult.com
                      </a>
                    </div>

                    {/* Learn More Button - Under Website */}
                    <button
                      onClick={() => setShowGSGLearnMore(true)}
                      style={{
                        marginTop: 'clamp(8px, 1vh, 12px)',
                        padding: 'clamp(14px, 1.6vw, 20px) clamp(32px, 3.2vw, 44px)',
                        fontSize: 'clamp(15px, 1.6vw, 20px)',
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
                        animation: 'fadeInUp 0.8s ease-out 0.8s both',
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
                    fontSize: 'clamp(22px, 2.8vw, 36px)',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 1.5vh, 18px)',
                    letterSpacing: '1.2px',
                    color: '#F4A460',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.2'
                  }}
                >
                  AL RAKAEZ CONSTRUCTION
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(12px, 1.3vw, 18px)',
                    lineHeight: '1.6',
                    marginBottom: 'clamp(16px, 2vh, 24px)',
                    color: '#1e293b',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both',
                    paddingRight: 'clamp(8px, 1vw, 12px)'
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
                      fontSize: 'clamp(11px, 1.1vw, 16px)',
                      lineHeight: '1.7',
                      color: '#1e293b',
                      flex: '1 1 auto',
                      padding: '0',
                      background: 'transparent',
                      boxShadow: 'none',
                      minWidth: 0
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(8px, 1vh, 12px)'
                      }}
                    >
                      <strong style={{ minWidth: '85px', fontWeight: 800, flexShrink: 0 }}>Managers:</strong>
                      <span>Jaffar Al Sayori.</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(8px, 1vh, 12px)'
                      }}
                    >
                      <strong style={{ minWidth: '85px', fontWeight: 800, flexShrink: 0 }}>Mobile:</strong>
                      <span>054 989 5927</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(8px, 1vh, 12px)'
                      }}
                    >
                      <strong style={{ minWidth: '85px', fontWeight: 800, flexShrink: 0 }}>Email:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        jafar.syouri@rk-arabia.com
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: 'clamp(12px, 1.5vh, 18px)'
                      }}
                    >
                      <strong style={{ minWidth: '85px', fontWeight: 800, flexShrink: 0 }}>Website:</strong>
                      <span
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        https://www.rk-arabia.com
                      </span>
                    </div>
                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowRKLearnMore(true)}
                      style={{
                        padding: 'clamp(8px, 1vw, 12px) clamp(16px, 2vw, 24px)',
                        fontSize: 'clamp(11px, 1.1vw, 16px)',
                        fontWeight: '700',
                        color: '#F4A460',
                        background: 'rgba(0, 0, 0, 0.75)',
                        border: '2px solid #F4A460',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both',
                        display: 'block',
                        alignItems: 'center',
                        gap: '10px',
                        backdropFilter: 'blur(6px)',
                        marginTop: 'clamp(4px, 0.6vh, 8px)',
                        position: 'relative',
                        zIndex: 15,
                        visibility: 'visible',
                        opacity: 1,
                        width: 'auto',
                        minWidth: 'fit-content'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)';
                      }}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* RK Internal Image */}
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
                    {/* QR Code below the image */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'transparent',
                        padding: '0',
                        borderRadius: '0',
                        boxShadow: 'none',
                        alignSelf: 'center'
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
                  maxWidth: 'var(--ah-content-max-width, clamp(520px, 46vw, 1000px))',
                  maxHeight: '80vh',
                  zIndex: 12,
                  color: '#0f172a',
                  direction: 'ltr',
                  textAlign: 'left',
                  padding: 'clamp(20px, 3vw, 48px)',
                  overflow: 'hidden',
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
                    fontSize: 'var(--ah-title-size, clamp(26px, 3.5vw, 44px))',
                    fontWeight: '900',
                    marginBottom: '24px',
                    letterSpacing: '1.4px',
                    color: '#0f172a',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.2'
                  }}
                >
                  AH ENVIRONMENTAL CONSULTING
                </h1>

                <p
                  style={{
                    fontSize: 'var(--ah-text-size, clamp(13px, 1.5vw, 20px))',
                    lineHeight: '1.8',
                    marginBottom: '28px',
                    color: '#1e293b',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  AHEC is a leading environmental engineering and consulting firm established in 2010, providing sustainable and compliant solutions across multiple industries Certified Category A by NCEC and accredited by the Royal Commission for Jubail and Yanbu, AHEC delivers integrated environmental services to government and industrial clients, supporting sustainability, safety, and regulatory compliance
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(20px, 4vw, 50px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  {/* Contact Info (Left Column) */}
                  <div
                    style={{
                      fontSize: 'var(--ah-info-size, clamp(13px, 1.5vw, 32px))',
                    lineHeight: '1.8',
                    color: '#1e293b',
                    flex: '1'
                  }}
                  >
                    <div style={{ marginBottom: '18px' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800,
                          color: '#0f172a'
                        }}
                      >
                        Managers:
                      </strong>
                      <span>Ennacer Besghaier.</span>
                    </div>
                    <div style={{ marginBottom: '18px' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800,
                          color: '#0f172a'
                        }}
                      >
                        Mobile:
                      </strong>
                      <span>054 292 9702</span>
                    </div>
                    <div style={{ marginBottom: '18px' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800,
                          color: '#0f172a'
                        }}
                      >
                        Email:
                      </strong>
                      <span>g.m@ahenviro.com</span>
                    </div>
                    <div style={{ marginBottom: '0px' }}>
                      <strong
                        style={{
                          display: 'inline-block',
                          width: 'clamp(110px, 11vw, 150px)',
                          fontWeight: 800,
                          color: '#0f172a'
                        }}
                      >
                        Website:
                      </strong>
                      <span>https://www.ahenviro.com</span>
                    </div>
                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowAHEnvironmentalLearnMore(true)}
                    style={{
                      marginTop: '4px',
                      marginBottom: '0px',
                      padding: 'clamp(8px, 1vw, 20px) clamp(16px, 2vw, 40px)',
                      fontSize: 'clamp(11px, 1.2vw, 24px)',
                        fontWeight: '600',
                        color: '#040075',
                        background: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.3px',
                        textTransform: 'uppercase',
                        animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both',
                        position: 'relative',
                        zIndex: 13,
                        display: 'inline-block',
                        boxSizing: 'border-box'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                        e.currentTarget.style.background = '#f5f5f5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                        e.currentTarget.style.background = '#ffffff';
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
                  fontSize: 'var(--gulf-title-size, clamp(32px, 4vw, 56px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(12px, 2vh, 24px)',
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GULF CONSULT
                </h1>

                <p style={{
                  fontSize: 'var(--gulf-text-size, clamp(14px, 1.6vw, 22px))',
                  lineHeight: '1.75',
                  marginBottom: 'clamp(20px, 3vh, 36px)',
                  color: '#ffffff',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  is an independent multidisciplinary consultancy firm established in 1981 with over 42 years of experience providing high-quality engineering and environmental services across the Gulf region, particularly in the Kingdom of Saudi Arabia.
                </p>

                {/* Contact Information - Lowered down */}
                <div style={{
                  fontSize: 'var(--gulf-info-size, clamp(15px, 1.7vw, 24px))',
                  lineHeight: '2',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 1.5vh, 18px)',
                  marginTop: 'clamp(40px, 5vh, 60px)',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '4px'
                  }}>
                    <strong style={{ fontWeight: '800', flexShrink: 0 }}>Managers:</strong>
                    <span>Eng. Faisal Sir AlHarbi - CEO, and Eng. Rabah Yehya - GM.</span>
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
                    gap: 'clamp(4px, 0.5vh, 8px)'
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
                      marginLeft: 'clamp(80px, 8vw, 120px)'
                    }}>
                      <span>rabah@gulfconsult.com</span>
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '4px'
                  }}>
                    <strong style={{ fontWeight: '800', flexShrink: 0 }}>Website:</strong>
                    <a
                      href="https://www.gulfconsult.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ 
                        color: '#ffffff', 
                        textDecoration: 'underline', 
                        fontWeight: 700
                      }}
                    >
                      www.gulfconsult.com
                    </a>
                  </div>
                </div>

                {/* Learn More Button - Below Website */}
                <button
                  className="gulf-consult-learn-more-button"
                  onClick={() => setShowGulfConsult2LearnMore(true)}
                  style={{
                    padding: 'var(--gulf-button-padding, clamp(14px, 1.6vw, 22px) clamp(32px, 3.2vw, 48px))',
                    fontSize: 'var(--gulf-button-font, clamp(15px, 1.6vw, 22px))',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: '#16348a',
                    border: 'none',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(22, 52, 138, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.7s both',
                    marginTop: 'clamp(16px, 2.2vh, 24px)'
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

                {/* Gulf Video Image with Play Video overlay - Far Right */}
                {!gulfLogoVideoFullscreen && (
                  <div
                    style={{
                      position: 'fixed',
                      right: 'clamp(16px, 2.5vw, 32px)',
                      top: 'clamp(45%, 45vh, 50%)',
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
                      top: 'calc(50% + clamp(80px, 10vh, 120px) + clamp(90px, 7vh, 100px))',
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
                Our Project
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
                  textTransform: 'uppercase'
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
                  OUR PROJECT
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                  lineHeight: '1.8',
                  color: '#2d8659'
                }}>
                  Explore our portfolio of successful environmental projects and initiatives.
                </p>
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
              color: 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.5vw, 20px)',
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
              flexShrink: 0
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
                  OUR PARTNERS
                </h1>

                {/* Partners Logos Grid */}
                <div style={{
                  display: 'flex',
                  gap: 'clamp(8px, 1vw, 10px)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  marginTop: '0',
                  overflow: 'hidden',
                  overflowY: 'hidden',
                  overflowX: 'hidden',
                  width: '100%',
                  flex: 1,
                  minHeight: 0,
                  maxHeight: '100%'
                }}>
                  <div style={{
                    width: 'clamp(150px, 18vw, 240px)',
                    height: 'clamp(150px, 18vw, 240px)',
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
                    width: 'clamp(150px, 18vw, 240px)',
                    height: 'clamp(150px, 18vw, 240px)',
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
                    width: 'clamp(150px, 18vw, 240px)',
                    height: 'clamp(150px, 18vw, 240px)',
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
                    width: 'clamp(150px, 18vw, 240px)',
                    height: 'clamp(150px, 18vw, 240px)',
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
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab4' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab4' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab4') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                GALLERY
              </button>
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
                MAJOR CLIENTS
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
                OUR TEAM
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
                  fontSize: 'clamp(28px, 2.8vw, 42px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: 'clamp(20px, 2.5vh, 35px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.6vw, 22px)',
                  lineHeight: '1.8',
                  color: '#1a1a1a',
                  marginBottom: 'clamp(40px, 5vh, 60px)',
                  maxWidth: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
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
                      fontSize: 'clamp(16px, 1.5vw, 22px)',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      Eyad Matar<br />
                      <span style={{ fontSize: 'clamp(13px, 1.2vw, 17px)', fontWeight: '600' }}>CEO</span>
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
                      SM
                    </div>
                    <div style={{
                      fontSize: 'clamp(14px, 1.3vw, 19px)',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      Sales Manager
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
                      FM
                    </div>
                    <div style={{
                      fontSize: 'clamp(14px, 1.3vw, 19px)',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      Finance Manager
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
                      backgroundColor: '#ff6b9d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #ff4b4b',
                      boxShadow: '0 8px 25px rgba(255, 75, 75, 0.35)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: 'clamp(30px, 2.6vw, 38px)',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      padding: '0 6px',
                      boxSizing: 'border-box'
                    }}>
                      IM
                    </div>
                    <div style={{
                      fontSize: 'clamp(14px, 1.3vw, 19px)',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      Implementation Manager
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
                      fontSize: 'clamp(14px, 1.3vw, 19px)',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      Engineering Manager
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
                      backgroundColor: '#ff6b9d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #ff4b4b',
                      boxShadow: '0 8px 25px rgba(255, 75, 75, 0.35)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: 'clamp(30px, 2.6vw, 38px)',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      padding: '0 6px',
                      boxSizing: 'border-box'
                    }}>
                      StM
                    </div>
                    <div style={{
                      fontSize: 'clamp(14px, 1.3vw, 19px)',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      Store Manager
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
                    'https://res.cloudinary.com/dl2rqs0lo/video/upload/v1/AMT_Company_Profile_Transformation___From_Static_PDF_to_CEO_Video_by_Zuccess_zykzgl.mp4',
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
                                display: 'block'
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
            justifyContent: 'center',
            color: '#ffffff',
            paddingTop: 'clamp(60px, 8vh, 80px)',
            boxSizing: 'border-box'
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
                padding: 'clamp(5px, 1vh, 10px)',
                boxSizing: 'border-box'
              }}>
                <h1 style={{
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: 'clamp(10px, 1.5vh, 15px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  flexShrink: 0
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(8px, 1vh, 12px)',
                  width: '100%',
                  maxWidth: '1000px',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center'
                }}>
                  {/* Row 1: 3 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 'clamp(8px, 1.5vw, 15px)',
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
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                  
                  {/* Row 2: 3 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 'clamp(8px, 1.5vw, 15px)',
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
                      src="/Group 58.png"
                      alt="Saudi Aramco"
                      style={{
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                  
                  {/* Row 3: 3 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 'clamp(8px, 1.5vw, 15px)',
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
                      src="/Group 55.png"
                      alt="KBR"
                      style={{
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                      src="/Group 53.png"
                      alt="Saudi Electricity Company"
                      style={{
                        width: 'clamp(100px, 12vw, 140px)',
                        height: 'auto',
                        maxHeight: 'clamp(100px, 12vw, 140px)',
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
                OUR PROJECTS
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
                OUR PARTNERS
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
                  OUR PROJECTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare projects will be available here.
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
          </div>
          <button
            onClick={() => setShowCentralMedicalcareLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(191, 168, 116, 0.9)',
              border: '2px solid rgba(191, 168, 116, 1)',
              borderRadius: '8px',
              color: '#ffffff',
              padding: '12px 24px',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(191, 168, 116, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(191, 168, 116, 0.9)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
            aria-label="Back to Alika"
          >
            Back to Alika
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
          {/* Back button - text only */}
          <button
            onClick={() => setShowAHEnvironmentalLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: ahEnvironmentalActiveTab === 'tab1' ? '#283152' : 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: ahEnvironmentalActiveTab === 'tab1' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'
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
          backgroundImage: 'url(/GTA-bg4.jpeg)',
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
            paddingBottom: '20px',
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
