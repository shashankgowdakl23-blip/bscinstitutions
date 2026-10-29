import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "Is this a scam? How can I trust this training?",
      answer: "We understand your concern. Mr. Shashank Gowda k is NISM certified (you can verify this), has trained 1000+ students with documented success stories, and offers a free demo session so you can experience our teaching quality before paying anything. We provide transparent education, not get-rich-quick schemes."
    },
    {
      question: "I have zero experience in financial markets. Can I still learn?",
      answer: "Absolutely! Our beginner course is designed specifically for complete beginners. We start with basic concepts like what is a stock, how markets work, and gradually build your knowledge and confidence. 60% of our students started with zero experience."
    },
    {
      question: "How much time do I need to invest daily?",
      answer: "For learning: 1 hour per session (flexible timing). For actual trading: 30-60 minutes daily once you're trained. We focus on swing trading and positional trades that don't require constant monitoring. Perfect for working professionals."
    },
    {
      question: "Will I lose money while learning?",
      answer: "Our courses teach you risk management FIRST before any trading. We start with virtual trading, then guide you to use only 10-20% of your available funds initially. We teach you to never risk more than 2% per trade. Safety and capital protection are our top priorities."
    },
    {
      question: "What if I can't attend live sessions due to work?",
      answer: "This is exactly why we created flexible time slots! Choose morning, evening, or weekend batches. All sessions are recorded and provided to you. You can also reschedule sessions with 24-hour notice. We work around YOUR schedule."
    },
    {
      question: "How much money do I need to start trading?",
      answer: "You can start learning with ₹0 (virtual trading). For real trading, we recommend starting with ₹25,000-50,000. This allows for proper diversification and risk management. Never invest more than you can afford to lose initially."
    },
    {
      question: "Do you guarantee profits or returns?",
      answer: "No legitimate educator can guarantee profits - that's a red flag of scams. We teach you skills, strategies, and risk management. Your success depends on discipline, continuous learning, and following the rules we teach. Our students average 12-18% annual returns, but individual results vary."
    },
    {
      question: "What makes you different from YouTube tutorials?",
      answer: "Personal mentorship, live market sessions, doubt clearing, updated strategies based on current market conditions, structured curriculum, certification, and most importantly - ongoing support. YouTube teaches concepts; we teach practical application and provide accountability."
    }
  ];

  const guarantees = [
    { icon: Shield, title: "NISM Certified", description: "Government recognized certification" },
    { icon: Users, title: "1000+ Students", description: "Proven track record with success stories" },
    { icon: CheckCircle, title: "Free Demo", description: "Experience our teaching before paying" },
    { icon: Clock, title: "Flexible Timing", description: "Learn around your work schedule" }
  ];

  // Miller's Law: Show 5 FAQs initially (within 5±2 range)
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Your Questions Answered</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand your concerns about financial market education.. Here are honest answers to the most common questions.
          </p>
        </div>

        {/* Trust Guarantees — Gestalt: proximity grouping of 4 trust signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <Card key={index} className="text-center p-4 sm:p-6 border-border/60 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 rounded-2xl">
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
                  </div>
                </div>
                <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{guarantee.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{guarantee.description}</p>
              </Card>
            );
          })}
        </div>

        {/* FAQ Accordion — Progressive Disclosure */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AnimatePresence mode="popLayout">
              {visibleFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border/60 rounded-2xl px-6 hover:shadow-md transition-all duration-300 hover:border-primary/20 bg-card"
                  >
                    <AccordionTrigger className="text-left py-6 hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </Accordion>

          {/* Progressive Disclosure: Show more */}
          {!showAll && faqs.length > 5 && (
            <div className="text-center mt-8">
              <Button
                variant="ghost"
                onClick={() => setShowAll(true)}
                className="gap-2 text-primary hover:text-primary"
              >
                Show {faqs.length - 5} More Questions
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
