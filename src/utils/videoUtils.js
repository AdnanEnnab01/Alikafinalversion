/**
 * Utility function to close video and exit fullscreen
 * @param {Function} setVideoFullscreen - Function to set video fullscreen state
 * @param {Function} setVideoPlaying - Function to set video playing state
 */
export const closeVideo = (setVideoFullscreen, setVideoPlaying) => {
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
};
