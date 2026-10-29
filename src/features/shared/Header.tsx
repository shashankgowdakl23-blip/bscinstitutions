import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { 
  handleWhatsApp,
  handleWhatsAppFinancialCounselling,
  handleWhatsAppTaxCounselling,
  handleWhatsAppInsuranceCounselling,
  handleWhatsAppLegalCounselling,
  handleWhatsAppDebtCounselling,
  handleWhatsAppLoanSecurities,
  handleWhatsAppStockMarketCourse,
  handleWhatsAppDebtConsolidation,
  handleWhatsAppDebtResolution,
  handleWhatsAppCreditCardOptimization,
  handleWhatsAppCallNow
} from "@/utils/contact";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";
import { CTAButtons } from "./header/CTAButtons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCounsellingOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Track hero section with a ref
  const heroRef = useRef<HTMLElement | null>(null);

  // Scroll handler for navbar color transition
  useEffect(() => {
    // Find the hero section once when component mounts
    heroRef.current = document.querySelector('.bg-gradient-hero');
    
    const handleScroll = () => {
      if (!heroRef.current) {
        setIsAtTop(window.scrollY < 10);
        return;
      }
      
      const heroRect = heroRef.current.getBoundingClientRect();
      // Change navbar style when scrolled to the bottom of the hero section
      setIsAtTop(heroRect.bottom > 100);
    };

    // Add scroll event listener with debounce
    const debouncedScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  // Navigation handlers
  const scrollToSection = useCallback((sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, [location.pathname, navigate]);

  const navigateToPage = useCallback((path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  }, [navigate]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, action: () => void) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        action();
      }
    },
    []
  );

  // Toggle counselling dropdown
  const toggleCounselling = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCounsellingOpen(prev => !prev);
  }, []);

  // Get mentorship dropdown items
  const getMentorshipDropdownItems = () => [
    { 
      label: 'Financial Counselling', 
      action: handleWhatsAppFinancialCounselling,
      ariaLabel: 'Get Financial Counselling'
    },
    { 
      label: 'Tax Counselling', 
      action: handleWhatsAppTaxCounselling,
      ariaLabel: 'Get Tax Counselling'
    },
    { 
      label: 'Insurance Counselling', 
      action: handleWhatsAppInsuranceCounselling,
      ariaLabel: 'Get Insurance Counselling'
    },
    { 
      label: 'Legal Counselling', 
      action: handleWhatsAppLegalCounselling,
      ariaLabel: 'Get Legal Counselling'
    },
    { 
      label: 'Debt Counselling', 
      action: handleWhatsAppDebtCounselling,
      ariaLabel: 'Get Debt Counselling'
    },
    { 
      label: 'Loan Against Securities', 
      action: handleWhatsAppLoanSecurities,
      ariaLabel: 'Get Loan Against Securities'
    },
    { 
      label: 'Stock Market Course', 
      action: handleWhatsAppStockMarketCourse,
      ariaLabel: 'Enroll in Stock Market Course'
    },
    { 
      label: 'Debt Consolidation', 
      action: handleWhatsAppDebtConsolidation,
      ariaLabel: 'Get Debt Consolidation Help'
    },
    { 
      label: 'Debt Resolution', 
      action: handleWhatsAppDebtResolution,
      ariaLabel: 'Get Debt Resolution Help'
    },
    { 
      label: 'Credit Card Optimisation', 
      action: handleWhatsAppCreditCardOptimization,
      ariaLabel: 'Get Credit Card Optimization Help'
    }
  ];

  // Memoized navigation items
  const navigationItems = useMemo(() => [
    { label: 'Home', action: () => scrollToSection('home'), ariaLabel: 'Navigate to home section' },
    { label: 'Courses', action: () => navigateToPage('/courses'), ariaLabel: 'Navigate to courses page' },
    { label: 'About', action: () => navigateToPage('/about'), ariaLabel: 'Navigate to about page' },
    { label: 'Gallery', action: () => navigateToPage('/gallery'), ariaLabel: 'Navigate to gallery page' },
    { 
      label: 'Mentorship', 
      action: toggleCounselling,
      hasDropdown: true,
      dropdownItems: getMentorshipDropdownItems()
    },
    { label: 'Success Stories', action: () => navigateToPage('/success-stories'), ariaLabel: 'Navigate to success stories page' },
  ], [scrollToSection, navigateToPage, toggleCounselling]);

  // Memoized header classes
  const headerClasses = useMemo(() => 
    `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isAtTop
        ? "bg-black/10 backdrop-blur-md shadow-sm"
        : "bg-white/95 backdrop-blur-lg border-b border-border shadow-md"
    }`, [isAtTop]
  );

  const textColorClass = useMemo(() => 
    isAtTop ? "text-white" : "text-foreground", [isAtTop]
  );

  // Handle item click for both mobile and desktop
  const handleItemClick = useCallback((action: () => void) => {
    if (typeof action === 'function') {
      action();
    }
  }, []);

  return (
    <header className={headerClasses} role="banner" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="Go to home"
            >
              <img 
                src="/images/main-logos/BSC_Logo.jpg" 
                alt="B.S.C. Institutions Logo" 
                className="h-10 md:h-12 w-auto rounded-md object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav
            navigationItems={navigationItems}
            isCounsellingOpen={isCounsellingOpen}
            textColorClass={textColorClass}
            dropdownRef={dropdownRef}
            onItemClick={handleItemClick}
            onKeyDown={handleKeyDown}
          />

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <CTAButtons
              onWhatsAppClick={handleWhatsApp}
              onCallClick={handleWhatsAppCallNow}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
            className="lg:hidden p-3 rounded-lg hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] min-w-[44px]"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
          >
            <Menu className={`h-6 w-6 transition-colors duration-300 ${textColorClass}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          navigationItems={navigationItems}
          onItemClick={handleItemClick}
          onKeyDown={handleKeyDown}
          onWhatsAppClick={handleWhatsApp}
          onCallClick={handleWhatsAppCallNow}
          textColorClass={textColorClass}
        />
      </div>
    </header>
  );
};

export default Header;