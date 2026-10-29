// SEO Configuration for BSC Institutions
export const seoConfig = {
  // Homepage
  home: {
    title: 'BSC Institutions - Master Stock Market Trading | NISM Certified Training',
    description: 'Learn stock market trading from NISM certified trainer Shashank Gowda k. Join 1000+ successful students with flexible timing for working professionals. Free demo session available. Karnataka\'s premier financial education institute.',
    keywords: 'stock market training, NISM certified, trading course, financial education, Karnataka, Shashank Gowda k, working professionals, stock market course, trading institute, financial literacy',
    canonical: '/',
    ogImage: '/hero-finance.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "BSC Institutions",
      "description": "Karnataka's premier financial education institute, making financial market knowledge accessible to everyone through NISM certified training programs.",
      "url": "https://bscinstitutions.com",
      "logo": "https://bscinstitutions.com/hero-finance.jpg",
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
    }
  },

  // Courses Page
  courses: {
    title: 'Stock Market Trading Courses | NISM Certified Training Programs | BSC Institutions',
    description: 'Comprehensive stock market trading courses with NISM certification. Learn technical analysis, fundamental analysis, risk management, and trading strategies. Flexible timing for working professionals.',
    keywords: 'stock market courses, NISM certification, trading programs, technical analysis, fundamental analysis, risk management, trading strategies, professional training',
    canonical: '/courses',
    ogImage: '/hero-finance.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Stock Market Trading Course",
      "description": "Comprehensive stock market trading course with NISM certification covering technical analysis, fundamental analysis, and trading strategies.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "BSC Institutions"
      },
      "courseMode": "In-person",
      "educationalLevel": "Professional Development",
      "teaches": [
        "Technical Analysis",
        "Fundamental Analysis",
        "Risk Management",
        "Trading Strategies",
        "Market Psychology"
      ],
      "timeRequired": "P3M",
      "coursePrerequisites": "Basic understanding of financial markets"
    }
  },

  // About Page
  about: {
    title: 'About BSC Institutions | NISM Certified Trainer Shashank Gowda k | Stock Market Education',
    description: 'Learn about BSC Institutions, our mission to democratize financial education, and meet our NISM certified trainer Shashank Gowda k. Discover our journey in making financial knowledge accessible.',
    keywords: 'about BSC institutions, Shashank Gowda k, NISM trainer, financial education mission, stock market training history, Karnataka education institute',
    canonical: '/about',
    ogImage: '/Hero-Image.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shashank Gowda k",
      "jobTitle": "NISM Certified Trainer",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "BSC Institutions"
      },
      "description": "NISM certified trainer with expertise in stock market trading and financial education.",
      "knowsAbout": [
        "Stock Market Trading",
        "Technical Analysis",
        "Fundamental Analysis",
        "Financial Education",
        "Investment Strategies"
      ]
    }
  },

  // Gallery Page
  gallery: {
    title: 'Gallery | BSC Institutions Training Sessions, Events & Success Stories',
    description: 'Explore our training sessions, events, and success stories through our gallery. See our students in action, training facilities, and the vibrant learning environment at BSC Institutions.',
    keywords: 'BSC institutions gallery, training sessions, events, success stories, student photos, training facilities, learning environment',
    canonical: '/gallery',
    ogImage: '/hero-finance.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "BSC Institutions Training Gallery",
      "description": "Gallery showcasing training sessions, events, and success stories at BSC Institutions",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "BSC Institutions"
      }
    }
  },

  // Success Stories Page
  successStories: {
    title: 'Success Stories | Student Testimonials & Trading Success | BSC Institutions',
    description: 'Read inspiring success stories from our students who have achieved financial independence through our stock market trading courses. Real testimonials from 1000+ successful graduates.',
    keywords: 'success stories, student testimonials, trading success, financial independence, BSC institutions graduates, stock market success stories',
    canonical: '/success-stories',
    ogImage: '/hero-finance.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Student Success Stories",
      "description": "Success stories and testimonials from BSC Institutions students",
      "numberOfItems": 1000,
      "itemListElement": [
        {
          "@type": "Review",
          "reviewBody": "Excellent training program that helped me achieve financial independence",
          "author": {
            "@type": "Person",
            "name": "BSC Institutions Student"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          }
        }
      ]
    }
  },

  // 404 Page
  notFound: {
    title: 'Page Not Found | BSC Institutions',
    description: 'The page you are looking for could not be found. Please navigate back to our homepage or contact us for assistance.',
    keywords: '404, page not found, BSC institutions',
    canonical: '/404',
    noindex: true,
    nofollow: true
  }
};

// SEO Helper Functions
export const generatePageSEO = (page: keyof typeof seoConfig, customData?: Partial<typeof seoConfig.home>) => {
  const baseSEO = seoConfig[page];
  return {
    ...baseSEO,
    ...customData
  };
};

// Breadcrumb structured data generator
export const generateBreadcrumbData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://bscinstitutions.com${crumb.url}`
    }))
  };
};

// FAQ structured data generator
export const generateFAQData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}; 