import { Card } from "@/components/ui/card";

const milestones = [
  { year: "2021", title: "Founded B.S.C. Institutions", description: "Started with a vision to make financial education accessible" },
  { year: "2022", title: "NISM Certification", description: "Achieved certified trainer status for credible education" },
  { year: "2023", title: "500+ Students", description: "Reached our first major milestone of successful students" },
  { year: "2024", title: "1000+ Students", description: "Trusted by over 1000 students across Karnataka" },
];

const Milestones = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground">Milestones that built trust</p>
        </div>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
              </div>
              <Card className="flex-1 p-6">
                <h3 className="font-semibold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Milestones; 