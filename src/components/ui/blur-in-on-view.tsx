"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurInOnViewProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
}

const BlurInOnView = ({
  children,
  className,
  variant,
  duration = 0.3,
  once = true,
  amount = 0.4,
}: BlurInOnViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
  });

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default BlurInOnView;
