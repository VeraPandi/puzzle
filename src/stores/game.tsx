import { create } from "zustand";
import { ImageType } from "../services/api";

export interface GameStoreType {
   currentImageData: ImageType | undefined;
   levelNumber: number | undefined;
   puzzleIsCompleted: boolean;
   successMessage: boolean;
   setCurrentImageData: (currentImageData: ImageType | undefined) => void;
   setLevelNumber: (levelNumber: number | undefined) => void;
   setPuzzleIsCompleted: (puzzleIsCompleted: boolean) => void;
   setSuccessMessage: (successMessage: boolean) => void;
}

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
