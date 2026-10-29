import { Card } from "@/components/ui/card";
import { Users, Award, TrendingUp, CheckCircle } from "lucide-react";

const OurStory = () => (
  <section className="pt-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                B.S.C. Institutions was born from a simple belief: everyone deserves access to quality financial education, not just the privileged few.
              </p>
              <p>
                We started our journey seeing too many hardworking people lose money in the markets due to lack of proper guidance and education. Our founder, Shashank Gowda k, decided to bridge this gap with certified, practical training.
              </p>
              <p>
                Today, we're proud to be Karnataka's most trusted local financial education institute, with over 1000+ successful students who now confidently navigate the markets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">NISM</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurStory; 