import { create } from "zustand";

export const imageDatas = {
   animal: [
      {
         id: 1,
         webformatURL: "../images/img1.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img2.jpg",
      },
   ],

   city: [
      {
         id: 1,
         webformatURL: "../images/img2.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img1.jpg",
      },
   ],
   monument: [
      {
         id: 1,
         webformatURL: "../images/img1.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img2.jpg",
      },
   ],
   oilPainting: [
      {
         id: 1,
         webformatURL: "../images/img2.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img1.jpg",
      },
   ],
   illustration: [
      {
         id: 1,
         webformatURL: "../images/img1.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img2.jpg",
      },
   ],
   iaIllustration: [
      {
         id: 1,
         webformatURL: "../images/img2.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img1.jpg",
      },
   ],
   nature: [
      {
         id: 1,
         webformatURL: "../images/img1.jpg",
      },
      {
         id: 2,
         webformatURL: "../images/img1.jpg",
      },
   ],
};

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
