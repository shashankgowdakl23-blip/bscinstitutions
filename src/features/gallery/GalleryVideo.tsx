import { Card } from "@/components/ui/card";

const GalleryVideo = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">See Our Training In Action</h2>
          <p className="text-muted-foreground">Watch a glimpse of our live trading sessions</p>
        </div>
        <Card className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-0 h-0 border-l-6 border-r-0 border-b-4 border-t-4 border-transparent border-l-primary ml-1"></div>
              </div>
              <h3 className="font-semibold mb-2">Live Training Session</h3>
              <p className="text-sm text-muted-foreground">Coming Soon - Real classroom footage</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

export default GalleryVideo; 