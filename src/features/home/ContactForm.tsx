import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, CheckCircle, User, BookOpen, Clock } from "lucide-react";
import { handleWhatsApp, handleCall } from "@/utils/contact";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import FormFieldError from "@/components/shared/FormFieldError";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { label: "About You", icon: User },
  { label: "Experience", icon: BookOpen },
  { label: "Schedule", icon: Clock },
];

const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    experience: "",
    timeSlot: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (stepIndex: number) => {
    const newErrors: Record<string, string> = {};
    
    if (stepIndex === 0) {
      if (!formData.name.trim()) newErrors.name = "Full name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.email.trim()) newErrors.email = "Email address is required";
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.city.trim()) newErrors.city = "City is required";
    } else if (stepIndex === 1) {
      if (!formData.age) newErrors.age = "Please select your age group";
      if (!formData.experience) newErrors.experience = "Please select your trading experience";
    } else if (stepIndex === 2) {
      if (!formData.timeSlot) newErrors.timeSlot = "Please select your preferred time slot";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 2));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(step)) return;
    
    setIsSubmitting(true);
    
    try {
      const message = `Hi! I want to book a free demo session.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Age: ${formData.age}
Trading Experience: ${formData.experience}
Preferred Time: ${formData.timeSlot}
Message: ${formData.message}

Please confirm my demo session slot. Thank you!`;

      setIsSubmitted(true);
      setTimeout(() => handleWhatsApp(message), 1000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 border-success/20 bg-success/5">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h2 className="text-3xl font-bold text-success">Thank You!</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">Your demo session request has been submitted successfully.</p>
                  <div className="bg-muted/50 p-4 rounded-lg text-left">
                    <h3 className="font-semibold mb-3">What happens next:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>✅ WhatsApp message opened automatically</li>
                      <li>✅ We'll confirm your time slot within 2 hours</li>
                      <li>✅ You'll receive demo session link via WhatsApp</li>
                      <li>✅ Free market analysis included in demo</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="default" onClick={() => handleWhatsApp()} className="group min-h-[48px]" aria-label="Open WhatsApp">
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Open WhatsApp
                  </Button>
                  <Button variant="outline" onClick={() => handleCall()} className="min-h-[48px]" aria-label="Call us directly">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Direct
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Didn't get WhatsApp message? Call us directly at <strong>+91 63600 49713 </strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant rounded-2xl border-border/60 overflow-hidden">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl font-bold">Book Your Free Demo</CardTitle>
              <p className="text-muted-foreground">
                Quick 3-step form — takes less than a minute
              </p>
            </CardHeader>

            {/* Progress indicator — Miller's Law: chunked into 3 steps */}
            <div className="px-6 pb-4">
              <div className="flex items-center justify-between mb-2">
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => { if (i < step) setStep(i); }}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        i <= step ? 'text-primary' : 'text-muted-foreground'
                      } ${i < step ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        i < step ? 'bg-primary text-primary-foreground' :
                        i === step ? 'bg-primary/10 text-primary ring-2 ring-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {i < step ? <CheckCircle className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                      </div>
                      <span className="hidden sm:inline">{s.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                />
              </div>
            </div>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: About You */}
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]" aria-invalid={!!errors.name} />
                          <FormFieldError error={errors.name} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+91 63600 49713 " value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]" aria-invalid={!!errors.phone} />
                          <FormFieldError error={errors.phone} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]" aria-invalid={!!errors.email} />
                        <FormFieldError error={errors.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" type="text" placeholder="Bangalore, Mysore, etc." value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} required className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]" />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Experience */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="age">Age Group *</Label>
                        <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                          <SelectTrigger className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]">
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-25">18-25 years</SelectItem>
                            <SelectItem value="26-35">26-35 years</SelectItem>
                            <SelectItem value="36-45">36-45 years</SelectItem>
                            <SelectItem value="46+">46+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Trading Experience *</Label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]">
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="complete-beginner">Complete Beginner (Never traded)</SelectItem>
                            <SelectItem value="basic">Basic (Heard about stocks, never invested)</SelectItem>
                            <SelectItem value="some-experience">Some Experience (Have demat account)</SelectItem>
                            <SelectItem value="regular-trader">Regular Trader (Want to improve)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Schedule */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="timeSlot">Preferred Time Slot *</Label>
                        <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                          <SelectTrigger className="focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]">
                            <SelectValue placeholder="Choose convenient time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (7:00 AM - 10:00 AM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (2:00 PM - 5:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (6:00 PM - 9:00 PM)</SelectItem>
                            <SelectItem value="weekend">Weekend (Flexible)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Any Specific Questions? (Optional)</Label>
                        <Textarea id="message" placeholder="Tell us what you want to learn..." value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="focus:ring-2 focus:ring-primary/20 transition-all" rows={3} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation — Fitts's Law: large touch targets */}
                <div className="flex gap-3 pt-2">
                  {step > 0 && (
                    <Button type="button" variant="outline" onClick={handleBack} className="min-h-[48px] flex-1">
                      Back
                    </Button>
                  )}
                  {step < 2 ? (
                    <Button type="button" onClick={handleNext} className="min-h-[48px] flex-1 bg-gradient-primary hover:opacity-90">
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-primary hover:opacity-90 text-lg min-h-[52px]"
                      disabled={isSubmitting}
                      aria-label="Submit form to book free demo session"
                    >
                      {isSubmitting ? (
                        <LoadingSpinner size="sm" text="Submitting..." className="flex-row gap-2" />
                      ) : (
                        <>
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Book Free Demo Session
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
