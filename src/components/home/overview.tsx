"use client";

import Section from "../section";
import { ChevronRight, GitBranch } from "lucide-react";
import { cn, useBreakpoint } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import { resumeData } from "@/lib/data";
import ResumeItem from "../blocks/resume-item";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Terminal from "../blocks/terminal";
import useTerminalStore from "@/store/use-terminal-store";
import { motion } from "framer-motion";

export default function Overview() {
  const [activeTab, setActiveTab] = useState("experiences");
  const { isTerminalInHero } = useTerminalStore();

  return (
    <Section
      className="flex items-center relative"
      title="Profile Overview"
      hasBgGrid
      blurInView={false}
    >
      <div className="relative w-full md:h-[520px] hidden md:block">
        <div className="absolute w-full h-full border-4 border-dashed rounded-xl flex justify-center items-center">
          <motion.span
            className="text-h1-desktop text-foreground/40"
            animate={{ opacity: isTerminalInHero ? 1 : 0 }}
          >
            404 not found :{"("}
          </motion.span>
        </div>
        <Terminal
          className="absolute"
          animate={{ opacity: isTerminalInHero ? 0 : 1 }}
        >
          <span className="opacity-80">zsh 3.1.6</span>
          <span className="opacity-80">
            Loading personal and system profiles took 24ms.
          </span>
          <span className="flex flex-row gap-2">
            <span className="text-terminal-ronin-yellow dark:text-terminal-carp-yellow">
              gisketch
            </span>
            <span className="text-terminal-crystal-blue dark:text-terminal-aqua1">
              ~/devfiles/portfolio
            </span>
            <span className="flex flex-row items-center gap-2 text-terminal-spring-green">
              <GitBranch size={12} /> main
            </span>
          </span>
          <span className="flex flex-row gap-1 items-center">
            <ChevronRight size={14} />{" "}
            <TypewriterEffect
              cursorClassName="md:h-[0.875rem] md:w-[0.5rem] bg-terminal-fg"
              words={[
                {
                  text: `./${activeTab}.sh`,
                  className: "text-body font-light",
                },
              ]}
              key={"type-" + activeTab}
            />
          </span>
          <Resume activeTab={activeTab} setActiveTab={setActiveTab} />
          <>
            <motion.div
              animate={{ opacity: !isTerminalInHero ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="invisible dark:visible absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"
            />
            <motion.div
              animate={{ opacity: !isTerminalInHero ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="invisible dark:visible absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"
            />
            <motion.div
              animate={{ opacity: !isTerminalInHero ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="invisible dark:visible absolute bottom-[-0.125rem] left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"
            />
            <motion.div
              animate={{ opacity: !isTerminalInHero ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="invisible dark:visible absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"
            />
          </>
        </Terminal>
      </div>
      <Resume
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="block md:hidden"
      />
    </Section>
  );
}

const Resume = ({ activeTab, setActiveTab, className = "" }) => {
  const { experiences, achievements, education } = resumeData;

  const tabs = [
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <>
          {experiences.map((item, index) => (
            <ResumeItem data={item} key={index} />
          ))}
        </>
      ),
    },
    {
      title: "Achievements",
      value: "achievements",
      content: (
        <>
          {achievements.map((item, index) => (
            <ResumeItem data={item} key={index} />
          ))}
        </>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <>
          {education.map((item, index) => (
            <ResumeItem data={item} key={index} />
          ))}
        </>
      ),
    },
  ];

  const { isMd } = useBreakpoint();

  return (
    <div className={cn("flex flex-col w-full", className)}>
      {/* Tabs */}
      <div className="flex gap-2 md:gap-1 md:mt-2 mx-auto md:mx-0 justify-center md:justify-start">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            variant="ghost"
            size={isMd ? "xs" : "sm"}
            className={cn(
              "rounded-lg",
              `${
                activeTab === tab.value
                  ? "md:hover:bg-terminal-carp-yellow md:bg-terminal-carp-yellow md:dark:bg-terminal-fg md:text-white md:dark:text-terminal-bg md:hover:text-white md:hover:dark:text-terminal-bg bg-foreground text-background"
                  : "md:hover:dark:bg-terminal-bg-half md:hover:bg-terminal-bg md:hover:text-terminal-fg"
              }`
            )}
          >
            <span className="text-body">{tab.title}</span>
          </Button>
        ))}
      </div>

      {/* Content */}
      <div className="p-2 font-sans mt-4 md:mt-2">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};
