// Helper function to get the correct public URL path
// This ensures PUBLIC_URL is always set correctly, even if not set during build
export const getPublicUrl = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get PUBLIC_URL from environment; when not set we fall back to root ('')
  // so assets are served correctly from the site root on Render or any host
  const publicUrl = process.env.PUBLIC_URL || '';
  
  // Ensure publicUrl ends with / and cleanPath doesn't start with /
  return `${publicUrl}/${cleanPath}`;
};
