import { useEffect } from 'react';

/**
 * Custom hook to auto-close a modal after a period of inactivity
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Function to call when timer expires
 * @param {number} timeoutMs - Timeout in milliseconds (default: 90000 = 90 seconds)
 */
export function useInactivityTimer(isOpen, onClose, timeoutMs = 90000) {
  useEffect(() => {
    if (!isOpen) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        onClose();
      }, timeoutMs);
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
  }, [isOpen, onClose, timeoutMs]);
}
