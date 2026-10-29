import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToContactForm, handleWhatsAppSuccessStories } from "@/utils/contact";

const SuccessCTA = () => (
  <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-50"></div>
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
        viewport={{ once: true, amount: 0.2, margin: "-10% 0px -10% 0px" }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Your Transformation 
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Starts Here.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          Join 1,000+ students who chose expert guidance over guesswork — and built a skill that pays for life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-3" onClick={scrollToContactForm}>
              Book Free Demo
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-black text-lg px-8 py-3" onClick={handleWhatsAppSuccessStories}>
              WhatsApp Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SuccessCTA; 