"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye } from "lucide-react";

const HAPPY_FACES = [
  { id: 1, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780069/happy_face_3_bwaaak.png", alt: "Happy Graduate 1" },
  { id: 2, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780069/happy_face_6_zj3jdm.png", alt: "Happy Graduate 2" },
  { id: 3, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780068/happy_face_7_elbigt.webp", alt: "Happy Graduate 3" },
  { id: 4, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780067/happy_face_5_uwbeuv.png", alt: "Happy Graduate 4" },
  { id: 5, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780067/happy_face_4_imznep.png", alt: "Happy Graduate 5" },
  { id: 6, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780067/carousel_1_amts2r.jpg", alt: "Happy Graduate 6" },
  { id: 7, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780066/happy_face_2_yw8jgy.png", alt: "Happy Graduate 7" },
  { id: 8, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780066/happy_face_1_mrwfoa.png", alt: "Happy Graduate 8" },
];

const ADDITIONAL_FACES = [
  { id: 9, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780063/carousel_7_cmnsyo.jpg", alt: "Campus life 1" },
  { id: 10, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780063/carousel_6_bzzwgo.jpg", alt: "Campus life 2" },
  { id: 11, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780057/carousel_8_pbze7d.jpg", alt: "Campus life 3" },
  { id: 12, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780053/carousel_3_hravhg.jpg", alt: "Campus life 5" },
  { id: 13, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780051/carousel_5_w8ffnj.jpg", alt: "Campus life 6" },
  { id: 14, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780053/carousel_2_vytr7u.jpg", alt: "Campus life 7" },
  { id: 15, src: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780067/carousel_1_amts2r.jpg", alt: "Campus life 8" },
];

const ALL_FACES = [...HAPPY_FACES, ...ADDITIONAL_FACES];

export const StudentsHappyFaces = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (selectedImage || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, isModalOpen]);

  return (
    <section id="placements" className="py-16 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-center text-zinc-800 tracking-tight mb-12">
          Students Happy Faces
        </h2>

        {/* 8-Card Grid (4 cols on desktop, 2 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {HAPPY_FACES.map((face) => (
            <motion.div
              key={face.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(face.src)}
              className="group relative border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-2xs hover:shadow-md cursor-pointer transition-all duration-300 flex aspect-[4/3] items-center justify-center"
            >
              <img
                src={face.src.replace('/upload/', '/upload/f_auto,q_auto,w_400/')}
                alt={face.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="flex items-center gap-1.5 bg-white/95 text-zinc-900 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm transition-all duration-300">
                  <ZoomIn className="h-4 w-4 text-brand-red" /> View Photo
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#a81c1c] hover:bg-[#901818] active:scale-[0.98] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md cursor-pointer transition-all duration-200"
          >
            View More <Eye className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Grid Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-6xl max-h-[85vh] bg-white border border-zinc-200 rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-zinc-150">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 uppercase tracking-tight">
                    Gurgaon Campus Students Happy Faces
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-400 mt-1">
                    Browse photos of our graduates celebrating their achievements.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 p-2 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="h-5.5 w-5.5" />
                </button>
              </div>

              {/* Scrollable grid */}
              <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {ALL_FACES.map((face) => (
                    <div
                      key={face.id}
                      onClick={() => setSelectedImage(face.src)}
                      className="group relative border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-2xs hover:shadow-lg cursor-pointer transition-all duration-300 flex aspect-[4/3] items-center justify-center"
                    >
                      <img
                        src={face.src.replace('/upload/', '/upload/f_auto,q_auto,w_400/')}
                        alt={face.alt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="flex items-center gap-1.5 bg-white/95 text-zinc-900 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm transition-all duration-300">
                          <ZoomIn className="h-4 w-4 text-brand-red" /> View Photo
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                src={selectedImage.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')}
                alt="Happy Face Zoom"
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
