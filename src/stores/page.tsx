import { create } from "zustand";

export interface PageStoreType {
   tag: string | {};
   menu: boolean;
   unsubscribeMessage: boolean;
   handleTag: (tag: string) => void;
   handleMenu: (state: boolean) => void;
   handleUnsubscribeMessage: (state: boolean) => void;
}

export const usePageStore = create<PageStoreType>()((set) => ({
   tag: {},
   menu: false,
   unsubscribeMessage: false,

   handleTag: (tag) => {
      set({ tag });
   },

   handleMenu: (menu) => {
      set({ menu });
   },

   handleUnsubscribeMessage: (unsubscribeMessage) => {
      set({ unsubscribeMessage });
   },
}));
