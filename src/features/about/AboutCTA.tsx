import { Button } from "@/components/ui/button";
import { scrollToContactForm } from "@/utils/contact";

const AboutCTA = () => (
  <section className="py-20 bg-gradient-primary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
      <p className="text-white/90 mb-8 max-w-2xl mx-auto">
        Join 1000+ students who transformed their financial future with our certified education.
      </p>
      <Button size="lg" variant="secondary" className="mb-4" onClick={scrollToContactForm}>
        Book a Free Demo Call
      </Button>
      <p className="text-sm text-white/80">No obligation • Free consultation • Personalized guidance</p>
    </div>
  </section>
);

export default AboutCTA; 