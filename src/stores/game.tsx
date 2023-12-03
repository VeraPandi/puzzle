import { create } from "zustand";
import { GameStoreType } from "../types";

export const useGameStore = create<GameStoreType>((set) => ({
   currentImageData: undefined,
   levelNumber: undefined,
   puzzleIsCompleted: false,
   successMessage: false,

   setCurrentImageData: (currentImageData) => {
      set(() => ({ currentImageData }));
   },

   setLevelNumber: (levelNumber) => {
      set(() => ({ levelNumber }));
   },

   setPuzzleIsCompleted: (puzzleIsCompleted) => {
      set(() => ({ puzzleIsCompleted }));
   },

   setSuccessMessage: (successMessage) => {
      set(() => ({ successMessage }));
   },
}));
