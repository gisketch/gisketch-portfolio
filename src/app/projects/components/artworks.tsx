"use client";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";

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
        title="Mikasa - AOT Fanart"
        description="A tribute to Attack on Titan's strongest soldier, capturing her determination and fierce loyalty."
      />
    ),
    className: "md:col-span-7 md:row-span-2",
    thumbnail: "/art/6.webp",
  },
  {
    id: 4,
    content: (
      <ArtDescription
        title="Beautiful Girl Art"
        description="A portrait capturing the essence of beauty and grace, with attention to subtle emotional expressions."
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
        description="A minimalist interpretation of Hyrule's vast landscapes, showcasing the serene beauty of the game's open world."
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
        description="A contemporary take on portraiture, blending modern aesthetics with classical composition techniques."
      />
    ),
    className: "md:col-span-3 md:row-span-1",
    thumbnail: "/art/5.webp",
  },
  {
    id: 7,
    content: (
      <ArtDescription
        title="Makima Fanart"
        description="A haunting portrayal of Chainsaw Man's complex antagonist, emphasizing her mysterious and commanding presence."
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
        description="A romantic portrayal of the iconic duo from The Legend of Zelda series, capturing their eternal bond in a moment of peaceful connection."
      />
    ),
    className: "md:col-span-6 md:row-span-2",
    thumbnail: "/art/1.webp",
  },
  {
    id: 3,
    content: (
      <ArtDescription
        title="Cozy Art"
        description="A warm and inviting piece that embodies the essence of comfort and tranquility in everyday moments."
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
    </Section>
  );
}
