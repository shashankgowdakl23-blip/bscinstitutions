import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import { fadeInUp, scaleIn, hoverScale, fastTransition, slowTransition } from "@/utils/animations";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80",
    caption: "Live Investment Session",
    description: "Students learning live market analysis in our interactive classroom",
    details: "Our live trading sessions provide real-time market analysis where students learn to read charts, understand market trends, and make informed trading decisions. These sessions are conducted during market hours for maximum learning impact.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    hasVideo: true
  },
  {
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&q=80", 
    caption: "Financial Knowledge Workshop",
    description: "Hands-on training with real charts and market scenarios",
    details: "In our technical analysis workshops, students learn to use various chart patterns, indicators, and tools to analyze market movements. We use real market data and scenarios for practical learning.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    hasVideo: true
  },
  {
    src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop&q=80",
    caption: "One-on-One Mentoring",
    description: "Personalized guidance for individual trading strategies",
    details: "Our one-on-one mentoring sessions provide personalized attention to each student's unique trading goals and learning pace. Students get customized strategies and continuous support.",
    videoUrl: null,
    hasVideo: false
  },
  {
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop&q=80",
    caption: "Digital Learning Setup",
    description: "Modern technology-enabled learning environment",
    details: "Our digital learning setup includes advanced trading software, real-time market feeds, and interactive learning tools. Students get hands-on experience with professional trading platforms.",
    videoUrl: null,
    hasVideo: false
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80",
    caption: "Risk Management Class",
    description: "Teaching essential risk management principles",
    details: "Risk management is crucial for successful trading. Our classes teach students how to protect their capital, set stop-losses, and manage portfolio risk effectively.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    hasVideo: true
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&q=80",
    caption: "Portfolio Analysis",
    description: "Students analyzing their portfolio performance",
    details: "Students learn to analyze their portfolio performance, track their trades, and identify areas for improvement. We teach systematic portfolio management techniques.",
    videoUrl: null,
    hasVideo: false
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80",
    caption: "Group Study Session",
    description: "Collaborative learning with fellow traders",
    details: "Group study sessions encourage peer learning and knowledge sharing. Students discuss market trends, share insights, and learn from each other's experiences.",
    videoUrl: null,
    hasVideo: false
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80",
    caption: "Certificate Ceremony",
    description: "Celebrating successful course completion",
    details: "We celebrate our students' achievements with certificate ceremonies. This marks the beginning of their trading journey with confidence and knowledge.",
    videoUrl: null,
    hasVideo: false
  },
  {
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&q=80",
    caption: "Market Discussion",
    description: "Interactive discussions on current market trends",
    details: "Regular market discussion sessions keep students updated with current market trends, news analysis, and trading opportunities. These sessions are highly interactive and informative.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    hasVideo: true
  }
];

// Lazy loading hook
const useLazyLoad = (src: string) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let current: HTMLImageElement | null = null;

    if (imageRef) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            rootMargin: '-10% 0px -10% 0px',
            threshold: 0.2
          }
        );
        observer.observe(imageRef);
        current = imageRef;
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      if (observer && current) {
        observer.unobserve(current);
      }
    };
  }, [imageRef, src]);

  return [imageSrc, setImageRef] as const;
};

// Modal Component
const GalleryModal = ({ 
  isOpen, 
  onClose, 
  currentIndex, 
  onNext, 
  onPrev 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  currentIndex: number; 
  onNext: () => void; 
  onPrev: () => void; 
}) => {
  const currentImage = galleryImages[currentIndex];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={fastTransition}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold">{currentImage.caption}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-2/3 relative">
              <img
                src={currentImage.src}
                alt={currentImage.caption}
                className="w-full h-64 lg:h-96 object-cover"
              />
              {currentImage.hasVideo && (
                <button
                  onClick={() => window.open(currentImage.videoUrl!, '_blank')}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Play video in new tab"
                >
                  <Play className="h-6 w-6 text-primary" />
                </button>
              )}
            </div>

            {/* Details */}
            <div className="lg:w-1/3 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Details</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {currentImage.description}
              </p>
              <p className="text-sm leading-relaxed">
                {currentImage.details}
              </p>
              
              {currentImage.hasVideo && (
                <button
                  onClick={() => window.open(currentImage.videoUrl!, '_blank')}
                  className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  aria-label="Watch video in new tab"
                >
                  <Play className="h-4 w-4" />
                  Watch Video
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-6 border-t">
            <button
              onClick={onPrev}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={currentIndex === 0}
              aria-label="View previous image"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </button>
            
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} of {galleryImages.length}
            </span>
            
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={currentIndex === galleryImages.length - 1}
              aria-label="View next image"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Gallery Item Component
const GalleryItem = ({ 
  image, 
  index, 
  onOpen 
}: { 
  image: typeof galleryImages[0]; 
  index: number; 
  onOpen: () => void; 
}) => {
  const [imageSrc, setImageRef] = useLazyLoad(image.src);
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.1,
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      }
    }
  };
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2, margin: "-10% 0px -10% 0px" }}
    >
      <Card 
        className="overflow-hidden group hover:shadow-elegant transition-all duration-300 cursor-pointer"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${image.caption}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
          }
        }}
      >
        <div className="relative overflow-hidden">
          {/* Skeleton loader */}
          {!imageSrc && (
            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
          )}
          
          {/* Optimized image */}
          <img 
            ref={setImageRef}
            src={imageSrc || ''}
            alt={image.caption}
            className={`w-full h-64 object-cover transition-all duration-500 ${
              imageSrc 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            } group-hover:scale-105`}
            loading="lazy"
            decoding="async"
          />
          
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Video indicator */}
          {image.hasVideo && (
            <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="h-4 w-4 text-primary" />
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-semibold text-sm">{image.caption}</h3>
            <p className="text-xs opacity-80">Click to view details</p>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">{image.caption}</h3>
          <p className="text-sm text-muted-foreground">{image.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GalleryGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      }
    }
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Training In Pictures</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Real photos from our classes, workshops, and student interactions. Click on any image to see more details and videos.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GalleryItem 
                  image={image} 
                  index={index} 
                  onOpen={() => openModal(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default GalleryGrid; 