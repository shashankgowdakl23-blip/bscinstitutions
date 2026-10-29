import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./features/shared/Loader";
import RouteLoader from "./features/shared/RouteLoader";
import PerformanceMonitor from "./components/PerformanceMonitor";
import ErrorBoundary from "./components/ErrorBoundary";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import { logger, perfLogger } from "./utils/logger";
import { analyzeBundle, monitorPerformance } from "./utils/bundle-analyzer";
import { Analytics } from "@vercel/analytics/react";
import './index.css'

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Courses = lazy(() => import("./pages/Courses"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime in v5)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // Remove any loading indicators that might be left over
    const loadingIndicators = document.querySelectorAll('[style*="position: fixed"][style*="z-index: 9999"]');
    loadingIndicators.forEach(indicator => indicator.remove());

    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Small delay to ensure the page is loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Add highlight animation for contact form
          if (location.hash === '#contact') {
            setTimeout(() => {
              element.style.transition = 'all 0.3s ease';
              element.style.transform = 'scale(1.02)';
              element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';

              setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.boxShadow = 'none';
              }, 300);
            }, 500);
          }
        }, 100);
      }
    } else {
      // Check if we have a sessionStorage flag for contact form
      const shouldScrollToContact = sessionStorage.getItem('scrollToContact');
      if (shouldScrollToContact === 'true' && location.pathname === '/') {
        // Clear the flag
        sessionStorage.removeItem('scrollToContact');

        // Wait for the page to load and then scroll to contact form
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
        }, 200);
      } else {
        // No hash, scroll to top
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash]);
  return null;
}

// Loading fallback component
const PageLoadingFallback = () => <RouteLoader />;

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoadingFallback />} key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [startTime] = useState(Date.now());

  // Performance monitoring
  useEffect(() => {
    // Only run in development environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      analyzeBundle();
      monitorPerformance();
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadResources = async () => {
      logger.log('🚀 Starting resource preloading...');
      try {
        // Import images directly to ensure they're available
        const heroImage = await import('@/assets/hero-finance.jpg');
        const trainerImage = await import('@/assets/Hero-Image.jpg');

        logger.log('📦 Images imported successfully');

        // Simulate a small delay to ensure smooth loading
        await new Promise(resolve => setTimeout(resolve, 500));

        logger.log('🎉 All resources loaded successfully!');

        // Mark resources as loaded
        setResourcesLoaded(true);

        // Reduced minimum display time for better UX
        const elapsedTime = Date.now() - startTime;
        const minimumDisplayTime = 1500; // Reduced from 3.5s to 1.5s
        const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

        perfLogger.log(`Elapsed time: ${elapsedTime}ms, Remaining time: ${remainingTime}ms`);

        // Wait for remaining time to ensure minimum display duration
        if (remainingTime > 0) {
          logger.log(`⏳ Waiting additional ${remainingTime}ms to ensure minimum display time...`);
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }

        logger.log('🎬 Loading complete! Transitioning to main app...');

        // Complete loading
        setIsLoading(false);

      } catch (error) {
        logger.warn('⚠️ Resource loading failed, continuing anyway:', error);

        // Even if resources fail, ensure minimum display time
        const elapsedTime = Date.now() - startTime;
        const minimumDisplayTime = 1500; // Reduced from 3.5s to 1.5s
        const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

        perfLogger.log(`Error occurred. Elapsed time: ${elapsedTime}ms, Remaining time: ${remainingTime}ms`);

        if (remainingTime > 0) {
          logger.log(`⏳ Waiting additional ${remainingTime}ms despite error...`);
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }

        logger.log('🎬 Loading complete (with errors)! Transitioning to main app...');
        setIsLoading(false);
      }
    };

    preloadResources();
  }, [startTime]);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AnimatePresence mode="wait">
              {isLoading ? (
                <Loader key="loader" onComplete={() => { }} />
              ) : (
                <BrowserRouter key="app">
                  <Analytics />
                  <GoogleAnalytics />
                  <ScrollToTop />
                  <AnimatedRoutes />
                  <PerformanceMonitor />
                </BrowserRouter>
              )}
            </AnimatePresence>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
