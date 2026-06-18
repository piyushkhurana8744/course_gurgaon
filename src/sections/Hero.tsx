"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { User, Mail, Phone, MapPin, GraduationCap, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { CENTERS } from "@/data/content";
import { contactFormSchema, ContactFormValues } from "@/utils/validation";
import { CustomCaptcha, CustomCaptchaRef, resetCustomCaptcha } from "@/components/CustomCaptcha";

const SLIDES = [
  {
    image: "https://res.cloudinary.com/dnfz4jwam/image/upload/v1781253789/DIDM_Digital_Marketing_Courses_at_Gurgaon_ri2d0s.webp",
    title: "DIDM Gurgaon Branch",
    subtitle: "Delhi Institute of Digital Marketing",
    highlight: "Top Digital Marketing Institute in Gurgaon",
    badges: ["Gurgaon Center", "Top Rated", "Offline & Online"],
    description: "Welcome to Delhi Institute of Digital Marketing (DIDM). Our Gurgaon branch offers industry-leading practical courses for students and working professionals.",
  },
  {
    image: "/banner-dm.png",
    title: "Master Digital Marketing",
    subtitle: "Delhi Institute of Digital Marketing (DIDM) Gurgaon",
    highlight: "100% Practical Training in Gurgaon",
    badges: ["50+ Modules", "10+ Certifications", "ISO Certified"],
    description: "Learn SEO, SMM, PPC, and AI marketing from industry professionals with real agency preparation.",
  },
  {
    image: "/banner-practical.png",
    title: "Practical Hands-on Learning",
    subtitle: "Real Campaign Management",
    highlight: "Work on Live Projects with Real Budgets",
    badges: ["Live Campaigns", "Expert Mentorship", "Tool Mastery"],
    description: "Execute strategies in real-time, optimize budgets, and master professional digital marketing platforms.",
  },
  {
    image: "/banner-placements.png",
    title: "100% Placement Support",
    subtitle: "DIDM Placement Cell",
    highlight: "Get Placed with Leading Brands & Agencies",
    badges: ["100% Placement Assistance", "Resume Building", "Mock Interviews"],
    description: "Over 5,000+ graduates placed successfully. Our dedicated placement cell brings top companies to you.",
  },
];

