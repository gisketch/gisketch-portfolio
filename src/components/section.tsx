// components/Section.tsx
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={twMerge(
        "w-full py-16 md:py-24",
        "px-4 sm:px-8",
        "flex flex-col gap-8",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
