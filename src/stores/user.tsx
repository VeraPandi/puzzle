import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import { ImageCategoryType } from "../service/api";
import { ImageCategoryType } from "../service/mocks/api";

export interface UserType {
   name: string;
   images: ImageCategoryType[];
}

export interface UserStore {
   currentUser: string | null;
   users: Record<string, UserType>;
   addUser: (name: string) => void;
   loginUser: (name: string) => void;
   logoutUser: (currentUser: string) => void;
   removeUser: (name: string) => void;
   addImages: (name: string, image: ImageCategoryType) => void;
}

export const useUserStore = create<UserStore>()(
   persist(
      (set) => ({
         currentUser: null,
         users: {},

         addUser: (name) => {
            set((state) => ({
               users: {
                  ...state.users,
                  [name]: {
                     name: name,
                     images: [],
                  },
               },
            }));
         },

         loginUser: (name) => {
            set({ currentUser: name });
         },

         logoutUser: () => {
            set({ currentUser: null });
         },

         removeUser: (name) => {
            set((state) => {
               const newUsers = { ...state.users };
               delete newUsers[name];
               return { users: newUsers };
            });
         },

         addImages: (name, image) => {
            set((state) => ({
               users: {
                  ...state.users,
                  [name]: {
                     ...state.users[name],
                     images: [...state.users[name].images, image],
                  },
               },
            }));
         },
      }),
      {
         name: "vp-jigsawPuzzle-userAuthentication-storage",
         storage: createJSONStorage(() => localStorage),
      }
   )
);
