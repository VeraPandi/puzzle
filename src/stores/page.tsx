import { create } from "zustand";

export interface PageStoreType {
   location: string | undefined;
   tag: string | {};
   menu: boolean;
   image: boolean;
   unsubscribeMessage: boolean;
   handleLocation: (location: string) => void;
   handleTag: (tag: string) => void;
   handleMenu: (state: boolean) => void;
   handleImage: (state: boolean) => void;
   handleUnsubscribeMessage: (state: boolean) => void;
}

export const usePageStore = create<PageStoreType>()((set) => ({
   location: undefined,
   tag: {},
   menu: false,
   image: false,
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

   handleImage: (image) => {
      set({ image });
   },

   handleUnsubscribeMessage: (unsubscribeMessage) => {
      set({ unsubscribeMessage });
   },
}));
