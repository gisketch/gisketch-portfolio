// components/Section.tsx
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import BlurInOnView from "./ui/blur-in-on-view";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

const Section = ({ children, className, id, title }: SectionProps) => {
  return (
    <section
      id={id}
      className={twMerge(
        "w-full mb-16 md:mb-24",
        "px-4 sm:px-8",
        "flex flex-col gap-8",
        className
      )}
    >
      {title && 
      <BlurInOnView>
        <h1 className="text-h1 md:text-h1-desktop w-full text-center">
          {title}
        </h1>
      </BlurInOnView>
      }
      {children}
    </section>
  );
};

export default Section;
