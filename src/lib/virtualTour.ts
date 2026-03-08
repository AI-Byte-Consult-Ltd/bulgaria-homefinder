/**
 * Virtual Tour Utilities
 *
 * Provider detection, URL validation, and embed helpers.
 * Add new providers here when extending VR support.
 */

export type VirtualTourProvider = 'matterport' | 'iframe' | 'youtube' | 'external';

/** Approved domains that are safe to embed via iframe */
const APPROVED_EMBED_DOMAINS = [
  'my.matterport.com',
  'matterport.com',
  'www.youtube.com',
  'youtube.com',
  'youtu.be',
  'player.vimeo.com',
  'vimeo.com',
  'kuula.co',
  'www.kuula.co',
  'momento360.com',
  'roundme.com',
  'www.google.com',       // Google Street View embeds
  'tourmake.it',
  'my.virtualtours.one',
  'app.cloudpano.com',
  'theta360.com',
];

/**
 * Detect the virtual tour provider from a URL.
 *
 * IDX/MLS INTEGRATION NOTE:
 * ─────────────────────────
 * If your IDX/MLS feed provides a virtual tour field, map it here:
 *   property.virtualTourUrl = idxListing.virtualTourUrl ?? idxListing.VirtualTourURLUnbranded ?? null;
 *   property.virtualTourType = detectTourProvider(property.virtualTourUrl);
 */
export function detectTourProvider(url: string | null | undefined): VirtualTourProvider | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    if (host.includes('matterport.com')) return 'matterport';
    if (host.includes('youtube.com') || host.includes('youtu.be')) return 'youtube';

    // Check if domain is in our approved list for iframe embedding
    if (APPROVED_EMBED_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`))) {
      return 'iframe';
    }

    return 'external';
  } catch {
    return 'external';
  }
}

/**
 * Validate and sanitize a virtual tour URL.
 * Returns null if the URL is invalid or potentially unsafe.
 */
export function validateTourUrl(url: string | null | undefined): string | null {
  if (!url || typeof url !== 'string') return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);

    // Only allow http(s) protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;

    // Block javascript: URLs that might sneak through
    if (parsed.href.toLowerCase().includes('javascript:')) return null;

    return parsed.href;
  } catch {
    return null;
  }
}

/**
 * Check whether a URL is safe to embed in an iframe.
 */
export function isSafeToEmbed(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    return APPROVED_EMBED_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));
  } catch {
    return false;
  }
}

/**
 * Convert a standard YouTube URL to an embed URL.
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;

    if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v');
    }

    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  } catch {
    return null;
  }
}

/**
 * Get the correct embed URL for a given provider.
 */
export function getEmbedUrl(url: string, provider: VirtualTourProvider): string | null {
  switch (provider) {
    case 'youtube':
      return getYouTubeEmbedUrl(url);
    case 'matterport':
    case 'iframe':
      return url;
    default:
      return null;
  }
}

/**
 * Whether this property has a virtual tour.
 * Derive from the URL rather than relying on a stored boolean.
 */
export function hasVirtualTour(virtualTourUrl: string | null | undefined): boolean {
  return validateTourUrl(virtualTourUrl) !== null;
}
