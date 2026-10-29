import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Clock, Award, Shield, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { handleWhatsApp, handleCall, handleEmail, handleWhatsAppFreeDemo } from "@/utils/contact";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const handleFreeDemo = () => {
    handleWhatsAppFreeDemo();
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      
      {/* Main Footer */}
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">B.S.C. Institutions</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Karnataka's premier financial education institute, making financial knowledge accessible to everyone.
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <span className="text-sm">NISM Authorized Training Partner | NSE Certified | AMFI Registered</span>
                </div>
                <div className="text-sm text-primary-foreground/80 pl-7">ARN-327075</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <div>
                  <button 
                    onClick={() => navigateToPage('/courses')}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Navigate to our courses page"
                  >
                    Our Courses
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => scrollToSection('trainer')}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Scroll to trainer information section"
                  >
                    About Trainer
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => navigateToPage('/success-stories')}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Navigate to success stories page"
                  >
                    Success Stories
                  </button>
                </div>
                <div>
                  <button 
                    onClick={handleFreeDemo}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Book a free demo session"
                  >
                    Free Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <button 
                    onClick={() => handleCall()}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Call us at +91 63600 49713 "
                  >
                    +91 63600 49713 
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-secondary" />
                  <button 
                    onClick={() => handleWhatsApp()}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Contact us on WhatsApp"
                  >
                    WhatsApp Support
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <button 
                    onClick={() => handleEmail()}
                    className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Send us an email at enquiry@bscinstitutions.com"
                  >
                    enquiry@bscinstitutions.com
                  </button>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-secondary mt-1" />
                  <span className="text-primary-foreground/80">Karnataka, India<br />Online & Offline Classes</span>
                </div>
              </div>
            </div>

            {/* Class Timings */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Class Timings</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-secondary" />
                  <div>
                    <div className="text-primary-foreground/80">Flexible Slots Available</div>
                    <div className="text-sm text-primary-foreground/60">Designed for working professionals</div>
                  </div>
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  • Morning Sessions<br />
                  • Evening Sessions<br />
                  • Weekend Batches<br />
                  • Online & Offline Options
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-primary/90 border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-secondary" />
            Important Disclaimers
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-primary-foreground/80 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong>Registration Disclaimer:</strong> Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
              </p>
              <p>
                <strong>Securities Disclaimer:</strong> The securities quoted (if any) on our website or in any of our advertisement are for illustration only and are not recommendatory.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <strong>Market Risk Warning:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
              </p>
              <p>
                <strong>SEBI Notice:</strong> Clients shall be requested to go through Do's and Don'ts while dealing with RA as specified in SEBI master circular no. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024 or as may be specified by SEBI from time to time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 B.S.C. Institutions. All rights reserved. <br />
              Designed & Developed by Divine Innovative
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button 
                onClick={() => navigateToPage('/privacy-policy')}
                className="text-primary-foreground/60 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                aria-label="View our privacy policy"
              >
                <FileText className="h-3 w-3" />
                Privacy Policy
              </button>
              <button 
                onClick={() => navigateToPage('/terms-of-service')}
                className="text-primary-foreground/60 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                aria-label="View our terms of service"
              >
                <FileText className="h-3 w-3" />
                Terms of Service
              </button>
            </div>
            <div className="text-center text-sm text-primary-foreground/60">
              "Adding value to 1 crore million—to make financial education transparent & easy."
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Button 
        variant="whatsapp"
        size="lg"
        onClick={() => handleWhatsApp()}
        className="fixed bottom-6 right-6 z-40 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </footer>
  );
};

export default Footer;