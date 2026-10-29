import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { scrollToContactForm, handleWhatsAppCourseDetails, handleCall } from "@/utils/contact";

interface Course {
  title: string;
  price: string;
  originalPrice: string;
  duration: string;
  sessionLength: string;
  description: string;
  features: string[];
  popular: boolean;
  bestValue: boolean;
}

const CourseList = ({ courses, onWhatsApp, onCall }: {
  courses: Course[];
  onWhatsApp: (msg: string) => void;
  onCall: () => void;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
    {courses.map((course, index) => (
      <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
        {course.popular && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white z-10">
            Most Popular
          </Badge>
        )}
        {course.bestValue && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white z-10">
            Best Value
          </Badge>
        )}
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-primary">{course.title}</CardTitle>
          <div className="space-y-2">
            {/* Pricing hidden as per requirement
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-primary">{course.price}</span>
              <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
            </div>
            */}
            <CardDescription className="text-base">{course.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <div className="font-semibold text-primary">Duration</div>
              <div className="text-muted-foreground">{course.duration}</div>
            </div>
            <div className="text-center p-3 bg-secondary/5 rounded-lg">
              <div className="font-semibold text-primary">Sessions</div>
              <div className="text-muted-foreground">{course.sessionLength}</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">What You'll Learn:</h4>
            <ul className="space-y-2">
              {course.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button 
              variant="whatsapp" 
              className="w-full"
              onClick={scrollToContactForm}
              aria-label="Book free demo for this course"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Book Demo
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => handleCall()}
              aria-label="Call for course details"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default CourseList;
