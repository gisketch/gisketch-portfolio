import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import BlurInOnView from "./ui/blur-in-on-view";
import { cn, useBreakpoint } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  id?: string;
  title?: string;
  hasBgGrid?: boolean;
  blurInView?: boolean;
  ref?: any;
}

const Section = ({
  children,
  className,
  contentClassName, //only use if blurinview
  titleClassName,
  id,
  title,
  hasBgGrid = false,
  blurInView = true,
  ref,
}: SectionProps) => {
  const { isMd } = useBreakpoint();
  return (
    <section
      id={id}
      ref={ref}
      className={twMerge(
        "w-full mb-12 md:mb-24",
        "px-4 sm:px-8",
        "flex flex-col gap-8",
        className
      )}
    >
      {hasBgGrid && isMd && (
        <div className="absolute pointer-events-none w-[120%] h-[120%]">
          <div className="relative w-full h-full">
            {/* Grid background */}
            <div className="absolute inset-0 dark:bg-dot-white/40 bg-dot-black/60" />
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute left-0 inset-y-0 w-40 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 inset-y-0 w-40 bg-gradient-to-l from-background to-transparent" />

            {/* Mask overlay */}
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
        </div>
      )}
      {title && (
        <BlurInOnView>
          <h2
            className={cn(
              "text-h2 font-extrabold md:text-h1-desktop w-full text-center md:mb-4",
              titleClassName
            )}
          >
            {title}
          </h2>
        </BlurInOnView>
      )}
      {blurInView ? (
        <BlurInOnView
          className={cn(
            "w-full h-full flex flex-col items-center",
            contentClassName
          )}
        >
          {children}
        </BlurInOnView>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
