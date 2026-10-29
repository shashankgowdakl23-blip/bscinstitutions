import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Gowri Hegde",
      handle: "@gowri_blr",
      avatar: "https://ui-avatars.com/api/?name=Gowri+Hegde&background=0D8ABC&color=fff"
    },
    text: "The practical sessions were amazing. Seeing real trades helped me understand concepts better. Shashank sir's teaching style is very clear and patient.",
    href: "#"
  },
  {
    author: {
      name: "Manjunath K.",
      handle: "@manja_blr",
      avatar: "https://ui-avatars.com/api/?name=Manjunath+K&background=0D8ABC&color=fff"
    },
    text: "Perfect for beginners like me. The small batch size ensures everyone gets personal attention. Highly recommended for anyone serious about trading!",
    href: "#"
  },
  {
    author: {
      name: "Kavya Rao",
      handle: "@kavya_blr",
      avatar: "https://ui-avatars.com/api/?name=Kavya+Rao&background=random"
    },
    text: "As a Chartered Accountant, I needed structured learning. The mentorship program is worth every penny. Best investment for my career.",
    href: "#"
  },
  {
    author: {
      name: "Suresh Bhat",
      handle: "@suresh_blr",
      avatar: "https://ui-avatars.com/api/?name=Suresh+Bhat&background=random"
    },
    text: "Flexible timings and practical approach made learning so much easier. The live trading sessions are incredible - real-time learning at its best!",
    href: "#"
  },
  {
    author: {
      name: "Deepa Nayak",
      handle: "@deepa_blr",
      avatar: "https://ui-avatars.com/api/?name=Deepa+Nayak&background=000&color=fff"
    },
    text: "Being a teacher, I appreciate good pedagogy. Shashank sir's mastery learning approach ensures we understand concepts thoroughly before moving forward.",
    href: "#"
  },
  {
    author: {
      name: "Ramesh Prabhu",
      handle: "@ramesh_blr",
      avatar: "https://ui-avatars.com/api/?name=Ramesh+Prabhu&background=000&color=fff"
    },
    text: "The NISM certification gives credibility. As a Sales Manager, I needed flexible timing and got exactly that. Excellent support throughout the journey.",
    href: "#"
  }
]

const GalleryTestimonials = () => {
  return (
    <TestimonialsSection
      title="What Our Students Say"
      description="Join 1000+ students who have transformed their financial future with our expert training"
      testimonials={testimonials}
      className="bg-muted/30"
    />
  )
}

export default GalleryTestimonials 