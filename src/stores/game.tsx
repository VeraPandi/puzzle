import { create } from "zustand";
import { ImageType } from "../services/api";

export interface GameStoreType {
   currentImageData: ImageType | undefined;
   setCurrentImageData: (currentImageData: ImageType | undefined) => void;
}

export const useGameStore = create<GameStoreType>((set) => ({
   currentImageData: undefined,

   setCurrentImageData: (currentImageData) => {
      set(() => ({ currentImageData }));
   },
}));
