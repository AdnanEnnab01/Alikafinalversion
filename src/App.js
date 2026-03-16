import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { getPublicUrl } from './utils/pathUtils';
import GTA from './companies/GTA';
import GSG from './companies/GSG';
import IDC from './companies/IDC';
import AHEnvironmental from './companies/AHEnvironmental';
import RK from './companies/RK';
import CentralMedicalcare from './companies/CentralMedicalcare';
import GulfDorrah from './companies/GulfDorrah';
import Antique from './companies/Antique';
import { useVideoFullscreen } from './hooks/useVideoFullscreen';
import { useEscapeKey } from './hooks/useEscapeKey';
import { useScrollPrevention } from './hooks/useScrollPrevention';
import { useInactivityTimer } from './hooks/useInactivityTimer';
import { useZoomPrevention } from './hooks/useZoomPrevention';
import { useDevToolsPrevention } from './hooks/useDevToolsPrevention';
import { useVideoEndHandler } from './hooks/useVideoEndHandler';
import { usePartnersModalScroll } from './hooks/usePartnersModalScroll';
import { useCompanyPageInactivity } from './hooks/useCompanyPageInactivity';
import { useViewportSize } from './hooks/useViewportSize';
import { useQRModals } from './hooks/useQRModals';
import { closeVideo as closeVideoUtil } from './utils/videoUtils';
import AboutUsPage from './components/AboutUsPage';
import ChairmanMessage from './components/ChairmanMessage';
import QRModal from './components/QRModal';
import PartnersModal from './components/PartnersModal';
import SubsidiariesModal from './components/SubsidiariesModal';
import GulfConsultLearnMoreModal from './components/GulfConsultLearnMoreModal';
import AMTLearnMoreModal from './components/AMTLearnMoreModal';
import GulfConsult2LearnMoreModal from './components/GulfConsult2LearnMoreModal';
import HomeActionButtons from './components/HomeActionButtons';
import BackgroundVideo from './components/BackgroundVideo';
import BackToAlikaButton from './components/BackToAlikaButton';
import CompanyDetailRouter from './components/CompanyDetailRouter';
import CompanyBackground from './components/CompanyBackground';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPartners, setShowPartners] = useState(false);
  const [activeTab, setActiveTab] = useState('partners'); // 'partners', 'team', 'project', 'gallery'
  const [showGulfConsultLearnMore, setShowGulfConsultLearnMore] = useState(false);
  const [showAntiqueLearnMore, setShowAntiqueLearnMore] = useState(false);
  const [showAMTLearnMore, setShowAMTLearnMore] = useState(false);
  const [showGulfConsult2LearnMore, setShowGulfConsult2LearnMore] = useState(false);
  const [showGSGLearnMore, setShowGSGLearnMore] = useState(false);
  const [showGulfDorrahLearnMore, setShowGulfDorrahLearnMore] = useState(false);
  const [showCentralMedicalcareLearnMore, setShowCentralMedicalcareLearnMore] = useState(false);
  const [showRKLearnMore, setShowRKLearnMore] = useState(false);
  const [showAHEnvironmentalLearnMore, setShowAHEnvironmentalLearnMore] = useState(false);
  const [showIDCLearnMore, setShowIDCLearnMore] = useState(false);
  const [showGTALearnMore, setShowGTALearnMore] = useState(false);
  const [gulfConsultVideoPlaying, setGulfConsultVideoPlaying] = useState(false);
  const [gulfConsultVideoFullscreen, setGulfConsultVideoFullscreen] = useState(false);
  const gulfConsultVideoContainerRef = useRef(null);

  // QR Modals hook - manages all QR modal state and handlers
  const { setters: qrModalSetters, qrModalStates } = useQRModals();

  // Home background sound + reveal animation (main page only)
  const [homeSoundEnabled, setHomeSoundEnabled] = useState(false);
  const [homeReveal, setHomeReveal] = useState(false);
  const [homeReturning, setHomeReturning] = useState(false);
  const [showChairmanMessage, setShowChairmanMessage] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [aboutUsTab, setAboutUsTab] = useState('who'); // 'who' | 'values' | 'vision'
  const [showSubsidiaries, setShowSubsidiaries] = useState(false);
  
  // Track viewport size for Dorrah page layout adjustments
  const viewportSize = useViewportSize();

  // Prevent zoom in/out (zoom in and zoom out)
  useZoomPrevention();

  // Handle fullscreen change for Gulf Consult
  useVideoFullscreen(setGulfConsultVideoPlaying, setGulfConsultVideoFullscreen);

  // Note: Video end events are now handled by useVideoEndHandler hook

  // Prevent body scroll when Gulf Consult modal is open
  useScrollPrevention(showGulfConsultLearnMore);

  // Prevent body scroll when Subsidiaries modal is open
  useScrollPrevention(showSubsidiaries);

  // QR Modals are now handled by useQRModals hook

  // Auto-close About Us modal after 90 seconds of inactivity
  useInactivityTimer(showAboutUs, () => setShowAboutUs(false));

  // Auto-close Chairman Message modal after 90 seconds of inactivity
  useInactivityTimer(showChairmanMessage, () => setShowChairmanMessage(false));

  // Auto-redirect to homepage after 90 seconds of inactivity on company/Learn More pages
  useCompanyPageInactivity(
    {
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
    gulfConsultVideoFullscreen,
    showChairmanMessage,
    showAboutUs
    },
    {
      setSelectedCompany,
      setShowGulfConsultLearnMore,
      setShowAntiqueLearnMore,
      setShowAMTLearnMore,
      setShowGulfConsult2LearnMore,
      setShowGSGLearnMore,
      setShowGulfDorrahLearnMore,
      setShowCentralMedicalcareLearnMore,
      setShowRKLearnMore,
      setShowAHEnvironmentalLearnMore,
      setShowIDCLearnMore,
      setShowGTALearnMore,
      setShowPartners,
      setActiveTab,
      setHomeReturning
    }
  );

  // Disable right-click context menu globally across the entire website
  useDevToolsPrevention();

  // Helper function to close video and exit fullscreen - use useCallback to ensure it's stable
  const closeVideo = React.useCallback((setVideoFullscreen, setVideoPlaying) => {
    closeVideoUtil(setVideoFullscreen, setVideoPlaying);
  }, []);

  // Handle video end events for all videos - auto-close when finished
  useVideoEndHandler(
    {
      gulfConsultVideoFullscreen
    },
    {
      setGulfConsultVideoFullscreen,
      setGulfConsultVideoPlaying
    },
    closeVideo
  );

  // Hide scrollbars when Partners modal is open - ABSOLUTE FIX
  usePartnersModalScroll(showPartners);

  // Note: Visibility change detection removed - video end events are handled by useVideoEndHandler

  // Company logos data - AMT أسفل Central Care (بين AH و GC)
  // GTA next to AMT, Antique next to AH Environmental
  const companies = [
    // Right side - pattern (1-2-2-1) moving southeast
    // Row 1: 2 squares - Gulf Logo between IDC and GSG (at top of TLCO)
    { id: 1, logo: getPublicUrl('IDC.png'), row: 1, col: 4, name: 'IDC', bgImage: getPublicUrl('idcbg.png') },
    { id: 12, logo: getPublicUrl('gulf-logo.png'), row: 1, col: 5, name: 'Gulf Logo', bgImage: getPublicUrl('gulfconsultbg.png'), modalLogo: getPublicUrl('Gulf-white.png') },
    // Row 2: 2 squares
    { id: 10, logo: getPublicUrl('tico.png'), row: 2, col: 4, name: 'TLCO', bgImage: getPublicUrl('elco-gif.gif') },
    { id: 11, logo: getPublicUrl('gsg.png'), row: 2, col: 5, name: 'GSG', bgImage: getPublicUrl('gcg-gif.gif') },
    // Row 3: 4 squares - Gulf Consult next to Antique
    { id: 9,  logo: getPublicUrl('GULF-CONSULT.png'), row: 3, col: 2, name: 'Gulf Consult', bgImage: getPublicUrl('GC-bg.jpeg'), modalLogo: getPublicUrl('GULF-CONSULT.png') },
    { id: 2, logo: getPublicUrl('antique.png'), row: 3, col: 3, name: 'Antique', bgImage: getPublicUrl('ant-git.gif'), modalLogo: getPublicUrl('antiqqe.png') },
    { id: 5,  logo: getPublicUrl('AH-ENVIRONMENTAL.png'), row: 3, col: 4, name: 'AH Environmental', bgImage: getPublicUrl('ah-gif.gif'), modalLogo: getPublicUrl('ah-white.png') },
    { id: 3,  logo: getPublicUrl('cc.png'), row: 3, col: 5, name: 'Central Care', bgImage: getPublicUrl('rk-gif.gif') },
    // Row 4: 4 squares - RK between Central Care and AMT (at left of AH Environmental)
    { id: 7,  logo: getPublicUrl('dorrah.png'), row: 4, col: 2, name: 'Al Dorrah', bgImage: getPublicUrl('dorrah-gif.gif') },
    { id: 4,  logo: getPublicUrl('GTA.png'), row: 4, col: 3, name: 'GTA', bgImage: getPublicUrl('GTA-bg4.png') },
    { id: 8,  logo: getPublicUrl('AMT.png'), row: 4, col: 4, name: 'AMT', bgImage: getPublicUrl('amt-bg.png'), modalLogo: getPublicUrl('amt-internal.jpg') },
    { id: 6,  logo: getPublicUrl('RK.png'), row: 4, col: 5, name: 'RK', bgImage: getPublicUrl('rk1-gif.gif') },
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
      <BackgroundVideo homeSoundEnabled={homeSoundEnabled} />

      {/* Home Action Buttons */}
      <HomeActionButtons
        homeSoundEnabled={homeSoundEnabled}
        selectedCompany={selectedCompany}
        showAboutUs={showAboutUs}
        showChairmanMessage={showChairmanMessage}
        onEnableSound={() => {
          setHomeSoundEnabled(true);
          setHomeReveal(true);
          setHomeReturning(false);
          setShowChairmanMessage(false);
          setShowAboutUs(false);
        }}
        onBackToAlika={() => {
          setHomeSoundEnabled(false);
          setHomeReveal(false);
          setHomeReturning(true);
          window.setTimeout(() => setHomeReturning(false), 720);
          setShowChairmanMessage(false);
        }}
        onToggleChairmanMessage={() => {
          if (showChairmanMessage) {
            setShowChairmanMessage(false);
          } else {
            setShowChairmanMessage(true);
            setShowAboutUs(false);
          }
          setHomeReveal(false);
          setHomeReturning(false);
        }}
        onShowAboutUs={() => {
          setShowAboutUs(true);
          setAboutUsTab('who');
          setShowChairmanMessage(false);
          setHomeReveal(false);
          setHomeReturning(false);
        }}
      />

      {/* About us full-screen page */}
      {showAboutUs && (
        <AboutUsPage
          companies={companies}
          onClose={() => setShowAboutUs(false)}
          onCompanyClick={(company) => {
            setShowAboutUs(false);
            setSelectedCompany(company);
          }}
          onSubsidiariesClick={() => setShowSubsidiaries(true)}
          onQRCodeClick={() => qrModalSetters.setShowAlikaQRModal(true)}
        />
      )}

      {/* Exit chairman message (button is rendered inside the chairman card for better proximity) */}

      {/* Foreground UI (logos / Alika / grid) */}
      <div className="home-foreground" style={{ display: 'flex', width: '100%', height: '100%', opacity: selectedCompany ? 0 : 1, pointerEvents: selectedCompany ? 'none' : 'auto', transition: 'opacity 0.15s ease' }}>
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
                src={getPublicUrl("alika.png")}
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
              <ChairmanMessage onClose={() => setShowChairmanMessage(false)} />
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
        <CompanyBackground selectedCompany={selectedCompany}>
          <CompanyDetailRouter
            selectedCompany={selectedCompany}
            companies={companies}
            viewportSize={viewportSize}
            closeVideo={closeVideo}
            setters={{
              setSelectedCompany,
              setShowAMTLearnMore,
              setShowIDCLearnMore,
              setShowAntiqueLearnMore,
              setShowCentralMedicalcareLearnMore,
              setShowGulfConsultLearnMore,
              setShowGulfDorrahLearnMore,
              setShowGTALearnMore,
              setShowPartners,
              setShowGSGLearnMore,
              setShowRKLearnMore,
              setShowAHEnvironmentalLearnMore,
              setShowGulfConsult2LearnMore
            }}
            qrModalSetters={qrModalSetters}
          />
          <BackToAlikaButton
            onClick={() => setSelectedCompany(null)}
            selectedCompanyId={selectedCompany.id}
          />
        </CompanyBackground>
      )}

      {/* Our Partners Modal */}
      <PartnersModal
        isOpen={showPartners}
        onClose={() => setShowPartners(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Our Subsidiaries Modal */}
      <SubsidiariesModal
        isOpen={showSubsidiaries}
        onClose={() => setShowSubsidiaries(false)}
        viewportSize={viewportSize}
      />


      {/* Gulf Consult Learn More Modal */}
      <GulfConsultLearnMoreModal
        isOpen={showGulfConsultLearnMore}
        onClose={() => setShowGulfConsultLearnMore(false)}
      />

      {/* Gulf Consult Arch QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.gulfConsultArch.isOpen}
        onClose={qrModalStates.gulfConsultArch.onClose}
        iframeSrc={qrModalStates.gulfConsultArch.url}
        title={qrModalStates.gulfConsultArch.title}
      />

      {/* Antique Learn More Modal */}
      <Antique
        isOpen={showAntiqueLearnMore}
        onClose={() => setShowAntiqueLearnMore(false)}
      />

      {/* AMT Learn More Modal */}
      <AMTLearnMoreModal
        isOpen={showAMTLearnMore}
        onClose={() => setShowAMTLearnMore(false)}
      />

      {/* AMT QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.amt.isOpen}
        onClose={qrModalStates.amt.onClose}
        iframeSrc={qrModalStates.amt.url}
        title={qrModalStates.amt.title}
      />

      {/* Alika QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.alika.isOpen}
        onClose={qrModalStates.alika.onClose}
        iframeSrc={qrModalStates.alika.url}
        title={qrModalStates.alika.title}
      />

      {/* Gulf Dorrah QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.gulfDorrah.isOpen}
        onClose={qrModalStates.gulfDorrah.onClose}
        iframeSrc={qrModalStates.gulfDorrah.url}
        title={qrModalStates.gulfDorrah.title}
      />

      {/* GTA QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.gta.isOpen}
        onClose={qrModalStates.gta.onClose}
        iframeSrc={qrModalStates.gta.url}
        title={qrModalStates.gta.title}
      />

      {/* AH Environmental QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.ahEnvironmental.isOpen}
        onClose={qrModalStates.ahEnvironmental.onClose}
        iframeSrc={qrModalStates.ahEnvironmental.url}
        title={qrModalStates.ahEnvironmental.title}
      />

      {/* Central Medicalcare QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.centralMedicalcare.isOpen}
        onClose={qrModalStates.centralMedicalcare.onClose}
        iframeSrc={qrModalStates.centralMedicalcare.url}
        title={qrModalStates.centralMedicalcare.title}
      />

      {/* RK QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.rk.isOpen}
        onClose={qrModalStates.rk.onClose}
        iframeSrc={qrModalStates.rk.url}
        title={qrModalStates.rk.title}
      />

      {/* Antique QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.antique.isOpen}
        onClose={qrModalStates.antique.onClose}
        iframeSrc={qrModalStates.antique.url}
        title={qrModalStates.antique.title}
      />

      {/* TLCO QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.tlco.isOpen}
        onClose={qrModalStates.tlco.onClose}
        iframeSrc={qrModalStates.tlco.url}
        title={qrModalStates.tlco.title}
      />

      {/* Gulf Consult 2 Learn More Modal */}
      <GulfConsult2LearnMoreModal
        isOpen={showGulfConsult2LearnMore}
        onClose={() => setShowGulfConsult2LearnMore(false)}
      />

      {/* Gulf Consult QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.gulfConsult.isOpen}
        onClose={qrModalStates.gulfConsult.onClose}
        iframeSrc={qrModalStates.gulfConsult.url}
        title={qrModalStates.gulfConsult.title}
      />

      {/* GSG QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.gsg.isOpen}
        onClose={qrModalStates.gsg.onClose}
        iframeSrc={qrModalStates.gsg.url}
        title={qrModalStates.gsg.title}
      />

      <GSG isOpen={showGSGLearnMore} onClose={() => setShowGSGLearnMore(false)} />

      {/* Gulf Dorrah Learn More Modal */}
      {/* GulfDorrah component always mounted so video container is always available */}
      <GulfDorrah
        isOpen={showGulfDorrahLearnMore}
        onClose={() => setShowGulfDorrahLearnMore(false)}
        viewportSize={viewportSize}
      />

      {/* Central Medicalcare Learn More Modal */}
      <CentralMedicalcare
        isOpen={showCentralMedicalcareLearnMore}
        onClose={() => setShowCentralMedicalcareLearnMore(false)}
      />

      {/* RK Learn More Modal */}
      <RK isOpen={showRKLearnMore} onClose={() => setShowRKLearnMore(false)} />

      <AHEnvironmental
        isOpen={showAHEnvironmentalLearnMore}
        onClose={() => setShowAHEnvironmentalLearnMore(false)}
      />

      <IDC isOpen={showIDCLearnMore} onClose={() => setShowIDCLearnMore(false)} />

      {/* IDC QR Code Modal */}
      <QRModal
        isOpen={qrModalStates.idc.isOpen}
        onClose={qrModalStates.idc.onClose}
        iframeSrc={qrModalStates.idc.url}
        title={qrModalStates.idc.title}
      />

      {/* GTA Learn More Modal */}
      <GTA isOpen={showGTALearnMore} onClose={() => setShowGTALearnMore(false)} />

    </div>
  );
}
