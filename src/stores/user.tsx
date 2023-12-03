import { create } from "zustand";
import { UserStoreType } from "../types";

export const useUserStore = create<UserStoreType>((set) => ({
   userData: undefined,

   setUserData: (userData) => {
      set(() => ({ userData }));
   },
}));
