import { useEffect } from 'react';

/**
 * Custom hook to prevent body scroll when Partners modal is open
 * Allows scrolling inside the modal content but prevents scrolling elsewhere
 * @param {boolean} isOpen - Whether the Partners modal is open
 */
export function usePartnersModalScroll(isOpen) {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);
}
