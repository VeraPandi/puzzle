import { create } from "zustand";
import { ImageCategoriesType } from "../services/api";

export interface UserType {
   email: string;
   id: string;
   images: ImageCategoriesType;
   username: string;
   games: {};
}

export interface UserStoreType {
   userData: UserType | null;
   setUserData: (userData: UserType | null) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
   userData: null,

   setUserData: (userData) => {
      set(() => ({ userData }));
   },
}));
