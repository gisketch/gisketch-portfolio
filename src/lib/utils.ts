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

export function formatDate(data) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function calculateDuration(startMonth, startYear, endMonth, endYear) {
    // const start = new Date(startYear, startMonth - 1);
    // const end = new Date(endYear, endMonth - 1);

    let months = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(months / 12);
    months = months % 12;

    const duration = [];
    if (years > 0) {
      duration.push(`${years} ${years === 1 ? "year" : "years"}`);
    }
    if (months > 0) {
      duration.push(`${months} ${months === 1 ? "month" : "months"}`);
    }

    return duration.join(" ");
  }

  // const startDate = `${months[data.month - 1]}-${data.year}`;

  // Case 1: Only month and year
  if (!data.isPresent && !data.endedMonth && !data.endedYear) {
    return {
      date: `${months[data.month - 1]} ${data.year}`,
      duration: "",
    };
  }

  // Case 2: Present
  if (data.isPresent) {
    const now = new Date();
    const duration = calculateDuration(
      data.month,
      data.year,
      now.getMonth() + 1,
      now.getFullYear()
    );
    return {
      date: `${months[data.month - 1]} ${data.year} - Present`,
      duration: duration ? `(${duration})` : "",
    };
  }

  // Case 3: Has end date
  if (data.endedMonth && data.endedYear) {
    const duration = calculateDuration(
      data.month,
      data.year,
      data.endedMonth,
      data.endedYear
    );
    return {
      date: `${months[data.month - 1]} ${data.year} - ${
        months[data.endedMonth - 1]
      } ${data.endedYear}`,
      duration: duration ? `(${duration})` : "",
    };
  }
}
