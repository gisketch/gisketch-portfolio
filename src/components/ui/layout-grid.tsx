"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected] = useState<Card | null>(null);
  const [lastSelected] = useState<Card | null>(null);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-11 auto-rows-[minmax(200px,auto)] max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
            whileHover={{ y: -10 }}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-container`}
      className="relative w-full h-full"
    >
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className="object-cover w-full h-full rounded-lg"
        alt="thumbnail"
        style={{ aspectRatio: "preserve" }}
      />
    </motion.div>
  );
};
