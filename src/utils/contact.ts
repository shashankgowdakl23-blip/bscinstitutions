// Updated phone number for BSC Institutions
const PHONE_NUMBER = "+916360049713";

// Context-specific WhatsApp messages
export const WHATSAPP_MESSAGES = {
  GENERAL: "Hi! I want to know more about your trading courses. Can you help me?",
  HERO: "Hi! I'm interested in learning about stock market trading. Can you tell me more about your courses?",
  COURSES: "Hi! I want to know more details about your trading courses and pricing.",
  HOW_WE_WORK: "Hi! I want to understand how your training program works.",
  TRAINER: "Hi! I want to know more about the trainer and their experience.",
  SUCCESS_STORIES: "Hi! I'm inspired by your success stories. How can I start my journey?",
  FREE_DEMO: "Hi! I want to book a free demo session. Please help me get started.",
  CONSULTATION: "Hi! I want to schedule a consultation call to discuss my trading goals.",
  CALL_NOW: "Hi! I want to call you now to discuss trading courses. Are you available?",
  COURSE_DETAILS: "Hi! I need more information about your course details and enrollment process.",
  FINANCIAL_COUNSELLING: "Hi! I'm interested in Financial Counselling. Can you provide more details?",
  TAX_COUNSELLING: "Hi! I need assistance with Tax Counselling. Please share more information.",
  INSURANCE_COUNSELLING: "Hi! I'm interested in learning about Insurance Counselling options.",
  LEGAL_COUNSELLING: "Hi! I need Legal Counselling services. Can you help?",
  DEBT_COUNSELLING: "Hi! I'm looking for Debt Counselling. Please provide more details.",
  PORTFOLIO_REVIEW: "Hi! I'd like to schedule a Stock Portfolio Review. What are the next steps?",
  LOAN_SECURITIES: "Hi! I'm interested in learning about Loan Against Securities. Can you help?",
  STOCK_MARKET_COURSE: "Hi! I want to enroll in your Stock Market Course. Please share details.",
  INVESTMENT_PORTFOLIO: "Hi! I need help with Investment Portfolio management. Can you assist?",
  DEBT_CONSOLIDATION: "Hi! I'm looking for Debt Consolidation services. Please provide more information.",
  DEBT_RESOLUTION: "Hi! I need help with Debt Resolution. What are my options?",
  CREDIT_CARD_OPTIMIZATION: "Hi! I'm interested in Credit Card Optimization services. Can you help?"
};

export const handleWhatsApp = (message: string = WHATSAPP_MESSAGES.GENERAL, phoneNumber: string = PHONE_NUMBER) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

export const handleWhatsAppWithCustomMessage = (message: string) => {
  handleWhatsApp(message);
};

// Context-specific WhatsApp handlers
export const handleWhatsAppHero = () => handleWhatsApp(WHATSAPP_MESSAGES.HERO);
export const handleWhatsAppCourses = () => handleWhatsApp(WHATSAPP_MESSAGES.COURSES);
export const handleWhatsAppHowWeWork = () => handleWhatsApp(WHATSAPP_MESSAGES.HOW_WE_WORK);
export const handleWhatsAppTrainer = () => handleWhatsApp(WHATSAPP_MESSAGES.TRAINER);
export const handleWhatsAppSuccessStories = () => handleWhatsApp(WHATSAPP_MESSAGES.SUCCESS_STORIES);
export const handleWhatsAppFreeDemo = () => handleWhatsApp(WHATSAPP_MESSAGES.FREE_DEMO);
export const handleWhatsAppConsultation = () => handleWhatsApp(WHATSAPP_MESSAGES.CONSULTATION);
export const handleWhatsAppCallNow = () => handleWhatsApp(WHATSAPP_MESSAGES.CALL_NOW);
export const handleWhatsAppCourseDetails = () => handleWhatsApp(WHATSAPP_MESSAGES.COURSE_DETAILS);

