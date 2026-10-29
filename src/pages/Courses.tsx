import { useEffect, useState } from "react";
import { PageLayout, CTA } from "@/features/shared";
import CoursesHero from "@/features/courses/CoursesHero";
import CourseList from "@/features/courses/CourseList";
import CoursesComparison from "@/features/courses/CoursesComparison";
import { courses, comparisonFeatures } from "@/data/courses";
import { handleWhatsAppFreeDemo, handleCall, scrollToContactForm } from "@/utils/contact";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/config/seo";

const Courses = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppWithMessage = () => {
    handleWhatsAppFreeDemo();
  };

  return (
    <PageLayout>
      <SEOHead {...seoConfig.courses} />
      <CoursesHero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CourseList courses={courses} onWhatsApp={handleWhatsAppFreeDemo} onCall={handleCall} />
          <CoursesComparison features={comparisonFeatures} />
        </div>
      </section>
      <CTA
        title="Ready to Start Your Financial Journey?"
        description="Join 1000+ successful students who transformed their financial future with our expert guidance."
        primaryButtonText="Book Free Demo Now"
        secondaryButtonText="Call for Details"
        primaryButtonAction={scrollToContactForm}
        secondaryButtonAction={handleCall}
        showStats={true}
      />
    </PageLayout>
  );
};

export default Courses;