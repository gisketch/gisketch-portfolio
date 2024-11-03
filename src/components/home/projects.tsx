"use client";

import Section from "../section";
import ExpandableCardGrid from "@/components/blocks/expandable-card-grid";
import { projects } from "@/lib/data";
import { Button } from "../ui/button";
import { Folder } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <Section
      className="flex items-center"
      title="Selected Projects"
      blurInView={false}
    >
      <div className="flex flex-col gap-4 w-full">
        <ExpandableCardGrid cards={cards("web")} />
        <ExpandableCardGrid cards={cards("game")} />
      </div>
      <Button
        variant="outline"
        className="mt-0 md:mt-8"
        onClick={() => router.push("/projects")}
      >
        See All <Folder />
      </Button>
    </Section>
  );
}
