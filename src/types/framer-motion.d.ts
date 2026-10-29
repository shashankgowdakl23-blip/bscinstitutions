// Type definitions for Framer Motion v12+ compatibility
import { AnimationProps, MotionProps, Variants } from "framer-motion";

declare module "framer-motion" {
  // Extend animation properties to be more flexible
  interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    whileInView?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    transition?: any;
    variants?: any;
    viewport?: any;
  }

  // Extend motion props to be more flexible
  interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    whileInView?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    transition?: any;
    variants?: any;
    viewport?: any;
  }

  // Extend variants to be more flexible
  interface Variants {
    [key: string]: any;
  }
}

// Global type declarations for common animation patterns
export interface AnimationConfig {
  duration?: number;
  ease?: string | number[];
  delay?: number;
  repeat?: number | "Infinity";
  repeatType?: "loop" | "reverse" | "mirror";
  repeatDelay?: number;
}

export interface ViewportConfig {
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
}

export interface MotionVariants {
  hidden?: any;
  visible?: any;
  exit?: any;
  hover?: any;
  tap?: any;
  focus?: any;
  drag?: any;
  [key: string]: any;
} 