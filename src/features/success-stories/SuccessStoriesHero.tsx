import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { hoverScale, fastTransition } from "@/utils/animations";

const SuccessStoriesHero = () => (
  <section className="pt-24 pb-16 bg-gradient-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge - Fixed alignment and responsive sizing */}
        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm sm:text-base mb-6 inline-flex items-center">
          Student Transformations
        </Badge>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          From Beginners to
          <span className="block text-secondary">Confident Investors.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Discover how ordinary individuals turned their financial aspirations into reality — guided by expert mentorship at B.S.C. Institutions.
        </p>
        
        {/* Stats Cards - Fixed mobile responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
          <motion.div 
            className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 md:p-6"
            variants={hoverScale}
            whileHover="hover"
            whileTap="tap"
            transition={fastTransition}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">3+</div>
            <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
          </motion.div>
          <motion.div 
            className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 md:p-6"
            variants={hoverScale}
            whileHover="hover"
            whileTap="tap"
            transition={fastTransition}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">1000+</div>
            <div className="text-xs sm:text-sm text-white/80">Students Mentored</div>
          </motion.div>
          <motion.div 
            className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 md:p-6"
            variants={hoverScale}
            whileHover="hover"
            whileTap="tap"
            transition={fastTransition}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">NISM</div>
            <div className="text-xs sm:text-sm text-white/80">Certified</div>
          </motion.div>
          <motion.div
            className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 md:p-6"
            variants={hoverScale}
            whileHover="hover"
            whileTap="tap"
            transition={fastTransition}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">NSE</div>
            <div className="text-xs sm:text-sm text-white/80">Certified</div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default SuccessStoriesHero; 