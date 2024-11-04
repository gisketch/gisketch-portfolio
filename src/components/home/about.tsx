"use client";

import {
  Code,
  Link,
  MapPin,
  MessageCircleIcon,
  TerminalIcon,
  Wrench,
} from "lucide-react";
import Section from "../section";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Globe from "./about/globe";
import { getRandomFunFact, socialMedia, technologies } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { NeovimOriginalWordmark, TypescriptOriginal } from "devicons-react";

import dynamic from "next/dynamic";
import { FollowerPointerCard } from "../ui/following-pointer";

export default function About() {
  const [currentFunFact, setCurrentFunFact] = useState(getRandomFunFact(""));

  return (
    <Section className="flex items-center" title="Bits & Pieces of Me">
      <BentoGrid className="w-full mx-auto md:grid-cols-8 grid-cols-2 md:grid-rows-12 md:h-[500px]">
        <BentoGridItem
          className="col-span-2 md:col-span-4 md:row-span-4 select-none"
          hoverText="I live in Davao City!"
          header="Philippines"
          HeaderIcon={MapPin}
        >
          <Location />
        </BentoGridItem>
        <BentoGridItem
          hideCursor
          className="min-h-0 col-span-2 md:col-span-4 md:row-span-6"
          header="Connect"
          HeaderIcon={Link}
        >
          <Connect />
        </BentoGridItem>
        <BentoGridItem
          className="min-h-0 col-span-2 md:col-span-4 md:row-span-8"
          header="Technologies"
          HeaderIcon={Wrench}
        >
          <Technologies />
        </BentoGridItem>
        <BentoGridItem
          className="min-h-0 col-span-1 md:col-span-2 md:row-span-3"
          header="Fav Tool"
          HeaderIcon={TerminalIcon}
          hoverText="I use neovim btw"
        >
          <FavoriteTool />
        </BentoGridItem>
        <BentoGridItem
          className="min-h-0 md:col-span-2 md:row-span-3 "
          header="Fav Language"
          HeaderIcon={Code}
        >
          <FavoriteLanguage />
        </BentoGridItem>
        <BentoGridItem
          className="col-span-2 min-h-0 md:col-span-4 md:row-span-3 overflow-hidden select-none cursor-pointer"
          header="Fun Fact"
          HeaderIcon={MessageCircleIcon}
          hideCursor
          hoverText="Click for a random fun fact about me"
          onClick={() => setCurrentFunFact(getRandomFunFact(currentFunFact))}
        >
          <FunFact text={currentFunFact} />
        </BentoGridItem>
      </BentoGrid>
    </Section>
  );
}

const Location = () => {
  return (
    <div className="absolute left-[20%] bottom-[-80%] md:bottom-[-120%] cursor-none">
      <Globe width={400} height={400} />
    </div>
  );
};

const Connect = ({}) => (
  <div className="h-full flex flex-col gap-2 text-body md:text-body-desktop text-foreground/50">
    {socialMedia.map((social, index) => (
      <FollowerPointerCard
        hideCursor
        key={"social.platform-" + index}
        title={`@${social.username}`}
      >
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center hover:text-foreground transition-colors"
        >
          <social.icon size={20} />
          {social.platform}
        </a>
      </FollowerPointerCard>
    ))}
  </div>
);

const Technologies = () => {
  const allTechnologies = Object.values(technologies).flatMap((category) =>
    Object.values(category)
  );

  return (
    <div className="grid grid-cols-5 place-items-center justify-center h-full gap-4 md:gap-0">
      {allTechnologies.map((tech, index) => (
        <FollowerPointerCard title={tech.name} key={"tech-" + index}>
          <motion.div className="transition-colors duration-200">
            <tech.icon
              size={42}
              className="transition-all duration-200 md:grayscale hover:grayscale-0"
            />
          </motion.div>
        </FollowerPointerCard>
      ))}
    </div>
  );
};

const FavoriteTool = () => {
  return (
    <div className="grid place-items-center justify-center h-full overflow-hidden relative">
      <NeovimOriginalWordmark
        size={100}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

const FavoriteLanguage = () => {
  return (
    <div className="flex gap-2 items-center justify-center h-full">
      <TypescriptOriginal size={28} />
      <span className="font-bold text-foreground/70">TypeScript</span>
    </div>
  );
};

const FunFact = dynamic(() => Promise.resolve(FunFactComponent), {
  ssr: false,
});

const FunFactComponent = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (textRef.current && isMounted) {
      const textWidth = textRef.current.offsetWidth;

      controls.start({
        x: [30, -textWidth / 3],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        },
      });
    }
  }, [text, controls, isMounted]);

  return (
    <div className="text-nowrap relative overflow-hidden text-foreground/70">
      <div className="absolute left-0 w-[100px] h-full z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 w-[100px] h-full z-10 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        ref={textRef}
        className="whitespace-nowrap inline-flex gap-8"
        initial={{ x: 30 }}
        animate={isMounted ? controls : {}}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};
