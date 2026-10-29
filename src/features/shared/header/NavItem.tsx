import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface NavItemProps {
  label: string;
  action: (e?: any) => void;
  hasDropdown?: boolean;
  isDropdownOpen?: boolean;
  ariaLabel: string;
  textColorClass: string;
  children?: ReactNode;
}

export const NavItem = ({
  label,
  action,
  hasDropdown = false,
  isDropdownOpen = false,
  ariaLabel,
  textColorClass,
  children,
}: NavItemProps) => {
  return (
    <div className="relative">
      <button
        onClick={action}
        className={`flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ease-out hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[44px] ${textColorClass} ${
          isDropdownOpen ? 'bg-white/10' : ''
        }`}
        aria-expanded={hasDropdown ? isDropdownOpen : undefined}
        aria-haspopup={hasDropdown ? "true" : undefined}
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {label}
        {hasDropdown && (
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`} 
          />
        )}
      </button>
      {children}
    </div>
  );
};
