"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Gamepad, GlobeIcon } from "lucide-react";
import { Button } from "../ui/button";

interface Card {
  title: string;
  subtitle?: string;
  source?: string;
  type: "game" | "web";
  technologies: any[];
  src: string;
  ctaText?: string;
  ctaLink?: string;
  content: (() => React.ReactNode) | React.ReactNode;
}

interface ExpandableCardGridProps {
  cards: Card[];
}

export default function ExpandableCardGrid({ cards }: ExpandableCardGridProps) {
  const [active, setActive] = useState<Card | boolean | null>(null);

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <TooltipProvider>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 flex items-center justify-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={512}
                    height={512}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="flex flex-col gap-2">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-body md:text-body-desktop"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.div
                        layoutId={`technologies-${active.technologies
                          .map((tech) => tech.name)
                          .join("-")}-${id}`}
                        className="flex gap-2 flex-wrap"
                      >
                        {active.technologies.map((tech, index) =>
                          tech.icon ? (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <tech.icon className="w-6 h-6" />
                              </TooltipTrigger>
                              <TooltipContent>{tech.name}</TooltipContent>
                            </Tooltip>
                          ) : null
                        )}
                      </motion.div>
                    </div>
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-row gap-2"
                    >
                      {active.source && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() =>
                            active.source
                              ? window.open(
                                  active.source,
                                  "_blank",
                                  "noopener,noreferrer"
                                )
                              : null
                          }
                        >
                          Code
                        </Button>
                      )}
                      <Button
                        size="sm"
                        onClick={() =>
                          active.ctaLink
                            ? window.open(
                                active.ctaLink,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            : null
                        }
                      >
                        {active.ctaText}
                      </Button>
                    </motion.div>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base md:h-fit pb-5 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={`${card.title}-${index}`}
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="group transition-shadow dark:transition-colors p-4 flex flex-col rounded-xl border-border shadow-none hover:shadow-xl dark:hover:shadow-none shadow-input dark:border-border border dark:hover:border-terminal-oni-violet/50 dark:hover:bg-terminal-oni-violet/20 cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={512}
                    height={512}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full  rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-start flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="group-hover:dark:text-terminal-oni-violet font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-body md:text-body-desktop flex flex-row gap-2 items-center"
                  >
                    <span className="text-foreground/40 group-hover:text-foreground/50 group-hover:dark:text-terminal-oni-violet">
                      {card.type === "game" ? (
                        <Gamepad size={16} />
                      ) : (
                        <GlobeIcon size={16} />
                      )}
                    </span>
                    {card.title}
                  </motion.h3>
                  <motion.p className="group-hover:dark:text-terminal-oni-violet/50 text-small md:text-small-desktop text-foreground/40">
                    {card.subtitle}
                  </motion.p>
                  <motion.div
                    layoutId={`technologies-${card.technologies
                      .map((tech) => tech.name)
                      .join("-")}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left flex gap-2 flex-wrap justify-center md:justify-start mt-2 md:mt-4"
                  >
                    {card.technologies.map((tech, index) =>
                      tech.icon ? (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <tech.icon className="w-6 h-6" />
                          </TooltipTrigger>
                          <TooltipContent>{tech.name}</TooltipContent>
                        </Tooltip>
                      ) : null
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </TooltipProvider>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
