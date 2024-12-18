"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import useTerminalStore from "@/store/use-terminal-store";
import Terminal from "../blocks/terminal";
import { Button } from "../ui/button";
import Section from "../section";
import { FlipWords } from "../ui/flip-words";
import { about } from "@/lib/data";
import Markdown from "react-markdown";
import Code from "./hero/code";
import { cn, useBreakpoint } from "@/lib/utils";
import localFont from "next/font/local";
import { RocketIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";

const gisketchFont = localFont({
  src: "../../app/fonts/Gisketch.otf",
  variable: "--font-gisketch",
});

const pillStyles = [
  "border border-terminal-oni-violet bg-terminal-oni-violet/30 text-terminal-oni-violet",
  "border border-terminal-spring-green bg-terminal-spring-green/30 text-terminal-spring-green",
  "border border-terminal-crystal-blue bg-terminal-crystal-blue/30 text-terminal-crystal-blue",
  "border border-terminal-sakura-pink bg-terminal-sakura-pink/30 text-terminal-sakura-pink",
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { isTerminalInHero, setIsTerminalInHero } = useTerminalStore();
  const { isMd } = useBreakpoint();
  const { titles, work, descriptions, hobbies } = about();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMd) {
      if (latest > 0.5) {
        setIsTerminalInHero(false);
      } else {
        setIsTerminalInHero(true);
      }
    }
  });

  return (
    <Section
      ref={sectionRef}
      className="relative z-10 md:h-[36rem]"
      blurInView={false}
    >
      <div className="mt-12 sm:mt-24 flex flex-col">
        <div className="text-h3 leading-5 sm:text-h1 md:text-[2.75rem] font-extrabold lg:text-hero mb-4 text-foreground">
          <div className="flex flex-row select-none">
            <div className="flex flex-col flex-1">
              <span className="whitespace-nowrap">
                I&apos;m{" "}
                <span className="text-terminal-oni-violet dark:text-terminal-ronin-yellow">
                  Glenn Jimenez
                </span>
                <span>, aka{" "}</span>
                <span
                  className={cn(
                    gisketchFont.className,
                    "ml-2 font-light",
                    "text-terminal-oni-violet dark:text-terminal-ronin-yellow",
                    "px-8 mx-[-1.5rem]"
                  )}
                >
                  gisketch
                </span>
              </span>
              <span className="whitespace-nowrap">
                a
                <FlipWords
                  className="text-foreground"
                  words={titles}
                  duration={5000}
                />
              </span>
            </div>
          </div>
          <p className="text-foreground/60 text-small sm:text-body md:text-body-desktop font-extralight flex gap-1 mt-2 whitespace-nowrap">
            {" "}
            {work.map((workText, index) => (
              <span key={`work-${index}`}>
                {workText}
                {index !== work.length - 1 && " ・ "}
              </span>
            ))}
          </p>
          <div className="mt-2 text-foreground/80 font-light text-body md:text-body-desktop flex flex-col gap-2 md:pr-[20rem] z-10">
            <Markdown
              components={{
                strong: ({ ...props }) => (
                  <strong className="font-bold text-terminal-spring-green">
                    {props.children}
                  </strong>
                ),
              }}
            >
              {descriptions[0]}
            </Markdown>
            <Markdown
              components={{
                strong: ({ ...props }) => (
                  <strong className="font-bold text-terminal-oni-violet">
                    {props.children}
                  </strong>
                ),
              }}
            >
              {descriptions[1]}
            </Markdown>
          </div>
          <div className="flex gap-2 text-small md:text-small-desktop font-extralight mt-2 md:mt-4">
            {hobbies.map((hobby, index) => (
              <div
                key={"hobby-" + index}
                className={cn(
                  "rounded-full px-2 py-[0.125rem]",
                  pillStyles[index % hobbies.length]
                )}
              >
                {hobby}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start md:flex-row gap-4 text-body md:text-body-desktop my-8 md:mt-6 md:items-center">
            <Link href="/projects">
              <RainbowButton className="h-10 rounded-lg px-6">
                <RocketIcon className="w-4 h-4 mr-2" />
                Explore Projects
              </RainbowButton>
            </Link>
            <Link href="/resume">
              <Button
                variant="outline"
                size="lg"
                className="h-11 bg-background border border-border text-foreground hover:bg-foreground/20 px-6"
              >
                <FileTextIcon className="w-4 h-4 mr-1" />
                Résumé
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-[14rem] right-[-4rem] hidden md:block">
          {isTerminalInHero && (
            <Terminal className="h-[360px] w-[380px]">
              <pre className="whitespace-pre">{<Code />}</pre>
            </Terminal>
          )}
        </div>
        <Terminal
          className="backdrop-blur-none h-[360px] w-full visible md:invisible"
          layoutId="mobile-terminal"
        >
          <pre className="whitespace-pre">{<Code />}</pre>
        </Terminal>
      </div>
    </Section>
  );
}
