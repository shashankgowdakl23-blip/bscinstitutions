import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart } from "lucide-react";
import trainerPhoto from "@/assets/Hero-Image.jpg";

const TrainerBio = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Your Trainer</h2>
          <p className="text-muted-foreground">NISM Certified with proven track record</p>
        </div>
        <Card className="shadow-elegant">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={trainerPhoto}
                    alt="Shashank Gowda k - Stock Market Trainer"
                    className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto md:mx-0 high-quality-image"
                  />
                  <Badge className="absolute -bottom-2 -right-2 bg-success text-success-foreground">
                    NISM Certified
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Shashank Gowda k</h3>
                <p className="text-primary font-semibold mb-4">
                  NISM Certified Research Analyst & Financial Educator
                </p>
                <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 mb-6">
                  <div className="font-bold mb-1">✅ Trusted by 1000+ Students</div>
                  <div className="text-primary-foreground/90 text-sm">Across Karnataka & Beyond</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Why Students Trust Me</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span className="text-sm">NISM certified with practical financial markets experience</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span className="text-sm">Flexible time slots for working professionals</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span className="text-sm">Mastery learning - move forward only after understanding</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span className="text-sm">Personal attention to each student's goals</span>
                    </div>
                  </div>
                </div>
                <Card className="p-4 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm italic text-muted-foreground">
                        "I believe in making financial education transparent and easy. My goal is to add value to 1 crore people by making financial knowledge accessible to everyone."
                      </p>
                      <p className="text-xs font-medium mt-2">— Shashank Gowda k</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default TrainerBio; 