// Mentorship WhatsApp handlers
export const handleWhatsAppFinancialCounselling = () => handleWhatsApp(WHATSAPP_MESSAGES.FINANCIAL_COUNSELLING);
export const handleWhatsAppTaxCounselling = () => handleWhatsApp(WHATSAPP_MESSAGES.TAX_COUNSELLING);
export const handleWhatsAppInsuranceCounselling = () => handleWhatsApp(WHATSAPP_MESSAGES.INSURANCE_COUNSELLING);
export const handleWhatsAppLegalCounselling = () => handleWhatsApp(WHATSAPP_MESSAGES.LEGAL_COUNSELLING);
export const handleWhatsAppDebtCounselling = () => handleWhatsApp(WHATSAPP_MESSAGES.DEBT_COUNSELLING);
export const handleWhatsAppPortfolioReview = () => handleWhatsApp(WHATSAPP_MESSAGES.PORTFOLIO_REVIEW);
export const handleWhatsAppLoanSecurities = () => handleWhatsApp(WHATSAPP_MESSAGES.LOAN_SECURITIES);
export const handleWhatsAppStockMarketCourse = () => handleWhatsApp(WHATSAPP_MESSAGES.STOCK_MARKET_COURSE);
export const handleWhatsAppInvestmentPortfolio = () => handleWhatsApp(WHATSAPP_MESSAGES.INVESTMENT_PORTFOLIO);
export const handleWhatsAppDebtConsolidation = () => handleWhatsApp(WHATSAPP_MESSAGES.DEBT_CONSOLIDATION);
export const handleWhatsAppDebtResolution = () => handleWhatsApp(WHATSAPP_MESSAGES.DEBT_RESOLUTION);
export const handleWhatsAppCreditCardOptimization = () => handleWhatsApp(WHATSAPP_MESSAGES.CREDIT_CARD_OPTIMIZATION);

export const scrollToContactForm = () => {
  const contactSection = document.getElementById('contact');
  
  if (contactSection && window.location.pathname === '/') {
    // Contact form exists on current page (home page)
    // Smooth scroll with animation
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Add a subtle highlight animation to the contact form
    setTimeout(() => {
      contactSection.style.transition = 'all 0.3s ease';
      contactSection.style.transform = 'scale(1.02)';
      contactSection.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
      
      setTimeout(() => {
        contactSection.style.transform = 'scale(1)';
        contactSection.style.boxShadow = 'none';
      }, 300);
    }, 500);
  } else {
    // Contact form doesn't exist on current page, navigate to home page
    if (typeof window !== 'undefined') {
      // Store the intention to scroll to contact form
      sessionStorage.setItem('scrollToContact', 'true');
      
      // Show a small loading indicator (optional)
      const loadingDiv = document.createElement('div');
      loadingDiv.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          border-radius: 10px;
          z-index: 9999;
          font-family: Arial, sans-serif;
        ">
          <div style="text-align: center;">
            <div style="width: 20px; height: 20px; border: 2px solid #fff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
            <div>Navigating to contact form...</div>
          </div>
        </div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      `;
      document.body.appendChild(loadingDiv);
      
      // Navigate to home page
      window.location.href = '/';
    }
  }
};

// Function to initiate a phone call
export const handleCall = (phoneNumber: string = PHONE_NUMBER) => {
  window.location.href = `tel:${phoneNumber}`;
};

// Function to open default email client with pre-filled email
export const handleEmail = (email: string = 'enquiry@bscinstitutions.com', subject: string = 'Enquiry about BSC Institutions') => {
  const encodedSubject = encodeURIComponent(subject);
  window.location.href = `mailto:${email}?subject=${encodedSubject}`;
};

// Function to check if we should scroll to contact form after navigation
export const checkAndScrollToContact = () => {
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    const shouldScroll = sessionStorage.getItem('scrollToContact');
    if (shouldScroll === 'true') {
      // Clear the flag
      sessionStorage.removeItem('scrollToContact');
      
      // Wait for the page to load and then scroll
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Add highlight animation
          setTimeout(() => {
            contactSection.style.transition = 'all 0.3s ease';
            contactSection.style.transform = 'scale(1.02)';
            contactSection.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            
            setTimeout(() => {
              contactSection.style.transform = 'scale(1)';
              contactSection.style.boxShadow = 'none';
            }, 300);
          }, 500);
        }
      }, 100);
    }
  }
}; 