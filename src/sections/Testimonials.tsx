"use client";

import * as React from "react";
import { Star, ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS_DATA } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialsProps {
  onOpenVideo: (videoUrl: string) => void;
}

export const Testimonials = ({ onOpenVideo }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-white border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl flex flex-col gap-3">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
              What Our Graduates Say About Us
            </h2>
            <p className="text-sm sm:text-base text-zinc-550">
              Read how our students transitioned from non-technical backgrounds or low-paying jobs into agency leaders and growth experts.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-800 transition-all cursor-pointer shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-800 transition-all cursor-pointer shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel slide panel */}
        <div className="relative min-h-[380px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Review Text & Details */}
              <div className="lg:col-span-7 text-left flex flex-col gap-5">
                <Quote className="h-10 w-10 text-brand-red opacity-20 shrink-0" />
                
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg sm:text-xl font-medium text-zinc-700 italic leading-relaxed">
                  "{activeTestimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4 mt-3 border-t border-zinc-200 pt-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-red shrink-0">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-zinc-850 leading-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-zinc-550 mt-0.5 font-semibold">
                      {activeTestimonial.role} at <span className="text-brand-red font-bold">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Transformation UI or Video Card */}
              <div className="lg:col-span-5 w-full flex items-center justify-center">
                {activeTestimonial.videoUrl ? (
                  // Video testimonial trigger card
                  <Card
                    glass
                    className="p-3 w-full border-zinc-200 relative aspect-video overflow-hidden group cursor-pointer bg-white"
                    onClick={() => onOpenVideo(activeTestimonial.videoUrl!)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400"
                      alt="Student Video Cover"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    
                    {/* Centered Play Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-full bg-brand-red/90 flex items-center justify-center shadow-md relative group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-4 z-20 flex flex-col text-left">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Watch Success Story
                      </span>
                      <span className="text-[10px] text-zinc-300 mt-0.5">
                        Duration: 1 min video review
                      </span>
                    </div>
                  </Card>
                ) : (
                  // Transformation details card
                  <Card glass className="p-6 w-full border-zinc-200 text-left flex flex-col gap-4 bg-white">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      Career Transformation
                    </span>
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">
                          Before Course:
                        </span>
                        <span className="text-sm font-semibold text-zinc-700 block mt-0.5">
                          {activeTestimonial.beforeRole || "Graduate / Student"}
                        </span>
                      </div>
                      <div className="h-px bg-zinc-200" />
                      <div>
                        <span className="text-[10px] text-brand-red font-black block uppercase tracking-wider">
                          After Course (Present):
                        </span>
                        <span className="text-base font-black text-zinc-800 block mt-0.5">
                          {activeTestimonial.afterRole || activeTestimonial.role}
                        </span>
                      </div>
                      <div className="h-px bg-zinc-200" />
                      <div>
                        <span className="text-[10px] text-emerald-605 font-black block uppercase tracking-wider">
                          Salary Package / Hike:
                        </span>
                        <span className="text-xl font-black text-emerald-600 block mt-0.5">
                          {activeTestimonial.packageIncrease || "120% Hike"}
                        </span>
                      </div>
                    </div>
                  </Card>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
