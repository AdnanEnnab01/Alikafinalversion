import { useEffect } from 'react';

/**
 * Custom hook to prevent body scroll when a modal is open
 * @param {boolean} isOpen - Whether the modal is open
 */
export function useScrollPrevention(isOpen) {
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen]);
}
