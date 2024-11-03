"use client";

import Section from "../section";
import ExpandableCardGrid from "@/components/blocks/expandable-card-grid";
import { projects } from "@/lib/data";
import { Button } from "../ui/button";
import { Folder } from "lucide-react";

const cards = (type: "game" | "web") =>
  projects
    .filter((project) => project.type === type)
    .map((project) => ({
      title: project.name,
      subtitle: project.subheading,
      type: project.type as "game" | "web",
      source: project.github || null,
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
            <span className="text-foreground/[70] text-small md:text-small-desktop">
              Built in {project.yearStarted}
            </span>
          </p>
        );
      },
    }));

export default function Projects() {
  return (
    <Section className="flex items-center" title="Selected Projects">
      <div className="flex flex-col gap-4 w-full">
        <ExpandableCardGrid cards={cards("web")} />
        <ExpandableCardGrid cards={cards("game")} />
      </div>
      <Button variant="outline" className="mt-8">
        See All <Folder />
      </Button>
    </Section>
  );
}
