import { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const Hero: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full text-background",
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroHeading: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h1 className="text-3xl sm:text-4xl !leading-tight font-extrabold">
      {children}
    </h1>
  );
};

export const HeroSubHeading: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="text-lg !leading-relaxed font-normal text-foreground/80">{children}</div>
  );
};
