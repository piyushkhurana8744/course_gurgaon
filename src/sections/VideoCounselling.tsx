"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, ChevronDown, Sparkles, Quote } from "lucide-react";
import { useRouter } from "next/navigation";
import { CENTERS } from "@/data/content";
import { contactFormSchema, ContactFormValues } from "@/utils/validation";
import { CustomCaptcha, CustomCaptchaRef, resetCustomCaptcha } from "@/components/CustomCaptcha";

export const VideoCounselling = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const recaptchaRef = React.useRef<CustomCaptchaRef>(null);

  const [recaptchaResetToggle, setRecaptchaResetToggle] = React.useState(0);

  React.useEffect(() => {
    if (recaptchaResetToggle > 0) {
      resetCustomCaptcha(recaptchaRef);
    }
  }, [recaptchaResetToggle]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      center: "Gurgaon",
      agree: false,
      captchaAnswer: "",
      captchaSignature: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
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
          formType: "Free Counselling Request Form",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form");
      }

      toast(`Counselling request locked! Our Gurgaon career specialist will call you back on ${data.phone} within 15 minutes.`, "success");
      reset({
        name: "",
        phone: "",
        email: "",
        center: "Gurgaon",
        agree: false,
        captchaAnswer: "",
        captchaSignature: "",
      });
      setRecaptchaResetToggle(prev => prev + 1);
      router.push("/thank-you");
    } catch (err: unknown) {
      console.error("Failed to shoot email lead:", err);
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2.5">
          <span className="text-xs font-black text-brand-red uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4" /> Career Guidance & Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-855 tracking-tight">
            Transforming Ambitions into <span className="text-brand-red">Digital Careers</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-medium">
            Watch our student reviews and book your free one-on-one career counselling session.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-2" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Student Reviews Card with Aspect-Video Player + Testimonial Info */}
          <div className="lg:col-span-6 flex flex-col">
            <Card className="border-zinc-200 shadow-xl overflow-hidden h-full flex flex-col bg-white">
              
              {/* Aspect Video Container (No Crop 16:9 aspect ratio) */}
              <div className="w-full aspect-video relative bg-black overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/TAR-iTnqT78?si=3Y-IPWE_lmBblL1f"
                  title="Real Voices, Real Stories: Students Reviews for DIDM's Master in Digital Marketing Course"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Bottom Testimonial Content (Fills the blank space beautifully) */}
              <div className="p-6 flex-1 flex flex-col justify-center gap-5 text-left border-t border-zinc-100 bg-white">
                
                {/* Blockquote Quote text */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-red-500/10 absolute -top-4.5 -left-2.5 rotate-180" />
                  <p className="text-zinc-700 text-sm sm:text-base font-semibold leading-relaxed relative z-10 italic pl-5 text-balance">
                    {"\"Real Voices, Real Stories: Outstanding reviews and feedback from students who completed the Master in Digital Marketing Course at DIDM.\""}
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-800 uppercase tracking-wide">
                      DIDM Trainee Reviews
                    </h4>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                      Master in Digital Marketing
                    </p>
                  </div>
                  <div className="bg-red-50 text-brand-red text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-red-100 shadow-2xs">
                    ✓ Verified Trainees
                  </div>
                </div>

              </div>

            </Card>
          </div>

          {/* Right Column: Book Counselling Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#800c0c] text-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-between h-full text-center">
              
              {/* Header Texts */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
                  Book Seat For Free Counselling
                </h3>
                <p className="text-zinc-200 text-xs sm:text-sm font-semibold tracking-wider mt-1.5">
                  Speak To Our Specialist - <a href="tel:+919310076503" className="hover:underline text-white">+91 - 9310076503</a>
                </p>
              </div>

              {/* Form elements */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      disabled={isSubmitting}
                      {...register("name", {
                        onBlur: (e) => {
                          e.target.value = e.target.value.trim().replace(/\s+/g, " ");
                        }
                      })}
                      className={`w-full bg-white border rounded-lg py-3 px-4 pr-10 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        errors.name ? "border-amber-400" : "border-transparent"
                      }`}
                    />
                    <User className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500" />
                  </div>
                  {errors.name && <span className="text-xs text-amber-300 font-bold">{errors.name.message}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone"
                      maxLength={10}
                      disabled={isSubmitting}
                      {...register("phone", {
                        onChange: (e) => {
                          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                        }
                      })}
                      className={`w-full bg-white border rounded-lg py-3 px-4 pr-10 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        errors.phone ? "border-amber-400" : "border-transparent"
                      }`}
                    />
                    <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500" />
                  </div>
                  {errors.phone && <span className="text-xs text-amber-300 font-bold">{errors.phone.message}</span>}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      disabled={isSubmitting}
                      {...register("email", {
                        onBlur: (e) => {
                          e.target.value = e.target.value.trim();
                        }
                      })}
                      className={`w-full bg-white border rounded-lg py-3 px-4 pr-10 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        errors.email ? "border-amber-400" : "border-transparent"
                      }`}
                    />
                    <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500" />
                  </div>
                  {errors.email && <span className="text-xs text-amber-300 font-bold">{errors.email.message}</span>}
                </div>

                {/* Choose Center Near You */}
                <div className="flex flex-col gap-1.5">
                  <div className="relative">
                    <select
                      disabled={isSubmitting}
                      {...register("center")}
                      className={`w-full bg-white border rounded-lg py-3 px-4 pr-10 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/20 appearance-none cursor-pointer ${
                        errors.center ? "border-amber-400" : "border-transparent"
                      }`}
                    >
                      <option value="">Choose Center Near You..</option>
                      {CENTERS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500 pointer-events-none" />
                  </div>
                  {errors.center && <span className="text-xs text-amber-300 font-bold">{errors.center.message}</span>}
                </div>

                {/* Agreement Checkbox */}
                <div className="flex flex-col gap-1.5 py-1 text-left">
                  <label className="flex items-start gap-2 cursor-pointer select-none text-zinc-200">
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      {...register("agree")}
                      className={`mt-0.5 rounded border border-transparent text-brand-red focus:ring-white/20 ${
                        errors.agree ? "border-amber-400 ring-2 ring-amber-400/20" : ""
                      }`}
                    />
                    <span className="text-[11px] font-bold leading-tight">
                      I agree to the DIDM{" "}
                      <a
                        href="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 hover:text-amber-200 hover:underline"
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 hover:text-amber-200 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agree && <span className="text-xs text-amber-300 font-bold">{errors.agree.message}</span>}
                </div>

                {/* Spam Protection - Custom math CAPTCHA */}
                <CustomCaptcha
                  ref={recaptchaRef}
                  id="counselling-captcha"
                  size="sm"
                  error={errors.captchaAnswer?.message || errors.captchaSignature?.message}
                  onChange={(val) => {
                    setValue("captchaAnswer", val?.answer || "", { shouldValidate: true });
                    setValue("captchaSignature", val?.signature || "", { shouldValidate: true });
                  }}
                />

                {/* Submit button */}
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c21a1a] hover:bg-[#b01616] active:bg-[#9d1212] text-white border border-[#b01616] shadow-md py-3.5 mt-4 cursor-pointer font-bold rounded-lg uppercase tracking-wide transition-all"
                >
                  {isSubmitting ? "Locking seat..." : "Submit Your Request"}
                </Button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
