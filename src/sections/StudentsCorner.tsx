"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const CAROUSEL_IMAGES = [
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254315/416_lvajg9.jpg",
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254314/227_uaenfz.jpg",
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254315/612_zrjptc.jpg",
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254314/513_wbt9qn.jpg",
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254315/513_1_uzayun.jpg",
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254314/138_hbqavv.jpg",
  "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781254313/326_1_jolt5d.jpg",
];

export const StudentsCorner = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<"next" | "prev">("next");

  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  // Auto-play the carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
      {/* Soft brand-red glow bubble for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Equal 50/50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Gurgaon Branch Students Gallery Card */}
          <motion.div 
            whileHover={{ y: -4, borderColor: "rgba(168, 28, 28, 0.3)" }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full relative transition-all duration-300"
          >
            {/* Top red accent line strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red to-red-500 rounded-t-3xl" />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-brand-red/5 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
                <ImageIcon className="h-3.5 w-3.5" /> Gurgaon Campus
              </div>

              <h3 className="text-2xl sm:text-3.5xl font-black text-zinc-900 leading-tight mb-5">
                Gurgaon Branch Students Gallery
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-semibold">
                The most profound Digital Marketing Course in Gurgaon is specially designed for Businessmen, JobSeekers, and Students to help them grow in their careers. The center is designed in a way that suits your learning needs.
              </p>
            </div>


          </motion.div>

          {/* Right Column: Gurgaon Branch Students Corner Card */}
          <motion.div 
            whileHover={{ y: -4, borderColor: "rgba(168, 28, 28, 0.3)" }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between h-full min-w-0 transition-all duration-300 relative"
          >
            {/* Top red accent line strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-brand-red rounded-t-3xl" />

            {/* Header: Title + Navigation */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-brand-red/5 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping" /> Student Life
                </div>
                <h3 className="text-2xl sm:text-3.5xl font-black text-zinc-900 leading-tight">
                  Gurgaon Students Corner
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0 self-end mb-1">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-brand-red/25 bg-white p-2 text-brand-red hover:bg-brand-red hover:text-white active:scale-95 transition-all cursor-pointer flex items-center justify-center shadow-xs"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-full border border-brand-red/25 bg-white p-2 text-brand-red hover:bg-brand-red hover:text-white active:scale-95 transition-all cursor-pointer flex items-center justify-center shadow-xs"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xs border border-zinc-200 bg-zinc-50 flex-1 w-full mt-6 flex items-center justify-center min-h-[240px] md:min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
              
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img
                  key={activeIndex}
                  src={CAROUSEL_IMAGES[activeIndex]}
                  initial={{ opacity: 0, x: direction === "next" ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === "next" ? -80 : 80 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.3 }}
                  width={1000}
                  height={625}
                  className="w-full h-full object-cover absolute inset-0"
                  alt={`Gurgaon Student Carousel Slide ${activeIndex + 1}`}
                />
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-0 right-0 mx-auto z-20 flex justify-center gap-1.5">
                {CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? "next" : "prev");
                      setActiveIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex ? "w-6 bg-brand-red" : "w-1.5 bg-white/50 hover:bg-white/95"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
