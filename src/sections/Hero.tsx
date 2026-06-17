"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { User, Mail, Phone, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { CENTERS } from "@/data/content";
import { contactFormSchema, ContactFormValues } from "@/utils/validation";
import { CustomCaptcha, CustomCaptchaRef, resetCustomCaptcha } from "@/components/CustomCaptcha";

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

  const inputBase = "w-full border rounded-lg py-1 pl-8 pr-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/25 focus:border-brand-red transition-all";

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
      <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/25">
        {/* Branded Red Header */}
        <div className="bg-gradient-to-r from-brand-red/85 via-red-600/85 to-red-700/85 backdrop-blur-md px-3 py-1.5 text-white flex items-center justify-between">
          <h3 className="text-[11px] font-extrabold tracking-tight uppercase flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-white" />
            Book Free Demo
          </h3>
          <span className="text-[8px] bg-white/25 px-1.5 py-0.5 rounded font-black tracking-wide uppercase">
            Gurgaon
          </span>
        </div>

        {/* Form Body */}
        <div className="bg-white/75 backdrop-blur-md p-2.5">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-2">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
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
              {errors.name && <p className="text-[10px] text-red-500 font-semibold pl-1 leading-tight">{errors.name.message}</p>}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
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
              {errors.email && <p className="text-[10px] text-red-500 font-semibold pl-1 leading-tight">{errors.email.message}</p>}
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
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
              {errors.phone && <p className="text-[10px] text-red-500 font-semibold pl-1 leading-tight">{errors.phone.message}</p>}
            </div>

            {/* Choose Center */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
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
              </div>
              {errors.center && <p className="text-[10px] text-red-500 font-semibold pl-1 leading-tight">{errors.center.message}</p>}
            </div>

            {/* Agreement Checkbox */}
            <div className="flex flex-col gap-1 py-1 text-left">
              <label className="flex items-start gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  disabled={isSubmitting}
                  {...register("agree")}
                  className={`mt-0.5 rounded border border-zinc-350 text-brand-red focus:ring-brand-red/25 focus:border-brand-red ${
                    errors.agree ? "border-red-500" : "border-zinc-300"
                  }`}
                />
                <span className="text-[10px] text-zinc-600 font-semibold leading-tight">
                  I agree to the DIDM{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline"
                  >
                    Terms
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline"
                  >
                    Privacy
                  </a>
                </span>
              </label>
              {errors.agree && <p className="text-[10px] text-red-500 font-semibold pl-1 leading-tight">{errors.agree.message}</p>}
            </div>

            {/* Spam Protection - Custom math CAPTCHA */}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed mt-0.5"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-1.5">
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

      {/* Edge-to-Edge Full-Width Banner Image Wrapper */}
      <div className="w-full relative">
        <img
          src="https://res.cloudinary.com/dnfz4jwam/image/upload/v1781253789/DIDM_Digital_Marketing_Courses_at_Gurgaon_ri2d0s.webp"
          alt="DIDM Gurgaon Branch Banner"
          width={1200}
          height={675}
          className="w-full h-auto block"
        />
        {/* Right-side gradient for form readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none hidden lg:block" />

        {/* Desktop Overlay Form - positioned on right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 xl:right-24 w-[230px] lg:w-[245px] xl:w-[260px] z-20"
        >
          {renderForm(desktopForm, onDesktopSubmit, desktopRecaptchaRef, "hero-desktop-captcha")}
        </motion.div>
      </div>

      {/* Mobile Form Display (Stacked Below Banner) */}
      <div className="block lg:hidden px-4 -mt-8 max-w-[280px] mx-auto relative z-10">
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
