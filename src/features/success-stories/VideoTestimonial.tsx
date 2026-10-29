import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { fadeInUp, scrollRevealTransition, scrollRevealViewport } from "@/utils/animations";

const VideoTestimonial = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={scrollRevealTransition}
        viewport={scrollRevealViewport}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          See the Journey Unfold
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Watch how our students went from market anxiety to trading with clarity and confidence.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-border/50">
            <Button variant="outline" size="lg" className="bg-background/80 backdrop-blur-sm hover:bg-background">
              <Play className="w-6 h-6 mr-2" />
              Watch Success Story
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VideoTestimonial; 