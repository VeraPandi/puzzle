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
   userData: UserType | undefined;
   setUserData: (userData: UserType | undefined) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
   userData: undefined,

   setUserData: (userData) => {
      set(() => ({ userData }));
   },
}));
