import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CTAButtons } from "./CTAButtons";

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: any[];
  onItemClick: (action: () => void) => void;
  onKeyDown: (e: React.KeyboardEvent, action: () => void) => void;
  onWhatsAppClick: () => void;
  onCallClick: () => void;
  textColorClass: string;
}

export const MobileMenu = ({
  isOpen,
  navigationItems,
  onItemClick,
  onKeyDown,
  onWhatsAppClick,
  onCallClick,
  textColorClass,
}: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div 
      id="mobile-menu"
      className="lg:hidden py-4 border-t border-white/20"
      role="navigation"
      aria-label="Mobile menu"
    >
      <div className="space-y-1">
        {navigationItems.map((item) => (
          <div key={item.label} className="space-y-1">
            <button
              onClick={() => item.hasDropdown ? toggleDropdown(item.label) : onItemClick(item.action)}
              onKeyDown={(e) => item.hasDropdown ? 
                (e.key === 'Enter' || e.key === ' ') && toggleDropdown(item.label) : 
                onKeyDown(e, item.action)
              }
              className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] ${textColorClass}`}
              aria-label={item.ariaLabel}
              aria-expanded={item.hasDropdown ? openDropdown === item.label : undefined}
              tabIndex={0}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <span className="ml-2">
                  {openDropdown === item.label ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              )}
            </button>
            
            {item.hasDropdown && item.dropdownItems && openDropdown === item.label && (
              <div className="pl-6 space-y-1 mt-1">
                {item.dropdownItems.map((subItem: any) => (
                  <button
                    key={subItem.label}
                    onClick={() => onItemClick(subItem.action)}
                    onKeyDown={(e) => onKeyDown(e, subItem.action)}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-colors duration-300 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 min-h-[36px] ${textColorClass}`}
                    aria-label={subItem.ariaLabel}
                    tabIndex={0}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="px-4 pt-4">
          <CTAButtons 
            onWhatsAppClick={onWhatsAppClick}
            onCallClick={onCallClick}
            onKeyDown={onKeyDown}
            isMobile
          />
        </div>
      </div>
    </div>
  );
};
