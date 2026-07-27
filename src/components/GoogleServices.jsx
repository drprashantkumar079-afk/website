import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID } from '../utils/analytics';

const SEARCH_CONSOLE_TOKEN = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

export default function GoogleServices() {
  const location = useLocation();

  useEffect(() => {
    if (SEARCH_CONSOLE_TOKEN) {
      let verification = document.querySelector('meta[name="google-site-verification"]');
      if (!verification) {
        verification = document.createElement('meta');
        verification.name = 'google-site-verification';
        document.head.appendChild(verification);
      }
      verification.content = SEARCH_CONSOLE_TOKEN;
    }

    if (!GA_MEASUREMENT_ID || document.getElementById('google-analytics-script')) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: `${location.pathname}${location.search}${location.hash}`,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
}
