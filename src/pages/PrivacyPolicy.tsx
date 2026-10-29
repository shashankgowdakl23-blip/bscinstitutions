import PageLayout from "@/features/shared/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Privacy Policy | B.S.C. Institutions"
        description="Learn about how B.S.C. Institutions collects, uses, and protects your personal information. Our privacy policy ensures your data is safe."
        keywords="privacy policy, data protection, B.S.C. Institutions, personal information"
      />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We collect information you provide directly to us, such as when you create an account, 
                      enroll in our courses, fill out a contact form, or communicate with us. This may include 
                      your name, email address, phone number, and payment information.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                    <ul className="text-muted-foreground leading-relaxed space-y-2">
                      <li>• To provide and maintain our educational services</li>
                      <li>• To process your enrollment and payments</li>
                      <li>• To send you course-related communications</li>
                      <li>• To respond to your inquiries and support requests</li>
                      <li>• To improve our services and develop new features</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your 
                      personal information against unauthorized access, alteration, disclosure, or destruction. 
                      However, no method of transmission over the Internet is 100% secure.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to access, update, or delete your personal information at any time. 
                      You may also opt out of receiving promotional communications from us by following the 
                      unsubscribe instructions in those messages.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at:<br />
                      <strong>Email:</strong> enquiry@bscinstitutions.com<br />
                      <strong>Phone:</strong> +91 63600 49713 
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
