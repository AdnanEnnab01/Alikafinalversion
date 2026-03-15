import { useEffect } from 'react';

/**
 * Custom hook to handle video end events from Cloudinary players
 * Auto-closes videos when they finish playing
 * @param {Object} videoStates - Object containing video state booleans
 * @param {Object} setters - Object containing video state setters
 * @param {Function} closeVideo - Function to close a video
 */
export function useVideoEndHandler(videoStates, setters, closeVideo) {
  const {
    amtVideoFullscreen,
    amtGalleryFullscreenVideo,
    gulfConsultVideoFullscreen
  } = videoStates;

  const {
    setAmtVideoFullscreen,
    setAmtVideoPlaying,
    setAmtGalleryFullscreenVideo,
    setGulfConsultVideoFullscreen,
    setGulfConsultVideoPlaying
  } = setters;

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
          if (gulfConsultVideoFullscreen) {
            closeVideo(setGulfConsultVideoFullscreen, setGulfConsultVideoPlaying);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [amtVideoFullscreen, amtGalleryFullscreenVideo, gulfConsultVideoFullscreen, closeVideo, setAmtVideoFullscreen, setAmtVideoPlaying, setAmtGalleryFullscreenVideo, setGulfConsultVideoFullscreen, setGulfConsultVideoPlaying]);
}
