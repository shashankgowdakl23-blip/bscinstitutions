import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const StoriesGrid = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">In Their Own Words</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Every story here is a testament to discipline, the right guidance, and a willingness to learn.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <StaggerTestimonials />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Tap any card to read the full story
        </p>
      </div>
    </div>
  </section>
);

export default StoriesGrid; 