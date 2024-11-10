"use client";

import ResumeItem from "@/components/blocks/resume-item";
import Section from "@/components/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { resumeData, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

export default function ResumePage() {
  const defaultOpen = [
    "item-1",
    "item-2",
    "item-3",
    "item-4",
    "item-5",
    "item-6",
  ];
  const { intro, experiences, achievements, education, interests } = resumeData;

  return (
    <>
      <Section
        blurInView={false}
        id="resume"
        className="flex flex-row gap-8 w-full pt-12 text-small md:text-small-desktop relative"
      >
        <div className="flex flex-col gap-8 w-full">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={defaultOpen}
          >
            <AccordionItem value="item-1" className="w-full" id="intro">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">Intro</h2>
              </AccordionTrigger>
              <AccordionContent>
                <Markdown>{intro}</Markdown>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" id="experience">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">
                  Experience
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {experiences.map((item, index) => (
                  <ResumeItem data={item} key={index} isInResume />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" id="achievements">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">
                  Achievements
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {achievements.map((item, index) => (
                  <ResumeItem data={item} key={index} isInResume />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" id="education">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">
                  Education
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {education.map((item, index) => (
                  <ResumeItem data={item} key={index} isInResume />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" id="capabilities">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">
                  Capabilities
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <Capabilities />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" id="references">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">
                  References
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {testimonials.map((item, index) => (
                  <div key={index} className="pb-8">
                    <Markdown>{item.quote}</Markdown>
                    <div className="flex flex-col mt-4">
                      <p className="font-bold">{item.name}</p>
                      <p className="font-light">{item.title}</p>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" id="interests">
              <AccordionTrigger>
                <h2 className="text-h2 md:text-h2-desktop font-bold">
                  Interests
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <Markdown className="mb-4">{interests[0]}</Markdown>
                <Markdown>{interests[1]}</Markdown>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* TODO: Fix this */}
        <aside className="w-[240px] hidden md:block text-h4 text-muted-foreground">
          <div className="flex flex-col gap-2 h-screen items-start fixed top-24">
            <a href="#intro" className="hover:text-primary transition-colors">
              Intro
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#achievements"
              className="hover:text-primary transition-colors"
            >
              Achievements
            </a>
            <a
              href="#education"
              className="hover:text-primary transition-colors"
            >
              Education
            </a>
            <a
              href="#capabilities"
              className="hover:text-primary transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#references"
              className="hover:text-primary transition-colors"
            >
              References
            </a>
            <a
              href="#interests"
              className="hover:text-primary transition-colors"
            >
              Interests
            </a>
          </div>
        </aside>
      </Section>
    </>
  );
}

function Capabilities() {
  const { capabilities } = resumeData;
  return (
    <div className="flex flex-col">
      <CapabilitiesItem title="Languages" items={capabilities.language} />
      <CapabilitiesItem
        title="Programming Languages"
        items={capabilities.programmingLanguages}
      />
      <CapabilitiesItem title="Frameworks" items={capabilities.frameworks} />
      <CapabilitiesItem title="Services" items={capabilities.services} />
      <CapabilitiesItem title="Tools" items={capabilities.tools} />
    </div>
  );
}

function CapabilitiesItem({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-h3 font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2 mb-4">
        {items.map((item, index) => (
          <PillItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

// const pillStyles = [
//   "border border-terminal-oni-violet bg-terminal-oni-violet/30 text-terminal-oni-violet",
//   "border border-terminal-spring-green bg-terminal-spring-green/30 text-terminal-spring-green",
//   "border border-terminal-crystal-blue bg-terminal-crystal-blue/30 text-terminal-crystal-blue",
//   "border border-terminal-sakura-pink bg-terminal-sakura-pink/30 text-terminal-sakura-pink",
//   "border border-border bg-foreground/5 text-foreground",
// ];

function PillItem({ item, className }: { item: string; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-full px-2 py-[0.125rem] border border-border bg-foreground/5 text-foreground",
        className
      )}
    >
      {item}
    </div>
  );
}
