"use client";

import * as React from "react";
import { GALLERY_DATA } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export const Gallery = () => {
  const [filter, setFilter] = React.useState<"all" | "classroom" | "event" | "workshop">("all");
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const filteredItems = GALLERY_DATA.filter(
    (item) => filter === "all" || item.category === filter
  );

  const filterTabs = [
    { id: "all", label: "All Photos" },
    { id: "classroom", label: "Classrooms & Labs" },
    { id: "event", label: "Events & Graduation" },
    { id: "workshop", label: "Workshops & Panels" },
  ];

  return (
    <section id="gallery-section" className="py-24 bg-white border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
            Life at Institute
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
            Gurgaon Sector-62 Campus Gallery
          </h2>
          <p className="text-sm sm:text-base text-zinc-550">
            Take a look inside our high-tech digital laboratory rooms, corporate hackathons, and guest masterclasses.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? "bg-brand-red text-white shadow-md shadow-brand-red/10"
                  : "bg-zinc-50 border border-zinc-200 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Images */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedImage(item.imageUrl)}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl border border-zinc-200 relative aspect-4/3 group cursor-pointer shadow-sm"
              >
                {/* Image Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                {/* Details Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-350 transform translate-y-2 group-hover:translate-y-0 text-left flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-black text-brand-red uppercase tracking-widest bg-brand-red/10 border border-brand-red/20 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-extrabold text-white mt-1.5 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 bg-white/95 text-zinc-900 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm shrink-0 mb-1 ml-2">
                    <ZoomIn className="h-3.5 w-3.5 text-brand-red" /> Zoom
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox zoom overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-brand-red bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-full transition-all duration-200 z-10 cursor-pointer"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-5xl w-full max-h-[85vh] sm:max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl z-10 p-2 flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Gallery Zoom"
                width={1200}
                height={900}
                className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
