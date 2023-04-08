import { create } from "zustand";
import { imageDatas } from "./images";

export interface ImageType {
   id: number;
   webformatURL: string;
}

export interface ImageCategoryType {
   animal: ImageType[];
   city: ImageType[];
   monument: ImageType[];
   oilPainting: ImageType[];
   illustration: ImageType[];
   iaIllustration: ImageType[];
   nature: ImageType[];
}

export interface ImageSliceType {
   imageDatas: ImageCategoryType;
   fetchImages: () => void;
}

export const createImageSlice = create<ImageSliceType>((set) => ({
   imageDatas: {
      animal: [],
      city: [],
      monument: [],
      oilPainting: [],
      illustration: [],
      iaIllustration: [],
      nature: [],
   },

   fetchImages: () => {
      const animal: ImageType[] = imageDatas.animal;
      const city: ImageType[] = imageDatas.city;
      const monument: ImageType[] = imageDatas.animal;
      const oilPainting: ImageType[] = imageDatas.city;
      const illustration: ImageType[] = imageDatas.animal;
      const iaIllustration: ImageType[] = imageDatas.city;
      const nature: ImageType[] = imageDatas.animal;

      set({
         imageDatas: {
            animal,
            city,
            monument,
            oilPainting,
            illustration,
            iaIllustration,
            nature,
         },
      });
   },
}));
