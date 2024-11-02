import { create } from "zustand";

interface TerminalState {
  isTerminalInHero: boolean;
  setIsTerminalInHero: (value: boolean) => void;
  toggleTerminalInHero: () => void;
}

const useTerminalStore = create<TerminalState>((set) => ({
  isTerminalInHero: true,
  setIsTerminalInHero: (value) => set({ isTerminalInHero: value }),
  toggleTerminalInHero: () =>
    set((state) => ({ isTerminalInHero: !state.isTerminalInHero })),
}));

export default useTerminalStore;
