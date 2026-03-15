import { useEffect } from 'react';

/**
 * Custom hook to prevent zoom in/out on the page
 * Prevents zoom via keyboard shortcuts, mouse wheel, touch gestures, and double-tap
 */
export function useZoomPrevention() {
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
}
