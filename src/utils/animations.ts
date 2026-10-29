import { AnimationConfig, ViewportConfig, MotionVariants } from "@/types/framer-motion";

// Common animation configurations
export const fadeInUp: MotionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn: MotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleIn: MotionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const slideInLeft: MotionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const slideInRight: MotionVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

// Unified transition configurations
export const scrollRevealTransition: AnimationConfig = {
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1.0] // Standard easing for smooth reveals
};

export const staggeredTransition: AnimationConfig = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1.0]
};

export const fastTransition: AnimationConfig = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1.0]
};

// Unified viewport configurations for consistent reveal timing
export const scrollRevealViewport: ViewportConfig = {
  once: true,
  amount: 0.2,
  margin: "-10% 0px -10% 0px"
};

// Legacy support - will be replaced
export const defaultTransition: AnimationConfig = scrollRevealTransition;
export const slowTransition: AnimationConfig = scrollRevealTransition;
export const defaultViewport: ViewportConfig = scrollRevealViewport;

export const fullViewport: ViewportConfig = {
  once: true,
  amount: 1
};

// Unified stagger animations with consistent timing
export const staggerContainer: MotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export const staggerItem: MotionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Hover animations
export const hoverScale: MotionVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export const hoverLift: MotionVariants = {
  hover: { y: -5, scale: 1.02 },
  tap: { y: 0, scale: 0.98 }
};

// Loading animations
export const pulseAnimation: MotionVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8]
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const rotateAnimation: MotionVariants = {
  animate: { rotate: 360 },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }
};

// Utility function to create consistent staggered animations
export const createStaggerAnimation = (
  staggerDelay: number = 0.15,
  itemAnimation: MotionVariants = fadeInUp
): MotionVariants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  ...itemAnimation
});

// Utility function to create delay-based animations with unified timing
export const createDelayedAnimation = (
  delay: number,
  baseAnimation: MotionVariants = fadeInUp
): MotionVariants => ({
  ...baseAnimation,
  transition: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0],
    delay
  }
});