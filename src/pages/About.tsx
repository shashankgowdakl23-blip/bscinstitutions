import { motion } from "framer-motion";
import Header from "@/features/shared/Header";
import Footer from "@/features/shared/Footer";
import AboutHero from "@/features/about/AboutHero";
import OurStory from "@/features/about/OurStory";
import VisionMission from "@/features/about/VisionMission";
import TrainerBio from "@/features/about/TrainerBio";
import Milestones from "@/features/about/Milestones";
import AboutCTA from "@/features/about/AboutCTA";
import { Button } from "@/components/ui/button";
import { fadeIn, defaultTransition } from "@/utils/animations";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/config/seo";

const About = () => (
  <motion.div 
    className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5"
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={defaultTransition}
  >
    <SEOHead {...seoConfig.about} />
    <Header />
    <AboutHero />
    <OurStory />
    <VisionMission />
    {/* <TrainerBio /> */}
    <Milestones />
    <AboutCTA />
    <Footer />
  </motion.div>
);

export default About;