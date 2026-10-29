import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn, fadeInUp, scaleIn, fastTransition, pulseAnimation, rotateAnimation } from "@/utils/animations";

interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [loadingText, setLoadingText] = useState("Loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const texts = ["Loading", "Loading.", "Loading..", "Loading..."];
    let index = 0;
    
    const textInterval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 400); // Reduced from 500ms for faster feedback

    // Progress animation over 1.5 seconds (reduced from 3.5s)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3; // Increment by 3% every ~45ms for smoother progress
      });
    }, 45); // Reduced from 70ms for faster progress

    // Cleanup intervals
    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      transition={fastTransition}
    >
      <div className="flex flex-col items-center space-y-6"> {/* Reduced spacing */}
        {/* Logo/Brand Mark */}
        <motion.div
          className="relative"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* BSC Logo Container */}
          <motion.div
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden bg-white"
            variants={pulseAnimation}
            animate="animate"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* BSC Logo */}
            <motion.img
              src="/images/main-logos/BSC_Logo.jpg"
              alt="B.S.C. Institutions Logo"
              className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-xl relative z-10"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* Orbiting dots - simplified animation */}
          <motion.div
            className="absolute inset-0 w-24 h-24 md:w-32 md:h-32"
            variants={rotateAnimation}
            animate="animate"
          >
            {[0, 120, 240].map((angle, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                  transform: `rotate(${angle}deg) translateX(52px) translateY(-50%)`,
                }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.15
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-center space-y-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            {loadingText}
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Preparing your trading journey...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-40 md:w-56 h-2 bg-muted rounded-full overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </motion.div>

        {/* Progress Percentage */}
        <motion.div
          className="text-sm font-medium text-muted-foreground"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;