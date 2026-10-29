import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CTAButtonsProps {
  onWhatsAppClick: () => void;
  onCallClick: () => void;
  onKeyDown: (e: React.KeyboardEvent, action: () => void) => void;
  isMobile?: boolean;
}

export const CTAButtons = ({
  onWhatsAppClick,
  onCallClick,
  onKeyDown,
  isMobile = false,
}: CTAButtonsProps) => {
  return (
    <div className={isMobile ? "space-y-3" : "flex items-center gap-3"}>
      <Button
        variant="default"
        size="sm"
        onClick={() => onWhatsAppClick()}
        onKeyDown={(e) => onKeyDown(e, onWhatsAppClick)}
        className={`group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium shadow-md hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 px-4 ${isMobile ? 'w-full' : ''}`}
        aria-label="Get a quote for our courses"
        tabIndex={0}
      >
        <MessageCircle className="h-4 w-4" />
        <span>Get Insurance</span>
      </Button>
      
    </div>
  );
};
