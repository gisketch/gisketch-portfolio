"use client";
import { cn, useBreakpoint } from "@/lib/utils";
import React from "react";
import { FollowerPointerCard } from "./following-pointer";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  children: React.ReactNode;
  header?: string;
  HeaderIcon?: any;
  hoverText?: string;
  hideCursor?: boolean;
  onClick?: () => void;
}
const baseStyles =
  "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-border bg-background border relative min-h-[240px] md:min-h-full";

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  children,
  header,
  HeaderIcon,
  hoverText,
  hideCursor = false,
  onClick,
}) => {
  const { isSm } = useBreakpoint();

  const Header = HeaderIcon && header && (
    <div className="flex gap-2 items-center text-body md:text-body-desktop">
      <HeaderIcon size={isSm ? 16 : 12} />
      {header}
    </div>
  );

  const content = (
    <div className="flex flex-col h-full">
      {Header}
      <div className="flex-1 text-body md:text-body-desktop p-2 pt-4">
        {children}
      </div>
    </div>
  );

  const containerClassName = cn(
    baseStyles,
    onClick && "cursor-pointer",
    className
  );

  const containerProps = {
    className: containerClassName,
    ...(onClick && {
      onClick,
      role: "button",
      tabIndex: 0,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      },
    }),
  };

  if (hoverText) {
    return (
      <FollowerPointerCard
        title={hoverText}
        hideCursor={hideCursor}
        {...containerProps}
      >
        {content}
      </FollowerPointerCard>
    );
  }

  return <div {...containerProps}>{content}</div>;
};
