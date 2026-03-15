import { useEffect } from 'react';

/**
 * Custom hook to handle Escape key press to close modals
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Function to call when Escape is pressed
 */
export function useEscapeKey(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
}
