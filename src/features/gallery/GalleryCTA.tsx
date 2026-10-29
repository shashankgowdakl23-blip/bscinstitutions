import { Button } from "@/components/ui/button";
import { scrollToContactForm } from "@/utils/contact";

const GalleryCTA = () => (
  <section className="py-20 bg-gradient-primary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Join Our Next Batch?</h2>
      <p className="text-white/90 mb-8 max-w-2xl mx-auto">
        Experience the same quality training that over 1000+ students have received. Book your free demo today.
      </p>
      <Button size="lg" variant="secondary" className="mb-4" onClick={scrollToContactForm}>
        Book Your Free Demo & Join Us
      </Button>
      <p className="text-sm text-white/80">Limited seats • Personal attention • Proven results</p>
    </div>
  </section>
);

export default GalleryCTA; 