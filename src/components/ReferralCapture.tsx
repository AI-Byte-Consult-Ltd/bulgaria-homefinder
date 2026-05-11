import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureReferralFromUrl } from '@/lib/referral';

/**
 * Mounts inside the Router. On every navigation, if URL has ?ref= it
 * persists the referral code (cookie + localStorage) and logs a click.
 */
export const ReferralCapture = () => {
  const location = useLocation();
  useEffect(() => {
    // Extract property id when on /property/:id
    const m = location.pathname.match(/^\/property\/([^/]+)/);
    captureReferralFromUrl(m?.[1]);
  }, [location.pathname, location.search]);
  return null;
};
