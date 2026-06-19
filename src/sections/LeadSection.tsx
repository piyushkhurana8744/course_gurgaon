"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ShieldCheck, Mail, Phone, User, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { CENTERS } from "@/data/content";
import { contactFormSchema, ContactFormValues } from "@/utils/validation";
import { CustomCaptcha, CustomCaptchaRef, resetCustomCaptcha } from "@/components/CustomCaptcha";

interface LeadSectionProps {
  onOpenVideo: () => void;
}

export const LeadSection = ({ onOpenVideo }: LeadSectionProps) => {
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
      email: "",
      phone: "",
      center: "Gurgaon",
      agree: false,
      captchaToken: "",
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
          captchaToken: data.captchaToken,
          formType: "Lead Section Form",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form");
      }

      toast(
        `Thank you, ${data.name}! Your free demo class seat is reserved at our ${data.center} center. We will call you shortly on ${data.phone}.`,
        "success"
      );
      reset({
        name: "",
        email: "",
        phone: "",
        center: "Gurgaon",
        agree: false,
        captchaToken: "",
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
    <section id="inquiry" className="py-24 relative bg-zinc-50 border-y border-zinc-200">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-red/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Video thumbnail, testimonial badges */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              Gurgaon Campus Virtual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight leading-tight">
              See How We Train Our Future Growth Marketers
            </h2>
            <p className="text-sm sm:text-base text-zinc-500">
              Watch this brief 2-minute tour of our high-tech labs, student collaboration zones, and agency-style project war rooms in Gurgaon.
            </p>

            {/* Video Thumbnail */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={onOpenVideo}
              className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
                alt="Gurgaon Campus Classroom"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-brand-red/90 flex items-center justify-center shadow-lg shadow-brand-red/50 relative group-hover:bg-brand-red transition-colors duration-300">
                  <div className="absolute inset-0 rounded-full border border-brand-red animate-ping opacity-75" />
                  <Play className="h-6 w-6 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Live Gurgaon Lab Classroom
                </span>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-200">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-zinc-800">100%</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-0.5">
                  Job Placements
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-zinc-800">4.9 ★</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-0.5">
                  1200+ Reviews
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-zinc-800">₹5.2L</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-0.5">
                  Average Package
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-6">
            <Card glass gradientBorder className="p-6 sm:p-8 border-zinc-200 relative bg-white">
              <div className="flex flex-col gap-2 mb-6 text-left">
                <h3 className="text-2xl font-extrabold text-zinc-800 tracking-tight">
                  Book a Free Demo Class
                </h3>
                <p className="text-xs text-zinc-500">
                  Fill details below to reserve an offline/online demo seat. Limited to 15 seats per batch.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand-red" /> Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      {...register("name", {
                        onBlur: (e) => {
                          e.target.value = e.target.value.trim().replace(/\s+/g, " ");
                        }
                      })}
                      disabled={isSubmitting}
                      className={`w-full bg-white border rounded-xl py-3 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all ${
                        errors.name ? "border-red-500" : "border-zinc-300 focus:border-brand-red"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-xs text-red-500 font-semibold">{errors.name.message}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-brand-red" /> Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. rahul@gmail.com"
                    {...register("email", {
                      onBlur: (e) => {
                        e.target.value = e.target.value.trim();
                      }
                    })}
                    disabled={isSubmitting}
                    className={`w-full bg-white border rounded-xl py-3 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all ${
                      errors.email ? "border-red-500" : "border-zinc-300"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="phone" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-brand-red" /> Contact Number
                  </label>
                  <div className="flex gap-2">
                    <div className="bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-3 text-sm text-zinc-500 font-semibold flex items-center justify-center">
                      +91
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                      maxLength={10}
                      {...register("phone", {
                        onChange: (e) => {
                          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                        }
                      })}
                      disabled={isSubmitting}
                      className={`w-full bg-white border rounded-xl py-3 px-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all ${
                        errors.phone ? "border-red-500" : "border-zinc-300"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>
                  )}
                </div>

                 {/* Center Selection */}
                 <div className="flex flex-col gap-1.5 text-left">
                   <label htmlFor="center" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                     <MapPin className="h-3.5 w-3.5 text-brand-red" /> Choose Center Near You..
                   </label>
                   <select
                     id="center"
                     {...register("center")}
                     disabled={isSubmitting}
                     className={`w-full bg-white border rounded-xl py-3 px-4 text-sm text-zinc-850 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all cursor-pointer ${
                       errors.center ? "border-red-500" : "border-zinc-300"
                     }`}
                   >
                     <option value="" className="bg-white text-zinc-800">Choose Center Near You..</option>
                     {CENTERS.map((c) => (
                       <option key={c} value={c} className="bg-white text-zinc-800">
                         {c}
                       </option>
                     ))}
                   </select>
                   {errors.center && (
                     <span className="text-xs text-red-500 font-semibold">{errors.center.message}</span>
                   )}
                 </div>

                 {/* Agreement Checkbox */}
                 <div className="flex flex-col gap-1.5 py-1 text-left">
                   <label className="flex items-start gap-2 cursor-pointer select-none">
                     <input
                       type="checkbox"
                       disabled={isSubmitting}
                       {...register("agree")}
                       className={`mt-0.5 rounded border border-zinc-350 text-brand-red focus:ring-brand-red/20 focus:border-brand-red ${
                         errors.agree ? "border-red-500" : "border-zinc-300"
                       }`}
                     />
                     <span className="text-[11px] text-zinc-550 font-bold leading-tight">
                       I agree to the DIDM{" "}
                       <a
                         href="/terms-and-conditions"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-brand-red hover:underline"
                       >
                         Terms of Use
                       </a>{" "}
                       and{" "}
                       <a
                         href="/privacy-policy"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-brand-red hover:underline"
                       >
                         Privacy Policy
                       </a>
                     </span>
                   </label>
                   {errors.agree && <span className="text-xs text-red-500 font-semibold">{errors.agree.message}</span>}
                 </div>

                  {/* Spam Protection - Cloudflare Turnstile */}
                  <CustomCaptcha
                    ref={recaptchaRef}
                    id="lead-section-captcha"
                    error={errors.captchaToken?.message}
                    onChange={(token) => {
                      setValue("captchaToken", token || "", { shouldValidate: true });
                    }}
                  />

                {/* Privacy Guarantee */}
                <div className="flex items-center gap-2 py-1 text-left">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-[10px] text-zinc-500 font-semibold">
                    100% spam-free. Your data is encrypted and completely private.
                  </span>
                </div>

                {/* Submit button */}
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer mt-4 py-3 shadow-lg shadow-brand-red/10 font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reserving Seat...</span>
                    </>
                  ) : (
                    <span>Register for Free Demo Class</span>
                  )}
                </Button>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
