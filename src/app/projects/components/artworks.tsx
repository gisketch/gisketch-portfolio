"use client";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { ArtworkModal } from "./artworks/artwork-modal";

const ArtDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const artworks = [
  {
    id: 1,
    content: (
      <ArtDescription
        title="Mikasa and Eren"
        description="My depiction of the final scene of Mikasa and Eren."
      />
    ),
    className: "md:col-span-7 md:row-span-2",
    thumbnail: "/art/6.webp",
  },
  {
    id: 4,
    content: (
      <ArtDescription
        title="Jiji"
        description="Me practicing my digital painting skills. Decided to paint someone very special to me."
      />
    ),
    className: "md:col-span-4 md:row-span-3",
    thumbnail: "/art/4.webp",
  },
  {
    id: 2,
    content: (
      <ArtDescription
        title="Breath of the Wild Landscape"
        description="I love BotW so much! This is my version of the promotional image of BotW in flat style."
      />
    ),
    className: "md:col-span-4 md:row-span-1",
    thumbnail: "/art/2.webp",
  },
  {
    id: 5,
    content: (
      <ArtDescription
        title="Stylized Portrait"
        description="Testing the waters with artstyle. I love the colors as well as the linework here."
      />
    ),
    className: "md:col-span-3 md:row-span-1",
    thumbnail: "/art/5.webp",
  },
  {
    id: 7,
    content: (
      <ArtDescription
        title="Makima"
        description="My favorite character in Chainsaw Man!"
      />
    ),
    className: "md:col-span-5 md:row-span-4",
    thumbnail: "/art/7.webp",
  },

  {
    id: 6,
    content: (
      <ArtDescription
        title="Zelda and Link"
        description="Such an emotional scene in BotW. Left an impact on me that I decided to make a fanart for it. This received 20k upvotes in reddit."
      />
    ),
    className: "md:col-span-6 md:row-span-2",
    thumbnail: "/art/1.webp",
  },
  {
    id: 3,
    content: (
      <ArtDescription
        title="Cozy Me"
        description="Me with my dog in my room."
      />
    ),
    className: "md:col-span-6 md:row-span-2",
    thumbnail: "/art/3.webp",
  },
];

export default function Artworks() {
  return (
    <Section className="items-start" blurInView={false}>
      <div className="flex flex-wrap items-end justify-between gap-4 w-full">
        <h1 className="text-h2 font-extrabold md:text-h1-desktop">
          My Artworks
        </h1>
        <Button
          size="sm"
          onClick={() =>
            (window.location.href = "https://instagram.com/gisketch")
          }
        >
          Follow me on Instagram
        </Button>
      </div>
      <div className="w-full mt-2 md:mt-6">
        <LayoutGrid cards={artworks} />
      </div>
      <ArtworkModal />
    </Section>
  );
}
