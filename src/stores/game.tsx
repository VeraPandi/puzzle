import { create } from "zustand";
import { ImageType } from "../services/api";

export interface GameStoreType {
   currentImageData: ImageType | undefined;
   puzzleIsCompleted: boolean;
   successMessage: boolean;
   setCurrentImageData: (currentImageData: ImageType | undefined) => void;
   setPuzzleIsCompleted: (puzzleIsCompleted: boolean) => void;
   setSuccessMessage: (successMessage: boolean) => void;
}

export const useGameStore = create<GameStoreType>((set) => ({
   currentImageData: undefined,
   puzzleIsCompleted: false,
   successMessage: false,

   setCurrentImageData: (currentImageData) => {
      set(() => ({ currentImageData }));
   },

   setPuzzleIsCompleted: (puzzleIsCompleted) => {
      set(() => ({ puzzleIsCompleted }));
   },

   setSuccessMessage: (successMessage) => {
      set(() => ({ successMessage }));
   },
}));
