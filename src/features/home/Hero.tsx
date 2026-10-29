import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, TrendingUp, Users, Shield, ArrowRight } from "lucide-react";
import heroImage from "/images/hero-section/Hero-Image.png";
import { scrollToContactForm, handleWhatsAppCallNow, handleCall } from "@/utils/contact";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-14 sm:pt-0">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center min-h-[80vh]">
          {/* Left Content — F-pattern: badge → headline → subtext → single CTA */}
          <div className="text-white space-y-8 flex flex-col sm:items-center sm:text-center lg:items-start lg:text-left">
            <div className="space-y-5">
              {/* Social proof badges (Gestalt: proximity grouping) */}
              <div className="flex flex-nowrap gap-3 mb-4 overflow-x-auto sm:justify-center lg:justify-start scrollbar-hide">
                <Badge className="bg-success/20 text-success border-success/30 backdrop-blur-sm flex items-center gap-2 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  NISM Authorized | NSE Certified
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap">
                  ⭐ 1000+ Students Trained
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Master the
                <span className="block text-secondary drop-shadow-sm">Art of Financial Intelligence</span>
                with Expert Guidance
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
                Human works only 8 hours a day but money works 24 hours. If you want your money to work for you, then this is the go to place for you.
              </p>
            </div>

            {/* Hick's Law: Single prominent primary CTA + subtle secondary */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={scrollToContactForm}
                className="group min-h-[56px] text-base px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Book a free demo session"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book a Free Demo
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => handleCall()}
                className="group min-h-[56px] text-base text-white/80 hover:text-white hover:bg-white/10 rounded-xl"
                aria-label="Call us now"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mb-24 sm:mb-0 px-4 sm:px-0">
            <div className="relative">
              <img
                src={heroImage}
                alt="Financial Education"
                className="rounded-2xl shadow-2xl w-full h-auto high-quality-image"
                loading="eager"
              />
            </div>

            {/* Floating Cards (Gestalt: proximity to image creates association) */}
            {/* <Card className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 p-2 sm:p-4 bg-white/95 backdrop-blur-sm shadow-elegant">
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingUp className="h-5 w-5 sm:h-8 sm:w-8 text-success" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">Live Market Sessions</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Real-time guidance</div>
                </div>
              </div>
            </Card> */}

            <Card className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 p-2 sm:p-4 bg-white/95 backdrop-blur-sm shadow-elegant">
              <div className="flex items-center gap-2 sm:gap-3">
                <Users className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">Flexible Timing</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">For professionals</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Tagline Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white font-medium">
            "Adding value to 1 crore million—to make financial education transparent & easy."
          </p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-bounce-gentle">
      </div>
    </section>
  );
};

export default Hero;
