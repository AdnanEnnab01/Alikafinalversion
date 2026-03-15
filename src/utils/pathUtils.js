// Helper function to get the correct public URL path
// This ensures PUBLIC_URL is always set correctly, even if not set during build
export const getPublicUrl = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get PUBLIC_URL from environment, fallback to '/alika' (from homepage in package.json)
  // In React, PUBLIC_URL should be set automatically from homepage during build
  // But we add fallback to ensure it works even if not set
  const publicUrl = process.env.PUBLIC_URL || '/alika';
  
  // Ensure publicUrl ends with / and cleanPath doesn't start with /
  return `${publicUrl}/${cleanPath}`;
};
