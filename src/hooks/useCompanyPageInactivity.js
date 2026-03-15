import { useEffect } from 'react';

/**
 * Custom hook to auto-redirect to homepage after inactivity on company/Learn More pages
 * @param {Object} pageState - Object containing all page state variables
 * @param {Object} setters - Object containing all state setters
 * @param {number} timeoutMs - Timeout in milliseconds (default: 90000 = 90 seconds)
 */
export function useCompanyPageInactivity(pageState, setters, timeoutMs = 90000) {
  const {
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
    gulfConsultVideoFullscreen,
    showChairmanMessage,
    showAboutUs
  } = pageState;

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
             gulfConsultVideoFullscreen || 
             showChairmanMessage ||
             showAboutUs;
    };

    // Function to navigate back to homepage
    const navigateToHomepage = () => {
      // Close all company pages and Learn More modals
      setters.setSelectedCompany(null);
      setters.setShowGulfConsultLearnMore(false);
      setters.setShowAntiqueLearnMore(false);
      setters.setShowAMTLearnMore(false);
      setters.setShowGulfConsult2LearnMore(false);
      setters.setShowGSGLearnMore(false);
      setters.setShowGulfDorrahLearnMore(false);
      setters.setShowCentralMedicalcareLearnMore(false);
      setters.setShowRKLearnMore(false);
      setters.setShowAHEnvironmentalLearnMore(false);
      setters.setShowIDCLearnMore(false);
      setters.setShowGTALearnMore(false);
      setters.setShowPartners(false);
      setters.setActiveTab('partners');
      
      // Reset home state
      setters.setHomeReturning(true);
      setTimeout(() => setters.setHomeReturning(false), 600);
    };

    // Only run if we're on a company or Learn More page
    if (!isOnCompanyOrLearnMorePage()) {
      return;
    }

    let inactivityTimer = null;

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
      }, timeoutMs);
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
    gulfConsultVideoFullscreen,
    showChairmanMessage,
    showAboutUs,
    setters,
    timeoutMs
  ]);
}
