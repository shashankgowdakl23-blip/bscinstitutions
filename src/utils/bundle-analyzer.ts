// Bundle analyzer utility for monitoring bundle sizes
export const analyzeBundle = () => {
  if (typeof window === 'undefined') return;

  // Monitor script loading performance
  const scripts = document.querySelectorAll('script[src]');
  const scriptLoadTimes: Record<string, number> = {};

  scripts.forEach((script) => {
    const src = script.getAttribute('src');
    if (src) {
      const startTime = performance.now();
      script.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        scriptLoadTimes[src] = loadTime;
        
        if (import.meta.env.DEV) {
          console.log(`📦 Script loaded: ${src} (${loadTime.toFixed(2)}ms)`);
        }
      });
    }
  });

  // Monitor resource sizes
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  const resourceSizes: Record<string, number> = {};

  resources.forEach((resource) => {
    if (resource.transferSize) {
      resourceSizes[resource.name] = resource.transferSize;
    }
  });

  // Calculate total bundle size
  const totalSize = Object.values(resourceSizes).reduce((sum, size) => sum + size, 0);
  
  if (import.meta.env.DEV) {
    console.log('📊 Bundle Analysis:', {
      totalSize: `${(totalSize / 1024 / 1024).toFixed(2)}MB`,
      resourceCount: resources.length,
      scriptLoadTimes,
      largestResources: Object.entries(resourceSizes)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([name, size]) => ({
          name: name.split('/').pop(),
          size: `${(size / 1024).toFixed(2)}KB`
        }))
    });
  }

  return {
    totalSize,
    resourceCount: resources.length,
    scriptLoadTimes,
    resourceSizes
  };
};

// Tree shaking helper
export const createTreeShakingHelper = () => {
  return {
    // Only import what you need
    importOnly: <T>(module: T, keys: (keyof T)[]) => {
      const result: Partial<T> = {};
      keys.forEach(key => {
        if (module[key] !== undefined) {
          result[key] = module[key];
        }
      });
      return result;
    },
    
    // Lazy load components
    lazyLoad: <T>(importFn: () => Promise<T>) => {
      let cached: T | null = null;
      return async () => {
        if (!cached) {
          cached = await importFn();
        }
        return cached;
      };
    }
  };
};

// Performance monitoring
export const monitorPerformance = () => {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (import.meta.env.DEV) {
        console.log('🎯 Performance Metric:', {
          name: entry.name,
          value: (entry as any).value || 'N/A',
          type: entry.entryType
        });
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

  // Monitor memory usage
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as any).memory;
      if (import.meta.env.DEV) {
        console.log('🧠 Memory Usage:', {
          used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
          total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
          limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`
        });
      }
    }, 10000); // Check every 10 seconds
  }
}; 