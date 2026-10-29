// Logger utility for conditional logging in development mode only
const isDevelopment = import.meta.env.DEV;

export const logger = {
  log: (...args: any[]) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  
  warn: (...args: any[]) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },
  
  error: (...args: any[]) => {
    // Always log errors, even in production
    console.error(...args);
  },
  
  info: (...args: any[]) => {
    if (isDevelopment) {
      console.info(...args);
    }
  },
  
  debug: (...args: any[]) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  }
};

// Performance logger for development only
export const perfLogger = {
  log: (message: string, data?: any) => {
    if (isDevelopment) {
      console.log(`📊 ${message}`, data || '');
    }
  },
  
  time: (label: string) => {
    if (isDevelopment) {
      console.time(`⏱️ ${label}`);
    }
  },
  
  timeEnd: (label: string) => {
    if (isDevelopment) {
      console.timeEnd(`⏱️ ${label}`);
    }
  }
}; 