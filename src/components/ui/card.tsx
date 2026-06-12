import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  glow?: boolean;
  hoverEffect?: boolean;
  gradientBorder?: boolean;
  elevated?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = "",
      children,
      glass = true,
      glow = false,
      hoverEffect = true,
      gradientBorder = false,
      elevated = false,
      ...props
    },
    ref
  ) => {
    let cardClasses = "rounded-2xl relative overflow-hidden transition-all duration-350 ease-out ";
    
    if (glass) {
      cardClasses += "glass-panel ring-1 ring-black/[0.04] ";
    } else {
      cardClasses += "bg-white border border-zinc-200/80 ring-1 ring-black/[0.03] ";
    }

    if (elevated) {
      cardClasses += "shadow-[var(--shadow-md)] ";
    }

    if (hoverEffect) {
      cardClasses += "hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 ";
    }

    const combinedClasses = `${cardClasses} ${className}`;

    return (
      <div ref={ref} className={combinedClasses} {...props}>
        {glow && (
          <div className="absolute -inset-px bg-gradient-to-r from-brand-red/10 to-rose-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
        )}
        {gradientBorder && (
          <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-zinc-200 via-brand-red/30 to-zinc-200 rounded-2xl -z-10 pointer-events-none" />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 border-b border-zinc-100 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-lg sm:text-xl font-bold tracking-tight text-zinc-900 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-sm text-zinc-500 mt-1.5 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 border-t border-zinc-100 flex items-center ${className}`} {...props}>
    {children}
  </div>
);
