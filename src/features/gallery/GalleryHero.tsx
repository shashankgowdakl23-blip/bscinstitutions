import { Badge } from "@/components/ui/badge";

const GalleryHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Simple styling like Home page */}
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm sm:text-base mb-6 inline-flex items-center">
            Gallery
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Inside B.S.C. Institutions
            <span className="block text-secondary">See Us In Action</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Take a look inside our classes, workshops, and training sessions. See real students learning and building their financial knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero; 