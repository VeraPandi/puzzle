import { create } from "zustand";

export interface PageStoreType {
   location: string | undefined;
   tag: string | {};
   menu: boolean;
   unsubscribeMessage: boolean;
   handleLocation: (location: string) => void;
   handleTag: (tag: string) => void;
   handleMenu: (state: boolean) => void;
   handleUnsubscribeMessage: (state: boolean) => void;
}

export const usePageStore = create<PageStoreType>()((set) => ({
   location: undefined,
   tag: {},
   menu: false,
   unsubscribeMessage: false,

   handleLocation: (location) => {
      set({ location });
   },

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
