import { create } from "zustand";

interface ArtworkModalStore {
  isOpen: boolean;
  artwork: any | null;
  showArtwork: (artwork: any) => void;
  closeArtwork: () => void;
}

export const useArtworkModal = create<ArtworkModalStore>((set) => ({
  isOpen: false,
  artwork: null,
  showArtwork: (artwork) => set({ isOpen: true, artwork }),
  closeArtwork: () => set({ isOpen: false, artwork: null }),
}));
