import { useState, useEffect } from 'react';

/**
 * Custom hook to track viewport size
 * @returns {Object} Object with width and height of the viewport
 */
export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportSize;
}
