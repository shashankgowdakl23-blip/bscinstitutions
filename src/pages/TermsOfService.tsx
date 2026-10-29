import PageLayout from "@/features/shared/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { FileText, BookOpen, CreditCard, AlertTriangle, Scale, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Terms of Service | B.S.C. Institutions"
        description="Read the terms and conditions for using B.S.C. Institutions' educational services and courses."
        keywords="terms of service, terms and conditions, B.S.C. Institutions, user agreement"
      />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Terms of Service
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
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Educational Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      B.S.C. Institutions provides stock market education and training services. Our courses 
                      are designed for educational purposes only and should not be considered as financial 
                      advice. All investment decisions should be made after careful consideration and 
                      consultation with qualified financial advisors.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Payment & Refund Policy</h2>
                    <ul className="text-muted-foreground leading-relaxed space-y-2">
                      <li>• Course fees must be paid in full before access is granted</li>
                      <li>• Refund requests must be made within 7 days of enrollment</li>
                      <li>• Partial refunds may be issued based on course completion percentage</li>
                      <li>• Payment plans are available for eligible students</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Risk Disclaimer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Investment in securities market are subject to market risks. Registration granted by 
                      SEBI and certification from NISM in no way guarantee performance of the intermediary 
                      or provide any assurance of returns to investors. Read all the related documents 
                      carefully before investing.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All course materials, content, and resources provided by B.S.C. Institutions are 
                      protected by intellectual property laws. Students are prohibited from copying, 
                      distributing, or sharing course materials without explicit written permission.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Contact for Queries</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For any questions regarding these Terms of Service, please contact us at:<br />
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

export default TermsOfService;
