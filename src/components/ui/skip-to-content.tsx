import { cn } from "@/lib/utils";

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50",
        "bg-primary text-primary-foreground px-4 py-2 rounded-md",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transform -translate-y-12 focus:translate-y-0 transition-transform"
      )}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;