"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, Quote, X, ZoomIn } from "lucide-react";

interface FeedbackReview {
  id: number;
  name: string;
  batch: string;
  course: string;
  text: string;
  rating: number;
  imageSrc: string;
}

const FEEDBACK_REVIEWS: FeedbackReview[] = [
  {
    id: 1,
    name: "Aisha Hussain",
    batch: "10:30 AM - 1:00 PM Weekday",
    course: "Master in Digital Marketing",
    text: "The trainers at DIDM Gurgaon are extremely supportive. The curriculum is highly structured and organized. I gained deep practical experience working on live projects.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780065/student-1_feedback_igxhz7.jpg",
  },
  {
    id: 2,
    name: "Mukul Sharma",
    batch: "7:00 PM - 9:00 PM Weekday",
    course: "Advanced Digital Marketing",
    text: "Interactive sessions and hands-on training made learning complex concepts like PPC and SEO very easy. Extremely satisfied with my learning journey at the Gurgaon campus!",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780064/student_13_feedback_nwhx8q.jpg",
  },
  {
    id: 3,
    name: "Pranav Khanna",
    batch: "7:00 PM - 9:00 PM Weekday",
    course: "Master in Digital Marketing",
    text: "Exceptional trainers with profound industry knowledge. The modules are sufficiently spaced, and we get ample time for doubt clearing and practice.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780064/student_12_feedback_xqqsk7.jpg",
  },
  {
    id: 4,
    name: "Karan Malhotra",
    batch: "10:30 AM - 1:00 PM Weekday",
    course: "Master in Digital Marketing",
    text: "Highly interactive and engaging classes. The lab facilities at Sector 14 are excellent, and the support staff is very cooperative.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780063/student_11_feedback_oxvbkv.jpg",
  },
  {
    id: 5,
    name: "Prateek Jain",
    batch: "7:00 PM - 9:00 PM Weekday",
    course: "Professional Digital Marketing",
    text: "Excellent training and great lab infrastructure. The practical sessions on Google Ads and Facebook Ads are outstanding. Trainers guide us at every single step.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780063/student_10_feedback_nvnwol.jpg",
  },
  {
    id: 6,
    name: "Vipin Saini",
    batch: "7:00 PM - 9:00 PM Weekday",
    course: "Advanced Digital Marketing",
    text: "Good practical exposure. The weekly performance tests and real-time campaign setups gave me the confidence to handle agency-level work.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780062/student_9_feedback_q00xpt.jpg",
  },
  {
    id: 7,
    name: "Rohini Devi",
    batch: "10:00 AM - 1:00 PM Weekday",
    course: "Master in Digital Marketing",
    text: "10/10 training program! Everything from basic web design to advanced programmatic ads is taught beautifully. Interactive sessions are the best part.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780061/student_8_feedback_amqjkk.jpg",
  },
  {
    id: 8,
    name: "Rahul Kumar",
    batch: "10:30 AM - 1:00 PM Weekday",
    course: "Master in Digital Marketing",
    text: "Excellent training environment with fully equipped labs. DIDM Gurgaon is the best institute for anyone looking to make a career in digital marketing.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780059/student_7_feedback_aoux5z.jpg",
  },
  {
    id: 9,
    name: "Sanjay Singh",
    batch: "10:00 AM - 2:00 PM Weekend",
    course: "Master in Digital Marketing",
    text: "The weekend batch was very convenient for me. The trainers are highly knowledgeable and took extra classes on SEO tools. Glad to join DIDM Gurgaon!",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780058/student_6_feedback_ux44b5.jpg",
  },
  {
    id: 10,
    name: "Megha Gupta",
    batch: "2:00 PM - 5:00 PM Weekday",
    course: "Master in Digital Marketing",
    text: "Practical implementation is the core focus here. Doing live campaign setups helped me clear meta and google certifications in my first attempt.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780056/student_5_feedback_iiglry.jpg",
  },
  {
    id: 11,
    name: "Rohan Verma",
    batch: "10:30 AM - 1:00 PM Weekday",
    course: "Advanced Digital Marketing",
    text: "Comprehensive study material, great placement preparation assistance, and mock interview sessions. The mentors are always ready to guide us.",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780055/student_4_feedback_fvmho8.jpg",
  },
  {
    id: 12,
    name: "Priya Sharma",
    batch: "2:00 PM - 6:00 PM Weekend",
    course: "Master in Digital Marketing",
    text: "Loved the agency internship program after the course. Got hands-on exposure to client projects which helped me secure a great job!",
    rating: 5,
    imageSrc: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780054/student_3_feedback_wsggbf.jpg",
  },
];

export const StudentFeedback = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Disable body scroll when lightbox is active
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

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-800 uppercase">
            Gurgaon Student Feedback
          </h2>
          <p className="text-sm sm:text-base font-semibold text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Read original reviews submitted by students. Click any card to verify and view their handwritten feedback form.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-1" />
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEEDBACK_REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(review.imageSrc)}
              className="group relative border border-zinc-200 rounded-2xl p-6 bg-white shadow-2xs hover:shadow-md hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer"
            >
              <div>
                {/* Header: Avatar + Name + Zoom Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-red/5 border border-brand-red/10 flex items-center justify-center font-black text-brand-red text-xs uppercase shrink-0">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-zinc-800 leading-tight truncate">
                        {review.name}
                      </h4>
                      <p className="text-[10px] text-zinc-450 mt-0.5 font-bold uppercase tracking-wider truncate">
                        {review.course}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ZoomIn className="h-4.5 w-4.5 text-zinc-300 group-hover:text-brand-red transition-colors shrink-0" />
                    <Quote className="h-7 w-7 text-zinc-200 group-hover:text-brand-red/15 transition-colors shrink-0" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(review.rating)
                          ? "text-amber-500 fill-amber-500"
                          : "text-zinc-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-650 text-xs sm:text-sm font-semibold leading-relaxed italic mb-4">
                  "{review.text}"
                </p>
              </div>

              {/* Footer: Verified Badge + Batch */}
              <div className="border-t border-zinc-100 pt-3 mt-2 flex items-center justify-between text-[10px] font-bold text-zinc-500">
                <span className="truncate max-w-[150px]" title={review.batch}>
                  {review.batch}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 shrink-0 uppercase tracking-wider">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> Verified Form
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-brand-red bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-full transition-all duration-200 z-10 cursor-pointer"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring" as const, duration: 0.4 }}
              className="relative max-w-5xl w-full max-h-[85vh] sm:max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl z-10 p-2 flex items-center justify-center"
            >
              <img
                src={selectedImage.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')}
                alt="Selected Feedback Zoom"
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
