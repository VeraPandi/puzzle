import { create } from "zustand";
import { imageDatas } from "./images";

export interface ImageAuthorType {
   user: {
      name: string;
      username: string;
      links: {
         html: string;
      };
   };
}

export interface ImageType {
   id: number;
   urls: {
      regular: string;
      small: string;
   };
}

export interface ImageCategoriesType {
   [key: string]: ImageType[];
   animal: ImageType[];
   landscape: ImageType[];
   painting: ImageType[];
   digitalArt: ImageType[];
   graffiti: ImageType[];
   nature: ImageType[];
}

export interface ImageSliceType {
   imageDatas: ImageCategoriesType;
   fetchImages: () => void;
}

export const createImageSlice = create<ImageSliceType>((set) => ({
   imageDatas: {
      animal: [],
      digitalArt: [],
      graffiti: [],
      landscape: [],
      nature: [],
      painting: [],
   },

   fetchImages: () => {
      const animal: ImageType[] = imageDatas.animal;
      const digitalArt: ImageType[] = imageDatas.digitalArt;
      const graffiti: ImageType[] = imageDatas.graffiti;
      const landscape: ImageType[] = imageDatas.landscape;
      const nature: ImageType[] = imageDatas.nature;
      const painting: ImageType[] = imageDatas.painting;

      set({
         imageDatas: {
            animal,
            digitalArt,
            graffiti,
            landscape,
            nature,
            painting,
         },
      });
   },
}));
