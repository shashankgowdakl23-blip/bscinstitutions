import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Play } from "lucide-react";

const CoursesHero = ({ onPreview }: { onPreview?: () => void }) => (
  <section className="relative pt-24 pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-90"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Badges - Fixed alignment and responsive sizing */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm flex items-center gap-2 px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base whitespace-nowrap">
            <Award className="h-4 w-4 sm:h-5 sm:w-5" />
            NISM Authorized | NSE Certified
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm flex items-center gap-2 px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base whitespace-nowrap">
            <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            Trusted by 1000+ Students
          </Badge>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Choose the Right Financial Programme for You
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          <span className="block sm:hidden">
            Flexible slots, practical learning, trusted by 1000+ students. Start your financial journey.
          </span>
          <span className="hidden sm:block">
            Flexible slots, practical learning, trusted by 1000+ students. Start your financial journey with expert guidance.
          </span>
        </p>
        
        {/* Course Preview Video */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={onPreview}
              >
                <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <span className="hidden sm:inline">Watch Course Preview (30 sec)</span>
                <span className="sm:hidden">Course Preview</span>
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-white/80 mt-3">See what our students achieve in just a few weeks</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoursesHero; 