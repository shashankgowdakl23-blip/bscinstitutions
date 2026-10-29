import { useState } from 'react';
import { NavItem } from "./NavItem";

interface DesktopNavProps {
  navigationItems: any[];
  isCounsellingOpen: boolean;
  textColorClass: string;
  dropdownRef: React.RefObject<HTMLDivElement>;
  onItemClick: (action: () => void, e?: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent, action: () => void) => void;
}

export const DesktopNav = ({
  navigationItems,
  isCounsellingOpen,
  textColorClass,
  dropdownRef,
  onItemClick,
  onKeyDown,
}: DesktopNavProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavItemClick = (item: any, e: React.MouseEvent) => {
    if (item.hasDropdown) {
      e?.preventDefault();
      setOpenDropdown(openDropdown === item.label ? null : item.label);
    } else {
      onItemClick(item.action, e);
    }
  };

  return (
    <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main menu">
      {navigationItems.map((item) => (
        <div key={item.label} ref={item.hasDropdown ? dropdownRef : null} className="relative">
          <NavItem
            label={item.label}
            action={(e: React.MouseEvent) => handleNavItemClick(item, e)}
            hasDropdown={item.hasDropdown}
            isDropdownOpen={item.hasDropdown && openDropdown === item.label}
            ariaLabel={item.ariaLabel}
            textColorClass={textColorClass}
          >
            {item.hasDropdown && openDropdown === item.label && (
              <div 
                className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50 max-h-[80vh] overflow-y-auto"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="counselling-menu"
              >
                <div className="py-1" role="none">
                  {item.dropdownItems?.map((dropdownItem: any) => (
                    <button
                      key={dropdownItem.ariaLabel}
                      onClick={dropdownItem.action}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          dropdownItem.action();
                        }
                      }}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
                      role="menuitem"
                      tabIndex={0}
                      aria-label={dropdownItem.ariaLabel}
                    >
                      {dropdownItem.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </NavItem>
        </div>
      ))}
    </nav>
  );
};
