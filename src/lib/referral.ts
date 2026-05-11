import { supabase } from '@/integrations/supabase/client';

const REF_COOKIE = 'nics_ref';
const REF_USER_KEY = 'nics_ref_user_id';
const REF_SESSION_KEY = 'nics_ref_session';
const REF_DAYS = 90;

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return '';
  let s = localStorage.getItem(REF_SESSION_KEY);
  if (!s) {
    s = (crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)) as string;
    localStorage.setItem(REF_SESSION_KEY, s);
  }
  return s;
}

export function getStoredReferralCode(): string | null {
  return getCookie(REF_COOKIE) || (typeof localStorage !== 'undefined' ? localStorage.getItem(REF_COOKIE) : null);
}

export function getStoredReferrerUserId(): string | null {
  return typeof localStorage !== 'undefined' ? localStorage.getItem(REF_USER_KEY) : null;
}

/**
 * Reads ?ref= from the URL, validates against profiles, persists code+user id,
 * and logs a click event. Safe to call on every navigation.
 */
export async function captureReferralFromUrl(propertyId?: string) {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (!ref) return;

  // Resolve referrer user id
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, referral_code')
    .eq('referral_code', ref)
    .maybeSingle();

  if (!profile) return;

  setCookie(REF_COOKIE, ref, REF_DAYS);
  localStorage.setItem(REF_COOKIE, ref);
  localStorage.setItem(REF_USER_KEY, profile.id);

  const sessionId = getOrCreateSessionId();

  // Insert click event (deduped server-side via unique index)
  await supabase.from('referral_events').insert({
    referrer_user_id: profile.id,
    referrer_code: ref,
    property_id: propertyId ?? null,
    event_type: 'click',
    session_id: sessionId,
    metadata: {
      url: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
    },
  });
}

/**
 * Log a referral funnel event (visit_requested, contact, etc.) if a referral
 * code is currently attributed. Silently no-ops otherwise.
 */
export async function trackReferralEvent(
  eventType: 'visit_requested' | 'contact' | 'signup',
  opts: { propertyId?: string; referredUserId?: string; metadata?: Record<string, unknown> } = {}
) {
  const code = getStoredReferralCode();
  const referrerUserId = getStoredReferrerUserId();
  if (!code || !referrerUserId) return;

  await supabase.from('referral_events').insert({
    referrer_user_id: referrerUserId,
    referrer_code: code,
    referred_user_id: opts.referredUserId ?? null,
    property_id: opts.propertyId ?? null,
    event_type: eventType,
    session_id: getOrCreateSessionId(),
    metadata: opts.metadata ?? {},
  });
}

export function buildReferralLink(code: string, propertyId?: string): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://bulgaria-homefinder.lovable.app';
  const path = propertyId ? `/property/${propertyId}` : '/';
  return `${origin}${path}?ref=${encodeURIComponent(code)}&utm_source=referral&utm_medium=share`;
}

export type ShareChannel = 'whatsapp' | 'telegram' | 'viber' | 'email' | 'copy';

export function buildShareUrl(channel: ShareChannel, link: string, message: string): string {
  const text = `${message} ${link}`;
  switch (channel) {
    case 'whatsapp':
      return `https://wa.me/?text=${encodeURIComponent(text)}`;
    case 'telegram':
      return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;
    case 'viber':
      return `viber://forward?text=${encodeURIComponent(text)}`;
    case 'email':
      return `mailto:?subject=${encodeURIComponent('NICS Estate')}&body=${encodeURIComponent(text)}`;
    default:
      return link;
  }
}

export const REFERRAL_TIERS = {
  bronze: { commissionPct: 10, cashbackEur: 200, label: 'Bronze', minDeals: 0 },
  silver: { commissionPct: 15, cashbackEur: 350, label: 'Silver', minDeals: 3 },
  gold:   { commissionPct: 20, cashbackEur: 500, label: 'Gold',   minDeals: 6 },
} as const;

export type ReferralTier = keyof typeof REFERRAL_TIERS;

export function tierFromClosedDeals(closed: number): ReferralTier {
  if (closed >= 6) return 'gold';
  if (closed >= 3) return 'silver';
  return 'bronze';
}
