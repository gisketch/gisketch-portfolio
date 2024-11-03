"use client";

import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Heading() {
  return (
    <Section contentClassName="mt-12 md:mt-24 items-start flex flex-col gap-8">
      <Button onClick={() => (window.location.href = "/")}>Back to Home</Button>
      <h1 className="text-h2 font-bold sm:text-h1 md:text-h1-desktop mt-4 sm:mt-8">
        Welcome to My Creative Corner! 👋
      </h1>
      <div className="text-h2 font-bold sm:text-h1 md:text-h1-desktop text-foreground/75 dark:text-foreground/60">
        You&apos;ll find most of my code adventures on{" "}
        <LinkPreview
          url="https://github.com/gisketch"
          className="text-terminal-ronin-yellow"
        >
          GitHub
        </LinkPreview>
        . I share my artwork on{" "}
        <LinkPreview
          url="https://instagram.com/gisketch"
          className="text-terminal-sakura-pink"
        >
          Instagram
        </LinkPreview>
        , and occasionally post animations on{" "}
        <LinkPreview
          url="https://youtube.com/@gisketch"
          className="text-terminal-peach-red"
        >
          YouTube
        </LinkPreview>
        .
      </div>
      <p className="text-h2 font-bold sm:text-h1 md:text-h1-desktop text-foreground/75 dark:text-foreground/60">
        Feel free to scroll down and check out what I&apos;ve been working on!
      </p>
    </Section>
  );
}
