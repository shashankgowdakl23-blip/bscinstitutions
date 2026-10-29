import PageLayout from "@/features/shared/PageLayout";
import GalleryHero from "@/features/gallery/GalleryHero";
import GalleryStats from "@/features/gallery/GalleryStats";
import GalleryGrid from "@/features/gallery/GalleryGrid";
import GalleryTestimonials from "@/features/gallery/GalleryTestimonials";
import GalleryVideo from "@/features/gallery/GalleryVideo";
import GalleryCTA from "@/features/gallery/GalleryCTA";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/config/seo";

const Gallery = () => (
  <>
    <SEOHead {...seoConfig.gallery} />
    <PageLayout background="">
      <GalleryHero />
      <GalleryStats />
      <GalleryGrid />
      <GalleryTestimonials />
      <GalleryVideo />
      <GalleryCTA />
    </PageLayout>
  </>
);

export default Gallery;
