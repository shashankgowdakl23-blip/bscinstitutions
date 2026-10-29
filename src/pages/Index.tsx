import { PageLayout, SectionWrapper, CTA } from "@/features/shared";
import Hero from "@/features/home/Hero";
import HowItWorks from "@/features/home/HowItWorks";
import Courses from "@/features/home/Courses";
import TrainerProfile from "@/features/home/TrainerProfile";
import Testimonials from "@/features/home/Testimonials";
import FAQ from "@/features/home/FAQ";
import ContactForm from "@/features/home/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { handleWhatsAppFreeDemo, handleCall, scrollToContactForm, checkAndScrollToContact } from "@/utils/contact";
import { useEffect, useState } from "react";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/config/seo";
import PartnersSection from "@/features/shared/partner-sections/Partner";
import EnquiryFormPopup from "@/features/home/EnquiryFormPopup";

const ENQUIRY_POPUP_SESSION_KEY = "enquiryPopupShown";

const Index = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // Show the enquiry popup once per session on the home page load
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(ENQUIRY_POPUP_SESSION_KEY);
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setEnquiryOpen(true);
        sessionStorage.setItem(ENQUIRY_POPUP_SESSION_KEY, "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Check if we should scroll to contact form after page load
  useEffect(() => {
    checkAndScrollToContact();
  }, []);

  return (
    <>
      <SEOHead {...seoConfig.home} />
      <PageLayout background="">
        <main>
          <SectionWrapper id="home">
            <Hero />
          </SectionWrapper>

          <section id="how-it-works">
            <HowItWorks />
          </section>

          <SectionWrapper id="courses">
            <Courses />
          </SectionWrapper>

          {/* <SectionWrapper id="trainer">
            <TrainerProfile />
          </SectionWrapper> */}

          <SectionWrapper id="testimonials">
            <Testimonials />
          </SectionWrapper>

          <SectionWrapper id="partner">
            <PartnersSection />
          </SectionWrapper>

          <SectionWrapper id="faq">
            <FAQ />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <ContactForm />
          </SectionWrapper>

          <section className="py-20 sm:py-28 bg-gradient-primary">
            <div className="container mx-auto px-4">
              <Card className="p-10 sm:p-14 bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    Ready to Transform Your Financial Future?
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Join 1000+ students who transformed their financial knowledge with BSC Institutions.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      variant="whatsapp"
                      size="lg"
                      onClick={scrollToContactForm}
                      className="shadow-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Start with Free Demo
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => handleCall()}
                      className="shadow-lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Consultation
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </PageLayout>
      <EnquiryFormPopup
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
      />
    </>
  );
};

export default Index;
