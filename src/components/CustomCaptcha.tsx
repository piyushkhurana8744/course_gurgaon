"use client";

import * as React from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";

export interface CustomCaptchaRef {
  reset: () => void;
}

interface CustomCaptchaProps {
  onChange: (values: { answer: string; signature: string } | null) => void;
  id?: string;
  error?: string;
  size?: "default" | "sm";
}

/**
 * Safely resets a CustomCaptcha ref to fetch a new challenge.
 */
export const resetCustomCaptcha = (ref: React.RefObject<CustomCaptchaRef | null>) => {
  ref.current?.reset();
};

export const CustomCaptcha = React.forwardRef<CustomCaptchaRef, CustomCaptchaProps>(
  ({ onChange, id, error, size = "default" }, ref) => {
    const onChangeRef = React.useRef(onChange);
    React.useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    const [question, setQuestion] = React.useState<string>("");
    const [signature, setSignature] = React.useState<string>("");
    const [userAnswer, setUserAnswer] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const fetchChallenge = React.useCallback(async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/captcha", { cache: "no-store" });
        if (response.ok) {
          const data = await response.json();
          setQuestion(data.question);
          setSignature(data.signature);
          setUserAnswer("");
          onChangeRef.current(null); // Clear parent state safely
        }
      } catch (err) {
        console.error("Failed to load captcha challenge:", err);
      } finally {
        setLoading(false);
      }
    }, []);

    React.useEffect(() => {
      fetchChallenge();
    }, [fetchChallenge]);

    // Expose reset capabilities to parent via ref
    React.useImperativeHandle(ref, () => ({
      reset: () => {
        fetchChallenge();
      },
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ""); // Allow numeric input only
      setUserAnswer(value);
      
      if (value) {
        onChangeRef.current({ answer: value, signature });
      } else {
        onChangeRef.current(null);
      }
    };

    const isSm = size === "sm";

    if (isSm) {
      return (
        <div className="flex flex-col text-left w-full bg-zinc-50 border border-zinc-200 shadow-xs gap-1 p-2 my-1 rounded-lg">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 p-1 rounded-md">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-zinc-500 uppercase tracking-wider leading-none">
                  Verify
                </span>
                <span className="font-bold text-zinc-800 tracking-tight text-[11px] mt-0.5 leading-none">
                  {loading ? "..." : question}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-1 justify-end">
              <input
                id={id || "custom-captcha-input"}
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Ans"
                disabled={loading}
                className={`w-14 bg-white border text-center text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all py-1 px-1.5 text-xs rounded-md ${
                  error ? "border-red-500" : "border-zinc-300"
                }`}
              />
              <button
                type="button"
                onClick={fetchChallenge}
                disabled={loading}
                title="Get new question"
                className="text-zinc-400 hover:text-brand-red hover:bg-zinc-100 rounded-md transition-colors cursor-pointer shrink-0 p-1"
              >
                <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin text-brand-red" : ""}`} />
              </button>
            </div>
          </div>
          {error && <span className="text-red-500 font-semibold pl-1 text-[9px] leading-tight">{error}</span>}
        </div>
      );
    }

    return (
      <div className="flex flex-col text-left w-full bg-zinc-50 border border-zinc-200 shadow-xs gap-2 p-3 my-2 rounded-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 p-1.5 rounded-lg">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                Verification
              </span>
              <span className="font-bold text-zinc-800 tracking-tight mt-0.5 text-[13px]">
                {loading ? "Generating question..." : question}
              </span>
            </div>
          </div>
          
          <button
            type="button"
            onClick={fetchChallenge}
            disabled={loading}
            title="Get new question"
            className="text-zinc-400 hover:text-brand-red hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer shrink-0 disabled:opacity-50 p-1.5"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-brand-red" : ""}`} />
          </button>
        </div>

        <input
          id={id || "custom-captcha-input"}
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Solve the problem above"
          disabled={loading}
          className={`w-full bg-white border text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all py-2.5 px-3.5 text-sm rounded-xl ${
            error ? "border-red-500" : "border-zinc-300"
          }`}
        />
        {error && <span className="text-red-500 font-semibold pl-1 text-xs">{error}</span>}
      </div>
    );
  }
);

CustomCaptcha.displayName = "CustomCaptcha";
