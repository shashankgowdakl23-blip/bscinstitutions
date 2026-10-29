import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, scrollRevealTransition, scrollRevealViewport } from "@/utils/animations";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionWrapper = ({ 
  children, 
  id, 
  className = "", 
  delay = 0 
}: SectionWrapperProps) => {
  return (
    <motion.section 
      id={id}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ ...scrollRevealTransition, delay }}
      viewport={scrollRevealViewport}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper; 