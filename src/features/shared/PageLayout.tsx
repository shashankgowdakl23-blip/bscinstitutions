import { motion } from "framer-motion";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SkipToContent from "@/components/ui/skip-to-content";
import FloatingSocialIcons from "@/components/ui/floating-social-icons";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    opacity: 0, 
    y: -8,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const PageLayout = ({ 
  children, 
  className = "min-h-screen", 
  background = "bg-gradient-to-br from-primary/5 via-background to-secondary/5" 
}: PageLayoutProps) => {
  return (
    <motion.div 
      className={`${className} ${background} antialiased`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <SkipToContent />
      <Header />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingSocialIcons />
    </motion.div>
  );
};

export default PageLayout; 