import { PageLayout, SectionWrapper } from "@/features/shared";
import SuccessStoriesHero from "@/features/success-stories/SuccessStoriesHero";
import StoriesGrid from "@/features/success-stories/StoriesGrid";
import VideoTestimonial from "@/features/success-stories/VideoTestimonial";
import SuccessCTA from "@/features/success-stories/SuccessCTA";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/config/seo";

const SuccessStories = () => (
  <PageLayout background="bg-gradient-to-br from-primary/5 via-white to-secondary/5">
    <SEOHead {...seoConfig.successStories} />
    <main>
      <SectionWrapper id="hero">
        <SuccessStoriesHero />
      </SectionWrapper>
      
      <SectionWrapper id="stories" delay={0.2}>
        <StoriesGrid />
      </SectionWrapper>
      
      <SectionWrapper id="video-testimonial" delay={0.4}>
        <VideoTestimonial />
      </SectionWrapper>
      
      <SectionWrapper id="cta" delay={0.6}>
        <SuccessCTA />
      </SectionWrapper>
    </main>
  </PageLayout>
);

export default SuccessStories;