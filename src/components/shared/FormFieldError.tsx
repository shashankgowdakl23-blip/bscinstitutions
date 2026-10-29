import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormFieldErrorProps {
  error?: string;
  className?: string;
}

const FormFieldError = ({ error, className }: FormFieldErrorProps) => {
  if (!error) return null;

  return (
    <div 
      className={cn(
        "flex items-center gap-2 text-sm text-destructive mt-1",
        className
      )}
      role="alert"
      aria-live="polite"
    >
      <AlertTriangle className="h-4 w-4 flex-shrink-0" />
      <span>{error}</span>
    </div>
  );
};

export default FormFieldError;