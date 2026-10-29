import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap } from "lucide-react";
import trainerPhoto from "@/assets/Hero-Image.jpg";


const TrainerProfile = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">Our Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Meet Our Founders & Directors</h2>
          <p className="text-xl text-muted-foreground">
            Learn from Karnataka's leading NISM certified financial educators and industry experts
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {/* Shashank Gowda Profile */}
          <Card className="shadow-elegant h-full rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-1 gap-6 items-start">
                {/* Photo and Basic Info */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={trainerPhoto}
                      alt="Shashank Gowda - Founder & Director"
                      className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto high-quality-image"
                    />
                    <Badge className="absolute -bottom-2 -right-2 bg-success text-success-foreground">
                      NISM Certified
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">Shashank Gowda KL</h3>
                  <p className="text-lg text-primary font-semibold mb-3">
                    Founder & Managing Director
                  </p>

                  <div className="bg-gradient-primary text-primary-foreground rounded-lg p-3 mb-4 text-center">
                    <div className="text-xl font-bold mb-1">✅ Trusted by 1000+ Students</div>
                    <div className="text-primary-foreground/90 text-sm">Across Karnataka & Beyond</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-3 bg-success/10 rounded-lg">
                      <div className="text-2xl font-bold text-success">95%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Credentials and Experience */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 border-b pb-2">Professional Credentials</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-primary shrink-0" />
                        <span>NISM Certified (Wealth Manager)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                        <span>B.Pharm, MS Ramaiah University</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-primary shrink-0" />
                        <span>Asian Games & National Games Gold Medalist</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 border-b pb-2">Professional Experience</h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• Founder & MD, BSC Institutions (Feb 2025 - Present)</p>
                      <p>• Wealth Manager at BNI Highflyer</p>
                      <p>• Former Trainer at TIDI Academy</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 border-b pb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="secondary">Wealth Management</Badge>
                      <Badge variant="secondary">Investment Strategy</Badge>
                      <Badge variant="secondary">Portfolio Management</Badge>
                      <Badge variant="secondary">Risk Analysis</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mahesh Basawaraj Madarge Profile — removed */}
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;
