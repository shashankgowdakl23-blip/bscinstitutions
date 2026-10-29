import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import FormFieldError from "@/components/shared/FormFieldError";
import { CheckCircle2, ShieldCheck } from "lucide-react";

// PHP mailer endpoint hosted on Hostinger.
// Update this URL to match your Hostinger domain once deployed.
const ENQUIRY_API_URL = "/api/send_enquiry.php";

interface EnquiryFormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitted?: () => void;
}

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  iAmA: string;
  interestedIn: string;
  preferredMode: string;
};

const initialFormData: FormData = {
  fullName: "",
  phone: "",
  email: "",
  iAmA: "",
  interestedIn: "",
  preferredMode: "",
};

const FIELD_CLASS =
  "bg-muted/30 focus:bg-background transition-all duration-200 min-h-[40px]";

const EnquiryFormPopup = ({
  open,
  onOpenChange,
  onSubmitted,
}: EnquiryFormPopupProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Phone accepts digits only, max 10
    const cleaned =
      field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    const updated = { ...formData, [field]: cleaned };
    setFormData(updated);
    // Live validation: show errors as the user types
    setErrors((prev) => ({ ...prev, [field]: validateField(field, updated) || undefined }));
  };

  const validateField = (
    field: keyof FormData,
    data: FormData = formData
  ): string => {
    const value = data[field].trim();

    switch (field) {
      case "fullName":
        if (!value) return "Full name is required";
        if (value.length < 2) return "Full name must be at least 2 characters";
        if (!/^[A-Za-z .'-]+$/.test(value))
          return "Full name can only contain letters";
        return "";
      case "phone":
        if (!value) return "Phone number is required";
        if (value.length !== 10) return "Phone number must be 10 digits";
        if (!/^[6-9]\d{9}$/.test(value))
          return "Enter a valid 10-digit Indian mobile number";
        return "";
      case "email":
        if (!value) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
          return "Enter a valid email address";
        return "";
      case "iAmA":
        return value ? "" : "Please select an option";
      case "interestedIn":
        return value ? "" : "Please select an option";
      case "preferredMode":
        return value ? "" : "Please select a mode";
      default:
        return "";
    }
  };

  // All required fields must be valid before the submit button enables
  const isFormValid = (
    ["fullName", "phone", "email", "iAmA", "interestedIn", "preferredMode"] as (
      keyof FormData
    )[]
  ).every((field) => validateField(field) === "");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    (Object.keys(initialFormData) as (keyof FormData)[]).forEach((field) => {
      const error = validateField(field);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      iAmA: formData.iAmA,
      interestedIn: formData.interestedIn,
      preferredMode: formData.preferredMode,
    };

    try {
      const response = await fetch(ENQUIRY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Enquiry submitted successfully!", {
          description: "Our team will get in touch with you shortly.",
        });
        onSubmitted?.();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Enquiry form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-xl p-0 gap-0 overflow-hidden rounded-2xl border-border/60 shadow-elegant flex flex-col h-[650px] max-h-[90vh] [&>button.absolute]:top-4 [&>button.absolute]:right-4 [&>button.absolute]:z-10 [&>button.absolute]:text-white [&>button.absolute]:bg-white/15 [&>button.absolute]:rounded-full [&>button.absolute]:h-8 [&>button.absolute]:w-8 [&>button.absolute]:flex [&>button.absolute]:items-center [&>button.absolute]:justify-center [&>button.absolute]:hover:bg-white/25 [&>button.absolute]:hover:opacity-100 [&>button.absolute]:opacity-100"
        aria-describedby="enquiry-form-description"
      >
        <DialogTitle className="sr-only">
          Need Help Choosing the Right Course?
        </DialogTitle>

        {/* Gradient header banner matching the site's hero theme */}
        <div className="relative bg-gradient-hero px-5 py-3 text-center text-white">
          <h2 className="text-lg font-bold text-white leading-snug">
            Need Help Choosing the Right Course?
          </h2>
          <p
            id="enquiry-form-description"
            className="mt-0.5 text-xs text-white/85 max-w-sm mx-auto"
          >
            Fill in your details and our team will guide you to the best
            program for your goals.
          </p>
        </div>

        <div className="flex-1 min-h-0 p-5 sm:p-6 overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center text-center gap-3 py-8"
              >
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center ring-8 ring-success/5">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-bold">Thank You!</h3>
                <p className="text-muted-foreground max-w-xs">
                  Your enquiry has been submitted successfully. Our team will
                  contact you shortly.
                </p>
                <DialogClose asChild>
                  <Button
                    variant="default"
                    className="min-h-[44px] mt-1 bg-gradient-primary hover:opacity-90"
                    onClick={() => {
                      resetForm();
                      onOpenChange(false);
                    }}
                  >
                    Close
                  </Button>
                </DialogClose>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="enquiry-fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="enquiry-fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className={FIELD_CLASS}
                    aria-invalid={!!errors.fullName}
                  />
                  <FormFieldError error={errors.fullName} />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="enquiry-phone">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="enquiry-phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={FIELD_CLASS}
                      aria-invalid={!!errors.phone}
                    />
                    <FormFieldError error={errors.phone} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="enquiry-email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="enquiry-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={FIELD_CLASS}
                      aria-invalid={!!errors.email}
                    />
                    <FormFieldError error={errors.email} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>
                    I am a <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.iAmA}
                    onValueChange={(value) => handleInputChange("iAmA", value)}
                  >
                    <SelectTrigger className={FIELD_CLASS}>
                      <SelectValue placeholder="Select your profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="School Student">School Student</SelectItem>
                      <SelectItem value="College Student">College Student</SelectItem>
                      <SelectItem value="Working Professional">
                        Working Professional
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormFieldError error={errors.iAmA} />
                </div>

                <div className="space-y-1.5">
                  <Label>
                    Interested In <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.interestedIn}
                    onValueChange={(value) => handleInputChange("interestedIn", value)}
                  >
                    <SelectTrigger className={FIELD_CLASS}>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Stock Market Basic">
                        Stock Market Basic
                      </SelectItem>
                      <SelectItem value="Cash Market">Cash Market</SelectItem>
                      <SelectItem value="Financial Mentorship">
                        Financial Mentorship
                      </SelectItem>
                      <SelectItem value="Financial Premium Mentorship">
                        Financial Premium Mentorship
                      </SelectItem>
                      <SelectItem value="Not sure / Need Guidance">
                        Not sure / Need Guidance
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormFieldError error={errors.interestedIn} />
                </div>

                <div className="space-y-1.5">
                  <Label>
                    Preferred Mode of Programs{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.preferredMode}
                    onValueChange={(value) =>
                      handleInputChange("preferredMode", value)
                    }
                  >
                    <SelectTrigger className={FIELD_CLASS}>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Online">Online</SelectItem>
                      <SelectItem value="Offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormFieldError error={errors.preferredMode} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-sm min-h-[44px] rounded-xl disabled:opacity-50 disabled:hover:opacity-50"
                  disabled={isSubmitting || !isFormValid}
                  aria-label="Submit enquiry form"
                >
                  {isSubmitting ? (
                    <LoadingSpinner
                      size="sm"
                      text="Submitting..."
                      className="flex-row gap-2"
                    />
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>

                <p className="flex items-start justify-center gap-1.5 text-xs text-center text-muted-foreground leading-relaxed">
                  <ShieldCheck className="h-3.5 w-3.5 mt-0.5 shrink-0 text-secondary" />
                  <span>
                    By submitting, you agree to be contacted via
                    call/WhatsApp/email regarding BSC programs.
                  </span>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryFormPopup;
