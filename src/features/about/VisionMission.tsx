import { Card } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

const VisionMission = () => (
  <section className="pb-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              To make financial education transparent, accessible, and practical for every individual who wants to build wealth through smart investing and informed financial decisions.
            </p>
          </Card>
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              To provide certified, practical financial training with flexible schedules, ensuring every student masters concepts before moving forward.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
