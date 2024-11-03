// components/ui/layout-grid.tsx
"use client";
import { useArtworkModal } from "@/store/use-artwork-modal";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const { showArtwork, artwork: selectedArtwork } = useArtworkModal();

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-11 auto-rows-[minmax(200px,auto)] max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={`grid-${card.id}`} className={card.className}>
          <motion.div
            className={cn(
              "relative overflow-hidden rounded-xl h-full w-full cursor-pointer",
              selectedArtwork?.id === card.id ? "bg-transparent" : "bg-white"
            )}
            layoutId={`card-${card.id}`}
            whileHover={{ y: -10 }}
            onClick={() => showArtwork(card)}
          >
            <ImageComponent
              card={card}
              isVisible={selectedArtwork?.id !== card.id}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({
  card,
  isVisible,
}: {
  card: Card;
  isVisible: boolean;
}) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-container`}
      className={cn(
        "relative w-full h-full",
        isVisible ? "visible" : "invisible"
      )}
    >
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className="object-cover w-full h-full rounded-lg"
        alt="thumbnail"
      />
    </motion.div>
  );
};
