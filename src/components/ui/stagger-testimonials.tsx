"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "From zero knowledge to confident trading in just 3 months. Best investment ever!",
    by: "Akshata Narayan, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=32"
  },
  {
    tempId: 1,
    testimonial: "Finally found a mentor who teaches practical trading, not just theory. NISM certification gives credibility.",
    by: "Basavaraju K., Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=51"
  },
  {
    tempId: 2,
    testimonial: "Safe trading strategies that actually work. My portfolio is growing steadily with BSC's guidance.",
    by: "Chaitra Rao, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=44"
  },
  {
    tempId: 3,
    testimonial: "Clear explanations, practical demos. Worth every rupee I invested. Flexible timing is perfect for professionals.",
    by: "Dhanush Shetty, Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=53"
  },
  {
    tempId: 4,
    testimonial: "Perfect balance of theory and hands-on practice. The live trading sessions are incredible!",
    by: "Eshwari P., Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=23"
  },
  {
    tempId: 5,
    testimonial: "Risk management techniques saved me from major losses. Thank you BSC for the professional guidance!",
    by: "Girish Malnad, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=59"
  },
  {
    tempId: 6,
    testimonial: "Transformed my approach to investing. Now I trade with confidence and proper risk management.",
    by: "Hemavathi S., Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=45"
  },
  {
    tempId: 7,
    testimonial: "Best decision to join BSC. Professional guidance with real results. The mentorship program is worth every penny.",
    by: "Janardhana G., Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=60"
  },
  {
    tempId: 8,
    testimonial: "The small batch size ensures everyone gets personal attention. Highly recommended for serious learners.",
    by: "Kusuma K., Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=26"
  },
  {
    tempId: 9,
    testimonial: "Mastery learning approach ensures we understand concepts thoroughly before moving forward.",
    by: "Lokesh Gowda, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=68"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a solution like BSC for YEARS. So glad I finally found one!",
    by: "Manjula Rao, Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=47"
  },
  {
    tempId: 11,
    testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
    by: "Nagaraj Bhat, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 12,
    testimonial: "BSC's customer support is unparalleled. They're always there when we need them.",
    by: "Oormila D., Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=38"
  },
  {
    tempId: 13,
    testimonial: "The efficiency gains we've seen since implementing BSC's strategies are off the charts!",
    by: "Prashanth K., Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 14,
    testimonial: "BSC has revolutionized how we handle our trading workflow. It's a game-changer!",
    by: "Rekha Hegde, Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=36"
  },
  {
    tempId: 15,
    testimonial: "The scalability of BSC's solution is impressive. It grows with our business seamlessly.",
    by: "Sathish Rai, Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how BSC continually innovates. They're always one step ahead.",
    by: "Thara Nayak, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=25"
  },
  {
    tempId: 17,
    testimonial: "The ROI we've seen with BSC is incredible. It's paid for itself many times over.",
    by: "Udaya Kumar, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 18,
    testimonial: "BSC's platform is so robust, yet easy to use. It's the perfect balance.",
    by: "Varalakshmi, Bangalore",
    imgSrc: "https://i.pravatar.cc/150?img=20"
  },
  {
    tempId: 19,
    testimonial: "We've tried many solutions, but BSC stands out in terms of reliability and performance.",
    by: "Yogesh Shetty, Mangalore",
    imgSrc: "https://i.pravatar.cc/150?img=18"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        "selection:bg-primary/20 selection:text-foreground",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary selection:bg-primary-foreground/20 selection:text-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50 selection:bg-primary/20 selection:text-foreground"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="mb-6 h-16 w-14 bg-primary/10 rounded-sm flex items-center justify-center overflow-hidden border border-primary/5"
        style={{ boxShadow: "3px 3px 0px hsl(var(--background))" }}
      >
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="h-full w-full object-cover object-top"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.innerHTML = `
              <div class="h-full w-full flex items-center justify-center text-primary text-lg font-bold">
                ${testimonial.by.split(',')[0].split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
              </div>
            `;
          }}
        />
      </div>
      <h3 className={cn(
        "text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-4 select-text",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-6 left-6 right-6 text-xs sm:text-sm font-medium select-text",
        isCenter ? "text-primary-foreground/90" : "text-muted-foreground"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}; 