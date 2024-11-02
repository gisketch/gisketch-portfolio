// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

export const FollowerPointerCard = ({
  children,
  className,
  title,
  hideCursor = false,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  hideCursor?: boolean;
  onClick?: () => void;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Use clientX and clientY for viewport-relative positioning
    x.set(e.clientX);
    y.set(e.clientY);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <>
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        style={{
          cursor: hideCursor ? "pointer" : "none",
        }}
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
      {isInside &&
        createPortal(
          <AnimatePresence>
            <FollowPointer x={x} y={y} title={title} hideCursor={hideCursor} />
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  hideCursor = false,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
  hideCursor?: boolean;
}) => {
  const colors = [
    // "var(--background)",
    "var(--neutral-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];
  return (
    <motion.div
      className="h-4 w-4 rounded-full fixed z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className={cn(
          "h-6 w-6 text-foreground transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px]",
          hideCursor ? "invisible" : "visible"
        )}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={cn(
          "px-2 py-2 text-white whitespace-nowrap min-w-max text-xs rounded-full",
          hideCursor ? "mt-6" : "mt-0"
        )}
      >
        {title || "..."}
      </motion.div>
    </motion.div>
  );
};