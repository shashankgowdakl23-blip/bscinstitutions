import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  loadTime: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      // Wait for all resources to load
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        const paint = performance.getEntriesByType('paint');
        
        // Get Core Web Vitals
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
        
        // Calculate load time
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

        setMetrics({
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          fid: 0, // Would need user interaction to measure
          cls: 0, // Would need layout shift observer
          loadTime: Math.round(loadTime)
        });
      }, 1000);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  if (!isVisible || !metrics) return null;

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-500';
    if (value <= threshold * 1.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 backdrop-blur-sm">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>
          FCP: <span className={getPerformanceColor(metrics.fcp, 1800)}>{metrics.fcp}ms</span>
        </div>
        <div>
          LCP: <span className={getPerformanceColor(metrics.lcp, 2500)}>{metrics.lcp}ms</span>
        </div>
        <div>
          Load: <span className={getPerformanceColor(metrics.loadTime, 2000)}>{metrics.loadTime}ms</span>
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 text-gray-400 hover:text-white"
        aria-label="Close performance monitor"
      >
        ×
      </button>
    </div>
  );
};

export default PerformanceMonitor; 