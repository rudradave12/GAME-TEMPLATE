/**
 * YouTube URL and Video ID utilities for GameZone website template.
 * Supports standard YouTube formats:
 * - Plain video ID (e.g. "QdBZY2fkU-0")
 * - Standard Watch URL: https://www.youtube.com/watch?v=VIDEO_ID
 * - Short URL: https://youtu.be/VIDEO_ID
 * - Embed URL: https://www.youtube.com/embed/VIDEO_ID or youtube-nocookie.com/embed/VIDEO_ID
 * - Shorts URL: https://www.youtube.com/shorts/VIDEO_ID
 * - Mobile URL: https://m.youtube.com/watch?v=VIDEO_ID
 * - Live URL: https://www.youtube.com/live/VIDEO_ID
 */

/**
 * Extracts the 11-character YouTube video ID from any supported format or URL string.
 */
export function extractYouTubeVideoId(input: string | undefined | null): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Plain 11-character video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Common YouTube URL regex patterns
  const patterns = [
    // Standard watch URL: youtube.com/watch?v=ID
    /[?&]v=([a-zA-Z0-9_-]{11})/i,
    // Shortened URL: youtu.be/ID
    /youtu\.be\/([a-zA-Z0-9_-]{11})/i,
    // Embed URLs: youtube.com/embed/ID or youtube-nocookie.com/embed/ID
    /youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/i,
    // Shorts URLs: youtube.com/shorts/ID
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i,
    // Live URLs: youtube.com/live/ID
    /youtube\.com\/live\/([a-zA-Z0-9_-]{11})/i,
    // Older /v/ URLs: youtube.com/v/ID
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/i,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Generates the canonical YouTube Watch URL for safe external redirects:
 * https://www.youtube.com/watch?v=VIDEO_ID
 */
export function getYouTubeWatchUrl(input: string | undefined | null): string | null {
  const videoId = extractYouTubeVideoId(input);
  if (!videoId) return null;
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Generates a privacy-conscious, performant YouTube embed URL:
 * https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&enablejsapi=1
 */
export function getYouTubeEmbedUrl(input: string | undefined | null, origin?: string): string | null {
  const videoId = extractYouTubeVideoId(input);
  if (!videoId) return null;
  const originParam = origin ? `&origin=${encodeURIComponent(origin)}` : "";
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&enablejsapi=1${originParam}`;
}
