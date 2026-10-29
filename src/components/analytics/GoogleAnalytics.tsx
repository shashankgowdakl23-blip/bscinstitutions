import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics Configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual measurement ID

interface GoogleAnalyticsProps {
  trackingId?: string;
  measurementId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  trackingId = GA_TRACKING_ID,
  measurementId = GA_MEASUREMENT_ID 
}) => {
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false // We'll handle this manually
      });

      // Make gtag available globally
      (window as any).gtag = gtag;
    }
  }, [trackingId]);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }
  }, [location, trackingId]);

  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', 'engagement', formName);
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string) => {
    trackEvent('button_click', 'engagement', buttonName);
  };

  // Track phone calls
  const trackPhoneCall = () => {
    trackEvent('phone_call', 'engagement', 'contact_call');
  };

  // Track WhatsApp clicks
  const trackWhatsAppClick = () => {
    trackEvent('whatsapp_click', 'engagement', 'contact_whatsapp');
  };

  // Track course interest
  const trackCourseInterest = (courseName: string) => {
    trackEvent('course_interest', 'engagement', courseName);
  };

  // Track demo requests
  const trackDemoRequest = () => {
    trackEvent('demo_request', 'conversion', 'free_demo');
  };

  // Make tracking functions available globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = trackEvent;
      (window as any).trackFormSubmission = trackFormSubmission;
      (window as any).trackButtonClick = trackButtonClick;
      (window as any).trackPhoneCall = trackPhoneCall;
      (window as any).trackWhatsAppClick = trackWhatsAppClick;
      (window as any).trackCourseInterest = trackCourseInterest;
      (window as any).trackDemoRequest = trackDemoRequest;
    }
  }, []);

  // Google Tag Manager script (if needed)
  if (typeof window !== 'undefined' && measurementId) {
    return (
      <>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${measurementId}');
            `
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${measurementId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </>
    );
  }

  return null;
};

export default GoogleAnalytics; 