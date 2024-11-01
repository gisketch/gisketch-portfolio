import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type Breakpoint = keyof typeof breakpoints;

interface BreakpointState {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  active: Breakpoint | null;
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointState>({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
    active: null,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setBreakpoint({
        isSm: width >= breakpoints.sm,
        isMd: width >= breakpoints.md,
        isLg: width >= breakpoints.lg,
        isXl: width >= breakpoints.xl,
        is2Xl: width >= breakpoints["2xl"],
        active:
          width >= breakpoints["2xl"]
            ? "2xl"
            : width >= breakpoints.xl
            ? "xl"
            : width >= breakpoints.lg
            ? "lg"
            : width >= breakpoints.md
            ? "md"
            : width >= breakpoints.sm
            ? "sm"
            : null,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export { breakpoints };
