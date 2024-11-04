"use client";

import { testimonials } from "@/lib/data";
import Section from "../section";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Send } from "lucide-react";
import { ContactForm } from "./testimonials/contact-form";
import { useState } from "react";
import { Dialog, DialogTitle, DialogHeader, DialogContent } from "../ui/dialog";
import { FollowerPointerCard } from "../ui/following-pointer";
import { RainbowButton } from "../ui/rainbow-button";

const cards: {
  quote: React.ReactNode;
  name: string;
  title: string;
}[] = testimonials.map((testimonial) => ({
  name: testimonial.name,
  title: testimonial.title,
  quote: (
    <Markdown
      components={{
        strong: ({ ...props }) => <Highlight>{props.children}</Highlight>,
      }}
    >
      {testimonial.quote}
    </Markdown>
  ),
}));

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export default function Testimonials() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      title="Word on the Street"
      className="w-full h-full"
      contentClassName="flex flex-col h-full gap-8"
    >
      <div className="w-full h-80">
        <InfiniteMovingCards items={cards} />
      </div>
      <div className="w-full flex flex-col-reverse pt-4 md:pt-0 gap-8 items-center md:flex-row md:justify-between">
        <div className="relative group w-full flex justify-center items-center py-24 dark:bg-dot-white/40 bg-dot-black/60">
          {/* Vignette overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background))_120%)]" />
          {/* vignette top and bottom */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />

          <FollowerPointerCard title="dev@gisketch.com" hideCursor>
            <RainbowButton
              onClick={() => setOpen(true)}
              className="flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Let&apos;s connect</span>
            </RainbowButton>
          </FollowerPointerCard>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Let&apos;s Connect</DialogTitle>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </Section>
  );
}
