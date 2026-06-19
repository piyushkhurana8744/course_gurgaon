"use client";

import * as React from "react";

export interface CustomCaptchaRef {
  reset: () => void;
}

interface CustomCaptchaProps {
  onChange: (token: string | null) => void;
  id?: string;
  error?: string;
}

/**
 * Safely resets a CustomCaptcha/Turnstile ref to request a new verification.
 */
export const resetCustomCaptcha = (ref: React.RefObject<CustomCaptchaRef | null>) => {
  ref.current?.reset();
};

declare global {
  interface Window {
    onloadTurnstileCallback?: () => void;
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: (error: any) => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
          action?: string;
          cData?: string;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export const CustomCaptcha = React.forwardRef<CustomCaptchaRef, CustomCaptchaProps>(
  ({ onChange, id, error }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const widgetIdRef = React.useRef<string | null>(null);
    const [scriptLoaded, setScriptLoaded] = React.useState(false);

    const onChangeRef = React.useRef(onChange);
    React.useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    // Dynamically inject Cloudflare Turnstile API Script if not already loaded
    React.useEffect(() => {
      if (typeof window === "undefined") return;

      const scriptId = "cloudflare-turnstile-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = () => setScriptLoaded(true);
        document.head.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    }, []);

    // Render Turnstile widget once script is loaded and container DOM element is ready
    React.useEffect(() => {
      if (!scriptLoaded || typeof window === "undefined" || !containerRef.current) return;

      let isMounted = true;
      let intervalId: NodeJS.Timeout;

      const renderWidget = () => {
        if (window.turnstile && containerRef.current && !widgetIdRef.current) {
          try {
            const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
            const widgetId = window.turnstile.render(containerRef.current, {
              sitekey: siteKey,
              theme: "light",
              size: "flexible", // Adapts width to container (100px–365px), always short height
              callback: (token: string) => {
                if (isMounted) {
                  onChangeRef.current(token);
                }
              },
              "expired-callback": () => {
                if (isMounted) {
                  onChangeRef.current(null);
                }
              },
              "error-callback": (err: any) => {
                console.error("Turnstile error:", err);
                if (isMounted) {
                  onChangeRef.current(null);
                }
              },
            });
            widgetIdRef.current = widgetId;
          } catch (err) {
            console.error("Failed to render Turnstile widget:", err);
          }
        }
      };

      if (window.turnstile) {
        renderWidget();
      } else {
        intervalId = setInterval(() => {
          if (window.turnstile) {
            clearInterval(intervalId);
            renderWidget();
          }
        }, 100);
      }

      return () => {
        isMounted = false;
        if (intervalId) clearInterval(intervalId);
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {
            // Ignore cleanup errors
          }
          widgetIdRef.current = null;
        }
      };
    }, [scriptLoaded]);

    // Expose reset trigger callback via ref interface to parent forms
    React.useImperativeHandle(ref, () => ({
      reset: () => {
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch (e) {
            console.error("Failed to reset Turnstile widget:", e);
          }
        }
        onChangeRef.current(null);
      },
    }));

    return (
      <div className="w-full flex flex-col items-start">
        <div 
          ref={containerRef} 
          id={id || "turnstile-widget-container"} 
          className="w-full"
        />
        {error && (
          <span className="text-red-500 font-bold pl-1 text-[11px] leading-tight mt-1 block">
            {error}
          </span>
        )}
      </div>
    );
  }
);

CustomCaptcha.displayName = "CustomCaptcha";
