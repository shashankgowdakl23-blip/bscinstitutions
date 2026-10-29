import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star, Users, Award } from "lucide-react";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonAction: () => void;
  showStats?: boolean;
  variant?: "gradient" | "solid";
  className?: string;
}

const CTA = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
  showStats = false,
  variant = "gradient",
  className = ""
}: CTAProps) => {
  const baseClasses = "py-12 sm:py-16";
  const variantClasses = variant === "gradient" 
    ? "bg-gradient-to-r from-primary to-secondary" 
    : "bg-primary";
  
  return (
    <section className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            {description}
          </p>
          {/* Hick's Law: Single prominent primary CTA, secondary is understated */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 hover:shadow-lg text-lg px-6 sm:px-8 min-h-[56px] transition-all duration-300 ease-out group rounded-xl"
              onClick={primaryButtonAction}
              aria-label={primaryButtonText}
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              {primaryButtonText}
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 text-lg px-6 sm:px-8 min-h-[56px] transition-all duration-300 ease-out group rounded-xl"
              onClick={secondaryButtonAction}
              aria-label={secondaryButtonText}
            >
              <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              {secondaryButtonText}
            </Button>
          </div>
          {showStats && (
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                <span className="text-sm sm:text-base">5/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">1000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">NISM Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">NSE Certified</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
