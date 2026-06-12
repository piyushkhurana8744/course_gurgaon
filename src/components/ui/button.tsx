import * as React from "react";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      animate = true,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyle =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary:
        "bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white border border-red-700/30 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(220,38,38,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_24px_rgba(220,38,38,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]",
      secondary:
        "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 shadow-[var(--shadow-sm)]",
      outline:
        "bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 shadow-[var(--shadow-xs)]",
      ghost:
        "bg-transparent hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900",
      link:
        "bg-transparent text-brand-red hover:underline p-0 underline-offset-4",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs font-semibold gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold gap-2",
      lg: "px-7 py-3.5 text-sm font-bold tracking-wide gap-2",
    };

    const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

    if (animate) {
      return (
        <motion.button
          ref={ref as any}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClasses}
          {...(props as any)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
