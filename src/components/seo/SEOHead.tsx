import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'BSC Institutions - Master Stock Market Trading | NISM Certified Training',
  description = 'Learn stock market trading from NISM certified trainer Shashank Gowda k. Join 1000+ successful students with flexible timing for working professionals. Free demo session available.',
  keywords = 'stock market training, NISM certified, trading course, financial education, Karnataka, Shashank Gowda k, working professionals, stock market course, trading institute, financial literacy',
  canonical,
  ogImage = '/hero-finance.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  children,
}) => {
  const baseUrl = 'https://bscinstitutions.com';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Default structured data for educational organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "BSC Institutions",
    "description": "Karnataka's premier financial education institute, making financial market knowledge accessible to everyone through NISM certified training programs.",
    "url": baseUrl,
    "logo": `${baseUrl}/src/assets/hero-finance.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+916360049713",
      "contactType": "customer service",
      "availableLanguage": "English, Kannada, Hindi"
    },
    "offers": {
      "@type": "Offer",
      "description": "Stock Market Trading Course with NISM Certification",
      "availability": "https://schema.org/InStock"
    },
    "founder": {
      "@type": "Person",
      "name": "Shashank Gowda k",
      "jobTitle": "NISM Certified Trainer"
    },
    "numberOfStudents": 1000,
    "educationalLevel": "Professional Development",
    "teaches": ["Stock Market Trading", "Financial Education", "Investment Strategies"]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BSC Institutions" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BSC Institutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@bscinstitutions" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@bscinstitutions" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="color-scheme" content="light dark" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional children */}
      {children}
    </Helmet>
  );
};

export default SEOHead; 