export const Hero = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const desktopRecaptchaRef = React.useRef<CustomCaptchaRef>(null);
  const mobileRecaptchaRef = React.useRef<CustomCaptchaRef>(null);

  const [desktopResetToggle, setDesktopResetToggle] = React.useState(0);
  const [mobileResetToggle, setMobileResetToggle] = React.useState(0);

  React.useEffect(() => {
    if (desktopResetToggle > 0) {
      resetCustomCaptcha(desktopRecaptchaRef);
    }
  }, [desktopResetToggle]);

  React.useEffect(() => {
    if (mobileResetToggle > 0) {
      resetCustomCaptcha(mobileRecaptchaRef);
    }
  }, [mobileResetToggle]);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const desktopForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      center: "Gurgaon",
      agree: false,
      captchaAnswer: "",
      captchaSignature: "",
    },
  });

  const mobileForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      center: "Gurgaon",
      agree: false,
      captchaAnswer: "",
      captchaSignature: "",
    },
  });

  const createSubmitHandler = (
    formInstance: typeof desktopForm,
    triggerReset: () => void
  ) => async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          center: data.center,
          captchaAnswer: data.captchaAnswer,
          captchaSignature: data.captchaSignature,
          formType: "DIDM Gurgaon Adword Form 1",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form");
      }

      toast(`Thank you, ${data.name}! Your free trial class is reserved at our ${data.center} center.`, "success");
      formInstance.reset({
        name: "",
        email: "",
        phone: "",
        center: "Gurgaon",
        agree: false,
        captchaAnswer: "",
        captchaSignature: "",
      });
      triggerReset();
      router.push("/thank-you");
    } catch (err: unknown) {
      console.error("Failed to shoot email lead:", err);
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onDesktopSubmit = createSubmitHandler(desktopForm, () => setDesktopResetToggle(prev => prev + 1));
  const onMobileSubmit = createSubmitHandler(mobileForm, () => setMobileResetToggle(prev => prev + 1));

  const inputBase = "w-full border border-zinc-200 rounded-lg py-1.5 pl-8 pr-3 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/15 focus:border-brand-red transition-all duration-200";

  const renderForm = (
    formInstance: typeof desktopForm,
    onSubmitHandler: (data: ContactFormValues) => void,
    recaptchaRef: React.RefObject<CustomCaptchaRef | null>,
    captchaId: string
  ) => {
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = formInstance;

    return (
      <div className="rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-white/20 bg-white/95 backdrop-blur-md">
        {/* Modern Branded Red Header */}
        <div className="bg-gradient-to-r from-brand-red to-red-600 px-3.5 py-2 text-white">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[8px] bg-white/20 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Free Demo Class
            </span>
            <span className="text-[8px] font-black text-red-100 uppercase tracking-widest">
              Gurgaon
            </span>
          </div>
          <h3 className="text-xs font-extrabold tracking-tight uppercase flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-white" />
            Book Free Trial Class
          </h3>
        </div>

        {/* Form Body */}
        <div className="p-3 space-y-2">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-2">
            {/* Full Name */}
            <div className="flex flex-col gap-0.5">
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  disabled={isSubmitting}
                  {...register("name", {
                    onBlur: (e) => {
                      e.target.value = e.target.value.trim().replace(/\s+/g, " ");
                    }
                  })}
                  className={`${inputBase} ${errors.name ? "border-red-400 bg-red-50/50" : "border-zinc-200 bg-zinc-50/80"}`}
                />
              </div>
              {errors.name && <p className="text-[9px] text-red-500 font-semibold pl-1 leading-tight">{errors.name.message}</p>}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-0.5">
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  disabled={isSubmitting}
                  {...register("email", {
                    onBlur: (e) => {
                      e.target.value = e.target.value.trim();
                    }
                  })}
                  className={`${inputBase} ${errors.email ? "border-red-400 bg-red-50/50" : "border-zinc-200 bg-zinc-50/80"}`}
                />
              </div>
              {errors.email && <p className="text-[9px] text-red-500 font-semibold pl-1 leading-tight">{errors.email.message}</p>}
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-0.5">
              <div className="relative">
                <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={10}
                  disabled={isSubmitting}
                  {...register("phone", {
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    }
                  })}
                  className={`${inputBase} ${errors.phone ? "border-red-400 bg-red-50/50" : "border-zinc-200 bg-zinc-50/80"}`}
                />
              </div>
              {errors.phone && <p className="text-[9px] text-red-500 font-semibold pl-1 leading-tight">{errors.phone.message}</p>}
            </div>

            {/* Choose Center */}
            <div className="flex flex-col gap-0.5">
              <div className="relative">
                <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
                <select
                  {...register("center")}
                  disabled={isSubmitting}
                  className={`${inputBase} cursor-pointer appearance-none ${errors.center ? "border-red-400 bg-red-50/50" : "border-zinc-200 bg-zinc-50/80"}`}
                >
                  <option value="">Choose Center Near You..</option>
                  {CENTERS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.center && <p className="text-[9px] text-red-500 font-semibold pl-1 leading-tight">{errors.center.message}</p>}
            </div>

            {/* Agreement Checkbox */}
            <div className="flex flex-col gap-0.5 py-0.5 text-left">
              <label className="flex items-start gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  disabled={isSubmitting}
                  {...register("agree")}
                  className={`mt-0.5 rounded border border-zinc-300 text-brand-red focus:ring-brand-red/25 focus:border-brand-red h-3 w-3 ${
                    errors.agree ? "border-red-500" : "border-zinc-300"
                  }`}
                />
                <span className="text-[9px] text-zinc-500 font-semibold leading-tight">
                  I agree to DIDM{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline font-bold"
                  >
                    Terms
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline font-bold"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.agree && <p className="text-[9px] text-red-500 font-semibold pl-1 leading-tight">{errors.agree.message}</p>}
            </div>

            {/* Spam Protection - Custom math CAPTCHA */}
            <div className="bg-zinc-50 border border-zinc-200/50 rounded-lg p-1.5">
              <CustomCaptcha
                ref={recaptchaRef}
                id={captchaId}
                size="sm"
                error={errors.captchaAnswer?.message || errors.captchaSignature?.message}
                onChange={(val) => {
                  setValue("captchaAnswer", val?.answer || "", { shouldValidate: true });
                  setValue("captchaSignature", val?.signature || "", { shouldValidate: true });
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-red to-red-600 hover:from-brand-red-dark hover:to-red-750 text-white py-2 rounded-lg font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-all duration-350 shadow shadow-red-500/15 hover:shadow-red-500/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-1">
                  <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Reserving...
                </span>
              ) : (
                <>
                  Reserve My Seat
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-white pt-[68px] sm:pt-[80px] md:pt-[84px] pb-20 overflow-hidden">
      
      {/* Subtle background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

      {/* Premium Animated Banner Slider Wrapper */}
      <div
        className="w-full relative overflow-hidden h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[450px] bg-zinc-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image Slide Transitions */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${SLIDES[currentSlide].image})` }}
            />
          </AnimatePresence>
        </div>

        {/* Dark gradients for text legibility and form separation */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Dynamic Text Content Overlay (Animate on Slide Change) */}
        <div className="absolute left-6 sm:left-10 md:left-14 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 max-w-[85%] lg:max-w-[55%] z-20 text-white flex flex-col gap-2 sm:gap-3 select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-2 sm:space-y-3"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {SLIDES[currentSlide].badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] sm:text-[10px] md:text-xs bg-brand-red/85 border border-brand-red text-white font-bold uppercase tracking-wider px-2 py-0.5 sm:py-1 rounded-md shadow-sm flex items-center gap-1"
                  >
                    <CheckCircle2 className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-0.5 sm:space-y-1.5">
                <span className="text-[10px] sm:text-xs md:text-sm text-red-400 font-bold uppercase tracking-widest block">
                  {SLIDES[currentSlide].subtitle}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-black tracking-tight leading-[1.1]">
                  {SLIDES[currentSlide].title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-100 font-bold sm:text-zinc-200">
                  {SLIDES[currentSlide].highlight}
                </p>
              </div>

              {/* Description */}
              <p className="text-[10px] sm:text-xs md:text-[13px] text-zinc-300 font-medium max-w-xl leading-relaxed hidden sm:line-clamp-2">
                {SLIDES[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Controls & Indicators (Compact Grouping Bottom-Left) */}
        <div className="absolute bottom-6 left-6 sm:left-10 md:left-14 lg:left-16 xl:left-24 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          <button
            onClick={prevSlide}
            className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-4 bg-brand-red" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Desktop Overlay Form - positioned on right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 xl:right-24 w-[250px] lg:w-[270px] xl:w-[290px] z-20"
        >
          {renderForm(desktopForm, onDesktopSubmit, desktopRecaptchaRef, "hero-desktop-captcha")}
        </motion.div>
      </div>

      {/* Mobile Form Display (Stacked Below Banner) */}
      <div className="block lg:hidden px-4 -mt-8 max-w-[325px] mx-auto relative z-10">
        {renderForm(mobileForm, onMobileSubmit, mobileRecaptchaRef, "hero-mobile-captcha")}
      </div>

      {/* Centered Content Below Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center flex flex-col items-center gap-7 relative z-10">
        
        {/* Main Title Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-zinc-900 tracking-tight leading-[1.15]"
        >
          &ldquo;Digital Marketing Training Institute - <span className="text-brand-red">Gurgaon</span>&rdquo;
        </motion.h1>

        {/* Description Paragraph with Red Highlights */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="text-sm sm:text-base md:text-[17px] text-zinc-500 leading-[1.8] font-medium max-w-5xl text-center"
        >
          <span className="text-brand-red font-bold">Delhi Institute of Digital Marketing (DIDM)</span>, a top digital marketing training provider across India running multiple training center in <span className="text-brand-red font-bold">Delhi/NCR</span> and cover almost every part of the <span className="text-brand-red font-bold">South Delhi</span> | <span className="text-brand-red font-bold">North Delhi</span> | <span className="text-brand-red font-bold">East Delhi</span> | <span className="text-brand-red font-bold">West Delhi</span> | <span className="text-brand-red font-bold">Gurgaon</span> | <span className="text-brand-red font-bold">Gurgaon</span> and other important location both <span className="text-brand-red font-bold">Online & Offline</span> mode with different training program in <span className="text-brand-red font-bold">Digital Marketing Course</span>.
        </motion.p>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-brand-red to-red-400 rounded-full mt-2"
        />
      </div>

    </section>
  );
};
