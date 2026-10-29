const GalleryStats = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">1000+</div>
          <div className="text-muted-foreground text-sm">Students Trained</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-success mb-2">95%</div>
          <div className="text-muted-foreground text-sm">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-secondary mb-2">3+</div>
          <div className="text-muted-foreground text-sm">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">50+</div>
          <div className="text-muted-foreground text-sm">Batches Completed</div>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryStats; 