"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BlurInOnView from "@/components/ui/blur-in-on-view";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        <BlurInOnView>
          {propTabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActive(tab)}
              className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                    activeTabClassName
                  )}
                />
              )}
              <span className="relative block text-black dark:text-white text-body md:text-body-desktop">
                {tab.title}
              </span>
            </button>
          ))}
        </BlurInOnView>
      </div>
      <div className={cn("relative", contentClassName)}>{active.content}</div>
    </>
  );
};
