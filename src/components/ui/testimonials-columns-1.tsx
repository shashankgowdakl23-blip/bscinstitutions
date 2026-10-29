"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <div key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="h-10 w-10 min-w-[40px] rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/5">
                      {image && !image.includes('placeholder') ? (
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).parentElement!.innerHTML = `
                              <div class="h-full w-full flex items-center justify-center text-primary text-xs font-bold">
                                ${name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                              </div>
                            `;
                          }}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-primary text-xs font-bold uppercase transition-colors">
                          {name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "The flexible time slots were perfect for my work schedule. Shashank sir's teaching method is excellent - he makes complex concepts so simple to understand. I'm now confidently trading and earning extra income!",
    image: "https://i.pravatar.cc/150?img=48",
    name: "Smitha Rao",
    role: "Software Engineer, Bangalore",
  },
  {
    text: "Best investment I made for my future! The mentorship program helped me understand live market dynamics. The personal attention and doubt clearing sessions are invaluable.",
    image: "https://i.pravatar.cc/150?img=52",
    name: "Vinayaka Deshpande",
    role: "Business Analyst, Bangalore",
  },
  {
    text: "I was completely new to stock markets. The beginner course structure is perfect - step by step learning without overwhelming information. Now I'm planning to take the advanced course too!",
    image: "https://i.pravatar.cc/150?img=29",
    name: "Sunitha Hegde",
    role: "Marketing Manager, Mangalore",
  },
  {
    text: "Even with my finance background, this course taught me practical trading skills I never learned in academics. The live trading sessions and real-time guidance are game-changers!",
    image: "https://i.pravatar.cc/150?img=57",
    name: "Karthik Rai",
    role: "Chartered Accountant, Mangalore",
  },
  {
    text: "As a working mother, the flexible timings were a blessing. The course content is well-structured and the trainer is very patient. I'm now earning through informed investments!",
    image: "https://i.pravatar.cc/150?img=24",
    name: "Pushpa Karanth",
    role: "Teacher, Bangalore",
  },
  {
    text: "The mentorship program exceeded my expectations. Weekly calls, doubt clearing, and updated strategies based on market conditions. This is not just a course, it's complete guidance!",
    image: "https://i.pravatar.cc/150?img=61",
    name: "Shridhar Bhat",
    role: "IT Professional, Mangalore",
  },
  {
    text: "Started with zero knowledge about trading. Now I'm making consistent profits every month. The practical approach and real-time market analysis sessions were incredibly helpful.",
    image: "https://i.pravatar.cc/150?img=13",
    name: "Lohit Kumar",
    role: "Sales Manager, Bangalore",
  },
  {
    text: "The NISM certification training was thorough and practical. Shashank sir's experience shows in every session. I feel confident about my trading decisions now.",
    image: "https://i.pravatar.cc/150?img=39",
    name: "Divya Shetty",
    role: "Bank Officer, Mangalore",
  },
  {
    text: "Best part is the lifetime support even after course completion. The WhatsApp group for doubts and market updates is incredibly valuable for continuous learning.",
    image: "https://i.pravatar.cc/150?img=62",
    name: "Prasanna Hegde",
    role: "Engineer, Bangalore",
  },
];

export { testimonials };