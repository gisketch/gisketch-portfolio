"use client";

import Section from "../section";
import { Tabs } from "../ui/tabs";
import ExpandableCardGrid from "@/components/blocks/expandable-card-grid";
import { projects } from "@/lib/data";
import { Button } from "../ui/button";
import { Folder } from "lucide-react";

const cards = (type: string) =>
  projects
    .filter((project) => project.type === type)
    .map((project) => ({
      title: project.name,
      technologies: project.technologies.map((tech: any) => {
        return {
          name: tech.name,
          icon: tech.icon,
        };
      }),
      src: project.img,
      ctaText: project.ctaLabel || "Live Demo",
      ctaLink: project.liveDemo,
      content: () => {
        return (
          <p>
            {project.description}
            <br />
            <br />
            <span className="text-foreground/[50%] text-small md:text-small-desktop">
              Built in {project.yearStarted}
            </span>
          </p>
        );
      },
    }));

export default function Projects() {
  return (
    <Section className="flex items-center" title="Selected Projects">
      <div className="flex flex-col gap-8 w-full">
        <Tabs
          containerClassName="justify-center "
          tabs={[
            {
              title: "Web",
              value: "web",
              content: <ExpandableCardGrid cards={cards("web")} />,
            },
            {
              title: "Game",
              value: "game",
              content: <ExpandableCardGrid cards={cards("game")} />,
            },
          ]}
        />
      </div>
      <Button variant="outline">
        See All <Folder />
      </Button>
    </Section>
  );
}
